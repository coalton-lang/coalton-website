---
title: "Using Coalton to Implement a Quantum Compiler"
date: 2022-05-20
---

By [Elias Lawson-Fox](https://github.com/eliaslfox), [Aidan Nyquist](https://github.com/aijony), and [Robert Smith](https://twitter.com/stylewarning)

## Common Lisp and the quilc compiler

One of the best optimizing compilers for quantum computing is called [quilc](https://github.com/quil-lang/quilc). It is written in Common Lisp and is capable of taking arbitrary quantum programs written in [Quil](https://quil-lang.github.io/), and compiling and optimizing them into code that conforms to just about any extant gate-based quantum computing architecture that exists today. Common Lisp has been a great choice, if even only for its interactive debugging facilities, for building a compiler for quantum computers.

But it hasn't been without trouble. Quilc is a large and complex program. While engineering quilc, we often lack confidence that the compiler is operating correctly. Confidence would wax and wane with the coming and going of different kinds of bugs, like

- classic type errors, "got X but expected Y",
- data structure inconsistency errors,
- numerical precision errors, and
- plain old wrong answers.

In addition to bugs, from time to time, quilc developers would feel that Common Lisp isn't allowing certain specific mathematical ideas to be clearly communicated, since Lisp's numerical tower is essentially "locked shut" by the language standard.

Programming language theorists around the world have been and continue to work to help programmers avoid these mistakes by making compilers smarter and programming languages more expressive. There are *vast* efforts in domains like formal verification, advanced type theory, proof assistants, and so on whose primary goal is to make writing safer, bug-free programs easier. One such research project that has been around since the 1990s is [ACL2](https://www.cs.utexas.edu/users/moore/acl2/), which is effectively a subset of Common Lisp that permits code to be _mechanically_ proven to be correct. Famously, after the Intel `FDIV` bug was discovered, ACL2 was used in 1995 to prove that floating point division of the AMD K5 processor was correct.

The suite of tools for working with Quil is currently around 50,000 lines of Common Lisp. Very little of it is fluff or boilerplate. At that size, it's not economical to rewrite wholesale, and it's not feasible to use existing theorem-proving tools to an extent that would address our concerns.

## Coalton to the rescue, maybe?

Coalton is a programming language that has been under development for years. It sought to improve things in a different way: Offer an extension to Common Lisp that allows many of the fruits of programming language theory and type theory to be used gradually. Coalton's approach is to introduce an ML-like language, that can be written within and totally interoperate with Common Lisp, that doesn't give up on the guarantees afforded by a strong, static, and strict type system.

Fast-forward some time, and Coalton made its debut. One could write code with the virtues and benefits of Standard ML, OCaml, or Haskell, straight inside of Common Lisp: single-namespace, currying, algebraic data types, type inference, etc. Here is a classic—albeit [inefficient](https://www.cs.hmc.edu/~oneill/papers/Sieve-JFP.pdf)—program to calculate a lazy, infinite sequence of primes, written in Coalton.

```lisp
(define-type (Lazy-Stream :t)
  (LCons :t (Unit -> Lazy-Stream :t)))

(define (extract n l)
  (if (<= n 0)
      Nil
      (match l
        ((LCons x xs) (Cons x (extract (- n 1) (xs)))))))

(define (numbers-from n)
  (LCons n (fn () (numbers-from (+ n 1)))))

(define (drop-if f l)
  (match l
    ((LCons x xs) (if (f x)
                      (drop-if f (xs))
                      (LCons x (fn () (drop-if f (xs))))))))

(define (multiple? m x)
  (== 0 (mod x m)))
  
(define primes
  (let ((drop-multiples
          (compose drop-if multiple?))
        (sieve
          (fn (l)
            (match l
              ((LCons p xs)
               (LCons p (fn () (sieve (drop-multiples p (xs))))))))))
    (sieve (numbers-from 2))))
```

We can convince ourselves that it's actually doing type inference by interactively inspecting some of the inferred types directly from the Common Lisp REPL.

```lisp
> (type-of 'multiple?)
(INTEGER → INTEGER → BOOLEAN)
> (type-of 'primes)
(LAZY-STREAM INTEGER)
> (type-of 'extract)
∀ :A. (INTEGER → (LAZY-STREAM :A) → (LIST :A))
> (type-of 'drop-if)
∀ :A. ((:A → BOOLEAN) → (LAZY-STREAM :A) → (LAZY-STREAM :A))
```

And, of course, we can convince ourselves that `primes` actually contains prime numbers.

```lisp
> (coalton (extract 10 primes))
(2 3 5 7 11 13 17 19 23 29)
```

As can be seen, the result of this Coalton computation is actually just a Lisp list. We could use this Coalton code anywhere in our Lisp program where we'd expect a Lisp list. While Coalton _code_ is cordoned off so that it can be fully and rigorously type checked, the Coalton runtime _is_ the Lisp runtime, so they cohabitate perfectly.

So, we have an expressive and relatively safe language which we can use in Lisp, but this doesn't magically make 50,000 lines of code safer. So, where do we start?

Our first approach was to take a small, relatively inconsequential module of quilc and slowly Coalton-ify it. The module has to do with a concept called "gate fusion", which takes quantum instructions and fuses them into a (hopefully) more efficient form. This module happens to do a lot of arrays-of-doubly-linked list manipulations. We wrote an array-of-double-linked-lists data structure in Coalton, ported the code, and ultimately, we weren't happy with the results. The code didn't shine. The virtues of mostly pure, statically typed functional programming didn't actually make the code any clearer. We were left with a mess of hacks, subcutaneous mutation, pointer-faking, and so on just to make this code work in Coalton.

What was to blame? Empty promises of functional programming? The complexity of the real world? We did a retrospective and concluded a few things.

First, the Coalton standard library was just too anemic. Standard, robust data structures didn't exist, and we had to scratch one out to get the job done, without a lot of regard to generality, efficiency, safety, etc. So, certainly, the standard library could be improved.

Second, "porting" idiomatic Common Lisp line-by-line probably isn't the right approach in general. A decent amount of idiomatic Lisp code relies on mutation and imperative loops. Doing a one-to-one port to Coalton is possible—even quite easy—but the result isn't satisfying.

Third, the specific module we ported mostly took existing data structures and modified them. The existing data structures weren't game to be touched, lest we wanted to modify a lot more of quilc to be Coalton-compatible. So, we had to write Coalton with one hand tied behind our back.

It was a valuable case study, and we learned a lot from it, but gaining knowledge is only as valuable as much as you can actually use it. We needed to do something different.

## Towards a Discrete Instruction Set for Quantum Computation

Most of the meat of a typical quantum program is comprised of operations that are often written as square matrices of complex numbers, and these square matrices have convenient mathematical properties. They're called "unitary matrices": they can be inverted, and they never stretch or shrink the vector they operate on. Quantum computers are theoretically able to execute quantum code that is equivalent to any sequence of any unitary matrices of arbitrary size (so long as it is a power-of-two). It doesn't matter if the matrix is $2\times 2$ or $256\times 256$, in principle, it's possible for a quantum computer to run a sequence of instructions that has the same operational effect as that matrix.

But just like ordinary computers, a quantum computer comes with only a few native operations built-in. Quantum computers typically have only a handful of them. For example, one set of four native operators used by an IBM quantum computer is:
$$
\begin{align*}
\mathrm{RX}_{\pm\pi/2} &:= \frac{1}{\sqrt 2}\begin{pmatrix}1 & \pm i \\ \pm i & 1\end{pmatrix}\\
\mathrm{RZ}_{\theta} &:= \begin{pmatrix}e^{-i\theta/2} & 0 \\0 & e^{i\theta/2}\end{pmatrix}\\
\mathrm{CNOT} &:= \begin{pmatrix}1 & 0 & 0 & 0\\0 & 1 & 0 & 0\\0 & 0 & 0 & 1\\0 & 0 & 1 & 0\end{pmatrix}
\end{align*}
$$
In this case, $\theta$ is actually parametric and can be any value between $0$ and $2\pi$.

It is a surprising and non-trivial fact that you can build *any* $2^n\times 2^n$ complex unitary matrix out of the above matrices by way of matrix multiplications and tensor products. For example, the relatively innocent-looking matrix
$$
\mathrm{CZ} := \begin{pmatrix}1 & 0 & 0 & 0\\0 & 1 & 0 & 0\\0 & 0 & 1 & 0\\0 & 0 & 0 & -1\end{pmatrix}
$$
can be written
$$
\mathrm{CZ} = \left[\mathrm{RZ}_{\pi}\otimes(\mathrm{RZ}_{\pi/2}\cdot\mathrm{RX}_{\pi/2}\cdot\mathrm{RZ}_{\pi/2})\right]
\cdot\mathrm{CNOT}\cdot
\left[\mathrm{RZ}_{\pi}\otimes(\mathrm{RZ}_{\pi/2}\cdot\mathrm{RX}_{\pi/2}\cdot\mathrm{RZ}_{\pi/2})\right]
$$
Notice how _only_ the aforementioned list of native operators, and how we _only_ used multiplication and tensor products.

(While it would be appealing to describe tensor products in more detail in this blog post, for the sake of brevity, we'll just consider them a separate kind of matrix multiplication.)

Finding decompositions of a given matrix into a collection of native operations is one of the big jobs of a quantum compiler. In fact, we computed the above using quilc:

```
$ echo 'CZ 1 0' | ./quilc --isa ibmqx5
RZ(pi) 1
RZ(pi/2) 0
RX(pi/2) 0
RZ(pi/2) 0
CNOT 1 0
RZ(pi/2) 0
RX(pi/2) 0
RZ(pi/2) 0
RZ(pi) 1
```

Here, the numbers `0` and `1` tell us the qubits that each native operation acts on.

Different quantum computers have a different set of native operators, so the compiler must be flexible and adaptive to that. This mathematical puzzle is already interesting and difficult, but lurking is also an engineering problem of great concern.

Almost every quantum computer today has some sort of _continuous_ operation—possibly many—like the $\mathrm{RZ}_\theta$ above. These continuous operations represent the analog nature of today's computers. Analog devices have their merits, but one thing analog hardware typically isn't good at is precision. While I might request the computer performs an $\mathrm{RZ}_{0.12345}$, due to the computer's physical nature, it might—for example—only accomplish something between an $\mathrm{RZ}_{0.11}$ and an $\mathrm{RZ}_{0.13}$. Quantum hardware engineers around the world, every day, are putting effort into improving the accuracy and precision of the native operations one does on a quantum computer, but it's well known that it'll never be possible to have _infinite_ precision, due simply to physical limitations.

This behooves us to ponder whether there can be some _discrete_ version of quantum computation by allowing only discrete operations to be run, where we do away with the free-wheeling continuous nature of some of the native operations, while managing to still perform _any_ quantum computation we'd like, even those from the world of continuous operations.

Fortunately, the answer to this is a resounding _yes_, with a small but reasonable caveat. Robert Solovay and Alexei Kitaev both independently and constructly proved this was possible in the mid-90s. Not only was it possible, it was efficient to calculate, at least as far as big-O is concerned. The one small hitch is this: It is not possible to find an _exact_ sequence of native operations to reconstruct an arbitrary one. Instead, we can only get _arbitrarily close_, at the expense of running more native operations.

This is perfectly sensible. If we want to do arbitrary precision arithmetic on an ordinary computer (like calculating billions of digits of $\pi$), we must use more CPU instructions. CPU instructions only let us do a relatively small collection of operations: basic arithmetic on "small" integers (integers less than $2^{64}$) and floating-point numbers. If we want to go beyond 64 bits of integer, or go beyond 16ish digits of floating-point mantissa, we need to spend more memory and more CPU instructions.

The Solovay-Kitaev algorithm is famously difficult to implement precisely, and relies on a great deal of pre-processing to accomplish, but it's useful both for its mathematical utility and its generality.

About 20 years after Solovay and Kitaev's work, Peter Selinger came up with another idea. Using a specific native operation set (called the Clifford+T set), and making careful use of algebraic number theory, not only can we have merely "good" big-O performance, but in fact, we could have nearly _optimal_ decompositions, off only by a constant number of operations. That is to say, not only does the algorithm run efficiently, it will also essentially produce the _shortest_ possible decomposition of an operator into the given native set. (Peter Selinger and Neil Ross were later able to modify the algorithm so that it produces *actually* optimal sequences... but you need a machine that can factorize integers to do that.)

## The Selinger Approach to Discretization

Selinger considers the following native operators:
$$
\begin{align*}
\mathrm{H} &:= \frac{1}{\sqrt 2}\begin{pmatrix}1 & 1 \\ 1 & -1\end{pmatrix}\\
\mathrm{S} &:= \begin{pmatrix}1 & 0 \\0 & i\end{pmatrix}\\
\mathrm{T} &:= \begin{pmatrix}1 & 0 \\0 & \sqrt{i}\end{pmatrix}
\end{align*}
$$
This is called the _Clifford+T set_. These operators have mathematical significance because (1) the $\mathrm{H}$ and $\mathrm{S}$ form a special algebraic space called the one-qubit Clifford group, and (2) $\mathrm{T}$ happens to equal $\sqrt{\mathrm{S}}$, and (3) arbitrary products of these operators form a _dense_ set of the unitary matrices. All the third point means to say is that theoretically, this is a suitable set of operators that can be used to approximate any $2\times 2$ unitary matrix to any degree of precision.

Next, Selinger turns to a result by Kliuchnikov, Maslov, and Mosca which says a given $2\times2$ matrix can be written precisely as a product of Clifford+T elements if and only if the matrix elements are all members of the number ring $R := \mathbb{Z}[\tfrac{1}{\sqrt 2}, i]$. So Selinger sets up the following goal: Try to write the problematic parametric gate $\mathrm{RZ}_\theta$  as a matrix
$$
\begin{pmatrix}
a & -b^*\\b & a^*
\end{pmatrix}
$$
with user-selectable precision, where $a$ and $b$ are elements of $R$, and $z^*$ represents the complex conjugate of $z$. If we can write this matrix, then we can use Kliuchnikov-Maslov-Mosca to write it in terms of Clifford+T. And if we can do _that_, then we can write any program with parametric $\mathrm{RZ}_\theta$ operators into an equivalent one (up to user-specified precision, at least) using only discrete operators.

Selinger succeeds at solving this problem, by turning that matrix problem into a Diophantine equation that has to be solved over a specific number ring, and coming up with an algorithm to solve that.

Since the two-qubit operators of usual interest are already discrete (like `CNOT`, `CZ`, etc.), this would make a fully discretized native gate set, so long as quantum computer implementers could supply the Clifford+T set as native operations.

## Coalton to the rescue, take two

Already, even without the gory details of _how_ to find the approximating matrix, we see we're in for quite a ride. There's a lot of machinery we'll need, but one piece that sticks out is the need to do arithmetic over the ring $\mathbb{Z}[\tfrac{1}{\sqrt{2}},i]$. If we let $\omega:=e^{i\pi/4}$ and observe that $\omega=(1+i)/\sqrt{2}$, then with a bit of exercise, we can see that elements of $\mathbb{Z}[\tfrac{1}{\sqrt{2}},i]$ all take the following form:
$$
\frac{a_0}{2^{n_0}}+\frac{a_1}{2^{n_1}}\omega+\frac{a_2}{2^{n_2}}\omega^2+\frac{a_3}{2^{n_3}}\omega^3,
$$
where $a_\bullet$ are integers and $n_\bullet$ are non-negative integers. If we take two elements of this form and add or multiply them, we'll always end back up in the same ring.

It turns out we also need to work in other rings, like the cyclomatic integers of degree 8 and the quadratic integers of $\sqrt{2}$. At least in principle, Common Lisp would have no trouble representing elements of any of these rings; just define some new classes, perhaps some new methods like `ring+` and `ring*`, and you're off to the races.

The trouble is that it's cumbersome. In Lisp, first, there's no way to integrate with the existing numerical operators; there is no way to "overload" the standard operator `cl:+` to work with different rings. Second, as explained in a previous blog post, there's no way to uniformly treat additive and multiplicative identity in a convenient fashion. Third, it gets very messy, with lots of casts, upconversions, downconversions, etc. It's very difficult to build a _new_ numerical tower atop of or aside Common Lisp's existing one.

Coalton, on the other hand, is based around a system of organized polymorphism that is _designed_ for this kind of extension, all in a type-safe context. For example, this ring of quadratic integers
$$
\mathbb{Z}[\sqrt{2}] = \left\{a + b\sqrt{2} : a,b\in \mathbb{Z}\right\}
$$
could be written in Coalton as

```lisp
  (define-type AlgInt (AlgInt Integer Integer))

  (define-instance (Eq AlgInt)
    (define (== a b)
      (match (Tuple a b)
        ((Tuple (AlgInt a1 a2) (AlgInt b1 b2))
         (and (== a1 b1) (== a2 b2))))))
  
  (define-instance (Num AlgInt)
    (define (+ a b)
      (match (Tuple a b)
        ((Tuple (AlgInt a1 a2) (AlgInt b1 b2))
         (AlgInt (+ a1 b1) (+ a2 b2)))))
    (define (- a b)
      (match (Tuple a b)
        ((Tuple (AlgInt a1 a2) (AlgInt b1 b2))
         (AlgInt (- a1 b1) (- a2 b2)))))
    (define (* a b)
      (match (Tuple a b)
        ((Tuple (AlgInt a1 a2) (AlgInt b1 b2))
         (AlgInt (+ (* a1 b1) (* 2 (* a2 b2)))
                 (+ (* a1 b2) (* a2 b1))))))
    (define (fromInt n)
      (AlgInt n 0)))
```

We can verify it works by seeing that $(1-2\sqrt{2})^2 = 9-4\sqrt{2}$:

```lisp
> (coalton (* (AlgInt 1 -2) (AlgInt 1 -2)))
#.(ALGINT 9 -4)
```

Since `Num` requires `fromInt` to be defined, any `Num` type, including our own `AlgInt`, permits overloading integer syntax. We don't have to laboriously write `(fromInt 2)` every time we want to use integer syntax as a shorthand for our `AlgInt` type.

```lisp
> (coalton (* 2 (AlgInt 0 -1)))
#.(ALGINT 0 -2)
```

As is to be expected at this point, functions on `AlgInt` are inferred appropriately.

```lisp
(define (algebraic-conjugate x)
  (match x
    ((AlgInt a b) (AlgInt a (negate b)))))
```

We can see that

```lisp
> (type-of 'algebraic-conjugate)
(ALGINT → ALGINT)
```

Modeling these algebras works out quite well, especially when we have more of them, matrices of them, vectors of them, polynomials of them, and so on.

Though perhaps not as effective as mathematics itself, Coalton's facilities handle the Selinger  Clifford+T decomposition algorithm handsomely. This lead to the introduction of a first-of-its-kind feature to a general-purpose quantum compiler: the ability to do discrete compilation of arbitrary quantum programs. This is now implemented as a part of the [`cl-quil/discrete` contrib module](https://github.com/quil-lang/quilc/tree/master/src/discrete) to quilc.

We can repeat the compilation of the `CZ` gate that we did before for the IBM chip instead for a made-up chip of two qubits that only supports the Clifford+T set.

```
$ echo 'PRAGMA TOLERANCE "0.001"; CZ 0 1' | ./quilc --isa discrete2
S 0
S 0
H 1
CNOT 0 1
H 0
T 0
S 0
H 0
S 0
S 0
H 0
T 0
S 0
H 0
H 1
```

Notice how every operation in the output is either `H`, `S`, `T`, or `CNOT`. There are only two differences in how we run the compiler between this and the previous IBM-chip compilation:

1. We had to specify the chip `discrete2`. (Quilc will be happy to construct a chip of any requested topology; this is just a convenient built-in.)
2. We had to specify a tolerance, here a discrete compilation accuracy within 0.1%.

We can do some interesting calculations, such as "how many gates does it take to approximate $\mathrm{XY}(\pi/6)$ to $10^{-6}$ accuracy?"

```
$ echo 'PRAGMA TOLERANCE "0.000001"; XY(pi/6) 0 1' | ./quilc --isa discrete2 | wc -l
     473
```

One particularly nice thing going on is that the whole machinery quilc uses top optimize programs automatically gets applied.

## Efficiency concerns of abstraction + indirection + polymorphism

The correctness of a compiler, and the ease with which one obtains it, are only part of the story of practical compiler development. Anybody who has worked on big C++ codebases knows that _compilation speed_ is an enormous practical factor, as well. The speed of quilc is no exception, despite the quality and optimality of its output.

Coalton is a language that effectively compiles to Common Lisp. A statically typed language being compiled to a dynamically typed language seems like a raw deal. We went through the effort of ascertaining the type of every term in our program, and we'll just throw it away?

Of course not. Fortunately, Common Lisp allows the programmer to specify type annotations to quantities. The subset of Common Lisp's type system that permits optimizations for speedy code is, for the most part, limited to monomorphic machine types. Compound types, or polymorphic types, are handled either very little or not at all.

So, the first piece of good news is that since Coalton knows the type of everything, and in principle, can annotate these types in the resulting Common Lisp code.

But the bad news is that, despite knowing types, Coalton is helpless in the presence of polymorphism. Even simple arithmetic is polymorphic:

```lisp
> (type-of '+)
∀ :A. NUM :A ⇒ (:A → :A → :A)
```

Coalton implements polymorphism with something that roughly looks like a "vtable"-approach: it passes around tables—known to functional compiler engineers as *dictionaries*—of concrete method implementations to the callees, which they can draw from and call. So, for example, a function that uses the `+` operator will, at run-time, be suppled a table saying "this is how you implement `+` for an `integer`" when `+` is happens to actually get called on an `integer`. Since this is a dynamic thing, we pay the relatively steep penalties of constructing these dictionaries and making indirect calls into them.

As such, we've implemented optimizations for a few common sources of inefficiency. We'll describe two of them: _monomorphization_ and _specialization_.

### Monomorphization: Opportunistically eliminating polymorphisms when it's not needed

First, the dictionaries are constructed as early as possible so that they're not re-constructed on-the-spot every time they're needed. This is a process known as "hoisting" and "deduplication".

Second, when it's statically detected that a function is monomorphic, it eliminates the need for dictionaries altogether. Consider the "fused multiply-add" function:
$$
\mathrm{fma}(a,b,c):=ab+c
$$
If we implement this in Coalton in a generic way, it looks like this:

```lisp
(declare fma-poly (Num :t => :t -> :t -> :t -> :t))
(define (fma-poly a b c)
  (+ c (* a b)))))
```

This allows one to do a fused multiply-add on any numerical type. However, if we were to `(cl:disassemble #'fma-poly)`, we would see a 200ish-byte function, with lots of indirect function calls. This is because the roughly equivalent Lisp looks like this:

```lisp
 (DEFUN FMA-POLY (TABLE A B C)
   (POLY-+ TABLE C (POLY-* TABLE A B)))
```

The `POLY-+` here is a function that _looks up the specific `+` implementation in `TABLE`_ and then calls it. Something like:

```lisp
(DEFUN POLY-+ (TABLE A B)
  (FUNCALL (LOOKUP-+ TABLE) A B))
```

Likewise for `POLY-*`.

Now let's see what happens if we have the same function but it's monomorphic on `single-float`s.

```lisp
(declare fma-mono (single-float -> single-float -> single-float -> single-float))
(define (fma-mono a b c)
  (+ c (* a b)))
```

Now the disassembly is so short and efficient, I can just show it:

```lisp
> (cl:disassemble #'fma-mono)
; disassembly for FMA-MONO
; Size: 25 bytes. Origin: #x53AE61F1                          ; FMA-MONO
; 1F1:       F30F59D1         MULSS XMM2, XMM1
; 1F5:       F30F58D3         ADDSS XMM2, XMM3
; [ ... snip ... ]
```

Literally, it's just two floating point instructions, `MULSS` and `ADDSS`, plus a function epilog to return the value.

It's still quite cumbersome, however, to have to define two identical functions, with one that has a monomorphic type annotation, just to get this functionality. So to make this easier, we introduced the `monomorphize` directive. Now one can write:

```lisp
(monomorphize)
(declare fma-mono (single-float -> single-float -> single-float -> single-float))
(define fma-mono fma-poly)
```

to get precisely the same effect.

The `monomorphize` directive actually has a greater superpower: Not only does it produce a monomorphic variant for the function at hand, but it also monomorphizes _the entire call-tree_. So in most cases, `monomorphize` can take an arbitrarily generic function and completely eliminate amy of the genericity for specific types of interest. This is one approach to producing _extremely_ fast code. 

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

It's remarkable that Coalton has come to a point that 4,000 lines of complicated mathematical code can not only run, but run correctly *and* run efficiently. Coalton is still evolving in order to make programs like these and others faster to write and faster to execute, without compromising on correctness.

Discrete compilation in quilc has been in the works for a while, starting during investigations of the Solovay-Kitaev algorithm during a summer internship at Rigetti Computing many years ago. The development of Coalton and catalyzing the implementation of discrete compilation was supported by [HRL Laboratories quantum computing group](https://quantum.hrl.com/). We especially acknowledge Erik Davis and Brendan Pawlowski.

The Coalton developement team is always looking for and excited by improvements to the language, especially in the standard library. If you're interesting in helping out with Coalton, please join the [Discord]()!