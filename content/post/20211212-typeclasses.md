---
title: "One Reason Typeclasses Are Useful"
date: 2021-12-12
math: true
---

By [Robert Smith](https://twitter.com/stylewarning)

***

*In this post, we explore one way that typeclasses are useful. We do so by first painting ourselves into a corner while building a toy Common Lisp program, and then seeing how Coalton's typeclasses can ameliorate the issues.*

***

## A Graphics Library

Let's write a graphics library. Or, a tad less ambitiously, let's write some routines for performing transformations on 2D points, which might serve as the foundation of a graphics library. We'll be interested in:

1. translations,
2. dilations, and
3. rotations.

All of these transformations have the effect of taking an $(x,y)$ point, and producing a new $(x',y')$ point. First, let's go through what these mean in the language of coordinate pairs, and then how we'd approach implementing it in plain old Common Lisp.

### Translations

Translations represent "sliding" a point along a straight line. They indicate a change of position in a particular direction by a particular distance. We represent this by supplying a $d\_x$ and a $d\_y$ which tell us how much to slide in the $x$- and $y$-direction respectively. So, starting with a point $(x,y)$, and our new point would have coordinates $$x' = x + d\_x$$ and $$y' = y + d\_y.$$ In Lisp, we could write

```lisp
(defun easy-translate (dx dy x y)
  (values (+ x dx) (+ y dy)))
```

### Dilations

*Dilation* is a general term that typically refers to enlarging (or shrinking) something. But points can't get bigger or smaller: they're points. So dilation, in the context of a point, means moving closer or farther away from a fixed origin point. We move the point by scaling its distance from the origin by a certain factor. We could use dilations to implement features like pinch-to-zoom.

If we have a dilation factor of $z$ (for *zoom*), then our $x' = zx$ and our $y' = zy$.

```lisp
(defun easy-dilate (z x y)
  (values (* z x) (* z y)))
```

### Rotations

Rotations are pretty tricky. They usually require trigonometry to calculate. Suppose I have a point $(x,y)$, and I want to rotate it by $\theta$ radians (one radian is about $57.3^{\circ}$) about the origin in a counterclockwise direction. Using Math (TM), the new point $(x',y')$ will have coordinates $$x' = x\cos\theta-y\sin\theta$$ and $$y'=x\sin\theta+y\cos\theta.$$

It's pretty gnarly, and we definitely prefer to bake this in a library so we don't have to remember it.

If all we're going to do is rotate points about the origin, that's easy to do in Lisp.

```lisp
(defun easy-rotate (theta x y)
  (let ((new-x (- (* x (cos theta)) (* y (sin theta))))
        (new-y (+ (* x (sin theta)) (* y (cos theta)))))
    (values new-x new-y)))
```

Next, we'll see how to rotate about an arbitrary point. We actually have all the tools ready to do that.

## Assembling Transformations

So are we done? Have we implemented a complete, if a bit spartan, library for 2D graphics? Well, sort of. _Spartan_ is the operative word. We could assemble complicated animations and graphical transformations by stringing these functions together in various ways. For instance, let's suppose we want to rotate a point $(x,y)$ about some center point $(C\_x, C\_y)$. Easy enough.

```lisp
(defun rotate-around-point (theta cx cy x y)
  (multiple-value-setq (x y) (easy-translate (- cx) (- cy) x y))
  (multiple-value-setq (x y) (easy-rotate theta x y))
  (multiple-value-setq (x y) (easy-translate cx cy x y))
  (values x y))
```

Can you see what's going on here? We first translate so our *frame of reference* is centered at the origin, then we do the rotation, then we translate back. In math, this "do X, do Y, do the opposite of X" is called a *conjugation*. Conjugations happen all the time in graphics programming, because sometimes one frame of reference is easier to work in compared to another. How could we encode a conjugation in Lisp? Well, first, let's give some things names.

A conjugation is a recipe:

1. A transformation to set up the frame of reference; let's call it $F$.
2. An action of interest we want to do in our set-up frame; let's call it $A$.
3. An inverse transformation of our set-up. In math we usually write this as $F^{-1}$, which means "the inverse of $F$".

So, in a sort of Lisp pseudocode, we'd want something like:

```lisp
(defun conjugate (F A x y)
  (multiple-value-setq (x y) (transform F x y))
  (multiple-value-setq (x y) (transform A x y))
  (multiple-value-setq (x y) (inverse-transform F x y))
  (values x y))
```

How in the world do we implement this? Well, we can get part of the way there. One approach is to be very functional about it. That is, we turn our transformations into transformers. What do I mean?

```lisp
(defun translator (dx dy)
  (lambda (x y)
    (easy-translate dx dy x y)))

(defun horizontal-dilator (z)
  (lambda (x y)
    (easy-dilate z x y)))

(defun rotator (theta)
  (lambda (x y)
    (easy-rotate theta x y)))

(defun transform (transformer x y)
  (funcall transformer x y))
```

This may look sort of silly if you're not used to functional programming, but now we can create functions (more specifically, *closures*) that themselves represent a transformation. For example, we could call our fabled `conjugate` function like so:

```lisp
(conjugate (translator -5 -5)
           (rotator (/ pi 2))
           x
           y)
```

This would rotate a point $(x,y)$ about the center point $(5,5)$ at an angle of $\pi/2$ radians (which is $90^{\circ}$). But, we have a big issue. *How do we write `inverse-transform`?*

In this style of functional programming, we can't. Closures don't ordinarily[^closures] let us peek at the data underneath, so we have no way to negate or reverse any numbers.

[^closures]: There's a whole section in the book _Structure and Interpretation of Computer Programs_ that essentially abuses closures enough to allow the programmer to access their internals. But, they're effectively making an object system, and foregoing the "functional"ness of closures.

## Objects to the Rescue!

Every enterprising Lisp programmer knows the next step is to get everything represented as objects. We can make an abstract base class. Sometimes that's useful, but it's not required, so we won't here.

```lisp
(defclass translation ()
  ((dx :initarg :dx :reader translation-dx)
   (dx :initarg :dy :reader translation-dy)))

(defclass dilation ()
  ((factor :initarg :factor :reader dilation-factor)))

(defclass rotation ()
  ((angle :initarg :angle :reader rotation-angle)))
```

Now that we have objects, we can implement a generic function for handling the actual act of transforming points. We can even re-use all of our `easy-` functions.

```lisp
(defgeneric transform (transformation x y))

(defmethod transform ((tran translation) x y)
  (easy-translate (translation-dx tran)
                  (translation-dy tran)
                  x
                  y))

(defmethod transform ((tran dilation) x y)
  (easy-dilate (dilation-factor tran) x y))

(defmethod transform ((tran rotation) x y)
  (easy-rotate (rotaton-angle tran) x y))
```

We've created some objects and have implemented a simple protocol for applying those translations to points. We can add to that protocol, like making a generic function to invert a transformation. This was critical functionality we couldn't do with closures.

```lisp
(defgeneric inverse (transformation))

(defmethod inverse ((tran translation))
  (make-instance 'translation :dx (- (translation-dx tran))
                              :dy (- (translation-dy tran))))

(defmethod inverse ((tran dilation))
  (make-instance 'dilation :factor (/ (dilation-factor tran))))

(defmethod inverse ((tran rotation))
  (make-instance 'rotation :angle (- (rotation-angle tran))))
```

Now we can confidently write our `conjugate` function!

```lisp
(defun inverse-transform (tran x y)
  (transform (inverse tran) x y))

(defun conjugate (F A x y)
  (multiple-value-setq (x y) (transform F x y))
  (multiple-value-setq (x y) (transform A x y))
  (multiple-value-setq (x y) (inverse-transform F x y))
  (values x y))
```

And just like that, our pseudocode has become *real*, *working* code.

At this point, we can go down the rabbit hole deep. For example, why not have a `conjugation` transformation? It could be a class like

```lisp
(defclass conjugation (transformation)
  ((frame-transformation ...)
   (action-transformation ...)))
```

Or perhaps we generalize even more and create a class `composite-transformation` to encode a sequence of transformations. As long as we implement our protocol methods `transform` and `inverse`, we should be good to go.

## Combining Transformations

Another protocol function that seems obvious to implement is a way to combine two transformations. It's pretty easy; the compound effect of two of the same classes of transformation is not too mysterious. Rotation angles add. Translation distances add. Dilation factors multiply.

```lisp
(defgeneric combine (a b))

(defmethod combine ((a translation) (b translation))
  (make-instance 'translation :dx (+ (translation-dx a)
                                     (translation-dx b))
                              :dy (+ (translation-dy a)
                                     (translation-dy b))))

(defmethod combine ((a dilation) (b dilation))
  (make-instance 'dilation :factor (* (dilation-factor a)
                                      (dilation-factor b))))

(defmethod combine ((a rotation) (b rotation))
  (make-instance 'rotation :angle (+ (rotation-angle a)
                                     (rotation-angle b))))
```

One nice aspect of the methods above is that they're relatively efficient; we are eagerly combining transformations into new objects instead of somehow "queueing up" the transformations in a list. If we took a closure-based approach of combining, under the hood, all sorts of pointers would be stored. With enough calls to `combine`, in a closure-based implementation, we would be generating large, inefficient trees of closures that consume lots of time to execute and memory to store.

As discussed in the last section, if we had some sort of `composite-transformation`, then we could easily handle `combine` receiving different classes. But, it won't be necessary for our discussion.

## A Transformation That Does Nothing

I'm not joking when I say this: One of the most important transformations is one that doesn't do anything. Everyone agrees `0` is a useful number, which does nothing when you add; and `1` is a useful number, which does nothing when you multiply. A transformation that keeps a point put is also useful.

There are both practical and mathematical reasons for this. One super practical reason for a do-nothing transformation is that it's a sensible default. Maybe somebody is using your graphics app to implement electrical circuit design software. This design software has settings for the view port, like where we are centered and how zoomed in we are. "Where are we centered?" is answered by a `translation` transformation. Nominally we are centered at the origin, which would be a translation of nothing:

```lisp
(defvar *identity-translation* (make-instance 'translation :dx 0 :dy 0))
```

We call these "do nothing" transformations _identities_, because the input to the transformation is _identical_ to the output of it. We can make identities for the other ones too.

```lisp
(defvar *identity-dilation* (make-instance 'dilation :factor 1))
(defvar *identity-rotation* (make-instance 'rotation :angle 0))
```

These variables could be used as defaults in our circuit design program to indicate the viewport is unperturbed.

Mathematically, we are interested in identity transformations because they're very often the "base case" of many algorithms and procedures[^abstract]. For instance, how would we write a function to make an $n$-fold transformation? For a rotation, it might look like this:

[^abstract]: They're also a critical object in the field of abstract algebra. One often stipulates the existence of an identity element as the first order of business when defining a new algebraic structure.

```lisp
(defun n-fold-rotation (n rotation)
  (make-instance 'rotation :angle (* n (rotation-angle rotation))))
```

It seems silly that we had to implement that for a specific class, and it seems silly that we ought to implement `n-fold` as a protocol function. Don't we have the tools to do it generically? Isn't that what our *generic* function `combine` is for? Yes... at least in principle.

```lisp
(defun n-fold (n tran)
  (if (zerop n)
      '???
      (combine tran (n-fold (1- n) tran))))
```

This procedure[^tail] doesn't account for the base case `???` which we need to fill in. What are our options here?

One option is to just not support the case of $n=0$, but that seems silly and error prone. Another is to hard-code a `typecase` of some sort, but that defeats the point of having a grand object-oriented system. Our last resort option is to define one of two kinds of generic functions.

```lisp
;; Option #1
(defgeneric identity1 (proto-object))

(defmethod identity1 ((proto-object translation))
  *identity-translation*)

;; Option #2
(defgeneric identity2 (class-name))

(defmethod identity2 ((class-name (eql 'translation)))
  *identity-translation*)
```

Of course, imagine we've written these for all of our transformation classes.

Neither of these options are particularly satisfying. The function `identity1` requires a manifested object of our desired type to be present (what if it's not?); and `identity2` requires run-time introspection of class names. So, `n-fold` would be implemented as follows:

```lisp
(defun n-fold1 (n tran)
  (if (zerop n)
      (identity1 tran)
      (combine tran (n-fold (1- n) tran))))

(defun n-fold2 (n tran)
  (if (zerop n)
      (identity2 (class-name (class-of tran)))
      (combine tran (n-fold (1- n) tran))))
```

This code is starting to smell. Before we had a protocol based off of generic functions to define the behavior of our transformations. But now, we are assigning distinguished ones to global variables and providing inelegant access to them by prototype objects or class names.

Moreover, as we've written it here in Lisp, `identity` ought to be a value, but now it must always be accessed as a function. We must be sure to *always* call this function any time we want to perform computation with an identity transformation. Since `identity{1,2}` are *generic functions* return *concrete values*, there is no way to operate on identity *values* generically.

Another way to see this pain is if we revisit implementing our `conjugation` class. It would be nice if we could default the transformations to be identity.

```lisp
(defclass conjugation (transformation)
  ((frame-transformation :initform generic-identity)
   (action-transformation :initform generic-identity)))

```

But we can't do this with our approach above. Something like `generic-identity` doesn't exist[^gid]; `identity1` has to be called *on sometbing* to produce an identity transformation, and that something isn't available to us when writing initforms.

[^gid]: Another approach is to make another class entirely called `identity-transformation` whose sole purpose is to express a singleton value that acts as a generic identity. If we did this, we would need to implement relationships between our concrete transformation classes and this bespoke `identity-transformation` class. At the end of the day, such a construct gets us no closer to being able to work with identity values of given transformation classes in a generic way. 

Briefly summarized, Common Lisp only permits generic functions, not generic values. There are lots of workarounds Lispers employ to get by, but each compromises the design of the program in some way.

## Setting the Stage for Typeclasses

Typeclasses are a way to solve this problem. Typeclasses allow us to associate almost any function *or value* with one or multiple types. Unfortunately, Common Lisp does not have typeclasses, so we'll have to use an embedded domain-specific language called Coalton to make sense of them. Before we dive into that, we need to recapitulate what we've written so far about transformations, ported to Coalton. Fortunately, it's easy.

We can define a new data type in Coalton with `define-type`.

```lisp
;;                   BOA constructors
;;           type names   |||||          slots
;;           vvvvvvvvvvv  vvvvv vvvvvvvvvvvvvvvvvvvvvvvvv
(define-type Point       (Pt    Single-Float Single-Float))
(define-type Translation (Trans Single-Float Single-Float))
(define-type Rotation    (Rot   Single-Float))
(define-type Dilation    (Dil   Single-Float))
```

These should be read as follows:

> "A `Point` is a type that is constructed by calling `Pt` on two `Single-Float` values. A `Translation` is a type that is constructed by calling `Trans` on two `Single-Float` values. A `Rotation` is a type that is constructed by calling `Rot` on one `Single-Float` value. A `Dilation` is a type that is constructed by calling `Dil` on one `Single-Float` value."

If that was boring to read, that was intentional. These `define-type`s are extremely simple; they try to be as minimal as possible, without requiring slot names, getters, initargs, or any of that to be specified.

The `define-type` operator is _very_ flexible; we are just seeing the surface. Full-blown algebraic data types with parametric type variables are possible with `define-type`, but we won't get into that.

As you'd see in any Haskell or OCaml book, we can write simple functions on these types. Maybe the simplest are functions to extract the $x$- and $y$-coordinates from a `Point`.

```lisp
(define (coord-x p)
  (match p
    ((Pt x _) x)))

(define (coord-y p)
  (match p
    ((Pt _ y) y)))
```

This doesn't do any computation, just pulls the innards of a `Point` out, by using *pattern matching* and *destructuring*.

A little more complicated, let's write a function that calculates the distance that a `Translation` travels.

```lisp
(declare distance (Translation -> Single-Float))
(define (distance t)
  (match t
    ((Translation dx dy) (sqrt (+ (* dx dx) (* dy dy))))))
```

This is similar to the last example, but we are actually computing something with the innards. In this case, and indeed almost all cases, the `declare` is totally optional, and is automatically inferred by the Coalton compiler.

Surprisingly, this is _all_ we need to start talking about typeclasses.

## Typeclasses Are Structured Protocols

A typeclass is like a protocol where we have to specify our protocol functions upfront, along with their inputs and outputs. Equally importantly, we can also require that _values_ are specified as a part of this protocol. In Coalton, we represent transformations as a typeclass like so.

```lisp
(define-class (Transformation :t)
  (transform (:t -> Point -> Point))
  (inverse   (:t -> :t))
  (combine   (:t -> :t -> :t))
  (identity  (:t)))
```

How do we read this?

> "The generic type `:t` is a `Transformation` if it has defined methods `transform`, `inverse`, and `combine`; as well as a distinguished value called `identity`."

In addition, as can be seen, the precise types of each of these is known. The syntax

```lisp
(:t -> :t -> :t)
```

should be read[^types] as "a function that needs two `:t`'s to produce a `:t`." Similarly,

```lisp
(:t -> Point -> Point)
```

should be read as "a function that takes a `:t` and a `Point` and produces a `Point`. Simplest of all,

```lisp
(:t)
```

reads "an element of type `:t`."

Maybe you've anticipated it, but now we can opt-in our transformation data types into this typeclass. We *instantiate* the typeclass with types. Let's start with dilation, because it's the least to type.

```lisp
(define (dilation-factor d)    ; convenience getter
  (match d
    ((Dil factor) factor)))

(define-instance (Transformation Dilation)
  (define (transform d p)
    (let ((f (dilation-factor d)))
      (Pt (* f (coord-x p)) (* f (coord-y p)))))

  (define (inverse d)
    (Dil (/ 1.0 (dilation-factor d))))

  (define (combine d1 d2)
    (Dil (* (dilation-factor d1)
            (dilation-factor d2))))

  (define identity (Dil 1.0)))
```

We could do precisely the same for each of the other types. It leads to exceedingly compact code, while also being completely type-safe. It is *not possible* in Coalton to have any of your instance functions consume *or* produce an incorrect type. It will all be statically verified to be correct when your code compiles.

So, assuming we've finished writing

```lisp
(define-instance (Transformation Translation) ...)
(define-instance (Transformation Rotation)    ...)
```

surely we should be able to write `conjugate` and `n-fold`? Let's start with what `conjugate`'s formal type should be.

```lisp
(declare conjugate ((Transformation :s) (Transformation :t)
                    => :s -> :t -> Point -> Point))
```

Everything before the `=>` are *constraints*. They tell us what has to be true about type variables like `:s` and `:t`. Everything after `=>` is the ordinary type. So in this case, we read

> "Given transformation types `:s` and `:t`, `conjugate` is a function that takes an `:s`, a `:t`, and a `Point`, and produces as output a new `Point`."

The type of `n-fold` is even easier.

```lisp
(declare n-fold ((Transformation :t) => Integer -> :t -> :t))
```

It reads similarly. What are the implementations then?

```lisp
(define (conjugate F A p)
  (pipe p (transform F)
          (transform A)
          (transform (inverse F))))

(define (n-fold n t)
  (if (== n 0)
      identity
      (combine t (n-fold (- n 1) t))))
```

That's it. Notice how we could simply write `identity` there as a bare variable. The Coalton compiler will figure out _what_ identity you want, and _guarantee_ an identity exists for your type `:t`.

## Typeclasses in the Big Picture

Typeclasses are like formalized protocols, but in some ways they're more flexible because Coalton does work to determine the type of everything. Just like in Common Lisp, protocols don't have to be about just one object class, they can also stipulate relationships between object classes. One of the classic examples in Lisp is a `draw` protocol:

```lisp
(defgeneric draw (object medium))
```

We can specialize `draw` to work with *any* object and *any* medium combination. Similarly in Coalton, we can make a typeclass:

```lisp
(define-class (Drawable :obj-type :med-type)
  (draw (:obj-type -> :med-type -> Unit)))
```

`Drawable` is a way to specify a relationship between an `:obj-type` and a `:med-type`, and we can program in as many of them as we want.

More importantly, though, and where Lisp falls short, is that typeclasses can establish relationships with and effectively dispatch on _return types_. For example, consider the typeclass[^into]

[^into]: In the Coalton standard library, the typeclass `Into` takes the role of `Convertible`, and the instance method `into` takes the role of `convert`.

```lisp
(define-class (Convertible :from :to)
  (convert (:from -> :to)))

(define-instance (Convertible Boolean Integer)
  (define (convert b) (if b 1 0)))
```

This typeclass says that a type `:from` can be converted to a type `:to` via the `convert` function. Critically, though, we don't have to specify what `:to` must be anywhere we actually call or use `convert`, _even as a high-order function_.

Here, we give a concrete example of converting `Boolean` to `Integer`. In the following code, `convert` will _automatically_ select the right output type _based on the context of the call_.

```lisp
(define (middle xs )
  (let ((len (length xs)))
    (index xs (+ (floor/ len 2)
                 (convert (odd xs))))))
```

Here, it is deduced that `convert` _must_ return an `Integer`, and also that `odd` returns a `Boolean`, so it selects the right instance of `Convertible` to convert the Boolean value into an integer one.

There is no equivalent concept in Common Lisp, because all types are dynamic. The closest we have in Common Lisp is using `eql` specializers or similar:

1. `cl:map` takes a symbol as its first argument which denotes the output type of the call. So `(map 'string #'code-char xs)` will return a string, because we said so explicitly. Common Lisp does not allow `map` to deduce its return type based off of the surrounding context, and effectively cripples `map` from being used polymorphically.

2. `cl:coerce` takes a symbol as a second argument which denotes how a value should be "coerced" into another value. The maladies are equivalent to `cl:map`; it cannot be used polymorphically in most circumstances.

These are mere examples from the Common Lisp standard library. The same sorts of patterns show up all the time in ordinary Common Lisp code.

## Conclusion

Common Lisp is renowned for its powerful object system, CLOS. Protocol-oriented programming in Common Lisp has demonstrated very effective in lots of application areas. However, the approach is easily suffocated as soon as we have some sort of dependence on output value. We saw two examples of this:

1. The case that a variable itself is the "output value", like the `identity` element of a certain data type.
2. The case where we have a function which is polymorphic on its output, and whose output depends on its relationship with its input, like the function `convert` or its spiritual Common Lisp equivalent `cl:coerce`.

As such, we can conclude that typeclasses are a powerful way to express dynamic, polymorphic code with the benefits and guarantees of static typing.

[^tail]: We could easily write this as a loop or as a tail-recursive procedure.

[^types]: There is more nuance to this. It has to do with the fact that functions in Coalton only accept one argument, technically.
