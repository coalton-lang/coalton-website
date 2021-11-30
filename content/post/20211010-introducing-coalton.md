---
title: "Introducing Coalton: How to Have Our (Typed) Cake and (Safely) Eat It Too, in Common Lisp"
date: 2021-09-10
---

By [Robert Smith](https://twitter.com/stylewarning), [Elias Lawson-Fox](https://github.com/eliaslfox), [Cole Scott](https://github.com/colescott)

## Introduction

Coalton is a statically typed functional programming language built with Common Lisp. This is Coalton computing Fibonacci numbers by exponentiating *functions* (not numbers!).

```lisp
(coalton-toplevel
  (declare function-power (Integer -> (:t -> :t) -> (:t -> :t)))
  (define (function-power n f)
    (let ((build (fn (n g)
            (if (== n 0)
                g
                (build (- n 1) (compose f g))))))
      (build n id)))
                
  (declare fib-step ((Tuple Integer Integer) -> (Tuple Integer Integer)))
  (define (fib-step x)
    (match x
      ((Tuple a b) (tuple b (+ a b)))))
                
  (declare fib (Integer -> Integer))
  (define (fib n)
    (fst ((function-power n fib-step) (Tuple 0 1)))))
```

This is Coalton greeting you by making native use of Common Lisp functions.

```lisp
(coalton-toplevel
  (declare print (String -> Unit))
  (define (print s)
    (lisp Unit (s)
      (cl:progn           ; <-\
        (cl:write-line s) ; <---- These lines are Common Lisp
        unit)))           ; <-/

  (declare hello (String -> Unit))
  (define (hello name)
    (print (concat-string "Hello, " name))))
```

This is Coalton detecting a type error at *compile time*.

```lisp
(coalton-toplevel
  (define (bad-hello name)
    (print (concat "Hello, " name))))
                  
; Failed to unify types STRING and (LIST (LIST :C))
; in unification of types (STRING → :A → :B)
;                     and ((LIST (LIST :C)) → (LIST :C))
; in definition of BAD-HELLO
; in COALTON-TOPLEVEL
```

The Coalton function `concat` is for a `List`-of-`List`s!

This is the fully native x86_64 assembly code for the Coalton function `hello`:

```
; disassembly for HELLO
; Size: 85 bytes. Origin: #x549F3586
; 86:       498B4510         MOV RAX, [R13+16]
; 8A:       488945E8         MOV [RBP-24], RAX
; 8E:       4883EC10         SUB RSP, 16
; 92:       488B156FFEFFFF   MOV RDX, [RIP-401]
; 99:       488B7DE0         MOV RDI, [RBP-32]
; 9D:       B904000000       MOV ECX, 4
; A2:       48892C24         MOV [RSP], RBP
; A6:       488BEC           MOV RBP, RSP
; A9:       B8226B4A50       MOV EAX, #x504A6B22
; AE:       FFD0             CALL RAX
; B0:       480F42E3         CMOVB RSP, RBX
; B4:       4883EC10         SUB RSP, 16
; B8:       B902000000       MOV ECX, 2
; BD:       48892C24         MOV [RSP], RBP
; C1:       488BEC           MOV RBP, RSP
; C4:       B822BB4C50       MOV EAX, #x504CBB22
; C9:       FFD0             CALL RAX
; CB:       480F42E3         CMOVB RSP, RBX
; CF:       488BE5           MOV RSP, RBP
; D2:       F8               CLC
; D3:       5D               POP RBP
; D4:       C3               RET
; D5:       CC10             INT3 16
; D7:       CC10             INT3 16
; D9:       CC10             INT3 16
```

Coalton embraces the three S's of typing discipline: *Strict*, *Static*, and *Strong*. If you know Standard ML, OCaml, Haskell, Elm, or Scala, then you'll already be familiar with the feel of Coalton. Coalton doesn't aim to be an independent language from Common Lisp, but instead to augment it. In fact, Coalton is a language embedded *inside of* Lisp, so Coalton makes use of all of Lisp's already-available tooling. We want the freedom and agility of dynamic, interactive, and incremental development, with the safety and expressivity of a powerful type system. Normally these are at odds, but we think that—with Coalton—we can have our cake and eat it too. 

We believe Coalton will fundamentally change the way we write Common Lisp.

## Isn't Common Lisp Supposed to Be Dynamic?!

Common Lisp is renowned for being a dynamic language; its type system, its featureful object system, its error-handling system (also known as the *condition system*), and its syntactic foundation of S-expressions all contribute the language's dynamic nature. In Lisp, at *run-time*, it's possible to re-define classes on-the-fly. The very fact types can be re-defined during program execution seems to indicate type and language dynamicism is the only way with Lisp.

However, there is a lot of evidence that Lisp benefits from statically declared types. First, Lisp has a built-in feature for declaring types, namely `declare`. Not only can this feature be used to improve the correctness of your code by (possibly) installing run-time checks, but it can also drastically increase performance. Second, Lisp implementations like CMUCL and SBCL have rich support for type inference and static type checking. Most SBCL users would positively attest to the benefits of SBCL's type checker. As such, it seems reasonable that there's plenty of room to have benefits of dynamicism and staticism in the same language.

Dynamicism, at the type level and otherwise, is part of Lisp's DNA, and so we believe it's futile to attempt to add any sort of type system to on top of ordinary Common Lisp that tries to strong-arm its own built-in system. If we are correct in this belief, this means that the usual approach to "gradual typing" simply isn't practical with modern Lisp codebases.

Our approach is to have a small, easy-to-understand language that can live *within* Common Lisp, that can be type checked using advanced techniques, that doesn't need wholesale adoption, and that can easily interoperate with the rest of the Common Lisp program. It shouldn't be difficult or computationally inefficient to make use of this language within Lisp, or Lisp within this language.

This is what Coalton aims to be.

## What Can Coalton Do?

Coalton doesn't innovate on programming language theory or type systems. Even though it's quite tricky to implement, the technology behind Coalton has been understood for more than 25 years. What we do find innovative about Coalton, however, is the unlikely and generally seamless coexistence of a dynamically typed language and a statically typed one. Just about every benefit of Common Lisp, including its powerful tooling for truly incremental development, is automatically carried over into Coalton. In fact, a Coalton function like

```lisp
(define (stutter x)     ; Coalton
  (concat-string x x))
```

essentially compiles into the following Common Lisp code:

```lisp
(DEFUN STUTTER (X)      ; Common Lisp
  (CONCAT-STRING X X))
```

It does so *within the ordinary compilation process for Common Lisp*. That's right. Lisp functions and Coalton functions are one in the same, and *no additional tools are needed*. Using Coalton is as ordinary as using any other Lisp library:

1. Add `#:coalton` to your ASDF dependencies,
2. Create a package and `:use` the packages `#:coalton` and `#:coalton-library` (but *not* `#:cl`), and
3. Write Coalton code inside of `(coalton-toplevel ...)`.

From here, your development process is the exact same for any other Lisp program. That's truly all there is to it.

Let's walk through some of Coalton's headline features.

### Headline #1: Coalton's Type System

In terms of its type system, Coalton's closest cousin is Haskell. Coalton's isn't as advanced as the Glasgow Haskell Compiler, which is state-of-the-art, but Coalton does have the following features.

- Parametric polymorphism and type variables:

  ```lisp
  (coalton-toplevel
    (declare compose ((:b -> :c) -> (:a -> :b) -> (:a -> :c)))
    (define (compose f g x)
      (f (g x)))
  
    (declare list-length ((List :t) -> Integer))
    (define (list-length l)
      (match l
        ((Nil)       0)
        ((Cons _ xs) (+ 1 (list-length xs))))))
  ```

  Here, the keywords `:a`, `:b`, `:c`, and `:t` are type variables

- Truly parametric algebraic data types:

  ```lisp
  (coalton-toplevel
    (define-type Expr
      (Val Integer)
      (Add Expr Expr)
      (Mul Expr Expr))
  
    (define-type (Binary-Tree :a)
      (Node :a (Binary-Tree :a) (Binary-Tree :a))
      (Leaf)))
  ```

- Type classes (both single- and multi-parameter):

  ```lisp
  (coalton-toplevel
    (define-class (Evaluable :s)
      (eval (:s -> Integer)))
  
    (define-instance (Evaluable Expr)
      (define (eval e)
        (match e
          ((Val i)     i)
          ((Add e1 e2) (+ (eval e1) (eval e2)))
          ((Mul e1 e2) (* (eval e1) (eval e2))))))
  
    (declare line ((Num :t) => (:t -> :t -> :t -> :t)))
    (define (line slope y-intercept x)
      (+ y-intercept (* slope x))))
  ```

- Higher-kinded types:

  ```lisp
  (coalton-toplevel
    (define-class (Functor :F)
      (map ((:a -> :b) -> (:F :a) -> (:F :b))))
    
    (define-instance (Functor Binary-Tree)
      (define (map f t)
        (match t
          ((Node v t1 t2) (Node (f v) (map f t1) (map f t2)))
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

  We've been writing out the types of functions with the `declare` operator, but unless disambiguation or type-specialization is needed, declaring the types is not necessary due to its type inference capabilities.

All of these constructs are well-known to the functional programming community. Some languages call these concepts different names. For instance, a "type class" closely resembles a "trait" in Rust. An "algebraic data type" closely resembles a "case class" in Scala.

### Headline #2: Macros

Yes, Coalton has macros. Just define a normal Common Lisp macro and it'll Just Work™ in Coalton. In fact, Haskell's `do`-notation is implemented as an ordinary macro.

Why are macros intended to be written in Common Lisp and not Coalton? We think it's a pragmatic choice; Lisp is already great at manipulating S-expressions, and Coalton is not. However, since (spoiler alert) Coalton and Lisp can freely interop, you can implement your macro logic in Coalton if you want.

### Headline #3: Coalton-Lisp Interop

We describe the Coalton-Lisp interop in the following way: the *Coalton-calls-Lisp bridge* and the *Lisp-calls-Coalton bridge*.

The Coalton-calls-Lisp bridge is pretty simple. Coalton has a special operator called `lisp` that allows arbitrary Lisp code to be embedded into Coalton. A lot of Coalton's standard library is written this way. For instance, the `string-concat` function is written:

```lisp
(coalton-toplevel
  (declare concat-string (String -> String -> String))
  (define (concat-string str1 str2)
    (lisp String (str1 str2)
      (cl:concatenate 'cl:string str1 str2))))
```

Coalton can also stuff Lisp objects into its data structures in opaque ways, using the `Lisp-Object` type. From within a `lisp` form, one can simply use a `Lisp-Object` directly. There is no way for Coalton itself to "see" the guts of the `Lisp-Object` without using the `lisp` operator. Here's an example creating a simple `String-Map` piggy-backing off of Lisp hash tables:

```lisp
(coalton-toplevel
  (define-type String-Map
    (Hash-Table Lisp-Object))

  (declare make-table (Integer -> String-Map))
  (define (make-table size)
    (lisp String-Map (size)
      (Hash-Table
        (cl:make-hash-table :test 'cl:equal
                            :size size))))
  
  (declare table-set (String-Map -> String -> String -> String-Map))
  (define (table-set tbl k v)
    (match tbl
      ((Hash-Table obj)
       (lisp String-Map (k v obj tbl)
         (cl:let ((table obj))
           (cl:setf (cl:gethash k table) v)
           tbl)))))
  
  (declare table-get (String-Map -> String -> (Optional String)))
  (define (table-get tbl k)
    (match tbl
      ((Hash-Table obj)
       (lisp (Optional String) (obj k)
         (cl:let* ((table obj)
                   (val   (cl:gethash k table)))
           (cl:if (cl:null val)
                  None
                  (Some val))))))))
```

The Lisp-calls-Coalton bridge is just as easy with the `coalton` operator. For instance, we can call our `fib` function (and have type safety!) in Lisp by writing `(coalton (fib 10))`.

```lisp
> (coalton (fib 10))
55

> (coalton (fib 10.0))
; Failed to unify types SINGLE-FLOAT and INTEGER
; in unification of types (SINGLE-FLOAT → :A) and (INTEGER → INTEGER)
; in COALTON
;    [Condition of type COALTON-IMPL/TYPECHECKER::COALTON-TYPE-ERROR-CONTEXT]
```

More advanced users can interact with the Lisp-calls-Coalton bridge via the following aspects:

* All Coalton functions defined with `(define (f ...) ...)` correspond to Lisp functions of the same name.
* All Coalton functions and values correspond to Lisp values of the same name. So, `(define (f ...) ...)` will create both a Lisp function called `f` and a global lexical variable called `f`.
* Monomorphic Coalton functions—functions without any type parameterization—can be called directly. Polymorphic functions cannot (without supplying a special data structure).
  * If you want to expose a polymorphic function, we recommend creating a monomorphic variant.
* Coalton type classes correspond to either structures or CLOS classes.

The functions `hello` and `fib` from the previous section are monomorphic, and thus can be called directly from Lisp, even without the `coalton` operator:

```
> (hello "world")
Hello, world
UNIT
> (fib 30)
832040
```

Though note that Coalton will _not_ type-check these function calls for you, since they're being called as Lisp code.

### Headline #4: Functional Programming Conveniences

Because a functional style of programming is expected with Coalton, several features are offered to make this experience nicer.

**Applicative-Order:** Coalton is unlike Haskell in this respect because evaluation in Coalton is applicative-order (also known as "strict").

**Side-Effects Allowed:** Mutability and side-effects are discouraged as a matter of principle, but allowed. 

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

### Headline #5: Monads

Just kidding.

### Headline #5: Monads (Redux)

Actually, we're not kidding. Monads are implemented in the standard library. Finally, Common Lisp now has *true* monads! Not CLOS hack-jobs that don't work.

Here's a little REPL example to compute the difference between the maximal and minimal element of a list.

```lisp
> (coalton-toplevel
    (declare list-width ((List Integer) -> (Optional Integer)))
    (define (list-width l)
      (do (max <- (maximum l))
          (min <- (minimum l))
        (pure (- max min)))))
LIST-WIDTH

> (list-width (make-list 1 5 2))
#.(SOME 4)

> (list-width (make-list))
#.NONE
```

The function `list-width` is using the fact that `Optional` (called `Maybe` in Haskell) implements the monad type class.

## Does Coalton Really Work?

We implemented [*Typing Haskell in Haskell*](https://web.cecs.pdx.edu/~mpj/thih/) by Mark P. Jones in Coalton, and it was a no-nonsense, straightforward translation.

With that said, Coalton is currently alpha-quality software, and we expect it to stabilize over time.  There are bugs to squash and features to implement. From a UX perspective, there's a *lot* of ironing out that needs to be done. Nonetheless, it's good enough now to actually use it for real projects.

If you're interested in checking out Coalton, head on over to the [GitHub](https://github.com/coalton-lang/coalton)!

We both welcome and look forward to your bug submissions and pull requests to help Coalton improve! Anything helps!

## Why Go Through All This Trouble?

Developing compilers for quantum computers is hard. There are no books or best practices about it. It's a rapidly evolving field of research, but simultaneously the field demands practical results for use on real quantum computers that exist today.

One of the state-of-the-art optimizing quantum compilers is an open-source program called [QUILC](https://github.com/quil-lang/quilc) with a companion quantum computer simulator called the [Quantum Virtual Machine](https://github.com/quil-lang/qvm). Both of these programs are written in 100% Common Lisp, and contain a total of around 50,000 lines of sophisticated, mathematical, data structure–heavy code. And that excludes the plethora of first-party dependencies.

Common Lisp is a *fantastic* language for developing these programs; it's fast, stable, extremely flexible, and the developer experience is unmatched. But, both new and seasoned developers sometimes get tripped up and tangled in the web of complex data structures, and inadvertently introduce type errors that the relatively comprehensive test suite doesn't catch. In addition, such developers heavily rely on documentation strings ("docstrings") in order to discover what the probable inputs and outputs of the functions are, and those docstrings sometimes go stale.

Coalton's aim is to allow us to reap the benefits of Common Lisp, and not have to rewrite 50,000 lines of tricky code in order to realize some of the benefits offered by statically typed functional programming languages.

Despite not yet being production-ready, Coalton has already demonstrated success in improving the correctness and comprehensibility of our internal QUILC builds at HRL Laboratories.


## Acknowledgements

This work was supported by [HRL Laboratories quantum computing group](https://quantum.hrl.com/). Coalton was originally started as an open-source project by Robert Smith in 2018, but was overhauled by Elias Lawson-Fox and Cole Scott during their 2021 summer internship at HRL.

The work was inspired by many great projects and people that preceded it. In no particular order:

* Simon Peyton Jones, Mark P. Jones, Phil Wadler, Paul Hudak
* Luis Damas, Roger Hindley, Robin Milner, [HOL88](https://github.com/theoremprover-museum/HOL88), and the LCF theorem prover
* The [Glasgow Haskell Compiler](https://www.haskell.org/ghc/)
* [Yale Haskell](https://github.com/haskell-lisp/yale-haskell), a 30-year-old Haskell implementation in Common Lisp
* The [Standard ML of New Jersey](https://www.smlnj.org/)
* [MLTon](http://mlton.org/) (from which Coalton, neé CLTon, got its name)
* [ACL2](https://www.cs.utexas.edu/users/moore/acl2/)
* [Typed Racket](https://docs.racket-lang.org/ts-guide/index.html)
* [Alexis King](https://twitter.com/lexi_lambda) and [Hackett](https://lexi-lambda.github.io/hackett/)
* [Stephen Diehl](https://twitter.com/smdiehl), who provided many invaluable references
* [Elm](https://elm-lang.org/)
