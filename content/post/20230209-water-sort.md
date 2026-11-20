---
title: "Solving the Water Pour Puzzle in Coalton"
date: 2023-02-09
---

By [Phoebe Goldman](https://github.com/gefjon)

## Introduction

Recently while on a long subway ride, a friend introduced me to my latest mobile game
obsession, the "water sort puzzle." There are a bunch of versions of it on the various app
stores; I'm playing [this
one](https://apps.apple.com/us/app/sort-water-color-puzzle/id1575680675).  I played
through about 100 levels the next day, and then started to get fed up because it seemed
like the kind of problem a computer would be better at solving than me. In fact, it's a
simpler version of the AI planning and optimization problems I've devoted many hours at
work to making computers solve. So here I am, writing a solution in Coalton instead of
progressing through the game's levels.

What follows is a heavily-editorialized, literate-style implementation of my
solution. Aside from a 50-ish-line wrapper around [Eric O'Connor's Queues
library](https://github.com/oconnore/queues) and a handful of tests, this is the entirety
of the code. You can find the original [on my
GitHub](https://github.com/gefjon/water-sort/), and if you look at
[package.lisp](https://github.com/gefjon/water-sort/blob/master/package.lisp), you'll see
most of the follow text in comments.

My goal here is not to teach you Coalton, particularly, though I'd like to think that the
code I'm presenting should be pretty clear if you're familiar with an ML-family language
like Haskell or OCaml. Rather, I want to walk you through my process of thinking through a
problem and using Coalton to solve it. The code below is pretty much as I wrote it, in
pretty much the order I wrote it in, though some names have been changed and most of the
comments and description added after the fact for clarity.

The "water sort puzzle" is set up as follows:
You are presented with some number of beakers, each of which can hold up to 4 units of liquid.

The beakers are initially filled with a variety of different colors of liquid, which do not mix.

For each color of liquid in the puzzle, there will always be exactly 4 units of that color
distributed around the initial state.

A beaker might have one unit of red unit underneath one unit of blue liquid underneath one
unit of red liquid. The following is a sample initial state:

- `(red green blue red)`
- `(blue green red red)`
- `(blue blue green green)`
- `()`

{{<figure
src="/water-sort-images/example-1-unsolved.png"
title="Example 1 - Unsolved"
>}}

In my text notation, the "top" of a beaker is leftmost, and the "bottom" is rightmost.

Your goal is to consolidate the liquids of the same color, so that each vial either
contains 4 units of the same color of liquid, or is empty.

The following is a solved state from the above initial state:
- `()`
- `(red red red red)`
- `(green green green green)`
- `(blue blue blue blue)`

{{<figure
src="/water-sort-images/example-1-solved.png"
title="Example 1 - Solved"
>}}

In order to accomplish this, you pour one beaker onto another, under the following
constraints:
- You can only pour from the top of a beaker and onto the top of a beaker.
- You can only pour liquid onto liquid of the same color.
- You cannot pour into a full beaker.
- When you pour, liquid from the source beaker will be transferred into the destination
  beaker until either:
  - The next unit of liquid in the source beaker is of a different color.
  - The destination beaker is full.

Here are some example legal pours:
- `(green blue red red)` onto `(green blue red)` => `(blue red red)` and `(green green blue red)`

  {{<twoimagefigure
  src1="/water-sort-images/example-pour-1-before.png"
  alt1="Example Pour 1 - Before"
  src2="/water-sort-images/example-pour-1-after.png"
  alt2="Example Pour 1 - After"
  title="Example pour 1, before and after"
  >}}
  
- `(green green red red)` onto `(green red)` => `(red red)` and `(green green green red)`

  {{<twoimagefigure
  src1="/water-sort-images/example-pour-2-before.png"
  alt1="Example Pour 2 - Before"
  src2="/water-sort-images/example-pour-2-after.png"
  alt2="Example Pour 2 - After"
  title="Example pour 2, before and after"
  >}}
  
- `(green green red red)` onto `(green red red)` => `(green red red)` and `(green green red red)`

  {{<twoimagefigure
  src1="/water-sort-images/example-pour-3-before.png"
  alt1="Example Pour 3 - Before"
  src2="/water-sort-images/example-pour-3-after.png"
  alt2="Example Pour 3 - After"
  title="Example pour 2, before and after"
  >}}

Here are some example illegal pours:
- `(green blue red red)` onto `(blue green red)`
  is illegal because the source and destination have different top colors.
  
  {{<figure
  src="/water-sort-images/example-pour-4-invalid.png"
  title="Example Pour 4 - Invalid"
  width="30%"
  >}}

- `(green blue red red)` onto `(green blue green red)`
  is illegal because the destination is full.

  {{<figure
  src="/water-sort-images/example-pour-5-invalid.png"
  title="Example Pour 5 - Invalid"
  width="30%"
  >}}

An interesting (?) aside is that this is actually a solitaire variant, and you can play it
with a deck of cards. Determine your number of "colors" and "beakers," making sure that
you have more of the latter than the former. Assign each "color" to a card face value, and
build a deck that has all four cards of each "color" and no others. For example, if you're
playing with three "colors," you want a deck that has all four aces, all four twos and all
four threes. Shuffle them, then deal them out into face-up piles of four. From here, how
to play should be obvious based on the rules above. Be warned: with large numbers of
colors and few initially-empty beakers, you'll probably get a lot of deals that are
impossible to solve.

When confronted with a problem like this, my first thought is generally, "can I throw a
graph search algorithm at this problem until it goes away?" The answer is usually yes. In
order to throw a graph search algorithm at a problem, we need a few things:

1. A representation of a state. Each state will form a node in the graph we're searching.
2. A way to move from a state to its successors, a.k.a. a transition function. It's often
   convenient to have not just a function that moves from a state to its successor, but
   also a data representation of the transition, so that your solution can be a sequence
   of transitions, rather than a (likely larger and less readable) sequence of states.
3. A heuristic function for evaluating a state, which numerically answers the question
   "how far from a solution is this state?"
4. A function that says when you're done, that is, when a state represents a solution. I
   like to call this function solved?.

Once we have those four things, we'll be able to plug them all into an off-the-shelf graph
search algorithm. Spoiler: we'll be using A\*, because it's easy.

## Representing game states

A puzzle state is made up of beakers, which contain colors. Coalton doesn't care what
order we put our define-type forms (or any toplevel forms) within a coalton-toplevel
block, so we'll define puzzle states first.

What's in a puzzle state? Obviously it's a collection of beakers, but what kind of
collection? The features we're looking for are:

- PuzzleStates should be immutable and persistent so that we can do backtracking search on
  them. That is to say, when I do an operation on a PuzzleState to produce a new
  PuzzleState, I should still be able to hold onto and re-use the original, and it
  shouldn't have changed in any observable way.

- We'll be doing a lot of incremental modifications to PuzzleStates, i.e. making
  individual moves which change the state of only two beakers at a time. These should be
  relatively fast and waste relatively little memory.

- It's possible to have multiple beakers with the same contents in a puzzle, but they
  aren't meaningfully distinct. That is, a puzzle with two empty beakers is different from
  a puzzle with one empty beaker, but the two empty beakers themselves are
  interchangeable.

This last point is not obvious, but it's important as a way to shrink our state
space. Imagine if we treat a puzzle state as an ordered set of beakers, like `Vector
Beaker'. Consider these two (partial) states:

1. 1. `(red blue)`
   2. `(blue red)`
   3. `(red blue)`

{{<figure
src="/water-sort-images/example-2-1.png"
title="Example 2.1 - a partial state"
width="30%"
>}}

2. 1. `(blue red)`
   2. `(red blue)`
   3. `(red blue)`

{{<figure
src="/water-sort-images/example-2-2.png"
title="Example 2.2 - a permutation of 2.1"
width="30%"
>}}

Note that they're permutations of the same set of beakers, and that each contains two
different beaker configurations. If we treat a puzzle state as an ordered set of beakers,
the two states each offer two moves:

1. From state 1, pour beaker 1 into 3, resulting in
     1. `(blue)`
     2. `(blue red)`
     3. `(red red blue)`

{{<figure
src="/water-sort-images/example-2-1-1.png"
title="Example 2.1.1 - a successor of 2.1"
width="30%"
>}}
   
2. From state 1, pour beaker 3 into 1, resulting in
     1. `(red red blue)`
     2. `(blue red)`
     3. `(blue)`
     
{{<figure
src="/water-sort-images/example-2-1-2.png"
title="Example 2.1.2 - a successor of 2.1, and a permutation of 2.1.1"
width="30%"
>}}

3. From state 2, pour beaker 2 into 3, resulting in
      1. `(blue red)`
      2. `(blue)`
      3. `(red red blue)`
     
{{<figure
src="/water-sort-images/example-2-2-1.png"
title="Example 2.2.1 - a successor of 2.2, and a permutation of 2.1.1"
width="30%"
>}}
4. From state 2, pour beaker 3 into 2, resulting in
      1. `(blue red)`
      2. `(red red blue)`
      3. `(blue)`
      
{{<figure
src="/water-sort-images/example-2-2-2.png"
title="Example 2.2.2 - a successor of 2.2, and a permutation of 2.1.1"
width="30%"
>}}

The key observation is that our initial states 1 and 2 behave identically, and that all
four of their successor states behave identically. The only information we actually care
about in the initial states is that they have one beaker (blue red), and two beakers (red
blue). All we care about in the successor states is that they have one beaker (blue red),
one beaker (red red blue), and one beaker (blue). And all we care about in the transition
between them is that we pour a (red blue) beaker into a (red blue) beaker.

What falls out of our requirements is a persistent tree-based counter, that is, a tree
sorted by the `BeakerConfiguration`s, and which associates each `BeakerConfiguration` with
a count, representing the number of beakers like that in the state. Coalton's
`ord-map:Map` will accomplish this nicely. `ord-map` is implemented as a persistent
red-black tree, so it has pretty good (i.e. O(logn)) time and memory usage on inserts and
removes.

It feels obvious to me, but I'll point out that we won't store `BeakerConfiguration`s with
counts of zero, i.e. beakers which aren't in the puzzle. This requires a bit of
bookkeeping later on when we do inserts and removals, but saves our map from growing
arbitrarily large as we store a bunch of useless `BeakerConfiguration`s.

```lisp
(repr :transparent)
(define-type PuzzleState
  (PuzzleState (map:Map BeakerConfiguration
                        ;; maps each variety of BeakerConfiguration to the 
                        ;; number of beakers in that configuration in the
                        ;; puzzle. zeros are not present.
                        UFix)))
```

A quick aside: Specifying the `:transparent' representation for a single-variant,
single-member type allows the Coalton compiler to optimize away its runtime container,
leaving it representationally identical to the inner type. Because SBCL's allocator and
garbage collector are quite fast, this is a pretty minor optimization; the difference in
this code was an overall speedup of roughly 1%. But hey, there's no reason not to do it in
this case, and 1% is better than 0%.

We need to be able to do two operations on `BeakerConfiguration`s without mutating them:
- Add a new color on top.
- Remove the topmost color.
The savvy programmer will note that lists have those two operations.
A beaker will be a list, with its "top" in its first and its "bottom" in its last.

```lisp
(repr :transparent)
(define-type BeakerConfiguration
  ;; with length <= 4
  (BeakerConfiguration (List Color)))

```

Now something easy: define `Color`. Defining an enum with all of the possible colors seems
unnecessary and restrictive (later puzzles in the app have many different colors), so
`Color` will just be a newtype around integers.

```lisp
(repr :transparent)
(define-type Color
  (Color UFix))
```

### Some instances that will help us later

I'll be defining `Eq`, `Ord` and `Hash` instances for `Color` and `BeakerConfiguration`,
and `Eq` and `Hash` (but not `Ord`) for `PuzzleState`. These instances are all pretty
uninteresting, just deferring to the methods from their inner types, so I won't blame you
if you skip this section. Some day, we'll be able to write `(derive Eq Ord Hash)` above
our `define-type` forms (syntax pending) and generate these instances automatically, but
that day hasn't come yet.

We'll want to be able to compare colors with `==` so we know if two colors are compatible
for pouring.

```lisp
(define-instance (Eq Color)
  (define (== c1 c2)
    (let (Color c1) = c1)
    (let (Color c2) = c2)
    (== c1 c2)))
```

We'll want to be able to sort colors with `<=>` so we can keep them (and collections of
them) in ordered maps and trees when representing our puzzles.

```lisp
(define-instance (Ord Color)
  (define (<=> c1 c2)
    (let (Color c1) = c1)
    (let (Color c2) = c2)
    (<=> c1 c2)))
```

We'll want to be able to hash colors so we can store them (and collections of them) when
we search for solutions.

```lisp
(define-instance (Hash Color)
  (define (hash c)
    (let (Color c) = c)
    (hash c)))
```

We want `Ord` and `Hash` instances on beakers for the same reasons as for colors, and
those both require `Eq`.

```lisp
(define-instance (Eq BeakerConfiguration)
  (define (== b1 b2)
    (let (BeakerConfiguration b1) = b1)
    (let (BeakerConfiguration b2) = b2)
    (== b1 b2)))
```

Like colors, we want to be able to sort beakers with `<=>` so we can keep them in ordered
maps and trees when representing our puzzles. The actual ordering beakers are sorted into
doesn't matter for our purpouses, as long as there is a total order between them. Coalton
lists use lexographic order (dictionary order), which is sufficient for our purposes.

```lisp
(define-instance (Ord BeakerConfiguration)
  (define (<=> b1 b2)
    (let (BeakerConfiguration b1) = b1)
    (let (BeakerConfiguration b2) = b2)
    (<=> b1 b2)))
```

Like colors, we want to be able to hash beakers (and containers of beakers) when we search
for solutions.

```lisp
(define-instance (Hash BeakerConfiguration)
  (define (hash bk)
    (let (BeakerConfiguration bk) = bk)
    (hash bk)))
```

We'll need to be able to hash puzzles when we search for solutions, and `Hash` requires
`Eq`, so...

```lisp
(define-instance (Eq PuzzleState)
  (define (== p1 p2)
    (let (PuzzleState p1) = p1)
    (let (PuzzleState p2) = p2)
    (== p1 p2)))
```

Note the absence of an Ord PuzzleState instance; we don't need it. We're not keeping trees
of trees.

We'll need to be able to hash puzzles when we search for solutions.

```lisp
(define-instance (Hash PuzzleState)
  (define (hash puz)
    (let (PuzzleState puz) = puz)
    (hash puz)))
```

## The successor function, and making moves

Having a data representation of a pour isn't strictly necessary, and would be superfluous
if we were only building the game. But we're writing a solver, and our lives will be a lot
easier if it spits out a sequence of `(PourInto SOURCE-BEAKER DESTINATION-BEAKER)` rather
than a sequence of game states between which we'd have to determine the difference.

```lisp
(define-type Move
  (PourInto BeakerConfiguration ; from
            BeakerConfiguration ; into
            ))
```

Because of our functional programmer's obsession with persistent, immutable data
structures, when we make a move, we don't just alter the contents of the source and
destination beakers. Instead, we construct a new `PuzzleState` that's like our previous
state, but with the old source and destination beakers removed, and the new source and
destination beakers added. To do that, we need to be able to add and remove beakers from a
puzzle. Because we don't store `BeakerConfiguration`s which would have a count of zero,
each of these functions has to handle a few cases.

To add a beaker:
- If there are any beakers like that already in the puzzle, increment their count.
- If not, insert a new sort of beaker into the map with a count of 1.

```lisp
(declare add-beaker (PuzzleState -> BeakerConfiguration -> PuzzleState))
(define (add-beaker puz bk)
  (let (PuzzleState puz) = puz)
  (match (map:update 1+ puz bk)
    ((Some puz) (PuzzleState puz))
    ((None) (PuzzleState (map:insert-or-replace puz bk 1)))))
```

To remove a beaker:
- If the beaker wasn't in the puzzle, return `None` to signal a failure.
- If there was exactly one such beaker in the puzzle, remove it from the map.
- If there were multiple such beakers in the puzzle, decrement their count.

```lisp
(declare remove-beaker (PuzzleState
                        -> BeakerConfiguration 
                        -> Optional PuzzleState))
(define (remove-beaker puz bk)
  (let (PuzzleState puz) = puz)
  (match (map:lookup puz bk)
    ((None) None)
    ((Some ct)
     (Some (PuzzleState
             (if (> ct 1)
                 ;; both unwraps here are infallible because `lookup'
                 ;; already returned `Some'.
                 ;; if there's multiple beakers like this in the puzzle,
                 ;; decrement the count.
                 (unwrap (map:update 1- puz bk))
                 ;; if there was only one beaker like this in the puzzle,
                 ;; remove it from the map rather than storing a zero.
                 (unwrap (map:remove puz bk))))))))
```

This is a helper that does both a `remove-beaker` and an `add-beaker`, for when we replace
an old beaker with its new state after a pour.

```lisp
(declare replace-beaker (PuzzleState 
                         -> BeakerConfiguration 
                         -> BeakerConfiguration 
                         -> Optional PuzzleState))
(define (replace-beaker puz old-bk new-bk)
  "Replace OLD-BK with NEW-BK within PUZ.

PUZ must contain at least one BeakerConfiguration == to OLD-BK."
  (match (remove-beaker puz old-bk)
    ((None) None)
    ((Some puz) (Some (add-beaker puz new-bk)))))
```

Now the fun part: the logic for when it's possible to pour one beaker into another, and
what the two beakers look like after you do. For a given `Move` `(PourInto SOURCE
DESTINATION)`, we'll return `None` if it's not possible to pour `SOURCE` into
`DESTINATION`, or `(Some (Tuple NEW-SOURCE NEW-DESTINATION))` if it is possible.

This function is a bit complex because it has to handle both of the cases that stop you
from pouring:
- If the colors don't match
- If the destination beaker is full
and the behavior of pouring multiple units of the same color at once:
- If there's enough room in the destination to hold all of the same colored liquid on top
  of the source, it all goes. You can't intentionally do a partial pour.
- If there's not enough room in the destination to hold all of the same colored liquid on
  top of the source, as much as possible goes. You get a partial pour if a total pour is
  impossible.
  
```lisp
(declare try-pour (Move -> 
                   Optional (Tuple BeakerConfiguration
                                   BeakerConfiguration)))
(define (try-pour pour)
  (let (PourInto (BeakerConfiguration from) 
                 (BeakerConfiguration into)) = pour)

  (let maybe-keep-pouring =
    ;; the `match' below tries to pour a single unit of liquid from FROM 
    ;; into INTO. this recursive helper handles continuing to pour as long 
    ;; as possible.
    (the (List Color
          -> List Color
          -> (Tuple BeakerConfiguration BeakerConfiguration))
         (fn (from into)
           (match (try-pour (PourInto (BeakerConfiguration from)
                                      (BeakerConfiguration into)))
             ((Some tpl) tpl)
             ((None) (Tuple (BeakerConfiguration from) 
                            (BeakerConfiguration into)))))))

  (match (Tuple from into)
    ;; you can't pour from an empty beaker
    ((Tuple (Nil) _) None)
    ;; you can always pour into an empty beaker
    ((Tuple (Cons from-top from-bot)
            (Nil))
     (Some (maybe-keep-pouring from-bot (make-list from-top))))
    ;; you can only pour from a non-empty beaker into a non-empty beaker if:
    ;; - the top colors match
    ;; - the into beaker has space
    ((Tuple (Cons from-top from-bot)
            (Cons into-top into-bot))
     (if (or (/= from-top into-top)
             (>= (list:length into-bot) 3))
         None
         (Some (maybe-keep-pouring from-bot
                                   (Cons from-top 
                                         (Cons into-top into-bot))))))))
```

This is a helper that combines `try-pour` with `replace-beaker` to return the whole
updated puzzle after a move, where `try-pour` just returns the two updated beakers.

```lisp
(declare puzzle-try-pour (PuzzleState -> Move -> Optional PuzzleState))
(define (puzzle-try-pour puz pour)
  "Attempt to advance PUZ via (PourInto FROM INTO) by pouring FROM into INTO.

FROM and INTO must both be BeakerConfigurations contained in PUZ. If FROM 
and INTO are ==, PuzzleState must contain at least two BeakerConfigurations
in that configuration."
  (let (PourInto from into) = pour)
  (match (try-pour pour)
    ((None) None)
    ((Some (Tuple new-from new-into))
     (match (replace-beaker puz from new-from)
       ((None) None)
       ((Some puz) (replace-beaker puz into new-into))))))
```

This is an interator over all the `BeakerConfiguration`s in a `PuzzleState` alongside their counts. We'll use
the beaker when considering all the possible source beakers for all the possible moves in a puzzle, and
the count to decide if it's possible to pour a beaker into another beaker with the same contents.

```lisp
(declare puzzle-beakers-with-counts
         (PuzzleState -> iter:Iterator (Tuple BeakerConfiguration UFix)))
(define (puzzle-beakers-with-counts puz)
  (let (PuzzleState puz) = puz)
  (map:entries puz))
```

This is an iterator over all the `BeakerConfiguration`s in a `PuzzleState`, regardless of count. We'll use it
when considering all the possible destination beakers for all the possible moves in a puzzle.

```lisp
(declare puzzle-unique-beakers
         (PuzzleState -> iter:Iterator BeakerConfiguration))
(define (puzzle-unique-beakers puz)
  (let (PuzzleState puz) = puz)
  (map:keys puz))
```

When we search for a solution, we'll want a function that, given a `PuzzleState`, yields all of its
successors, i.e. all of the `PuzzleState`s you can reach by making any one valid move. Our search algorithm
will chain these steps together, until it finds a successor's successor's successor (etc) starting from
the initial state which leads to a solution.

To that effect, this is an iterator over all the possible legal moves from a `PuzzleState`. For each
possible legal move, it returns `(Tuple MOVE NEW-STATE)`, where `MOVE` is the pour you did, and `NEW-STATE` is
the puzzle configuration after taking the move. That is, if `(possible-pours PUZZLE)` contains `(Tuple MOVE
NEW-STATE)`, then it is possible and legal to take `MOVE` from `PUZZLE`, and taking that move results in
`NEW-PUZZLE`.

```lisp
(declare possible-pours
         (PuzzleState -> iter:Iterator (Tuple Move PuzzleState)))
(define (possible-pours puz)
  "An iterator over all of the possible successor states from PUZ by making
any valid move."
  (let pour-from
    = (fn (from count)
         ;; we're interested only in unique beakers here because the result
         ;; states from pouring a beaker A into either a beaker B or B'
         ;; where (== B B') are the same
         (pipe (puzzle-unique-beakers puz)
           (map (fn (into)
           (if (and (== count 1) (== from into))
             ;; you can't pour from a beaker into 
             ;; itself, but you can potentially pour 
             ;; between two beakers with the same
             ;; contents. puzzle-try-pour
             ;; would catch this and return None,
             ;; but we can save a bit of compute
             ;; by checking and bailing out early.
             None
             (progn
               (let pour = (PourInto from into))
               (match (puzzle-try-pour puz pour)
                 ((None) None)
                 ((Some puz) (Some (Tuple pour puz))))))))
           iter:unwrapped!)))

  ;; once again, we're interested only in unique beakers here, but we need 
  ;; to know the count to know if we can pour A into A' where (== A A')
  (pipe (puzzle-beakers-with-counts puz)

        ;; also, it's never useful to pour from a "solved" beaker, i.e. an 
        ;; empty beaker or a full consolidated beaker. so we'll skip those 
        ;; when determining our possible source beakers.
        (iter:filter! (uncurry (fn (beaker _)
                                 (not (beaker-solved? beaker)))))

        ;; An aside on uncurry: puzzle-beakers-with-count is an iterator 
        ;; over tuples, i.e. pairs of two elements. We could destructure 
        ;; these manually using let or match, but in this function it's much
        ;; easier to use uncurry to automatically destructure the tuple 
        ;; and pass both its elements to a function. The (uncurry (fn ...))
        ;; in the previous line behaves equivalently to:
        ;;   (fn (tpl)
        ;;     (let (Tuple beaker _) = tpl)
        ;;     (not (beaker-solved? beaker)))

        (map (uncurry pour-from))
        iter:flatten!))
```

## Evaluating states

We'll be doing heuristic-guided search because I love implementing A* and throwing it at
problems. Contrary to Randall's guidance in [XKCD 342](https://xkcd.com/342/), A\* is
pretty much always better than Dijkstra's algorithm, assuming you can write an admissible
cost-prediction heuristic. A cost-prediction heuristic is a function that, given a state,
returns an estimation of the remaining work to reach a destination. Such a heuristic is
admissible if it's always an under-estimate. Admissible heuristics matter because A* with
an admissible heuristic will always find an optimal solution, i.e. a shortest or
lowest-cost path from source to destination, but A\* with an unadmissible heuristic may
return a longer-than-optimal path.

In this game, it isn't really meaningful to talk about the "cost" of a single step; a pour
is a pour. So we'll say that each move costs 1.

The number of runs in a beaker is a good starting place for a cost heuristic, because a
beaker with `n` runs in it will take at least `(1- n)` moves to organize. At the very least
you have to pour `(1- n)` times to get the mismatched colors off the top.
  
```lisp
(declare count-runs (BeakerConfiguration -> UFix))
(define (count-runs bk)
  "Count the number of distinct groups of liquid, or runs, in BK.

Contiguous units of the same color are a run.

e.g.:
(count-runs Nil) => 0
(count-runs (make-list 0)) => 1
(count-runs (make-list 0 0)) => 1
(count-runs (make-list 0 0 1)) => 2
(count-runs (make-list 0 0 1 0)) => 3
"
  (match bk
    ((BeakerConfiguration (Nil)) 0)
    ((BeakerConfiguration (Cons first-clr rest))
     (let ((slurp-run (fn (lst clr count-so-far)
                     (match lst
                       ((Nil) count-so-far)
                       ((Cons other-clr rest)
                        (if (== clr other-clr)
                            (slurp-run rest 
                                       clr
                                       count-so-far)
                            (slurp-run rest
                                       other-clr
                                       (1+ count-so-far))))))))
       (slurp-run rest first-clr 1)))))
```

But the number of runs in a beaker isn't correct as a cost heuristic, because a beaker
with one run (i.e. all the same color) requires no moves to make sorted, a beaker with two
runs requires at least one move, and so on. `(1- n)`, like I said. But an empty beaker
does not require `-1` moves to sort, it requires `0`. So we need a little wrapper function
here that does the `1-` and handles the empty-beaker case.
  
```lisp
(declare beaker-cost (BeakerConfiguration -> UFix))
  (define (beaker-cost bk)
    (match bk
      ((BeakerConfiguration (Nil)) 0)
      (bk (1- (count-runs bk)))))
```

Once we can predict the cost of an individual beaker, the predicted cost of a whole puzzle is just the
sum of all its beakers.

```lisp
(declare predict-state-cost (PuzzleState -> UFix))
(define (predict-state-cost puz)
  (pipe (puzzle-beakers-with-counts puz)
        ;; uncurry once again saving me having to type out a destructuring
        ;; let form.
        (map (uncurry (fn (bk count)
                        (* (beaker-cost bk) count))))
        iter:sum!))
```

## Solved?

In addition to predicting cost, we also need to know when we're done. We can't just use
`(== (predict-state-cost STATE) 0)` to tell if we're done, because that will return true
for incomplete puzzles where the colors are all separate, but some are not
consolidated. For example, that would incorrectly call the following state solved:
- `(red red red red)`
- `(blue blue blue)`
- `(blue)`

Luckily, deciding if an individual beaker is solved is pretty easy; empty beakers are
solved, and full beakers of a single color are solved. All others are not.

```lisp
(declare beaker-solved? (BeakerConfiguration -> Boolean))
(define (beaker-solved? bk)
  (match bk
    ((BeakerConfiguration (Nil)) True)
    ((BeakerConfiguration lst) (and (== (list:length lst) 4)
                                    (== (count-runs bk) 1)))))
```

And deciding if a puzzle is solved is also easy; a puzzle is solved if all of its beakers
are solved; if any beakers are unsolved, the puzzle is unsolved.

```lisp
(declare solved? (PuzzleState -> Boolean))
(define (solved? puz)
  (iter:every! beaker-solved? (puzzle-unique-beakers puz)))
```

## Searching for solutions

Now that we've defined our state space (`PuzzleState`s), our state transitions (`Move`s
and `possible-pours`), our cost prediction heuristic (`predict-state-cost`) and our
destination state (`solved?`), we can just throw A\* at this thing and go home.

There are a lot of tree search algorithms, many of which use those same four components
(and some of which discard the cost prediction heuristic but use the other three). A\* is
a good place to start because it's simple, has acceptible performance on small problems,
and always finds an optimal solution given an admissible heuristic. However, I feel
obligated to give the disclaimer that it's not a great algorithm for solving large
problems. The key flaw in A\* that makes it unsuitable for large problems is that A\* can
never decide that a state is so bad to be not worth considering; it can never evict bad
states from its cache, so its memory usage is monotonically non-decreasing as it visits
more states. That's the trade-off for finding optimal solutions, but for large problems,
you often don't care about finding an optimal solution, you just want one that's pretty
good. Also, ideally, on a modern multi-core computer, you want to be able to search in
parallel, but A\* is woefully single-threaded.

Anyway, this problem is small, and A\* will work. I'm not going to explain A\*; if you
don't know it, read [the Wikipedia
article](https://en.wikipedia.org/wiki/A*_search_algorithm), and if that doesn't get you
there, sign up for an algorithms course at your university.

This implementation of A\* is in a procedural style and uses mutable state in the form of
hash tables and a priority queue. Much as I love immutable, persistent programming, I
believe A* (and most search algorithms) are most cleanly and intuitively implemented in a
procedural style with mutable state. Luckily, Coalton makes that easy too!

```lisp
(declare find-solution 
         (PuzzleState -> Optional (Tuple (List Move) PuzzleState)))
(define (find-solution start)
  ;; a priority queue of states to search. 
  ;; lower-cost states will be searched first.
  (let frontier = (the (queue:PriorityQueue UFix PuzzleState)
                       (queue:new)))
  (queue:insert! frontier 0 start)

  ;; for computing search heuristics, a map from states to the cost along
  ;; the shortest path to reach them.
  (let cost-to-reach = (the (hashtable:Hashtable PuzzleState UFix)
                            (hashtable:new)))
  (hashtable:set! cost-to-reach start 0)

  ;; for reconstructing paths, a map from each state to its predecessor
  ;; and the move between the two.
  (let breadcrumbs = (the (hashtable:Hashtable PuzzleState 
                                               (Tuple PuzzleState Move))
                          (hashtable:new)))
  ;; to avoid revisiting states, a map from state to visited? booleans. 
  ;; states not present in the map have not been visited.
  (let visited = (the (hashtable:Hashtable PuzzleState Boolean)
                      (hashtable:new)))

  (let predict-total-cost
    = (the (UFix -> PuzzleState -> UFix)
           (fn (cost-to-reach state)
             (+ cost-to-reach (predict-state-cost state)))))

  (let new-shortest-path!
    = (the (UFix -> PuzzleState -> PuzzleState -> Move -> Unit)
           (fn (cost-to-new-state 
                new-state 
                predecessor
                move-from-predecessor)
             (hashtable:set! breadcrumbs
                             new-state
                             (Tuple predecessor move-from-predecessor))
             (hashtable:set! cost-to-reach
                             new-state
                             cost-to-new-state)
             (queue:insert! frontier
                            (predict-total-cost cost-to-new-state
                                                new-state)
                            new-state))))

  (let find-cost-to-reach
    = (the (PuzzleState -> UFix)
           (fn (state)
             (with-default math:maxBound
               (hashtable:get cost-to-reach state)))))

  (let possible-new-path!
    = (the (UFix -> PuzzleState -> PuzzleState -> Move -> Unit)
           (fn (cost-to-reach new-state predecessor move-from-predecessor)
             (when (< cost-to-reach (find-cost-to-reach new-state))
               (new-shortest-path! cost-to-reach
                                   new-state
                                   predecessor 
                                   move-from-predecessor)))))

  (let move-cost
    = (the (Move -> UFix)
           (const 1)))

  (let visited? =
    (the (PuzzleState -> Boolean)
         (fn (state)
           (with-default False (hashtable:get visited state)))))

  (let queue-neighbors-for-visit!
    = (the (PuzzleState -> UFix -> Unit)
           (fn (current-state cost-to-reach-current-state)
             (iter:for-each! 
               (uncurry (fn (move new-state)
                          (let cost-to-reach-new-state
                            = (+ cost-to-reach-current-state 
                                 (move-cost move)))
                          (possible-new-path! cost-to-reach-new-state
                                              new-state
                                              current-state
                                              move)))
               (possible-pours current-state)))))

  (let ((visit!
          (the (PuzzleState -> Optional (Tuple (List Move) PuzzleState))
               (fn (current-state)
                 (cond ((solved? current-state) 
                        (Some (Tuple (reverse 
                                       (reconstruct-path current-state))
                                     current-state)))

                       ((not (visited? current-state))
                        (progn
                          (hashtable:set! visited current-state True)
                          (queue-neighbors-for-visit! 
                            current-state 
                            (find-cost-to-reach current-state))
                          (search-loop!)))

                       (True (search-loop!))))))

        (search-loop!
          (the (Unit -> Optional (Tuple (List Move) PuzzleState))
               (fn ()
                 (match (queue:remove-min! frontier)
                   ((None) None)
                   ((Some (Tuple _ state)) (visit! state))))))

        (reconstruct-path
          (the (PuzzleState -> List Move)
               (fn (destination)
                 (match (hashtable:get breadcrumbs destination)
                   ((None) Nil)
                   ((Some (Tuple prev move)) 
                    (Cons move (reconstruct-path prev))))))))

    (search-loop!)))
```

## Constructing puzzles

There's one last thing to do before we can solve our puzzles: we have to have a puzzle to
solve. To make constructing `PuzzleState`s easy, we'll define a `make-puzzle`
macro. You'll give it a list of colors that will appear in your puzzle, and it will assign
each of them a number. Then you'll list several beakers, using the color names you listed
above, and it will construct a `PuzzleState` that contains those beakers.

Note that this is not generate-puzzle; (pseudo-)randomly generating a solvable initial
puzzle state is a separate problem. If you have interest and I have time, I may try to
write a follow-up post for generating solvable puzzles; I intend to use an AI planning
technique called regression, which is fancy-talk for working backwards.

Macros should always strive to handle syntax only within the `DEFMACRO`, and keep all
runtime logic within ordinary functions. The ordinary functions in question are
`make-beaker`, which takes a list of colors, verifies that it's not larger than 4, and wraps
it in a `BeakerConfiguration`; and `%make-puzzle`, which takes a list of lists of colors
representing the beakers in a puzzle, calls `make-beaker` on each of them, and folds the
result into a `PuzzleState`.

```lisp
(declare make-beaker (List Color -> BeakerConfiguration))
(define (make-beaker clrs)
  (if (> (list:length clrs) 4)
      (lisp :any (clrs)
        (cl:error "BeakerConfiguration ~a has length > 4" clrs))
      (BeakerConfiguration clrs)))

(declare %make-puzzle (List (List Color) -> PuzzleState))
(define (%make-puzzle beakers)
  (pipe (iter:into-iter beakers)
        (map make-beaker)
        (iter:fold! add-beaker
                    (PuzzleState map:empty))))
```

Outside of our `coalton-toplevel`, back in the regular Lisp world:

```lisp
(cl:defmacro make-puzzle (colors cl:&body beakers)
  "Construct a PuzzleState containing the BEAKERS.

COLORS should be a list of symbols which name colors. Each will be assigned 
a unique integer for use in Color objects.

BEAKERS should each be either:
- a list of color names from COLORS, denoting a beaker with those contents. 
  The \"top\" of a beaker is on the left, and the \"bottom\" of a beaker is 
  on the right.
- the symbol coalton:Nil denoting an empty beaker.

e.g.:

(make-puzzle (red green blue)
  (red green blue blue)
  (green red blue blue)
  (red green red green)
  Nil)

constructs a puzzle that might look graphically like:

<=====> <=====> <=====> <=====>
 | r |   | g |   | r |   |   |
 | g |   | r |   | g |   |   |
 | b |   | b |   | r |   |   |
 | b |   | b |   | g |   |   |
 \___/   \___/   \___/   \___/
"
  (cl:let ((color-idx -1))
    (cl:labels ((next-color ()
                  `(Color ,(cl:incf color-idx)))
                (color-binding-form (color-name)
                  `(,color-name ,(next-color)))
                (beaker-make-list (beaker)
                  (cl:if (cl:eq beaker 'Nil)
                         'Nil
                         `(make-list ,@beaker))))
      `(let ,(cl:mapcar #'color-binding-form colors)
         (%make-puzzle (make-list ,@(cl:mapcar #'beaker-make-list
                                               beakers)))))))
```

## Trying it out!

As of writing, I was stuck on level 133 of the app, which corresponds to the following
`make-puzzle` form:

```lisp
(make-puzzle (lime blue maroon baby-blue 
              teal yellow navy-blue pink 
              green orange grey magenta)
  (lime blue maroon lime)
  (blue baby-blue teal yellow)
  (yellow navy-blue teal yellow)
  (pink baby-blue green yellow)
  (orange pink navy-blue grey)
  (blue baby-blue navy-blue magenta)
  (teal green maroon maroon)
  (pink magenta lime maroon)
  (orange grey grey pink)
  (green lime teal magenta)
  (grey baby-blue orange navy-blue)
  (magenta blue green orange)
  Nil
  Nil)
```

I typed up said `make-puzzle`, and ran `find-solution` on it in the repl. Specifically, I
loaded this ASDF system with `:COALTON-RELEASE` enabled and my SBCL compiler optimization
flags tuned for performance before finding a solution, so my repl session looked like:

```lisp
CL-USER> (push :coalton-release *features*)
(:COALTON-RELEASE #| other features elided |#)
CL-USER> (declaim (optimize (speed 3)
                            (safety 1)
                            (space 1)
                            (debug 1)
                            (compilation-speed 0)))
NIL
CL-USER> (asdf:load-system "coalton" :force :all)
#| boring compiler output elided |#
T
CL-USER> (asdf:load-system "water-sort")
#| boring compiler output elided |#
CL-USER> (in-package "water-sort")
WATER-SORT/PACKAGE> (coalton 
  (make-puzzle (lime blue maroon baby-blue 
                teal yellow navy-blue pink 
                green orange grey magenta)
    (lime blue maroon lime)
    (blue baby-blue teal yellow)
    (yellow navy-blue teal yellow)
    (pink baby-blue green yellow)
    (orange pink navy-blue grey)
    (blue baby-blue navy-blue magenta)
    (teal green maroon maroon)
    (pink magenta lime maroon)
    (orange grey grey pink)
    (green lime teal magenta)
    (grey baby-blue orange navy-blue)
    (magenta blue green orange)
    Nil
    Nil))
```

It chugged along for a few seconds (12ish, according to `CL:TIME`, on my m1 MacBook Air),
then spit out a gnarly debug representation for the solution. I copied out the list of
moves and used `M-%` (Emacs' `query-replace`) a few times to clean it up and to replace
the color numbers with their names. Then I plugged the moves into the app, and sure
enough, it worked!

The solution, after my cleaning, was:

```lisp
(POURINTO (BEAKER (green lime teal magenta)) 
          (BEAKER Nil))
(POURINTO (BEAKER (lime blue maroon lime)) 
          (BEAKER (lime teal magenta)))
(POURINTO (BEAKER (blue baby-blue navy-blue magenta)) 
          (BEAKER (blue maroon lime)))
(POURINTO (BEAKER (blue baby-blue teal yellow)) 
          (BEAKER Nil))
(POURINTO (BEAKER (baby-blue teal yellow)) 
          (BEAKER (baby-blue navy-blue magenta)))
(POURINTO (BEAKER (teal green maroon maroon)) 
          (BEAKER (teal yellow)))
(POURINTO (BEAKER (green maroon maroon)) 
          (BEAKER (green)))
(POURINTO (BEAKER (blue blue maroon lime)) 
          (BEAKER (blue)))
(POURINTO (BEAKER (maroon lime)) 
          (BEAKER (maroon maroon)))
(POURINTO (BEAKER (lime lime teal magenta)) 
          (BEAKER (lime)))
(POURINTO (BEAKER (teal magenta)) 
          (BEAKER (teal teal yellow)))
(POURINTO (BEAKER (magenta blue green orange)) 
          (BEAKER (magenta)))
(POURINTO (BEAKER (blue green orange)) 
          (BEAKER (blue blue blue)))
(POURINTO (BEAKER (green orange)) 
          (BEAKER (green green)))
(POURINTO (BEAKER (orange grey grey pink)) 
          (BEAKER (orange)))
(POURINTO (BEAKER (orange pink navy-blue grey)) 
          (BEAKER (orange orange)))
(POURINTO (BEAKER (pink magenta lime maroon)) 
          (BEAKER (pink navy-blue grey)))
(POURINTO (BEAKER (magenta lime maroon)) 
          (BEAKER (magenta magenta)))
(POURINTO (BEAKER (grey baby-blue orange navy-blue)) 
          (BEAKER (grey grey pink)))
(POURINTO (BEAKER (lime maroon)) 
          (BEAKER (lime lime lime)))
(POURINTO (BEAKER (maroon)) 
          (BEAKER (maroon maroon maroon)))
(POURINTO (BEAKER (baby-blue orange navy-blue)) 
          (BEAKER Nil))
(POURINTO (BEAKER (orange navy-blue)) 
          (BEAKER (orange orange orange)))
(POURINTO (BEAKER (baby-blue baby-blue navy-blue magenta)) 
          (BEAKER (baby-blue)))
(POURINTO (BEAKER (navy-blue magenta)) 
          (BEAKER (navy-blue)))
(POURINTO (BEAKER (magenta)) 
          (BEAKER (magenta magenta magenta)))
(POURINTO (BEAKER (teal teal teal yellow)) 
          (BEAKER Nil))
(POURINTO (BEAKER (yellow navy-blue teal yellow)) 
          (BEAKER (yellow)))
(POURINTO (BEAKER (navy-blue teal yellow)) 
          (BEAKER (navy-blue navy-blue)))
(POURINTO (BEAKER (teal yellow)) 
          (BEAKER (teal teal teal)))
(POURINTO (BEAKER (yellow)) 
          (BEAKER (yellow yellow)))
(POURINTO (BEAKER (pink pink navy-blue grey)) 
          (BEAKER Nil))
(POURINTO (BEAKER (navy-blue grey)) 
          (BEAKER (navy-blue navy-blue navy-blue)))
(POURINTO (BEAKER (grey grey grey pink)) 
          (BEAKER (grey)))
(POURINTO (BEAKER (pink baby-blue green yellow)) 
          (BEAKER (pink)))
(POURINTO (BEAKER (baby-blue green yellow)) 
          (BEAKER (baby-blue baby-blue baby-blue)))
(POURINTO (BEAKER (green yellow)) 
          (BEAKER (green green green)))
(POURINTO (BEAKER (yellow)) 
          (BEAKER (yellow yellow yellow)))
(POURINTO (BEAKER (pink pink)) 
          (BEAKER (pink pink)))
```
