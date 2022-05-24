---
title: "Using Coalton to Implement a Quantum Compiler: Part 2 of 2"
date: 2022-05-20
---

By [Elias Lawson-Fox](https://github.com/eliaslfox), [Aidan Nyquist](https://github.com/aijony), and [Robert Smith](https://twitter.com/stylewarning)

***

_This is the second part of a two-part series on using Coalton to build a quantum compiler called quilc. If you missed it, the first part is [here](???)._

***

## Efficiency concerns of abstraction + indirection + polymorphism

The correctness of a compiler, and the ease with which one obtains correctness, are only part of the story of practical compiler development. Anybody who has worked on big C++ codebases knows that _compilation speed_ is an enormous practical factor, as well. The speed of quilc is no exception, despite the quality and optimality of its output.

Coalton compiles to Common Lisp. A statically typed language being compiled to a dynamically typed language seems like a raw deal. We went through the effort of ascertaining the type of every term in our program, and we'll just throw it away?

Of course not. Fortunately, Common Lisp allows the programmer to annotate types. The subset of Common Lisp's type system that permits optimizations for speedy code is, for the most part, limited to monomorphic machine, record, and array types. Polymorphism is not expressed in Common Lisp's type system in a way that is practically useful.

Since Coalton knows the type of everything, it can annotate these types in the resulting Common Lisp code. When the code is monomorphic, the Common Lisp compiler will be able to produce fast code.

The story is a little more nuanced with polymorphic code. Coalton supports functions that have either *parametric polymorphism* (one function implementation that supports many types), *ad hoc polymorphism* (a single function name that has many implementations depending on the argument and result types), or both.

A function like `flip` is parametrically polymorphic:

```lisp
> (type-of 'flip)
∀ :A :B :C. ((:A → :B → :C) → :B → :A → :C)
```

Flip can take _any_ two-argument function (taking types `:A` and `:B`), and produce a new function with the arguments flipped (thus taking `:B` and `:A`). It's not too much of a problem compiling this kind of parametric polymorphism in efficient Common Lisp.

Similarly, a function like `+` is ad-hoc-polymorphic:

```lisp
> (type-of '+)
∀ :A. NUM :A ⇒ (:A → :A → :A)
```

This is because how `+` works depends on the type of `:A`. The implementation of `Integer` addition is certainly different from the implementation of `AlgNum` addition. Since we need to be able to work with different implementations of `+` corresponding to different data types at run-time, optimization is more difficult.

Coalton implements ad hoc polymorphism with something that roughly looks like a "vtable"-approach: it passes around tables—known to functional compiler engineers as *dictionaries*—of concrete method implementations to the callees, which they can draw from and call. So, for example, a function that uses the `+` operator will, at run-time, be suppled a table saying "this is how you implement `+` for an `integer`" when `+` is happens to actually get called on an `integer`. Since this is a dynamic thing, we pay the relatively steep penalties of constructing these dictionaries and making indirect calls into them.

As such, we've implemented optimizations for a few common sources of inefficiency. We'll describe two of them: _monomorphization_ and _specialization_.

### Monomorphization: Opportunistically eliminating polymorphism when it's not needed

One way to eliminate polymorphism altogether is to _monomorphize_ the code. Coalton has special handling for code that's written monomorphically—code that is not polymorphic—even if it makes use of either parametric or ad hoc polymorphic code.

First, the dictionaries that may be present in ad hoc polymorphic code are constructed as early as possible so that they're not re-constructed on-the-spot every time they're needed. This is a process is implemented with techniques called *hoisting* and *deduplication*.

Second, when it's statically detected that a method call is monomorphic, it eliminates the need for dictionaries altogether. Consider a function that evaluates a quadratic polynomial:
$$
\mathrm{quad}(a,b,c,x):=ax^2+bx+c
$$
If we implement this in Coalton in a generic way, it looks like this:

```lisp
(declare square (Num :t => :t -> :t))
(define (square x)
  (* x x))

(declare quad-poly (Num :t => :t -> :t -> :t -> :t -> :t))
(define (quad-poly a b c x)
  (+ (* a (square x))
     (+ (* b x)
        c)))
```

This allows one to do a fused multiply-add on any numerical type. However, if we were to `(cl:disassemble #'quad-poly)`, we would see a 400ish-byte function, with lots of indirect function calls. This is because the roughly equivalent Lisp looks like this:

```lisp
(DEFUN QUAD-POLY (TABLE A B C X)
  (POLY-+ TABLE (POLY-* TABLE A (SQUARE TABLE X))
                (POLY-+ TABLE (POLY-* TABLE B X)
                              C)))
```

The `POLY-+` here is a function that _looks up the specific `+` implementation in `TABLE`_ and then calls it. Something like:

```lisp
(DEFUN POLY-+ (TABLE A B)
  (FUNCALL (LOOKUP-+ TABLE) A B))
```

Likewise for `POLY-*`.

Now let's see what happens if we have the same function but it's monomorphic on `single-float`s.

```lisp
(declare quad-mono (single-float -> single-float -> single-float -> single-float
                                 -> single-float))
(define (quad-mono a b c x)
  (+ (* a (square x))
     (+ (* b x)
        c)))
```

Now the disassembly is shorter and more efficient with just around 130 bytes.

```lisp
> (cl:disassemble #'quad-mono)
; disassembly for QUAD-MONO
; Size: 129 bytes. Origin: #x53B6E339                         ; QUAD-MONO
; [...snip...]
; 41:       488B0560FFFFFF   MOV RAX, [RIP-160]               ; load single-float dictionary
; [...snip...]
; 5F:       B882C24650       MOV EAX, #x5046C282              ; #<FDEFN SQUARE>
; 64:       FFD0             CALL RAX
; [...snip...]
; 87:       0FC6D2FD         SHUFPS XMM2, XMM2, #4r3331
; 8B:       F30F59D5         MULSS XMM2, XMM5
; 8F:       66490F6EC8       MOVQ XMM1, R8
; 94:       0FC6C9FD         SHUFPS XMM1, XMM1, #4r3331
; 98:       F30F59CC         MULSS XMM1, XMM4
; 9C:       F30F58CB         ADDSS XMM1, XMM3
; A0:       F30F58CA         ADDSS XMM1, XMM2
; [...snip...]
```

We see we have efficient floating point instructions `ADDSS` and `MULSS`, but we also see we still have to load a dictionary. We still have to load a dictionary because Coalton can only optimize monomorphic code of _just_ the function you've written (`quad-mono`), and not any of the functions deeper (`square`) in the call stack. This is due to the fact that those functions have already been compiled. So to make this easier, we introduced the `monomorphize` directive. Now one can write:

```lisp
(monomorphize)
(declare quad-mono (single-float -> single-float -> single-float -> single-float
                                 -> single-float))
(define quad-mono quad-poly)
```

Not only does `monomorphize` produce a monomorphic variant for the function at hand, but it also monomorphizes _the entire call-tree_. So in most cases, `monomorphize` can take an arbitrarily generic function and completely eliminate the run-time cost of polymorphism. This is one approach to producing _extremely_ fast code. 

### Specialization: Allowing custom implementations of polymorphic functions for monomorphic cases

The kind of polymorphism allowed in Coalton allows for easy and succinct code. We can write arithmetic code that works on _anything_ that implements arithmetic. Using monomorphization, we can even eliminate extraordinary amounts of overhead.

But, practically speaking, there's still something that's not ideal. While a generic implementation of a function is often useful and good enough, sometimes a more specialized implementation is more suitable.

For instance, suppose we have a very general `quotient` function:

```lisp
(declare quotient ((Num :a) (Ord :a) => :a -> :a -> Integer))
(define (quotient num den)
  (let ((rec (fn (num quo)
               (if (< num den)
                   quo
                   (rec (- num den) (1+ quo))))))
    (rec num 0)))
```

This is very generic, and works on any `Num` type. It only relies on comparison and subtraction, so it works for basically everything:

```lisp
> (coalton (quotient 7.2 2.0))
3
> (coalton (quotient 72/10 2/1))
3
> (coalton (quotient 72 20))
3
```

But it's woefully inefficient. It takes about 2 seconds for 10 million quotients.

```
> (cl:time (cl:loop :repeat 10000000
                    :do (coalton (quotient 72 20))))
Evaluation took:
  1.908 seconds of real time
  1.916346 seconds of total run time (1.903973 user, 0.012373 system)
  [ Run times consist of 0.012 seconds GC time, and 1.905 seconds non-GC time. ]
  100.42% CPU
  4,581,154,006 processor cycles
  1,920,011,616 bytes consed
```

We could spend time trying to improve the algorithm, but we could also use an implementation we know to work better for certain data types. In Common Lisp, ee have `cl:floor` which computes this very efficiently for integers.

```lisp
(declare efficient-quotient (Integer -> Integer -> Integer))
(define (efficient-quotient num den)
  (lisp Integer (num den)
    (cl:values (cl:floor num den))))
```

Out of the gate, without any sort of optimization policy, it's 10 times faster:

```
> (cl:time (cl:loop :repeat 10000000
                    :do (coalton (efficient-quotient 72 20))))
Evaluation took:
  0.186 seconds of real time
  0.186062 seconds of total run time (0.185818 user, 0.000244 system)
  100.00% CPU
  446,449,304 processor cycles
  0 bytes consed
```

We can tell Coalton to use this function specifically when we have `Integer -> Integer -> Integer` via _specialization_. We just supply the `specialize` directive and what function to use in the specialized case, like so:

```lisp
(specialize quotient efficient-quotient (Integer -> Integer -> Integer))
```

This tells Coalton to use `efficient-quotient` instead of `quotient` when Coalton finds `quotient` to unify as `Integer -> Integer -> Integer`. Now if we re-run the `quotient` benchmark, we get:

```
> (cl:time (cl:loop :repeat 10000000
                    :do (coalton (quotient 72 20))))
Evaluation took:
  0.187 seconds of real time
  0.187526 seconds of total run time (0.186241 user, 0.001285 system)
  100.53% CPU
  449,666,848 processor cycles
  0 bytes consed
```

Perhaps the most interesting part of this efficiency work is the interplace between `specialize` and `monomorphize`. Suppose you have a polymorphic function `f` that's doing a lot of math, and deep in the call tree you call `quotient`. *If you monomorphize `f` with the right type, the call to `quotient` several hops away in the call tree will **automatically** get specialized!* In short, with a little bit of programmer input, Coalton will try really hard to generate the most efficient version of code that's possible.

These features turn out to be critical in making the discrete compilation facility in quilc performant enough for use by the rest of the compiler.

## Onward

It's remarkable that Coalton has come to a point that 4,000 lines of complicated mathematical code to implement discrete compilation can not only run, but run correctly *and* run efficiently. Coalton is still evolving in order to make programs like these and others faster to write and faster to execute, without compromising on correctness.

Discrete compilation in quilc has been in the works for a while, starting during investigations of the Solovay-Kitaev algorithm during a summer internship at Rigetti Computing many years ago. The development of Coalton and catalyzing the implementation of discrete compilation was supported by [HRL Laboratories quantum computing group](https://quantum.hrl.com/). We especially acknowledge Erik Davis and Brendan Pawlowski.

The Coalton developement team is always looking for and excited by improvements to the language, especially in the standard library. If you're interesting in helping out with Coalton, please join the [Discord]()!