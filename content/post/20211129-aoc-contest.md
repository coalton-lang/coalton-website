---
title: "AoC 2021 Coalton Contest"
date: 2021-11-29
---

By [Robert Smith](https://twitter.com/stylewarning)

***

*Update: The prizes have been matched 1:1 by a donor who wishes to remain anonymous!*

***

## Introduction

Last [September](https://coalton-lang.github.io/20211010-introducing-coalton/) we announced Coalton, a statically typed language that is "just" another Common Lisp DSL. To our great surprise, there was a lot of excitement and fanfare, which made the development team feel quite honored and proud. It even made [the top of Hacker News](https://news.ycombinator.com/item?id=28484850)!

Unsurprisingly, as is the case with many open-source projects, that fanfare lead to little "conversion"; only a few people actually gave Coalton a shot and provided feedback. We are *immensely* thankful to those who did! The good news is that it lead to some good discussion, great PRs, and fantastic internship applications from a wonderful and diverse group of people. We won't be able to accept everyone but I'm pleased that there's interest in helping build out the next generation of quantum computational tools using "alien technology". :)

Anyway, there's a yearly event called [Advent of Code](https://adventofcode.com/), or AoC for short. Each year, 25 programming problems are posted between the first and twenty-fifth days of December. Many people take it as an opportunity to try new languages and tools. I've done it only once, many years ago, and it was really fun. I plan on trying again this year.

That got me thinking: Maybe people might be interested in trying out Coalton and helping make it better in the process for AoC 2021. To spur such interest, I decided to make an informal contest out of this!

## Contest

The contest is this to solve all 25 AoC 2021 problems in Coalton (for the Grand Prize).

In that process, you can submit bug reports (for Curator Prizes) and/or PRs (for Magician Prizes) enhancing Coalton or fixing aspects of Coalton that bothered you. Some examples of these could be:

- additions to the standard library: new modules of functions and data structures,

- type system and soundness improvements: new features like [associated types](https://doc.rust-lang.org/rust-by-example/generics/assoc_items/types.html) or [weak type variables](https://ocamlverse.github.io/content/weak_type_variables.html),

- compiler optimizations: getting feature-parity with type-annotated Common Lisp,

- documentation improvements,

- better ASDF integration,

- better editor (Emacs/SLIME) integration: showing type hints in the mini-buffer (for the Parchment Prize),

and so on. Again, these are just examples; you might think of something else to do.

Additionally, there is an opportunity to write about Coalton (for the Feather Prize), be it with a tutorial, an exposition about Coalton, a cool use-case, or an experience report.



### Submissions

Submissions of AoC 2021 solutions must be made in the form of a publicly visible, open-source repository licensed *with any OSI-approved license*. Submissions must either be emailed to this address:

```lisp
(MAP 'STRING #'CODE-CHAR
     '#(99 111 97 108 116 111 110 64 112 114 111
        116 111 110 109 97 105 108 46 99 111 109))
```

or sent [via Discord](https://discord.gg/cPb6Bc4xAH). Bug reports and/or PRs *must* be made on [GitHub](https://github.com/coalton-lang/coalton).

### Prizes

There are ~~600 USD~~ ~~650 USD~~ **1,300 USD** worth of prizes. The prizes are as follows:

- **Grand Prize**: A prize of ~~150 USD~~ **300 USD** for the best overall solutions to AoC 2021 judged by code quality and innovation.

- **Parchment Prize**: A prize of ~~100 USD~~ **200 USD** for the extending SLIME and SWANK to understand Coalton, at least recognizing Coalton functions in Coalton contexts and showing type hints in the mini-buffer.

- **Feather Prize**: A prize of ~~50 USD~~ **100 USD** for the best exposition, tutorial, explanation, or written experience report on Coalton. At the author's option, the report will be featured on this blog.

- **Phoenix Prize**: A prize of ~~50 USD~~ **100 USD** for the best online talk demonstrating Coalton in a live-coding environment; the talk must be at least thirty minutes long and should be submitted to the current [organizer](mailto:phoe@disroot.org) of [Online Lisp Meetings](https://www.youtube.com/playlist?list=PLgq_B39Y_kKD9_sdCeE5SufaeAtbYPv80) to be played on the OLM Twitch.

- **Magician Prizes**: The top 5 significant contributions that make Coalton noticeably nicer or easier to use each win ~~50 USD~~ **100 USD**.

- **Curator Prizes**: The top 5 bug reports (based on their significance and report quality) to Coalton each win ~~10 USD~~ **20 USD**.

Prize winners will be announced in a blog post.

### Some Fine Print

There are a few facts and disclaimers:

- Submissions must be made and finished by 23:59 on Sunday, January 2, 2022.

- A single person **can** be awarded multiple times.

- Consideration of contributions and subsequent ranking will be done by the Coalton developers. Not every contribution is necessarily considered for a reward (e.g., a typo fix, while appreciated, will not be rewarded).

- The **Grand Prize** will only be awarded if there were at least 5 submissions. The **Feather Prize** will only be awarded if there are at least 3 submissions.

- Winners will be announced by January 9, 2022. Winners must be payable via PayPal, ko-fi, or Venmo. Winners may propose an alternative payment provider, but it is up to our discretion whether it will be used. Unpayable winners unfortunately must forfeit their cash prize.

- Violators of the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) will disqualified.

- In ambiguous or extenuating circumstances, we reserve the right to change, add, or remove terms from this blog post.

### Acknowledgements

- Thanks to [phoe](https://phoe.github.io) for creating and sponsoring the Phoenix Prize!

- Thanks to a donor who wishes to remain anonymous for 1:1 matching *all* of the prizes!

## How Do I Get Started?

We recommend to get in touch on [Discord](https://discord.gg/cPb6Bc4xAH) so we can help you with your journey. Then we recommend following the [Getting Started](https://github.com/coalton-lang/coalton#getting-started) steps in the readme. Looking at some [example code](https://github.com/coalton-lang/coalton#whats-here) can also be helpful.

There are probably three effective ways of solving AoC 2021 problems:

1. To write straight Coalton. This is a good route if you love puzzles, and aren't afraid of cutting yourself on the bleeding edge.

2. To mock up a solution in Haskell, then port it to Coalton.

2. To mock up a solution in Common Lisp, and then convert it to Coalton bit by bit.

The third approach is especially effective if you divide your solution into two packages, say `aoc-lisp` (which `:use`s `:cl`), and `aoc-coalton` (which `:use`s `:coalton` and `:coalton-library`). Take a look at this [JSON parser](https://github.com/coalton-lang/coalton/tree/main/examples/coalton-json/src) to see how Lisp and Coalton packages can be used side-by-side.

## FAQs

**Do I need to solve all of the AoC problems to win a prize?**

For the Grand Prize, all 25 problems must be solved.

For the other prizes, you must solve at least 5 of the problems.

**Can I win multiple prizes?**

Yes, you can win multiple awards from different categories. You can also win multiple awards within the same category.

**Can prizes be split?**

There are two ways a prize may be split:

1. At your request, we are happy to split a prize in at most two parts for single submissions with shared authorship.

2. In the event that there are several submissions in a category whose prize is at least 100 USD, for which the judges see work of equal exceptional quality, we reserve the right to split the prize at most two ways.

**When is the submission deadline?**

Sunday, January 2, 2022 at 23:59 anywhere on Earth.

**Can my solutions use Common Lisp?**

Yes, you'll probably *need* to. But the solutions should use Coalton as much as feasible, and the Common Lisp should be as "hidden" as possible.

**Can my solutions use libraries?**

Yes, of course.

**One of the problems literally cannot be solved with Coalton. What do I do?**

If Coalton just lacks some functions and data structures, we recommend implementing and contributing them! You could win a prize for it!

If it's truly the case that a problem is unrealistic to solve with Coalton alone, then we'll update this contest to discount that problem from consideration.


## We're Here to Help

We know Coalton still needs work. That's why we are here to help, suggest directions, give tips, and answer questions. Please visit us on [Discord](https://discord.gg/cPb6Bc4xAH) to chat about Coalton!
