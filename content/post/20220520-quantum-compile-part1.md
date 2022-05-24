---
title: "Using Coalton to Implement a Quantum Compiler: Part 1 of 2"
date: 2022-05-20
---

By [Elias Lawson-Fox](https://github.com/eliaslfox), [Aidan Nyquist](https://github.com/aijony), and [Robert Smith](https://twitter.com/stylewarning)

***

_This is the first part of a two-part series on using Coalton to build a quantum compiler called quilc. The second part is [here](???)._

***

## Common Lisp and the quilc compiler

[Quilc](https://github.com/quil-lang/quilc) is one of the best optimizing compilers for quantum computers. It is written in Common Lisp and is capable of taking arbitrary quantum programs written in [Quil](https://quil-lang.github.io/), and compiling and optimizing them into code that conforms to the majority of quantum computing architectures that exist today.

Common Lisp has been a great choice for many reasons, including for its interactive debugging facilities and its efficient implementations like Steel Bank Common Lisp. But quilc development hasn't been without trouble. Quilc is a large and complex program, and as such, we often lack confidence in the correctness of the program when making large changes. Confidence would wax and wane with the coming and going of different kinds of bugs, like

- classic type errors, "got X but expected Y",
- data structure inconsistency errors,
- numerical precision errors, and
- plain old wrong answers.

In addition to bugs, from time to time, quilc developers would feel that Common Lisp wasn't allowing certain specific mathematical ideas to be clearly expressed, since Common Lisp's standard library for numbers and math is "locked shut" by the language standard. There is no way to extend its behavior or install new behavior.

Programming language theorists around the world have been and continue to work to help programmers avoid these mistakes by making compilers smarter and programming languages more expressive. There are *vast* efforts in domains like formal verification, advanced type theory, proof assistants, and so on whose primary goal is to make writing safer, bug-free programs easier. One such research project that has been around since the 1990s is [ACL2](https://www.cs.utexas.edu/users/moore/acl2/), which is effectively a subset of Common Lisp that permits code to be _mechanically_ proven to be correct. Famously, after the Intel `FDIV` bug was discovered, ACL2 was used in 1995 to prove that floating point division of the AMD K5 processor was correct.

The suite of tools for working with the Quil programming language, including the Quil compiler and the Quil simulator, is currently around 50,000 lines of Common Lisp, and much of it is dense and mathematical. As such, it's not economical to rewrite wholesale, and it's not feasible to use existing theorem-proving tools to an extent that would address our concerns.

## Coalton to the rescue, maybe?

For years, we have been working on a programming language called Coalton. The language sought to improve things in a different way: Offer an extension to Common Lisp that allows many of the fruits of programming language theory and type theory to be used without requiring wholesale adoption. Coalton's approach is to introduce an embedded ML-like language, that can be written within and totally interoperate with Common Lisp, that doesn't give up on an expressiveness and and safety afforded by a modern compile-time type system.

Fast-forward some time, and Coalton made its [debut](https://coalton-lang.github.io/20211010-introducing-coalton/). One could now write code with many of the virtues and benefits of Standard ML, OCaml, or Haskell, straight inside of Common Lisp: single-namespace, currying, algebraic data types, type inference, ad hoc and parametric polymorphism, etc. We now have an expressive and relatively safe language which we can use in Lisp, but we weren't going to immediately rewrite all of quilc from the ground up. So, where do we start?

Our first approach was to take a small, relatively inconsequential module of quilc and slowly Coalton-ify it. The module implemented a compiler pass called _gate fusion_, which takes quantum instructions (called _gates_) and finds opportunities to fuse them into a more efficient form. This module uses lots of arrays of doubly linked lists. We wrote an array-of-double-linked-lists data structure in Coalton, ported the code, and ultimately, we weren't happy with the results. The virtues of mostly pure, statically typed functional programming didn't actually make the code any clearer. We were left with a mess of hacks, unbridled mutation, pointer emulation, and so on just to make this code work in Coalton.

What went wrong? Empty promises of functional programming? The complexity of the real world? We did a retrospective and concluded a few things.

First, the Coalton standard library was just too anemic. Standard, robust data structures didn't exist, and we had to implement some from scratch to just get the job done, without a lot of regard to generality, efficiency, safety, etc. So, certainly, the standard library could be improved.

Second, "porting" idiomatic Common Lisp line-by-line probably isn't the right approach in general. A decent amount of idiomatic Lisp code relies on mutation and imperative loops. Doing a one-to-one port to Coalton is possible—sometimes even easy—but the result isn't satisfying.

Third, the specific module we ported mostly took existing data structures and modified them. The existing data structures weren't game to be touched, lest we wanted to modify a lot more of quilc to be Coalton-compatible. So, we had to write Coalton with one hand tied behind our back.

It was a valuable case study, and we learned a lot from it, but we needed to try something different.

## Towards a Discrete Instruction Set for Quantum Computation

A typical quantum program is comprised of a sequence of operations that can be expressed mathematically as square matrices of complex numbers. The matrices are *unitary*—which means the matrices can never stretch or shrink a vector they multiply onto—and they have to have a power-of-two size. Just like classical computers, quantum computers have a set of operations they can natively perform. Quantum computers typically have only a small handful. For example, the set of native operations of an IBM quantum computer is:

$$
\begin{align*}
\mathrm{RX}_{\pi/2} &:= \begin{pmatrix}\tfrac{1}{\sqrt{2}} & i\tfrac{1}{\sqrt{2}} \\ i\tfrac{1}{\sqrt{2}} & \tfrac{1}{\sqrt{2}}\end{pmatrix}\\
\mathrm{RX}_{-\pi/2} &:= \begin{pmatrix}\tfrac{1}{\sqrt{2}} & -i\tfrac{1}{\sqrt{2}} \\ -i\tfrac{1}{\sqrt{2}} & \tfrac{1}{\sqrt{2}}\end{pmatrix}\\\mathrm{RZ}_{\theta} &:= \begin{pmatrix}\cos\tfrac{\theta}{2}-i\sin\tfrac{\theta}{2} & 0 \\0 & \cos\tfrac{\theta}{2}+i\sin\tfrac{\theta}{2}\end{pmatrix}\\
\mathrm{CNOT} &:= \begin{pmatrix}1 & 0 & 0 & 0\\0 & 1 & 0 & 0\\0 & 0 & 0 & 1\\0 & 0 & 1 & 0\end{pmatrix}
\end{align*}
$$
In this case, $\theta$ is actually parametric and can be any value between $0$ and $2\pi$.

It is a surprising fact that you can build *any* $2^n\times 2^n$-size complex unitary matrix out of the above matrices by way of matrix multiplications and Kronecker products. For example, consider the relatively innocent-looking matrix

<TODO: CHANGE MATRIX>
$$
\begin{pmatrix}1 & 0 & 0 & 0\\0 & 1 & 0 & 0\\0 & 0 & 1 & 0\\0 & 0 & 0 & -1\end{pmatrix}.
$$
This matrix is known as `CZ` in the quantum computing field. With some laborious math, one can determine that the `CZ` matrix can be written as follows:
$$
\left[\mathrm{RZ}_{\pi}\otimes(\mathrm{RZ}_{\pi/2}\cdot\mathrm{RX}_{\pi/2}\cdot\mathrm{RZ}_{\pi/2})\right]
\cdot\mathrm{CNOT}\cdot
\left[\mathrm{RZ}_{\pi}\otimes(\mathrm{RZ}_{\pi/2}\cdot\mathrm{RX}_{\pi/2}\cdot\mathrm{RZ}_{\pi/2})\right].
$$
Notice how _only_ the aforementioned list of native operations are used, and how they're combined using multiplication (syntactically: $A\cdot B$) and Kronecker products (syntactically: $A\otimes B$). While it would be appealing to describe Kronecker products in more detail in this blog post, for the sake of brevity, we'll just consider them a separate kind of matrix multiplication.

One of the primary tasks of a quantum compiler is to break down arbitrary unitary matrices, usually given by the quantum programmer, into a sequence of native ones. Quilc can recover the above result like so:

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

Using software engineering terminology, we say we've _compiled_ the `CZ` matrix into the native operations of an IBM quantum computer. In quilc's output, the numbers `0` and `1` denote how to do the Kronecker products. For example, the syntax

```
A 1
B 0
```

represents the Kronecker product $A\otimes B$.

Different quantum computers have a different set of native operators, so quilc must be a retargetable compiler. This mathematical puzzle is interesting and already quite difficult, but lurking is also an engineering problem of great concern.

Almost every quantum computer in use today has some sort of _continuous_ operation—possibly many—like the $\mathrm{RZ}_\theta$ above. These continuous operations represent the analog nature of these quantum computers. Analog devices have their merits, but one thing analog hardware usually isn't good at is extreme precision. While I might request the quantum computer perform an $\mathrm{RZ}_{0.12345}$, due to the computer's physical nature, it might only accomplish something between an $\mathrm{RZ}_{0.11}$ and an $\mathrm{RZ}_{0.13}$. Quantum hardware engineers around the world, every day, are putting effort into improving the precision of the available native operations, but it'll never be  to feasible have _infinite_ precision, simply due to physical limitations. Just like high fidelity analog audio, we can never eliminate 100% of the noise in a system.

Can there instead be some set of _discrete_ native operations while still being able perform _any_ quantum computation we'd like? And if we have such a set, will it be *easy and efficient* to compile a given matrix? These two questions represent the problem of **discrete compilation** of quantum programs.

Fortunately, the answer to both questions is a resounding _yes_, with a small but reasonable caveat. Robert Solovay and Alexei Kitaev both proved this was possible in the mid-90s. Their algorithm is flexible in allowing a large family of discrete operation sets, and decompositions of arbitrary matrices into any of those discrete operations were efficient to calculate, at least as far as big-O is concerned. The caveat is this: It is not possible to find an _exact_ sequence of native operations to reconstruct a given matrix. Instead, we can only get _arbitrarily close_, at the expense of running more native operations.

This is perfectly sensible. If we want to do arbitrary precision arithmetic on a classical computer (like calculating billions of digits of $\pi$), we must use more CPU instructions. CPU instructions only let us do a relatively small collection of operations: basic arithmetic on "small" integers (integers less than $2^{64}$) and floating-point numbers. If we want to go beyond 64 bits of integer, or go beyond 16ish digits of floating-point mantissa, we need to spend more memory and more CPU instructions.

The Solovay-Kitaev algorithm is famously difficult to implement, and relies on a great deal of pre-processing to accomplish, but it's useful both for its mathematical utility and its generality.

About 20 years after Solovay and Kitaev's work, Peter Selinger came up with another idea. Using a specific native operation set (called the Clifford+T set), and making careful use of algebraic number theory, not only can we have merely "good" big-O performance, we could also have nearly _optimal-length_ decompositions, off only by a constant number of operations. (Peter Selinger and Neil Ross were later able to modify the algorithm so that it produces *actually* optimal sequences... but you need a machine that can efficiently factorize integers to do that.)

## The Selinger Approach to Discrete Compilation

Selinger considers the following native operators:
$$
\begin{align*}
\mathrm{H} &:= \frac{1}{\sqrt 2}\begin{pmatrix}\tfrac{1}{\sqrt{2}} & \tfrac{1}{\sqrt{2}} \\ \tfrac{1}{\sqrt{2}} & -\tfrac{1}{\sqrt{2}}\end{pmatrix}\\
\mathrm{S} &:= \begin{pmatrix}1 & 0 \\0 & i\end{pmatrix}\\
\mathrm{T} &:= \begin{pmatrix}1 & 0 \\0 & \tfrac{1}{\sqrt{2}}+i\tfrac{1}{\sqrt{2}}\end{pmatrix}
\end{align*}
$$
This is called the _Clifford+T set_. These operators have mathematical significance because (1) the $\mathrm{H}$ and $\mathrm{S}$ form a special algebraic space called the one-qubit Clifford group, and (2) $\mathrm{T}$ happens to equal $\sqrt{\mathrm{S}}$, and (3) arbitrary products of these operators form a _dense_ set of the unitary matrices. The third point means to say is that this set of operators can be used to approximate any $2\times 2$ unitary matrix to an arbitrary precision.

Next, Selinger turns to a result by Kliuchnikov, Maslov, and Mosca which says a given $2\times2$ matrix can be written precisely as a product of Clifford+T elements if and only if the matrix elements are all members of the number ring $R := \mathbb{Z}[\tfrac{1}{\sqrt 2}, i]$. So Selinger sets up the following goal: Try to write the problematic parametric gate $\mathrm{RZ}_\theta$  as a matrix
$$
\begin{pmatrix}
a & -b^*\\b & a^*
\end{pmatrix}
$$
with user-selectable precision, where $a$ and $b$ are elements of $R$, and $z^*$ represents the complex conjugate of $z$. If we can write this matrix, then we can use Kliuchnikov-Maslov-Mosca to write it in terms of Clifford+T. And if we can do _that_, then we can write any program with parametric $\mathrm{RZ}_\theta$ operators into an equivalent one (up to user-specified precision, at least) using only discrete operators.

Selinger succeeds at solving this problem, by turning that matrix problem into a Diophantine equation that has to be solved over a specific number ring, and coming up with an algorithm to solve that.

Since the two-qubit operators of usual interest are already discrete (like `CNOT`, `CZ`, etc.), this would make a fully discretized native gate set, so long as quantum computer implementers could supply the Clifford+T set as native operations.

Already, even without the gory details of _how_ to find the approximating matrix, we see we're in for quite a ride. There's a lot of machinery we'll need, but one piece that sticks out is the need to do arithmetic over the ring $\mathbb{Z}[\tfrac{1}{\sqrt{2}},i]$. If we let $\omega:=(1+i)/\sqrt{2}$, then with a bit of exercise, we can see that elements of $\mathbb{Z}[\tfrac{1}{\sqrt{2}},i]$ all take the following form:
$$
\frac{a_0}{2^{n_0}}+\frac{a_1}{2^{n_1}}\omega+\frac{a_2}{2^{n_2}}\omega^2+\frac{a_3}{2^{n_3}}\omega^3,
$$
where $a_\bullet$ are integers and $n_\bullet$ are non-negative integers. If we take two elements of this form and add or multiply them, we'll always end back up in the same ring.

It turns out we also need to work in other rings, like the cyclomatic integers of degree 8 and the quadratic integers of $\sqrt{2}$. At least in principle, Common Lisp would have no trouble representing elements of any of these rings; just define some new classes, perhaps some new methods like `ring+` and `ring*`, and you're off to the races.

The trouble is that it's cumbersome. In Lisp, first, there's no way to integrate with the existing numerical operators; there is no way to "overload" the standard operator `cl:+` to work with different rings. Second, as explained in a previous blog post, there's no way to uniformly treat additive and multiplicative identity in a convenient fashion. Third, it gets very messy, with lots of casts, upconversions, downconversions, etc. It's very difficult to build a _new_ numerical tower atop of or aside Common Lisp's existing one.

These difficulties presented a second opportunity for Coalton. Coalton's builds its fundamental abstractions from a different starting point, making this kind of mathematics easier and safer to express. As such, we used this as a testing ground to implement new functionality of quilc in Coalton.

## Coalton to the rescue, take two

Coalton is based around a system of organized polymorphism (called *type classes*) that allows for extensibility and composability in a statically typed manner. For example, this ring of algebraic numbers
$$
\mathbb{Z}[\sqrt{2}] = \left\{a_1 + a_2\sqrt{2} : a_1,a_2\in \mathbb{Z}\right\}
$$
can be modeled as pairs of integers $[a_1;\;a_2]$ that obey certain laws. For instance, with a little bit of algebra, we can derive a multiplication law like so:
$$
\begin{align*}
[a_1;\; a_2]\cdot [b_1;\; b_2]
                         &= (a_1 + a_2\sqrt{2})(b_1 + b_2\sqrt{2})\\
                         &= a_1b_1 + a_1(b_2\sqrt{2})+ (a_2\sqrt{2})b_1+(a_2\sqrt{2})(b_2\sqrt{2}) \\
                         &= (a_1b_1 + 2a_2b_2) + (a_1b_2+a_2b_1)\sqrt{2}\\
                         &= [a_1b_1+2a_2b_2;\; a_1b_2+a_2b_1].
\end{align*}
$$
These algebraic numbers could be written as a new type called `AlgNum` in Coalton that implements the `Eq` type class (which demands we implement equality) and the `Num` type class (which demands we implement addition, subtraction, multiplication, and some way to convert an integer into our new type):

```lisp
  (define-type AlgNum
    "Represents the algebraic number a1 + a2 * sqrt(2)."
    (AlgNum Integer Integer))

  (define-instance (Eq AlgNum)
    (define (== a b)
      (match (Tuple a b)
        ((Tuple (AlgNum a1 a2) (AlgNum b1 b2))
         (and (== a1 b1) (== a2 b2))))))
  
  (define-instance (Num AlgNum)
    (define (+ a b)
      (match (Tuple a b)
        ((Tuple (AlgNum a1 a2) (AlgNum b1 b2))
         (AlgInt (+ a1 b1) (+ a2 b2)))))
    (define (- a b)
      (match (Tuple a b)
        ((Tuple (AlgNum a1 a2) (AlgNum b1 b2))
         (AlgInt (- a1 b1) (- a2 b2)))))
    (define (* a b)
      (match (Tuple a b)
        ((Tuple (AlgNum a1 a2) (AlgNum b1 b2))
         (AlgInt (+ (* a1 b1) (* 2 (* a2 b2)))
                 (+ (* a1 b2) (* a2 b1))))))
    (define (fromInt n)
      (AlgNum n 0)))
```

We can verify it works by seeing that $(1-2\sqrt{2})^2 = 9-4\sqrt{2}$:

```lisp
> (coalton (* (AlgNum 1 -2) (AlgNum 1 -2)))
#.(ALGNUM 9 -4)
```

Since `Num` requires `fromInt` to be defined, any `Num` type, including our own `AlgNum`, permits overloading integer syntax. We don't have to laboriously write `(fromInt 2)` every time we want to use integer syntax as a shorthand for our `AlgNum` type.

```lisp
> (coalton (* 2 (AlgNum 0 -1)))
#.(ALGNUM 0 -2)
```

As is to be expected at this point, functions on `AlgInt` are inferred appropriately.

```lisp
(define (algebraic-conjugate x)
  (match x
    ((AlgNum a b) (AlgNum a (negate b)))))
```

We can see that

```lisp
> (type-of 'algebraic-conjugate)
(ALGNUM → ALGNUM)
```

Modeling these algebras works out quite well, especially when we have more of them, matrices of them, vectors of them, polynomials of them, and so on.

Though perhaps not as effective as mathematics itself, Coalton's facilities handle the Selinger  Clifford+T decomposition algorithm handsomely. This lead to the introduction of a first-of-its-kind feature to a general-purpose quantum compiler: the ability to do discrete compilation of arbitrary quantum programs. This is now implemented as a part of the [`cl-quil/discrete` contrib module](https://github.com/quil-lang/quilc/tree/master/src/discrete) to quilc.

<TODO: CHANGE MATRIX>

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
2. We had to specify a tolerance, here a discrete compilation accuracy within 0.1% _for each discrete compiler invocation_. (This means multiple calls to the discrete compiler will accumulate error.)

We can do some interesting calculations, such as "how many gates does it take to approximate $\mathrm{XY}(\pi/6)\cdot(\mathrm{H}\otimes\mathrm{H})$ to $10^{-6}$ accuracy?"

```
$ echo 'PRAGMA TOLERANCE "0.000001"; XY(pi/6) 1 0' | ./quilc --isa discrete2 | wc -l
     473
```

One particularly nice thing going on is that the whole machinery quilc uses top optimize programs automatically gets applied.

Using a Quil simulator called the QVM, we can compare these 

```

```



## Intermission

We've seen how some of Coalton's features were used to implement discrete compilation in quilc. Of particular note are type classes and their role in allowing us to define new number types.

However, the tower of abstractions does cause one significant issue: degraded performance. The faster a compiler gets its job done, the better it is for the programmer. In order to make quilc's discrete compilation feature more useful, we had to upgrade Coalton's strategies for optimizing highly polymorphic programs, which we delve into in [Part 2](???).