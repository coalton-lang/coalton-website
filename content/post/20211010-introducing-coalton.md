---
title: "Introducing Coalton: How to Have Our (Typed) Cake and (Safely) Eat It Too, in Common Lisp"
date: 2021-09-10
---

By [Robert Smith](https://twitter.com/stylewarning), [Elias Lawson-Fox](https://github.com/eliaslfox), [Cole Scott](https://github.com/colescott)

*Updated July 1, 2025 by Robert Smith.*

## Introduction

Coalton is a statically typed functional programming language built with Common Lisp. We can load it like a normal Lisp library.

```
CL-USER> (asdf:load-system "coalton")
CL-USER> (in-package #:coalton-user)
COALTON-USER>
```

This is Coalton computing Fibonacci numbers by exponentiating *functions* (not numbers!):

```lisp
(coalton-toplevel
  (declare function-power (Integer -> (:t -> :t) -> (:t -> :t)))
  (define (function-power n f)
    (if (<= n 0)
        id
        (compose f (function-power (1- n) f))))
                
  (declare fib-step ((Tuple Integer Integer) -> (Tuple Integer Integer)))
  (define (fib-step (Tuple a b))
    (Tuple b (+ a b)))
                
  (declare fib (Integer -> Integer))
  (define (fib n)
    (fst ((function-power n fib-step) (Tuple 0 1)))))
```

This is Coalton greeting you by making native use of Common Lisp functions:

```lisp
(coalton-toplevel
  (declare out (String -> Unit))
  (define (out s)
    (lisp Unit (s)
      (cl:write-string s) ; <-- These lines are Common Lisp
      Unit))              ; <--

  (declare hello (String -> Unit))
  (define (hello name)
    (out "Hello, ")
    (out  name)))
```

This is Coalton detecting a type error at *compile time*:

```lisp
(coalton-toplevel
  (define (bad-hello name)
    (out (concat "Hello, " name))))
                  
; error: Type mismatch
;   --> COALTON-TOPLEVEL (/private/var/tmp/slimevRMH15):3:19
;    |
;  3 |      (OUT (CONCAT "Hello, " NAME))))
;    |                   ^^^^^^^^^ Expected type '(LIST (LIST :A))' but got type 'STRING'
```

The Coalton function `concat` is for a `List`-of-`List`s!

This is Coalton computing the discriminant of a quadratic polynomial:

```
(coalton-toplevel
  (define (discriminant a b c)
    (- (* b b) (* 4.0 (* a c)))))
```

This is the fully native ARM64 assembly code for this function.

```
COALTON-USER> (cl:disassemble #'discriminant)
; disassembly for DISCRIMINANT
; Size: 60 bytes. Origin: #x7018A76F58
; 58:       AA0A40F9         LDR R0, [THREAD, #16]
; 5C:       4A0B00F9         STR R0, [CFP, #16]

; 60:       8108231E         FMUL S1, S4, S3
; 64:       0210221E         FMOV S2, #4.0
; 68:       2108221E         FMUL S1, S1, S2
; 6C:       0208201E         FMUL S2, S0, S0
; 70:       4138211E         FSUB S1, S2, S1

; 74:       2100261E         FMOV WNL1, S1
; 78:       217C60D3         LSL NL1, NL1, #32
; 7C:       2A640091         ADD R0, NL1, #25
; 80:       FB031AAA         MOV CSP, CFP
; 84:       5A7B40A9         LDP CFP, LR, [CFP]
; 88:       BF0300F1         CMP NULL, #0
; 8C:       C0035FD6         RET
; 90:       E00120D4         BRK #15
```

Notice how it is essentially composed of direct floating-point assembly instructions.

Though the core of Coalton's power is defined in the packages `#:coalton` and `#:coalton-prelude`, many other functions and data structures are spread across its standard library, imported as needed. Here is a typical package definition that nicknames the standard library functionality for math, strings, and lists:

```
(cl:defpackage #:coalton-intro
  (:use #:coalton #:coalton-prelude)
  (:local-nicknames (#:math #:coalton-library/math)
                    (#:str #:coalton-library/string)
                    (#:list #:coalton-library/list)))
```

In fact, we will use this package definition for the rest of this post.

```
COALTON-USER> (cl:in-package #:coalton-intro)
COALTON-INTRO>
```

Coalton embraces the three S's of typing discipline: *Strict*, *Static*, and *Strong*. If you know Standard ML, OCaml, Haskell, Elm, or Scala, then you'll already be familiar with the feel of Coalton. Coalton doesn't aim to be an independent language from Common Lisp, but instead to augment it. In fact, Coalton is a language embedded *inside of* Lisp, so Coalton makes use of all of Lisp's already-available tooling. We want the freedom and agility of dynamic, interactive, and incremental development, with the safety and expressivity of a powerful type system. Normally these are at odds, but we think that—with Coalton—we can have our cake and eat it too. 

We believe Coalton will fundamentally change the way we write Common Lisp.

## Isn't Common Lisp Supposed to Be Dynamic?!

Common Lisp is renowned for being a dynamic language; its type system, its featureful object system, its error-handling system (also known as the *condition system*), and its syntactic foundation of S-expressions all contribute to the language's dynamic nature. In Lisp, at *run-time*, it's possible to re-define classes on-the-fly. The very fact that types can be re-defined during program execution seems to indicate that type and language dynamicism is the only way with Lisp.

However, there is a lot of evidence that Lisp benefits from statically declared types. First, Lisp already has a built-in feature for declaring types, `declare`, which can be used to not only improve the correctness of your code by (possibly) installing run-time checks, but also to drastically increase performance. Second, Lisp implementations like CMUCL and SBCL have rich support for type inference and static type checking. Most SBCL users would positively attest to the benefits of SBCL's type checker. As such, it seems reasonable that there's plenty of room to have benefits of dynamicism and staticism in the same language.

Dynamicism, at the type level and otherwise, is part of Lisp's DNA, and so we believe it's futile to attempt to add any sort of type system to on top of ordinary Common Lisp that tries to strong-arm its own built-in system. If we are correct in this belief, this means that the usual approach to "gradual typing" simply isn't practical with modern Lisp codebases.

Our approach is to have a small, easy-to-understand language that can live *within* Common Lisp, that can be type checked using advanced techniques, that doesn't need wholesale adoption, and that can easily interoperate with the rest of the Common Lisp program. It shouldn't be difficult or computationally inefficient to make use of this language within Lisp, or Lisp within this language.

This is what Coalton aims to be.

## What Can Coalton Do?

Coalton doesn't innovate on programming language theory or type systems. Even though it's quite tricky to implement, the technology behind Coalton has been understood for more than 25 years. What we do find innovative about Coalton, however, is the unlikely and generally seamless coexistence of a dynamically typed language and a statically typed one. Just about every benefit of Common Lisp, including its powerful tooling for truly incremental development, is automatically carried over into Coalton. In fact, a Coalton function like

```lisp
(define (stutter x)     ; Coalton
  (str:concat x x))
```

essentially compiles into the following Common Lisp code:

```lisp
(DEFUN STUTTER (X)      ; Common Lisp
  (CONCATENATE 'STRING X X))
```

It does so *within the ordinary compilation process for Common Lisp*. That's right. Lisp functions and Coalton functions are one in the same, and *no additional tools are needed*. Using Coalton is as ordinary as using any other Lisp library:

1. Add `#:coalton` to your ASDF dependencies,
2. Create a package and `:use` the packages `#:coalton` and `#:coalton-prelude` (but *not* `#:cl`),
3. Add whatever convenient standard library nicknames you want, and
3. Write Coalton code inside of `(coalton-toplevel ...)`.

From here, your development process is the exact same for any other Lisp program. That's truly all there is to it.

Let's walk through some of Coalton's headline features.

### Headline #1: Coalton's Type System

In terms of its type system, Coalton's closest cousin is Haskell. Coalton's compiler isn't as advanced as the state-of-the-art Glasgow Haskell Compiler, but Coalton does have the following features:

- Parametric polymorphism and type variables:

```lisp
  (coalton-toplevel

    ;; Note: Coalton has a built-in compose function
    (declare my-compose ((:b -> :c) -> (:a -> :b) -> (:a -> :c))) 
    (define (my-compose f g x) 
      (f (g x)))

    ;; Note: #:coalton-library/list contains its own length function
    (declare my-length (List :t -> UFix))
    (define (my-length l)
      (match l
        ((Nil)       0)
        ((Cons _ xs) (1+ (my-length xs))))))
```

  Here, the keywords `:a`, `:b`, `:c`, and `:t` are type variables.

- Truly parametric algebraic data types:

```lisp
  (coalton-toplevel
    (define-type Expr
      (Val Integer)
      (Add Expr Expr)
      (Mul Expr Expr))
  
    (define-type (BinaryTree :a)
      (Node :a (BinaryTree :a) (BinaryTree :a))
      (Leaf)))
```

- Type classes (both single- and multi-parameter):

```lisp
  (coalton-toplevel
    ;; Define a new type class "Evaluable"
    (define-class (Evaluable :s)
      (eval (:s -> Integer)))
  
    ;; Let Expr participate in the Evaluable type class.
    (define-instance (Evaluable Expr)
      (define (eval e)
        (match e
          ((Val i)     i)
          ((Add e1 e2) (+ (eval e1) (eval e2)))
          ((Mul e1 e2) (* (eval e1) (eval e2))))))
  
    ;; Num is a built-in type class. 
    (declare line ((Num :t) => (:t -> :t -> :t -> :t)))
    (define (line slope y-intercept x)
      (+ y-intercept (* slope x))))
```

- Higher-kinded types:

```lisp
  (coalton-toplevel
  
    ;; Note: Coalton features its own built-in Functor class
    (define-class (MyFunctor :F)
      (map1 ((:a -> :b) -> (:F :a) -> (:F :b))))
    
    (define-instance (MyFunctor Binary-Tree)
      (define (map1 f t)
        (match t
          ((Node v t1 t2) (Node (f v) (map1 f t1) (map1 f t2)))
          ((Leaf) Leaf)))))
```

- Full type inference:

```lisp
  > (coalton-toplevel
      (define (f x y z)
        (if (< x y)
            (+ x z)
            (+ y z))))
  ; No value

  > (type-of 'f)
  ∀ :A. (NUM :A) (ORD :A) ⇒ (:A → :A → :A → :A)
```

  We've been writing out the types of functions with the `declare` operator, but unless disambiguation or type-specialization is needed, declaring types is not necessary due to Coalton's type inference capabilities.

All of these constructs are well-known in the functional programming community. Some languages refer to these concepts by different names, for instance, a "type class" closely resembles a "trait" in Rust, and an "algebraic data type" closely resembles a "case class" in Scala.

### Headline #2: Macros

Yes, Coalton has macros. Just define a normal Common Lisp macro and it'll Just Work™ in Coalton. In fact, Haskell's `do`-notation is implemented as an ordinary macro.

Why are macros intended to be written in Common Lisp and not Coalton? We think it's a pragmatic choice; Lisp is already great at manipulating S-expressions, and Coalton is not. However, since (spoiler alert) Coalton and Lisp can freely interop, you can implement your macro logic in Coalton if you want.

### Headline #3: Coalton-Lisp Interop

*Interop is discussed in more detail in [Coalton-Lisp Interoperation](./coalton-lisp-interop.md).*

We describe the Coalton-Lisp interop in the following way: the *Coalton-calls-Lisp bridge* and the *Lisp-calls-Coalton bridge*.

The Coalton-calls-Lisp bridge is pretty simple. Coalton has a special operator called `lisp` that allows arbitrary Lisp code to be embedded into Coalton. A lot of Coalton's standard library is written this way. For instance, the string library's `concat` function is written:

```lisp
(in-package #:coalton-library/string)

(coalton-toplevel

  (declare concat (String -> String -> String))
  (define (concat str1 str2)
    (lisp String (str1 str2)
      (cl:concatenate 'cl:string str1 str2))))
```

Coalton types can be linked to Lisp types by declaring `(repr :native <cl-type>)` before a `define-type` with no constructors:

```lisp
(coalton-toplevel

  (repr :native cl:hash-table)
  (define-type StringMap))
```

As a result, `StringMap` objects in Coalton are always of the Common Lisp type `cl:hash-table`. To construct and manipulate these types of objects, Coalton functions should be defined using the `lisp` special operator:

```lisp
(coalton-toplevel

  (declare make-table (Integer -> StringMap))
  (define (make-table size)
    (lisp StringMap (size)
      (cl:make-hash-table :test 'cl:equal
                          :size size)))
  
  (declare table-set (StringMap -> String -> String -> StringMap))
  (define (table-set tbl k v)
    (lisp StringMap (k v tbl)
      (cl:let ((table tbl))
        (cl:setf (cl:gethash k table) v)
        tbl)))
  
  (declare table-get (StringMap -> String -> (Optional String)))
  (define (table-get tbl k)
    (lisp (Optional String) (tbl k)
      (cl:let* ((table tbl)
                (val   (cl:gethash k table)))
        (cl:if (cl:null val)
               None
               (Some val))))))
```

Note: for a dynamic, free-wheeling lisp type, `(repr :native cl:t)` will allow objects of any Lisp type.

```
(coalton-toplevel

  (repr :native cl:t)
  (define-type AnyLispObject))
```

The Lisp-calls-Coalton bridge is just as easy with the `coalton` operator. For instance, we can call our `fib` function (and have type safety!) in Lisp by writing `(coalton (fib 10))`.

```lisp
> (coalton (coalton-user::fib 10))
55

> (coalton (coalton-user::fib 10.0))

;error: Type mismatch
;  --> <unknown>:1:14
;   |
; 1 |  (coalton (fib 1.0))
;   |                ^^^ Expected type 'INTEGER' but got type 'SINGLE-FLOAT'
;   [Condition of type COALTON-IMPL/TYPECHECKER/BASE:TC-ERROR]
```

More advanced users can interact with the Lisp-calls-Coalton bridge via the following aspects:

* All Coalton functions defined with `(define (f ...) ...)` correspond to Lisp functions of the same name.
* All Coalton functions and values correspond to Lisp values of the same name. So, `(define (f ...) ...)` will create both a Lisp function called `f` and a global lexical variable called `f`.
* Monomorphic Coalton functions—functions without any type parameterization—can be called directly. Polymorphic functions cannot (without supplying a special data structure).
  * If you want to expose a polymorphic function, we recommend creating a monomorphic variant.
* Coalton data types usually correspond to either structures or CLOS classes.

The functions `hello` and `fib` from the previous section are monomorphic, and thus can be called directly from Lisp, even without the `coalton` operator:

```
> (coalton-user::hello "world")
Hello, world
UNIT
> (coalton-user::fib 30)
832040
```

Though note that Coalton will _not_ type-check these function calls for you, since they're being called as Lisp code.

### Headline #4: Functional Programming Conveniences

Because a functional style of programming is expected with Coalton, several features are offered to make this experience nicer.

**Applicative-Order:** Coalton is unlike Haskell in this respect because evaluation in Coalton is applicative-order (also known as "strict").

**Immutable Data Structures:** The standard library contains Clojure-style advanced immutable data structures, such as `Seq` (relaxed radix balanced trees implementing immutable vectors) and `HashMap` (hash array mapped tries implementing immutable maps).

**Side-Effects Allowed:** Mutability and side-effects are discouraged as a matter of principle, but allowed. The standard library contains standard mutable data structures, such as `Cell`, `Vector`, and `HashTable`.

**Single Namespace:** Coalton only has a single function/value namespace. Some Lispers might call this a "Lisp-1". There is no need for `#'` or the like within Coalton.

**Curried Functions:** All functions are curried. Another way to say this is: Functions take exactly one argument. *However*, syntactically, we can write function applications in the usual ways expected by Lispers:

```lisp
(coalton-toplevel
  (define (f a b c)
    (+ a (+ b c)))
  
  (define x (f 1 2 3))      ; ok!
  (define y ((f 1 2) 3))    ; ok too!
  (define z (((f 1) 2) 3))) ; ok three!
```

Here, `x`, `y`, and `z` are all equal to `6`. As an optimization, Coalton compiles fully-saturated curried functions into non-closure-consing Lisp code if possible.

**Pattern Matching:** There is a `match` operator in Coalton that works as you'd expect, including `_` for wildcard matches. See the `eval` example above.

### Headline #5: Monads, If You Want Them

Monads and monad transformers are implemented in the standard library. Finally, Common Lisp now has *true* monads! Not CLOS hack-jobs that don't work.

Here's a little REPL example to compute the difference between the maximal and minimal element of a list:

```lisp
> (coalton-toplevel
    (declare list-width ((List Integer) -> (Optional Integer)))
    (define (list-width l)
      (do (max <- (list:maximum l))
          (min <- (list:minimum l))
        (pure (- max min)))))
LIST-WIDTH

> (list-width (make-list 1 5 2))
#.(SOME 4)

> (list-width (make-list))
#.NONE
```

The function `list-width` is using the fact that `Optional` (called `Maybe` in Haskell) implements the monad type class.

While Coalton has monads, they're not as necessary as in a language like Haskell, since Coalton is not a purely functional language.

## Does Coalton Really Work?

Coalton is used in production in the areas of quantum computing and defense.

As a sort of realistic programming stress test of Coalton, we implemented [*Typing Haskell in Haskell*](https://github.com/coalton-lang/coalton/tree/main/examples/thih) by Mark P. Jones in Coalton, and it was a no-nonsense, straightforward translation.

With that said, Coalton is software that's under continued development, and we expect it to stabilize over time.  There are bugs to squash and features to implement. From a UX perspective, there's a *lot* of ironing out that needs to be done. Nonetheless, it's good enough now to actually use it for real projects.

If you're interested in checking out Coalton, head on over to the [GitHub](https://github.com/coalton-lang/coalton)! We both welcome and look forward to your bug submissions and pull requests to help Coalton improve! Anything helps!

## Why Go Through All This Trouble?

Developing compilers for quantum computers is hard. There are no books or best practices about it. It's a rapidly evolving field of research, but simultaneously the field demands practical results for use on real quantum computers that exist today. Trying to make development of complex programs for quantum computers easier was the initial motivation for Coalton.

More specifically, one of the state-of-the-art optimizing quantum compilers is an open-source program called [QUILC](https://github.com/quil-lang/quilc) with a companion quantum computer simulator called the [Quantum Virtual Machine](https://github.com/quil-lang/qvm). Both of these programs are written in 100% Common Lisp, and contain a total of around 50,000 lines of sophisticated, mathematical, data structure–heavy code. And that excludes the plethora of first-party dependencies.

Common Lisp is a *fantastic* language for developing these programs; it's fast, stable, extremely flexible, and the developer experience is unmatched. But, both new and seasoned developers sometimes get tripped up and tangled in the web of complex data structures, and inadvertently introduce type errors that the relatively comprehensive test suite doesn't catch. In addition, such developers heavily rely on documentation strings ("docstrings") in order to discover what the probable inputs and outputs of the functions are, and those docstrings sometimes go stale.

Coalton's aim is to allow us to reap the benefits of Common Lisp, and not have to rewrite 50,000 lines of tricky code in order to realize some of the benefits offered by statically typed functional programming languages.

Despite still being in development, Coalton has already demonstrated success in implementing advanced new features in QUILC, including whole-program quantum circuit optimization, and number-theoretic discrete compilation.


## Acknowledgements

This work was supported in part by [HRL Laboratories quantum computing group](https://quantum.hrl.com/). Coalton was originally started as an open-source project by Robert Smith in 2018, and was renovated by Elias Lawson-Fox and Cole Scott during their 2021 summer internship at HRL. Development took off from there from a variety individuals in both commercial and open-source domains.

The work was inspired by many great projects and people that preceded it. In no particular order:

* Simon Peyton Jones, Mark P. Jones, Phil Wadler, Paul Hudak
* Luis Damas, Roger Hindley, Robin Milner, [HOL88](https://github.com/theoremprover-museum/HOL88), and the LCF theorem prover
* The [Glasgow Haskell Compiler](https://www.haskell.org/ghc/)
* [Yale Haskell](https://github.com/haskell-lisp/yale-haskell), a 30-year-old Haskell implementation in Common Lisp
* The [Standard ML of New Jersey](https://www.smlnj.org/)
* [MLTon](http://mlton.org/) (from which Coalton, neé CLTon, got its name)
* [ACL2](https://www.cs.utexas.edu/users/moore/acl2/)
* [Typed Racket](https://docs.racket-lang.org/ts-guide/index.html), which is an approach to add a more serious and gradual type system to a Lisp
* [Alexis King](https://twitter.com/lexi_lambda) and [Hackett](https://lexi-lambda.github.io/hackett/), a programmer and project which succeeded in bringing advanced features of Haskell to Racket
* [Stephen Diehl](https://twitter.com/smdiehl), who provided many invaluable references
* [Elm](https://elm-lang.org/)

Coalton has benefited from discussions, bug reports, and use by many members of the open-source community.
