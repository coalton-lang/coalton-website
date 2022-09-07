---
title: "Using Coalton to Implement a Quantum Compiler"
date: 2022-09-06
math: true
---

By [Elias Lawson-Fox](https://github.com/eliaslfox), [Aidan Nyquist](https://github.com/aijony), and [Robert Smith](https://twitter.com/stylewarning)

{{< toc >}}

## Introduction: Coalton and the quilc compiler

[Quilc](https://github.com/quil-lang/quilc) is a state-of-the-art optimizing compiler for quantum computers written in Common Lisp. It is capable of taking arbitrary quantum programs written in [Quil](https://quil-lang.github.io/), and compiling and optimizing them into code that conforms to the majority of quantum computing architectures that exist today.

Quilc and its related tooling are around 50,000 lines of code, and though it has good test coverage, it falls trap to problems that frequently show up when using dynamically typed programming languagues, two of which are

1. type errors showing up at runtime, usually a result from the code following a less probable control path, and
2. not having certain useful abstractions that can only be enabled by having a static type system (e.g., certain kinds of polymorphism).

Coalton, being a strictly typed language within Common Lisp, addresses these two problems in principle. Since it's not practical to rewrite an entire compiler, we opted to implement a significant new feature of quilc in Coalton called *discrete compilation*. In this post, we'll walk through what discrete compilation is, how Coalton made it simpler to implement (compared to Common Lisp), and how we tested that such a complicated feature actually works.


## Towards a discrete set of operations for quantum computation

A typical quantum program is comprised of a sequence of **operations** (sometimes called **instructions**, **operators**, **gates**, or **matrices**) that can be expressed mathematically as square matrices of complex numbers. The matrices are [*unitary*](https://en.wikipedia.org/wiki/Unitary_matrix)—which means the matrices can never stretch or shrink a vector they multiply onto—and they have to have a power-of-two size. Just like classical computers, quantum computers have a set of operations they can natively perform. Quantum computers typically have only a small handful. For example, the set of native operations of an IBM quantum computer is:

$$
\begin{aligned}
\mathrm{RX}\_{\pi/2} &:=
  \begin{pmatrix}
    \frac{1}{\sqrt{2}} & i\frac{1}{\sqrt{2}} \\\\
    i\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
  \end{pmatrix}\\\\
\mathrm{RX}\_{-\pi/2} &:=
  \begin{pmatrix}
    \frac{1}{\sqrt{2}} & -i\frac{1}{\sqrt{2}} \\\\
    -i\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}}
  \end{pmatrix}\\\\
\mathrm{RZ}\_{\theta} &:=
  \begin{pmatrix}
    \cos\frac{\theta}{2}-i\sin\frac{\theta}{2} & 0 \\\\
    0 & \cos\frac{\theta}{2}+i\sin\frac{\theta}{2}
  \end{pmatrix}\\\\
\mathrm{CNOT} &:=
  \begin{pmatrix}
    1 & 0 & 0 & 0\\\\
    0 & 1 & 0 & 0\\\\
    0 & 0 & 0 & 1\\\\
    0 & 0 & 1 & 0
  \end{pmatrix}
\end{aligned}
$$

In this case, $\theta$ is actually parametric and can be any value between $0$ and $2\pi$.

It is a surprising fact that you can build *any* $2^n\times 2^n$-size complex unitary matrix out of the above matrices by way of matrix multiplications and [Kronecker products](https://en.wikipedia.org/wiki/Kronecker_product). This means the operation set is **computationally universal**, not unlike the concept of universality of Boolean logic in ordinary computing. For example, consider the following unitary matrix:

$$
M := \begin{pmatrix}
1 & 0 & 0 & 0\\\\
0 & \frac{\sqrt{3}}{2} & \frac{i}{2} & 0\\\\
0 & \frac{i}{2} & \frac{\sqrt{3}}{2} & 0\\\\
0 & 0 & 0 & 1
\end{pmatrix}.
$$


This matrix $M$ can be written[^difficult] as the following product:

[^difficult]: It is not obvious *how* to find this way of writing $M$ using only paper and pencil. Similar to how we compute integrals in calculus, practitioners in the field often have a tables of matrix identities, and other tricks, to figure these things out. As we shall see, there is an algorithmic process to compute these products mechanically.

$$
\begin{aligned}
m^{\prime}   &:=  (\mathrm{RZ}\_{\pi/2}\cdot\mathrm{RX}\_{\pi/2}\cdot\mathrm{RZ}\_{-5\pi/4})\otimes \mathrm{RZ}\_{-\pi/4} \\\\
m^{\prime\prime}  &:= (\mathrm{RX}\_{-\pi/2}\cdot\mathrm{RZ}\_{\pi/6}\cdot\mathrm{RX}\_{\pi/2})\otimes(\mathrm{RX}\_{-\pi/2}\cdot\mathrm{RZ}\_{\pi/6}\cdot\mathrm{RX}\_{\pi/2})\\\\
m^{\prime\prime\prime} &:= (\mathrm{RZ}\_{\pi/4}\cdot\mathrm{RX}\_{\pi/2}\cdot\mathrm{RZ}\_{\pi/2})\otimes\mathrm{RZ}\_{\pi/4}\\\\
M &\hphantom{:}= m^{\prime\prime\prime}\cdot \mathrm{CNOT} \cdot m^{\prime\prime} \cdot \mathrm{CNOT} \cdot m^{\prime}
\end{aligned}
$$

The intermediate $m$'s are just there for abbreviation. Notice how _only_ the aforementioned list of native operations are used, and how they're combined using multiplication (syntactically: $A\cdot B$) and Kronecker products (syntactically: $A\otimes B$). While it would be appealing to describe Kronecker products in more detail in this blog post, for the sake of brevity, we'll just consider them a separate kind of matrix multiplication.

One of the primary tasks of a quantum compiler is to break down arbitrary unitary matrices, usually given by the quantum programmer, into a sequence of native ones. Using conventions from the quantum computing field, the above matrix is usually specified as $\mathrm{XY}(\pi/3)$. Quilc can recover the decomposition of this matrix like so:

```
$ echo 'XY(pi/3) 1 0' | ./quilc --isa ibmqx5
RZ(-5*pi/4) 1
RX(pi/2) 1
RZ(pi/2) 1
RZ(-pi/4) 0
CNOT 1 0
RX(pi/2) 1
RZ(pi/6) 1
RX(-pi/2) 1
RX(pi/2) 0
RZ(pi/6) 0
RX(-pi/2) 0
CNOT 1 0
RZ(pi/4) 0
RZ(pi/2) 1
RX(pi/2) 1
RZ(pi/4) 1
```

Using software engineering terminology, we say we've _compiled_ the `XY(pi/3)` matrix into the native operations of an IBM quantum computer. In quilc's output, the numbers `0` and `1` denote how to do the Kronecker products. For example, the syntax

```
A 1
B 0
```

represents the Kronecker product $A\otimes B$.

Different quantum computers each have a different set of native operations, so quilc must be a retargetable compiler. This mathematical puzzle is interesting and already quite difficult, but lurking is also an engineering problem of great concern.

Almost every quantum computer in use today has some sort of _continuous_ operation, possibly many, like the $\mathrm{RZ}\_\theta$ above. These continuous operations represent the analog nature of these quantum computers. Analog devices have their merits, but one thing analog hardware usually isn't good at is extreme precision. While I might request the quantum computer perform an $\mathrm{RZ}\_{0.12345}$, due to the computer's physical nature, it might only accomplish something between an $\mathrm{RZ}\_{0.11}$ and an $\mathrm{RZ}\_{0.13}$. Quantum hardware engineers around the world, every day, are putting effort into improving the precision of the available native operations, but it'll never be to feasible have _infinite_ precision, simply due to physical limitations. In practice, we will always have some amount of noise.

Can there instead be some set of _discrete_ native operations while still being able perform _any_ quantum computation we'd like? And if we have such a set, will it be *easy and efficient* to compile a given matrix? These two questions represent the problem of **discrete compilation** of quantum programs.

Fortunately, the answer to both questions is a resounding _yes_, with a small but reasonable caveat: It is not possible to find an _exact_ sequence of native operations to reconstruct a given matrix. Instead, we can only get _arbitrarily close_, at the expense of running more native operations[^reasonable].

[^reasonable]: This caveat is perfectly sensible. If we want to do arbitrary precision arithmetic on a classical computer (like calculating billions of digits of $\pi$), we must use more CPU instructions. CPU instructions only let us do a relatively small collection of operations: basic arithmetic on "small" integers and floating-point numbers. If we want to go beyond 20ish digits of integer, or go beyond 16ish digits of floating-point mantissa, we need to spend more memory and more CPU instructions.

There is a 20+-year history of many different algorithms for doing discrete compilation with their own advantages and disadvantages[^history]. We will focus on one by Neil Ross and Peter Selinger.

[^history]: Robert Solovay and Alexei Kitaev [both proved](https://en.wikipedia.org/wiki/Solovay%E2%80%93Kitaev_theorem) that discrete compilation was possible and efficient in the mid-90s. Their algorithm is flexible in allowing a large family of discrete operation sets, and decompositions of arbitrary matrices into any of those discrete operations were efficient to calculate, at least as far as big-O is concerned. The [Solovay-Kitaev algorithm](https://arxiv.org/abs/quant-ph/0505030) is famously difficult to implement, and relies on a great deal of pre-processing to accomplish, but it's useful both for its mathematical utility and its generality.

Ross and Selinger [proved](https://arxiv.org/abs/1212.6253) that if we use a specific native operation set, we can accomplish _nearly optimal-length_ decompositions[^optimal] of one-qubit matrices. From there, we can use other results to decompose matrices of any number of qubits.

[^optimal]: Ross and Selinger were later able to [modify the algorithm](https://arxiv.org/abs/1403.2975) so that it produces *actually* optimal sequences for parametric $z$-rotations, however, the algorithm requires one to be able to efficiently factorize integers. The theoretically best known way to factorize an integer is Shor's algorithm, which requires a quantum computer with essentially no error.

In the next section, we give an overview of the Ross-Selinger algorithm. It is somewhat mathematically intensive, so for readers uninterested in those details, we recommend skipping. (We duly recap the main takeaways when we return to discussing Coalton.)

### An approach to discrete compilation by Ross and Selinger

In order to have a set of discrete operations, we must be able to discretize the parametric operation $\mathrm{RZ}\_\theta$, which is a $2\times2$ matrix with entries depending on $\theta$.

Ross and Selinger consider the following native operations:

$$
\begin{aligned}
\mathrm{H} &:=
  \begin{pmatrix}
    \frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} \\\\
    \frac{1}{\sqrt{2}} & -\frac{1}{\sqrt{2}}
  \end{pmatrix}\\\\
\mathrm{S} &:=
  \begin{pmatrix}
    1 & 0 \\\\
    0 & i
  \end{pmatrix}\\\\
\mathrm{T} &:=
  \begin{pmatrix}
    1 & 0 \\\\
    0 & \frac{1}{\sqrt{2}}+i\frac{1}{\sqrt{2}}
  \end{pmatrix}
\end{aligned}
$$

This is called the _Clifford+T set_. These operations have mathematical significance because

1. arbitrary combinations of $\mathrm{H}$ and $\mathrm{S}$ form a special algebraic space called the one-qubit [Clifford group](https://en.wikipedia.org/wiki/Clifford_gates),

2. $\mathrm{S}$ equals $\mathrm{T}^2$, and

3. arbitrary products of these operations form a _dense_ set of the unitary matrices.

The third point means to say is that this set of operations could be used to approximate any $2\times 2$ unitary matrix to an arbitrary precision, though Ross and Selinger will need to devise an algorithm to do it.

Next, Ross and Selinger turn to a [result](https://arxiv.org/abs/1206.5236) by Kliuchnikov, Maslov, and Mosca which says a given $2\times2$ matrix can be written precisely as a product of Clifford+T elements if and only if the matrix elements are all members of the [number ring](https://en.wikipedia.org/wiki/Ring_(mathematics)) $R := \mathbb{Z}[\frac{1}{\sqrt 2}, i]$. So Ross and Selinger set up the following goal: Try to write the problematic parametric operation $\mathrm{RZ}\_\theta$  as a matrix

$$
\begin{pmatrix}
a & -b^* \\\\
b & a^*
\end{pmatrix}
$$

with user-selectable precision, where $a$ and $b$ are elements of $R$, and $z^*$ represents the [complex conjugate](https://en.wikipedia.org/wiki/Complex_conjugate) of $z$. If we can write this matrix, then we can use Kliuchnikov-Maslov-Mosca to write it in terms of Clifford+T. And if we can do _that_, then we can write any program with parametric $\mathrm{RZ}\_\theta$ operations into an equivalent one (up to user-specified precision, at least) using only discrete operations.

Ross and Selinger succeed at solving this problem, by turning that matrix problem into a [Diophantine equation](https://en.wikipedia.org/wiki/Diophantine_equation) that has to be solved over a specific number ring, and coming up with an algorithm to solve that.

Since the two-qubit operations of usual interest are already discrete (like `CNOT`, `CZ`, etc.), this would make a fully discretized native operation set, so long as quantum computer implementers could supply the Clifford+T set as native operations.

Already, even without the gory details of _how_ to find the approximating matrix, we see we're in for quite a ride. There's a lot of machinery we'll need, but one piece that sticks out is the need to do arithmetic over the ring $\mathbb{Z}[\frac{1}{\sqrt{2}},i]$. If we let $\omega:=(1+i)/\sqrt{2}$, then with a bit of exercise, we can see that elements of $\mathbb{Z}[\frac{1}{\sqrt{2}},i]$ all take the following canonical form:
$$
\frac{a_0}{2^{n_0}}+\frac{a_1}{2^{n_1}}\omega+\frac{a_2}{2^{n_2}}\omega^2+\frac{a_3}{2^{n_3}}\omega^3,
$$
where $a_\bullet$ are integers and $n_\bullet$ are non-negative integers. If we take two elements of this form and add or multiply them, we'll always end back up in the same ring.

For the Ross-Selinger algorithm, it turns out we also need to work in other rings, like the cyclotomic integers of degree 8, the quadratic integers of $\sqrt{2}$, and about a half-dozen others.

## Coalton's strength in implementing math

One of the implementation difficulties of the Ross-Selinger algorithm is being able to work with a bunch of different-but-interoperable[^interop] number types. How do we implement these mathematical objects in a program? At least in principle, Common Lisp would have no trouble representing elements of any of these rings; just define some new classes, perhaps some new generic functions like `ring+` and `ring*`, and you're off to the races.

[^interop]: They're interoperable specifically because all of these numbers are either real or complex numbers. Similar to how in most ordinary programming languages integers and floats are different kinds of real numbers (and thus can be added and multiplied), the number rings and fields of the Ross-Selinger algorithm can work with one another because they all are ultimately drawn from the same set.

The trouble is that it's cumbersome. In Lisp, first, there's no way to integrate with the existing numerical operators; there is no way to "overload" the standard operator `cl:+` to work with different rings. Second, as explained in a previous blog post, there's no way to uniformly treat additive and multiplicative identity in a convenient fashion. Third, it gets very messy, with lots of casts, upconversions, downconversions, etc. It's very difficult to build a _new_ numerical tower atop of or aside Common Lisp's existing one, though Common Lisp's multiple-dispatch mechanism at least eases the pain a bit.

These difficulties presented a second opportunity for Coalton. Coalton's builds its fundamental abstractions from a different starting point, making this kind of mathematics easier and safer to express. As such, we used this as a testing ground to implement new functionality of quilc in Coalton.

Coalton has a system for ad hoc polymorphism called *type classes*. Type classes allow one to extend existing functionality of a program, like that of the `+` or `*` operators, in a composable and statically typed manner. For example, this ring of algebraic numbers

$$
\mathbb{Z}[\sqrt{2}] = \left\\\{a\_1 + a\_2\sqrt{2} : a\_1,a\_2\in \mathbb{Z}\right\\\}
$$

can be modeled as pairs of integers $[a\_1; a\_2]$ that obey certain laws. We can derive one such law, a multiplication law, with a little bit of algebra:

$$
\begin{aligned}
[a\_1; a\_2]\cdot [b\_1; b\_2]
                         &= (a\_1 + a\_2\sqrt{2})(b\_1 + b\_2\sqrt{2})\\\\
                         &= a\_1b\_1 + a_1(b\_2\sqrt{2})+ (a\_2\sqrt{2})b\_1+(a\_2\sqrt{2})(b\_2\sqrt{2}) \\\\
                         &= (a\_1b\_1 + 2a\_2b\_2) + (a\_1b\_2+a\_2b\_1)\sqrt{2}\\\\
                         &= [a\_1b\_1+2a\_2b\_2; a\_1b\_2+a\_2b\_1].
\end{aligned}
$$

These algebraic numbers can be implemented as a new type in Coalton, which we'll call `Alg`.

```lisp
  (define-type Alg
    "Represents the algebraic number a1 + a2 * sqrt(2)."
    (Alg Integer Integer))
```

The `Alg` type can implement the `Eq` type class (which demands we implement equality) and the `Num` type class (which demands we implement addition, subtraction, multiplication, and some way to convert an integer into our new type).

```lisp
  (define-instance (Eq Alg)
    (define (== a b)
      (match (Tuple a b)
        ((Tuple (Alg a1 a2) (Alg b1 b2))
         (and (== a1 b1) (== a2 b2))))))

  (define-instance (Num Alg)
    (define (+ a b)
      (match (Tuple a b)
        ((Tuple (Alg a1 a2) (Alg b1 b2))
         (Alg (+ a1 b1) (+ a2 b2)))))
    (define (- a b)
      (match (Tuple a b)
        ((Tuple (Alg a1 a2) (Alg b1 b2))
         (Alg (- a1 b1) (- a2 b2)))))
    (define (* a b)
      (match (Tuple a b)
        ((Tuple (Alg a1 a2) (Alg b1 b2))
         (Alg (+ (* a1 b1) (* 2 (* a2 b2)))
                 (+ (* a1 b2) (* a2 b1))))))
    (define (fromInt n)
      (Alg n 0)))
```

We can verify it works by seeing that $(1-2\sqrt{2})^2 = 9-4\sqrt{2}$:

```lisp
> (coalton (* (Alg 1 -2) (Alg 1 -2)))
#.(ALG 9 -4)
```

How would we compute $2(-\sqrt{2})$? One way is to write $2$ explicitly as $2+0\sqrt{2}$, and $-\sqrt{2}$ explicitly as $0-1\sqrt{2}$, like so:

```
> (coalton (* (Alg 2 0) (Alg 0 -1)))
#.(ALG 0 -2)
```

Coalton however provides us a shorthand for `Num`-typed values. When Coalton sees a plain integer like `2` in the source syntax, it will actually interpret it as `(fromInt 2)`. One of two things are possible:

1. From type inference, Coalton concludes that `(fromInt 2)` should result in a value of a specific type, such as `Alg`. In this case, it will use `(Num Alg)`'s `fromInt` method.
2. Otherwise, Coalton concludes that the type of `(fromInt 2)` is ambiguous---we just know it must be a `Num` type and nothing else---in which case it assumes it is an `Integer`.

Since `Alg` implements `fromInt`, the integer syntax $n$ in a place where `Alg` is expected will automatically be interpreted as $n+0\sqrt{2}$. So we can rewrite the previous prompt more simply as:

```lisp
> (coalton (* 2 (Alg 0 -1)))
#.(ALG 0 -2)
```

As is to be expected at this point, functions on `Alg` are inferred appropriately. For example, consider this function which conjugates a number, i.e., flips the sign of the $\sqrt{2}$ part:

```lisp
(define (algebraic-conjugate x)
  (match x
    ((Alg a b) (Alg a (negate b)))))
```

We can see that Coalton has properly inferred the type:

```lisp
> (type-of 'algebraic-conjugate)
(ALG → ALG)
```

Modeling these algebras works out quite well, especially when we have more of them, matrices of them, vectors of them, polynomials of them, and so on. They _compose_ well. We can even make our own `Ring` class so that we can write code that is generic on _any_ ring.

```lisp
(define-class (Ring :t)
  (add-id (:t))              ; additive identity
  (mul-id (:t))              ; multiplicative identity
  (ring-+ (:t -> :t -> :t))
  (ring-* (:t -> :t -> :t)))
```

One can imagine how we could do the same for vector spaces, inner product spaces, and so on. These concepts aren't just theoretical benefits, they're actually routinely used in practice.

We've implemented one number system, but we can endow Coalton further with an understanding of how to convert out of this representation. As a simple example, we can instruct Coalton on how to convert, when possible, an `Alg` into a `Double-Float`:

```lisp
(define-instance (TryInto Alg Double-Float)
  (define (tryInto x)
    (match x
      ((Alg a b)
       ;; An Integer may fail to convert to a Double-Float
       (match (Tuple (tryInto a) (tryInto b))
         ((Tuple (Ok a) (Ok b))
          (Ok (+ a (* b (math:sqrt 2.0d0)))))
         (_ (Err "Can't represent an Alg as a Double-Float")))))))
```

Whenever we need a double-float, we can safely get one by calling `tryInto` on our `Alg` object, and matching the `Ok` case if it succeeded, or the `Err` case if it failed. In this first example, we successfully convert $1+2\sqrt{2}$ into a float $3.828\ldots$ without otherwise being explicit about the conversion. (It figured it out since the other branch returns a `Double-Float`-related value, and both branches must have types that unify.)

```lisp
COALTON-USER> (coalton
                 (match (tryInto (Alg 1 2))
                   ((Ok f) f)
                   ((Err _) (the Double-Float math:nan))))
3.8284271247461903d0
```

Contrast with this example, where $1+10^{1000}\sqrt{2}$ has no cogent representation as a floating-point number, so the code instead returns a "[not a number](https://en.wikipedia.org/wiki/NaN)" value.

```lisp
COALTON-USER> (coalton
                 (match (tryInto (Alg 1 (^ 10 1000)))
                   ((Ok f) f)
                   ((Err _) (the Double-Float math:nan))))
#<DOUBLE-FLOAT quiet NaN>
```

As we can see, Coalton makes working within and between arithmetic systems convenient, explicit, and safe.

## Discrete compilation in quilc

Though perhaps not as effective as mathematics itself, Coalton's facilities handle the Ross-Selinger Clifford+T decomposition algorithm handsomely. This lead to the introduction of a first-of-its-kind feature to a general-purpose quantum compiler: the ability to do discrete compilation of arbitrary quantum programs. We are happy to introduce full-featured discrete compilation into quilc. With quilc, it is now possible to target backends that support the Clifford+T set. There is nothing special the programmer has to do to enable this feature; just build a quilc ISA that only has Clifford+T, and it'll just work.

Discrete compilation is implemented as a part of the [`cl-quil/discrete` contrib module](https://github.com/quil-lang/quilc/tree/master/src/discrete) to quilc. If you're a Lisp developer, all you need to do is load the `cl-quil/discrete` system, and it will Just Work.

We can repeat the compilation of the $M$ operation from before instead for a made-up chip of two qubits that only supports the Clifford+T set. This chip is called `4Q-cliffordt` and is in essence a virtual "test chip". (The output below is reformatted into columns to fit the page.)

```
$ echo 'PRAGMA TOLERANCE "0.001"; XY(pi/3) 1 0' | ./quilc --isa 4Q-cliffordt
T 0       H 0       T 0       H 0       H 1       H 1       H 1       S 1
S 0       T 0       S 0       T 0       T 1       T 1       T 1       H 1
S 0       H 0       H 0       H 0       H 1       H 1       H 1       T 1
S 0       T 0       T 0       T 0       T 1       T 1       T 1       H 1
H 0       S 0       S 0       S 0       S 1       S 1       S 1       T 1
T 1       H 0       H 0       H 0       H 1       H 1       H 1       H 1
CNOT 0 1  T 0       T 0       T 0       T 1       T 1       T 1       T 1
S 0       H 0       S 0       S 0       S 1       S 1       H 1       S 1
H 0       T 0       H 0       H 0       H 1       H 1       T 1       H 1
S 0       S 0       T 0       T 0       T 1       T 1       H 1       T 1
H 0       H 0       H 0       S 0       S 1       S 1       T 1       S 1
T 0       T 0       T 0       H 0       H 1       H 1       S 1       H 1
H 0       H 0       H 0       T 0       T 1       T 1       H 1       T 1
T 0       T 0       T 0       H 0       S 1       S 1       T 1       S 1
S 0       S 0       S 0       T 0       H 1       H 1       S 1       H 1
H 0       H 0       H 0       H 0       T 1       T 1       H 1       T 1
T 0       T 0       T 0       T 0       S 1       S 1       T 1       H 1
S 0       S 0       H 0       S 0       H 1       H 1       H 1       S 1
H 0       H 0       T 0       H 0       T 1       T 1       T 1       S 1
T 0       T 0       H 0       T 0       H 1       S 1       S 1       S 1
S 0       S 0       T 0       S 0       T 1       H 1       H 1       H 1
H 0       H 0       S 0       H 0       S 1       T 1       T 1       S 1
T 0       T 0       H 0       T 0       H 1       S 1       S 1       S 1
S 0       S 0       T 0       S 0       T 1       H 1       H 1       S 1
H 0       H 0       S 0       H 0       S 1       T 1       T 1       CNOT 0 1
T 0       T 0       H 0       T 0       H 1       S 1       H 1       H 0
S 0       S 0       T 0       H 0       T 1       H 1       T 1       T 0
H 0       H 0       H 0       S 0       H 1       T 1       H 1       T 1
T 0       T 0       T 0       S 0       T 1       S 1       T 1       S 1
H 0       S 0       S 0       S 0       H 1       H 1       H 1       S 1
T 0       H 0       H 0       H 0       T 1       T 1       T 1       S 1
S 0       T 0       T 0       S 0       S 1       S 1       S 1
H 0       S 0       S 0       S 0       H 1       H 1       H 1
T 0       H 0       H 0       S 0       T 1       T 1       T 1
S 0       T 0       T 0       S 1       H 1       S 1       S 1
H 0       S 0       H 0       H 1       T 1       H 1       H 1
T 0       H 0       T 0       S 1       S 1       T 1       T 1
```

Notice how every operation in the output is either `H`, `S`, `T`, or `CNOT`. But also notice how there are a _lot_ of operations—290 of them to be exact. (To recount, there were 16 operations for the compilation before, but again, that had to use *continuous* operations.) There are only two differences in how we run the compiler between this and the previous IBM-chip compilation:

1. We had to specify the chip `4Q-cliffordt`. (Quilc will be happy to construct a chip of any requested shape, size, and native operations; `4Q-cliffordt` is just a convenient built-in for testing the discrete compilation machinery.)
2. We had to specify a tolerance, here a discrete compilation accuracy within 0.1% for each approximation made.

If we request more precision, we notice an increase in operation count.

```
$ echo 'PRAGMA TOLERANCE "0.0000001d0"; XY(pi/3) 1 0' | ./quilc --isa 4Q-cliffordt | wc -l
     540
```

Despite being 1.8x the number of operations more, we've also increased precision by 10,000x. This is in line with the efficiency of the Ross-Selinger algorithm: an exponential increase in precision does _not_ mean an exponential increase in compiled output size. Here, we can see the trend in compilation efficiency for different precisions:

***

| Precision             | Operation Count |
| ---------             | --------------- |
| 0.1                   | 152             |
| 0.01                  | 232             |
| 0.001                 | 290             |
| 0.0001                | 354             |
| 0.00001               | 404             |
| 0.000001              | 502             |
| 0.0000001&nbsp;&nbsp; | 540             |

***

One particularly nice thing going on is that the whole machinery quilc uses to optimize programs automatically gets applied. It's not _just_ a discrete compiler, it's an *optimizing* compiler with support for discrete operation sets.

## Inaccuracy gotchas and validating the compiler

With this implementation, the only operation being approximated is $\mathrm{RZ}\_{\theta}$, which means the error will increase with each additional $\mathrm{RZ}_\theta$ used in a given computation. Our `TOLERANCE` pragma asserts the precision of individual approximations, not whole quilc programs. While there are rules that give insight into how these errors accumulate, such notions are not yet readily available to plug into quilc. To get around this requires some trial and error from the user by attempting compilations with increasing precision until a tolerable error is achieved. To help with this, passing `-Pm` to `quilc` will print out the whole program's error. Nonetheless, we are guaranteed the precision of our approximation $U$ is directly related to a tolerance of $\varepsilon$ by:

$$
\left\Vert(\mathrm{RZ}\_\theta - U) v \right\Vert \leq \varepsilon \left\Vert v \right\Vert
$$

where $0 < \varepsilon < 1/2$, $v$ is a two-dimensional complex vector, and $\Vert \cdot \Vert$ is the vector magnitude. We can read the above expression as "the distance between $\mathrm{RZ}\_\theta$ and $U$ is less than or equal to $\varepsilon$."

Measurements of a quantum states are probabilistic, and quantum operations serve to affect a states' probabilities. For a qubit, these are the probabilities of whether we measure a `0` bit or a `1` bit. If two quantum operations are *close*, then the probabilities of each possible measurement resulting from applying the quantum operations to the same quantum state should too be similiar.

With this in mind, we can construct a numerical experiment on a real program example. For our example, we will consider a program which can construct the W state. The **W state** on 3 qubits is defined as

$$
\psi_W := \frac{1}{3}\left(\vert001\rangle + \vert010\rangle + \vert100\rangle\right).
$$

On an ideal quantum computer, if we prepare $\psi_W$ and measure it, we should either get the bitstring `001`, `010`, or `100`, each with equal probability. The following Quil program prepares the W state on a freshly initialized quantum computer:

```
RY(1.9106332362490184) 0      # 2*arccos(1/sqrt(3))
CONTROLLED H           0 1
CNOT                   1 2
CNOT                   0 1
X                      0
```

So, to analyze the effectiveness of our compilation program as written, we execute the following procedure:

0. Determine how many $\mathrm{RZ}\_\theta$ will be approximated and call it $k$. For our W state program, this will be about $K=12$. (The W state program results in about 12 $\mathrm{RZ}\_\theta$ operations on a $\mathrm{CNOT}$ architecture, like the IBM architecture from earlier.)
1. Select a tolerance $\varepsilon$. (We'll successively decrease this.)
2. Compile the W state preparation program with the `TOLERANCE` pragma set to $\varepsilon/K$. An $\mathrm{RZ}\_\theta$ tolerance of $\varepsilon/K$ approximates a global program tolerance of $\varepsilon$.
3. Run the program on the [QVM](https://github.com/quil-lang/qvm), a simulated quantum computer.
4. Measure the resulting state lots of times, on the order of $\lceil 1/\varepsilon^2\rceil$ repetitions, and tally the results to form an empirical distribution.

After running this procedure for each power of two from $2^{-1}$ to $2^{-16}$, we get the following empirical distributions.

***
| $\mathrm{RZ}_\theta$ Tol. &nbsp;&nbsp;&nbsp; | Samples  | `001`      | | `010`      | | `100` |
|----------------------------------------------|:--------:|:----------:|-|:----------:|-|:-----:|
| $\frac{1}{12}2^{- 1}$ | $2^{ 2}$ | 25.000000% | &nbsp;&nbsp;&nbsp; | 50.000000% | &nbsp;&nbsp;&nbsp; | 25.000000% |
| $\frac{1}{12}2^{- 2}$ | $2^{ 4}$ | 50.000000% | &nbsp;&nbsp;&nbsp; | 25.000000% | &nbsp;&nbsp;&nbsp; | 25.000000% |
| $\frac{1}{12}2^{- 3}$ | $2^{ 6}$ | 35.937500% | &nbsp;&nbsp;&nbsp; | 31.250000% | &nbsp;&nbsp;&nbsp; | 32.812500% |
| $\frac{1}{12}2^{- 4}$ | $2^{ 8}$ | 33.203125% | &nbsp;&nbsp;&nbsp; | 27.734375% | &nbsp;&nbsp;&nbsp; | 39.062500% |
| $\frac{1}{12}2^{- 5}$ | $2^{10}$ | 34.277344% | &nbsp;&nbsp;&nbsp; | 30.761719% | &nbsp;&nbsp;&nbsp; | 34.960938% |
| $\frac{1}{12}2^{- 6}$ | $2^{12}$ | 32.421875% | &nbsp;&nbsp;&nbsp; | 35.229492% | &nbsp;&nbsp;&nbsp; | 32.348633% |
| $\frac{1}{12}2^{- 7}$ | $2^{14}$ | 33.489990% | &nbsp;&nbsp;&nbsp; | 33.349610% | &nbsp;&nbsp;&nbsp; | 33.160400% |
| $\frac{1}{12}2^{- 8}$ | $2^{16}$ | 33.461000% | &nbsp;&nbsp;&nbsp; | 33.520508% | &nbsp;&nbsp;&nbsp; | 33.018494% |
| $\frac{1}{12}2^{- 9}$ | $2^{18}$ | 33.374786% | &nbsp;&nbsp;&nbsp; | 33.224487% | &nbsp;&nbsp;&nbsp; | 33.400726% |
| $\frac{1}{12}2^{-10}$ | $2^{20}$ | 33.378030% | &nbsp;&nbsp;&nbsp; | 33.320810% | &nbsp;&nbsp;&nbsp; | 33.301163% |
| $\frac{1}{12}2^{-11}$ | $2^{22}$ | 33.337547% | &nbsp;&nbsp;&nbsp; | 33.331940% | &nbsp;&nbsp;&nbsp; | 33.330513% |
| $\frac{1}{12}2^{-12}$ | $2^{24}$ | 33.338287% | &nbsp;&nbsp;&nbsp; | 33.327377% | &nbsp;&nbsp;&nbsp; | 33.334330% |
| $\frac{1}{12}2^{-13}$ | $2^{26}$ | 33.330345% | &nbsp;&nbsp;&nbsp; | 33.334663% | &nbsp;&nbsp;&nbsp; | 33.334990% |
| $\frac{1}{12}2^{-14}$ | $2^{28}$ | 33.335648% | &nbsp;&nbsp;&nbsp; | 33.335526% | &nbsp;&nbsp;&nbsp; | 33.328827% |
| $\frac{1}{12}2^{-15}$ | $2^{30}$ | 33.335090% | &nbsp;&nbsp;&nbsp; | 33.331825% | &nbsp;&nbsp;&nbsp; | 33.333076% |
| $\frac{1}{12}2^{-16}$ | $2^{32}$ | 33.333412% | &nbsp;&nbsp;&nbsp; | 33.333180% | &nbsp;&nbsp;&nbsp; | 33.333410% |
***

 We can immediately observe the distribution converging toward $1/3$, as expected. Since there are about $3.3$ bits per decimal digit, we see about one correct decimal digit appear for every three rows.

In a similar numerical experiment, we approximate $\psi\_W$ by compiling the program with different tolerances just as before. This time, instead, we produce a (numerically) *exact* state $\tilde\psi_W$ corresponding to our compiled program. Then we calculate a few things:

1. The total number of operations in the compiled program.
2. The percentage of those operations that are $\mathrm{T}$ operations.
3. A $\chi^2$ test on the approximate distribution $\vert\tilde\psi_W\vert^2$ resulting from the calculation of the state by simulating the compiled program.

The following table shows the results of calculating this for tolerances $2^{-2^1}$ to $2^{-2^6}$.

***
| &nbsp;&nbsp;$\mathrm{RZ}_\theta$ Tol. &nbsp;&nbsp; | Operation Count | &nbsp;&nbsp;$\mathrm{T}$ Percentage&nbsp;&nbsp; | $\chi^2$ |  
|:---------:|:---:|:---:|----------:|
| $\frac{1}{12}2^{- 2}$ | 121 | 30% | 8.644d-4 |
| $\frac{1}{12}2^{- 4}$ | 147 | 31% | 5.398d-5 |
| $\frac{1}{12}2^{- 8}$ | 186 | 32% | 2.119d-7  |
| $\frac{1}{12}2^{-16}$ | 262 | 35% | 1.438d-12 |
| $\frac{1}{12}2^{-32}$ | 403 | 39% | 3.346d-22 |
| $\frac{1}{12}2^{-64}$ | 738 | 39% | 2.990d-27 |
***

We see a trend[^wobble] of programs getting linearly longer (with only minor variation in $\mathrm{T}$ percentage) and the $\chi^2$ statistic tending toward zero.

[^wobble]: When this data was taken, from time to time, quilc would result in somewhat "wobbly" data for larger (i.e., worse) tolerance values. For instance, for a tolerance of $2^{-2}$, quilc would occasionally emit an operation count of approximately 500. From time to time, due to the probabilistic nature of the Ross-Selinger algorithm and other parts of quilc itself, one will observe spurious spikes in absolute numbers, though these numbers are still asymptotically correct. The data presented here doesn't represent the *best* values, just qualitatively *usual* values.

These tests, among others, give us confidence in the correctness of the algorithm.

## Conclusion and how to get involved

It's remarkable that Coalton has come to a point that a relatively complicated mathematical algorithm to implement discrete compilation can not only run, but run correctly *and* run efficiently. Coalton is still evolving in order to make programs like these and others faster to write and faster to execute, without compromising on correctness.

The Coalton developement team is always looking for and excited by improvements to the language, especially in the standard library. If you're interesting in helping out with Coalton, please join the [Discord](https://discord.gg/cPb6Bc4xAH)!

### Acknowledgements

Discrete compilation in quilc has been in the works for a while, starting during investigations of the Solovay-Kitaev algorithm during a summer internship at Rigetti Computing many years ago. The development of Coalton and catalyzing the implementation of discrete compilation was supported by the [HRL Laboratories quantum computing group](https://quantum.hrl.com/). We especially acknowledge Erik Davis, Cole Scott, and Brendan Pawlowski for their assistance during development. Eric Peterson, Mark Skilbeck, and Parker Williams each provided valuable feedback to drafts of this post.

