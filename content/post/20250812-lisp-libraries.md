---
title: "Using Common Lisp Libraries from Coalton"
date: 2025-08-12
math: false
---

By [Robert Smith](https://twitter.com/stylewarning)


*We discuss how we can make an efficient, type-safe interface to existing libraries written in Common Lisp so that they can be used in other Coalton code.*

{{< toc >}}

One of Coalton's headline features is that it's embedded in Common Lisp, and allows the use of Common Lisp code via the `lisp` operator. However, it's not immediately obvious how one can use Common Lisp when Coalton is strongly typed. How do we do it?

Here we describe an approach to using a Common Lisp library from Coalton step-by-step. This post is an introduction to the matter with a first non-trivial example, and serves as a jumping-off point for more advanced Coalton–Common Lisp interactions.

## Do we even need a library?

Suppose we are interested in using the `split-sequence` library because we want to separate a string by some character:

```
CL-USER> (split-sequence:split-sequence #\, "Doe,John,S")
("Doe" "John" "S")
10
```

The first step should be to check whether the language has something built in already. To do this, we go to the [Reference](https://coalton-lang.github.io/reference/) and type a reasonable sounding function name in the search bar. If we search `split`, we see two results. Clicking the one in the `coalton-library/list` package seems to be the one we want.

```
COALTON-USER> (coalton (coalton-library/list:split #\, "Doe,John,S"))
("Doe" "John" "S")
```

In our program, we might make a local nickname for this package by adding this to our `defpackage` definition:

```
(:local-nicknames
 (#:list #:coalton-library/list))
```

so that we may simply type `list:split`.

## Find a library and create a package

Ok, maybe splitting string is pretty easy, and it's par for the course to have such a function in a programming language's standard library. What about something more complicated, like dates and times?

The Lisp library [`local-time`](https://local-time.common-lisp.dev/manual.html) is a famous and robust library for dealing with such. The `local-time` package exports nearly 100 symbols, so it gives us enough surface area to do something at least a little more difficult than string splitting.

We will want to set up a Lisp project as usual with a `.asd` and all. In particular though, we'll want to create a new package within which we will put our "bindings" to `local-time`.

```
(defpackage #:coalton-time
  (:use #:coalton #:coalton-prelude)
  (:local-nicknames
   (#:lt #:local-time)
   ;; other nicknames to appear
   )
  (:export
   ;; our exports to appear
   ))

(in-package #:coalton-local-time)

(named-readtables:in-readtable coalton:coalton)

(coalton-toplevel
  ;; our code to appear
)
```

After we add `"coalton"` and `"local-time"` as dependencies in our `.asd`, and add the above to our project, we can load it and go into this package from our REPL.

```
CL-USER> (in-package #:coalton-time)
#<COMMON-LISP:PACKAGE "COALTON-TIME">
COALTON-TIME> 
```

We will not write `coalton-toplevel` around all of the code below; it is assumed Coalton code is sitting in this form.

## Identify the rough API

What kind of API do you want? Usually going roughly 1:1 is easiest. Here, we'll focus on an API that provides the following:

- A type for timestamps,
- A few ways to make timestamps,
- Comparison of timestamps, and
- Basic manipulation of timestamps.

From the `local-time` library, we will want

- The `lt:timestamp` class with readers `lt:day-of`, `lt:sec-of`, and `lt:nsec-of`;
- The constructor functions `lt:make-timestamp`, `lt:now`, and `lt:today`;
- The comparison functions `lt:timestamp`{`<`,`<=`,`>`,`>=`,`=`,`/=`}; and
- The offset function `lt:timestamp+`.

The goal is to make the above functionality accessible from Coalton in a straightforward and ideally efficient way.

## Decide on a binding strategy

This step comes down to a choice. There are two main strategies for binding: Direct Style and Native Style.

- **Direct Style**: Bind to the types and functions as closely and directly as possible with minimal (usually zero) overhead, at the expense of a slightly more cumbersome API.

- **Native Style**: Create a nicer, "Coalton-native" API and wrangle the Common Lisp library functions to implement it, possibly at the expense of efficiency, most often due to marshalling data between different types.

In most cases, you will probably want the first option. The reason is that, in general, it's better to have an efficient, nearly 1:1 interface to a library, on top of which fancier APIs can be built if needed or desired. As it turns out, most Direct Style interfaces in Coalton are actually quite nice.

## Define the types
The `local-time` library has a single workhorse type, the `lt:timestamp`. In Direct Style, this is easy to make this type known to Coalton.

```
(repr :native lt:timestamp)
(define-type TimeStamp)
```

This tells the Coalton compiler that when it sees the type `TimeStamp`, it should expect the underlying representation to be an `lt:timestamp`. In contrast, with Native Style, we'd make an entirely new type.

```
;; Native Style
(define-struct TimeStamp
  (day Integer)
  (sec Integer)
  (nsec Integer))
```

We would then write a bunch of functions to get an `lt:timestamp` and convert it to our `TimeStamp` internally. As said before, we will not inquire further on the Native Style.

The `local-time` library has other types and pseudotypes[^pseudo], but this should be sufficient.

[^pseudo]: By "pseudotype", I mean _ad hoc_ types usually constructed from lists, symbols, cons pairs, etc.

In order to finish the binding for this type, we need plain ways of accessing and constructing this type. We can bind the functions provided by `local-time`. Let's start with the accessor `lt:day-of`. We just define a normal Coalton function with a type declaration, and embed Lisp code directly in the `lisp` form. Since `TimeStamp` is a native `local-time` object, we can pass it into the `lisp` form perfectly safely.

```
(declare day-of (TimeStamp -> Integer))
(define (day-of ts)
  (lisp Integer (ts)
    (lt:day-of ts)))
```

We can do similarly for `sec-of` and `nsec-of`.

Internally, Coalton is going to make _new_ functions that wrap the Lisp code. Since it's probably not at all useful to have `coalton-time::day-of` followed by `local-time::day-of` in our stack traces, we can instruct Coalton to just inline `day-of` by putting an `(inline)` directive above the definition, like so.

```
(inline)
(declare day-of (TimeStamp -> Integer))
(define (day-of ts)
  (lisp Integer (ts)
    (lt:day-of ts)))
```

In general, if a Coalton function is just going to call a Lisp function of basically the same name, one might as well inline it. If the Coalton function should do something more complicated, then inlining is generally not advised.

The last thing we want is a direct constructor for a timestamp. We have a small complication though: the one provided by `local-time` has keyword arguments and is a macro:

```
make-timestamp (&key day sec nsec)
```

Coalton doesn't have keyword arguments, so we must decide what to do. In this case, it's probably simplest to create a function that takes all three arguments. If we want more restricted functions, like `make-timestamp-from-day`, we can always define such.

Another issue is that our `make-timestamp` function will need to take some integer values. Can we safely pass those into Lisp? Coalton has [an interop guide](https://github.com/coalton-lang/coalton/blob/main/docs/coalton-lisp-interop.md) which tells us what Coalton does and does not promise about Coalton-Lisp interop. In the section called ["Promises of Data and Basic Data Types"](https://github.com/coalton-lang/coalton/blob/main/docs/coalton-lisp-interop.md#promises-of-data-and-basic-data-types), it says

> PROMISE: Coalton's Symbol, Integer, IFix, UFix, Char, String, F32, and F64 values correspond to their Lisp counterparts.

This means that, yes, a Coalton `Integer` is safe to pass to Lisp, and it will be represented as we expect as a `cl:integer`.

With those facts under our belt, we can write our construxtor.

```
(inline)
(declare make-timestamp (Integer -> Integer -> Integer -> TimeStamp))
(define (make-timestamp day sec nsec)
  (lisp TimeStamp (day sec nsec)
    (lt:make-timestamp :day day :sec sec :nsec nsec)))
```

Now we have some of the basics. At the REPL, we can see that we can construct a `TimeStamp`.

```
COALTON-TIME> (coalton (make-timestamp 0 0 0))
@2000-02-29T19:00:00.000000-05:00
```

## Wrap some other constructors

Now we can move on to some more functions from the API beyond the essentials. The functions `lt:now` and `lt:today` are pretty straightforward, except for one thing... neither of them have an input argument!

In Coalton, all functions take _exactly one input_ and produce _exactly one output_. For functions that don't have a _meaningful_ input or output, we use `Unit`. `Unit` is a special data type that only has one member, which is also called `Unit`, and the only thing special about it is that it equals itself.

Since it's so common to not need to take an argument as input (or, really, to take `Unit` as input), Coalton provides a shorthand for it, like so:

```
(inline)
(declare now (Unit -> TimeStamp))
(define (now)
  (lisp TimeStamp ()
    (lt:now)))
```

Notice how the type says `Unit` is the input, but the function definition doesn't show any arguments. The argument is there, it's just not required to write it when defining or calling the function, because it's (by definition) useless.

```
COALTON-TIME> (coalton (now))
@2025-08-12T01:15:31.926707-04:00

COALTON-TIME> (coalton (now Unit))
@2025-08-12T01:15:38.080910-04:00
```

Both syntaxes work equally well.

We can also bind `lt:today` in exactly the same way.

```
(inline)
(declare today (Unit -> TimeStamp))
(define (today)
  (lisp TimeStamp ()
    (lt:today)))
```

With that, we are done with our constructors!

## Use type classes when possible

Our next task is to add comparison. In Coalton, comparison functions like `==` and `>` are polymorphic—they can work on multiple types.

```
COALTON-TIME> (coalton (== 1 2))
COMMON-LISP:NIL

COALTON-TIME> (coalton (== "hello" "hello"))
COMMON-LISP:T
```

In order to make our own type work with these, we need to have it participate in these functions' respective _type classes_. The `==` function comes from the `Eq` type class and the other comparison functions are derived from the `Ord` type class.

### Equality

Let's start with `Eq`. If we look at [`Eq`'s documentation](https://coalton-lang.github.io/reference/), we see we just need to implement `==`. To do this, we define what is called an _instance_. It is very easy; it's almost like defining a Common Lisp method on a generic function.

If we want to bind `==` to the library function `lt:timestamp=`, we must know precisely what the library function returns. We _presume_ it returns a boolean, but when we look in the documentation, it doesn't say. The problem is, if we get this wrong, we can get a type error—something we are trying to avoid altogether with Coalton! I think it's safe to assume it returns a _generalized_ boolean, but we should force it to be an ordinary boolean of `cl:t` or `cl:nil`. Coalton helpfully provides the function `to-boolean` to force its argument to be a boolean.

```
(define-instance (Eq TimeStamp)
  (inline)
  (define (== t1 t2)
    (lisp Boolean (t1 t2)
      (to-boolean (lt:timestamp= t1 t2)))))
```

Again, we inline, because we are essentially just calling the function.

We can immediately try it in the REPL to see that it works:

```
COALTON-TIME> (coalton (== (now) (now)))
COMMON-LISP:NIL

COALTON-TIME> (coalton (let ((x (now))) (== x x)))
COMMON-LISP:T
```

Because `/=` is defined in terms of `==`, we get that for free:

```
COALTON-TIME> (coalton (/= (now) (now)))
COMMON-LISP:T
```

Another fact we can see here about Coalton is that it's an impure language. The function `now` is of course querying the current date and time, which is changing as time marches on. There are pros and cons to having impurity in a functional language, but we feel such impurity is more natural with the surrounding Common Lisp semantics.

### Ordering

The other functions of interest are the comparison functions: `<`, `<=`, `>`, and `>=`. Since we have `==`, theoretically we only need one of these functions to implement all the others.

In Coalton, the type class in charge of this is called `Ord`. Popping over to the [`Ord` documentation](https://coalton-lang.github.io/reference/#ord-class), we see we need to implement a function called `<=>` which takes two objects and returns an `Ord`.

Huh? `Ord` and `Ord`?

There are two things called `Ord`.

1. There is a _type class_ called `Ord`, which has a method called `<=>` which does comparisons.
2. There is a _type_[^rename] called `Ord` whose members are `LT`, `EQ`, and `GT` which indicate a "Less-Than", "EQual", or "Greater-Than" result. The method `<=>` returns an `Ord`.

[^rename]: The Coalton developers have been contemplating renaming the _type_ from `Ord` to `OrdResult`.

So we need to write a method on `<=>` for our `TimeStamp` so that:

- When `t1 < t2` we return `LT`,
- When `t1 == t2` we return `EQ`, and
- When `t1 > t2` we return `GT`.

Now that we understand `<=>`, it's easy enough to implement.

```
(define-instance (Ord TimeStamp)
  (define (<=> t1 t2)
    (lisp Ord (t1 t2)
      (cl:cond
        ((lt:timestamp< t1 t2) LT)
        ((lt:timestamp> t1 t2) GT)
        (cl:t                  EQ)))))
```

With that, we get all of our comparison functions for free. `<=>` may be used under the hood, but we can directly call things like `<` now.

```
COALTON-TIME> (coalton (< (now) (now)))
COMMON-LISP:T
```

This suggests that Coalton must be evaluating arguments left-to-right. :)

### Efficiency?

_This section is an aside and can be skipped._

Why didn't we inline `<=>`? It's because the implementation is no longer just a direct call to a function. It has some compound logic. We _could_ inline it if we wanted to—it's not illegal—but it may not provide much benefit.

But doesn't that mean that all of our comparison functions will be costly? The answer is basically yes. When we call `<`, internally `<=>` will get called, which will call a couple of the `lt:timestamp{>,<}` comparison functions, which will produce an `Ord`, which will then get converted to `True` if it's `LT`.

Whew. All that for just a single less-than comparison?

Coalton gives you an option to shortcut all of that. We can make any individual comparison function more efficient through a technique called _specialization_. When the Coalton compiler sees that we are calling `<` on two `TimeStamp` values, we can instruct the Coalton compiler to produce more efficient code. To do it, we first need a more efficient function.

```
(inline)
(declare efficient-timestamp< (TimeStamp -> TimeStamp -> Boolean))
(define (efficient-timestamp< t1 t2)
  (lisp Boolean (t1 t2)
    (to-boolean (lt:timestamp< t1 t2))))
```

Of course, we don't want to have to call this function manually, but it _is_ more efficient than the rigamarole of `<=>`. We can tell Coalton to use it when circumstances permit by adding a `specialize` directive.

```
(specialize < efficient-timestamp< (TimeStamp -> TimeStamp -> Boolean))
```

This says:

> When you see `(< x y)` on two `TimeStamp` objects `x` and `y`, rewrite it as `(efficient-timestamp< x y)`.

How can we be sure that something like `(< (now) (now))` is truly getting compiled to efficient code? We can inspect what Coalton generates by using `pprint-coalton-codegen`:

```
COALTON-TIME> (pprint-coalton-codegen
                (define (test) (< (now) (now))))

[...]

  (DEFUN TEST (#:|_14|)
    (DECLARE (IGNORABLE #:|_14|))
    (LET ((#:T2-4218
           (LET ((#:|_60516| 'COALTON::UNIT/UNIT))
             (DECLARE (IGNORABLE #:|_60516|))
             (LOCALLY
              (DECLARE (OPTIMIZE (SB-C::TYPE-CHECK 1)))
#|1|#         (PROGN (VALUES (LOCAL-TIME:NOW)))))))
      (DECLARE (IGNORABLE #:T2-4218))
      (LET ((#:T1-4117
             (LET ((#:|_60515| 'COALTON::UNIT/UNIT))
               (DECLARE (IGNORABLE #:|_60515|))
               (LOCALLY
                (DECLARE (OPTIMIZE (SB-C::TYPE-CHECK 1)))
#|2|#           (PROGN (VALUES (LOCAL-TIME:NOW)))))))
        (DECLARE (IGNORABLE #:T1-4117))
        (LOCALLY
         (DECLARE (OPTIMIZE (SB-C::TYPE-CHECK 1)))
         (LET ((T1 #:T1-4117) (T2 #:T2-4218))
#|3|#      (VALUES (TO-BOOLEAN (LOCAL-TIME:TIMESTAMP< T1 T2))))))))

[...]
```

(I snipped out some output where `[...]` is written and added some markers with `#|n|#`.)

If we look carefully at this output, amidst all of the nested `LET`s, we can see two things:

1. On lines marked `#|1|#` and `#|2|#`, there are inlined calls to `lt:now`, and
2. On the line marked `#|3|#`, there is the specialized call to `lt:timestamp<`.

As such, even though we still have the full backing of the `Ord` type class to write generic, polymorphic code, specific calls to comparison functions will get optimized into something more efficient.

### Other type classes

Coalton provides several other type classes, such as

- `Hash` for hashing,
- `Default` for a reasonable default value in situations where any may suffice,
- `Num` for numerical operations, and
- `Into` for data type conversions (such as converting to a `String`).

Not all type classes are always relevant, but it's a nice courtesy for a library author to implement as many of the standard ones as possible.

## A more difficult example

So far, we've been able to bind types and functions relatively easily. We had one small complication where a function wasn't guaranteed to return a boolean, but that was easy to address.

Sometimes certain functions can be a little more difficult. One such function is the `lt:timestamp+` function.

> Function: `timestamp+` _time_ _amount_ _unit_
>
> Add the _amount_ to the _time_ using the specified _unit_. _unit_ may be one of ( `:nsec` `:sec` `:minute` `:hour` `:day` `:month` `:year`). The value of the parts of the timestamp of higher resolution than the _unit_ will never be touched. If you want a precise number of seconds from a time, you should specify the offset in seconds.

As is usual in Lisp libraries, the specification is lax on data types. We presume _time_ is a `lt:timestamp`, _amount_ is a `cl:integer`, and _unit_ is one of those symbols. We also presume an `lt:timestamp` is returned.

_These are things we should absolutely double check! If we get it wrong, our program will be unsound!_

By looking at the source, this all seems correct. As such, our biggest challenge is going to be that _unit_ argument.

Coalton doesn't have symbol literals or keyword literals. But it _does_ have a `Symbol` data type in the `coalton-library/symbol` package and a way to make keywords using the `make-keyword` function. As such, let's add

```
(#:sym #:coalton-library/symbol)
```

to our package's local nicknames. It is already loaded as a part of Coalton, so we just want to give it a nickname for easy access. From here, we can define all of our units:

```
(define unit-nsec   (sym:make-keyword "NSEC"))
(define unit-sec    (sym:make-keyword "SEC"))
(define unit-minute (sym:make-keyword "MINUTE"))
(define unit-hour   (sym:make-keyword "HOUR"))
(define unit-day    (sym:make-keyword "DAY"))
(define unit-month  (sym:make-keyword "MONTH"))
(define unit-year   (sym:make-keyword "YEAR"))
```

This already feels a little inelegant. Symbols aren't very "type safe"; they can be anything. A nicer API (which is Native Style) would provide a new data type[^enum].

[^enum]: We can make this data type definition compile into more efficient internally by putting `(repr :enum)` before the `(define-type TimeUnit ...)`. This tells Coalton that `TimeUnit` is just a list of simple zero-arity constructors and it will always be that way.

```
(define-type TimeUnit
  NSec
  Sec
  Minute
  Hour
  Day
  Month
  Year)
```

This feels much nicer. But the `local-time` API will need a _symbol_ as input, not one of these `TimeUnit` values. We can define a conversion function from `TimeUnit` to `Symbol` using the `Into` type class. This type class has one method, `into`, which converts any value of one type to some value of another type.

```
(define-instance (Into TimeUnit sym:Symbol)
  (define (into tu)
    (match tu
      ((NSec)   (sym:make-keyword "NSEC"))
      ((Sec)    (sym:make-keyword "SEC"))
      ((Minute) (sym:make-keyword "MINUTE"))
      ((Hour)   (sym:make-keyword "HOUR"))
      ((Day)    (sym:make-keyword "DAY"))
      ((Month)  (sym:make-keyword "MONTH"))
      ((Year)   (sym:make-keyword "YEAR")))))
```

In the REPL, we can see this conversion works as desired:

```
COALTON-TIME> (coalton (the sym:Symbol (into Minute)))
:MINUTE
```

Now that we have a data type for the time units, we can define a nice API function.

```
(declare offset (TimeUnit -> Integer -> TimeStamp -> TimeStamp))
(define (offset tu amount ts)
  (let ((kw (the sym:Symbol (into tu))))
    (lisp TimeStamp (kw amount ts)
      (lt:timestamp+ ts amount kw))))
```

In the REPL, let's add one hour to the current time.

```
COALTON-TIME> (coalton (now))
@2025-08-12T02:28:30.968235-04:00

COALTON-TIME> (coalton (offset Hour 1 (now)))
@2025-08-12T03:28:41.516425-04:00
```

It looks like it took me a whole 11 seconds to type that second command. :)

### Argument order?

_This section is an aside and can be skipped._

The `lt:timestamp+` function has the argument order timestamp-amount-unit but the Coalton function has the order unit-amount-timestamp. What gives?

Either argument order would work fine in Coalton, but _good Coalton functions should put the arguments that are least likely to change from call to call first_. In the case of this function, the time unit is by far the most important argument that will probably change least, the amount of offset comes second, and the timestamp itself comes last. If we follow this rule of thumb, Coalton's currying can make for some very elegant functions. For example, we can make an `hour-offset` function simply by providing just one argument to `offset`:

```
(define hour-offset (offset Hour))
```

We can go further; we can make an hour increment function by specifying an additional argument:

```
(define increment-hour (hour-offset 1))

;; or

(define increment-hour (offset Hour 1))
```

We don't need to actually explicitly define these functions. In code, if we have a list of timestamps `tx`, we could increment each one by an hour by writing `(map (offset Hour 1) tx)`.

## Wrapping it up

The only thing left to do is export our useful functions. In this case, our final package definition might look like this:

```
(defpackage #:coalton-time
  (:use #:coalton #:coalton-prelude)
  (:local-nicknames
   (#:lt #:local-time)
   (#:sym #:coalton-library/symbol))
  (:export
   #:TimeStamp
   #:day-of
   #:sec-of
   #:nsec-of

   #:make-timestamp
   #:now
   #:today

   #:TimeUnit
   #:NSec
   #:Sec
   #:Minute
   #:Hour
   #:Day
   #:Month
   #:Year

   #:offset))
```

Of course, as good programmers, we should also go in and write some documentation for each function and type. Maybe in the next PR?

## Concluding remarks

With this, we have the beginnings of a nice and efficient "Direct Style" API to the `local-time` library. Coalton users of `coalton-time` can be assured of type safety everywhere, even more so than what `local-time` offers, while still remaining just about as efficient.

There are many topics we didn't discuss that show up in more advanced library usages. To throw a bone, here's how we might deal with various concepts.

- **Functions with multiple values**: We can either ignore values that aren't of interest, or put them in a `Tuple`. It is important we handle multiple values, because returning more values than Coalton expects can lead to type errors. When it doubt, wrap your returned expression in `(cl:values ...)` to ensure only one value gets returned.
- **Functions with multiple input types**: If multiple argument types are allowed, generally we split those into separate functions.
- **Functions with multiple output types**: If multiple output types are possible, we either try to normalize the type, or define an algebraic data type to capture the union of the different types.
- **Generic functions**: Type classes and type class instances can be used to bind (and emulate) generic functions, so long as the generic functions are not too complicated. If they are very complicated, then some work needs to be done to simplify their interface, possibly by creating several Coalton functions.
- **Numerical contagion**: Coalton is very strict about not mixing number types. Contagion must be explicitly dealt with, usually by normalizing the number type of interest.
- **Conditions**: Coalton has native support for handling conditions with the `catch` operator. It does not yet have support for defining new conditions based on an existing Lisp condition. As such, it's advised to handle specific conditions within a `lisp` form and either return a `Result`, `Optional`, or raise a Coalton-native condition type.

Are you having trouble figuring out how to use a Common Lisp library from Coalton? Please don't hesitate to hop on the [Discord](https://discord.gg/cPb6Bc4xAH) to discuss!

## Source listing

```
(defpackage #:coalton-time
  (:use #:coalton #:coalton-prelude)
  (:local-nicknames
   (#:lt #:local-time)
   (#:sym #:coalton-library/symbol))
  (:export
   #:TimeStamp
   #:day-of
   #:sec-of
   #:nsec-of

   #:make-timestamp
   #:now
   #:today

   #:TimeUnit
   #:NSec
   #:Sec
   #:Minute
   #:Hour
   #:Day
   #:Month
   #:Year

   #:offset))

(in-package #:coalton-time)

(named-readtables:in-readtable coalton:coalton)

(coalton-toplevel
  ;; Data Type and Readers
  (repr :native lt:timestamp)
  (define-type TimeStamp)

  (declare day-of (TimeStamp -> Integer))
  (define (day-of ts)
    (lisp Integer (ts)
      (lt:day-of ts)))

  (declare sec-of (TimeStamp -> Integer))
  (define (sec-of ts)
    (lisp Integer (ts)
      (lt:sec-of ts)))

  (declare nsec-of (TimeStamp -> Integer))
  (define (nsec-of ts)
    (lisp Integer (ts)
      (lt:nsec-of ts)))

  ;; Constructors
  (inline)
  (declare make-timestamp (Integer -> Integer -> Integer -> TimeStamp))
  (define (make-timestamp day sec nsec)
    (lisp TimeStamp (day sec nsec)
      (lt:make-timestamp :day day :sec sec :nsec nsec)))

  (inline)
  (declare now (Unit -> TimeStamp))
  (define (now)
    (lisp TimeStamp ()
      (lt:now)))

  (inline)
  (declare today (Unit -> TimeStamp))
  (define (today)
    (lisp TimeStamp ()
      (lt:today)))

  ;; Comparison
  (define-instance (Eq TimeStamp)
    (inline)
    (define (== t1 t2)
      (lisp Boolean (t1 t2)
        (to-boolean (lt:timestamp= t1 t2)))))

  (define-instance (Ord TimeStamp)
    (define (<=> t1 t2)
      (lisp Ord (t1 t2)
        (cl:cond
          ((lt:timestamp< t1 t2) LT)
          ((lt:timestamp> t1 t2) GT)
          (cl:t                  EQ)))))

  ;; Efficient Comparison
  (inline)
  (declare efficient-timestamp< (TimeStamp -> TimeStamp -> Boolean))
  (define (efficient-timestamp< t1 t2)
    (lisp Boolean (t1 t2)
      (to-boolean (lt:timestamp< t1 t2))))

  (specialize < efficient-timestamp< (TimeStamp -> TimeStamp -> Boolean))

  (inline)
  (declare efficient-timestamp<= (TimeStamp -> TimeStamp -> Boolean))
  (define (efficient-timestamp<= t1 t2)
    (lisp Boolean (t1 t2)
      (to-boolean (lt:timestamp<= t1 t2))))

  (specialize <= efficient-timestamp<= (TimeStamp -> TimeStamp -> Boolean))

  (inline)
  (declare efficient-timestamp> (TimeStamp -> TimeStamp -> Boolean))
  (define (efficient-timestamp> t1 t2)
    (lisp Boolean (t1 t2)
      (to-boolean (lt:timestamp> t1 t2))))

  (specialize > efficient-timestamp> (TimeStamp -> TimeStamp -> Boolean))

  (inline)
  (declare efficient-timestamp>= (TimeStamp -> TimeStamp -> Boolean))
  (define (efficient-timestamp>= t1 t2)
    (lisp Boolean (t1 t2)
      (to-boolean (lt:timestamp>= t1 t2))))

  (specialize >= efficient-timestamp>= (TimeStamp -> TimeStamp -> Boolean))

  (repr :enum)
  (define-type TimeUnit
    NSec
    Sec
    Minute
    Hour
    Day
    Month
    Year)

  (define-instance (Into TimeUnit sym:Symbol)
    (define (into tu)
      (match tu
        ((NSec)   (sym:make-keyword "NSEC"))
        ((Sec)    (sym:make-keyword "SEC"))
        ((Minute) (sym:make-keyword "MINUTE"))
        ((Hour)   (sym:make-keyword "HOUR"))
        ((Day)    (sym:make-keyword "DAY"))
        ((Month)  (sym:make-keyword "MONTH"))
        ((Year)   (sym:make-keyword "YEAR")))))

  (declare offset (TimeUnit -> Integer -> TimeStamp -> TimeStamp))
  (define (offset tu amount ts)
    (let ((kw (the sym:Symbol (into tu))))
      (lisp TimeStamp (kw amount ts)
        (lt:timestamp+ ts amount kw))))
)                                       ; coalton-toplevel
```
