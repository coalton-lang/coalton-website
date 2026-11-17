---
title: "Why We Broke Up Coalton's Num Class"
date: 2026-11-16
math: true
---

By [Robert Smith](https://twitter.com/stylewarning)

*A few years ago, before Coalton had a language manual, we wrote ["Numbers in a Nutshell"](/post/20220827-numbers/) as a quick reference to arithmetic in Coalton. That practical guide now lives in the manual's new [Numbers and Math](/manual/topics/numbers-and-math/) chapter. In this post, we want to talk about a design mistake we inherited from Haskell—bundling all of arithmetic into a single `Num` class—how it bit us in real programs, and how we fixed it without making everyday code any harder to write.*

{{< toc >}}

## I Just Want to Add Two Vectors

Suppose you're writing a 2D game or a small physics simulation in Coalton. The very first thing you write is a 2D vector:

```lisp
(coalton-toplevel
  (derive Eq)
  (define-struct Vec2
    (x F64)
    (y F64)))
```

Naturally, you want to add two vectors with `(+ u v)`, subtract them with `(- u v)`, negate a vector with `(neg u)`, and add up a list of forces acting on a body with `(list:sum forces)`.

In previous versions of Coalton, `+`, `-`, and `*` all lived in a single type class called `Num`, which we copied almost verbatim from Haskell:

```lisp
;; The old Num class
(define-class (Eq :a => Num :a)
  (+ (:a * :a -> :a))
  (- (:a * :a -> :a))
  (* (:a * :a -> :a))
  (from-int (Integer -> :a)))
```

Look at what happens when you try to make `Vec2` an instance of `Num` just so you can use `+` and `-`:

1. **You have to invent a vector-times-vector multiplication `(* u v)` returning a `Vec2`.**
   What is that supposed to be? The dot product returns a number (`F64`), not a `Vec2`. The cross product doesn't exist in 2D. Componentwise multiplication `(Vec2 (* x1 x2) (* y1 y2))` is a mathematical footgun that silently does the wrong thing if someone passes a `Vec2` to a generic function expecting actual multiplication.
2. **You have to implement `(from-int n)`.**
   What 2D vector is the integer `5`? Is it `(Vec2 5.0d0 5.0d0)`? `(Vec2 5.0d0 0.0d0)`? Or do you define `(from-int _) = (error "Vec2 is not an integer")` and hope nobody ever calls a generic function that uses `0` or `1`?

And notice the trap in that last question: if you made `(from-int _)` signal an error, then `(list:sum forces)` would crash at runtime! Why? Because `list:sum` initialized its accumulator to `(from-int 0)`—there was no standalone `zero` value in the language.

So in practice, you gave up on `+` and wrote `vec2-add`, `vec2-sub`, `vec2-neg`, and `vec2-sum`. In a language whose whole pitch is that type classes let you write generic, ergonomic, zero-overhead code, you were right back to C-style prefixed function names.

## The Workarounds Kept Piling Up

`Vec2` wasn't an isolated annoyance. Everywhere we wrote non-trivial numerical code, `Num` got in the way:

- **Multiplying a vector by a number:** In that same physics simulation, you want to scale a velocity vector `v` by a timestep `dt`. That's an operation of type `F64 * Vec2 -> Vec2`. Because `*` only multiplies two values of the *same* type (`:a * :a -> :a`), every library in Coalton invented its own incompatible scaling function.
- **Raising a matrix to a power:** Suppose you have a $2\times 2$ matrix `M` and want to compute $M^{10}$ with `(^ M 10)`. Computing $M^{10}$ by repeated squaring only needs matrix multiplication `*` and the identity matrix `one`. Yet `^` required `Num`, which meant matrices couldn't use `^` unless they also faked `from-int`.
- **Our own FFT library had to reinvent `+` and `*`:** The most damning indictment of `Num` was sitting right inside Coalton's own extended math library. When the author of `coalton/xmath/fft` wrote the Fast Fourier Transform, `Num` was too restrictive for the butterfly operations—so `fft.ct` literally defined three private type classes (`FFTGroup`, `FFTRing`, and `FFTField`) that duplicated `+`, `-`, `*`, and `/` under different names!
- **`gcd` demanded `<`:** If you wanted to reduce a fraction of two polynomials like $\frac{x^2 - 1}{x^2 + 2x + 1}$ to $\frac{x - 1}{x + 1}$, or reduce a fraction of complex integers, the algorithm is the exact same Euclidean algorithm used for ordinary integers: divide numerator and denominator by their `gcd`. But Coalton's division and `gcd` classes required `Ord` (`<`), which complex numbers and polynomials don't have.

When your own standard library authors are writing shadow arithmetic classes to route around `Num`, the abstraction isn't pulling its weight.

## Why Didn't We Split `Num` From Day One?

There is a reason Haskell kept `Num` as a single class back in 1990, and why we copied it initially: **splitting `Num` can easily make a language miserable for beginners and everyday programmers.**

When language designers decide to "fix" `Num`, the temptation is to open an abstract algebra textbook and create fifteen classes—`Magma`, `Semigroup`, `Monoid`, `AbelianMonoid`, `Group`, `AbelianGroup`, `Rg`, `Rig`, `Rng`, `Ring`, `CommutativeRing`... Suddenly:

1. A programmer who just wants to write a function that does `(+ a (* b c))` has no idea which class to put in the type signature.
2. A programmer who defines a simple wrapper type (like modular integers or a currency type) has to write seven boilerplate `define-instance` blocks just to get `+`, `-`, `*`, and literals working.

We wanted two things that usually pull in opposite directions:

1. **If you're writing ordinary numeric code, nothing should feel harder than `Num`.**
2. **If you're writing `Vec2`, `Mat4`, polynomials, or an FFT, you should only have to implement the operations that actually make sense.**

## What We Changed

Instead of building a taxonomy of every algebraic structure known to mathematics, we split `Num` into the specific capabilities that real programs actually ask for:

```mermaid
graph TD
    Additive --> AdditiveGroup
    Additive --> Semiring
    Multiplicative --> Semiring
    AdditiveGroup --> Ring
    Semiring --> Ring
    Eq --> Num
    Ring --> Num
    Ring --> ConjugateRing
    Ring --> Reciprocable
    Ring --> GcdDomain
    GcdDomain --> EuclideanDomain
    EuclideanDomain --> Remainder
    Remainder --> Integral
    Num --> Integral
    Ord --> Integral
    Ord --> Bounded
    Ord --> Quantizable
    Ring --> Quantizable
    Transfinite --> IEEEFloat
```

Here is what that means in practice:

- **`Additive` (`+`, `zero`) and `AdditiveGroup` (`-`, `neg`):**
  This is what `Vec2` implements. Because `zero` is its own constant instead of `(from-int 0)`, `(list:sum forces)` works on `Vec2` out of the box. You never have to touch `*` or `from-int`.
- **`Multiplicative` (`*`, `one`):**
  This is all you need for `(list:product xs)` and `(^ x n)`. A matrix or 2D transform implements `Multiplicative` and immediately gets binary exponentiation `(^ M 10)`.
- **`Semiring` and `Ring`:**
  Combine addition and multiplication (`Ring` adds `from-int` for integer literals, without requiring `Eq` for types like computable reals or infinite series where exact equality isn't decidable).
- **`Num` is still `Num`:**
  `Num :a` is simply a `Ring` with `==` (`Eq`). In everyday functions that take numbers, you still write `Num :a => ...`, just like before.
- **`define-num` keeps instance definitions to one block:**
  When you define a new number type, you don't write six `define-instance` blocks. You write a single `define-num` form with `+`, `-`, `*`, and `from-int`, and it generates all the underlying instances for you (even filling in `zero`, `one`, and `neg` automatically if you leave them out):

```lisp
(coalton-toplevel
  (derive Eq)
  (repr :transparent)
  (define-type Mod7 (Mod7 Integer))

  (define (mod7 n) (Mod7 (coalton/math:mod n 7)))

  (define-num Mod7
    (define (+ (Mod7 a) (Mod7 b)) (mod7 (+ a b)))
    (define (- (Mod7 a) (Mod7 b)) (mod7 (- a b)))
    (define (* (Mod7 a) (Mod7 b)) (mod7 (* a b)))
    (define (from-int n)           (mod7 n))))
```

We also added a small set of classes in `coalton/math` for scaling and vector spaces (`Scale`, `Module`, `VectorSpace`, `InnerSpace`, and `ConjugateRing` so dot products work uniformly for both real and complex vectors), untangled `gcd` and `quotrem` (`GcdDomain` and `EuclideanDomain`) from `Ord`, separated `Transfinite` (`infinity`, `finite?`, `infinite?`) from `IEEEFloat` (`nan`, `nan?`), and replaced ad-hoc rational conversion classes with `Approximable :a :b` (`(approx bits x)`, `rational-approx`, and `simplest-fraction`), which approximates numbers—and composite structures like `Complex`, `Dual`, `Polynomial`, and `Matrix`—to within $2^{-\mathtt{bits}}$ in any target representation (`Fraction`, `BigFloat`, `Dyadic`, `F64`).

```mermaid
graph TD
    Scale["Scale :s :v"] --> Module["Module :r :m"]
    Ring["Ring :r"] --> Module
    AdditiveGroup["AdditiveGroup :m"] --> Module
    Module --> VectorSpace["VectorSpace :k :v"]
    Reciprocable["Reciprocable :k"] --> VectorSpace
    VectorSpace --> InnerSpace["InnerSpace :k :v"]
    ConjugateRing["ConjugateRing :k"] --> InnerSpace
```

With that in place, our `Vec2` from the beginning of the post is twenty lines of straightforward code—and `+`, `-`, `neg`, `list:sum`, `scale`, and `inner-product` all work on it natively:

```lisp
(coalton-toplevel
  (define-instance (Additive Vec2)
    (define (+ (Vec2 x1 y1) (Vec2 x2 y2))
      (Vec2 (+ x1 x2) (+ y1 y2)))
    (define zero (Vec2 0.0d0 0.0d0)))

  (define-instance (AdditiveGroup Vec2)
    (define (- (Vec2 x1 y1) (Vec2 x2 y2))
      (Vec2 (- x1 x2) (- y1 y2)))
    (define (neg (Vec2 x y))
      (Vec2 (neg x) (neg y))))

  (define-instance (math:Scale F64 Vec2)
    (define (math:scale k (Vec2 x y))
      (Vec2 (* k x) (* k y))))

  (define-instance (math:Module F64 Vec2))
  (define-instance (math:VectorSpace F64 Vec2))

  (define-instance (math:InnerSpace F64 Vec2)
    (define (math:inner-product (Vec2 x1 y1) (Vec2 x2 y2))
      (+ (* x1 x2) (* y1 y2)))))
```

## What This Unlocked in `coalton/xmath`

First, we replaced `FFTGroup`, `FFTRing`, `FFTField`, and `FFTCyclicGroup` in `coalton/xmath/fft` with a single `RootsOfUnity` class (`root-of-unity`)—the FFT library now uses standard `+`, `-`, `*`, and `recip` directly—and simplified `Hyperdual :t` into a type alias `(Dual (Dual :t))`, since `Dual`'s polymorphic instances automatically compute second derivatives by the chain rule.

Second, because these algebraic classes compose cleanly, we were able to build a suite of new symbolic, numerical, and geometric modules in `coalton/xmath` that all plug straight into standard operators:

- **Polynomials & Rational Functions (`polynomial`, `ratio`):** Univariate and nested multivariate polynomials over any `Semiring`, `Ring`, or `GcdDomain` (with Sylvester `resultant` and Yun's `square-free-factorization`), and generic reduced fractions `(make-ratio num den)` over any `GcdDomain` (with `partial-fractions`, `hermite-reduce`, and `rothstein-trager-resultant` for symbolic rational integration $\int \frac{P(x)}{Q(x)}\,dx = g(x) + \int \frac{A(x)}{B(x)}\,dx$).
- **Generic Matrices (`matrix`):** Because `exact-div` lives in `GcdDomain`, fraction-free Bareiss elimination computes exact determinants `det`, adjugates, and characteristic polynomials `charpoly` over `Integer`, `Complex Integer`, or `Polynomial Integer` without fractions; over a field (`Reciprocable`), `solve`, `inv`, `rref`, and `nullspace` work identically on rationals, `RealAlgebraic`, or rational functions; and `gram-schmidt` uses `ConjugateRing` to orthogonalize real and complex vectors alike.
- **Differential Algebra & ODE Operators (`differential`):** `DifferentialRing` (`deriv`) and $n \times n$ Wronskian determinants (`wronskian`), plus non-commutative linear differential operators `DiffOp :a` ($A[\partial; \, '\,]$) where `*` is Leibniz operator composition ($\partial x - x\partial = 1$), `diff-op-gcrd` / `diff-op-lclm` factor and combine ODEs, and `solve-ode-series` solves variable-coefficient linear ODE initial value problems (such as Airy's equation $y'' - xy = 0$) directly into lazy `PowerSeries`.
- **Gröbner Bases (`groebner`):** Sparse multivariate polynomials `MPoly :a` with `Lex`, `GrLex`, and `GRevLex` monomial orders and Buchberger's algorithm (`groebner-basis`, `normal-form`, `ideal-member?`) for solving nonlinear polynomial systems.
- **Modular Algebra, Recurrences & Gosper's Algorithm (`modular`, `recurrence`):** A single `crt` implementation over any `EuclideanDomain` solves both integer Chinese Remainder problems *and* polynomial Lagrange interpolation (`lagrange-interpolate`), while `recurrence` provides Padé approximants (`pade-approximant`), Berlekamp–Massey (`guess-generating-function`), and Gosper's algorithm (`gosper-solve`) for closed-form hypergeometric summation.
- **Quaternions & Clifford Algebras (`quaternion`, `clifford-algebra`):** Non-commutative rings where `ConjugateRing` ($\overline{pq} = \bar{q}\,\bar{p}$) and `Reciprocable` enable 3D rotations (`rotate-vector`) and graded multivector products (`wedge`, `left-contract`, `sandwich`) over exact or floating-point scalars.
- **Lazy Formal Power Series (`power-series`):** Infinite series $a_0 + a_1 x + a_2 x^2 + \cdots$ that implement `+`, `-`, `*`, `/`, `sqrt`, `exp`, `ln`, `sin`, `cos`, `sinh`, and `cosh`. You can write a generating function as an ordinary formula and read off its exact rational coefficients:

```lisp
(let x = (the (series:PowerSeries Fraction) series:series-var))

;; Catalan numbers from 2 / (1 + sqrt(1 - 4x))
(series:series-prefix 7 (/ 2 (+ 1 (sqrt (- 1 (* 4 x))))))
;; => (1 1 2 5 14 42 132)
```

If you want a practical reference to all of Coalton's number types, arithmetic operations, and classes, head over to the new [Numbers and Math](/manual/topics/numbers-and-math/) chapter in the Coalton manual.