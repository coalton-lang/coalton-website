---
identifier: Reference
summary: 'The Coalton standard library reference.'
math: true
layout: two-pane
---
<aside class="sidebar">
<div class="sidebar-header">

### Reference

<div class="symbol-search">
  <input type="text" id="symbol-search-input" placeholder="Search symbols..." autocomplete="off">
  <div class="search-results" id="search-results"></div>
</div>
</div>
<div class="sidebar-content">

- <a href="#coalton-package"><code>COALTON</code></a>
- <a href="#coalton/algorithms/fft-package"><code>COALTON/ALGORITHMS/FFT</code></a>
- <a href="#coalton/big-float-package"><code>COALTON/BIG-FLOAT</code></a>
- <a href="#coalton/bits-package"><code>COALTON/BITS</code></a>
- <a href="#coalton/builtin-package"><code>COALTON/BUILTIN</code></a>
- <a href="#coalton/cell-package"><code>COALTON/CELL</code></a>
- <a href="#coalton/char-package"><code>COALTON/CHAR</code></a>
- <a href="#coalton/classes-package"><code>COALTON/CLASSES</code></a>
- <a href="#coalton/computable-reals-package"><code>COALTON/COMPUTABLE-REALS</code></a>
- <a href="#coalton/experimental/do-control-core-package"><code>COALTON/EXPERIMENTAL/DO-CONTROL-CORE</code></a>
- <a href="#coalton/experimental/do-control-loops-package"><code>COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS</code></a>
- <a href="#coalton/experimental/do-control-loops-adv-package"><code>COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS-ADV</code></a>
- <a href="#coalton/experimental/loops-package"><code>COALTON/EXPERIMENTAL/LOOPS</code></a>
- <a href="#coalton/file-package"><code>COALTON/FILE</code></a>
- <a href="#coalton/functions-package"><code>COALTON/FUNCTIONS</code></a>
- <a href="#coalton/hash-package"><code>COALTON/HASH</code></a>
- <a href="#coalton/hashmap-package"><code>COALTON/HASHMAP</code></a>
- <a href="#coalton/hashtable-package"><code>COALTON/HASHTABLE</code></a>
- <a href="#coalton/iterator-package"><code>COALTON/ITERATOR</code></a>
- <a href="#coalton/lisparray-package"><code>COALTON/LISPARRAY</code></a>
- <a href="#coalton/list-package"><code>COALTON/LIST</code></a>
- <a href="#coalton/math/arith-package"><code>COALTON/MATH/ARITH</code></a>
- <a href="#coalton/math/bounded-package"><code>COALTON/MATH/BOUNDED</code></a>
- <a href="#coalton/math/complex-package"><code>COALTON/MATH/COMPLEX</code></a>
- <a href="#coalton/math/dual-package"><code>COALTON/MATH/DUAL</code></a>
- <a href="#coalton/math/dyadic-package"><code>COALTON/MATH/DYADIC</code></a>
- <a href="#coalton/math/elementary-package"><code>COALTON/MATH/ELEMENTARY</code></a>
- <a href="#coalton/math/fraction-package"><code>COALTON/MATH/FRACTION</code></a>
- <a href="#coalton/math/hyperdual-package"><code>COALTON/MATH/HYPERDUAL</code></a>
- <a href="#coalton/math/integral-package"><code>COALTON/MATH/INTEGRAL</code></a>
- <a href="#coalton/math/real-package"><code>COALTON/MATH/REAL</code></a>
- <a href="#coalton/monad/classes-package"><code>COALTON/MONAD/CLASSES</code></a>
- <a href="#coalton/monad/environment-package"><code>COALTON/MONAD/ENVIRONMENT</code></a>
- <a href="#coalton/monad/free-package"><code>COALTON/MONAD/FREE</code></a>
- <a href="#coalton/monad/freet-package"><code>COALTON/MONAD/FREET</code></a>
- <a href="#coalton/monad/identity-package"><code>COALTON/MONAD/IDENTITY</code></a>
- <a href="#coalton/monad/optionalt-package"><code>COALTON/MONAD/OPTIONALT</code></a>
- <a href="#coalton/monad/resultt-package"><code>COALTON/MONAD/RESULTT</code></a>
- <a href="#coalton/monad/state-package"><code>COALTON/MONAD/STATE</code></a>
- <a href="#coalton/monad/statet-package"><code>COALTON/MONAD/STATET</code></a>
- <a href="#coalton/optional-package"><code>COALTON/OPTIONAL</code></a>
- <a href="#coalton/ordmap-package"><code>COALTON/ORDMAP</code></a>
- <a href="#coalton/ordtree-package"><code>COALTON/ORDTREE</code></a>
- <a href="#coalton/queue-package"><code>COALTON/QUEUE</code></a>
- <a href="#coalton/randomaccess-package"><code>COALTON/RANDOMACCESS</code></a>
- <a href="#coalton/result-package"><code>COALTON/RESULT</code></a>
- <a href="#coalton/seq-package"><code>COALTON/SEQ</code></a>
- <a href="#coalton/slice-package"><code>COALTON/SLICE</code></a>
- <a href="#coalton/string-package"><code>COALTON/STRING</code></a>
- <a href="#coalton/symbol-package"><code>COALTON/SYMBOL</code></a>
- <a href="#coalton/system-package"><code>COALTON/SYSTEM</code></a>
- <a href="#coalton/tuple-package"><code>COALTON/TUPLE</code></a>
- <a href="#coalton/types-package"><code>COALTON/TYPES</code></a>
- <a href="#coalton/vector-package"><code>COALTON/VECTOR</code></a>
</div>
</aside>
<div class="main-content">

# Package `COALTON`<a name="coalton-package"></a>


Public interface to COALTON.

### Types

#### <a href="#arrow-type"><code>Arrow</code></a> <sup><sub>[TYPE]</sub></sup><a name="arrow-type"></a>

A named constructor for function types. `Arrow :a :b` is equivalent to `:a -> :b`.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">Applicative</a> (<a href="#arrow-type">Arrow</a> :A)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#arrow-type">Arrow</a> :A)</code>
- <code><a href="#monad-class">Monad</a> (<a href="#arrow-type">Arrow</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (:A &rarr; :B)</code>

</details>



***

#### <a href="#bit-type"><code>Bit</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L82-L83">src</a></sub></sup><a name="bit-type"></a>

A single bit, equal to 0 or 1. Uses `cl:bit`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">Bits</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#default-class">Default</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i8-type">I8</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#num-class">Num</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#real-class">Real</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#boolean-type"><code>Boolean</code></a> <sup><sub>[TYPE]</sub></sup><a name="boolean-type"></a>
- <code>False</code> 
  - Boolean `False`
- <code>True</code> 
  - Boolean `True`

Either true or false, internally represented by `cl:t` and `cl:nil` respectively.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">Default</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#terminator-class">Terminator</a> <a href="#boolean-type">Boolean</a></code>

</details>



***

#### <a href="#char-type"><code>Char</code></a> <sup><sub>[TYPE]</sub></sup><a name="char-type"></a>

A character represented by a Common Lisp `cl:character`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> <a href="#char-type">Char</a></code>
- <code><a href="#file-class">File</a> <a href="#char-type">Char</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> <a href="#string-type">String</a> <a href="#char-type">Char</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#char-type">Char</a></code>
- <code><a href="#into-class">Into</a> <a href="#char-type">Char</a> <a href="#string-type">String</a></code>
- <code><a href="#intoiterator-class">IntoIterator</a> <a href="#string-type">String</a> <a href="#char-type">Char</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#char-type">Char</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#char-type">Char</a></code>

</details>



***

#### <a href="#double-float-type"><code>Double-Float</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L128-L129">src</a></sub></sup><a name="double-float-type"></a>

Deprecated name for F64. This is provided for backward compatibility.



***

#### <a href="#f32-type"><code>F32</code></a> <sup><sub>[TYPE]</sub></sup><a name="f32-type"></a>

Single-precision floating point number (32 bits in size). Represented by a Common Lisp `cl:single-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#f32-type">F32</a></code>
- <code><a href="#default-class">Default</a> <a href="#f32-type">F32</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#f32-type">F32</a></code>
- <code><a href="#elementary-class">Elementary</a> <a href="#f32-type">F32</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#f32-type">F32</a></code>
- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#f32-type">F32</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#f32-type">F32</a></code>
- <code><a href="#num-class">Num</a> <a href="#f32-type">F32</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#f32-type">F32</a></code>
- <code><a href="#polar-class">Polar</a> <a href="#f32-type">F32</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#f32-type">F32</a></code>
- <code><a href="#radical-class">Radical</a> <a href="#f32-type">F32</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#f32-type">F32</a></code>
- <code><a href="#real-class">Real</a> <a href="#f32-type">F32</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#f32-type">F32</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#f32-type">F32</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#f32-type">F32</a></code>
- <code><a href="#transfinite-class">Transfinite</a> <a href="#f32-type">F32</a></code>
- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#f32-type">F32</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f32-type">F32</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#f64-type"><code>F64</code></a> <sup><sub>[TYPE]</sub></sup><a name="f64-type"></a>

Double-precision floating point number (64 bits in size). Represented by a Common Lisp `cl:double-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#f64-type">F64</a></code>
- <code><a href="#default-class">Default</a> <a href="#f64-type">F64</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#f64-type">F64</a></code>
- <code><a href="#elementary-class">Elementary</a> <a href="#f64-type">F64</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#f64-type">F64</a></code>
- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#f64-type">F64</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#f64-type">F64</a></code>
- <code><a href="#num-class">Num</a> <a href="#f64-type">F64</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#f64-type">F64</a></code>
- <code><a href="#polar-class">Polar</a> <a href="#f64-type">F64</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#f64-type">F64</a></code>
- <code><a href="#radical-class">Radical</a> <a href="#f64-type">F64</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#f64-type">F64</a></code>
- <code><a href="#real-class">Real</a> <a href="#f64-type">F64</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#f64-type">F64</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#f64-type">F64</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#f64-type">F64</a></code>
- <code><a href="#transfinite-class">Transfinite</a> <a href="#f64-type">F64</a></code>
- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#f64-type">F64</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f64-type">F64</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#fraction-type"><code>Fraction</code></a> <sup><sub>[TYPE]</sub></sup><a name="fraction-type"></a>

A ratio of integers always in reduced form. Represented by a Common Lisp `cl:rational`.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#dyadic-type">Dyadic</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#num-class">Num</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#real-class">Real</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f32-type">F32</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f64-type">F64</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#i16-type"><code>I16</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L106-L107">src</a></sub></sup><a name="i16-type"></a>

Signed 16-bit integer capable of storing values in `[-32768, 32767]`. Uses `(signed-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#i16-type">I16</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i16-type">I16</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i16-type">I16</a></code>
- <code><a href="#default-class">Default</a> <a href="#i16-type">I16</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i16-type">I16</a></code>
- <code><a href="#file-class">File</a> <a href="#i16-type">I16</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i16-type">I16</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#num-class">Num</a> <a href="#i16-type">I16</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i16-type">I16</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i16-type">I16</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#i32-type"><code>I32</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L110-L111">src</a></sub></sup><a name="i32-type"></a>

Signed 32-bit integer capable of storing values in `[-2147483648, 2147483647]`. Uses `(signed-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#i32-type">I32</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i32-type">I32</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i32-type">I32</a></code>
- <code><a href="#default-class">Default</a> <a href="#i32-type">I32</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i32-type">I32</a></code>
- <code><a href="#file-class">File</a> <a href="#i32-type">I32</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i32-type">I32</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#num-class">Num</a> <a href="#i32-type">I32</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i32-type">I32</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#i32-type">I32</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#i32-type">I32</a></code>
- <code><a href="#real-class">Real</a> <a href="#i32-type">I32</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i32-type">I32</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#i64-type"><code>I64</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L114-L115">src</a></sub></sup><a name="i64-type"></a>

Signed 64-bit integer capable of storing values in `[-9223372036854775808, 9223372036854775807]`. Uses `(signed-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#i64-type">I64</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i64-type">I64</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i64-type">I64</a></code>
- <code><a href="#default-class">Default</a> <a href="#i64-type">I64</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i64-type">I64</a></code>
- <code><a href="#file-class">File</a> <a href="#i64-type">I64</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i64-type">I64</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#i64-type">I64</a></code>
- <code><a href="#num-class">Num</a> <a href="#i64-type">I64</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i64-type">I64</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#i64-type">I64</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#i64-type">I64</a></code>
- <code><a href="#real-class">Real</a> <a href="#i64-type">I64</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i64-type">I64</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i64-type">I64</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#i8-type"><code>I8</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L102-L103">src</a></sub></sup><a name="i8-type"></a>

Signed 8-bit integer capable of storing values in `[-128, 127]`. Uses `(signed-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#i8-type">I8</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i8-type">I8</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i8-type">I8</a></code>
- <code><a href="#default-class">Default</a> <a href="#i8-type">I8</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i8-type">I8</a></code>
- <code><a href="#file-class">File</a> <a href="#i8-type">I8</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i8-type">I8</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i8-type">I8</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i8-type">I8</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#num-class">Num</a> <a href="#i8-type">I8</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i8-type">I8</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#i8-type">I8</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#i8-type">I8</a></code>
- <code><a href="#real-class">Real</a> <a href="#i8-type">I8</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i8-type">I8</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#ifix-type"><code>IFix</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L118-L119">src</a></sub></sup><a name="ifix-type"></a>

Non-allocating tagged integer; range is platform-dependent. Does not error on overflow. Uses `fixnum`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#default-class">Default</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#file-class">File</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#num-class">Num</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#real-class">Real</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#integer-type"><code>Integer</code></a> <sup><sub>[TYPE]</sub></sup><a name="integer-type"></a>

Integer of unbounded size. Represented by a Common Lisp `cl:integer`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">Bits</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#default-class">Default</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#f32-type">F32</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#f64-type">F64</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#num-class">Num</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#real-class">Real</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#string-type">String</a> <a href="#integer-type">Integer</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#list-type"><code>List</code></a> <sup><sub>[TYPE]</sub></sup><a name="list-type"></a>
- <code>Nil</code> 
  - `Nil` represents an empty `List`.
- <code>(Cons :A (<a href="#list-type">List</a> :A))</code>
  - `Cons` represents a `List` containing a first element (`car`) and a nested `Cons` (`cdr`).

Homogeneous list of objects. Represented as a typical Common Lisp chain of `cl:cons` (or `cl:nil`).

<details>
<summary>Instances</summary>

- <code><a href="#alternative-class">Alternative</a> <a href="#list-type">List</a></code>
- <code><a href="#applicative-class">Applicative</a> <a href="#list-type">List</a></code>
- <code><a href="#default-class">Default</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#foldable-class">Foldable</a> <a href="#list-type">List</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#list-type">List</a> :A) :A</code>
- <code><a href="#functor-class">Functor</a> <a href="#list-type">List</a></code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#lisparray-type">LispArray</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#list-type">List</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> (<a href="#optional-type">Optional</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#seq-type">Seq</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#list-type">List</a> :A) :A</code>
- <code><a href="#iso-class">Iso</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#iso-class">Iso</a> (<a href="#vector-type">Vector</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#monad-class">Monad</a> <a href="#list-type">List</a></code>
- <code><a href="#monoid-class">Monoid</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#into-class">Into</a> (<a href="#list-type">List</a> :A) (<a href="#lisparray-type">LispArray</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#iso-class">Iso</a> (<a href="#lisparray-type">LispArray</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#terminator-class">Terminator</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#traversable-class">Traversable</a> <a href="#list-type">List</a></code>
- <code><a href="#yielder-class">Yielder</a> <a href="#list-type">List</a></code>

</details>



***

#### <a href="#optional-type"><code>Optional</code></a> <sup><sub>[TYPE]</sub></sup><a name="optional-type"></a>
- <code>(Some :A)</code>
  - `Some` expresses the presence of a meaningful value.
- <code>None</code> 
  - `None` expresses the absence of a meaningful value.

A type that allows indicating the presence or absence of a value. The underlying representation does not allocate when a value is present (i.e., with `Some`).

<details>
<summary>Instances</summary>

- <code><a href="#alternative-class">Alternative</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#applicative-class">Applicative</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#default-class">Default</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#fromiterator-class">FromIterator</a> :A :B &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#optional-type">Optional</a> :A) (<a href="#optional-type">Optional</a> :B)</code>
- <code><a href="#functor-class">Functor</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#into-class">Into</a> (<a href="#optional-type">Optional</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#optional-type">Optional</a> :A) (<a href="#result-type">Result</a> <a href="#unit-type">Unit</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#result-type">Result</a> :A :B) (<a href="#optional-type">Optional</a> :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#optional-type">Optional</a> :A) :A</code>
- <code><a href="#iso-class">Iso</a> (<a href="#result-type">Result</a> <a href="#unit-type">Unit</a> :A) (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#monad-class">Monad</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#monadfail-class">MonadFail</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#monoid-class">Monoid</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#terminator-class">Terminator</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#traversable-class">Traversable</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#unwrappable-class">Unwrappable</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#yielder-class">Yielder</a> <a href="#optional-type">Optional</a></code>

</details>



***

#### <a href="#single-float-type"><code>Single-Float</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L125-L126">src</a></sub></sup><a name="single-float-type"></a>

Deprecated name for F32. This is provided for backward compatibility.



***

#### <a href="#string-type"><code>String</code></a> <sup><sub>[TYPE]</sub></sup><a name="string-type"></a>

String of characters. Represented by Common Lisp `cl:string`.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">Default</a> <a href="#string-type">String</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#string-type">String</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> <a href="#string-type">String</a> <a href="#char-type">Char</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> :A <a href="#string-type">String</a> &rArr; <a href="#into-class">Into</a> (<a href="#cell-type">Cell</a> :A) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#char-type">Char</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#pathname-type">Pathname</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>)</code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> (<a href="#vector-type">Vector</a> <a href="#char-type">Char</a>)</code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#intoiterator-class">IntoIterator</a> <a href="#string-type">String</a> <a href="#char-type">Char</a></code>
- <code><a href="#iso-class">Iso</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#monoid-class">Monoid</a> <a href="#string-type">String</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#string-type">String</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#string-type">String</a></code>
- <code><a href="#semigroup-class">Semigroup</a> <a href="#string-type">String</a></code>
- <code><a href="#signalable-class">Signalable</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f32-type">F32</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f64-type">F64</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#string-type">String</a> <a href="#integer-type">Integer</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#u16-type"><code>U16</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L90-L91">src</a></sub></sup><a name="u16-type"></a>

Unsigned 16-bit integer capable of storing values in `[0, 65535]`. Uses `(unsigned-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#u16-type">U16</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u16-type">U16</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u16-type">U16</a></code>
- <code><a href="#default-class">Default</a> <a href="#u16-type">U16</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u16-type">U16</a></code>
- <code><a href="#file-class">File</a> <a href="#u16-type">U16</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u16-type">U16</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#num-class">Num</a> <a href="#u16-type">U16</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u16-type">U16</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u16-type">U16</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u16-type">U16</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#u32-type"><code>U32</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L94-L95">src</a></sub></sup><a name="u32-type"></a>

Unsigned 32-bit integer capable of storing values in `[0, 4294967295]`. Uses `(unsigned-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#u32-type">U32</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u32-type">U32</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u32-type">U32</a></code>
- <code><a href="#default-class">Default</a> <a href="#u32-type">U32</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u32-type">U32</a></code>
- <code><a href="#file-class">File</a> <a href="#u32-type">U32</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u32-type">U32</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#num-class">Num</a> <a href="#u32-type">U32</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u32-type">U32</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#u32-type">U32</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#u32-type">U32</a></code>
- <code><a href="#real-class">Real</a> <a href="#u32-type">U32</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u32-type">U32</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u32-type">U32</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#u64-type"><code>U64</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L98-L99">src</a></sub></sup><a name="u64-type"></a>

Unsigned 64-bit integer capable of storing values in `[0, 18446744073709551615]`. Uses `(unsigned-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#u64-type">U64</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u64-type">U64</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u64-type">U64</a></code>
- <code><a href="#default-class">Default</a> <a href="#u64-type">U64</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u64-type">U64</a></code>
- <code><a href="#file-class">File</a> <a href="#u64-type">U64</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u64-type">U64</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#u64-type">U64</a></code>
- <code><a href="#num-class">Num</a> <a href="#u64-type">U64</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u64-type">U64</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#u64-type">U64</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#u64-type">U64</a></code>
- <code><a href="#real-class">Real</a> <a href="#u64-type">U64</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u64-type">U64</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u64-type">U64</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#u8-type"><code>U8</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L86-L87">src</a></sub></sup><a name="u8-type"></a>

Unsigned 8-bit integer capable of storing values in `[0, 255]`. Uses `(unsigned-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#u8-type">U8</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u8-type">U8</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u8-type">U8</a></code>
- <code><a href="#default-class">Default</a> <a href="#u8-type">U8</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u8-type">U8</a></code>
- <code><a href="#file-class">File</a> <a href="#u8-type">U8</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u8-type">U8</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#num-class">Num</a> <a href="#u8-type">U8</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u8-type">U8</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#u8-type">U8</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#u8-type">U8</a></code>
- <code><a href="#real-class">Real</a> <a href="#u8-type">U8</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u8-type">U8</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u8-type">U8</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#ufix-type"><code>UFix</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L122-L123">src</a></sub></sup><a name="ufix-type"></a>

Non-allocating tagged non-negative integer; range is platform-dependent. Uses `(and fixnum unsigned-byte)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FileByte</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#default-class">Default</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#file-class">File</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#u64-type">U64</a></code>
- <code><a href="#num-class">Num</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#real-class">Real</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#unit-type"><code>Unit</code></a> <sup><sub>[TYPE]</sub></sup><a name="unit-type"></a>
- <code>Unit</code> 
  - `Unit` represents nullary parameters and return types.

The "unit" type whose only member is the value `Unit`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> <a href="#unit-type">Unit</a></code>

</details>



***

#### <a href="#void-type"><code>Void</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L18-L18">src</a></sub></sup><a name="void-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#void-type">Void</a></code>

</details>



***

### Values

#### <a href="#cons-value"><code>(CONS X XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L34-L36">src</a></sub></sup><a name="cons-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>


***

#### <a href="#inline-value"><code>(INLINE APPLICATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L1-L2">src</a></sub></sup><a name="inline-value"></a>
<code>&forall; :A. (:A &rarr; :A)</code>

Try to inline `application`. It will only attempt to inline
`application` written syntactically as a function application.



***

#### <a href="#likely-value"><code>(LIKELY PREDICATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L3-L3">src</a></sub></sup><a name="likely-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Hint to the compiler that `predicate` is likely `True`.



***

#### <a href="#noinline-value"><code>(NOINLINE APPLICATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L2-L3">src</a></sub></sup><a name="noinline-value"></a>
<code>&forall; :A. (:A &rarr; :A)</code>

Prevent `application` from being inlined. It will prevent
inlining when the argument is syntactically a function application.



***

#### <a href="#some-value"><code>(SOME X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L52-L64">src</a></sub></sup><a name="some-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#optional-type">Optional</a> :A))</code>

A constructor for the type, `Optional`. This constructor can be used
like any other algebraic data type constructor, including for pattern
matching, as in the following example.

```lisp
(match x
  ((Some value)
    value)
  (_ (error "Oh, no!")))
```



***

#### <a href="#unlikely-value"><code>(UNLIKELY PREDICATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L3-L3">src</a></sub></sup><a name="unlikely-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Hint to the compiler that `predicate` is likely `False`.



***

#### <a href="#false-value"><code>False</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L25-L25">src</a></sub></sup><a name="false-value"></a>
<code><a href="#boolean-type">Boolean</a></code>


***

#### <a href="#nil-value"><code>Nil</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L39-L41">src</a></sub></sup><a name="nil-value"></a>
<code>&forall; :A. (<a href="#list-type">List</a> :A)</code>


***

#### <a href="#none-value"><code>None</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L67-L79">src</a></sub></sup><a name="none-value"></a>
<code>&forall; :A. (<a href="#optional-type">Optional</a> :A)</code>

A constructor for the type, `Optional`. This constructor can be used
like any other algebraic data type constructor, including for pattern
matching, as in the following example.

```lisp
(match x
  ((None)
   "Fantastic!")
  (_ (error "Oh, no!")))
```



***

#### <a href="#true-value"><code>True</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L22-L22">src</a></sub></sup><a name="true-value"></a>
<code><a href="#boolean-type">Boolean</a></code>


***

#### <a href="#unit-value"><code>Unit</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L29-L29">src</a></sub></sup><a name="unit-value"></a>
<code><a href="#unit-type">Unit</a></code>


***

### Macros

#### <a href="#coalton-.<-macro"><code>.&lt; (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-.<-macro"></a>

Right associative compose operator. Creates a new functions that will run the
functions right to left when applied. This is the same as the `nest` macro without supplying
the value. The composition is thus the same order as `compose`.

`(.< f g h)` creates the function `(fn (x) (f (g (h x))))`.



***

#### <a href="#coalton-.>-macro"><code>.&gt; (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-.>-macro"></a>

Left associative compose operator. Creates a new functions that will run the
functions left to right when applied. This is the same as the `pipe` macro without supplying
the value. The composition is thus the reverse order of `compose`.

`(.> f g h)` creates the function `(fn (x) (h (g (f x))))`.



***

#### <a href="#coalton-as-macro"><code>AS (TYPE &amp;OPTIONAL (EXPR NIL EXPR-SUPPLIED-P))</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-as-macro"></a>

A syntactic convenience for type casting.

    (as <type> <expr>)

is equivalent to

    (the <type> (into <expr>))

and

    (as <type>)

is equivalent to

    (fn (expr) (the <type> (into expr))).

Note that this may copy the object or allocate memory.



***

#### <a href="#coalton-assert-macro"><code>ASSERT (DATUM &amp;OPTIONAL (FORMAT-STRING &quot;&quot;) &amp;REST FORMAT-DATA)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-assert-macro"></a>

Signal an error unless `datum` is `True`.

If the assertion fails, the signaled error will apply the `format-data`
to the `format-string` via `cl:format` to produce an error message.



***

#### <a href="#coalton-make-list-macro"><code>MAKE-LIST (&amp;REST FORMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-make-list-macro"></a>

Create a heterogeneous Coalton `List` of objects. This macro is
deprecated; use `coalton/list:make`.



***

#### <a href="#coalton-nest-macro"><code>NEST (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-nest-macro"></a>

A syntactic convenience for function application. Transform

    (nest f g h x)

to

    (f (g (h x))).



***

#### <a href="#coalton-pipe-macro"><code>PIPE (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-pipe-macro"></a>

A syntactic convenience for function application, sometimes called a "threading macro". Transform

    (pipe x h g f)

to

    (f (g (h x))).



***

#### <a href="#coalton-try-as-macro"><code>TRY-AS (TYPE &amp;OPTIONAL (EXPR NIL EXPR-SUPPLIED-P))</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-try-as-macro"></a>

A syntactic convenience for type casting.

    (try-as <type> <expr>)

is equivalent to

    (the (Result :_ <type>) (tryInto <expr>))

and

    (try-as <type>)

is equivalent to

    (fn (expr) (the (Result :_ <type>) (tryInto expr))).

Note that this may copy the object or allocate memory.



***

#### <a href="#coalton-unwrap-as-macro"><code>UNWRAP-AS (TYPE &amp;OPTIONAL (EXPR NIL EXPR-SUPPLIED-P))</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-unwrap-as-macro"></a>

A syntactic convenience for type casting.

    (unwrap-as <type> <expr>)

is equivalent to

    (the <type> (uwrap (tryInto <expr>)))

and

    (unwrap-as <type>)

is equivalent to

    (fn (expr) (the <type> (unwrap (tryInto expr)))).

Note that this may copy the object or allocate memory.



***

# Package `COALTON/ALGORITHMS/FFT`<a name="coalton/algorithms/fft-package"></a>


A coalton package for performing FFTs.

### Classes

#### <a href="#fftcyclicgroup-class"><code>FFTCyclicGroup</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L149-L158">src</a></sub></sup><a name="fftcyclicgroup-class"></a>
<code><a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A</code>


A class of types, each of which is a mathematical cyclic group.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>CYCLIC-ADD-IDENTITY :: :A</code>
- <code>CYCLIC-ADD :: (:A &rarr; :A &rarr; :A)</code>
- <code>CYCLIC-ADD-INVERSE :: (:A &rarr; :A)</code>
- <code>CYCLIC-NTH-GENERATOR :: (<a href="#ufix-type">UFix</a> &rarr; :A)</code><br/>A function which returns a primitive `n`th root of unity.
<details>
<summary>Instances</summary>

- <code><a href="#fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>

</details>



***

#### <a href="#fftfield-class"><code>FFTField</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L139-L143">src</a></sub></sup><a name="fftfield-class"></a>
<code><a href="#fftring-class">FFTRing</a> :A &rArr; <a href="#fftfield-class">FFTField</a> :A</code>


A class of types, each of which is a mathematical field.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>MULTIPLY-INVERSE :: (:A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#fftfield-class">FFTField</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftfield-class">FFTField</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>

</details>



***

#### <a href="#fftgroup-class"><code>FFTGroup</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L120-L126">src</a></sub></sup><a name="fftgroup-class"></a>
<code><a href="#fftgroup-class">FFTGroup</a> :A</code>


A class of types, each of which is a mathematical group.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>ADD-IDENTITY :: :A</code>
- <code>ADD :: (:A &rarr; :A &rarr; :A)</code>
- <code>ADD-INVERSE :: (:A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#fftgroup-class">FFTGroup</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftgroup-class">FFTGroup</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>

</details>



***

#### <a href="#fftring-class"><code>FFTRing</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L132-L137">src</a></sub></sup><a name="fftring-class"></a>
<code><a href="#fftgroup-class">FFTGroup</a> :A &rArr; <a href="#fftring-class">FFTRing</a> :A</code>


A class of types, each of which is a mathematical ring.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>MULTIPLY-IDENTITY :: :A</code>
- <code>MULTIPLY :: (:A &rarr; :A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#fftring-class">FFTRing</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftring-class">FFTRing</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>

</details>



***

### Values

#### <a href="#dif-fft-raw-value"><code>(DIF-FFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L226-L239">src</a></sub></sup><a name="dif-fft-raw-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#fftring-class">FFTRing</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) &rArr; (:B &rarr; :C &rarr; <a href="#unit-type">Unit</a>)</code>

A decimation-in-frequency fast fourier transform, reading from `src` and writing to `dst`.

Input: natural order
Output: bit-reversed order
Normalization: none



***

#### <a href="#dif-ifft-raw-value"><code>(DIF-IFFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L246-L259">src</a></sub></sup><a name="dif-ifft-raw-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#fftring-class">FFTRing</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) &rArr; (:B &rarr; :C &rarr; <a href="#unit-type">Unit</a>)</code>

A decimation-in-frequency inverse fast fourier transform, reading from `src` and writing to `dst`.

Input: natural order
Output: bit-reversed order
Normalization: none



***

#### <a href="#dit-fft-raw-value"><code>(DIT-FFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L330-L344">src</a></sub></sup><a name="dit-fft-raw-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#fftring-class">FFTRing</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) &rArr; (:B &rarr; :C &rarr; <a href="#unit-type">Unit</a>)</code>

A decimation-in-time fast fourier transform, reading from `src` and writing to `dst`.

Input: bit-reversed order
Output: natural order
Normalization: none



***

#### <a href="#dit-ifft-raw-value"><code>(DIT-IFFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L351-L365">src</a></sub></sup><a name="dit-ifft-raw-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#fftring-class">FFTRing</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) &rArr; (:B &rarr; :C &rarr; <a href="#unit-type">Unit</a>)</code>

A decimation-in-time inverse fast fourier transform, reading from `src` and writing to `dst`.

Input: bit-reversed order
Output: natural order
Normalization: none



***

#### <a href="#divide-value"><code>(DIVIDE X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L146-L147">src</a></sub></sup><a name="divide-value"></a>
<code>&forall; :A. <a href="#fftfield-class">FFTField</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>


***

#### <a href="#fft-value"><code>(FFT STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L448-L460">src</a></sub></sup><a name="fft-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#fftring-class">FFTRing</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) &rArr; (:B &rarr; :C)</code>

Perform a fast Fourier transform on the data in `storage`.



***

#### <a href="#fft!-value"><code>(FFT! STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L374-L385">src</a></sub></sup><a name="fft!-value"></a>
<code>&forall; :A :B. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#fftring-class">FFTRing</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) &rArr; (:B &rarr; :B)</code>

Perform an in-place fast Fourier transform on `storage`.



***

#### <a href="#fft-into!-value"><code>(FFT-INTO! DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L410-L422">src</a></sub></sup><a name="fft-into!-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#fftring-class">FFTRing</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) &rArr; (:B &rarr; :C &rarr; :B)</code>

Perform a fast Fourier transform of `src`, writing the result to `dst`. If `dst` is longer than `src`, then remaining elements of `dst` are left unmutated.



***

#### <a href="#ifft-value"><code>(IFFT STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L465-L481">src</a></sub></sup><a name="ifft-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#fftfield-class">FFTField</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) (<a href="#num-class">Num</a> :A) &rArr; (:B &rarr; :C)</code>

Perform an inverse fast Fourier transform on the data in `storage`.



***

#### <a href="#ifft!-value"><code>(IFFT! STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L390-L405">src</a></sub></sup><a name="ifft!-value"></a>
<code>&forall; :A :B. (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#fftfield-class">FFTField</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) (<a href="#num-class">Num</a> :A) &rArr; (:B &rarr; :B)</code>

Perform an in-place inverse fast Fourier transform on `storage`.



***

#### <a href="#ifft-into!-value"><code>(IFFT-INTO! DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L427-L443">src</a></sub></sup><a name="ifft-into!-value"></a>
<code>&forall; :A :B :C. (<a href="#randomaccess-class">RandomAccess</a> :C :A) (<a href="#randomaccess-class">RandomAccess</a> :B :A) (<a href="#fftfield-class">FFTField</a> :A) (<a href="#fftcyclicgroup-class">FFTCyclicGroup</a> :A) (<a href="#num-class">Num</a> :A) &rArr; (:B &rarr; :C &rarr; :B)</code>

Perform an inverse fast Fourier transform of `src`, writing the result to `dst`. If `dst` is longer than `src`, then remaining elements of `dst` are left unmutated.



***

#### <a href="#subtract-value"><code>(SUBTRACT X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/algorithms/fft.lisp#L129-L130">src</a></sub></sup><a name="subtract-value"></a>
<code>&forall; :A. <a href="#fftgroup-class">FFTGroup</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>


***

# Package `COALTON/BIG-FLOAT`<a name="coalton/big-float-package"></a>

### Types

#### <a href="#big-float-type"><code>Big-Float</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L162-L163">src</a></sub></sup><a name="big-float-type"></a>

An arbitrary (but fixed) precision floating point number.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#elementary-class">Elementary</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#num-class">Num</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#polar-class">Polar</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#radical-class">Radical</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#real-class">Real</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#transfinite-class">Transfinite</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#big-float-type">Big-Float</a></code>

</details>



***

#### <a href="#roundingmode-type"><code>RoundingMode</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L88-L88">src</a></sub></sup><a name="roundingmode-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#roundingmode-type">RoundingMode</a></code>

</details>



***

### Values

#### <a href="#bf-ee-value"><code>(BF-EE _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L305-L308">src</a></sub></sup><a name="bf-ee-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#big-float-type">Big-Float</a>)</code>

Return the value of ee = exp(1) to the currently set precision.



***

#### <a href="#bf-pi-value"><code>(BF-PI _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L276-L279">src</a></sub></sup><a name="bf-pi-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#big-float-type">Big-Float</a>)</code>

Return the value of pi to the currently set precision.



***

#### <a href="#get-precision-value"><code>(GET-PRECISION _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L130-L133">src</a></sub></sup><a name="get-precision-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#ufix-type">UFix</a>)</code>

Get the current precision of Big-Float arithmetic.



***

#### <a href="#get-rounding-mode-value"><code>(GET-ROUNDING-MODE _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L136-L139">src</a></sub></sup><a name="get-rounding-mode-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#roundingmode-type">RoundingMode</a>)</code>

Get the current rounding-mode of Big-Float arithmetic.



***

#### <a href="#set-precision!-value"><code>(SET-PRECISION! PREC-BITS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L114-L120">src</a></sub></sup><a name="set-precision!-value"></a>
<code>(<a href="#ufix-type">UFix</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Set the precision of Big-Float arithmetic to PREC-BITS bits.



***

#### <a href="#set-rounding-mode!-value"><code>(SET-ROUNDING-MODE! R)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L123-L127">src</a></sub></sup><a name="set-rounding-mode!-value"></a>
<code>(<a href="#roundingmode-type">RoundingMode</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Set the global rounding mode for Big-Float operations.



***

#### <a href="#with-precision-value"><code>(WITH-PRECISION PREC-BITS F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L151-L153">src</a></sub></sup><a name="with-precision-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#unit-type">Unit</a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float precision PREC-BITS.



***

#### <a href="#with-precision-rounding-value"><code>(WITH-PRECISION-ROUNDING PREC-BITS RND F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L143-L148">src</a></sub></sup><a name="with-precision-rounding-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; <a href="#roundingmode-type">RoundingMode</a> &rarr; (<a href="#unit-type">Unit</a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float PREC-BITS precision and RND rounding-mode.



***

#### <a href="#with-rounding-value"><code>(WITH-ROUNDING RND F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L156-L158">src</a></sub></sup><a name="with-rounding-value"></a>
<code>&forall; :A. (<a href="#roundingmode-type">RoundingMode</a> &rarr; (<a href="#unit-type">Unit</a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float rounding-mode RND.



***

#### <a href="#rnda-value"><code>RNDA</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L105-L107">src</a></sub></sup><a name="rnda-value"></a>
<code><a href="#roundingmode-type">RoundingMode</a></code>

RouND Away from zero.



***

#### <a href="#rndd-value"><code>RNDD</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L102-L104">src</a></sub></sup><a name="rndd-value"></a>
<code><a href="#roundingmode-type">RoundingMode</a></code>

RouND Down, toward negative infinity.



***

#### <a href="#rndf-value"><code>RNDF</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L108-L110">src</a></sub></sup><a name="rndf-value"></a>
<code><a href="#roundingmode-type">RoundingMode</a></code>

Faithful rounding (experimental).



***

#### <a href="#rndn-value"><code>RNDN</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L93-L95">src</a></sub></sup><a name="rndn-value"></a>
<code><a href="#roundingmode-type">RoundingMode</a></code>

RouND to Nearest, with the even rounding rule.



***

#### <a href="#rndna-value"><code>RNDNA</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L90-L92">src</a></sub></sup><a name="rndna-value"></a>
<code><a href="#roundingmode-type">RoundingMode</a></code>

RouND to Nearest Away.



***

#### <a href="#rndu-value"><code>RNDU</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L99-L101">src</a></sub></sup><a name="rndu-value"></a>
<code><a href="#roundingmode-type">RoundingMode</a></code>

RouND Up, toward positive infinity.



***

#### <a href="#rndz-value"><code>RNDZ</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L96-L98">src</a></sub></sup><a name="rndz-value"></a>
<code><a href="#roundingmode-type">RoundingMode</a></code>

RouND toward Zero.



***

# Package `COALTON/BITS`<a name="coalton/bits-package"></a>

### Classes

#### <a href="#bits-class"><code>Bits</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L36-L47">src</a></sub></sup><a name="bits-class"></a>
<code><a href="#num-class">Num</a> :A &rArr; <a href="#bits-class">Bits</a> :A</code>


Operations on the bits of twos-complement integers

Methods:
- <code>AND :: (:A &rarr; :A &rarr; :A)</code><br/>The bitwise logical `and` of two integers
- <code>OR :: (:A &rarr; :A &rarr; :A)</code><br/>The bitwise logical `or` of two integers
- <code>XOR :: (:A &rarr; :A &rarr; :A)</code><br/>The bitwise logical exclusive `or` of two integers
- <code>NOT :: (:A &rarr; :A)</code><br/>The bitwise logical `not` of two integers
- <code>SHIFT :: (<a href="#integer-type">Integer</a> &rarr; :A &rarr; :A)</code><br/>The arithmetic left-shift of an integer by an integer number of bits
<details>
<summary>Instances</summary>

- <code><a href="#bits-class">Bits</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u64-type">U64</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u32-type">U32</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u16-type">U16</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#u8-type">U8</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i64-type">I64</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i32-type">I32</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i16-type">I16</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#i8-type">I8</a></code>
- <code><a href="#bits-class">Bits</a> <a href="#integer-type">Integer</a></code>

</details>



***

#### <a href="#reversebits-class"><code>ReverseBits</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L63-L70">src</a></sub></sup><a name="reversebits-class"></a>
<code><a href="#reversebits-class">ReverseBits</a> :A</code>


A type class for number types that support bit reversal.

Methods:
- <code>REVERSE-BITS :: (:A &rarr; :A)</code><br/>Reverse the bits of `x`.
- <code>REVERSE-N-BITS :: (<a href="#ufix-type">UFix</a> &rarr; :A &rarr; :A)</code><br/>Reverse the first `n` bits of `x` and set the rest to 0.
<details>
<summary>Instances</summary>

- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u64-type">U64</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u32-type">U32</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u16-type">U16</a></code>
- <code><a href="#reversebits-class">ReverseBits</a> <a href="#u8-type">U8</a></code>

</details>



***

### Values

#### <a href="#dpb-value"><code>(DPB NEWBYTE SIZE POSITION BITSTRING)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L50-L53">src</a></sub></sup><a name="dpb-value"></a>
<code>&forall; :A. <a href="#bits-class">Bits</a> :A &rArr; (:A &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; :A &rarr; :A)</code>

Deposits a byte `newbyte` of size `size` into a bitstring `bitstring` at a position `position`.



***

#### <a href="#ldb-value"><code>(LDB SIZE POSITION BITSTRING)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L56-L59">src</a></sub></sup><a name="ldb-value"></a>
<code>&forall; :A. <a href="#bits-class">Bits</a> :A &rArr; (<a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; :A &rarr; :A)</code>

Deposits a byte of size `size` into a bitstring at a position `position`.



***

# Package `COALTON/BUILTIN`<a name="coalton/builtin-package"></a>

### Values

#### <a href="#boolean-and-value"><code>(BOOLEAN-AND X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L61-L64">src</a></sub></sup><a name="boolean-and-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Are both `x` and `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `and` macro for short-circuiting behavior.



***

#### <a href="#boolean-not-value"><code>(BOOLEAN-NOT X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L47-L50">src</a></sub></sup><a name="boolean-not-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

The logical negation of `x`. Is `x` false?



***

#### <a href="#boolean-or-value"><code>(BOOLEAN-OR X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L54-L57">src</a></sub></sup><a name="boolean-or-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is either `x` or `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `or` macro for short-circuiting behavior.



***

#### <a href="#boolean-xor-value"><code>(BOOLEAN-XOR X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L68-L72">src</a></sub></sup><a name="boolean-xor-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Are `x` or `y` true, but not both?



***

#### <a href="#not-value"><code>(NOT X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L35-L37">src</a></sub></sup><a name="not-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Synonym for `boolean-not`.



***

#### <a href="#undefined-value"><code>(UNDEFINED _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L29-L31">src</a></sub></sup><a name="undefined-value"></a>
<code>&forall; :A :B. (:A &rarr; :B)</code>

A function which can be used in place of any value, throwing an error at runtime.



***

#### <a href="#xor-value"><code>(XOR X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L41-L43">src</a></sub></sup><a name="xor-value"></a>
<code>(<a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Synonym for `boolean-xor`.



***

### Macros

#### <a href="#coalton-builtin-unreachable-macro"><code>UNREACHABLE (&amp;OPTIONAL (DATUM &quot;Unreachable&quot;) &amp;REST ARGUMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-builtin-unreachable-macro"></a>

Signal an error with CL format string DATUM and optional format arguments ARGUMENTS.



***

# Package `COALTON/CELL`<a name="coalton/cell-package"></a>

### Types

#### <a href="#cell-type"><code>Cell</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L41-L42">src</a></sub></sup><a name="cell-type"></a>

Internally mutable cell

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">Applicative</a> <a href="#cell-type">Cell</a></code>
- <code><a href="#default-class">Default</a> :A &rArr; <a href="#default-class">Default</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#functor-class">Functor</a> <a href="#cell-type">Cell</a></code>
- <code><a href="#into-class">Into</a> (<a href="#cell-type">Cell</a> :A) :A</code>
- <code><a href="#into-class">Into</a> :A (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#into-class">Into</a> :A <a href="#string-type">String</a> &rArr; <a href="#into-class">Into</a> (<a href="#cell-type">Cell</a> :A) <a href="#string-type">String</a></code>
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#cell-type">Cell</a> :A)</code>

</details>



***

### Values

#### <a href="#decrement!-value"><code>(DECREMENT! CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L111-L114">src</a></sub></sup><a name="decrement!-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; ((<a href="#cell-type">Cell</a> :A) &rarr; :A)</code>

Subtract one from the contents of `cel`, storing and returning the new
value.



***

#### <a href="#increment!-value"><code>(INCREMENT! CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L105-L107">src</a></sub></sup><a name="increment!-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; ((<a href="#cell-type">Cell</a> :A) &rarr; :A)</code>

Add one to the contents of `cel`, storing and returning the new value.



***

#### <a href="#new-value"><code>(NEW DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L46-L49">src</a></sub></sup><a name="new-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#cell-type">Cell</a> :A))</code>

Create a new mutable cell containing `data`.



***

#### <a href="#pop!-value"><code>(POP! CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L94-L100">src</a></sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">Cell</a> (<a href="#list-type">List</a> :A)) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Remove and return the first element of the list in `cel`.



***

#### <a href="#push!-value"><code>(PUSH! CEL NEW-ELT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L89-L91">src</a></sub></sup><a name="push!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">Cell</a> (<a href="#list-type">List</a> :A)) &rarr; :A &rarr; (<a href="#list-type">List</a> :A))</code>

Push `new-elt` onto the start of the list in `cel`.



***

#### <a href="#read-value"><code>(READ CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L53-L56">src</a></sub></sup><a name="read-value"></a>
<code>&forall; :A. ((<a href="#cell-type">Cell</a> :A) &rarr; :A)</code>

Read the value of a mutable cell `cel`.



***

#### <a href="#swap!-value"><code>(SWAP! CEL DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L59-L65">src</a></sub></sup><a name="swap!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">Cell</a> :A) &rarr; :A &rarr; :A)</code>

Replace the value of a mutable cell `cel` with a new value `data`,
then return the old value.



***

#### <a href="#update!-value"><code>(UPDATE! F CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L77-L79">src</a></sub></sup><a name="update!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type">Cell</a> :A) &rarr; :A)</code>

Apply `f` to the contents of `cel`, storing and returning the result.



***

#### <a href="#update-swap!-value"><code>(UPDATE-SWAP! F CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L82-L85">src</a></sub></sup><a name="update-swap!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type">Cell</a> :A) &rarr; :A)</code>

Apply `f` to the contents of `cel`, swapping the result for the old
value.



***

#### <a href="#write!-value"><code>(WRITE! CEL DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L69-L73">src</a></sub></sup><a name="write!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">Cell</a> :A) &rarr; :A &rarr; :A)</code>

Set the value of a mutable cell `cel` to `data`, returning the new
value.



***

# Package `COALTON/CHAR`<a name="coalton/char-package"></a>

### Values

#### <a href="#alpha?-value"><code>(ALPHA? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L73-L76">src</a></sub></sup><a name="alpha?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` an alphabetic character?



***

#### <a href="#ascii-alpha?-value"><code>(ASCII-ALPHA? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L79-L84">src</a></sub></sup><a name="ascii-alpha?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` an ASCII alphabetic character?



***

#### <a href="#ascii-alphanumeric?-value"><code>(ASCII-ALPHANUMERIC? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L99-L102">src</a></sub></sup><a name="ascii-alphanumeric?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` an ASCII alphanumeric character?



***

#### <a href="#ascii-digit?-value"><code>(ASCII-DIGIT? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L93-L96">src</a></sub></sup><a name="ascii-digit?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` an ASCII digit character?



***

#### <a href="#ascii-lowercase?-value"><code>(ASCII-LOWERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L124-L128">src</a></sub></sup><a name="ascii-lowercase?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` an ASCII lowercase character?



***

#### <a href="#ascii-uppercase?-value"><code>(ASCII-UPPERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L111-L115">src</a></sub></sup><a name="ascii-uppercase?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` an ASCII uppercase character?



***

#### <a href="#char-code-value"><code>(CHAR-CODE CHAR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L38-L41">src</a></sub></sup><a name="char-code-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#ufix-type">UFix</a>)</code>

Convert a character to its ASCII representation.



***

#### <a href="#code-char-value"><code>(CODE-CHAR CODE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L50-L57">src</a></sub></sup><a name="code-char-value"></a>
<code>(<a href="#ufix-type">UFix</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#char-type">Char</a>))</code>

Convert a number to its ASCII character, returning None on failure.



***

#### <a href="#digit?-value"><code>(DIGIT? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L87-L90">src</a></sub></sup><a name="digit?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` a digit character?



***

#### <a href="#downcase-value"><code>(DOWNCASE C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L137-L140">src</a></sub></sup><a name="downcase-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#char-type">Char</a>)</code>

Returns the downcased version of `c`, returning `c` when there is none.



***

#### <a href="#lowercase?-value"><code>(LOWERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L118-L121">src</a></sub></sup><a name="lowercase?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` a lowercase character?



***

#### <a href="#range-value"><code>(RANGE START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L143-L150">src</a></sub></sup><a name="range-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#char-type">Char</a> &rarr; (<a href="#iterator-type">Iterator</a> <a href="#char-type">Char</a>))</code>

An inclusive range of characters from `start` to `end` by `char-code`.



***

#### <a href="#upcase-value"><code>(UPCASE C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L131-L134">src</a></sub></sup><a name="upcase-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#char-type">Char</a>)</code>

Returns the upcased version of `c`, returning `c` when there is none.



***

#### <a href="#uppercase?-value"><code>(UPPERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L105-L108">src</a></sub></sup><a name="uppercase?-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `c` an uppercase character?



***

# Package `COALTON/CLASSES`<a name="coalton/classes-package"></a>

### Types

#### <a href="#hash-type"><code>Hash</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L124-L125">src</a></sub></sup><a name="hash-type"></a>

Implementation dependent hash code.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">Default</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#monoid-class">Monoid</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#semigroup-class">Semigroup</a> <a href="#hash-type">Hash</a></code>

</details>



***

#### <a href="#ord-type"><code>Ord</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L138-L142">src</a></sub></sup><a name="ord-type"></a>
- <code>LT</code> 
  - Less than
- <code>GT</code> 
  - Greater than
- <code>EQ</code> 
  - Equal to

The result of an ordered comparison.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> <a href="#ord-type">Ord</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#ord-type">Ord</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ord-type">Ord</a></code>

</details>



***

#### <a href="#result-type"><code>Result</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L76-L82">src</a></sub></sup><a name="result-type"></a>
- <code>(Err :A)</code>
- <code>(Ok :B)</code>

Represents something that may have failed.

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#result-type">Result</a> :A :B)</code>
- <code>(<a href="#ord-class">Ord</a> :A) (<a href="#ord-class">Ord</a> :B) &rArr; <a href="#ord-class">Ord</a> (<a href="#result-type">Result</a> :A :B)</code>
- <code><a href="#applicative-class">Applicative</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#bifunctor-class">Bifunctor</a> <a href="#result-type">Result</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> :A :B &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#result-type">Result</a> :C :A) (<a href="#result-type">Result</a> :C :B)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#optional-type">Optional</a> :A) (<a href="#result-type">Result</a> <a href="#unit-type">Unit</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#result-type">Result</a> :A :B) (<a href="#optional-type">Optional</a> :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#result-type">Result</a> :A :B) :B</code>
- <code><a href="#iso-class">Iso</a> (<a href="#result-type">Result</a> <a href="#unit-type">Unit</a> :A) (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#monad-class">Monad</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#monoid-class">Monoid</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#result-type">Result</a> :B :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#result-type">Result</a> :A :B)</code>
- <code><a href="#semigroup-class">Semigroup</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#result-type">Result</a> :B :A)</code>
- <code><a href="#terminator-class">Terminator</a> (<a href="#result-type">Result</a> :A :B)</code>
- <code><a href="#traversable-class">Traversable</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#unwrappable-class">Unwrappable</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#yielder-class">Yielder</a> (<a href="#result-type">Result</a> :A)</code>

</details>



***

### Structs

#### <a href="#tuple-type"><code>Tuple :A :B</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L71-L74">src</a></sub></sup><a name="tuple-type"></a>

A heterogeneous collection of items.

<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) &rArr; <a href="#default-class">Default</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code>(<a href="#ord-class">Ord</a> :A) (<a href="#ord-class">Ord</a> :B) &rArr; <a href="#ord-class">Ord</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#bifunctor-class">Bifunctor</a> <a href="#tuple-type">Tuple</a></code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#hashmap-type">HashMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#hashtable-type">Hashtable</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#into-class">Into</a> (<a href="#mappair-type">MapPair</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#into-class">Into</a> (<a href="#tuple-type">Tuple</a> :A :B) (<a href="#tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#hashmap-type">HashMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#hashtable-type">Hashtable</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#ordmap-type">OrdMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#iso-class">Iso</a> (<a href="#tuple-type">Tuple</a> :A :B) (<a href="#tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#ordmap-type">OrdMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#traversable-class">Traversable</a> (<a href="#tuple-type">Tuple</a> :A)</code>

</details>



***

### Classes

#### <a href="#alternative-class"><code>Alternative</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L256-L259">src</a></sub></sup><a name="alternative-class"></a>
<code><a href="#applicative-class">Applicative</a> :A &rArr; <a href="#alternative-class">Alternative</a> :A</code>


Types which are monoids on applicative functors.

Methods:
- <code>ALT :: ((:A :B) &rarr; (:A :B) &rarr; (:A :B))</code>
- <code>EMPTY :: (:A :C)</code>
<details>
<summary>Instances</summary>

- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#alternative-class">Alternative</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#alternative-class">Alternative</a> <a href="#list-type">List</a></code>
- <code><a href="#alternative-class">Alternative</a> <a href="#optional-type">Optional</a></code>

</details>



***

#### <a href="#applicative-class"><code>Applicative</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L229-L232">src</a></sub></sup><a name="applicative-class"></a>
<code><a href="#functor-class">Functor</a> :A &rArr; <a href="#applicative-class">Applicative</a> :A</code>


Types which are a functor which can embed pure expressions and sequence operations.

Methods:
- <code>PURE :: (:B &rarr; (:A :B))</code>
- <code>LIFTA2 :: ((:C &rarr; :D &rarr; :E) &rarr; (:A :C) &rarr; (:A :D) &rarr; (:A :E))</code>
<details>
<summary>Instances</summary>

- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#applicative-class">Applicative</a> (<a href="#loopt-type">LoopT</a> :A)</code>
- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#monad-class">Monad</a> :B) &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#applicative-class">Applicative</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#applicative-class">Applicative</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#resultt-type">ResultT</a> :B) :A)</code>
- <code><a href="#applicative-class">Applicative</a> :A &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#applicative-class">Applicative</a> (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#applicative-class">Applicative</a> :A &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#statet-type">StateT</a> :B) :A)</code>
- <code><a href="#applicative-class">Applicative</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#applicative-class">Applicative</a> <a href="#identity-type">Identity</a></code>
- <code><a href="#applicative-class">Applicative</a> <a href="#list-type">List</a></code>
- <code><a href="#applicative-class">Applicative</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#applicative-class">Applicative</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#applicative-class">Applicative</a> <a href="#cell-type">Cell</a></code>
- <code><a href="#applicative-class">Applicative</a> (<a href="#arrow-type">Arrow</a> :A)</code>

</details>



***

#### <a href="#bifunctor-class"><code>Bifunctor</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L292-L294">src</a></sub></sup><a name="bifunctor-class"></a>
<code><a href="#bifunctor-class">Bifunctor</a> :A</code>


Types which take two type arguments and are functors on both.

Methods:
- <code>BIMAP :: ((:B &rarr; :C) &rarr; (:D &rarr; :E) &rarr; ((:A :B) :D) &rarr; ((:A :C) :E))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#bifunctor-class">Bifunctor</a> (<a href="#freef-type">FreeF</a> :A)</code>
- <code><a href="#bifunctor-class">Bifunctor</a> <a href="#result-type">Result</a></code>
- <code><a href="#bifunctor-class">Bifunctor</a> <a href="#tuple-type">Tuple</a></code>

</details>



***

#### <a href="#default-class"><code>Default</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L402-L404">src</a></sub></sup><a name="default-class"></a>
<code><a href="#default-class">Default</a> :A</code>


Types which have default values.

Methods:
- <code>DEFAULT :: (<a href="#unit-type">Unit</a> &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#default-class">Default</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#default-class">Default</a> (<a href="#queue-type">Queue</a> :A)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#default-class">Default</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>
- <code><a href="#default-class">Default</a> <a href="#string-type">String</a></code>
- <code><a href="#default-class">Default</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#default-class">Default</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#default-class">Default</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) (<a href="#default-class">Default</a> :C) (<a href="#default-class">Default</a> :D) (<a href="#default-class">Default</a> :E) &rArr; <a href="#default-class">Default</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) (<a href="#default-class">Default</a> :C) (<a href="#default-class">Default</a> :D) &rArr; <a href="#default-class">Default</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) (<a href="#default-class">Default</a> :C) &rArr; <a href="#default-class">Default</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) &rArr; <a href="#default-class">Default</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#default-class">Default</a> :A &rArr; <a href="#default-class">Default</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#default-class">Default</a> <a href="#f64-type">F64</a></code>
- <code><a href="#default-class">Default</a> <a href="#f32-type">F32</a></code>
- <code><a href="#default-class">Default</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#default-class">Default</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#default-class">Default</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#default-class">Default</a> <a href="#u64-type">U64</a></code>
- <code><a href="#default-class">Default</a> <a href="#u32-type">U32</a></code>
- <code><a href="#default-class">Default</a> <a href="#u16-type">U16</a></code>
- <code><a href="#default-class">Default</a> <a href="#i64-type">I64</a></code>
- <code><a href="#default-class">Default</a> <a href="#i32-type">I32</a></code>
- <code><a href="#default-class">Default</a> <a href="#i16-type">I16</a></code>
- <code><a href="#default-class">Default</a> <a href="#u8-type">U8</a></code>
- <code><a href="#default-class">Default</a> <a href="#i8-type">I8</a></code>
- <code><a href="#default-class">Default</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#default-class">Default</a> <a href="#symbol-type">Symbol</a></code>
- <code><a href="#default-class">Default</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#default-class">Default</a> <a href="#hash-type">Hash</a></code>

</details>



***

#### <a href="#eq-class"><code>Eq</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L88-L90">src</a></sub></sup><a name="eq-class"></a>
<code><a href="#eq-class">Eq</a> :A</code>


Types which have equality defined.

Methods:
- <code>== :: (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#mappair-type">MapPair</a> :A :B)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#ordtree-type">OrdTree</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#queue-type">Queue</a> :A)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#hash-class">Hash</a> :A) &rArr; <a href="#eq-class">Eq</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#slice-type">Slice</a> :A)</code>
- <code><a href="#eq-class">Eq</a> <a href="#string-type">String</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#char-type">Char</a></code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#lisparray-type">LispArray</a> :A)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#result-type">Result</a> :A :B)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#eq-class">Eq</a> :C) (<a href="#eq-class">Eq</a> :D) (<a href="#eq-class">Eq</a> :E) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#eq-class">Eq</a> :C) (<a href="#eq-class">Eq</a> :D) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#eq-class">Eq</a> :C) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#dual-type">Dual</a> :A)</code>  
Note: Eq only compares the primal component.
- <code><a href="#eq-class">Eq</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#eq-class">Eq</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#f64-type">F64</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#f32-type">F32</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u64-type">U64</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i64-type">I64</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u32-type">U32</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i32-type">I32</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u16-type">U16</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i16-type">I16</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#u8-type">U8</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#i8-type">I8</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#symbol-type">Symbol</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#ord-type">Ord</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#unit-type">Unit</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#lisptype-type">LispType</a></code>

</details>



***

#### <a href="#foldable-class"><code>Foldable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L261-L264">src</a></sub></sup><a name="foldable-class"></a>
<code><a href="#foldable-class">Foldable</a> :A</code>


Types which can be folded into a single element.

Methods:
- <code>FOLD :: ((:B &rarr; :C &rarr; :B) &rarr; :B &rarr; (:A :C) &rarr; :B)</code><br/>A left tail-recursive fold.
- <code>FOLDR :: ((:D &rarr; :E &rarr; :E) &rarr; :E &rarr; (:A :D) &rarr; :E)</code><br/>A right non-tail-recursive fold.
<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">Foldable</a> <a href="#ordtree-type">OrdTree</a></code>
- <code><a href="#foldable-class">Foldable</a> :A &rArr; <a href="#foldable-class">Foldable</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#foldable-class">Foldable</a> <a href="#queue-type">Queue</a></code>
- <code><a href="#foldable-class">Foldable</a> <a href="#slice-type">Slice</a></code>
- <code><a href="#foldable-class">Foldable</a> <a href="#vector-type">Vector</a></code>
- <code><a href="#foldable-class">Foldable</a> <a href="#list-type">List</a></code>
- <code><a href="#foldable-class">Foldable</a> <a href="#lisparray-type">LispArray</a></code>

</details>



***

#### <a href="#functor-class"><code>Functor</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L225-L227">src</a></sub></sup><a name="functor-class"></a>
<code><a href="#functor-class">Functor</a> :A</code>


Types which can map an inner type where the mapping adheres to the identity and composition laws.

Methods:
- <code>MAP :: ((:B &rarr; :C) &rarr; (:A :B) &rarr; (:A :C))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">Functor</a> <a href="#seq-type">Seq</a></code>
- <code><a href="#functor-class">Functor</a> (<a href="#ordmap-type">OrdMap</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> (<a href="#loopt-type">LoopT</a> :A)</code>
- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#functor-class">Functor</a> :B) &rArr; <a href="#functor-class">Functor</a> ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#freef-type">FreeF</a> :A) :B)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#resultt-type">ResultT</a> :B) :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#statet-type">StateT</a> :B) :A)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#functor-class">Functor</a> <a href="#identity-type">Identity</a></code>
- <code><a href="#functor-class">Functor</a> <a href="#queue-type">Queue</a></code>
- <code><a href="#functor-class">Functor</a> (<a href="#hashmap-type">HashMap</a> :A)</code>
- <code><a href="#functor-class">Functor</a> <a href="#vector-type">Vector</a></code>
- <code><a href="#functor-class">Functor</a> <a href="#list-type">List</a></code>
- <code><a href="#functor-class">Functor</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#functor-class">Functor</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#functor-class">Functor</a> <a href="#iterator-type">Iterator</a></code>
- <code><a href="#functor-class">Functor</a> <a href="#cell-type">Cell</a></code>
- <code><a href="#functor-class">Functor</a> (<a href="#arrow-type">Arrow</a> :A)</code>

</details>



***

#### <a href="#hash-class"><code>Hash</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L127-L131">src</a></sub></sup><a name="hash-class"></a>
<code><a href="#eq-class">Eq</a> :A &rArr; <a href="#hash-class">Hash</a> :A</code>


Types which can be hashed for storage in hash tables.

The hash function must satisfy the invariant that `(== left right)` implies `(== (hash left) (hash right))`.

Methods:
- <code>HASH :: (:A &rarr; <a href="#hash-type">Hash</a>)</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#ordtree-type">OrdTree</a> :A)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> <a href="#string-type">String</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#char-type">Char</a></code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#list-type">List</a> :A)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) (<a href="#hash-class">Hash</a> :C) (<a href="#hash-class">Hash</a> :D) (<a href="#hash-class">Hash</a> :E) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) (<a href="#hash-class">Hash</a> :C) (<a href="#hash-class">Hash</a> :D) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) (<a href="#hash-class">Hash</a> :C) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#dual-type">Dual</a> :A)</code>  
Note: Hash only considers the primal component in order to be consistent with Eq.
- <code><a href="#hash-class">Hash</a> <a href="#f64-type">F64</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#f32-type">F32</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u64-type">U64</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u32-type">U32</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u16-type">U16</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#u8-type">U8</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i64-type">I64</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i32-type">I32</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i16-type">I16</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#i8-type">I8</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#hash-class">Hash</a> <a href="#hash-type">Hash</a></code>

</details>



***

#### <a href="#into-class"><code>Into</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L310-L312">src</a></sub></sup><a name="into-class"></a>
<code><a href="#into-class">Into</a> :A :B</code>


`INTO` implies *every* element of `:a` can be represented by an element of `:b`. This conversion might not be bijective (i.e., there may be elements in `:b` that don't correspond to any in `:a`).

Methods:
- <code>INTO :: (:A &rarr; :B)</code>
<details>
<summary>Instances</summary>

- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#creal-type">CReal</a></code>
- <code>(<a href="#complexcomponent-class">ComplexComponent</a> :A) (<a href="#into-class">Into</a> :A <a href="#creal-type">CReal</a>) &rArr; <a href="#into-class">Into</a> (<a href="#complex-type">Complex</a> :A) (<a href="#complex-type">Complex</a> <a href="#creal-type">CReal</a>)</code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#into-class">Into</a> <a href="#pathname-type">Pathname</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#into-class">Into</a> (<a href="#seq-type">Seq</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#seq-type">Seq</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code>(<a href="#foldable-class">Foldable</a> :A) (<a href="#runtimerepr-class">RuntimeRepr</a> :B) &rArr; <a href="#into-class">Into</a> (:A :B) (<a href="#seq-type">Seq</a> :B)</code>
- <code><a href="#into-class">Into</a> (<a href="#mappair-type">MapPair</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> :A) (<a href="#slice-type">Slice</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#slice-type">Slice</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#char-type">Char</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> (<a href="#vector-type">Vector</a> <a href="#char-type">Char</a>)</code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>)</code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#list-type">List</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#optional-type">Optional</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#lisparray-type">LispArray</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#into-class">Into</a> (<a href="#list-type">List</a> :A) (<a href="#lisparray-type">LispArray</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#optional-type">Optional</a> :A) (<a href="#result-type">Result</a> <a href="#unit-type">Unit</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#result-type">Result</a> :A :B) (<a href="#optional-type">Optional</a> :B)</code>
- <code><a href="#into-class">Into</a> (<a href="#tuple-type">Tuple</a> :A :B) (<a href="#tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#into-class">Into</a> :A <a href="#string-type">String</a> &rArr; <a href="#into-class">Into</a> (<a href="#cell-type">Cell</a> :A) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> (<a href="#cell-type">Cell</a> :A) :A</code>
- <code><a href="#into-class">Into</a> :A (<a href="#cell-type">Cell</a> :A)</code>
- <code>(<a href="#complexcomponent-class">ComplexComponent</a> :A) (<a href="#into-class">Into</a> :A (<a href="#hyperdual-type">Hyperdual</a> :A)) &rArr; <a href="#into-class">Into</a> (<a href="#complex-type">Complex</a> :A) (<a href="#complex-type">Complex</a> (<a href="#hyperdual-type">Hyperdual</a> :A))</code>
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#into-class">Into</a> :A (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#into-class">Into</a> <a href="#dyadic-type">Dyadic</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#into-class">Into</a> :A (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#f64-type">F64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#f32-type">F32</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#i8-type">I8</a></code>
- <code><a href="#into-class">Into</a> <a href="#bit-type">Bit</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">Into</a> :A :A</code>

</details>



***

#### <a href="#iso-class"><code>Iso</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L314-L315">src</a></sub></sup><a name="iso-class"></a>
<code>(<a href="#into-class">Into</a> :A :B) (<a href="#into-class">Into</a> :B :A) &rArr; <a href="#iso-class">Iso</a> :A :B</code>


Opting into this marker typeclass implies that the instances for `(Into :a :b)` and `(Into :b :a)` form a bijection.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#iso-class">Iso</a> (<a href="#slice-type">Slice</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#iso-class">Iso</a> (<a href="#list-type">List</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#iso-class">Iso</a> (<a href="#vector-type">Vector</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#iso-class">Iso</a> (<a href="#lisparray-type">LispArray</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#iso-class">Iso</a> (<a href="#result-type">Result</a> <a href="#unit-type">Unit</a> :A) (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#iso-class">Iso</a> (<a href="#tuple-type">Tuple</a> :A :B) (<a href="#tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#iso-class">Iso</a> :A :A</code>

</details>



***

#### <a href="#monad-class"><code>Monad</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L234-L236">src</a></sub></sup><a name="monad-class"></a>
<code><a href="#applicative-class">Applicative</a> :A &rArr; <a href="#monad-class">Monad</a> :A</code>


Types which are monads as defined in Haskell. See https://wiki.haskell.org/Monad for more information.

Methods:
- <code>&gt;&gt;= :: ((:A :B) &rarr; (:B &rarr; (:A :C)) &rarr; (:A :C))</code>
<details>
<summary>Instances</summary>

- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> (<a href="#loopt-type">LoopT</a> :A)</code>
- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#monad-class">Monad</a> :B) &rArr; <a href="#monad-class">Monad</a> ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#monad-class">Monad</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> ((<a href="#resultt-type">ResultT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> ((<a href="#statet-type">StateT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#monad-class">Monad</a> <a href="#identity-type">Identity</a></code>
- <code><a href="#monad-class">Monad</a> <a href="#list-type">List</a></code>
- <code><a href="#monad-class">Monad</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#monad-class">Monad</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#monad-class">Monad</a> (<a href="#arrow-type">Arrow</a> :A)</code>

</details>



***

#### <a href="#monadfail-class"><code>MonadFail</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L253-L254">src</a></sub></sup><a name="monadfail-class"></a>
<code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadfail-class">MonadFail</a> :A</code>

Methods:
- <code>FAIL :: (<a href="#string-type">String</a> &rarr; (:A :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#monadfail-class">MonadFail</a> <a href="#optional-type">Optional</a></code>

</details>



***

#### <a href="#monadtransformer-class"><code>MonadTransformer</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L238-L241">src</a></sub></sup><a name="monadtransformer-class"></a>
<code><a href="#monadtransformer-class">MonadTransformer</a> :A</code>


Types which are monads that wrap another monad, allowing you to use - for example - State and Result
together.

Methods:
- <code>LIFT :: <a href="#monad-class">Monad</a> :B &rArr; ((:B :C) &rarr; ((:A :B) :C))</code>
<details>
<summary>Instances</summary>

- <code><a href="#monadtransformer-class">MonadTransformer</a> <a href="#loopt-type">LoopT</a></code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#monadtransformer-class">MonadTransformer</a> (<a href="#freet-type">FreeT</a> :A)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> <a href="#optionalt-type">OptionalT</a></code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> (<a href="#resultt-type">ResultT</a> :A)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> (<a href="#envt-type">EnvT</a> :A)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> (<a href="#statet-type">StateT</a> :A)</code>

</details>



***

#### <a href="#monoid-class"><code>Monoid</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L221-L223">src</a></sub></sup><a name="monoid-class"></a>
<code><a href="#semigroup-class">Semigroup</a> :A &rArr; <a href="#monoid-class">Monoid</a> :A</code>


Types with an associative binary operation and identity defined.

Methods:
- <code>MEMPTY :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#monoid-class">Monoid</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code><a href="#monoid-class">Monoid</a> <a href="#string-type">String</a></code>
- <code><a href="#monoid-class">Monoid</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#monoid-class">Monoid</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#monoid-class">Monoid</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#result-type">Result</a> :B :A)</code>
- <code><a href="#monoid-class">Monoid</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#monoid-class">Monoid</a> <a href="#hash-type">Hash</a></code>

</details>



***

#### <a href="#num-class"><code>Num</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L97-L102">src</a></sub></sup><a name="num-class"></a>
<code><a href="#eq-class">Eq</a> :A &rArr; <a href="#num-class">Num</a> :A</code>


Types which have numeric operations defined.

Methods:
- <code>+ :: (:A &rarr; :A &rarr; :A)</code>
- <code>- :: (:A &rarr; :A &rarr; :A)</code>
- <code>* :: (:A &rarr; :A &rarr; :A)</code>
- <code>FROMINT :: (<a href="#integer-type">Integer</a> &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#num-class">Num</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#num-class">Num</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#num-class">Num</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#num-class">Num</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#num-class">Num</a> <a href="#f64-type">F64</a></code>
- <code><a href="#num-class">Num</a> <a href="#f32-type">F32</a></code>
- <code><a href="#num-class">Num</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#num-class">Num</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#num-class">Num</a> <a href="#u64-type">U64</a></code>
- <code><a href="#num-class">Num</a> <a href="#u32-type">U32</a></code>
- <code><a href="#num-class">Num</a> <a href="#u16-type">U16</a></code>
- <code><a href="#num-class">Num</a> <a href="#u8-type">U8</a></code>
- <code><a href="#num-class">Num</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#num-class">Num</a> <a href="#i64-type">I64</a></code>
- <code><a href="#num-class">Num</a> <a href="#i32-type">I32</a></code>
- <code><a href="#num-class">Num</a> <a href="#i16-type">I16</a></code>
- <code><a href="#num-class">Num</a> <a href="#i8-type">I8</a></code>
- <code><a href="#num-class">Num</a> <a href="#integer-type">Integer</a></code>

</details>



***

#### <a href="#ord-class"><code>Ord</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L165-L169">src</a></sub></sup><a name="ord-class"></a>
<code><a href="#eq-class">Eq</a> :A &rArr; <a href="#ord-class">Ord</a> :A</code>


Types whose values can be ordered. Requires `Eq`.

Methods:
- <code>&lt;=&gt; :: (:A &rarr; :A &rarr; <a href="#ord-type">Ord</a>)</code><br/>Given two objects, return their comparison (as an `Ord` object).
<details>
<summary>Instances</summary>

- <code><a href="#ord-class">Ord</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#mappair-type">MapPair</a> :A :B)</code>
- <code><a href="#ord-class">Ord</a> <a href="#string-type">String</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#char-type">Char</a></code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#list-type">List</a> :A)</code>
- <code>(<a href="#ord-class">Ord</a> :A) (<a href="#ord-class">Ord</a> :B) &rArr; <a href="#ord-class">Ord</a> (<a href="#result-type">Result</a> :A :B)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code>(<a href="#ord-class">Ord</a> :A) (<a href="#ord-class">Ord</a> :B) &rArr; <a href="#ord-class">Ord</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#dual-type">Dual</a> :A)</code>  
Note: Ord only compares the primal component.
- <code><a href="#ord-class">Ord</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#f64-type">F64</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#f32-type">F32</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u64-type">U64</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i64-type">I64</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u32-type">U32</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i32-type">I32</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u16-type">U16</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i16-type">I16</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#u8-type">U8</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#i8-type">I8</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#boolean-type">Boolean</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#ord-type">Ord</a></code>

</details>



***

#### <a href="#semigroup-class"><code>Semigroup</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L217-L219">src</a></sub></sup><a name="semigroup-class"></a>
<code><a href="#semigroup-class">Semigroup</a> :A</code>


Types with an associative binary operation defined.

Methods:
- <code>&lt;&gt; :: (:A &rarr; :A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#semigroup-class">Semigroup</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#semigroup-class">Semigroup</a> (<a href="#queue-type">Queue</a> :A)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code><a href="#semigroup-class">Semigroup</a> <a href="#string-type">String</a></code>
- <code><a href="#semigroup-class">Semigroup</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#result-type">Result</a> :B :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> <a href="#hash-type">Hash</a></code>

</details>



***

#### <a href="#signalable-class"><code>Signalable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L55-L57">src</a></sub></sup><a name="signalable-class"></a>
<code><a href="#signalable-class">Signalable</a> :A</code>


Signals errors or warnings by calling their respective lisp conditions.

Methods:
- <code>ERROR :: (:A &rarr; :B)</code><br/>Signal an error with a type-specific error string.
<details>
<summary>Instances</summary>

- <code><a href="#signalable-class">Signalable</a> <a href="#fileerror-type">FileError</a></code>
- <code><a href="#signalable-class">Signalable</a> <a href="#lispcondition-type">LispCondition</a></code>
- <code><a href="#signalable-class">Signalable</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#traversable-class"><code>Traversable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L286-L287">src</a></sub></sup><a name="traversable-class"></a>
<code><a href="#traversable-class">Traversable</a> :A</code>

Methods:
- <code>TRAVERSE :: <a href="#applicative-class">Applicative</a> :B &rArr; ((:C &rarr; (:B :D)) &rarr; (:A :C) &rarr; (:B (:A :D)))</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#monad-class">Monad</a> :A) (<a href="#traversable-class">Traversable</a> :A) (<a href="#traversable-class">Traversable</a> :B) &rArr; <a href="#traversable-class">Traversable</a> ((<a href="#freet-type">FreeT</a> :B) :A)</code>
- <code><a href="#traversable-class">Traversable</a> :A &rArr; <a href="#traversable-class">Traversable</a> ((<a href="#freef-type">FreeF</a> :A) :B)</code>
- <code><a href="#traversable-class">Traversable</a> :A &rArr; <a href="#traversable-class">Traversable</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#traversable-class">Traversable</a> <a href="#list-type">List</a></code>
- <code><a href="#traversable-class">Traversable</a> (<a href="#result-type">Result</a> :A)</code>
- <code><a href="#traversable-class">Traversable</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#traversable-class">Traversable</a> (<a href="#tuple-type">Tuple</a> :A)</code>

</details>



***

#### <a href="#tryinto-class"><code>TryInto</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L320-L322">src</a></sub></sup><a name="tryinto-class"></a>
<code><a href="#tryinto-class">TryInto</a> :A :B :C</code>


`TRY-INTO` implies some elements of `:a` can be represented exactly by an element of `:b`, but sometimes not. If not, an error of type `:c` is returned.

Methods:
- <code>TRYINTO :: (:A &rarr; (<a href="#result-type">Result</a> :C :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#tryinto-class">TryInto</a> <a href="#string-type">String</a> <a href="#integer-type">Integer</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f64-type">F64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#f32-type">F32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#integer-type">Integer</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ifix-type">IFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#ufix-type">UFix</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i64-type">I64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ifix-type">IFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i64-type">I64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u64-type">U64</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i32-type">I32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i32-type">I32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u32-type">U32</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i16-type">I16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i16-type">I16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u16-type">U16</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#ufix-type">UFix</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u64-type">U64</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u32-type">U32</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u16-type">U16</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#u8-type">U8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#i8-type">I8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#i8-type">I8</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#u8-type">U8</a> <a href="#bit-type">Bit</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f64-type">F64</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>
- <code><a href="#tryinto-class">TryInto</a> <a href="#f32-type">F32</a> <a href="#fraction-type">Fraction</a> <a href="#string-type">String</a></code>

</details>



***

#### <a href="#unwrappable-class"><code>Unwrappable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L330-L346">src</a></sub></sup><a name="unwrappable-class"></a>
<code><a href="#unwrappable-class">Unwrappable</a> :A</code>


Containers which can be unwrapped to get access to their contents.

`(unwrap-or-else succeed fail container)` should invoke the `succeed` continuation on the unwrapped contents of
`container` when successful, or invoke the `fail` continuation with no arguments (i.e., with `Unit` as an argument)
when unable to unwrap a value.

The `succeed` continuation will often, but not always, be the identity function. `as-optional` passes `Some` to
construct an `Optional`.

Typical `fail` continuations are:
- Return a default value, or
- Signal an error.

Methods:
- <code>UNWRAP-OR-ELSE :: ((:B &rarr; :C) &rarr; (<a href="#unit-type">Unit</a> &rarr; :C) &rarr; (:A :B) &rarr; :C)</code>
<details>
<summary>Instances</summary>

- <code><a href="#unwrappable-class">Unwrappable</a> <a href="#optional-type">Optional</a></code>
- <code><a href="#unwrappable-class">Unwrappable</a> (<a href="#result-type">Result</a> :A)</code>

</details>



***

### Values

#### <a href="#<-value"><code>(&lt; X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L179-L183">src</a></sub></sup><a name="<-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` less than `y`?



***

#### <a href="#<=-value"><code>(&lt;= X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L193-L197">src</a></sub></sup><a name="<=-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` less than or equal to `y`?



***

#### <a href="#>-value"><code>(&gt; X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L172-L176">src</a></sub></sup><a name=">-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` greater than `y`?



***

#### <a href="#>=-value"><code>(&gt;= X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L186-L190">src</a></sub></sup><a name=">=-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` greater than or equal to `y`?



***

#### <a href="#>>-value"><code>(&gt;&gt; A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L244-L246">src</a></sub></sup><a name=">>-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">Monad</a> :A &rArr; ((:A :B) &rarr; (:A :C) &rarr; (:A :C))</code>

Equivalent to `(>>= a (fn (_) b))`.



***

#### <a href="#as-optional-value"><code>(AS-OPTIONAL CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L391-L395">src</a></sub></sup><a name="as-optional-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">Unwrappable</a> :A &rArr; ((:A :B) &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Convert any Unwrappable container into an `Optional`, constructing Some on a successful unwrap and None on a failed unwrap.



***

#### <a href="#default?-value"><code>(DEFAULT? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L415-L417">src</a></sub></sup><a name="default?-value"></a>
<code>&forall; :A. (<a href="#default-class">Default</a> :A) (<a href="#eq-class">Eq</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` the default item of its type?



***

#### <a href="#defaulting-unwrap-value"><code>(DEFAULTING-UNWRAP CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L408-L412">src</a></sub></sup><a name="defaulting-unwrap-value"></a>
<code>&forall; :A :B. (<a href="#unwrappable-class">Unwrappable</a> :A) (<a href="#default-class">Default</a> :B) &rArr; ((:A :B) &rarr; :B)</code>

Unwrap an `unwrappable`, returning `(default)` of the wrapped type on failure.



***

#### <a href="#expect-value"><code>(EXPECT REASON CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L358-L362">src</a></sub></sup><a name="expect-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">Unwrappable</a> :A &rArr; (<a href="#string-type">String</a> &rarr; (:A :B) &rarr; :B)</code>

Unwrap `container`, signaling an error with the description `reason` on failure.



***

#### <a href="#join-value"><code>(JOIN M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L249-L251">src</a></sub></sup><a name="join-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; ((:A (:A :B)) &rarr; (:A :B))</code>

Equivalent to `(>>= m id)`.



***

#### <a href="#map-fst-value"><code>(MAP-FST F B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L297-L299">src</a></sub></sup><a name="map-fst-value"></a>
<code>&forall; :A :B :C :D. <a href="#bifunctor-class">Bifunctor</a> :C &rArr; ((:A &rarr; :B) &rarr; (:C :A :D) &rarr; (:C :B :D))</code>

Map over the first argument of a `Bifunctor`.



***

#### <a href="#map-snd-value"><code>(MAP-SND F B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L302-L304">src</a></sub></sup><a name="map-snd-value"></a>
<code>&forall; :A :B :C :D. <a href="#bifunctor-class">Bifunctor</a> :C &rArr; ((:A &rarr; :B) &rarr; (:C :D :A) &rarr; (:C :D :B))</code>

Map over the second argument of a `Bifunctor`.



***

#### <a href="#max-value"><code>(MAX X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L200-L204">src</a></sub></sup><a name="max-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the greater element of `x` and `y`.



***

#### <a href="#mcommute?-value"><code>(MCOMMUTE? A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L282-L284">src</a></sub></sup><a name="mcommute?-value"></a>
<code>&forall; :A. (<a href="#eq-class">Eq</a> :A) (<a href="#semigroup-class">Semigroup</a> :A) &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Does `a <> b` equal `b <> a`?



***

#### <a href="#mconcat-value"><code>(MCONCAT A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L272-L274">src</a></sub></sup><a name="mconcat-value"></a>
<code>&forall; :A :B. (<a href="#foldable-class">Foldable</a> :A) (<a href="#monoid-class">Monoid</a> :B) &rArr; ((:A :B) &rarr; :B)</code>

Fold a container of monoids into a single element.



***

#### <a href="#mconcatmap-value"><code>(MCONCATMAP F A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L277-L279">src</a></sub></sup><a name="mconcatmap-value"></a>
<code>&forall; :A :B :C. (<a href="#foldable-class">Foldable</a> :C) (<a href="#monoid-class">Monoid</a> :B) &rArr; ((:A &rarr; :B) &rarr; (:C :A) &rarr; :B)</code>

Map a container to a container of monoids, and then fold that container into a single element.



***

#### <a href="#mempty?-value"><code>(MEMPTY? A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L267-L269">src</a></sub></sup><a name="mempty?-value"></a>
<code>&forall; :A. (<a href="#eq-class">Eq</a> :A) (<a href="#monoid-class">Monoid</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Does `a` equal `(the Type mempty)`?



***

#### <a href="#min-value"><code>(MIN X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L207-L211">src</a></sub></sup><a name="min-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the lesser element of `x` and `y`.



***

#### <a href="#sequence-value"><code>(SEQUENCE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L290-L290">src</a></sub></sup><a name="sequence-value"></a>
<code>&forall; :A :B :C. (<a href="#traversable-class">Traversable</a> :A) (<a href="#applicative-class">Applicative</a> :B) &rArr; ((:A (:B :C)) &rarr; (:B (:A :C)))</code>


***

#### <a href="#unwrap-value"><code>(UNWRAP CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L367-L373">src</a></sub></sup><a name="unwrap-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">Unwrappable</a> :A &rArr; ((:A :B) &rarr; :B)</code>

Unwrap `container`, signaling an error on failure.



***

#### <a href="#unwrap-into-value"><code>(UNWRAP-INTO X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L376-L378">src</a></sub></sup><a name="unwrap-into-value"></a>
<code>&forall; :A :B :C. <a href="#tryinto-class">TryInto</a> :B :C :A &rArr; (:B &rarr; :C)</code>

Same as `tryInto` followed by `unwrap`.



***

#### <a href="#with-default-value"><code>(WITH-DEFAULT DEFAULT CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L384-L388">src</a></sub></sup><a name="with-default-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">Unwrappable</a> :B &rArr; (:A &rarr; (:B :A) &rarr; :A)</code>

Unwrap `container`, returning `default` on failure.



***

# Package `COALTON/COMPUTABLE-REALS`<a name="coalton/computable-reals-package"></a>

### Types

#### <a href="#creal-type"><code>CReal</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L38-L38">src</a></sub></sup><a name="creal-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#elementary-class">Elementary</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#f32-type">F32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#f64-type">F64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#fraction-type">Fraction</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i16-type">I16</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i32-type">I32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i64-type">I64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#i8-type">I8</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#ifix-type">IFix</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u16-type">U16</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u32-type">U32</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u64-type">U64</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#u8-type">U8</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#into-class">Into</a> <a href="#ufix-type">UFix</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#num-class">Num</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#polar-class">Polar</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#radical-class">Radical</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#real-class">Real</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#creal-type">CReal</a></code>

</details>



***

### Values

#### <a href="#approx-value"><code>(APPROX X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L297-L309">src</a></sub></sup><a name="approx-value"></a>
<code>(<a href="#creal-type">CReal</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#integer-type">Integer</a>)</code>

Computes an approximation of the bits of a given
`CReal`. Specifically, given an object of type `CReal` `x` and a
non-negative integer `k`, return an integer $a$ with

$$
\vert a\cdot 2^{-\mathtt{k}} - \mathtt{x}\vert \leq 2^{-\mathtt{k}}.
$$

See `rational` or `rationalize` to produce a rational approximation of
`CReal`.



***

#### <a href="#comparison-threshold-value"><code>(COMPARISON-THRESHOLD _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L48-L57">src</a></sub></sup><a name="comparison-threshold-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#ufix-type">UFix</a>)</code>

Returns the current `CReal` comparison threshold measured as a number
of bits after the 'decimal' point.

This threshold is used to ensure `Eq` and `Ord` instances
terminate. (In general, computable real arithmetic is undecidable.)
Note that if the production of a `CReal` depends on comparison, *there
is no guarantee that the `CReal` will be accurate to any precision*.



***

#### <a href="#cr-print-value"><code>(CR-PRINT X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L341-L344">src</a></sub></sup><a name="cr-print-value"></a>
<code>(<a href="#creal-type">CReal</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Prints a real `x` up to `k` bits of precision.



***

#### <a href="#rational-approx-value"><code>(RATIONAL-APPROX X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L312-L319">src</a></sub></sup><a name="rational-approx-value"></a>
<code>(<a href="#creal-type">CReal</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#fraction-type">Fraction</a>)</code>

Produce a rational approximation of `x` called $r$ such that

$$
\vert r - \mathtt{x} \vert < 2^{-\mathtt{k}}.
$$



***

#### <a href="#rationalize-value"><code>(RATIONALIZE X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L322-L332">src</a></sub></sup><a name="rationalize-value"></a>
<code>(<a href="#creal-type">CReal</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#fraction-type">Fraction</a>)</code>

Produce a rational approximation of `x` called $r$ such that

$$
\vert r - \mathtt{x} \vert < 2^{-\mathtt{k}},
$$

taking into account the maximum precision specified by `k` to return
the simplest possible such approximation.



***

#### <a href="#set-comparison-threshold!-value"><code>(SET-COMPARISON-THRESHOLD! K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L40-L46">src</a></sub></sup><a name="set-comparison-threshold!-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#unit-type">Unit</a>)</code>

Sets the global `CReal` comparison threshold to k bits after the 'decimal' point.

See `comparison-threshold` for more details.



***

# Package `COALTON/EXPERIMENTAL/DO-CONTROL-CORE`<a name="coalton/experimental/do-control-core-package"></a>

### Values

#### <a href="#flatmap-success-value"><code>(FLATMAP-SUCCESS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L207-L207">src</a></sub></sup><a name="flatmap-success-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :C) (<a href="#yielder-class">Yielder</a> :A) &rArr; ((:A :B) &rarr; (:B &rarr; (:C (:A :D))) &rarr; (:C (:A :D)))</code>


***

#### <a href="#flatmap-successm-value"><code>(FLATMAP-SUCCESSM MVAL? F-&gt;MVAL?B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L211-L216">src</a></sub></sup><a name="flatmap-successm-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :A) (<a href="#yielder-class">Yielder</a> :B) &rArr; ((:A (:B :C)) &rarr; (:C &rarr; (:A (:B :D))) &rarr; (:A (:B :D)))</code>

Evaluate MVAL?, and if the result yields a value, then flatmap F->MVAL?B
over the value.



***

#### <a href="#if*-value"><code>(IF* VAL? M-TRUE M-FALSE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L155-L160">src</a></sub></sup><a name="if*-value"></a>
<code>&forall; :A :B :C. (<a href="#monad-class">Monad</a> :B) (<a href="#terminator-class">Terminator</a> :A) &rArr; (:A &rarr; (:B :C) &rarr; (:B :C) &rarr; (:B :C))</code>

Choose between M-TRUE and M-FALSE based on VAL?. If (ended? VAL?) is true, run M-TRUE,
else run M-FALSE.



***

#### <a href="#if-val-value"><code>(IF-VAL VAL? F-MVAL M-NONE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L164-L170">src</a></sub></sup><a name="if-val-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :C) (<a href="#yielder-class">Yielder</a> :A) &rArr; ((:A :B) &rarr; (:B &rarr; (:C :D)) &rarr; (:C :D) &rarr; (:C :D))</code>

If VAL? yields a value, apply F-MVAL to it. Otherwise, run M-NONE.



***

#### <a href="#if-valm-value"><code>(IF-VALM MVAL? F-MVAL M-NONE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L184-L189">src</a></sub></sup><a name="if-valm-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :A) (<a href="#yielder-class">Yielder</a> :B) &rArr; ((:A (:B :C)) &rarr; (:C &rarr; (:A :D)) &rarr; (:A :D) &rarr; (:A :D))</code>

Evaluate MVAL? and dispatch to F-MVAL if the result yields a value.
Otherwise evaluate M-NONE.



***

#### <a href="#if-val_-value"><code>(IF-VAL_ VAL? F-MVAL M-NONE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L174-L180">src</a></sub></sup><a name="if-val_-value"></a>
<code>&forall; :A :B :C :D :E. (<a href="#monad-class">Monad</a> :C) (<a href="#yielder-class">Yielder</a> :A) &rArr; ((:A :B) &rarr; (:B &rarr; (:C :D)) &rarr; (:C :E) &rarr; (:C <a href="#unit-type">Unit</a>))</code>

Like if-val, but discards the branch result and returns Unit.



***

#### <a href="#map-success-value"><code>(MAP-SUCCESS VAL? F-&gt;MB)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L193-L195">src</a></sub></sup><a name="map-success-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :C) (<a href="#yielder-class">Yielder</a> :A) &rArr; ((:A :B) &rarr; (:B &rarr; (:C :D)) &rarr; (:C (:A :D)))</code>

Map F->MB over the successful/available value(s) of VAL? within the monad.



***

#### <a href="#map-successm-value"><code>(MAP-SUCCESSM MVAL? F-&gt;MB)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L199-L203">src</a></sub></sup><a name="map-successm-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :A) (<a href="#yielder-class">Yielder</a> :B) &rArr; ((:A (:B :C)) &rarr; (:C &rarr; (:A :D)) &rarr; (:A (:B :D)))</code>

Evaluate MVAL? and map F->MB over the successful value(s) from inside the monad.



***

#### <a href="#when-val-value"><code>(WHEN-VAL VAL? F-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L135-L143">src</a></sub></sup><a name="when-val-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :C) (<a href="#yielder-class">Yielder</a> :A) &rArr; ((:A :B) &rarr; (:B &rarr; (:C :D)) &rarr; (:C <a href="#unit-type">Unit</a>))</code>

If VAL? yields a value, apply F->M to it. If not, do nothing. Always returns Unit.



***

#### <a href="#when-valm-value"><code>(WHEN-VALM MVAL? F-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L147-L151">src</a></sub></sup><a name="when-valm-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :A) (<a href="#yielder-class">Yielder</a> :B) &rArr; ((:A (:B :C)) &rarr; (:C &rarr; (:A :D)) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Evaluate MVAL?, and if it yields, run F->M on the value. Otherwise, do nothing.



***

#### <a href="#whenm-value"><code>(WHENM MTERM? MOP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L127-L131">src</a></sub></sup><a name="whenm-value"></a>
<code>&forall; :A :B :C. (<a href="#monad-class">Monad</a> :A) (<a href="#terminator-class">Terminator</a> :B) &rArr; ((:A :B) &rarr; (:A :C) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Evaluate MTERM?, and if it indicates completion, run MOP, or do nothing.



***

#### <a href="#when_-value"><code>(WHEN_ TERM? M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.lisp#L118-L123">src</a></sub></sup><a name="when_-value"></a>
<code>&forall; :A :B :C. (<a href="#monad-class">Monad</a> :B) (<a href="#terminator-class">Terminator</a> :A) &rArr; (:A &rarr; (:B :C) &rarr; (:B <a href="#unit-type">Unit</a>))</code>

Run the monadic operation M when the terminator TERM? indicates completion,
or do nothing.



***

# Package `COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS`<a name="coalton/experimental/do-control-loops-package"></a>

### Values

#### <a href="#collect-value"><code>(COLLECT INTO-ITR FA-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.lisp#L99-L109">src</a></sub></sup><a name="collect-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :C) (<a href="#intoiterator-class">IntoIterator</a> :A :B) &rArr; (:A &rarr; (:B &rarr; (:C :D)) &rarr; (:C (<a href="#list-type">List</a> :D)))</code>

Apply FA->M to each element produced by INTO-ITR and run the resulting monadic action.
Collect the results.



***

#### <a href="#collect-val-value"><code>(COLLECT-VAL M-OPERATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.lisp#L86-L96">src</a></sub></sup><a name="collect-val-value"></a>
<code>&forall; :A :B :C. (<a href="#monad-class">Monad</a> :A) (<a href="#yielder-class">Yielder</a> :B) &rArr; ((:A (:B :C)) &rarr; (:A (<a href="#list-type">List</a> :C)))</code>

Repeatedly run M-OPERATION, collecting each yielded value into a list until
no value is yielded.



***

#### <a href="#foreach-value"><code>(FOREACH INTO-ITR FA-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.lisp#L112-L121">src</a></sub></sup><a name="foreach-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :C) (<a href="#intoiterator-class">IntoIterator</a> :A :B) &rArr; (:A &rarr; (:B &rarr; (:C :D)) &rarr; (:C <a href="#unit-type">Unit</a>))</code>

Apply FA->M to each element produced by INTO-ITR and run the resulting monadic action.
Discards the return values and returns Unit.



***

#### <a href="#loop-do-while-value"><code>(LOOP-DO-WHILE M-TERM? BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.lisp#L62-L71">src</a></sub></sup><a name="loop-do-while-value"></a>
<code>&forall; :A :B :C. (<a href="#monad-class">Monad</a> :A) (<a href="#terminator-class">Terminator</a> :B) &rArr; ((:A :B) &rarr; (:A :C) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Before each iteration, evaluate M-TERM?. If it indicates completion, stop; otherwise run BODY.
Returns Unit.



***

#### <a href="#loop-times-value"><code>(LOOP-TIMES N M-OPERATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.lisp#L74-L82">src</a></sub></sup><a name="loop-times-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; (<a href="#ufix-type">UFix</a> &rarr; (<a href="#ufix-type">UFix</a> &rarr; (:A :B)) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Repeat M-OPERATION N times. Passes the current index (starting at 0) to
M-OPERATION. Returns Unit.



***

#### <a href="#loop-while-value"><code>(LOOP-WHILE M-OPERATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.lisp#L39-L45">src</a></sub></sup><a name="loop-while-value"></a>
<code>&forall; :A :B. (<a href="#monad-class">Monad</a> :A) (<a href="#terminator-class">Terminator</a> :B) &rArr; ((:A :B) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Repeat M-OPERATION until it returns a terminated value. Returns Unit.



***

#### <a href="#loop-while-valm-value"><code>(LOOP-WHILE-VALM M-OPERATION F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.lisp#L48-L59">src</a></sub></sup><a name="loop-while-valm-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monad-class">Monad</a> :A) (<a href="#yielder-class">Yielder</a> :B) &rArr; ((:A (:B :C)) &rarr; (:C &rarr; (:A :D)) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Repeat M-OPERATION while it yields a value, running the yielded value applied to F.
Returns Unit.



***

### Macros

#### <a href="#coalton-experimental-do-control-loops-do-collect-macro"><code>DO-COLLECT ((SYM INTO-ITR) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-do-control-loops-do-collect-macro"></a>

Apply FA->M to each element produced by INTO-ITR and run the resulting monadic action.
Collect the results.



***

#### <a href="#coalton-experimental-do-control-loops-do-loop-do-while-macro"><code>DO-LOOP-DO-WHILE (M-TERM? &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-do-control-loops-do-loop-do-while-macro"></a>

Before each iteration, evaluate M-TERM?. If it indicates completion, stop; otherwise run BODY.
Wraps BODY in a 'do' block. Returns Unit.



***

# Package `COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS-ADV`<a name="coalton/experimental/do-control-loops-adv-package"></a>

### Types

#### <a href="#loopt-type"><code>LoopT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L78-L79">src</a></sub></sup><a name="loopt-type"></a>
- <code>(LoopT (:A (<a href="#step-type">Step</a> :B)))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> (<a href="#loopt-type">LoopT</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#applicative-class">Applicative</a> (<a href="#loopt-type">LoopT</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> (<a href="#loopt-type">LoopT</a> :A)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A (<a href="#loopt-type">LoopT</a> :B)</code>
- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A (<a href="#loopt-type">LoopT</a> :B)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> <a href="#loopt-type">LoopT</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> ((<a href="#loopt-type">LoopT</a> :A) :B)</code>

</details>



***

### Values

#### <a href="#collect-value"><code>(COLLECT BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L229-L239">src</a></sub></sup><a name="collect-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; (((<a href="#loopt-type">LoopT</a> :A) :B) &rarr; (:A (<a href="#list-type">List</a> :B)))</code>

Run BODY in a loop, collecting each value it produces into a list in encounter order.
Stops when BODY breaks. Continues skip the rest of the iteration. Returns the collected list.



***

#### <a href="#collect-val-value"><code>(COLLECT-VAL BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L242-L257">src</a></sub></sup><a name="collect-val-value"></a>
<code>&forall; :A :B :C. (<a href="#monad-class">Monad</a> :A) (<a href="#yielder-class">Yielder</a> :B) &rArr; (((<a href="#loopt-type">LoopT</a> :A) (:B :C)) &rarr; (:A (<a href="#list-type">List</a> :C)))</code>

Run BODY in a loop, adding each available value it yields to a list.
Stops when BODY yields no value or breaks. Continue skips the rest of the iteration.
Returns the collected list.



***

#### <a href="#foreach-value"><code>(FOREACH LST FA-&gt;LPT-M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L260-L271">src</a></sub></sup><a name="foreach-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">Monad</a> :B &rArr; ((<a href="#list-type">List</a> :A) &rarr; (:A &rarr; ((<a href="#loopt-type">LoopT</a> :B) :C)) &rarr; (:B <a href="#unit-type">Unit</a>))</code>

For each element of LST, run FA->LPT-M on it. Break stops the iteration.
Continue skips to the next element. Discards return values and returns Unit.



***

#### <a href="#loop-do-while-value"><code>(LOOP-DO-WHILE M-TERM? BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L201-L212">src</a></sub></sup><a name="loop-do-while-value"></a>
<code>&forall; :A :B :C. (<a href="#monad-class">Monad</a> :A) (<a href="#terminator-class">Terminator</a> :B) &rArr; ((:A :B) &rarr; ((<a href="#loopt-type">LoopT</a> :A) :C) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Before each iteration, evaluate M-TERM?. If it indicates completion, stop; otherwise run BODY.
Respects break and continue within BODY. Returns Unit.



***

#### <a href="#loop-times-value"><code>(LOOP-TIMES N BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L215-L226">src</a></sub></sup><a name="loop-times-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; (<a href="#ufix-type">UFix</a> &rarr; (<a href="#ufix-type">UFix</a> &rarr; ((<a href="#loopt-type">LoopT</a> :A) :B)) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Repeat BODY N times. Passes the current index (starting at 0) to BODY.
Returns Unit.



***

#### <a href="#loop-while-value"><code>(LOOP-WHILE BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L188-L198">src</a></sub></sup><a name="loop-while-value"></a>
<code>&forall; :A :B. (<a href="#monad-class">Monad</a> :A) (<a href="#terminator-class">Terminator</a> :B) &rArr; (((<a href="#loopt-type">LoopT</a> :A) :B) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Run BODY repeatedly until it returns a terminated value. Returns Unit.



***

#### <a href="#loop_-value"><code>(LOOP_ BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L179-L185">src</a></sub></sup><a name="loop_-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; (((<a href="#loopt-type">LoopT</a> :A) :B) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Run BODY forever, until it signals a break. Any produced values are ignored. Returns Unit.



***

#### <a href="#once-value"><code>(ONCE LP-M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L275-L280">src</a></sub></sup><a name="once-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; (((<a href="#loopt-type">LoopT</a> :A) :B) &rarr; (:A <a href="#unit-type">Unit</a>))</code>

Run an operation exactly once. Continue or break will both immediately end
execution in the operation. Returns Unit.



***

#### <a href="#unwrap-loop-value"><code>(UNWRAP-LOOP (LOOPT M-STP))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L83-L86">src</a></sub></sup><a name="unwrap-loop-value"></a>
<code>&forall; :A :B. (((<a href="#loopt-type">LoopT</a> :A) :B) &rarr; (:A (<a href="#step-type">Step</a> :B)))</code>

Advance a LoopT computation by one step, returning whether it asked to continue,
break, or produced a value.



***

#### <a href="#break-loop-value"><code>BREAK-LOOP</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L90-L92">src</a></sub></sup><a name="break-loop-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; ((<a href="#loopt-type">LoopT</a> :A) :B)</code>

Signal that the loop should terminate immediately.



***

#### <a href="#continue-loop-value"><code>CONTINUE-LOOP</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.lisp#L96-L98">src</a></sub></sup><a name="continue-loop-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :A &rArr; ((<a href="#loopt-type">LoopT</a> :A) :B)</code>

Signal that the current iteration should be skipped and the loop should continue.



***

# Package `COALTON/EXPERIMENTAL/LOOPS`<a name="coalton/experimental/loops-package"></a>


A Coalton package of loop macros.

Note: `(return)`, `(break)`, and `(continue)` do not work inside _any_ of these loop macros.

### Macros

#### <a href="#coalton-experimental-loops-argbesttimes-macro"><code>ARGBESTTIMES ((VARIABLE COUNT BETTER?) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-argbesttimes-macro"></a>

The `UFix` in [0, `count`) which, when `variable` is bound to it, results in the evaluation of `body` which is better than the same for the rest of the `UFix`s in [0, `count`).



***

#### <a href="#coalton-experimental-loops-besttimes-macro"><code>BESTTIMES ((VARIABLE COUNT BETTER?) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-besttimes-macro"></a>

The result of evaluating `body` with `variable` bound to a `UFix` in [0, `count`) that is `better?` than the result of evaluating `body` with `variable` bound to the rest of the `UFix`s in [0, `count`).



***

#### <a href="#coalton-experimental-loops-collecttimes-macro"><code>COLLECTTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-collecttimes-macro"></a>

Collect the results of evaluating `body` for `variable` bound to every `UFix` in [0, `count`) as a `List`.



***

#### <a href="#coalton-experimental-loops-dolist-macro"><code>DOLIST ((VARIABLE LIS) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-dolist-macro"></a>

Perform `body` with `variable` bound to every element of `lis`.



***

#### <a href="#coalton-experimental-loops-dolist-enumerated-macro"><code>DOLIST-ENUMERATED ((INDEX-VARIABLE ELEMENT-VARIABLE LIS) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-dolist-enumerated-macro"></a>

Perform `body` with `element-variable` bound to the elements of `lis` and `index-variable` bound to their indices.



***

#### <a href="#coalton-experimental-loops-dolists-macro"><code>DOLISTS (VARIABLES-AND-LISTS &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-dolists-macro"></a>

Perform `body` with the variables bound to the elements of the lists. See the example below.

Example:

```
> (coalton (dolists ((x (make-list 1 2 3))
                     (y (make-list 10 20 30))
                     (z (make-list 100 200 300 400)))
             (print (+ x (+ y z))))
111
222
333
COALTON::UNIT/UNIT
```




***

#### <a href="#coalton-experimental-loops-dorange-macro"><code>DORANGE ((VARIABLE START-OR-STOP &amp;OPTIONAL STOP STEP) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-dorange-macro"></a>

Perform `body` with `variable` bound to elements of a discrete range.

If only `start-or-stop` is supplied, then the range is from 0 (inclusive) to `start-or-stop` (exclusive) by increments or decrements of 1.

```
> (coalton (dorange (x 3) (print x)))
0
1
2
COALTON::UNIT/UNIT
> (coalton (dorange (x -3) (print x)))
0
-1
-2
COALTON::UNIT/UNIT
```

If only `start-or-stop` and `stop` are supplied, then the range is from `start-or-stop` (inclusive) to `stop` (exclusive) by increments or decrements of 1.

```
> (coalton (dorange (x -2 2) (print x)))
-2 
-1
0
1
COALTON::UNIT/UNIT
> (coalton (dorange (x 0.5 -2) (print x)))
0.5
-0.5
-1.5
COALTON::UNIT/UNIT
```

Otherwise, the range is from `start-or-stop` (inclusive) to `stop` (exclusive) by `step`. `step` must be the correct sign, or `dorange` does nothing.

```
> (coalton (dorange -2 2 2) (print x))
-2 
0
COALTON::UNIT/UNIT
> (coalton (dorange -2 2 -1) (print x))
COALTON::UNIT/UNIT
```




***

#### <a href="#coalton-experimental-loops-dotimes-macro"><code>DOTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-dotimes-macro"></a>

Perform `body` with `variable` bound to every `UFix` in [0, `count`) sequentially.



***

#### <a href="#coalton-experimental-loops-everytimes-macro"><code>EVERYTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-everytimes-macro"></a>

Does `body` evaluate to `True` for `variable` bound to every `UFix` in [0, `count`). Returns `True` if `(zero? count)`.



***

#### <a href="#coalton-experimental-loops-prodtimes-macro"><code>PRODTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-prodtimes-macro"></a>

The product of `body` for `variable` bound to every `UFix` in [0, `count`).



***

#### <a href="#coalton-experimental-loops-repeat-macro"><code>REPEAT ((COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-repeat-macro"></a>

Perform `body` `count` times.



***

#### <a href="#coalton-experimental-loops-sometimes-macro"><code>SOMETIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-sometimes-macro"></a>

Does `body` evaluate to `True` for `variable` bound to some `UFix` in [0, `count`). Returns `False` if `(zero? count)`.



***

#### <a href="#coalton-experimental-loops-sumtimes-macro"><code>SUMTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-sumtimes-macro"></a>

The sum of `body` for `variable` bound to every `UFix` in [0, `count`).



***

# Package `COALTON/FILE`<a name="coalton/file-package"></a>


This is Coalton's library for directory utilities and file IO.

Most functions return outputs of type `(Result FileError :a)`, ensuring that errors can be assessed and handled.

File IO is handled using stream options, for instance:

```
(with-open-file (Bidirectional file EError)
  (fn (stream)
    (write-string stream "Hello World!")
    (read-file-to-vector stream)
```

Common Lisp makes a distinction between file and directory paths. Directory paths are always terminated with a trailing slash, file paths must never have a trailing slash.

### Types

#### <a href="#fileerror-type"><code>FileError</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L148-L153">src</a></sub></sup><a name="fileerror-type"></a>
- <code>(PathError <a href="#string-type">String</a> <a href="#pathname-type">Pathname</a>)</code>
- <code>(LispError <a href="#lispcondition-type">LispCondition</a>)</code>
- <code>(FileError <a href="#string-type">String</a>)</code>
- <code>EOF</code> 

Errors for file functions.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#fileerror-type">FileError</a></code>
- <code><a href="#signalable-class">Signalable</a> <a href="#fileerror-type">FileError</a></code>

</details>



***

#### <a href="#filestream-type"><code>FileStream</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L358-L359">src</a></sub></sup><a name="filestream-type"></a>

Represents a file stream, using `cl:file-stream`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#filestream-type">FileStream</a> :A)</code>

</details>



***

#### <a href="#ifexists-type"><code>IfExists</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L362-L367">src</a></sub></sup><a name="ifexists-type"></a>
- <code>Supersede</code> 
- <code>Overwrite</code> 
- <code>EError</code> 
- <code>Append</code> 

Possible options for opening a stream when the file exists.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ifexists-type">IfExists</a></code>

</details>



***

#### <a href="#pathname-type"><code>Pathname</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L119-L120">src</a></sub></sup><a name="pathname-type"></a>

Pathname object. Equivalent to `cl:pathname`

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#into-class">Into</a> <a href="#pathname-type">Pathname</a> <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#monoid-class">Monoid</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#semigroup-class">Semigroup</a> <a href="#pathname-type">Pathname</a></code>

</details>



***

#### <a href="#streamoptions-type"><code>StreamOptions</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L369-L373">src</a></sub></sup><a name="streamoptions-type"></a>
- <code>(Bidirectional <a href="#pathname-type">Pathname</a> <a href="#ifexists-type">IfExists</a>)</code>
  - Constructor for opening a bidirectional stream.
- <code>(Output <a href="#pathname-type">Pathname</a> <a href="#ifexists-type">IfExists</a>)</code>
  - Constructor for opening an output stream.
- <code>(Input <a href="#pathname-type">Pathname</a>)</code>
  - Constructor for opening an input stream

A type for providing parameters for opening streams. StreamOptions take strings for pathnames, but they will error if they are not proper and appropriate pathnames.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#streamoptions-type">StreamOptions</a></code>

</details>



***

### Classes

#### <a href="#file-class"><code>File</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L516-L520">src</a></sub></sup><a name="file-class"></a>
<code><a href="#file-class">File</a> :A</code>


A class of types which are able to be written to or read from a file.

Methods:
- <code>OPEN :: (<a href="#streamoptions-type">StreamOptions</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> (<a href="#filestream-type">FileStream</a> :A)))</code>
- <code>READ :: ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :A))</code>
- <code>WRITE :: ((<a href="#filestream-type">FileStream</a> :A) &rarr; :A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>
<details>
<summary>Instances</summary>

- <code><a href="#file-class">File</a> <a href="#u64-type">U64</a></code>
- <code><a href="#file-class">File</a> <a href="#i64-type">I64</a></code>
- <code><a href="#file-class">File</a> <a href="#u32-type">U32</a></code>
- <code><a href="#file-class">File</a> <a href="#i32-type">I32</a></code>
- <code><a href="#file-class">File</a> <a href="#u16-type">U16</a></code>
- <code><a href="#file-class">File</a> <a href="#i16-type">I16</a></code>
- <code><a href="#file-class">File</a> <a href="#u8-type">U8</a></code>
- <code><a href="#file-class">File</a> <a href="#i8-type">I8</a></code>
- <code><a href="#file-class">File</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#file-class">File</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#file-class">File</a> <a href="#char-type">Char</a></code>

</details>



***

### Values

#### <a href="#abort-value"><code>(ABORT STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L440-L443">src</a></sub></sup><a name="abort-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :B))</code>

Closes a FileStream and aborts all operations..



***

#### <a href="#append-to-file!-value"><code>(APPEND-TO-FILE! PATH DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L715-L719">src</a></sub></sup><a name="append-to-file!-value"></a>
<code>&forall; :A :B. (<a href="#runtimerepr-class">RuntimeRepr</a> :B) (<a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a>) (<a href="#file-class">File</a> :B) &rArr; (:A &rarr; (<a href="#vector-type">Vector</a> :B) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Opens and appends a file with data of type :a.



***

#### <a href="#close-value"><code>(CLOSE STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L434-L437">src</a></sub></sup><a name="close-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :B))</code>

Closes a FileStream.



***

#### <a href="#copy!-value"><code>(COPY! INPUT OUTPUT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L333-L341">src</a></sub></sup><a name="copy!-value"></a>
<code>&forall; :A :B. (<a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a>) (<a href="#into-class">Into</a> :B <a href="#pathname-type">Pathname</a>) &rArr; (:A &rarr; :B &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Copies a file to a new location.



***

#### <a href="#create-directory!-value"><code>(CREATE-DIRECTORY! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L267-L272">src</a></sub></sup><a name="create-directory!-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#pathname-type">Pathname</a>))</code>

This is equivalent to `mkdir -p`. Creates a directory and its parents. The pathname must be a valid directory pathname.



***

#### <a href="#create-temp-directory!-value"><code>(CREATE-TEMP-DIRECTORY! _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L669-L671">src</a></sub></sup><a name="create-temp-directory!-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#pathname-type">Pathname</a>))</code>

This configures a default temporary directory for use.



***

#### <a href="#create-temp-file!-value"><code>(CREATE-TEMP-FILE! FILE-EXT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L674-L680">src</a></sub></sup><a name="create-temp-file!-value"></a>
<code>(<a href="#string-type">String</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#pathname-type">Pathname</a>))</code>

This configures a default temporary file for use.



***

#### <a href="#delete-file!-value"><code>(DELETE-FILE! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L344-L349">src</a></sub></sup><a name="delete-file!-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Deletes a given file if the file exists.



***

#### <a href="#directory-exists?-value"><code>(DIRECTORY-EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L220-L226">src</a></sub></sup><a name="directory-exists?-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#boolean-type">Boolean</a>))</code>

Returns True if a pathname names a directory that exists.



***

#### <a href="#directory-files-value"><code>(DIRECTORY-FILES PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L277-L282">src</a></sub></sup><a name="directory-files-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> (<a href="#list-type">List</a> <a href="#pathname-type">Pathname</a>)))</code>

Returns all files within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <a href="#directory-pathname?-value"><code>(DIRECTORY-PATHNAME? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L187-L191">src</a></sub></sup><a name="directory-pathname?-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns True if a pathname has no file component.



***

#### <a href="#empty?-value"><code>(EMPTY? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L297-L302">src</a></sub></sup><a name="empty?-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#boolean-type">Boolean</a>))</code>

Checks whether a directory is empty.



***

#### <a href="#exists?-value"><code>(EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L201-L205">src</a></sub></sup><a name="exists?-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#boolean-type">Boolean</a>))</code>

Returns whether a file or directory exists.



***

#### <a href="#file-exists?-value"><code>(FILE-EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L229-L237">src</a></sub></sup><a name="file-exists?-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#boolean-type">Boolean</a>))</code>

Returns True if a pathname names a file that exists.



***

#### <a href="#file-pathname?-value"><code>(FILE-PATHNAME? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L194-L198">src</a></sub></sup><a name="file-pathname?-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns True if a pathname has a file component.



***

#### <a href="#file-position-value"><code>(FILE-POSITION STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L491-L494">src</a></sub></sup><a name="file-position-value"></a>
<code>&forall; :A. ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#ufix-type">UFix</a>))</code>

Finds the file-position of a file stream.



***

#### <a href="#flush-value"><code>(FLUSH STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L485-L488">src</a></sub></sup><a name="flush-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :B))</code>

Blocks until `stream` has been flushed. Calls `cl:finish-output`.



***

#### <a href="#merge-value"><code>(MERGE PATH1 PATH2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L246-L253">src</a></sub></sup><a name="merge-value"></a>
<code>&forall; :A :B. (<a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a>) (<a href="#into-class">Into</a> :B <a href="#pathname-type">Pathname</a>) &rArr; (:A &rarr; :B &rarr; <a href="#pathname-type">Pathname</a>)</code>

Merges two pathnames together. The directory pathname should be the first argument.



***

#### <a href="#read-char-value"><code>(READ-CHAR STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L446-L451">src</a></sub></sup><a name="read-char-value"></a>
<code>((<a href="#filestream-type">FileStream</a> <a href="#char-type">Char</a>) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#char-type">Char</a>))</code>

Reads a character from an FileStream.



***

#### <a href="#read-file-lines-value"><code>(READ-FILE-LINES PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L741-L745">src</a></sub></sup><a name="read-file-lines-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> (<a href="#list-type">List</a> <a href="#string-type">String</a>)))</code>

Reads a file into lines, given a pathname or string.



***

#### <a href="#read-file-to-string-value"><code>(READ-FILE-TO-STRING PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L734-L738">src</a></sub></sup><a name="read-file-to-string-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#string-type">String</a>))</code>

Reads a file into a string, given a pathname string.



***

#### <a href="#read-file-to-vector-value"><code>(READ-FILE-TO-VECTOR STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L595-L604">src</a></sub></sup><a name="read-file-to-vector-value"></a>
<code>&forall; :A. <a href="#file-class">File</a> :A &rArr; ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> (<a href="#vector-type">Vector</a> :A)))</code>

Reads a file into a vector of type `:a`.



***

#### <a href="#read-line-value"><code>(READ-LINE STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L454-L459">src</a></sub></sup><a name="read-line-value"></a>
<code>((<a href="#filestream-type">FileStream</a> <a href="#char-type">Char</a>) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#string-type">String</a>))</code>

Reads a line of characters from a FileStream.



***

#### <a href="#read-vector-value"><code>(READ-VECTOR STREAM CHUNK-SIZE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L581-L589">src</a></sub></sup><a name="read-vector-value"></a>
<code>&forall; :A. <a href="#file-class">File</a> :A &rArr; ((<a href="#filestream-type">FileStream</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> (<a href="#vector-type">Vector</a> :A)))</code>

Reads a chunk of a file into a vector of type `:a`.



***

#### <a href="#remove-directory!-value"><code>(REMOVE-DIRECTORY! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L305-L309">src</a></sub></sup><a name="remove-directory!-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :A))</code>

Deletes an empty directory.



***

#### <a href="#remove-directory-recursive!-value"><code>(REMOVE-DIRECTORY-RECURSIVE! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L312-L317">src</a></sub></sup><a name="remove-directory-recursive!-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Deletes a target directory recursively. Equivalent to `rm -r`. Errors if the path is not a directory.



***

#### <a href="#set-file-position-value"><code>(SET-FILE-POSITION STREAM I)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L497-L500">src</a></sub></sup><a name="set-file-position-value"></a>
<code>&forall; :A. ((<a href="#filestream-type">FileStream</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Sets the file position of a file stream.



***

#### <a href="#subdirectories-value"><code>(SUBDIRECTORIES PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L285-L290">src</a></sub></sup><a name="subdirectories-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a> &rArr; (:A &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> (<a href="#list-type">List</a> <a href="#pathname-type">Pathname</a>)))</code>

Returns all subdirectories within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <a href="#system-relative-pathname-value"><code>(SYSTEM-RELATIVE-PATHNAME SYSTEM-NAME NAME)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L320-L324">src</a></sub></sup><a name="system-relative-pathname-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#string-type">String</a> &rArr; (:A &rarr; <a href="#string-type">String</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#pathname-type">Pathname</a>))</code>

Generates a system-relative-pathname for a given filename or path. This is a wrapper for `asdf:system-relative-pathname`. `Name` will likely be an empty string unless a subdirectory or filename is specified.



***

#### <a href="#with-open-file-value"><code>(WITH-OPEN-FILE STREAM-OPTIONS THUNK)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L570-L574">src</a></sub></sup><a name="with-open-file-value"></a>
<code>&forall; :A :B. <a href="#file-class">File</a> :A &rArr; (<a href="#streamoptions-type">StreamOptions</a> &rarr; ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :B)) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :B))</code>

Opens a file stream, performs `thunk` on it, then closes the stream.



***

#### <a href="#with-temp-directory-value"><code>(WITH-TEMP-DIRECTORY THUNK)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L696-L701">src</a></sub></sup><a name="with-temp-directory-value"></a>
<code>&forall; :A. ((<a href="#pathname-type">Pathname</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :A)) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :A))</code>

Performs an operation `thunk` inside a temporary directory.



***

#### <a href="#with-temp-file-value"><code>(WITH-TEMP-FILE FILE-TYPE THUNK)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L686-L693">src</a></sub></sup><a name="with-temp-file-value"></a>
<code>&forall; :A :B. <a href="#file-class">File</a> :A &rArr; (<a href="#string-type">String</a> &rarr; ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :B)) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> :B))</code>

Performs an operation `thunk` on a temporary file. File type extensions need to include `.`, like ".txt".



***

#### <a href="#write-char-value"><code>(WRITE-CHAR STREAM DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L462-L465">src</a></sub></sup><a name="write-char-value"></a>
<code>((<a href="#filestream-type">FileStream</a> <a href="#char-type">Char</a>) &rarr; <a href="#char-type">Char</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Writes a `Char` to the stream.



***

#### <a href="#write-line-value"><code>(WRITE-LINE STREAM S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L622-L625">src</a></sub></sup><a name="write-line-value"></a>
<code>((<a href="#filestream-type">FileStream</a> <a href="#char-type">Char</a>) &rarr; <a href="#string-type">String</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Writes a string with an appended newline to a filestream of type Char.



***

#### <a href="#write-string-value"><code>(WRITE-STRING FS S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L617-L619">src</a></sub></sup><a name="write-string-value"></a>
<code>((<a href="#filestream-type">FileStream</a> <a href="#char-type">Char</a>) &rarr; <a href="#string-type">String</a> &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Writes a `string` to a FileStream of type Char.



***

#### <a href="#write-to-file!-value"><code>(WRITE-TO-FILE! PATH DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L727-L731">src</a></sub></sup><a name="write-to-file!-value"></a>
<code>&forall; :A :B. (<a href="#runtimerepr-class">RuntimeRepr</a> :B) (<a href="#into-class">Into</a> :A <a href="#pathname-type">Pathname</a>) (<a href="#file-class">File</a> :B) &rArr; (:A &rarr; (<a href="#vector-type">Vector</a> :B) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Opens and writes to a file with data of type :a. Supersedes existing data on the file.



***

#### <a href="#write-vector-value"><code>(WRITE-VECTOR STREAM V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L610-L614">src</a></sub></sup><a name="write-vector-value"></a>
<code>&forall; :A. (<a href="#runtimerepr-class">RuntimeRepr</a> :A) (<a href="#file-class">File</a> :A) &rArr; ((<a href="#filestream-type">FileStream</a> :A) &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#result-type">Result</a> <a href="#fileerror-type">FileError</a> <a href="#unit-type">Unit</a>))</code>

Writes elements of an vector of type `:a` to a stream of type `:a`.



***

# Package `COALTON/FUNCTIONS`<a name="coalton/functions-package"></a>

### Values

#### <a href="#/=-value"><code>(/= A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L187-L189">src</a></sub></sup><a name="/=-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `a` not equal to `b`?



***

#### <a href="#asum-value"><code>(ASUM XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L181-L183">src</a></sub></sup><a name="asum-value"></a>
<code>&forall; :A :B :C. (<a href="#alternative-class">Alternative</a> :B) (<a href="#foldable-class">Foldable</a> :A) &rArr; ((:A (:B :C)) &rarr; (:B :C))</code>

Fold over a list using `alt`.



***

#### <a href="#bracket-value"><code>(BRACKET INIT EXIT BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L226-L235">src</a></sub></sup><a name="bracket-value"></a>
<code>&forall; :A :B :C :D. <a href="#monad-class">Monad</a> :A &rArr; ((:A :B) &rarr; (:B &rarr; (:A :C)) &rarr; (:B &rarr; (:A :D)) &rarr; (:A :D))</code>

Bracket takes an initial state, performs a body of operations, and then forces a safe exit.

This wraps `cl:unwind-protect`.

Modeled after Haskell: https://wiki.haskell.org/Bracket_pattern



***

#### <a href="#complement-value"><code>(COMPLEMENT F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L148-L150">src</a></sub></sup><a name="complement-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Compute the complement of a unary Boolean function.



***

#### <a href="#compose-value"><code>(COMPOSE F G X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L104-L106">src</a></sub></sup><a name="compose-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (:C &rarr; :A) &rarr; :C &rarr; :B)</code>

Equivalent to `(f (g x))`.



***

#### <a href="#conjoin-value"><code>(CONJOIN F G X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L111-L113">src</a></sub></sup><a name="conjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Compute the conjunction of two unary Boolean functions.



***

#### <a href="#const-value"><code>(CONST A _B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L87-L89">src</a></sub></sup><a name="const-value"></a>
<code>&forall; :A :B. (:A &rarr; :B &rarr; :A)</code>

A function that always returns its first argument.



***

#### <a href="#curry-value"><code>(CURRY FUNC LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L153-L155">src</a></sub></sup><a name="curry-value"></a>
<code>&forall; :A :B :C. (((<a href="#tuple-type">Tuple</a> :A :B) &rarr; :C) &rarr; :A &rarr; :B &rarr; :C)</code>

Take a function whose input is a tuple and enable curried application of the left and right parameters, equivalent to `(func (Tuple left right))`.



***

#### <a href="#disjoin-value"><code>(DISJOIN F G X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L116-L118">src</a></sub></sup><a name="disjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Compute the disjunction of two unary Boolean functions.



***

#### <a href="#fix-value"><code>(FIX F N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L68-L77">src</a></sub></sup><a name="fix-value"></a>
<code>&forall; :A :B. (((:A &rarr; :B) &rarr; :A &rarr; :B) &rarr; :A &rarr; :B)</code>

Compute the fixed point of a unary function. This is equivalent to the Y-combinator of the lambda calculus. This combinator allows recursion without specific assignment of names. For example, the factorial function can be written

    (define fact
      (fix
        (fn (f n)
          (if (== n 0)
            1
            (* n (f (- n 1)))))))



***

#### <a href="#flip-value"><code>(FLIP F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L93-L95">src</a></sub></sup><a name="flip-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; :B &rarr; :A &rarr; :C)</code>

Returns a function that takes its arguments in reverse order.



***

#### <a href="#id-value"><code>(ID X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L81-L83">src</a></sub></sup><a name="id-value"></a>
<code>&forall; :A. (:A &rarr; :A)</code>

A function that always returns its argument.



***

#### <a href="#msum-value"><code>(MSUM XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L176-L178">src</a></sub></sup><a name="msum-value"></a>
<code>&forall; :A :B. (<a href="#monoid-class">Monoid</a> :B) (<a href="#foldable-class">Foldable</a> :A) &rArr; ((:A :B) &rarr; :B)</code>

Fold over a list using `<>`.



***

#### <a href="#pair-with-value"><code>(PAIR-WITH FUNC LEFT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L165-L167">src</a></sub></sup><a name="pair-with-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; :A &rarr; (<a href="#tuple-type">Tuple</a> :A :B))</code>

Create a `Tuple` of the form `(Tuple left (func left))`.



***

#### <a href="#print-value"><code>(PRINT ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L53-L55">src</a></sub></sup><a name="print-value"></a>
<code>&forall; :A. <a href="#into-class">Into</a> :A <a href="#string-type">String</a> &rArr; (:A &rarr; <a href="#unit-type">Unit</a>)</code>

Print the String representation of `item` to `cl:*standard-output*`.



***

#### <a href="#reduce-value"><code>(REDUCE F Y XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L98-L100">src</a></sub></sup><a name="reduce-value"></a>
<code>&forall; :A :B :C. <a href="#foldable-class">Foldable</a> :C &rArr; ((:A &rarr; :B &rarr; :B) &rarr; :B &rarr; (:C :A) &rarr; :B)</code>

The same as `fold` but with the argument order swapped to match `cl:reduce`



***

#### <a href="#trace-value"><code>(TRACE STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L39-L43">src</a></sub></sup><a name="trace-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Print a line to `cl:*standard-output*`.



***

#### <a href="#traceobject-value"><code>(TRACEOBJECT STR ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L46-L50">src</a></sub></sup><a name="traceobject-value"></a>
<code>&forall; :A. (<a href="#string-type">String</a> &rarr; :A &rarr; <a href="#unit-type">Unit</a>)</code>

Print a line to `cl:*standard-output*` in the form "{STR}: {ITEM}".



***

#### <a href="#uncurry-value"><code>(UNCURRY FUNC TPL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L158-L162">src</a></sub></sup><a name="uncurry-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#tuple-type">Tuple</a> :A :B) &rarr; :C)</code>

Take a function with two currying parameters and enable their input as a single `Tuple`.



***

#### <a href="#unsafe-pointer-eq?-value"><code>(UNSAFE-POINTER-EQ? A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L59-L61">src</a></sub></sup><a name="unsafe-pointer-eq?-value"></a>
<code>&forall; :A. (:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>)</code>


***

### Macros

#### <a href="#coalton-functions-conjoin*-macro"><code>CONJOIN* (&amp;REST PREDICATES)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-functions-conjoin*-macro"></a>

Compute the conjuction of `predicates`.

For example, the following expressions are equivalent.

`(conjoin* f g h)`

`(fn (x) (and (f x) (g x) (h x)))`



***

#### <a href="#coalton-functions-disjoin*-macro"><code>DISJOIN* (&amp;REST PREDICATES)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-functions-disjoin*-macro"></a>

Compute the disjunction of `predicates`.

For example, the following expressions are equivalent.

`(disjoin* f g h)`

`(fn (x) (or (f x) (g x) (h x)))`



***

# Package `COALTON/HASH`<a name="coalton/hash-package"></a>

### Values

#### <a href="#combine-hashes-value"><code>(COMBINE-HASHES LHS RHS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L41-L43">src</a></sub></sup><a name="combine-hashes-value"></a>
<code>(<a href="#hash-type">Hash</a> &rarr; <a href="#hash-type">Hash</a> &rarr; <a href="#hash-type">Hash</a>)</code>


***

#### <a href="#combine-hashes-order-independent-value"><code>(COMBINE-HASHES-ORDER-INDEPENDENT LHS RHS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L46-L48">src</a></sub></sup><a name="combine-hashes-order-independent-value"></a>
<code>(<a href="#hash-type">Hash</a> &rarr; <a href="#hash-type">Hash</a> &rarr; <a href="#hash-type">Hash</a>)</code>


***

# Package `COALTON/HASHMAP`<a name="coalton/hashmap-package"></a>

### Types

#### <a href="#hashmap-type"><code>HashMap</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L70-L72">src</a></sub></sup><a name="hashmap-type"></a>
- <code>(HashMap (<a href="#hmnode-type">HmNode</a> :A :B))</code>

Immutable map (also known as a dictionary or dict) using hashes. Implemented as a hash array mapped trie data structure.

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#hash-class">Hash</a> :A) &rArr; <a href="#eq-class">Eq</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#hashmap-type">HashMap</a> :A)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#hashmap-type">HashMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#hashmap-type">HashMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>

</details>



***

### Values

#### <a href="#adjoin-value"><code>(ADJOIN HM KEY VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L494-L497">src</a></sub></sup><a name="adjoin-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Returns a hashmap that has a new entry of (`key`, `val`) added to `hm`.
If `hm` alreay contains an entry with `key`, however, `hm` is returned as is.



***

#### <a href="#count-value"><code>(COUNT HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L354-L363">src</a></sub></sup><a name="count-value"></a>
<code>&forall; :A :B. ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; <a href="#integer-type">Integer</a>)</code>

Returns the number of entries in HM.



***

#### <a href="#difference-value"><code>(DIFFERENCE A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L769-L771">src</a></sub></sup><a name="difference-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Returns a HashMap that contains mappings in `a` but not in `b`.



***

#### <a href="#empty?-value"><code>(EMPTY? HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L344-L348">src</a></sub></sup><a name="empty?-value"></a>
<code>&forall; :A :B. ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns True if a hashmap HM is empty, False if not.



***

#### <a href="#entries-value"><code>(ENTRIES HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L707-L709">src</a></sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Returns an iterator over all entries in hashmap hm.



***

#### <a href="#insert-value"><code>(INSERT HM KEY VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L486-L489">src</a></sub></sup><a name="insert-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Returns a hashmap that has a new entry of (KEY, VAL) added to HM.  If HM
contains an entry with KEY, the new hashmap replaces it for the new entry.



***

#### <a href="#intersection-value"><code>(INTERSECTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L756-L766">src</a></sub></sup><a name="intersection-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Construct a HashMap containing all the mappings whose key is in both A and B.

The entries from A remains in the result.



***

#### <a href="#keys-value"><code>(KEYS HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L695-L697">src</a></sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Returns an iterator over all the keys in a hashmap hm.



***

#### <a href="#lookup-value"><code>(LOOKUP HM KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L367-L388">src</a></sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Returns a value associated with KEY in the hashmap HM.



***

#### <a href="#modify-value"><code>(MODIFY HM KEY F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L626-L628">src</a></sub></sup><a name="modify-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; (:B &rarr; :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Modify the value at KEY with F. Returns the modified `HashMap`.



***

#### <a href="#modify-get-value"><code>(MODIFY-GET HM KEY F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L613-L622">src</a></sub></sup><a name="modify-get-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; (:B &rarr; :B) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#hashmap-type">HashMap</a> :A :B) (<a href="#optional-type">Optional</a> :B)))</code>

Modify the value at KEY with F. Returns the modified `HashMap` and the
new value, if the key was found.



***

#### <a href="#remove-value"><code>(REMOVE HM KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L511-L521">src</a></sub></sup><a name="remove-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Returns a hashmap that is identical to HM except the entry with KEY is
removed.  If HM does not contain an entry with KEY, HM is returned as is.



***

#### <a href="#replace-value"><code>(REPLACE HM KEY VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L502-L506">src</a></sub></sup><a name="replace-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Returns a hashmap where the value associated with `key` is replaced
with `val`.  If `hm` does not contain an entry with `key`, `hm` is
 returned as is.



***

#### <a href="#show-value"><code>(SHOW HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L793-L806">src</a></sub></sup><a name="show-value"></a>
<code>&forall; :A :B. (<a href="#hash-class">Hash</a> :A) (<a href="#into-class">Into</a> :A <a href="#string-type">String</a>) (<a href="#into-class">Into</a> :B <a href="#string-type">String</a>) &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; <a href="#string-type">String</a>)</code>

Return a human-readable representation of HM.



***

#### <a href="#union-value"><code>(UNION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L747-L753">src</a></sub></sup><a name="union-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Construct a HashMap containing all the mappings from A and B.

If A and B contain mappings X -> A' and X -> B', the former mapping is kept.

The operation is associative, but not commutative.



***

#### <a href="#update-value"><code>(UPDATE HM KEY F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L528-L609">src</a></sub></sup><a name="update-value"></a>
<code>&forall; :A :B :C. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; :A &rarr; ((<a href="#optional-type">Optional</a> :B) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#optional-type">Optional</a> :B) :C)) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#hashmap-type">HashMap</a> :A :B) :C))</code>

Generic update/filter function. Takes a KEY and a F. F is passed
NONE if KEY is not found, (Some KEY) if it is found. F returns a tuple,
(Optional :v, :a). If the first term is NONE, then the KEY entry is cleared
from the hashmap. If it is (SOME v), then the KEY entry is updated to V.
The second term, :a, of the tuple is returned from `update` along with the
modified `HashMap`.



***

#### <a href="#values-value"><code>(VALUES HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L701-L703">src</a></sub></sup><a name="values-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>

Returns an iterator over all the values in a hashmap hm.



***

#### <a href="#xor-value"><code>(XOR A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L774-L784">src</a></sub></sup><a name="xor-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B) &rarr; (<a href="#hashmap-type">HashMap</a> :A :B))</code>

Returns a HashMap that contains mappings either in `a` or in `b`,
but not in both.



***

#### <a href="#empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L338-L340">src</a></sub></sup><a name="empty-value"></a>
<code>&forall; :A :B. (<a href="#hashmap-type">HashMap</a> :A :B)</code>

An empty HashMap



***

# Package `COALTON/HASHTABLE`<a name="coalton/hashtable-package"></a>

### Types

#### <a href="#hashtable-type"><code>Hashtable</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L39-L40">src</a></sub></sup><a name="hashtable-type"></a>

A mutable hash table.

<details>
<summary>Instances</summary>

- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#default-class">Default</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#hashtable-type">Hashtable</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#hashtable-type">Hashtable</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>

</details>



***

### Values

#### <a href="#count-value"><code>(COUNT TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L109-L112">src</a></sub></sup><a name="count-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; <a href="#integer-type">Integer</a>)</code>

Returns the number of entries in TABLE



***

#### <a href="#entries-value"><code>(ENTRIES TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L115-L126">src</a></sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Returns the key-values pairs as a list.



***

#### <a href="#extend!-value"><code>(EXTEND! TABLE ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L160-L167">src</a></sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B :C. (<a href="#hash-class">Hash</a> :A) (<a href="#intoiterator-class">IntoIterator</a> :C (<a href="#tuple-type">Tuple</a> :A :B)) &rArr; ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; :C &rarr; <a href="#unit-type">Unit</a>)</code>

Insert all of the key value pairs from ITER into TABLE, overwriting duplicate keys.



***

#### <a href="#get-value"><code>(GET TABLE KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L83-L90">src</a></sub></sup><a name="get-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; :A &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Lookup KEY in TABLE



***

#### <a href="#keys-value"><code>(KEYS TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L129-L141">src</a></sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Returns the keys in TABLE as a list



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L77-L80">src</a></sub></sup><a name="new-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; (<a href="#unit-type">Unit</a> &rarr; (<a href="#hashtable-type">Hashtable</a> :A :B))</code>

Create a new empty hashtable



***

#### <a href="#remove!-value"><code>(REMOVE! TABLE KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L101-L106">src</a></sub></sup><a name="remove!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; :A &rarr; <a href="#unit-type">Unit</a>)</code>

Remove the entry at KEY from TABLE



***

#### <a href="#set!-value"><code>(SET! TABLE KEY VALUE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L93-L98">src</a></sub></sup><a name="set!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; :A &rarr; :B &rarr; <a href="#unit-type">Unit</a>)</code>

Set KEY to VALUE in TABLE



***

#### <a href="#values-value"><code>(VALUES TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L144-L156">src</a></sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">Hashtable</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>

Returns the values in TABLE as a list



***

#### <a href="#with-capacity-value"><code>(WITH-CAPACITY CAPACITY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L70-L74">src</a></sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A :B. <a href="#hash-class">Hash</a> :A &rArr; (<a href="#integer-type">Integer</a> &rarr; (<a href="#hashtable-type">Hashtable</a> :A :B))</code>

Create a new empty hashtable with a given capacity



***

# Package `COALTON/ITERATOR`<a name="coalton/iterator-package"></a>

### Types

#### <a href="#iterator-type"><code>Iterator</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L85-L87">src</a></sub></sup><a name="iterator-type"></a>

A forward-moving pointer into an ordered sequence of :ELTs

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">Functor</a> <a href="#iterator-type">Iterator</a></code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#iterator-type">Iterator</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#iterator-type">Iterator</a> :A)</code>

</details>



***

### Classes

#### <a href="#fromiterator-class"><code>FromIterator</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L655-L656">src</a></sub></sup><a name="fromiterator-class"></a>
<code><a href="#fromiterator-class">FromIterator</a> :A :B</code>

Methods:
- <code>COLLECT! :: ((<a href="#iterator-type">Iterator</a> :B) &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#seq-type">Seq</a> :A) :A</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#ordmap-type">OrdMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#ordtree-type">OrdTree</a> :A) :A</code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#queue-type">Queue</a> :A) :A</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#hashmap-type">HashMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#hashtable-type">Hashtable</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#slice-type">Slice</a> :A) :A</code>
- <code><a href="#fromiterator-class">FromIterator</a> <a href="#string-type">String</a> <a href="#char-type">Char</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#vector-type">Vector</a> :A) :A</code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#list-type">List</a> :A) :A</code>
- <code><a href="#fromiterator-class">FromIterator</a> :A :B &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#result-type">Result</a> :C :A) (<a href="#result-type">Result</a> :C :B)</code>
- <code><a href="#fromiterator-class">FromIterator</a> :A :B &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#optional-type">Optional</a> :A) (<a href="#optional-type">Optional</a> :B)</code>

</details>



***

#### <a href="#intoiterator-class"><code>IntoIterator</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L141-L145">src</a></sub></sup><a name="intoiterator-class"></a>
<code><a href="#intoiterator-class">IntoIterator</a> :A :B</code>


Containers which can be converted into iterators.

`INTO-ITER` must not mutate its argument, only produce a "view" into it.

Methods:
- <code>INTO-ITER :: (:A &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#seq-type">Seq</a> :A) :A</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#ordmap-type">OrdMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#ordtree-type">OrdTree</a> :A) :A</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#queue-type">Queue</a> :A) :A</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#hashmap-type">HashMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#hashtable-type">Hashtable</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#slice-type">Slice</a> :A) :A</code>
- <code><a href="#intoiterator-class">IntoIterator</a> <a href="#string-type">String</a> <a href="#char-type">Char</a></code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#vector-type">Vector</a> :A) :A</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#list-type">List</a> :A) :A</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#result-type">Result</a> :A :B) :B</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#optional-type">Optional</a> :A) :A</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#iterator-type">Iterator</a> :A) :A</code>

</details>



***

### Values

#### <a href="#and!-value"><code>(AND! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L481-L492">src</a></sub></sup><a name="and!-value"></a>
<code>((<a href="#iterator-type">Iterator</a> <a href="#boolean-type">Boolean</a>) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns True if all iterator elements are True. May not consume the entire iterator. Returns True on an empty iterator.



***

#### <a href="#any!-value"><code>(ANY! GOOD? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L611-L617">src</a></sub></sup><a name="any!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Return `True` as soon as any element of ITER is GOOD?, or `False` if none of them are.

Returns `False` if ITER is empty.



***

#### <a href="#chain!-value"><code>(CHAIN! ITER1 ITER2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L420-L431">src</a></sub></sup><a name="chain!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Yield all the elements of ITER1 followed by all the elements from ITER2.



***

#### <a href="#count!-value"><code>(COUNT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L513-L517">src</a></sub></sup><a name="count!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Return the number of elements in ITER.
This operation could be called `length!`, but `count!` emphasizes the fact that it consumes ITER, and
afterwards, ITER will be exhausted.



***

#### <a href="#count-forever-value"><code>(COUNT-FOREVER _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L248-L252">src</a></sub></sup><a name="count-forever-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (<a href="#unit-type">Unit</a> &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

An infinite iterator which starts at 0 and counts upwards by 1.



***

#### <a href="#down-from-value"><code>(DOWN-FROM LIMIT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L243-L245">src</a></sub></sup><a name="down-from-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

An iterator which begins below the provided limit and counts down through and including zero.



***

#### <a href="#elementwise-hash!-value"><code>(ELEMENTWISE-HASH! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L640-L649">src</a></sub></sup><a name="elementwise-hash!-value"></a>
<code>&forall; :A. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> :A) &rarr; <a href="#hash-type">Hash</a>)</code>

Hash an iterator by combining the hashes of all its elements.

The empty iterator will hash as 0.



***

#### <a href="#elementwise-match!-value"><code>(ELEMENTWISE-MATCH! SAME? LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L620-L629">src</a></sub></sup><a name="elementwise-match!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Are LEFT and RIGHT elementwise-identical under SAME?

True if, for every pair of elements (A B) in (LEFT RIGHT), (same? A B) is True, and LEFT and RIGHT have the
same length.



***

#### <a href="#elementwise==!-value"><code>(ELEMENTWISE==!)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L632-L637">src</a></sub></sup><a name="elementwise==!-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is every element of the first iterator `==' to the corresponding element of the second?

True if two iterators have the same length, and for every N, the Nth element of the first iterator is `==' to
the Nth element of the second iterator.



***

#### <a href="#enumerate!-value"><code>(ENUMERATE! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L347-L349">src</a></sub></sup><a name="enumerate!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#tuple-type">Tuple</a> <a href="#ufix-type">UFix</a> :A)))</code>

Pair successive zero-based incides with elements from ITER



***

#### <a href="#every!-value"><code>(EVERY! GOOD? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L602-L608">src</a></sub></sup><a name="every!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Return `True` if every element of ITER is GOOD?, or `False` as soon as any element is not GOOD?.

Returns `True` if ITER is empty.



***

#### <a href="#filter!-value"><code>(FILTER! KEEP? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L352-L360">src</a></sub></sup><a name="filter!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Return an iterator over the elements from ITER for which KEEP? returns true.



***

#### <a href="#filter-map!-value"><code>(FILTER-MAP! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L363-L376">src</a></sub></sup><a name="filter-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type">Optional</a> :B)) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>

Map an iterator, retaining only the elements where F returns SOME.



***

#### <a href="#find!-value"><code>(FIND! THIS? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L528-L534">src</a></sub></sup><a name="find!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Return the first element of ITER for which THIS? returns `True`, or `None` if no element matches.



***

#### <a href="#find-map!-value"><code>(FIND-MAP! F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L537-L539">src</a></sub></sup><a name="find-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type">Optional</a> :B)) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Return the first element of (map F ITER) for which F returns `Some`.



***

#### <a href="#flat-map!-value"><code>(FLAT-MAP! FUNC ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L451-L453">src</a></sub></sup><a name="flat-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#iterator-type">Iterator</a> :B)) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>

Flatten! wrapped around map.



***

#### <a href="#flatten!-value"><code>(FLATTEN! ITERS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L434-L448">src</a></sub></sup><a name="flatten!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> (<a href="#iterator-type">Iterator</a> :A)) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Yield all the elements from each of the ITERS in order.



***

#### <a href="#fold!-value"><code>(FOLD! FUNC INIT ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L113-L123">src</a></sub></sup><a name="fold!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B &rarr; :A) &rarr; :A &rarr; (<a href="#iterator-type">Iterator</a> :B) &rarr; :A)</code>

Tail recursive in-order fold. Common Lisp calls this operation `reduce`.

If ITER is empty, returns INIT. Otherwise, calls (FUNC STATE ITEM) for each ITEM of ITER to produce a new
STATE, using INIT as the first STATE.



***

#### <a href="#for-each!-value"><code>(FOR-EACH! THUNK ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L520-L525">src</a></sub></sup><a name="for-each!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#unit-type">Unit</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Call THUNK on each element of ITER in order for side effects.
Discard values returned by THUNK.



***

#### <a href="#index-of!-value"><code>(INDEX-OF! THIS? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L542-L548">src</a></sub></sup><a name="index-of!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> <a href="#ufix-type">UFix</a>))</code>

Return the zero-based index of the first element of ITER for which THIS? is `True`, or `None` if no element matches.



***

#### <a href="#interleave!-value"><code>(INTERLEAVE! LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L306-L325">src</a></sub></sup><a name="interleave!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Return an iterator of interleaved elements from LEFT and RIGHT which terminates as soon as both LEFT and RIGHT do.

If one iterator terminates before the other, elements from the longer iterator will be yielded without
interleaving. (interleave empty ITER) is equivalent to (id ITER).



***

#### <a href="#last!-value"><code>(LAST! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L476-L478">src</a></sub></sup><a name="last!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Yields the last element of ITER, completely consuming it.



***

#### <a href="#map-while!-value"><code>(MAP-WHILE! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L379-L399">src</a></sub></sup><a name="map-while!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type">Optional</a> :B)) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>

Map an iterator, stopping early if F returns NONE.



***

#### <a href="#max!-value"><code>(MAX! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L565-L567">src</a></sub></sup><a name="max!-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Return the most-positive element of ITER, or `None` if ITER is empty.



***

#### <a href="#maximize-by!-value"><code>(MAXIMIZE-BY! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L588-L592">src</a></sub></sup><a name="maximize-by!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-positive.

Return `None' if ITER is empty.



***

#### <a href="#mconcat!-value"><code>(MCONCAT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L456-L458">src</a></sub></sup><a name="mconcat!-value"></a>
<code>&forall; :A. <a href="#monoid-class">Monoid</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> :A) &rarr; :A)</code>

Fold an iterator of monoids into a single element.



***

#### <a href="#mconcatmap!-value"><code>(MCONCATMAP! FUNC ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L461-L463">src</a></sub></sup><a name="mconcatmap!-value"></a>
<code>&forall; :A :B. <a href="#monoid-class">Monoid</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; :B)</code>

Map an iterator to an iterator of monoids, and then fold that iterator into a single element.



***

#### <a href="#min!-value"><code>(MIN! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L570-L572">src</a></sub></sup><a name="min!-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Return the most-negative element of ITER, or `None` if ITER is empty.



***

#### <a href="#minimize-by!-value"><code>(MINIMIZE-BY! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L595-L599">src</a></sub></sup><a name="minimize-by!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-negative.

Return `None' if ITER is empty.



***

#### <a href="#new-value"><code>(NEW F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L90-L92">src</a></sub></sup><a name="new-value"></a>
<code>&forall; :A. ((<a href="#unit-type">Unit</a> &rarr; (<a href="#optional-type">Optional</a> :A)) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Create a new iterator from a function that yields elements.



***

#### <a href="#next!-value"><code>(NEXT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L104-L110">src</a></sub></sup><a name="next!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Advance ITER, returning its next yielded value, or `None` if the iterator is exhausted.
Behavior is undefined if two threads concurrently call `next!` on the same iterator without a lock. Note that
most of the operators defined on iterators call `next!` internally, or create new iterators which will call
`next!` on their inputs.



***

#### <a href="#once-value"><code>(ONCE ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L268-L277">src</a></sub></sup><a name="once-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Yield `item` once.



***

#### <a href="#optimize!-value"><code>(OPTIMIZE! BETTER? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L551-L562">src</a></sub></sup><a name="optimize!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the best element of ITER.

Return `None` if ITER is empty.



***

#### <a href="#optimize-by!-value"><code>(OPTIMIZE-BY! BETTER? F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L578-L585">src</a></sub></sup><a name="optimize-by!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (:B &rarr; :A) &rarr; (<a href="#iterator-type">Iterator</a> :B) &rarr; (<a href="#optional-type">Optional</a> :B))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the element of ITER where (F ELT) is the best.

Return `None` if ITER is empty.



***

#### <a href="#or!-value"><code>(OR! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L495-L505">src</a></sub></sup><a name="or!-value"></a>
<code>((<a href="#iterator-type">Iterator</a> <a href="#boolean-type">Boolean</a>) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns True if any iterator elements are True. May not consume the entire iterator. Returns False on an empty iterator.



***

#### <a href="#pair-with!-value"><code>(PAIR-WITH! FUNC KEYS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L466-L469">src</a></sub></sup><a name="pair-with!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Returns an iterator over tuples whose FSTs are elements from KEYS, and whose SNDs are the results of applying FUNC to those KEYS.



***

#### <a href="#range-decreasing-value"><code>(RANGE-DECREASING STEP START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L206-L240">src</a></sub></sup><a name="range-decreasing-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

A range which begins below START and counts down through and including END by STEP.

Equivalent to reversing `range-increasing`



***

#### <a href="#range-increasing-value"><code>(RANGE-INCREASING STEP START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L170-L178">src</a></sub></sup><a name="range-increasing-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

An iterator which begins at START and yields successive elements spaced by STEP, stopping before END.



***

#### <a href="#recursive-iter-value"><code>(RECURSIVE-ITER SUCC DONE? START)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L151-L163">src</a></sub></sup><a name="recursive-iter-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; :A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

An iterator which yields first START, then (SUCC START), then (SUCC (SUCC START)), and so on, stopping as soon as such a value is `done?`.

Beware off-by-one errors: the first value which is `done?` is not yielded. If `(done?  start)' is true, the
iterator is empty.



***

#### <a href="#remove-duplicates!-value"><code>(REMOVE-DUPLICATES! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L268-L277">src</a></sub></sup><a name="remove-duplicates!-value"></a>
<code>&forall; :A. <a href="#hash-class">Hash</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Yield unique elements from ITER in order of first appearance.



***

#### <a href="#repeat-value"><code>(REPEAT ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L255-L260">src</a></sub></sup><a name="repeat-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Yield ITEM over and over, infinitely.



***

#### <a href="#repeat-for-value"><code>(REPEAT-FOR ITEM COUNT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L263-L265">src</a></sub></sup><a name="repeat-for-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Yield ITEM COUNT times, then stop.



***

#### <a href="#size-hint-value"><code>(SIZE-HINT ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L99-L101">src</a></sub></sup><a name="size-hint-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#optional-type">Optional</a> <a href="#ufix-type">UFix</a>))</code>


***

#### <a href="#sum!-value"><code>(SUM! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L508-L510">src</a></sub></sup><a name="sum!-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> :A) &rarr; :A)</code>

Add together all the elements of ITER.



***

#### <a href="#take!-value"><code>(TAKE! COUNT ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L413-L417">src</a></sub></sup><a name="take!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

An `Iterator` which yields at most COUNT elements from ITER.



***

#### <a href="#unwrapped!-value"><code>(UNWRAPPED! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L402-L410">src</a></sub></sup><a name="unwrapped!-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">Unwrappable</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> (:A :B)) &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>


***

#### <a href="#up-through-value"><code>(UP-THROUGH LIMIT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L186-L188">src</a></sub></sup><a name="up-through-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

An iterator which begins at zero and counts up through and including LIMIT.



***

#### <a href="#up-to-value"><code>(UP-TO LIMIT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L181-L183">src</a></sub></sup><a name="up-to-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

An iterator which begins at zero and counts up to, but not including, LIMIT.



***

#### <a href="#with-size-value"><code>(WITH-SIZE F SIZE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L95-L96">src</a></sub></sup><a name="with-size-value"></a>
<code>&forall; :A. ((<a href="#unit-type">Unit</a> &rarr; (<a href="#optional-type">Optional</a> :A)) &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>


***

#### <a href="#zip!-value"><code>(ZIP!)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L342-L344">src</a></sub></sup><a name="zip!-value"></a>
<code>&forall; :A :B. ((<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :B) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Return an iterator of tuples contining elements from two iterators.



***

#### <a href="#zip-with!-value"><code>(ZIP-WITH! F LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L328-L339">src</a></sub></sup><a name="zip-with!-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#iterator-type">Iterator</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :B) &rarr; (<a href="#iterator-type">Iterator</a> :C))</code>

Return an iterator of elements from LEFT and RIGHT which terminates as soon as either LEFT or RIGHT does.



***

#### <a href="#empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L137-L139">src</a></sub></sup><a name="empty-value"></a>
<code>&forall; :A. (<a href="#iterator-type">Iterator</a> :A)</code>

Yields nothing; stops immediately



***

# Package `COALTON/LISPARRAY`<a name="coalton/lisparray-package"></a>

### Types

#### <a href="#lisparray-type"><code>LispArray</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L32-L37">src</a></sub></sup><a name="lisparray-type"></a>

A one-dimensional, non-resizable array of elements.

These arrays are represented as possibly specialized `(cl:simple-array <type> (cl:*))` and are meant to be used as a tool either to interface with Lisp code or to implement efficient data structures. One should consult `Vector` or `Seq` for more general sequential data structure needs.

Whether or not the arrays are specialized depends on the underlying Lisp implementation. Consult `cl:upgraded-array-element-type` to determine whether `LispArray` may get specialized.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#lisparray-type">LispArray</a> :A)</code>
- <code><a href="#foldable-class">Foldable</a> <a href="#lisparray-type">LispArray</a></code>
- <code><a href="#into-class">Into</a> (<a href="#lisparray-type">LispArray</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#into-class">Into</a> (<a href="#list-type">List</a> :A) (<a href="#lisparray-type">LispArray</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#iso-class">Iso</a> (<a href="#lisparray-type">LispArray</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#randomaccess-class">RandomAccess</a> (<a href="#lisparray-type">LispArray</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#lisparray-type">LispArray</a> :A)</code>

</details>



***

### Values

#### <a href="#aref-value"><code>(AREF V I)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L78-L81">src</a></sub></sup><a name="aref-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type">LispArray</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; :A)</code>

Read the `i`th value of the `LispArray` `v`.



***

#### <a href="#copy-value"><code>(COPY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L93-L96">src</a></sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type">LispArray</a> :A) &rarr; (<a href="#lisparray-type">LispArray</a> :A))</code>

Make a deep copy of the `LispArray` `v`.



***

#### <a href="#length-value"><code>(LENGTH V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L71-L74">src</a></sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type">LispArray</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Return the length of the `LispArray` `v`.



***

#### <a href="#make-value"><code>(MAKE N X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L46-L53">src</a></sub></sup><a name="make-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; (<a href="#ufix-type">UFix</a> &rarr; :A &rarr; (<a href="#lisparray-type">LispArray</a> :A))</code>

Make a new `LispArray` of length `n` initialized to `x`.

If the type of `x` represents a specialized array 



***

#### <a href="#make-uninitialized-value"><code>(MAKE-UNINITIALIZED N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L56-L67">src</a></sub></sup><a name="make-uninitialized-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; (<a href="#ufix-type">UFix</a> &rarr; (<a href="#lisparray-type">LispArray</a> :A))</code>

Make a new LispArray of length `n` that can store elements of type `:t`.

WARNING: The consequences are undefined if an uninitialized element is read before being set.




***

#### <a href="#set!-value"><code>(SET! V I X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L85-L89">src</a></sub></sup><a name="set!-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type">LispArray</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; :A &rarr; <a href="#unit-type">Unit</a>)</code>

Set the `i`th value of the `LispArray` `v` to `x`.



***

# Package `COALTON/LIST`<a name="coalton/list-package"></a>

### Values

#### <a href="#all-value"><code>(ALL F? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L639-L646">src</a></sub></sup><a name="all-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns `True` if every element in `xs` matches `f?`.



***

#### <a href="#any-value"><code>(ANY F? L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L649-L656">src</a></sub></sup><a name="any-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns `True` if at least one element in `xs` matches `f?`.



***

#### <a href="#append-value"><code>(APPEND XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L327-L329">src</a></sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Appends two lists together and returns a new list.



***

#### <a href="#car-value"><code>(CAR X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L110-L114">src</a></sub></sup><a name="car-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; :A)</code>

Return the traditional car of a list. This function is partial.



***

#### <a href="#cdr-value"><code>(CDR XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L117-L121">src</a></sub></sup><a name="cdr-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Return the traditional cdr of a list.



***

#### <a href="#combs-value"><code>(COMBS L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L664-L672">src</a></sub></sup><a name="combs-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)))</code>

Compute a list of all combinations of elements of `l`. This function sometimes goes by the name "power set" or "subsets".

The ordering of elements of `l` is preserved in the ordering of elements in each list produced by this function.



***

#### <a href="#combsof-value"><code>(COMBSOF N L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L675-L688">src</a></sub></sup><a name="combsof-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)))</code>

Produce a list of size-N subsets of `l`.

The ordering of elements of `l` is preserved in the ordering of elements in each list produced by `(combsOf n l)`.

This function is equivalent to all size-`n` elements of `(combs l)`.



***

#### <a href="#concat-value"><code>(CONCAT XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L333-L335">src</a></sub></sup><a name="concat-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)) &rarr; (<a href="#list-type">List</a> :A))</code>

Appends a list of lists together into a single new list.



***

#### <a href="#concatmap-value"><code>(CONCATMAP F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L339-L341">src</a></sub></sup><a name="concatmap-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#list-type">List</a> :B)) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :B))</code>

Apply F to each element in XS and concatenate the results.



***

#### <a href="#cons?-value"><code>(CONS? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L145-L149">src</a></sub></sup><a name="cons?-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns TRUE if XS is a non-empty list.



***

#### <a href="#countby-value"><code>(COUNTBY F THINGS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L491-L498">src</a></sub></sup><a name="countby-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Count the number of items in THINGS that satisfy the predicate F.



***

#### <a href="#difference-value"><code>(DIFFERENCE XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L427-L429">src</a></sub></sup><a name="difference-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a new list with the first occurrence of each element in `ys` removed from `xs`.



***

#### <a href="#drop-value"><code>(DROP N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L191-L198">src</a></sub></sup><a name="drop-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a list with the first N elements removed.



***

#### <a href="#elemindex-value"><code>(ELEMINDEX X XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L288-L289">src</a></sub></sup><a name="elemindex-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; (:A &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> <a href="#ufix-type">UFix</a>))</code>


***

#### <a href="#equivalence-classes-value"><code>(EQUIVALENCE-CLASSES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L601-L601">src</a></sub></sup><a name="equivalence-classes-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)))</code>


***

#### <a href="#equivalence-classes-by-value"><code>(EQUIVALENCE-CLASSES-BY F L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L589-L598">src</a></sub></sup><a name="equivalence-classes-by-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)))</code>

Break a list into a list of equivalence classes according to an equivalence relation.



***

#### <a href="#filter-value"><code>(FILTER F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L243-L252">src</a></sub></sup><a name="filter-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a new list containing every element of XS that matches the predicate function F in the same order.



***

#### <a href="#find-value"><code>(FIND F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L233-L240">src</a></sub></sup><a name="find-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns the first element in a list matching the predicate function F.



***

#### <a href="#findindex-value"><code>(FINDINDEX F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L292-L301">src</a></sub></sup><a name="findindex-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> <a href="#ufix-type">UFix</a>))</code>

Returns the index of the first element matching the predicate function F.



***

#### <a href="#head-value"><code>(HEAD L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L96-L100">src</a></sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns the first element of a list.



***

#### <a href="#index-value"><code>(INDEX I XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L263-L270">src</a></sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns the Ith element of a list.



***

#### <a href="#init-value"><code>(INIT L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L132-L135">src</a></sub></sup><a name="init-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns every element except the last in a list.



***

#### <a href="#insert-value"><code>(INSERT E LS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L501-L503">src</a></sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; (:A &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Inserts an element into a list at the first place it is less than or equal to the next element.



***

#### <a href="#insertby-value"><code>(INSERTBY CMP X YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L506-L516">src</a></sub></sup><a name="insertby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type">Ord</a>) &rarr; :A &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Generic version of insert



***

#### <a href="#insertions-value"><code>(INSERTIONS A L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L544-L553">src</a></sub></sup><a name="insertions-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)))</code>

Produce a list of copies of `l`, each with A inserted at a possible position.

    (insertions 0 (make-list 1 2))
    ;; => ((0 1 2) (1 0 2) (1 2 0))




***

#### <a href="#intercalate-value"><code>(INTERCALATE XS XSS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L539-L541">src</a></sub></sup><a name="intercalate-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)) &rarr; (<a href="#list-type">List</a> :A))</code>

Intersperse `xs` into `xss` and then concatenate the result.



***

#### <a href="#intersection-value"><code>(INTERSECTION XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L370-L379">src</a></sub></sup><a name="intersection-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns elements which occur in both lists. Does not return duplicates and does not guarantee order.



***

#### <a href="#intersperse-value"><code>(INTERSPERSE E XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L532-L536">src</a></sub></sup><a name="intersperse-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a new list by inserting `e` between every element of `xs`.



***

#### <a href="#last-value"><code>(LAST L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L124-L129">src</a></sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns the last element of a list.



***

#### <a href="#length-value"><code>(LENGTH L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L255-L260">src</a></sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Returns the length of a list.



***

#### <a href="#lookup-value"><code>(LOOKUP E XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L382-L391">src</a></sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#eq-class">Eq</a> :A &rArr; (:A &rarr; (<a href="#list-type">List</a> (<a href="#tuple-type">Tuple</a> :A :B)) &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Returns the value of the first (key, value) tuple in XS where the key matches E.



***

#### <a href="#maximum-value"><code>(MAXIMUM L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L619-L621">src</a></sub></sup><a name="maximum-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns a greatest element of a list, or `None`.



***

#### <a href="#member-value"><code>(MEMBER E XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L344-L351">src</a></sub></sup><a name="member-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; (:A &rarr; (<a href="#list-type">List</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns true if any element of XS is equal to E.



***

#### <a href="#minimum-value"><code>(MINIMUM L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L624-L626">src</a></sub></sup><a name="minimum-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns a least element of a list, or `None`.



***

#### <a href="#nth-value"><code>(NTH N L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L273-L275">src</a></sub></sup><a name="nth-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; :A)</code>

Like INDEX, but errors if the index is not found.



***

#### <a href="#nth-cdr-value"><code>(NTH-CDR N L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L278-L285">src</a></sub></sup><a name="nth-cdr-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns the nth-cdr of a list.



***

#### <a href="#null?-value"><code>(NULL? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L138-L142">src</a></sub></sup><a name="null?-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns TRUE if XS is an empty list.



***

#### <a href="#optimumby-value"><code>(OPTIMUMBY F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L606-L616">src</a></sub></sup><a name="optimumby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns an optimum according to a total order.



***

#### <a href="#partition-value"><code>(PARTITION F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L577-L586">src</a></sub></sup><a name="partition-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#list-type">List</a> :A) (<a href="#list-type">List</a> :A)))</code>

Splits a list into two new lists. The first list contains elements matching predicate F.



***

#### <a href="#perms-value"><code>(PERMS L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L659-L661">src</a></sub></sup><a name="perms-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)))</code>

Produce all permutations of the list L.



***

#### <a href="#product-value"><code>(PRODUCT XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L634-L636">src</a></sub></sup><a name="product-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; :A)</code>

Returns the product of `xs`.



***

#### <a href="#range-value"><code>(RANGE START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L304-L319">src</a></sub></sup><a name="range-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; :A &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a list containing the numbers from START to END inclusive, counting by 1.

    COALTON-USER> (coalton (range 1 5))
    (1 2 3 4 5)

    COALTON-USER> (coalton (range 5 2))
    (5 4 3 2)




***

#### <a href="#remove-value"><code>(REMOVE X YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L422-L424">src</a></sub></sup><a name="remove-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; (:A &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Return a new list with the first element equal to `x` removed.



***

#### <a href="#remove-duplicates-value"><code>(REMOVE-DUPLICATES XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L403-L405">src</a></sub></sup><a name="remove-duplicates-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a new list without duplicate elements.



***

#### <a href="#remove-if-value"><code>(REMOVE-IF PRED XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L417-L419">src</a></sub></sup><a name="remove-if-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Return a new list with the first element for which PRED is `True` is removed.



***

#### <a href="#repeat-value"><code>(REPEAT N X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L164-L170">src</a></sub></sup><a name="repeat-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; :A &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a list with the same value repeated multiple times.



***

#### <a href="#reverse-value"><code>(REVERSE XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L178-L181">src</a></sub></sup><a name="reverse-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a new list containing the same elements in reverse order.



***

#### <a href="#singleton-value"><code>(SINGLETON X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L152-L154">src</a></sub></sup><a name="singleton-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a list containing one element.



***

#### <a href="#singleton?-value"><code>(SINGLETON? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L157-L161">src</a></sub></sup><a name="singleton?-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `xs` a list containing exactly one element?



***

#### <a href="#sort-value"><code>(SORT XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L519-L521">src</a></sub></sup><a name="sort-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Sort `xs`.



***

#### <a href="#sortby-value"><code>(SORTBY CMP XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L524-L529">src</a></sub></sup><a name="sortby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type">Ord</a>) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Sort `xs` by a custom comparison function `cmp`.



***

#### <a href="#split-around-value"><code>(SPLIT-AROUND N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L226-L230">src</a></sub></sup><a name="split-around-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#tuple3-type">Tuple3</a> (<a href="#list-type">List</a> :A) (<a href="#optional-type">Optional</a> :A) (<a href="#list-type">List</a> :A)))</code>

Splits a list around N into a Tuple of the first N elements, the element at index N, and a tail of all remaining elements. N must be a valid index.



***

#### <a href="#split-at-value"><code>(SPLIT-AT N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L214-L223">src</a></sub></sup><a name="split-at-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#list-type">List</a> :A) (<a href="#list-type">List</a> :A)))</code>

Splits a list into a Tuple of the first N elements and all remaining elements. The return value is equivalent to `(Tuple (take n xs) (drop n xs)`.



***

#### <a href="#sum-value"><code>(SUM XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L629-L631">src</a></sub></sup><a name="sum-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; :A)</code>

Returns the sum of `xs`.



***

#### <a href="#tail-value"><code>(TAIL L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L103-L107">src</a></sub></sup><a name="tail-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#optional-type">Optional</a> (<a href="#list-type">List</a> :A)))</code>

Returns every element except the first in a list.



***

#### <a href="#take-value"><code>(TAKE N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L201-L211">src</a></sub></sup><a name="take-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns the first N elements of a list.



***

#### <a href="#transpose-value"><code>(TRANSPOSE XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L556-L574">src</a></sub></sup><a name="transpose-value"></a>
<code>&forall; :A. ((<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)) &rarr; (<a href="#list-type">List</a> (<a href="#list-type">List</a> :A)))</code>

Transposes a matrix represented by a list of lists.



***

#### <a href="#union-value"><code>(UNION XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L354-L367">src</a></sub></sup><a name="union-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :A))</code>

Returns a new list with the elements from both XS and YS and without duplicates.



***

#### <a href="#zip-value"><code>(ZIP XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L486-L488">src</a></sub></sup><a name="zip-value"></a>
<code>&forall; :A :B. ((<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :B) &rarr; (<a href="#list-type">List</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Builds a list of tuples with the elements of XS and YS.



***

#### <a href="#zipwith-value"><code>(ZIPWITH F XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L432-L441">src</a></sub></sup><a name="zipwith-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :B) &rarr; (<a href="#list-type">List</a> :C))</code>

Builds a new list by calling `f` with elements of `xs` and `ys`.



***

#### <a href="#zipwith3-value"><code>(ZIPWITH3 F XS YS ZS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L444-L454">src</a></sub></sup><a name="zipwith3-value"></a>
<code>&forall; :A :B :C :D. ((:A &rarr; :B &rarr; :C &rarr; :D) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :B) &rarr; (<a href="#list-type">List</a> :C) &rarr; (<a href="#list-type">List</a> :D))</code>

Build a new list by calling F with elements of XS, YS and ZS



***

#### <a href="#zipwith4-value"><code>(ZIPWITH4 F AS BS CS DS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L457-L468">src</a></sub></sup><a name="zipwith4-value"></a>
<code>&forall; :A :B :C :D :E. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :B) &rarr; (<a href="#list-type">List</a> :C) &rarr; (<a href="#list-type">List</a> :D) &rarr; (<a href="#list-type">List</a> :E))</code>

Build a new list by calling F with elements of AS, BS, CS and DS



***

#### <a href="#zipwith5-value"><code>(ZIPWITH5 F AS BS CS DS ES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L471-L483">src</a></sub></sup><a name="zipwith5-value"></a>
<code>&forall; :A :B :C :D :E :F. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E &rarr; :F) &rarr; (<a href="#list-type">List</a> :A) &rarr; (<a href="#list-type">List</a> :B) &rarr; (<a href="#list-type">List</a> :C) &rarr; (<a href="#list-type">List</a> :D) &rarr; (<a href="#list-type">List</a> :E) &rarr; (<a href="#list-type">List</a> :F))</code>

Build a new list by calling F with elements of AS, BS, CS, DS and ES



***

### Macros

#### <a href="#coalton-list-make-macro"><code>MAKE (&amp;REST ELEMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-list-make-macro"></a>

Make a homogeneous list of `elements`. Synonym for `coalton:make-list`.



***

# Package `COALTON/MATH/ARITH`<a name="coalton/math/arith-package"></a>

### Classes

#### <a href="#dividable-class"><code>Dividable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L64-L86">src</a></sub></sup><a name="dividable-class"></a>
<code><a href="#dividable-class">Dividable</a> :A :B</code>


The representation of a type such that division within that type possibly results in another type. For instance,


    (Dividable Integer Fraction)


establishes that division of two `Integer`s can result in a `Fraction`, whereas


    (Dividable F32 F32)


establishes that division of two `F32`s can result in a `F32`.

Note that `Dividable` does *not* establish a default result type; you must constrain the result type yourself.

The function `general/` is partial, and will error produce a run-time error if the divisor is zero.


Methods:
- <code>GENERAL/ :: (:A &rarr; :A &rarr; :B)</code>
<details>
<summary>Instances</summary>

- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#f64-type">F64</a></code>
- <code><a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> <a href="#f32-type">F32</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> :A &rArr; <a href="#dividable-class">Dividable</a> :A :A</code>

</details>



***

#### <a href="#reciprocable-class"><code>Reciprocable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L51-L62">src</a></sub></sup><a name="reciprocable-class"></a>
<code><a href="#num-class">Num</a> :A &rArr; <a href="#reciprocable-class">Reciprocable</a> :A</code>


Any number with a multiplicative inverse (reciprocal) where:


    1 = (* (reciprocal x) x) = (* x (reciprocal x))
    (/ x y) = (* x (reciprocal y))


If no reciprocal exists for an element, produce a run-time error (e.g., zero).


Methods:
- <code>/ :: (:A &rarr; :A &rarr; :A)</code>
- <code>RECIPROCAL :: (:A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> :A &rArr; <a href="#reciprocable-class">Reciprocable</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#reciprocable-class">Reciprocable</a> :A &rArr; <a href="#reciprocable-class">Reciprocable</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code>(<a href="#complexcomponent-class">ComplexComponent</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#reciprocable-class">Reciprocable</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#f64-type">F64</a></code>
- <code><a href="#reciprocable-class">Reciprocable</a> <a href="#f32-type">F32</a></code>

</details>



***

#### <a href="#transfinite-class"><code>Transfinite</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L92-L97">src</a></sub></sup><a name="transfinite-class"></a>
<code><a href="#transfinite-class">Transfinite</a> :A</code>


Numeric type with a value for (positive) infinity and/or NaN.

Methods:
- <code>INFINITY :: :A</code>
- <code>INFINITE? :: (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>
- <code>NAN :: :A</code>
- <code>NAN? :: (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#transfinite-class">Transfinite</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#transfinite-class">Transfinite</a> <a href="#f64-type">F64</a></code>
- <code><a href="#transfinite-class">Transfinite</a> <a href="#f32-type">F32</a></code>

</details>



***

### Values

#### <a href="#1+-value"><code>(1+ NUM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L176-L178">src</a></sub></sup><a name="1+-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (:A &rarr; :A)</code>

Increment `num`.



***

#### <a href="#1--value"><code>(1- NUM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L182-L184">src</a></sub></sup><a name="1--value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (:A &rarr; :A)</code>

Decrement `num`.



***

#### <a href="#abs-value"><code>(ABS X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L154-L158">src</a></sub></sup><a name="abs-value"></a>
<code>&forall; :A. (<a href="#ord-class">Ord</a> :A) (<a href="#num-class">Num</a> :A) &rArr; (:A &rarr; :A)</code>

Absolute value of `x`.



***

#### <a href="#ash-value"><code>(ASH X N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L170-L172">src</a></sub></sup><a name="ash-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a>)</code>

Compute the "arithmetic shift" of `x` by `n`.



***

#### <a href="#finite?-value"><code>(FINITE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L100-L102">src</a></sub></sup><a name="finite?-value"></a>
<code>&forall; :A. <a href="#transfinite-class">Transfinite</a> :A &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Neither infinite or NaN.



***

#### <a href="#negate-value"><code>(NEGATE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L148-L150">src</a></sub></sup><a name="negate-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (:A &rarr; :A)</code>

The negation, or additive inverse, of `x`.



***

#### <a href="#negative?-value"><code>(NEGATIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L194-L196">src</a></sub></sup><a name="negative?-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` negative?



***

#### <a href="#nonnegative?-value"><code>(NONNEGATIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L206-L208">src</a></sub></sup><a name="nonnegative?-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` not negative?



***

#### <a href="#nonpositive?-value"><code>(NONPOSITIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L200-L202">src</a></sub></sup><a name="nonpositive?-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` not positive?



***

#### <a href="#nonzero?-value"><code>(NONZERO? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L218-L220">src</a></sub></sup><a name="nonzero?-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` not zero?



***

#### <a href="#positive?-value"><code>(POSITIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L188-L190">src</a></sub></sup><a name="positive?-value"></a>
<code>&forall; :A. (<a href="#num-class">Num</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` positive?



***

#### <a href="#sign-value"><code>(SIGN X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L162-L166">src</a></sub></sup><a name="sign-value"></a>
<code>&forall; :A :B. (<a href="#ord-class">Ord</a> :A) (<a href="#num-class">Num</a> :A) (<a href="#num-class">Num</a> :B) &rArr; (:A &rarr; :B)</code>

The sign of `x`, where `(sign 0) = 1`.



***

#### <a href="#zero?-value"><code>(ZERO? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L212-L214">src</a></sub></sup><a name="zero?-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `x` zero?



***

#### <a href="#negative-infinity-value"><code>NEGATIVE-INFINITY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L105-L106">src</a></sub></sup><a name="negative-infinity-value"></a>
<code>&forall; :A. (<a href="#transfinite-class">Transfinite</a> :A) (<a href="#num-class">Num</a> :A) &rArr; :A</code>


***

# Package `COALTON/MATH/BOUNDED`<a name="coalton/math/bounded-package"></a>

### Classes

#### <a href="#bounded-class"><code>Bounded</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/bounded.lisp#L22-L25">src</a></sub></sup><a name="bounded-class"></a>
<code><a href="#bounded-class">Bounded</a> :A</code>


Types which have a maximum and minumum bound.

Methods:
- <code>MINBOUND :: :A</code>
- <code>MAXBOUND :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#bounded-class">Bounded</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i64-type">I64</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u64-type">U64</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i32-type">I32</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u32-type">U32</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i16-type">I16</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u16-type">U16</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#i8-type">I8</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#u8-type">U8</a></code>
- <code><a href="#bounded-class">Bounded</a> <a href="#bit-type">Bit</a></code>

</details>



***

# Package `COALTON/MATH/COMPLEX`<a name="coalton/math/complex-package"></a>

### Types

#### <a href="#complex-type"><code>Complex</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L37-L46">src</a></sub></sup><a name="complex-type"></a>

A complex number with a real and imaginary component.

This object does not have any public constructors. Instead, use the
function `complex` of the `ComplexComponent` type class.

A `Complex` object may either have a native or constructed
representation. See the `ComplexComponent` type class for allowed
component types.

<details>
<summary>Instances</summary>

- <code>(<a href="#complexcomponent-class">ComplexComponent</a> :A) (<a href="#into-class">Into</a> :A (<a href="#hyperdual-type">Hyperdual</a> :A)) &rArr; <a href="#into-class">Into</a> (<a href="#complex-type">Complex</a> :A) (<a href="#complex-type">Complex</a> (<a href="#hyperdual-type">Hyperdual</a> :A))</code>
- <code>(<a href="#complexcomponent-class">ComplexComponent</a> :A) (<a href="#into-class">Into</a> :A <a href="#creal-type">CReal</a>) &rArr; <a href="#into-class">Into</a> (<a href="#complex-type">Complex</a> :A) (<a href="#complex-type">Complex</a> <a href="#creal-type">CReal</a>)</code>
- <code>(<a href="#complexcomponent-class">ComplexComponent</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#reciprocable-class">Reciprocable</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#into-class">Into</a> :A (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#elementary-class">Elementary</a> :A &rArr; <a href="#exponentiable-class">Exponentiable</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#elementary-class">Elementary</a> :A &rArr; <a href="#radical-class">Radical</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#elementary-class">Elementary</a> :A &rArr; <a href="#trigonometric-class">Trigonometric</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>
- <code><a href="#fftfield-class">FFTField</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftfield-class">FFTField</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>
- <code><a href="#fftgroup-class">FFTGroup</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftgroup-class">FFTGroup</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>
- <code><a href="#fftring-class">FFTRing</a> (<a href="#complex-type">Complex</a> <a href="#f64-type">F64</a>)</code>
- <code><a href="#fftring-class">FFTRing</a> (<a href="#complex-type">Complex</a> <a href="#f32-type">F32</a>)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#complex-type">Complex</a> :A)</code>

</details>



***

### Classes

#### <a href="#complexcomponent-class"><code>ComplexComponent</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L61-L66">src</a></sub></sup><a name="complexcomponent-class"></a>
<code><a href="#num-class">Num</a> :A &rArr; <a href="#complexcomponent-class">ComplexComponent</a> :A</code>


A type class for describing complex component types. This type class
also encodes the construction and projection of `Complex` data types.

Methods:
- <code>COMPLEX :: (:A &rarr; :A &rarr; (<a href="#complex-type">Complex</a> :A))</code>
- <code>REAL-PART :: ((<a href="#complex-type">Complex</a> :A) &rarr; :A)</code>
- <code>IMAG-PART :: ((<a href="#complex-type">Complex</a> :A) &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#complexcomponent-class">ComplexComponent</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#f64-type">F64</a></code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> <a href="#f32-type">F32</a></code>

</details>



***

### Values

#### <a href="#conjugate-value"><code>(CONJUGATE Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L75-L77">src</a></sub></sup><a name="conjugate-value"></a>
<code>&forall; :A. <a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; ((<a href="#complex-type">Complex</a> :A) &rarr; (<a href="#complex-type">Complex</a> :A))</code>

The complex conjugate. If $z=a+bi$ then the conjugate $\bar z=a-bi$.



***

#### <a href="#square-magnitude-value"><code>(SQUARE-MAGNITUDE Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L81-L86">src</a></sub></sup><a name="square-magnitude-value"></a>
<code>&forall; :A. <a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; ((<a href="#complex-type">Complex</a> :A) &rarr; :A)</code>

The squared length of a complex number:
$$\vert z\vert^2=(\operatorname{Re} z)^2+(\operatorname{Im} z)^2.$$



***

#### <a href="#ii-value"><code>II</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L89-L94">src</a></sub></sup><a name="ii-value"></a>
<code>&forall; :A. <a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; (<a href="#complex-type">Complex</a> :A)</code>

The complex unit $i=\sqrt{-1}$. (The double `ii` represents a
blackboard-bold 𝕚.)



***

# Package `COALTON/MATH/DUAL`<a name="coalton/math/dual-package"></a>



Dual numbers are a hypercomplex number system [1]. A dual number has
the form $a + b\varepsilon$ where $a$ and $b$ are real numbers and
$\varepsilon$ is a symbol that satisfies $\varepsilon^2=0$ and
$\varepsilon\neq 0$. The value $a$ is often called the *primal part*
and the value $b$ is often called the *dual part*. One application of
dual numbers is automatic differentiation; an example taken from [2]
is as follows.

Consider the function $f(x) = 3x+2$ and you want to calculate $f(4)$
and $f^{\prime}(4)$. By the usual rules of differentiation, we know
$f^{\prime}(x) = 3$ and thus $(f(4), f^{\prime}(4)) = (14, 3)$. We
seek to recover this with dual numbers.

With dual numbers, we can calculate

$$f(a) + f^{\prime}(a)\varepsilon$$

by taking a real-valued function $f$ and evaluating as if it were a
dual-valued function at the point $a + \varepsilon$. Thus, for the
defined $f$, we have:

$$
\begin{aligned}
f(4 + \varepsilon)
&= 3(4 + \varepsilon) + 2 \\\\
&= 3\cdot 4 + 3\varepsilon + 2 \\\\
&= 14 + 3\varepsilon.
\end{aligned}
$$

In this result, the primal $14$ is the value of $f(4)$ and the dual is
the value of of $f^{\prime}(4)$.

Haskell has an automatic differentiation library and you can find it
here [3].

Limitations:

We have decided to implement Ord, Eq, and Hash to look at only the
primal part of numbers. This is so the Dual type can be used primarily
for the purpose of automatic differentiation of existing code, and not
for general abstract mathematics. If you need these type classes
acting in the usual way (i.e., on both primal and dual parts), then we
recommend making your own data type which wraps a dual number.

References:

- [1] https://en.wikipedia.org/wiki/Dual_number
- [2] https://blog.demofox.org/2014/12/30/dual-numbers-automatic-differentiation/
- [3] https://hackage.haskell.org/package/ad

### Structs

#### <a href="#dual-type"><code>Dual :A</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L81-L89">src</a></sub></sup><a name="dual-type"></a>

Representation of a dual number in the form $a + b\varepsilon$ where
$a$ and $b$ are real numbers and $\varepsilon$ satisfies
$\varepsilon^2 = 0$ and $\varepsilon \neq 0$.

Note: `Eq`, and `Ord` and `Hash` only make use of the primal
component.

<details>
<summary>Instances</summary>

- <code>(<a href="#num-class">Num</a> :A) (<a href="#exponentiable-class">Exponentiable</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#exponentiable-class">Exponentiable</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code>(<a href="#num-class">Num</a> :A) (<a href="#radical-class">Radical</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#exponentiable-class">Exponentiable</a> :A) &rArr; <a href="#radical-class">Radical</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code>(<a href="#num-class">Num</a> :A) (<a href="#trigonometric-class">Trigonometric</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#radical-class">Radical</a> :A) &rArr; <a href="#trigonometric-class">Trigonometric</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#dual-type">Dual</a> :A)</code>  
Note: Eq only compares the primal component.
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#dual-type">Dual</a> :A)</code>  
Note: Hash only considers the primal component in order to be consistent with Eq.
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#dual-type">Dual</a> :A)</code>  
Note: Ord only compares the primal component.
- <code><a href="#reciprocable-class">Reciprocable</a> :A &rArr; <a href="#reciprocable-class">Reciprocable</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#dual-type">Dual</a> :A)</code>

</details>



***

### Values

#### <a href="#dual-part-value"><code>(DUAL-PART (DUAL _ D))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L97-L99">src</a></sub></sup><a name="dual-part-value"></a>
<code>&forall; :A. ((<a href="#dual-type">Dual</a> :A) &rarr; :A)</code>

The dual (i.e., derivative) part of a dual number.



***

#### <a href="#primal-part-value"><code>(PRIMAL-PART (DUAL P _))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L92-L94">src</a></sub></sup><a name="primal-part-value"></a>
<code>&forall; :A. ((<a href="#dual-type">Dual</a> :A) &rarr; :A)</code>

The primal (i.e., real) part of a dual number.



***

# Package `COALTON/MATH/DYADIC`<a name="coalton/math/dyadic-package"></a>

### Types

#### <a href="#dyadic-type"><code>Dyadic</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L32-L34">src</a></sub></sup><a name="dyadic-type"></a>
- <code>(Dyadic <a href="#integer-type">Integer</a> <a href="#integer-type">Integer</a>)</code>

`(Dyadic n k)` represents the rational $\mathtt{n}\cdot 2^{\mathtt{k}}$.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#into-class">Into</a> <a href="#dyadic-type">Dyadic</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#into-class">Into</a> <a href="#integer-type">Integer</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#num-class">Num</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#ord-class">Ord</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#real-class">Real</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#dyadic-type">Dyadic</a></code>

</details>



***

### Values

#### <a href="#scale-value"><code>(SCALE X J)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L155-L158">src</a></sub></sup><a name="scale-value"></a>
<code>(<a href="#dyadic-type">Dyadic</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#dyadic-type">Dyadic</a>)</code>

Scales a dyadic `x` by $2^{\mathtt{k}}$.



***

#### <a href="#shift-value"><code>(SHIFT K A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L161-L168">src</a></sub></sup><a name="shift-value"></a>
<code>(<a href="#ufix-type">UFix</a> &rarr; <a href="#dyadic-type">Dyadic</a> &rarr; <a href="#dyadic-type">Dyadic</a>)</code>

Shift dyadic `a` to its floor with $\mathtt{k}+1$ bits of precision.



***

#### <a href="#simplify-value"><code>(SIMPLIFY D)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L99-L103">src</a></sub></sup><a name="simplify-value"></a>
<code>(<a href="#dyadic-type">Dyadic</a> &rarr; <a href="#dyadic-type">Dyadic</a>)</code>

Simplifies a dyadic by maximizing the absolute value of the exponent.



***

#### <a href="#simplify-integer-value"><code>(SIMPLIFY-INTEGER N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L88-L97">src</a></sub></sup><a name="simplify-integer-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#dyadic-type">Dyadic</a>)</code>

Finds the simplest dyadic given an integer.



***

# Package `COALTON/MATH/ELEMENTARY`<a name="coalton/math/elementary-package"></a>

### Classes

#### <a href="#elementary-class"><code>Elementary</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L122-L126">src</a></sub></sup><a name="elementary-class"></a>
<code>(<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#polar-class">Polar</a> :A) (<a href="#trigonometric-class">Trigonometric</a> :A) (<a href="#exponentiable-class">Exponentiable</a> :A) (<a href="#radical-class">Radical</a> :A) &rArr; <a href="#elementary-class">Elementary</a> :A</code>


`Elementary` is a marker class, providing `Reciprocable`, `Polar`, `Trigonometric`, `Exponentiable`, and `Radical`.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#elementary-class">Elementary</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#elementary-class">Elementary</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#elementary-class">Elementary</a> <a href="#f64-type">F64</a></code>
- <code><a href="#elementary-class">Elementary</a> <a href="#f32-type">F32</a></code>

</details>



***

#### <a href="#exponentiable-class"><code>Exponentiable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L72-L84">src</a></sub></sup><a name="exponentiable-class"></a>
<code><a href="#exponentiable-class">Exponentiable</a> :A</code>


Exponential maps obeying:

    (* (exp x) (exp y)) = (exp (+ x y))
    (exp (ln x)) = x = (ln (exp x))
    (log b x) = (/ (ln x) (ln b))
    (pow x y) = (exp (* y (ln x)))


Methods:
- <code>EXP :: (:A &rarr; :A)</code>
- <code>POW :: (:A &rarr; :A &rarr; :A)</code>
- <code>LN :: (:A &rarr; :A)</code>
- <code>LOG :: (:A &rarr; :A &rarr; :A)</code>
- <code>EE :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#big-float-type">Big-Float</a></code>
- <code>(<a href="#exponentiable-class">Exponentiable</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#exponentiable-class">Exponentiable</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code>(<a href="#num-class">Num</a> :A) (<a href="#exponentiable-class">Exponentiable</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#exponentiable-class">Exponentiable</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#elementary-class">Elementary</a> :A &rArr; <a href="#exponentiable-class">Exponentiable</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#f64-type">F64</a></code>
- <code><a href="#exponentiable-class">Exponentiable</a> <a href="#f32-type">F32</a></code>

</details>



***

#### <a href="#polar-class"><code>Polar</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L93-L103">src</a></sub></sup><a name="polar-class"></a>
<code>(<a href="#complexcomponent-class">ComplexComponent</a> :A) (<a href="#num-class">Num</a> :A) &rArr; <a href="#polar-class">Polar</a> :A</code>


This type class includes `ComplexComponent` types that admit a magnitude and phase.

For a complex number `z = (complex x y)`, the following identities hold:

    z = (* (magnitude z) (exp (* ii (phase z))))
    (polar z) = (Tuple (magnitude z) (phase z))
    (phase z) = (atan2 y x)


Methods:
- <code>PHASE :: ((<a href="#complex-type">Complex</a> :A) &rarr; :A)</code>
- <code>POLAR :: ((<a href="#complex-type">Complex</a> :A) &rarr; (<a href="#tuple-type">Tuple</a> :A :A))</code>
<details>
<summary>Instances</summary>

- <code><a href="#polar-class">Polar</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#polar-class">Polar</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#polar-class">Polar</a> <a href="#f64-type">F64</a></code>
- <code><a href="#polar-class">Polar</a> <a href="#f32-type">F32</a></code>

</details>



***

#### <a href="#radical-class"><code>Radical</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L86-L91">src</a></sub></sup><a name="radical-class"></a>
<code><a href="#radical-class">Radical</a> :A</code>


Obeys:

    (^ (sqrt x) 2) = x = (^^ (nth-root n x) n)

Methods:
- <code>NTH-ROOT :: (<a href="#integer-type">Integer</a> &rarr; :A &rarr; :A)</code>
- <code>SQRT :: (:A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#radical-class">Radical</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#radical-class">Radical</a> <a href="#big-float-type">Big-Float</a></code>
- <code>(<a href="#radical-class">Radical</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#exponentiable-class">Exponentiable</a> :A) &rArr; <a href="#radical-class">Radical</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code>(<a href="#num-class">Num</a> :A) (<a href="#radical-class">Radical</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#exponentiable-class">Exponentiable</a> :A) &rArr; <a href="#radical-class">Radical</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#elementary-class">Elementary</a> :A &rArr; <a href="#radical-class">Radical</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#radical-class">Radical</a> <a href="#f64-type">F64</a></code>
- <code><a href="#radical-class">Radical</a> <a href="#f32-type">F32</a></code>

</details>



***

#### <a href="#trigonometric-class"><code>Trigonometric</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L44-L52">src</a></sub></sup><a name="trigonometric-class"></a>
<code><a href="#trigonometric-class">Trigonometric</a> :A</code>


Standard circular functions and their inverses.

Methods:
- <code>SIN :: (:A &rarr; :A)</code>
- <code>COS :: (:A &rarr; :A)</code>
- <code>TAN :: (:A &rarr; :A)</code>
- <code>ASIN :: (:A &rarr; :A)</code>
- <code>ACOS :: (:A &rarr; :A)</code>
- <code>ATAN :: (:A &rarr; :A)</code>
- <code>PI :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#big-float-type">Big-Float</a></code>
- <code>(<a href="#trigonometric-class">Trigonometric</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#radical-class">Radical</a> :A) &rArr; <a href="#trigonometric-class">Trigonometric</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code>(<a href="#num-class">Num</a> :A) (<a href="#trigonometric-class">Trigonometric</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#radical-class">Radical</a> :A) &rArr; <a href="#trigonometric-class">Trigonometric</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#elementary-class">Elementary</a> :A &rArr; <a href="#trigonometric-class">Trigonometric</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#f64-type">F64</a></code>
- <code><a href="#trigonometric-class">Trigonometric</a> <a href="#f32-type">F32</a></code>

</details>



***

### Values

#### <a href="#acosh-value"><code>(ACOSH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L147-L148">src</a></sub></sup><a name="acosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">Elementary</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#asinh-value"><code>(ASINH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L143-L144">src</a></sub></sup><a name="asinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">Elementary</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#atan2-value"><code>(ATAN2 Y X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L60-L70">src</a></sub></sup><a name="atan2-value"></a>
<code>&forall; :A. (<a href="#ord-class">Ord</a> :A) (<a href="#trigonometric-class">Trigonometric</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

Computes the two-argument arctangent of `y` and `x`, which is roughly the same
as `(atan (/ y x))` when defined and accounting for the quadrant of
the point $(\mathtt{x},\mathtt{y})$.



***

#### <a href="#atanh-value"><code>(ATANH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L151-L152">src</a></sub></sup><a name="atanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">Elementary</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#cis-value"><code>(CIS Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L113-L120">src</a></sub></sup><a name="cis-value"></a>
<code>&forall; :A. (<a href="#trigonometric-class">Trigonometric</a> :A) (<a href="#complexcomponent-class">ComplexComponent</a> :A) &rArr; (:A &rarr; (<a href="#complex-type">Complex</a> :A))</code>

A point on the complex unit circle:


    (cis z) := (exp (complex 0 z))
             = (complex (cos z) (sin z))




***

#### <a href="#cosh-value"><code>(COSH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L135-L136">src</a></sub></sup><a name="cosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">Elementary</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#magnitude-value"><code>(MAGNITUDE Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L105-L110">src</a></sub></sup><a name="magnitude-value"></a>
<code>&forall; :A. (<a href="#radical-class">Radical</a> :A) (<a href="#complexcomponent-class">ComplexComponent</a> :A) &rArr; ((<a href="#complex-type">Complex</a> :A) &rarr; :A)</code>

The magnitude of a complex number. For `z = x + yi`,


    (magnitude z) = (sqrt (+ (^ x 2) (^ y 2)))



***

#### <a href="#sincos-value"><code>(SINCOS X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L55-L57">src</a></sub></sup><a name="sincos-value"></a>
<code>&forall; :A. <a href="#trigonometric-class">Trigonometric</a> :A &rArr; (:A &rarr; (<a href="#tuple-type">Tuple</a> :A :A))</code>

Computes the sine and cosine of X.



***

#### <a href="#sinh-value"><code>(SINH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L131-L132">src</a></sub></sup><a name="sinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">Elementary</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#tanh-value"><code>(TANH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L139-L140">src</a></sub></sup><a name="tanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">Elementary</a> :A &rArr; (:A &rarr; :A)</code>


***

# Package `COALTON/MATH/FRACTION`<a name="coalton/math/fraction-package"></a>

### Values

#### <a href="#denominator-value"><code>(DENOMINATOR Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L41-L44">src</a></sub></sup><a name="denominator-value"></a>
<code>(<a href="#fraction-type">Fraction</a> &rarr; <a href="#integer-type">Integer</a>)</code>

The denominator of a fraction.



***

#### <a href="#mkfraction-value"><code>(MKFRACTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L30-L32">src</a></sub></sup><a name="mkfraction-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#fraction-type">Fraction</a>)</code>


***

#### <a href="#numerator-value"><code>(NUMERATOR Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L35-L38">src</a></sub></sup><a name="numerator-value"></a>
<code>(<a href="#fraction-type">Fraction</a> &rarr; <a href="#integer-type">Integer</a>)</code>

The numerator of a fraction.



***

# Package `COALTON/MATH/HYPERDUAL`<a name="coalton/math/hyperdual-package"></a>


An implementation of hyperdual numbers for second-order and
multivariate automatic differentiation.

 ——————————————————————————————————————————————–

For univariate differentiation of a function `f` at a point `x`, apply
`f` to `(Hyperdual x 1 1 0)`. The result will be
`(Hyperdual f(x) df/dx(x) df/dx(x) d²f/dx²(x))`.

You may also use the convenience functions `d-x` and `d-xx` to compute
the first and second derivatives as `(d-x f x)` and `(d-xx f x)`.

 ——————————————————————————————————————————————–

For multivariate differentiation of a function `f` at a point `(x,
y)`, an application of `f` to `(Hyperdual x 1 0 0)` and 
`(Hyperdual y 0 1 0)` will result in  
`(Hyperdual f(x, y) ∂f/∂x(x, y) ∂f/∂y(x, y) ∂²f/∂x∂y(x, y))`. 

Second derivatives of a single argument `xi` of `f` are computed in
the same manner as the univariate case, except the values 
`(Hyperdual xj 0 0 0)` are passed for the remaining arguments, j ≠ i.

You may also use the convenience functions `partial-x`, `partial-y`,
`gradient`, `partial-xx`, `partial-xy`, `partial-yy`, `hessian`, and
`laplacian`, to compute partials of bivariate functions.

 ——————————————————————————————————————————————–

The following list of identities describe the theory of hyperdual numbers.

 :: given (∀i∀j((i ≠ j) → (εᵢεⱼ ≠ 0)) ∧ ∀i(εᵢ² = 0))

 ——————————————————————————————————————————————–

 :: univariate identities

 (1) f(a + bε₁ + cε₂ + dε₁ε₂)
      = f(a) + (bε₁+cε₂+dε₁ε₂)f'(a) + bcε₁ε₂f''(a)
      = f(a) + bf'(a)ε₁ + cf'(a)ε₂ + [df'(a) + bcf''(a)]ε₁ε₂

 (2) f(x + ε₁ + ε₂)
      = f(x) + f'(x)ε₁ + f'(x)ε₂ + f''(x)ε₁ε₂

 :: multivariate identities

 (3) f(a₁ + b₁ε₁ + c₁ε₂ + d₁ε₁ε₂, a₂ + b₂ε₁ + c₂ε₂ + d₂ε₁ε₂)
      = f(a₁, a₂) + (b₁ε₁ + c₁ε₂ + d₁ε₁ε₂)∂f/∂x(a₁, a₂) + b₁c₁ε₁ε₂∂²f/∂x²(a₁, a₂)
        + (b₂ε₁ + c₂ε₂ + d₂ε₁ε₂)∂f/∂y(a₁, a₂) + b₂c₂ε₁ε₂∂²f/∂y² 
        + (b₁c₂ + b₂c₁)ε₁ε₂∂²f/∂x∂y(a₁, a₂)
      = f(a₁, a₂) 
        + (b₁∂f/∂x(a₁, a₂) + b₂∂f/∂y(a₁, a₂))ε₁ 
        + (c₁∂f/∂x(a₁, a₂) + c₂∂f/∂y(a₁, a₂))ε₂
        + (d₁∂f/∂x(a₁, a₂) + d₂∂f/∂y(a₁, a₂) 
           + b₁c₁∂²f/∂x²(a₁, a₂) + b₂c₂∂²f/∂x²(a₁, a₂) 
           + (b₁c₂ + b₂c₁)∂²f/∂x∂y(a₁, a₂))ε₁ε₂

 (4) f(x + ε₁ + ε₂, y)
      = f(x, y) + ∂f/∂x(x, y)ε₁ + ∂f/∂x(x, y)ε₂ + ∂²f/∂x²(x, y)ε₁ε₂

 (5) f(x + ε₁, y + ε₂)
      = f(x, y) + ∂f/∂x(x, y)ε₁ + ∂f/∂y(x, y)ε₂ + ∂²f/∂x∂y(x, y)ε₁ε₂

 (6) f(x, y + ε₁ + ε₂)
      = f(x, y) + ∂f/∂y(x, y)ε₁ + ∂f/∂y(x, y)ε₂ + ∂²f/∂y²(x, y)ε₁ε₂

 :: equivalently

 (1) (f (Hyperdual a b c d))
      = (Hyperdual
         (f a)
         (* b (f' a))
         (* c (f' a))
         (+ (* d (f' a)) (* (* b c) (f'' a))))

 (2) (f (Hyperdual x 1 1 0))
      = (Hyperdual (f x) (f' x) (f' x) (f'' x))

 (3) (f (Hyperdual a1 b1 c1 d1) (Hyperdual a2 b2 c2 d2))
      = (Hyperdual
         (f a1 a2)
         (+ (* b1 (∂f/∂x a1 a2)) (* b2 (∂f/∂y a1 a2)))
         (+ (* c1 (∂f/∂x a1 a2)) (* c2 (∂f/∂y a1 a2)))
         (+ (+ (* d1 (∂f/∂x a1 a2)) (* d2 (∂f/∂y a1 a2)))
            (+ (* (* b1 c1) (∂²f/∂x² a1 a2)) (* (* b2 c2) (∂²f/∂y² a1 a2)))
            (* (+ (* b1 c2) (* b2 c1)) (∂²f/∂x∂y a1 a2)))

 (4) (f (Hyperdual x 1 1 0) (Hyperdual y 0 0 0))
      = (Hyperdual (f x y) (∂f/∂x x y) (∂f/∂x x y) (∂²f/∂x² x y))

 (5) (f (Hyperdual x 1 0 0) (Hyperdual y 0 1 0))
      = (Hyperdual (f x y) (∂f/∂x x y) (∂f/∂y x y) (∂²f/∂x∂y x y))

 (6) (f (Hyperdual x 0 0 0) (Hyperdual y 1 1 0))
      = (Hyperdual (f x y) (∂f/∂x x y) (∂f/∂x x y) (∂²f/∂x² x y))

### Structs

#### <a href="#hyperdual-type"><code>Hyperdual :A</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L161-L177">src</a></sub></sup><a name="hyperdual-type"></a>

Representation of a hyperdual number in the form `a + bε₁ + cε₂ + dε₁ε₂` where `a`, `b`, `c`, and `d` are real numbers and `ε₁` and `ε₂` satisfy `εᵢ² = 0` and `ε₁ε₂ != 0`.

Note: `Eq`, and `Ord` and `Hash` only make use of the primal component.

<details>
<summary>Instances</summary>

- <code>(<a href="#exponentiable-class">Exponentiable</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#exponentiable-class">Exponentiable</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code>(<a href="#radical-class">Radical</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#exponentiable-class">Exponentiable</a> :A) &rArr; <a href="#radical-class">Radical</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code>(<a href="#trigonometric-class">Trigonometric</a> :A) (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#radical-class">Radical</a> :A) &rArr; <a href="#trigonometric-class">Trigonometric</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#complexcomponent-class">ComplexComponent</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#into-class">Into</a> :A (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#num-class">Num</a> :A &rArr; <a href="#num-class">Num</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#ord-class">Ord</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#reciprocable-class">Reciprocable</a> :A &rArr; <a href="#reciprocable-class">Reciprocable</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>

</details>



***

### Values

#### <a href="#d-x-value"><code>(D-X F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L357-L358">src</a></sub></sup><a name="d-x-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A)</code>

Compute f'(x).



***

#### <a href="#d-xx-value"><code>(D-XX F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L360-L362">src</a></sub></sup><a name="d-xx-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A)</code>

Compute f''(x).



***

#### <a href="#gradient-value"><code>(GRADIENT F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L373-L378">src</a></sub></sup><a name="gradient-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; (<a href="#list-type">List</a> :A))</code>

Compute the gradient (∂f/∂x, ∂f/∂y) at the point (x, y).



***

#### <a href="#hessian-value"><code>(HESSIAN F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a></sub></sup><a name="hessian-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; (<a href="#list-type">List</a> :A))</code>

Compute the flat Hessian (∂²f/∂x², ∂²f/∂x∂y, ∂²f/∂y∂x, ∂²f/∂y²) at the point (x, y).



***

#### <a href="#laplacian-value"><code>(LAPLACIAN F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a></sub></sup><a name="laplacian-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute the Laplacian ∂²f/∂x² + ∂²f/∂y² at the point (x, y).



***

#### <a href="#partial-x-value"><code>(PARTIAL-X F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L364-L367">src</a></sub></sup><a name="partial-x-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂f/∂x(x, y).



***

#### <a href="#partial-xx-value"><code>(PARTIAL-XX F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L381-L384">src</a></sub></sup><a name="partial-xx-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂²f/∂x²(x, y).



***

#### <a href="#partial-xy-value"><code>(PARTIAL-XY F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a></sub></sup><a name="partial-xy-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂²f/∂x∂y(x, y).



***

#### <a href="#partial-y-value"><code>(PARTIAL-Y F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L369-L372">src</a></sub></sup><a name="partial-y-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂f/∂y(x, y).



***

#### <a href="#partial-yy-value"><code>(PARTIAL-YY F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a></sub></sup><a name="partial-yy-value"></a>
<code>&forall; :A. <a href="#num-class">Num</a> :A &rArr; (((<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A) &rarr; (<a href="#hyperdual-type">Hyperdual</a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂²f/∂y²(x, y).



***

# Package `COALTON/MATH/INTEGRAL`<a name="coalton/math/integral-package"></a>

### Classes

#### <a href="#integral-class"><code>Integral</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L61-L64">src</a></sub></sup><a name="integral-class"></a>
<code>(<a href="#remainder-class">Remainder</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; <a href="#integral-class">Integral</a> :A</code>


Integral is a number that is either even or odd where `div` and `quot`
are floored and truncated division, respectively.

Methods:
- <code>TOINTEGER :: (:A &rarr; <a href="#integer-type">Integer</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#integral-class">Integral</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u64-type">U64</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u32-type">U32</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u16-type">U16</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#u8-type">U8</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i64-type">I64</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i32-type">I32</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i16-type">I16</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#i8-type">I8</a></code>
- <code><a href="#integral-class">Integral</a> <a href="#integer-type">Integer</a></code>

</details>



***

#### <a href="#remainder-class"><code>Remainder</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L46-L59">src</a></sub></sup><a name="remainder-class"></a>
<code><a href="#num-class">Num</a> :A &rArr; <a href="#remainder-class">Remainder</a> :A</code>


Remainder is typically an integral domain satisfying:

```
a = (+ (* b (quot a b)) (rem a b))
a = (+ (* b (div a b)) (mod a b))
```


Methods:
- <code>QUOT :: (:A &rarr; :A &rarr; :A)</code>
- <code>REM :: (:A &rarr; :A &rarr; :A)</code>
- <code>QUOTREM :: (:A &rarr; :A &rarr; (<a href="#tuple-type">Tuple</a> :A :A))</code>
- <code>DIV :: (:A &rarr; :A &rarr; :A)</code>
- <code>MOD :: (:A &rarr; :A &rarr; :A)</code>
- <code>DIVMOD :: (:A &rarr; :A &rarr; (<a href="#tuple-type">Tuple</a> :A :A))</code>
<details>
<summary>Instances</summary>

- <code><a href="#remainder-class">Remainder</a> <a href="#f64-type">F64</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#f32-type">F32</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u64-type">U64</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u32-type">U32</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u16-type">U16</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#u8-type">U8</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i64-type">I64</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i32-type">I32</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i16-type">I16</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#i8-type">I8</a></code>
- <code><a href="#remainder-class">Remainder</a> <a href="#integer-type">Integer</a></code>

</details>



***

### Values

#### <a href="#even?-value"><code>(EVEN? N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L83-L85">src</a></sub></sup><a name="even?-value"></a>
<code>&forall; :A. <a href="#integral-class">Integral</a> :A &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is N even?



***

#### <a href="#gcd-value"><code>(GCD A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L126-L129">src</a></sub></sup><a name="gcd-value"></a>
<code>&forall; :A. (<a href="#remainder-class">Remainder</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The greatest common divisor of A and B.



***

#### <a href="#ilog-value"><code>(ILOG B X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L151-L167">src</a></sub></sup><a name="ilog-value"></a>
<code>&forall; :A. <a href="#integral-class">Integral</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

The floor of the logarithm with base B > 1 of X >= 1.



***

#### <a href="#integral->num-value"><code>(INTEGRAL-&gt;NUM N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L68-L70">src</a></sub></sup><a name="integral->num-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">Integral</a> :A) (<a href="#num-class">Num</a> :B) &rArr; (:A &rarr; :B)</code>

Converts any Integral N into any Num.



***

#### <a href="#isqrt-value"><code>(ISQRT X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L170-L181">src</a></sub></sup><a name="isqrt-value"></a>
<code>&forall; :A. <a href="#integral-class">Integral</a> :A &rArr; (:A &rarr; :A)</code>

The floor of the square root of N > 0.



***

#### <a href="#lcm-value"><code>(LCM A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L132-L136">src</a></sub></sup><a name="lcm-value"></a>
<code>&forall; :A. (<a href="#remainder-class">Remainder</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The least common multiple of A and B.



***

#### <a href="#lsh-value"><code>(LSH X N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L78-L80">src</a></sub></sup><a name="lsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">Integral</a> :B) (<a href="#bits-class">Bits</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Left shift X by N



***

#### <a href="#odd?-value"><code>(ODD? N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L88-L90">src</a></sub></sup><a name="odd?-value"></a>
<code>&forall; :A. <a href="#integral-class">Integral</a> :A &rArr; (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is N odd?



***

#### <a href="#rsh-value"><code>(RSH X N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L73-L75">src</a></sub></sup><a name="rsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">Integral</a> :B) (<a href="#bits-class">Bits</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Right shift X by N



***

#### <a href="#^-value"><code>(^ BASE POWER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L93-L116">src</a></sub></sup><a name="^-value"></a>
<code>&forall; :A :B. (<a href="#num-class">Num</a> :A) (<a href="#integral-class">Integral</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a non-negative POWER.



***

#### <a href="#^^-value"><code>(^^ BASE POWER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L119-L123">src</a></sub></sup><a name="^^-value"></a>
<code>&forall; :A :B. (<a href="#reciprocable-class">Reciprocable</a> :A) (<a href="#integral-class">Integral</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a signed POWER.



***

# Package `COALTON/MATH/REAL`<a name="coalton/math/real-package"></a>

### Structs

#### <a href="#quantization-type"><code>Quantization :A</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L223-L234">src</a></sub></sup><a name="quantization-type"></a>

Represents an integer quantization of `:a`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#quantization-type">Quantization</a> :A)</code>

</details>



***

### Classes

#### <a href="#quantizable-class"><code>Quantizable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L45-L65">src</a></sub></sup><a name="quantizable-class"></a>
<code><a href="#quantizable-class">Quantizable</a> :A</code>


The representation of a type that allows for rounding operations


    max x such that (floor x) <= x
    min x such that (ceiling x) <= x

And


    (proper x) = (Tuple (truncate x) (- x (truncate x)))


where


    (truncate x) = (* (sign x) (floor (abs x))


Methods:
- <code>PROPER :: (:A &rarr; (<a href="#tuple-type">Tuple</a> <a href="#integer-type">Integer</a> :A))</code>
- <code>FLOOR :: (:A &rarr; <a href="#integer-type">Integer</a>)</code>
- <code>CEILING :: (:A &rarr; <a href="#integer-type">Integer</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#quantizable-class">Quantizable</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#f64-type">F64</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#f32-type">F32</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#i64-type">I64</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#i32-type">I32</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#i8-type">I8</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#u64-type">U64</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#u32-type">U32</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#u8-type">U8</a></code>
- <code><a href="#quantizable-class">Quantizable</a> <a href="#bit-type">Bit</a></code>

</details>



***

#### <a href="#rational-class"><code>Rational</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L71-L84">src</a></sub></sup><a name="rational-class"></a>
<code>(<a href="#real-class">Real</a> :A) (<a href="#ord-class">Ord</a> :A) &rArr; <a href="#rational-class">Rational</a> :A</code>


Any number that can be exactly represented by a fraction, or is not finite.

If a rational can be converted from a fraction it must satisfy:


    (into (to-fraction x)) = x
    (into (best-approx x)) = x


Furthermore, `best-approx` returns the simplest fraction, and both functions may be partial.


Methods:
- <code>TO-FRACTION :: (:A &rarr; <a href="#fraction-type">Fraction</a>)</code>
- <code>BEST-APPROX :: (:A &rarr; <a href="#fraction-type">Fraction</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#rational-class">Rational</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#f64-type">F64</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#f32-type">F32</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#i64-type">I64</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#i32-type">I32</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#i8-type">I8</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#u64-type">U64</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#u32-type">U32</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#u8-type">U8</a></code>
- <code><a href="#rational-class">Rational</a> <a href="#bit-type">Bit</a></code>

</details>



***

#### <a href="#real-class"><code>Real</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L67-L69">src</a></sub></sup><a name="real-class"></a>
<code>(<a href="#quantizable-class">Quantizable</a> :A) (<a href="#num-class">Num</a> :A) &rArr; <a href="#real-class">Real</a> :A</code>


A real number that can be approximated with abs(real-approx x - x) < 2^-n.

Methods:
- <code>REAL-APPROX :: (<a href="#ufix-type">UFix</a> &rarr; :A &rarr; <a href="#fraction-type">Fraction</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#real-class">Real</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#real-class">Real</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#real-class">Real</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#real-class">Real</a> <a href="#f64-type">F64</a></code>
- <code><a href="#real-class">Real</a> <a href="#f32-type">F32</a></code>
- <code><a href="#real-class">Real</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#real-class">Real</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#real-class">Real</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#real-class">Real</a> <a href="#i64-type">I64</a></code>
- <code><a href="#real-class">Real</a> <a href="#i32-type">I32</a></code>
- <code><a href="#real-class">Real</a> <a href="#i8-type">I8</a></code>
- <code><a href="#real-class">Real</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#real-class">Real</a> <a href="#u64-type">U64</a></code>
- <code><a href="#real-class">Real</a> <a href="#u32-type">U32</a></code>
- <code><a href="#real-class">Real</a> <a href="#u8-type">U8</a></code>
- <code><a href="#real-class">Real</a> <a href="#bit-type">Bit</a></code>

</details>



***

### Values

#### <a href="#ceiling/-value"><code>(CEILING/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L284-L286">src</a></sub></sup><a name="ceiling/-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a>)</code>

Divide two integers and compute the ceiling of the quotient.



***

#### <a href="#exact/-value"><code>(EXACT/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L266-L268">src</a></sub></sup><a name="exact/-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#fraction-type">Fraction</a>)</code>

Exactly divide two integers and produce a fraction.



***

#### <a href="#floor/-value"><code>(FLOOR/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L279-L281">src</a></sub></sup><a name="floor/-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a>)</code>

Divide two integers and compute the floor of the quotient.



***

#### <a href="#fromfrac-value"><code>(FROMFRAC Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L294-L300">src</a></sub></sup><a name="fromfrac-value"></a>
<code>&forall; :A. <a href="#dividable-class">Dividable</a> <a href="#integer-type">Integer</a> :A &rArr; (<a href="#fraction-type">Fraction</a> &rarr; :A)</code>

Converts a fraction to a target type.

Specifically, target types must have an instance of `Dividable Integer :a`.

This conversion may result in loss of fidelity.



***

#### <a href="#inexact/-value"><code>(INEXACT/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L272-L276">src</a></sub></sup><a name="inexact/-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#f64-type">F64</a>)</code>

Compute the quotient of integers as a double-precision float.

Note: This does *not* divide double-float arguments.



***

#### <a href="#quantize-value"><code>(QUANTIZE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L237-L245">src</a></sub></sup><a name="quantize-value"></a>
<code>&forall; :A. <a href="#real-class">Real</a> :A &rArr; (:A &rarr; (<a href="#quantization-type">Quantization</a> :A))</code>

Given X, (QUANTIZE X) will return the least integer greater or equal to X,
and the greatest integer less than or equal to X, along with their respective
remainders expressed as values of type of X.



***

#### <a href="#round-value"><code>(ROUND X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L93-L121">src</a></sub></sup><a name="round-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">Quantizable</a> :A) (<a href="#num-class">Num</a> :A) &rArr; (:A &rarr; <a href="#integer-type">Integer</a>)</code>

Return the nearest integer to X, with ties breaking towards even numbers.



***

#### <a href="#round-half-down-value"><code>(ROUND-HALF-DOWN X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L253-L255">src</a></sub></sup><a name="round-half-down-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">Quantizable</a> :A) (<a href="#num-class">Num</a> :A) &rArr; (:A &rarr; <a href="#integer-type">Integer</a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <a href="#round-half-up-value"><code>(ROUND-HALF-UP X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L248-L250">src</a></sub></sup><a name="round-half-up-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">Quantizable</a> :A) (<a href="#num-class">Num</a> :A) &rArr; (:A &rarr; <a href="#integer-type">Integer</a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <a href="#round/-value"><code>(ROUND/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L289-L291">src</a></sub></sup><a name="round/-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a>)</code>

Divide two integers and round the quotient.



***

#### <a href="#safe/-value"><code>(SAFE/ X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L258-L262">src</a></sub></sup><a name="safe/-value"></a>
<code>&forall; :A :B. (<a href="#num-class">Num</a> :A) (<a href="#dividable-class">Dividable</a> :A :B) &rArr; (:A &rarr; :A &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Safely divide X by Y, returning None if Y is zero.



***

#### <a href="#truncate-value"><code>(TRUNCATE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L87-L90">src</a></sub></sup><a name="truncate-value"></a>
<code>&forall; :A. <a href="#quantizable-class">Quantizable</a> :A &rArr; (:A &rarr; <a href="#integer-type">Integer</a>)</code>

Returns the integer closest/equal to `x` that is within `0` and `x`.



***

# Package `COALTON/MONAD/CLASSES`<a name="coalton/monad/classes-package"></a>

### Classes

#### <a href="#liftto-class"><code>LiftTo</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/classes.lisp#L29-L31">src</a></sub></sup><a name="liftto-class"></a>
<code>(<a href="#monad-class">Monad</a> :A) (<a href="#monad-class">Monad</a> :B) &rArr; <a href="#liftto-class">LiftTo</a> :A :B</code>


A monad, :m, which can be lifted to :r. Typically because :m is a MonadTransformer or :m and :r are the same.

Methods:
- <code>LIFT-TO :: ((:A :C) &rarr; (:B :C))</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#monad-class">Monad</a> :A) (<a href="#monad-class">Monad</a> (:B :A)) (<a href="#monadtransformer-class">MonadTransformer</a> :B) &rArr; <a href="#liftto-class">LiftTo</a> :A (:B :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#liftto-class">LiftTo</a> :A :A</code>

</details>



***

#### <a href="#monadenvironment-class"><code>MonadEnvironment</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/classes.lisp#L41-L51">src</a></sub></sup><a name="monadenvironment-class"></a>
<code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :B :A</code>


A monad capable of a function in a computation environment.

Methods:
- <code>ASK :: (:A :B)</code><br/>Retrieves the computation environment.
- <code>LOCAL :: ((:B &rarr; :B) &rarr; (:A :C) &rarr; (:A :C))</code><br/>Run a computation in a modified environment.
- <code>ASKS :: ((:B &rarr; :D) &rarr; (:A :D))</code><br/>Retrieve an aspect of the computation environment.
<details>
<summary>Instances</summary>

- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A (<a href="#loopt-type">LoopT</a> :B)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A (<a href="#optionalt-type">OptionalT</a> :B)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A ((<a href="#resultt-type">ResultT</a> :C) :B)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :B ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A ((<a href="#statet-type">StateT</a> :C) :B)</code>

</details>



***

#### <a href="#monadstate-class"><code>MonadState</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/classes.lisp#L53-L63">src</a></sub></sup><a name="monadstate-class"></a>
<code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadstate-class">MonadState</a> :B :A</code>


A monad capable of tracking state in a computation.

Methods:
- <code>GET :: (:A :B)</code><br/>Retrieve the computation state.
- <code>PUT :: (:B &rarr; (:A <a href="#unit-type">Unit</a>))</code><br/>Set the state to a given value.
- <code>MODIFY :: ((:B &rarr; :B) &rarr; (:A <a href="#unit-type">Unit</a>))</code><br/>Modify the computation state, discarding the old state.
<details>
<summary>Instances</summary>

- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A (<a href="#loopt-type">LoopT</a> :B)</code>
- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A (<a href="#optionalt-type">OptionalT</a> :B)</code>
- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A ((<a href="#resultt-type">ResultT</a> :C) :B)</code>
- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A ((<a href="#envt-type">EnvT</a> :C) :B)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadstate-class">MonadState</a> :B ((<a href="#statet-type">StateT</a> :B) :A)</code>

</details>



***

# Package `COALTON/MONAD/ENVIRONMENT`<a name="coalton/monad/environment-package"></a>

### Types

#### <a href="#env-type"><code>Env</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L49-L51">src</a></sub></sup><a name="env-type"></a>
- <code>(Env (:A &rarr; :B))</code>

A computation that runs inside an :env environment.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">Applicative</a> (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#monad-class">Monad</a> (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A (<a href="#env-type">Env</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#env-type">Env</a> :A :B)</code>

</details>



***

#### <a href="#envt-type"><code>EnvT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L117-L120">src</a></sub></sup><a name="envt-type"></a>
- <code>(EnvT (:A &rarr; (:B :C)))</code>

A monadic computation that runs inside an :env environment.
Equivalent to Haskell's ReaderT monad https://hackage.haskell.org/package/transformers-0.6.1.2/docs/Control-Monad-Trans-Reader.html

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">Applicative</a> :A &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :B ((<a href="#envt-type">EnvT</a> :B) :A)</code>
- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A ((<a href="#envt-type">EnvT</a> :C) :B)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> (<a href="#envt-type">EnvT</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#envt-type">EnvT</a> :A) :B) :C)</code>

</details>



***

### Values

#### <a href="#asks-env-value"><code>(ASKS-ENV FENV-&gt;A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L73-L76">src</a></sub></sup><a name="asks-env-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#env-type">Env</a> :A :B))</code>

Retrieve an aspect of the computation environment.



***

#### <a href="#asks-envt-value"><code>(ASKS-ENVT FENV-&gt;A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L137-L140">src</a></sub></sup><a name="asks-envt-value"></a>
<code>&forall; :A :B :C. <a href="#applicative-class">Applicative</a> :C &rArr; ((:A &rarr; :B) &rarr; (((<a href="#envt-type">EnvT</a> :A) :C) :B))</code>

Retrieve an aspect of the computation environment.



***

#### <a href="#lift-envt-value"><code>(LIFT-ENVT M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L161-L162">src</a></sub></sup><a name="lift-envt-value"></a>
<code>&forall; :A :B :C. ((:A :B) &rarr; (((<a href="#envt-type">EnvT</a> :C) :A) :B))</code>


***

#### <a href="#local-env-value"><code>(LOCAL-ENV FENV MENV)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L61-L63">src</a></sub></sup><a name="local-env-value"></a>
<code>&forall; :A :B. ((:A &rarr; :A) &rarr; (<a href="#env-type">Env</a> :A :B) &rarr; (<a href="#env-type">Env</a> :A :B))</code>


***

#### <a href="#local-envt-value"><code>(LOCAL-ENVT FENV (ENVT FENV-&gt;A))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L124-L127">src</a></sub></sup><a name="local-envt-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :A) &rarr; (((<a href="#envt-type">EnvT</a> :A) :B) :C) &rarr; (((<a href="#envt-type">EnvT</a> :A) :B) :C))</code>

Run a computation in a modified environment.



***

#### <a href="#map-envt-value"><code>(MAP-ENVT FMA-&gt;NB (ENVT FENV-&gt;MA))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L155-L157">src</a></sub></sup><a name="map-envt-value"></a>
<code>&forall; :A :B :C :D :E. (((:A :B) &rarr; (:C :D)) &rarr; (((<a href="#envt-type">EnvT</a> :E) :A) :B) &rarr; (((<a href="#envt-type">EnvT</a> :E) :C) :D))</code>


***

#### <a href="#run-env-value"><code>(RUN-ENV (ENV ENV-COMPUTATION) ENV)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L55-L57">src</a></sub></sup><a name="run-env-value"></a>
<code>&forall; :A :B. ((<a href="#env-type">Env</a> :A :B) &rarr; :A &rarr; :B)</code>

Run a Env inside an environment.



***

#### <a href="#run-envt-value"><code>(RUN-ENVT (ENVT FENV-&gt;VAL) ENV)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L144-L146">src</a></sub></sup><a name="run-envt-value"></a>
<code>&forall; :A :B :C. ((((<a href="#envt-type">EnvT</a> :A) :B) :C) &rarr; :A &rarr; (:B :C))</code>

Run a EnvT inside an environment.



***

#### <a href="#ask-env-value"><code>ASK-ENV</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L67-L69">src</a></sub></sup><a name="ask-env-value"></a>
<code>&forall; :A. (<a href="#env-type">Env</a> :A :A)</code>

Retrieve the computation environment.



***

#### <a href="#ask-envt-value"><code>ASK-ENVT</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L131-L133">src</a></sub></sup><a name="ask-envt-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :B &rArr; (((<a href="#envt-type">EnvT</a> :A) :B) :A)</code>

Retrieve the computation environment.



***

# Package `COALTON/MONAD/FREE`<a name="coalton/monad/free-package"></a>

### Types

#### <a href="#free-type"><code>Free</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L44-L49">src</a></sub></sup><a name="free-type"></a>
- <code>(Free (:A ((<a href="#free-type">Free</a> :A) :B)))</code>
- <code>(Val :C)</code>

`Free :f` gives you a Monad instance for any `Functor :f`.

References: [here](https://serokell.io/blog/introduction-to-free-monads) and [here](https://www.tweag.io/blog/2018-02-05-free-monads/)

<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">Foldable</a> :A &rArr; <a href="#foldable-class">Foldable</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#applicative-class">Applicative</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#monad-class">Monad</a> (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#monadfree-class">MonadFree</a> :A (<a href="#free-type">Free</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> ((<a href="#free-type">Free</a> :A) :B)</code>
- <code><a href="#traversable-class">Traversable</a> :A &rArr; <a href="#traversable-class">Traversable</a> (<a href="#free-type">Free</a> :A)</code>

</details>



***

### Classes

#### <a href="#monadfree-class"><code>MonadFree</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L28-L31">src</a></sub></sup><a name="monadfree-class"></a>
<code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadfree-class">MonadFree</a> :B :A</code>


A free monad is a monad, :m, which is capable of 'wrapping'
around functors, and then 'unwrapping' them later using `>>=`.

Methods:
- <code>WRAP :: ((:B (:A :C)) &rarr; (:A :C))</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#monad-class">Monad</a> :B) &rArr; <a href="#monadfree-class">MonadFree</a> :A ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#monadfree-class">MonadFree</a> :A (<a href="#free-type">Free</a> :A)</code>

</details>



***

### Values

#### <a href="#foldfree-value"><code>(FOLDFREE NAT FR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L55-L60">src</a></sub></sup><a name="foldfree-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">Monad</a> :C &rArr; (((:A ((<a href="#free-type">Free</a> :A) :B)) &rarr; (:C ((<a href="#free-type">Free</a> :A) :B))) &rarr; ((<a href="#free-type">Free</a> :A) :B) &rarr; (:C :B))</code>

Given a natural transformation, induce a Monad homomorphism from a
free monad to a target monad.



***

#### <a href="#liftf-value"><code>(LIFTF F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L34-L36">src</a></sub></sup><a name="liftf-value"></a>
<code>&forall; :A :B :C. (<a href="#functor-class">Functor</a> :A) (<a href="#monadfree-class">MonadFree</a> :A :C) &rArr; ((:A :B) &rarr; (:C :B))</code>

Lift a Functor into the Free Monad.



***

#### <a href="#run-free-value"><code>(RUN-FREE TRANSF OP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L63-L72">src</a></sub></sup><a name="run-free-value"></a>
<code>&forall; :A :B. <a href="#functor-class">Functor</a> :A &rArr; (((:A ((<a href="#free-type">Free</a> :A) :B)) &rarr; ((<a href="#free-type">Free</a> :A) :B)) &rarr; ((<a href="#free-type">Free</a> :A) :B) &rarr; :B)</code>

Run a free monad with a function that unwraps a single layer of the functor
`f` at a time.

References: [here](https://github.com/purescript/purescript-free/blob/v5.1.0/src/Control/Monad/Free.purs#L167)



***

# Package `COALTON/MONAD/FREET`<a name="coalton/monad/freet-package"></a>

### Types

#### <a href="#freef-type"><code>FreeF</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L40-L42">src</a></sub></sup><a name="freef-type"></a>
- <code>(FreeF (:A :B))</code>
- <code>(Val :C)</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#bifunctor-class">Bifunctor</a> (<a href="#freef-type">FreeF</a> :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#freef-type">FreeF</a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#freef-type">FreeF</a> :A) :B) :C)</code>
- <code><a href="#traversable-class">Traversable</a> :A &rArr; <a href="#traversable-class">Traversable</a> ((<a href="#freef-type">FreeF</a> :A) :B)</code>

</details>



***

#### <a href="#freet-type"><code>FreeT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L76-L78">src</a></sub></sup><a name="freet-type"></a>
- <code>(FreeT (:A (((<a href="#freef-type">FreeF</a> :B) :C) (((<a href="#freet-type">FreeT</a> :B) :A) :C))))</code>

`Free :f :m :a` gives you a Monad Transformer instance for any `Functor :f` and `Monad :m`.

<details>
<summary>Instances</summary>

- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#functor-class">Functor</a> :B) &rArr; <a href="#functor-class">Functor</a> ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#monad-class">Monad</a> :B) &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#monad-class">Monad</a> :B) &rArr; <a href="#monad-class">Monad</a> ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code>(<a href="#functor-class">Functor</a> :A) (<a href="#monad-class">Monad</a> :B) &rArr; <a href="#monadfree-class">MonadFree</a> :A ((<a href="#freet-type">FreeT</a> :A) :B)</code>
- <code>(<a href="#monad-class">Monad</a> :A) (<a href="#traversable-class">Traversable</a> :A) (<a href="#traversable-class">Traversable</a> :B) &rArr; <a href="#traversable-class">Traversable</a> ((<a href="#freet-type">FreeT</a> :B) :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#monadtransformer-class">MonadTransformer</a> (<a href="#freet-type">FreeT</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#freet-type">FreeT</a> :A) :B) :C)</code>

</details>



***

### Values

#### <a href="#fold-freet-value"><code>(FOLD-FREET F (FREET M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L173-L181">src</a></sub></sup><a name="fold-freet-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monadtransformer-class">MonadTransformer</a> :D) (<a href="#monad-class">Monad</a> (:D :B)) (<a href="#monad-class">Monad</a> :B) &rArr; (((:A (((<a href="#freet-type">FreeT</a> :A) :B) :C)) &rarr; ((:D :B) (((<a href="#freet-type">FreeT</a> :A) :B) :C))) &rarr; (((<a href="#freet-type">FreeT</a> :A) :B) :C) &rarr; ((:D :B) :C))</code>


***

#### <a href="#run-freet-value"><code>(RUN-FREET TRANSF OP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L92-L101">src</a></sub></sup><a name="run-freet-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">Monad</a> :B &rArr; (((:A (((<a href="#freet-type">FreeT</a> :A) :B) :C)) &rarr; (((<a href="#freet-type">FreeT</a> :A) :B) :C)) &rarr; (((<a href="#freet-type">FreeT</a> :A) :B) :C) &rarr; (:B :C))</code>

Run a free monad transformer with a function that unwraps a single layer of the
functor `f` at a time.



***

#### <a href="#unwrap-freet-value"><code>(UNWRAP-FREET (FREET M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L82-L86">src</a></sub></sup><a name="unwrap-freet-value"></a>
<code>&forall; :A :B :C. ((((<a href="#freet-type">FreeT</a> :A) :B) :C) &rarr; (:B (((<a href="#freef-type">FreeF</a> :A) :C) (((<a href="#freet-type">FreeT</a> :A) :B) :C))))</code>

Unwrap one layer of the the free monad transformer, returning a value of the base
monad containing a FreeF (which can either contain VAL, a pure value, or FREEF, another
wrapped layer of the free monad transformer).



***

# Package `COALTON/MONAD/IDENTITY`<a name="coalton/monad/identity-package"></a>

### Types

#### <a href="#identity-type"><code>Identity</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/identity.lisp#L19-L21">src</a></sub></sup><a name="identity-type"></a>
- <code>(Identity :A)</code>

A bare computation. Not useful on its own, but is useful for running Monad transformers in a bare context.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">Applicative</a> <a href="#identity-type">Identity</a></code>
- <code><a href="#functor-class">Functor</a> <a href="#identity-type">Identity</a></code>
- <code><a href="#monad-class">Monad</a> <a href="#identity-type">Identity</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#identity-type">Identity</a> :A)</code>

</details>



***

### Values

#### <a href="#run-identity-value"><code>(RUN-IDENTITY (IDENTITY A))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/identity.lisp#L25-L26">src</a></sub></sup><a name="run-identity-value"></a>
<code>&forall; :A. ((<a href="#identity-type">Identity</a> :A) &rarr; :A)</code>


***

# Package `COALTON/MONAD/OPTIONALT`<a name="coalton/monad/optionalt-package"></a>

### Types

#### <a href="#optionalt-type"><code>OptionalT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.lisp#L24-L26">src</a></sub></sup><a name="optionalt-type"></a>
- <code>(OptionalT (:A (<a href="#optional-type">Optional</a> :B)))</code>

A monadic computation that returns an Optional.

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#alternative-class">Alternative</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#applicative-class">Applicative</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> (<a href="#optionalt-type">OptionalT</a> :A)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A (<a href="#optionalt-type">OptionalT</a> :B)</code>
- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A (<a href="#optionalt-type">OptionalT</a> :B)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> <a href="#optionalt-type">OptionalT</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> ((<a href="#optionalt-type">OptionalT</a> :A) :B)</code>

</details>



***

### Values

#### <a href="#map-optionalt-value"><code>(MAP-OPTIONALT F (OPTIONALT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.lisp#L37-L38">src</a></sub></sup><a name="map-optionalt-value"></a>
<code>&forall; :A :B :C :D. (((:A (<a href="#optional-type">Optional</a> :B)) &rarr; (:C (<a href="#optional-type">Optional</a> :D))) &rarr; ((<a href="#optionalt-type">OptionalT</a> :A) :B) &rarr; ((<a href="#optionalt-type">OptionalT</a> :C) :D))</code>


***

#### <a href="#run-optionalt-value"><code>(RUN-OPTIONALT (OPTIONALT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.lisp#L30-L31">src</a></sub></sup><a name="run-optionalt-value"></a>
<code>&forall; :A :B. (((<a href="#optionalt-type">OptionalT</a> :A) :B) &rarr; (:A (<a href="#optional-type">Optional</a> :B)))</code>


***

# Package `COALTON/MONAD/RESULTT`<a name="coalton/monad/resultt-package"></a>

### Types

#### <a href="#resultt-type"><code>ResultT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L30-L32">src</a></sub></sup><a name="resultt-type"></a>
- <code>(ResultT (:A (<a href="#result-type">Result</a> :B :C)))</code>

A monadic computation that returns a Result.

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#resultt-type">ResultT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#resultt-type">ResultT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> ((<a href="#resultt-type">ResultT</a> :B) :A)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A ((<a href="#resultt-type">ResultT</a> :C) :B)</code>
- <code><a href="#monadstate-class">MonadState</a> :A :B &rArr; <a href="#monadstate-class">MonadState</a> :A ((<a href="#resultt-type">ResultT</a> :C) :B)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> (<a href="#resultt-type">ResultT</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#resultt-type">ResultT</a> :A) :B) :C)</code>

</details>



***

### Values

#### <a href="#err-ifm-value"><code>(ERR-IFM FAILED? FAILURE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L66-L68">src</a></sub></sup><a name="err-ifm-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :B &rArr; (<a href="#boolean-type">Boolean</a> &rarr; :A &rarr; (:B (<a href="#result-type">Result</a> :A <a href="#unit-type">Unit</a>)))</code>

Fail with FAILURE inside :m if FAILED? is True.



***

#### <a href="#err-ift-value"><code>(ERR-IFT FAILED? FAILURE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L60-L62">src</a></sub></sup><a name="err-ift-value"></a>
<code>&forall; :A :B. <a href="#monad-class">Monad</a> :B &rArr; (<a href="#boolean-type">Boolean</a> &rarr; :A &rarr; (((<a href="#resultt-type">ResultT</a> :A) :B) <a href="#unit-type">Unit</a>))</code>

Fail with FAILURE if FAILED? is True.



***

#### <a href="#map-errm-value"><code>(MAP-ERRM FERR M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L48-L52">src</a></sub></sup><a name="map-errm-value"></a>
<code>&forall; :A :B :C :D. <a href="#monad-class">Monad</a> :C &rArr; ((:A &rarr; :B) &rarr; (:C (<a href="#result-type">Result</a> :A :D)) &rarr; (:C (<a href="#result-type">Result</a> :B :D)))</code>

Map FERR over the error value of a Result contained in M.



***

#### <a href="#map-errt-value"><code>(MAP-ERRT FERR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L56-L56">src</a></sub></sup><a name="map-errt-value"></a>
<code>&forall; :A :B :C :D. <a href="#functor-class">Functor</a> :C &rArr; ((:A &rarr; :B) &rarr; (((<a href="#resultt-type">ResultT</a> :A) :C) :D) &rarr; (((<a href="#resultt-type">ResultT</a> :B) :C) :D))</code>


***

#### <a href="#map-resultt-value"><code>(MAP-RESULTT F (RESULTT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L43-L44">src</a></sub></sup><a name="map-resultt-value"></a>
<code>&forall; :A :B :C :D :E :F. (((:A (<a href="#result-type">Result</a> :B :C)) &rarr; (:D (<a href="#result-type">Result</a> :E :F))) &rarr; (((<a href="#resultt-type">ResultT</a> :B) :A) :C) &rarr; (((<a href="#resultt-type">ResultT</a> :E) :D) :F))</code>


***

#### <a href="#run-resultt-value"><code>(RUN-RESULTT (RESULTT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L36-L37">src</a></sub></sup><a name="run-resultt-value"></a>
<code>&forall; :A :B :C. ((((<a href="#resultt-type">ResultT</a> :A) :B) :C) &rarr; (:B (<a href="#result-type">Result</a> :A :C)))</code>


***

# Package `COALTON/MONAD/STATE`<a name="coalton/monad/state-package"></a>

### Types

#### <a href="#st-type"><code>ST</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L29-L32">src</a></sub></sup><a name="st-type"></a>
- <code>(ST (:A &rarr; (<a href="#tuple-type">Tuple</a> :A :B)))</code>

A computation of a value which may affect the state.
Represented as a closure from initial state to updated state and value.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">Applicative</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#monad-class">Monad</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#st-type">ST</a> :A :B)</code>

</details>



***

### Values

#### <a href="#modify-value"><code>(MODIFY FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L56-L59">src</a></sub></sup><a name="modify-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#st-type">ST</a> :A <a href="#unit-type">Unit</a>))</code>

Modify the state in a StatefulComputation, discarding the old state.



***

#### <a href="#modify-get-value"><code>(MODIFY-GET FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L63-L67">src</a></sub></sup><a name="modify-get-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#st-type">ST</a> :A :A))</code>

Modify the state in a StatefulComputation, discarding the old state. Return the new state.



***

#### <a href="#modify-swap-value"><code>(MODIFY-SWAP FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L77-L80">src</a></sub></sup><a name="modify-swap-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#st-type">ST</a> :A :A))</code>

Modify the state in a StatefulComputation, returning the old state.



***

#### <a href="#put-value"><code>(PUT STATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L36-L38">src</a></sub></sup><a name="put-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#st-type">ST</a> :A <a href="#unit-type">Unit</a>))</code>

A StatefulComputation with state set to be the given state. The returned value is Unit.



***

#### <a href="#run-value"><code>(RUN SC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L48-L52">src</a></sub></sup><a name="run-value"></a>
<code>&forall; :A :B. ((<a href="#st-type">ST</a> :A :B) &rarr; :A &rarr; (<a href="#tuple-type">Tuple</a> :A :B))</code>

Runs a StatefulComputation to produce a final updated state and value given an initial state



***

#### <a href="#swap-value"><code>(SWAP STATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L71-L73">src</a></sub></sup><a name="swap-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#st-type">ST</a> :A :A))</code>

A StatefulComputation with state set to be the given state. The old state is returned.



***

#### <a href="#get-value"><code>GET</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L42-L44">src</a></sub></sup><a name="get-value"></a>
<code>&forall; :A. (<a href="#st-type">ST</a> :A :A)</code>

A StatefulComputation which returns the current state as the value.



***

# Package `COALTON/MONAD/STATET`<a name="coalton/monad/statet-package"></a>

### Types

#### <a href="#statet-type"><code>StateT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L41-L43">src</a></sub></sup><a name="statet-type"></a>
- <code>(StateT (:A &rarr; (:B (<a href="#tuple-type">Tuple</a> :A :C))))</code>

A monadic computation that tracks state of type :s.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">Applicative</a> :A &rArr; <a href="#applicative-class">Applicative</a> ((<a href="#statet-type">StateT</a> :B) :A)</code>
- <code><a href="#functor-class">Functor</a> :A &rArr; <a href="#functor-class">Functor</a> ((<a href="#statet-type">StateT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monad-class">Monad</a> ((<a href="#statet-type">StateT</a> :B) :A)</code>
- <code><a href="#monad-class">Monad</a> :A &rArr; <a href="#monadstate-class">MonadState</a> :B ((<a href="#statet-type">StateT</a> :B) :A)</code>
- <code><a href="#monadenvironment-class">MonadEnvironment</a> :A :B &rArr; <a href="#monadenvironment-class">MonadEnvironment</a> :A ((<a href="#statet-type">StateT</a> :C) :B)</code>
- <code><a href="#monadtransformer-class">MonadTransformer</a> (<a href="#statet-type">StateT</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#statet-type">StateT</a> :A) :B) :C)</code>

</details>



***

### Values

#### <a href="#lift-statet-value"><code>(LIFT-STATET M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L90-L95">src</a></sub></sup><a name="lift-statet-value"></a>
<code>&forall; :A :B :C. <a href="#functor-class">Functor</a> :A &rArr; ((:A :B) &rarr; (((<a href="#statet-type">StateT</a> :C) :A) :B))</code>

Lift a stateless computation into a stateful context.



***

#### <a href="#map-statet-value"><code>(MAP-STATET FMA-&gt;NB (STATET FS-&gt;MSA))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L83-L86">src</a></sub></sup><a name="map-statet-value"></a>
<code>&forall; :A :B :C :D :E. (((:A (<a href="#tuple-type">Tuple</a> :B :C)) &rarr; (:D (<a href="#tuple-type">Tuple</a> :B :E))) &rarr; (((<a href="#statet-type">StateT</a> :B) :A) :C) &rarr; (((<a href="#statet-type">StateT</a> :B) :D) :E))</code>

Map the return value, the final state, and the execution context.



***

#### <a href="#modify-statet-value"><code>(MODIFY-STATET FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L71-L75">src</a></sub></sup><a name="modify-statet-value"></a>
<code>&forall; :A :B. <a href="#applicative-class">Applicative</a> :B &rArr; ((:A &rarr; :A) &rarr; (((<a href="#statet-type">StateT</a> :A) :B) <a href="#unit-type">Unit</a>))</code>

Modify the computation state, discarding the old state.



***

#### <a href="#put-statet-value"><code>(PUT-STATET STATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L47-L49">src</a></sub></sup><a name="put-statet-value"></a>
<code>&forall; :A :B. <a href="#applicative-class">Applicative</a> :B &rArr; (:A &rarr; (((<a href="#statet-type">StateT</a> :A) :B) <a href="#unit-type">Unit</a>))</code>

A stateful computation with state set to the given state. The returned value is Unit.



***

#### <a href="#run-statet-value"><code>(RUN-STATET (STATET FS-&gt;MSA) S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L60-L61">src</a></sub></sup><a name="run-statet-value"></a>
<code>&forall; :A :B :C. <a href="#applicative-class">Applicative</a> :B &rArr; ((((<a href="#statet-type">StateT</a> :A) :B) :C) &rarr; :A &rarr; (:B (<a href="#tuple-type">Tuple</a> :A :C)))</code>


***

#### <a href="#run-statet_-value"><code>(RUN-STATET_ ST-OP S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L65-L67">src</a></sub></sup><a name="run-statet_-value"></a>
<code>&forall; :A :B :C. <a href="#applicative-class">Applicative</a> :B &rArr; ((((<a href="#statet-type">StateT</a> :A) :B) :C) &rarr; :A &rarr; (:B :C))</code>

Run ST-OP, discarding the state and returning the result.



***

#### <a href="#get-statet-value"><code>GET-STATET</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.lisp#L53-L56">src</a></sub></sup><a name="get-statet-value"></a>
<code>&forall; :A :B. <a href="#applicative-class">Applicative</a> :B &rArr; (((<a href="#statet-type">StateT</a> :A) :B) :A)</code>

A stateful computation which returns the current state as the value.



***

# Package `COALTON/OPTIONAL`<a name="coalton/optional-package"></a>

### Values

#### <a href="#from-some-value"><code>(FROM-SOME STR OPT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L27-L31">src</a></sub></sup><a name="from-some-value"></a>
<code>&forall; :A. (<a href="#string-type">String</a> &rarr; (<a href="#optional-type">Optional</a> :A) &rarr; :A)</code>

Get the value of OPT, erroring with the provided string if it is None.



***

#### <a href="#none?-value"><code>(NONE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L41-L45">src</a></sub></sup><a name="none?-value"></a>
<code>&forall; :A. ((<a href="#optional-type">Optional</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is X None?



***

#### <a href="#some?-value"><code>(SOME? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L34-L38">src</a></sub></sup><a name="some?-value"></a>
<code>&forall; :A. ((<a href="#optional-type">Optional</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is X Some?



***

# Package `COALTON/ORDMAP`<a name="coalton/ordmap-package"></a>

### Types

#### <a href="#ordmap-type"><code>OrdMap</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L73-L75">src</a></sub></sup><a name="ordmap-type"></a>

A binary tree which associates each :KEY with a :VALUE, sorted by `<=>' on the keys and unique by `==' on the keys.

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) &rArr; <a href="#eq-class">Eq</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) &rArr; <a href="#hash-class">Hash</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#functor-class">Functor</a> (<a href="#ordmap-type">OrdMap</a> :A)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#ordmap-type">OrdMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#ordmap-type">OrdMap</a> :A :B) (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>

</details>



***

### Values

#### <a href="#adjoin-value"><code>(ADJOIN MP K V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L137-L142">src</a></sub></sup><a name="adjoin-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Returns an OrdMap in which the key `k` is associated with `v` added
to the `mp`, only when `mp` doesn't have an association with `k`.
If `mp` already contains an association with `k`, `mp` is returned as is.



***

#### <a href="#collect-value"><code>(COLLECT COLL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L201-L208">src</a></sub></sup><a name="collect-value"></a>
<code>&forall; :A :B :C. (<a href="#ord-class">Ord</a> :B) (<a href="#foldable-class">Foldable</a> :A) &rArr; ((:A (<a href="#tuple-type">Tuple</a> :B :C)) &rarr; (<a href="#ordmap-type">OrdMap</a> :B :C))</code>

Construct a `OrdMap` containing all the `(key value)` pairs in `coll`.

If `coll` contains duplicate keys, later values will overwrite earlier values.



***

#### <a href="#collect!-value"><code>(COLLECT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L191-L198">src</a></sub></sup><a name="collect!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#iterator-type">Iterator</a> (<a href="#tuple-type">Tuple</a> :A :B)) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Construct a `OrdMap` containing all the `(key value)` pairs in `iter`.

If `iter` contains duplicate keys, later values will overwrite earlier values.



***

#### <a href="#difference-value"><code>(DIFFERENCE A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L275-L279">src</a></sub></sup><a name="difference-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Returns an OrdMap that contains mappings in `a` but not in `b`.



***

#### <a href="#empty?-value"><code>(EMPTY? M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L84-L87">src</a></sub></sup><a name="empty?-value"></a>
<code>&forall; :A :B. ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns True iff the given OrdMap is empty.



***

#### <a href="#entries-value"><code>(ENTRIES MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L162-L165">src</a></sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Iterate over the (key value) pairs in MP, sorted by the keys in least-to-greatest order.



***

#### <a href="#insert-value"><code>(INSERT MP K V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L129-L133">src</a></sub></sup><a name="insert-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Returns an OrdMap in which the key `k` is associated with `v` added
to the `mp`.  If `mp` already contains mapping for `k`, it is replaced.



***

#### <a href="#intersection-value"><code>(INTERSECTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L267-L272">src</a></sub></sup><a name="intersection-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Construct an OrdMap contaning elements whose key appears in both `a` and `b`.
The resulting values are from `a`.



***

#### <a href="#keys-value"><code>(KEYS MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L171-L174">src</a></sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Iterate over the keys in MP, sorted least-to-greatest.



***

#### <a href="#lookup-value"><code>(LOOKUP MP K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L91-L94">src</a></sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; :A &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Retrieve the value associated with K in MP, or None if MP does not contain K.



***

#### <a href="#lookup-neighbors-value"><code>(LOOKUP-NEIGHBORS MP K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L112-L125">src</a></sub></sup><a name="lookup-neighbors-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; :A &rarr; (<a href="#tuple3-type">Tuple3</a> (<a href="#optional-type">Optional</a> (<a href="#tuple-type">Tuple</a> :A :B)) (<a href="#optional-type">Optional</a> (<a href="#tuple-type">Tuple</a> :A :B)) (<a href="#optional-type">Optional</a> (<a href="#tuple-type">Tuple</a> :A :B))))</code>

Returns elements LO, ON, and HI, such that LO has the closest
key that is strictly less than `k`, ON is the entry with `k`,
and HI has the closest key that is strictly greater than 'k'.
Any of these values can be None if there's no such entry.



***

#### <a href="#max-key-entry-value"><code>(MAX-KEY-ENTRY MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L97-L100">src</a></sub></sup><a name="max-key-entry-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#optional-type">Optional</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Returns the entry (Tuple :key :value) with the maximum key in the map `mp`. If the map is empty, None is returned.



***

#### <a href="#min-key-entry-value"><code>(MIN-KEY-ENTRY MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L103-L106">src</a></sub></sup><a name="min-key-entry-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#optional-type">Optional</a> (<a href="#tuple-type">Tuple</a> :A :B)))</code>

Returns the entry (Tuple :key :value) with the minimum key in the map `mp`. If the map is empty, None is returned.



***

#### <a href="#remove-value"><code>(REMOVE MP K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L155-L159">src</a></sub></sup><a name="remove-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; :A &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Returns an OrdMap in which the association with key 'k' is removed from
`mp`.  If `mp` doesn't have an association with `k`, it is returned as is.



***

#### <a href="#replace-value"><code>(REPLACE MP K V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L146-L151">src</a></sub></sup><a name="replace-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Returns an OrdMap in which the key `k` is associated with `v` replaced
from `mp`, when `mp` already has an association with `k`.
If `mp` doesn't has an association with `k`, `mp` is returned as is.



***

#### <a href="#union-value"><code>(UNION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L256-L264">src</a></sub></sup><a name="union-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Construct an OrdMap containing all the mappings of both A and B.

If A and B contain mappings X -> A' and X -> B', the former mapping is kept.

The operation is associative, but not commutative.



***

#### <a href="#update-value"><code>(UPDATE MP K F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L218-L252">src</a></sub></sup><a name="update-value"></a>
<code>&forall; :A :B :C. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; :A &rarr; ((<a href="#optional-type">Optional</a> :B) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#optional-type">Optional</a> :B) :C)) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#ordmap-type">OrdMap</a> :A :B) :C))</code>

Lookup an association with `k` in `mp`.  If there's an entry, call `f`
with its value wrapped with Some.  If there isn't an entry, call 'f' with
None.  `f` must return a tuple of possible new value and an auxiliary
result.
If the fst of `f`'s return value is Some, its content is inserted into
`mp` in association with `k`.   If the fst of `f`'s return value is None,
an association with `k` in `mp` is removed.  A possibly updated mapping
is returned as the fst element of the tuple.
The auxiliary result from `f` is returnd as the snd result.

This can be used for the caller to obtain the previous state along
updated map.  For example, the following code inserts an entry (k, v)
into mp, and obtain (Some v') or None in the second value of the
result, where v' is the previous value associated with k.

```
(update mp k (Tuple v))
```




***

#### <a href="#values-value"><code>(VALUES MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L177-L180">src</a></sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#iterator-type">Iterator</a> :B))</code>

Iterate over the values in MP, sorted by their corresponding keys in least-to-greatest order.



***

#### <a href="#xor-value"><code>(XOR A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L282-L287">src</a></sub></sup><a name="xor-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B) &rarr; (<a href="#ordmap-type">OrdMap</a> :A :B))</code>

Returns an OrdMap that contains mappings either in `a` or in `b`,
but not in both.



***

#### <a href="#empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L79-L81">src</a></sub></sup><a name="empty-value"></a>
<code>&forall; :A :B. (<a href="#ordmap-type">OrdMap</a> :A :B)</code>

A OrdMap containing no mappings.



***

# Package `COALTON/ORDTREE`<a name="coalton/ordtree-package"></a>

### Types

#### <a href="#ordtree-type"><code>OrdTree</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L46-L63">src</a></sub></sup><a name="ordtree-type"></a>
- <code>Empty</code> 
  - exported; an empty tree.

A 1-2 brother tree, sorted by `<=>` and unique by `==`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#ordtree-type">OrdTree</a> :A)</code>
- <code><a href="#foldable-class">Foldable</a> <a href="#ordtree-type">OrdTree</a></code>
- <code><a href="#hash-class">Hash</a> :A &rArr; <a href="#hash-class">Hash</a> (<a href="#ordtree-type">OrdTree</a> :A)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#ordtree-type">OrdTree</a> :A) :A</code>
- <code><a href="#ord-class">Ord</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#ordtree-type">OrdTree</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#ordtree-type">OrdTree</a> :A)</code>

</details>



***

### Values

#### <a href="#adjoin-value"><code>(ADJOIN T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L236-L249">src</a></sub></sup><a name="adjoin-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; :A &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Returns an ordtree that has a new entry `a`.  If `t` already has an entry
which is `==` to `a`, however, the original `t` is returned as is.



***

#### <a href="#decreasing-order-value"><code>(DECREASING-ORDER TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L406-L421">src</a></sub></sup><a name="decreasing-order-value"></a>
<code>&forall; :A. ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Returns an iterator that traverses elements in `tre` in decreasing order.



***

#### <a href="#difference-value"><code>(DIFFERENCE A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L508-L510">src</a></sub></sup><a name="difference-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Returns an OrdTree that contains elements in `a` but not in `b`.



***

#### <a href="#empty?-value"><code>(EMPTY? T)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L66-L69">src</a></sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>


***

#### <a href="#increasing-order-value"><code>(INCREASING-ORDER TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L387-L403">src</a></sub></sup><a name="increasing-order-value"></a>
<code>&forall; :A. ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Returns an iterator that traverses elements in `tre` in increasing order.
This is same as (iter:into-iter tre).



***

#### <a href="#insert-value"><code>(INSERT T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L218-L232">src</a></sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; :A &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Returns an ordtree that has an new entry `a` added to `t`.  If `t` already
has an entry which is `==` to `a`,  The new ordtree has `a` in place of the
existing entry.



***

#### <a href="#intersection-value"><code>(INTERSECTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L496-L505">src</a></sub></sup><a name="intersection-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Returns an OrdTree that contains elements that appear in both `a` and `b`.
The resulting elements are from `a`.



***

#### <a href="#lookup-value"><code>(LOOKUP HAYSTACK NEEDLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L101-L113">src</a></sub></sup><a name="lookup-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; :A &rarr; (<a href="#optional-type">Optional</a> :A))</code>

If HAYSTACK contains an element `==` to NEEDLE, return it.



***

#### <a href="#lookup-neighbors-value"><code>(LOOKUP-NEIGHBORS HAYSTACK NEEDLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L458-L481">src</a></sub></sup><a name="lookup-neighbors-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; :A &rarr; (<a href="#tuple3-type">Tuple3</a> (<a href="#optional-type">Optional</a> :A) (<a href="#optional-type">Optional</a> :A) (<a href="#optional-type">Optional</a> :A)))</code>

Returns elements LO, ON, and HI, such that LO is the closest
element that is strictly less than `needle`, ON is the element
that is `==` to `needle`, and HI is the closest element that is
strictly greater than `needle`.  Any of these values can be None
if there's no such element.



***

#### <a href="#max-element-value"><code>(MAX-ELEMENT TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L431-L439">src</a></sub></sup><a name="max-element-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns the maximum element in the tree, or None if the tree is empty.



***

#### <a href="#min-element-value"><code>(MIN-ELEMENT TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L443-L451">src</a></sub></sup><a name="min-element-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Returns the minimum element in the tree, or None if the tree is empty.



***

#### <a href="#remove-value"><code>(REMOVE T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L271-L287">src</a></sub></sup><a name="remove-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; :A &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Returns an ordtree that is the same as `t` except that the entry
which is `==` to `a` is removed.  If `t` does not have such an entry,
`t` is returned as is.



***

#### <a href="#replace-value"><code>(REPLACE T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L253-L267">src</a></sub></sup><a name="replace-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; :A &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Returns an ordtree that has an entry `a` only if `t` already has an
entry which is `==` to `a`.  The original entry is replaced with the given
`a`.  If `t` doesn't have an entry `==` to `a`, `t` is returned as is.



***

#### <a href="#transform-elements-value"><code>(TRANSFORM-ELEMENTS F TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L370-L383">src</a></sub></sup><a name="transform-elements-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :B))</code>

Returns a tree whose element consists of the result of `f` applied to
the original element, and isomorphic to the original tree.

It is important that transforming keys with `f` does not change the order
of the element.  If `f` violates the condition, the resulting tree isn't
guaranteed to be consistent.

We do not name this `map` because of this restriction.



***

#### <a href="#union-value"><code>(UNION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L490-L493">src</a></sub></sup><a name="union-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Returns an OrdTree that contains all the elements from `a` and `b`.
If both OrdTrees has the same (`==`) element, the one from `a` is taken.



***

#### <a href="#update-value"><code>(UPDATE T A F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L306-L367">src</a></sub></sup><a name="update-value"></a>
<code>&forall; :A :B. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; :A &rarr; ((<a href="#optional-type">Optional</a> :A) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#optional-type">Optional</a> :A) :B)) &rarr; (<a href="#tuple-type">Tuple</a> (<a href="#ordtree-type">OrdTree</a> :A) :B))</code>

Generic update.  Look for the element `a` in `t`.  If there's an entry,
call `f` with the existing entry wrapped with Some.  If there isn't an entry,
call `f` with None.  `f` must return a tuple of possible replacement entry,
and an auxiliary result.

If the entry doesn't exist in `t` and `f` returns `(Some elt)`, `elt` is
inserted.  If the entry exists in `t` and `f` returns None, the element
is removed.  If the entry exists in `t` and `f` returns `(Some elt)`, `elt`
replaces the original entry.

It is important that if `f` returns `(Some elt)`, `elt` must be still greater
than the 'previous' element and less than the 'next' element in the tree,
otherwise the returned tree would be inconsistent.
If you use an ordtree to keep a set of keys, you don't really need to alter
the existing entry.  It is useful if you define your own element type that
carries extra info, though; see OrdMap implementation.



***

#### <a href="#xor-value"><code>(XOR A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L513-L523">src</a></sub></sup><a name="xor-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A) &rarr; (<a href="#ordtree-type">OrdTree</a> :A))</code>

Rdturns an OrdTree that contains elements either in `a` or in `b`,
but not in both.



***

# Package `COALTON/QUEUE`<a name="coalton/queue-package"></a>

### Types

#### <a href="#queue-type"><code>Queue</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L54-L55">src</a></sub></sup><a name="queue-type"></a>

Unbounded FIFO queue implemented with a linked list.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">Default</a> (<a href="#queue-type">Queue</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#queue-type">Queue</a> :A)</code>
- <code><a href="#foldable-class">Foldable</a> <a href="#queue-type">Queue</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#queue-type">Queue</a> :A) :A</code>
- <code><a href="#functor-class">Functor</a> <a href="#queue-type">Queue</a></code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#queue-type">Queue</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#queue-type">Queue</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> (<a href="#queue-type">Queue</a> :A)</code>

</details>



***

### Values

#### <a href="#append-value"><code>(APPEND Q1 Q2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L173-L178">src</a></sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; (<a href="#queue-type">Queue</a> :A) &rarr; (<a href="#queue-type">Queue</a> :A))</code>

Create a new queue containing the elements of `q1` followed by the elements of `q2`.



***

#### <a href="#clear!-value"><code>(CLEAR! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L95-L101">src</a></sub></sup><a name="clear!-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Clear all elements from `q`.



***

#### <a href="#copy-value"><code>(COPY Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L76-L92">src</a></sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; (<a href="#queue-type">Queue</a> :A))</code>

Return a new queue containing the same elements as `q`.



***

#### <a href="#empty?-value"><code>(EMPTY? Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L70-L73">src</a></sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `q` empty?



***

#### <a href="#extend!-value"><code>(EXTEND! Q ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L181-L189">src</a></sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B. <a href="#intoiterator-class">IntoIterator</a> :B :A &rArr; ((<a href="#queue-type">Queue</a> :A) &rarr; :B &rarr; <a href="#unit-type">Unit</a>)</code>

Push every element in `iter` to the end of `q`.



***

#### <a href="#index-value"><code>(INDEX INDEX Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L160-L164">src</a></sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#queue-type">Queue</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Return the `index`th element of `q`.



***

#### <a href="#index-unsafe-value"><code>(INDEX-UNSAFE INDEX Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L167-L170">src</a></sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#queue-type">Queue</a> :A) &rarr; :A)</code>

Return the `index`th element of `q` without checking if the element exists.



***

#### <a href="#items!-value"><code>(ITEMS! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L192-L197">src</a></sub></sup><a name="items!-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; (<a href="#iterator-type">Iterator</a> :A))</code>

Returns an iterator over the items of `q`, removing items as they are returned.



***

#### <a href="#length-value"><code>(LENGTH Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L64-L67">src</a></sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Returns the length of `q`.



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L58-L61">src</a></sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#unit-type">Unit</a> &rarr; (<a href="#queue-type">Queue</a> :A))</code>

Create a new empty queue.



***

#### <a href="#peek-value"><code>(PEEK Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L146-L150">src</a></sub></sup><a name="peek-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Peek at the first item of `q`.



***

#### <a href="#peek-unsafe-value"><code>(PEEK-UNSAFE Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L153-L157">src</a></sub></sup><a name="peek-unsafe-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; :A)</code>

Peek at the first item of `q` without checking if the queue is empty.



***

#### <a href="#pop!-value"><code>(POP! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L130-L134">src</a></sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Remove and return the first item of `q`.



***

#### <a href="#pop-unsafe!-value"><code>(POP-UNSAFE! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L137-L143">src</a></sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; :A. ((<a href="#queue-type">Queue</a> :A) &rarr; :A)</code>

Remove and return the first item of `q` without checking if the queue is empty.



***

#### <a href="#push!-value"><code>(PUSH! ITEM Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L104-L127">src</a></sub></sup><a name="push!-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#queue-type">Queue</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Push `item` onto the end of `q`.



***

# Package `COALTON/RANDOMACCESS`<a name="coalton/randomaccess-package"></a>

### Classes

#### <a href="#randomaccess-class"><code>RandomAccess</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L39-L49">src</a></sub></sup><a name="randomaccess-class"></a>
<code><a href="#randomaccess-class">RandomAccess</a> :A :B</code>


Establishes that `:f` is a random-access store of elements of type `:t`. The **storage type** `:f` implies the **stored type** `:t`. The storage is expected to be sequential and O(1) in random access reads and writes.

It is permitted for any of `make`, `unsafe-aref`, or `unsafe-set!` to error.

Methods:
- <code>MAKE :: (<a href="#ufix-type">UFix</a> &rarr; :B &rarr; :A)</code>
- <code>MAKE-UNINITIALIZED :: (<a href="#ufix-type">UFix</a> &rarr; :A)</code>
- <code>LENGTH :: (:A &rarr; <a href="#ufix-type">UFix</a>)</code>
- <code>READABLE? :: (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>
- <code>WRITABLE? :: (:A &rarr; <a href="#boolean-type">Boolean</a>)</code>
- <code>UNSAFE-AREF :: (:A &rarr; <a href="#ufix-type">UFix</a> &rarr; :B)</code>
- <code>UNSAFE-SET! :: (:A &rarr; <a href="#ufix-type">UFix</a> &rarr; :B &rarr; <a href="#unit-type">Unit</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#randomaccess-class">RandomAccess</a> (<a href="#vector-type">Vector</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#randomaccess-class">RandomAccess</a> (<a href="#lisparray-type">LispArray</a> :A) :A</code>

</details>



***

### Values

#### <a href="#aref-value"><code>(AREF STORAGE INDEX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L55-L60">src</a></sub></sup><a name="aref-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RandomAccess</a> :A :B &rArr; (:A &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#optional-type">Optional</a> :B))</code>

Read the element at `index` of the random-access storage `storage`. Return `None` if the read is out-of-bounds or not permitted.



***

#### <a href="#rotate!-value"><code>(ROTATE! STORAGE INDEX1 INDEX2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L79-L87">src</a></sub></sup><a name="rotate!-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RandomAccess</a> :B :A &rArr; (:B &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#unit-type">Unit</a>))</code>

Rotate the elements at indices `index1` and `index2` of the random-access storage `storage`. Return `None` if the indices are out-of-bounds or if reading from or writing to `storage` is not permitted.



***

#### <a href="#set!-value"><code>(SET! STORAGE INDEX VALUE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L63-L68">src</a></sub></sup><a name="set!-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RandomAccess</a> :A :B &rArr; (:A &rarr; <a href="#ufix-type">UFix</a> &rarr; :B &rarr; (<a href="#optional-type">Optional</a> <a href="#unit-type">Unit</a>))</code>

Write the element `value` at `index` of the random-access storage `storage`. Return `None` if the write is out-of-bounds or not permitted.



***

#### <a href="#unsafe-rotate!-value"><code>(UNSAFE-ROTATE! STORAGE INDEX1 INDEX2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L71-L76">src</a></sub></sup><a name="unsafe-rotate!-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RandomAccess</a> :B :A &rArr; (:B &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Rotate the elements at indices `index1` and `index2` of the random-access storage `storage`.



***

# Package `COALTON/RESULT`<a name="coalton/result-package"></a>

### Values

#### <a href="#err-if-value"><code>(ERR-IF FAILED? FAILURE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L34-L38">src</a></sub></sup><a name="err-if-value"></a>
<code>&forall; :A. (<a href="#boolean-type">Boolean</a> &rarr; :A &rarr; (<a href="#result-type">Result</a> :A <a href="#unit-type">Unit</a>))</code>

Fail with FAILURE value if FAILED? is True.



***

#### <a href="#err?-value"><code>(ERR? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L55-L59">src</a></sub></sup><a name="err?-value"></a>
<code>&forall; :A :B. ((<a href="#result-type">Result</a> :A :B) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns TRUE if X is ERR



***

#### <a href="#flatten-value"><code>(FLATTEN X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L82-L85">src</a></sub></sup><a name="flatten-value"></a>
<code>&forall; :A. ((<a href="#result-type">Result</a> :A :A) &rarr; :A)</code>


***

#### <a href="#map-err-value"><code>(MAP-ERR F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L68-L72">src</a></sub></sup><a name="map-err-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (<a href="#result-type">Result</a> :A :C) &rarr; (<a href="#result-type">Result</a> :B :C))</code>

Map over the ERR case



***

#### <a href="#ok-or-def-value"><code>(OK-OR-DEF DEF RES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L75-L79">src</a></sub></sup><a name="ok-or-def-value"></a>
<code>&forall; :A :B. (:A &rarr; (<a href="#result-type">Result</a> :B :A) &rarr; :A)</code>

Take value in RES if it is OK, or DEF if it is ERR.



***

#### <a href="#ok-or-error-value"><code>(OK-OR-ERROR RES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L88-L91">src</a></sub></sup><a name="ok-or-error-value"></a>
<code>&forall; :A :B. <a href="#signalable-class">Signalable</a> :A &rArr; ((<a href="#result-type">Result</a> :A :B) &rarr; :B)</code>


***

#### <a href="#ok?-value"><code>(OK? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L48-L52">src</a></sub></sup><a name="ok?-value"></a>
<code>&forall; :A :B. ((<a href="#result-type">Result</a> :A :B) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Returns TRUE if X is OK



***

#### <a href="#okm-value"><code>(OKM F-A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L63-L65">src</a></sub></sup><a name="okm-value"></a>
<code>&forall; :A :B :C. <a href="#functor-class">Functor</a> :A &rArr; ((:A :B) &rarr; (:A (<a href="#result-type">Result</a> :C :B)))</code>

Wrap a value inside F-A inside of 'Ok'.



***

#### <a href="#opt->result-value"><code>(OPT-&gt;RESULT FAILURE OPT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L41-L45">src</a></sub></sup><a name="opt->result-value"></a>
<code>&forall; :A :B. (:A &rarr; (<a href="#optional-type">Optional</a> :B) &rarr; (<a href="#result-type">Result</a> :A :B))</code>

Convert OPT to a Result, using FAILURE value if None.



***

# Package `COALTON/SEQ`<a name="coalton/seq-package"></a>

### Types

#### <a href="#seq-type"><code>Seq</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L58-L64">src</a></sub></sup><a name="seq-type"></a>
<details>
<summary>Instances</summary>

- <code>(<a href="#foldable-class">Foldable</a> :A) (<a href="#runtimerepr-class">RuntimeRepr</a> :B) &rArr; <a href="#into-class">Into</a> (:A :B) (<a href="#seq-type">Seq</a> :B)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#functor-class">Functor</a> <a href="#seq-type">Seq</a></code>
- <code><a href="#into-class">Into</a> (<a href="#seq-type">Seq</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#seq-type">Seq</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#seq-type">Seq</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#default-class">Default</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#fromiterator-class">FromIterator</a> (<a href="#seq-type">Seq</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#monoid-class">Monoid</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#semigroup-class">Semigroup</a> (<a href="#seq-type">Seq</a> :A)</code>

</details>



***

### Values

#### <a href="#conc-value"><code>(CONC LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L167-L208">src</a></sub></sup><a name="conc-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; ((<a href="#seq-type">Seq</a> :A) &rarr; (<a href="#seq-type">Seq</a> :A) &rarr; (<a href="#seq-type">Seq</a> :A))</code>

Concatenate two `Seq`s



***

#### <a href="#empty?-value"><code>(EMPTY? SEQ)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L78-L79">src</a></sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#seq-type">Seq</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>


***

#### <a href="#get-value"><code>(GET SEQ IDX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L82-L94">src</a></sub></sup><a name="get-value"></a>
<code>&forall; :A. ((<a href="#seq-type">Seq</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Get the member of `seq` at index `idx`, or `None` if `idx` is larger
than `(size seq)`



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L67-L69">src</a></sub></sup><a name="new-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; (<a href="#unit-type">Unit</a> &rarr; (<a href="#seq-type">Seq</a> :A))</code>

Create a new empty `Seq`.



***

#### <a href="#pop-value"><code>(POP SEQ)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L128-L165">src</a></sub></sup><a name="pop-value"></a>
<code>&forall; :A. ((<a href="#seq-type">Seq</a> :A) &rarr; (<a href="#optional-type">Optional</a> (<a href="#tuple-type">Tuple</a> :A (<a href="#seq-type">Seq</a> :A))))</code>

If `seq` is empty, return `None`. Otherwise, the last member of `seq` and
a new `Seq` instance.



***

#### <a href="#push-value"><code>(PUSH SEQ A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L118-L126">src</a></sub></sup><a name="push-value"></a>
<code>&forall; :A. ((<a href="#seq-type">Seq</a> :A) &rarr; :A &rarr; (<a href="#seq-type">Seq</a> :A))</code>

Push `a` onto the end of `seq`, returning a new `Seq` instance.



***

#### <a href="#put-value"><code>(PUT SEQ IDX A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L97-L116">src</a></sub></sup><a name="put-value"></a>
<code>&forall; :A. ((<a href="#seq-type">Seq</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; :A &rarr; (<a href="#optional-type">Optional</a> (<a href="#seq-type">Seq</a> :A)))</code>

If `idx` is less than `(size seq)`, Return a new `seq` whose `idx` position
contains `a`.



***

#### <a href="#size-value"><code>(SIZE SEQ)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L72-L76">src</a></sub></sup><a name="size-value"></a>
<code>&forall; :A. ((<a href="#seq-type">Seq</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Return the number of elements in the `seq`.



***

### Macros

#### <a href="#coalton-seq-make-macro"><code>MAKE (&amp;REST ELEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-seq-make-macro"></a>

Create a new `Seq` containing `elems`.



***

# Package `COALTON/SLICE`<a name="coalton/slice-package"></a>

### Types

#### <a href="#slice-type"><code>Slice</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L39-L39">src</a></sub></sup><a name="slice-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#slice-type">Slice</a> :A)</code>
- <code><a href="#foldable-class">Foldable</a> <a href="#slice-type">Slice</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#slice-type">Slice</a> :A) :A</code>
- <code><a href="#into-class">Into</a> (<a href="#slice-type">Slice</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> :A) (<a href="#slice-type">Slice</a> :A)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#slice-type">Slice</a> :A) :A</code>
- <code><a href="#iso-class">Iso</a> (<a href="#slice-type">Slice</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#slice-type">Slice</a> :A)</code>
- <code><a href="#sliceable-class">Sliceable</a> (<a href="#slice-type">Slice</a> :A)</code>

</details>



***

### Values

#### <a href="#index-value"><code>(INDEX IDX S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L88-L92">src</a></sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#slice-type">Slice</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Lookup the element at `index` in `s`.



***

#### <a href="#index-unsafe-value"><code>(INDEX-UNSAFE IDX S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L96-L99">src</a></sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#slice-type">Slice</a> :A) &rarr; :A)</code>

Lookup the element at `index` in `s` without bounds checking.



***

#### <a href="#iter-chunked-value"><code>(ITER-CHUNKED SIZE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L119-L144">src</a></sub></sup><a name="iter-chunked-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">Sliceable</a> (:A :B) &rArr; (<a href="#ufix-type">UFix</a> &rarr; (:A :B) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#slice-type">Slice</a> :B)))</code>

Divide `s` into a series of slices of length `size`. Will return a final shorter slice if `s` does not divide evenly.



***

#### <a href="#iter-chunked-exact-value"><code>(ITER-CHUNKED-EXACT SIZE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L147-L159">src</a></sub></sup><a name="iter-chunked-exact-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">Sliceable</a> (:A :B) &rArr; (<a href="#ufix-type">UFix</a> &rarr; (:A :B) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#slice-type">Slice</a> :B)))</code>

Divide `s` into a series of slices of length `size`. Will skip trailing elements if `s` does not divide evenly.



***

#### <a href="#iter-sliding-value"><code>(ITER-SLIDING SIZE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L102-L116">src</a></sub></sup><a name="iter-sliding-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">Sliceable</a> (:A :B) &rArr; (<a href="#ufix-type">UFix</a> &rarr; (:A :B) &rarr; (<a href="#iterator-type">Iterator</a> (<a href="#slice-type">Slice</a> :B)))</code>

Returns an iterator that yields a series of overlapping slices of length `size`.



***

#### <a href="#length-value"><code>(LENGTH S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L74-L77">src</a></sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#slice-type">Slice</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Returns the length of `s`.



***

#### <a href="#new-value"><code>(NEW START LEN V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L53-L70">src</a></sub></sup><a name="new-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">Sliceable</a> (:A :B) &rArr; (<a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; (:A :B) &rarr; (<a href="#slice-type">Slice</a> :B))</code>

Create a new slice backed by `v` starting at index `start` and continuing for `len` elements.



***

#### <a href="#set!-value"><code>(SET! IDX ITEM S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L81-L85">src</a></sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; :A &rarr; (<a href="#slice-type">Slice</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Set the element at index `idx` in `s` to `item`.



***

# Package `COALTON/STRING`<a name="coalton/string-package"></a>

### Values

#### <a href="#chars-value"><code>(CHARS STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L153-L155">src</a></sub></sup><a name="chars-value"></a>
<code>(<a href="#string-type">String</a> &rarr; (<a href="#iterator-type">Iterator</a> <a href="#char-type">Char</a>))</code>

Returns an iterator over the characters in `str`.



***

#### <a href="#concat-value"><code>(CONCAT STR1 STR2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L55-L58">src</a></sub></sup><a name="concat-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a> &rarr; <a href="#string-type">String</a>)</code>

Concatenate STR1 and STR2 together, returning a new string.



***

#### <a href="#downcase-value"><code>(DOWNCASE STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L164-L167">src</a></sub></sup><a name="downcase-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a>)</code>

Returns a new string with lowercase characters.



***

#### <a href="#length-value"><code>(LENGTH STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L66-L69">src</a></sub></sup><a name="length-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#ufix-type">UFix</a>)</code>

The length of a string STR.



***

#### <a href="#parse-int-value"><code>(PARSE-INT STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L115-L121">src</a></sub></sup><a name="parse-int-value"></a>
<code>(<a href="#string-type">String</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#integer-type">Integer</a>))</code>

Parse the integer in string `str`.



***

#### <a href="#ref-value"><code>(REF STR IDX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L130-L134">src</a></sub></sup><a name="ref-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#char-type">Char</a>))</code>

Return the `idx`th character of `str`.



***

#### <a href="#ref-unchecked-value"><code>(REF-UNCHECKED STR IDX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L124-L127">src</a></sub></sup><a name="ref-unchecked-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#char-type">Char</a>)</code>

Return the `idx`th character of `str`. This function is partial.



***

#### <a href="#reverse-value"><code>(REVERSE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L61-L63">src</a></sub></sup><a name="reverse-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a>)</code>

Reverse a string.



***

#### <a href="#split-value"><code>(SPLIT C STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L86-L91">src</a></sub></sup><a name="split-value"></a>
<code>(<a href="#char-type">Char</a> &rarr; <a href="#string-type">String</a> &rarr; (<a href="#list-type">List</a> <a href="#string-type">String</a>))</code>

Split a string around the separator character `c`.



***

#### <a href="#split-at-value"><code>(SPLIT-AT N STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L80-L83">src</a></sub></sup><a name="split-at-value"></a>
<code>(<a href="#ufix-type">UFix</a> &rarr; <a href="#string-type">String</a> &rarr; (<a href="#tuple-type">Tuple</a> <a href="#string-type">String</a> <a href="#string-type">String</a>))</code>

Splits a string into a substring of the first N characters and a substring of the remaining characters.



***

#### <a href="#strip-prefix-value"><code>(STRIP-PREFIX PREFIX STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L94-L101">src</a></sub></sup><a name="strip-prefix-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#string-type">String</a>))</code>

Returns a string without a give prefix, or `None` if the string
does not have that suffix.



***

#### <a href="#strip-suffix-value"><code>(STRIP-SUFFIX SUFFIX STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L104-L112">src</a></sub></sup><a name="strip-suffix-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#string-type">String</a>))</code>

Returns a string without a give suffix, or `None` if the string
does not have that suffix.



***

#### <a href="#substring-value"><code>(SUBSTRING STR START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L72-L77">src</a></sub></sup><a name="substring-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#string-type">String</a>)</code>

Compute a substring of a string bounded by given indices.



***

#### <a href="#substring-index-value"><code>(SUBSTRING-INDEX SMALL BIG)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L137-L142">src</a></sub></sup><a name="substring-index-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#ufix-type">UFix</a>))</code>

If the first argument appears as a substring within the second argument, return the starting index into the second argument.



***

#### <a href="#substring?-value"><code>(SUBSTRING? SMALL BIG)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L145-L150">src</a></sub></sup><a name="substring?-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Return true if the first argument appears as a substring within the second argument.



***

#### <a href="#upcase-value"><code>(UPCASE STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L158-L161">src</a></sub></sup><a name="upcase-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a>)</code>

Returns a new string with uppercase characters.



***

# Package `COALTON/SYMBOL`<a name="coalton/symbol-package"></a>


An interface to Common Lisp symbols.

### Types

#### <a href="#symbol-type"><code>Symbol</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.lisp#L29-L30">src</a></sub></sup><a name="symbol-type"></a>

A Common Lisp symbol.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">Default</a> <a href="#symbol-type">Symbol</a></code>
- <code><a href="#eq-class">Eq</a> <a href="#symbol-type">Symbol</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#symbol-type">Symbol</a></code>

</details>



***

### Values

#### <a href="#gensym-value"><code>(GENSYM _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.lisp#L71-L74">src</a></sub></sup><a name="gensym-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#symbol-type">Symbol</a>)</code>

Make an uninterned symbol as by `cl:gensym`.



***

#### <a href="#keyword?-value"><code>(KEYWORD? S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.lisp#L48-L51">src</a></sub></sup><a name="keyword?-value"></a>
<code>(<a href="#symbol-type">Symbol</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is the symbol `s` a Common Lisp keyword?



***

#### <a href="#make-keyword-value"><code>(MAKE-KEYWORD S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.lisp#L55-L60">src</a></sub></sup><a name="make-keyword-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#symbol-type">Symbol</a>)</code>

Find or make a keyword named `s`.

**WARNING**: This function interns a new symbol. It will not get garbage collected. Use with caution.



***

#### <a href="#make-symbol-value"><code>(MAKE-SYMBOL S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.lisp#L64-L67">src</a></sub></sup><a name="make-symbol-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#symbol-type">Symbol</a>)</code>

Make an uninterned symbol with the name `s`.



***

#### <a href="#symbol-name-value"><code>(SYMBOL-NAME S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.lisp#L34-L37">src</a></sub></sup><a name="symbol-name-value"></a>
<code>(<a href="#symbol-type">Symbol</a> &rarr; <a href="#string-type">String</a>)</code>

Return the name of the symbol `s`.



***

#### <a href="#uninterned?-value"><code>(UNINTERNED? S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.lisp#L41-L44">src</a></sub></sup><a name="uninterned?-value"></a>
<code>(<a href="#symbol-type">Symbol</a> &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is the symbol `s` uninterned?



***

# Package `COALTON/SYSTEM`<a name="coalton/system-package"></a>

### Types

#### <a href="#lispcondition-type"><code>LispCondition</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L181-L182">src</a></sub></sup><a name="lispcondition-type"></a>

Condition for lisp error handling. Uses `cl:condition`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#lispcondition-type">LispCondition</a></code>
- <code><a href="#signalable-class">Signalable</a> <a href="#lispcondition-type">LispCondition</a></code>

</details>



***

### Structs

#### <a href="#meteredresult-type"><code>MeteredResult :A</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L145-L152">src</a></sub></sup><a name="meteredresult-type"></a>

Function output with space and timing metedata.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#meteredresult-type">MeteredResult</a> :A)</code>

</details>



***

### Values

#### <a href="#add-feature-value"><code>(ADD-FEATURE FEAT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L251-L257">src</a></sub></sup><a name="add-feature-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Adds a feature `feat` to `cl:*features*`.



***

#### <a href="#architecture-value"><code>(ARCHITECTURE _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L215-L218">src</a></sub></sup><a name="architecture-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#string-type">String</a>)</code>

The system's architecture (stored at compile time).



***

#### <a href="#argv0-value"><code>(ARGV0 _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L270-L276">src</a></sub></sup><a name="argv0-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#string-type">String</a>))</code>

The first command line argument (stored at compile time).



***

#### <a href="#cmd-args-value"><code>(CMD-ARGS _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L264-L267">src</a></sub></sup><a name="cmd-args-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; (<a href="#list-type">List</a> <a href="#string-type">String</a>))</code>

The current command line arguments (stored at compile time).



***

#### <a href="#features-value"><code>(FEATURES _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L245-L248">src</a></sub></sup><a name="features-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; (<a href="#list-type">List</a> <a href="#string-type">String</a>))</code>

Returns a list of active features, from `cl:*features*`.



***

#### <a href="#gc-value"><code>(GC _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L50-L54">src</a></sub></sup><a name="gc-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Perform a full garbage collection.



***

#### <a href="#get-real-time-value"><code>(GET-REAL-TIME _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L85-L88">src</a></sub></sup><a name="get-real-time-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#integer-type">Integer</a>)</code>

Gets the real-time in internal time units. The difference between two successive calls to this function represents the time that has elapsed.



***

#### <a href="#getenv-value"><code>(GETENV VAR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L194-L200">src</a></sub></sup><a name="getenv-value"></a>
<code>(<a href="#string-type">String</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#string-type">String</a>))</code>

Gets the value of the environmental variable `var`, errors if `var` doesn't exist.



***

#### <a href="#hostname-value"><code>(HOSTNAME _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L227-L230">src</a></sub></sup><a name="hostname-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#string-type">String</a>)</code>

Returns the system's hostname. This is a function because the hostname can be redefined.



***

#### <a href="#implementation-value"><code>(IMPLEMENTATION _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L233-L236">src</a></sub></sup><a name="implementation-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#string-type">String</a>)</code>

The lisp implementation (stored at compile time).



***

#### <a href="#lisp-version-value"><code>(LISP-VERSION _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L239-L242">src</a></sub></sup><a name="lisp-version-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#string-type">String</a>)</code>

The lisp implementation version (stored at compile time).



***

#### <a href="#monotonic-bytes-consed-value"><code>(MONOTONIC-BYTES-CONSED _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L108-L116">src</a></sub></sup><a name="monotonic-bytes-consed-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; (<a href="#optional-type">Optional</a> <a href="#integer-type">Integer</a>))</code>

Returns the number of bytes consed since some unspecified point in time.

The difference between two successive calls to this function represents the number of bytes consed in that period of time.



***

#### <a href="#os-value"><code>(OS _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L221-L224">src</a></sub></sup><a name="os-value"></a>
<code>(<a href="#unit-type">Unit</a> &rarr; <a href="#string-type">String</a>)</code>

The system's operating system (stored at compile time).



***

#### <a href="#setenv!-value"><code>(SETENV! VAR VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L204-L208">src</a></sub></sup><a name="setenv!-value"></a>
<code>(<a href="#string-type">String</a> &rarr; <a href="#string-type">String</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Sets an environment variable `var` to string `val`, only if `var` already exists.



***

#### <a href="#sleep-value"><code>(SLEEP N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L57-L66">src</a></sub></sup><a name="sleep-value"></a>
<code>&forall; :A. <a href="#rational-class">Rational</a> :A &rArr; (:A &rarr; <a href="#unit-type">Unit</a>)</code>

Sleep for `n` seconds, where `n` can be of any type with an instance of `Rational`.

Sleep uses type class `Rational`'s `best-approx` instead of `Real`'s `real-approx` because it handles the approximation without arbitrary precision. The only `Real` type excluded by this decision is `CReal`.



***

#### <a href="#space-value"><code>(SPACE F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L133-L143">src</a></sub></sup><a name="space-value"></a>
<code>&forall; :A. ((<a href="#unit-type">Unit</a> &rarr; :A) &rarr; (<a href="#tuple-type">Tuple</a> :A (<a href="#optional-type">Optional</a> <a href="#integer-type">Integer</a>)))</code>

Run the thunk `f` and return a tuple containing its value along with the approximate number of bytes consed during the course of executing f.

The amount of space used may be peculiar to the implementation, such as rounding to certain page boundaries.

A garbage collection will be forced prior to invoking `f`.



***

#### <a href="#spacetime-value"><code>(SPACETIME F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L155-L171">src</a></sub></sup><a name="spacetime-value"></a>
<code>&forall; :A. ((<a href="#unit-type">Unit</a> &rarr; :A) &rarr; (<a href="#meteredresult-type">MeteredResult</a> :A))</code>

Runs a function, gathering space and timing information and returning a `MeteredResults` object.

Garbage collection will be performed before profiling is performed.



***

#### <a href="#time-value"><code>(TIME F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L123-L130">src</a></sub></sup><a name="time-value"></a>
<code>&forall; :A. ((<a href="#unit-type">Unit</a> &rarr; :A) &rarr; (<a href="#tuple-type">Tuple</a> :A <a href="#integer-type">Integer</a>))</code>

Run the thunk `f` and return a tuple containing its value along with the run time in microseconds.

While the result will always contain microseconds, some implementations may return a value rounded to less precision (e.g., rounded to the nearest second or millisecond).



***

#### <a href="#time-units->rounded-microseconds-value"><code>(TIME-UNITS-&gt;ROUNDED-MICROSECONDS T)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L102-L105">src</a></sub></sup><a name="time-units->rounded-microseconds-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#integer-type">Integer</a>)</code>

Converts internal time units into an integer number of rounded microseconds.



***

#### <a href="#time-units->seconds-value"><code>(TIME-UNITS-&gt;SECONDS T)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L97-L99">src</a></sub></sup><a name="time-units->seconds-value"></a>
<code>(<a href="#integer-type">Integer</a> &rarr; <a href="#fraction-type">Fraction</a>)</code>

Converts internal time units into `Fraction` seconds.



***

#### <a href="#internal-time-units-per-second-value"><code>INTERNAL-TIME-UNITS-PER-SECOND</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L91-L94">src</a></sub></sup><a name="internal-time-units-per-second-value"></a>
<code><a href="#integer-type">Integer</a></code>

The number of internal time units per second. This is implementation specific.



***

# Package `COALTON/TUPLE`<a name="coalton/tuple-package"></a>

### Structs

#### <a href="#tuple3-type"><code>Tuple3 :A :B :C</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L56-L59">src</a></sub></sup><a name="tuple3-type"></a>
- <code>FIRST :: :A</code>
- <code>SECOND :: :B</code>
- <code>THIRD :: :C</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) (<a href="#default-class">Default</a> :C) &rArr; <a href="#default-class">Default</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#eq-class">Eq</a> :C) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) (<a href="#hash-class">Hash</a> :C) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>

</details>



***

#### <a href="#tuple4-type"><code>Tuple4 :A :B :C :D</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L74-L78">src</a></sub></sup><a name="tuple4-type"></a>
- <code>FIRST :: :A</code>
- <code>SECOND :: :B</code>
- <code>THIRD :: :C</code>
- <code>FOURTH :: :D</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) (<a href="#default-class">Default</a> :C) (<a href="#default-class">Default</a> :D) &rArr; <a href="#default-class">Default</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#eq-class">Eq</a> :C) (<a href="#eq-class">Eq</a> :D) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) (<a href="#hash-class">Hash</a> :C) (<a href="#hash-class">Hash</a> :D) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>

</details>



***

#### <a href="#tuple5-type"><code>Tuple5 :A :B :C :D :E</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L94-L99">src</a></sub></sup><a name="tuple5-type"></a>
- <code>FIRST :: :A</code>
- <code>SECOND :: :B</code>
- <code>THIRD :: :C</code>
- <code>FOURTH :: :D</code>
- <code>FIFTH :: :E</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">Default</a> :A) (<a href="#default-class">Default</a> :B) (<a href="#default-class">Default</a> :C) (<a href="#default-class">Default</a> :D) (<a href="#default-class">Default</a> :E) &rArr; <a href="#default-class">Default</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#eq-class">Eq</a> :A) (<a href="#eq-class">Eq</a> :B) (<a href="#eq-class">Eq</a> :C) (<a href="#eq-class">Eq</a> :D) (<a href="#eq-class">Eq</a> :E) &rArr; <a href="#eq-class">Eq</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#hash-class">Hash</a> :A) (<a href="#hash-class">Hash</a> :B) (<a href="#hash-class">Hash</a> :C) (<a href="#hash-class">Hash</a> :D) (<a href="#hash-class">Hash</a> :E) &rArr; <a href="#hash-class">Hash</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>

</details>



***

### Values

#### <a href="#fst-value"><code>(FST (TUPLE A _))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L37-L39">src</a></sub></sup><a name="fst-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type">Tuple</a> :A :B) &rarr; :A)</code>

Get the first element of a tuple.



***

#### <a href="#sequence-tuple-value"><code>(SEQUENCE-TUPLE (TUPLE A? B?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L47-L53">src</a></sub></sup><a name="sequence-tuple-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">Monad</a> :A &rArr; ((<a href="#tuple-type">Tuple</a> (:A :B) (:A :C)) &rarr; (:A (<a href="#tuple-type">Tuple</a> :B :C)))</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#sequence-tuple3-value"><code>(SEQUENCE-TUPLE3 (TUPLE3 A? B? C?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L64-L71">src</a></sub></sup><a name="sequence-tuple3-value"></a>
<code>&forall; :A :B :C :D. <a href="#monad-class">Monad</a> :A &rArr; ((<a href="#tuple3-type">Tuple3</a> (:A :B) (:A :C) (:A :D)) &rarr; (:A (<a href="#tuple3-type">Tuple3</a> :B :C :D)))</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#sequence-tuple4-value"><code>(SEQUENCE-TUPLE4 (TUPLE4 A? B? C? D?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L83-L91">src</a></sub></sup><a name="sequence-tuple4-value"></a>
<code>&forall; :A :B :C :D :E. <a href="#monad-class">Monad</a> :A &rArr; ((<a href="#tuple4-type">Tuple4</a> (:A :B) (:A :C) (:A :D) (:A :E)) &rarr; (:A (<a href="#tuple4-type">Tuple4</a> :B :C :D :E)))</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#sequence-tuple5-value"><code>(SEQUENCE-TUPLE5 (TUPLE5 A? B? C? D? E?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L104-L113">src</a></sub></sup><a name="sequence-tuple5-value"></a>
<code>&forall; :A :B :C :D :E :F. <a href="#monad-class">Monad</a> :A &rArr; ((<a href="#tuple5-type">Tuple5</a> (:A :B) (:A :C) (:A :D) (:A :E) (:A :F)) &rarr; (:A (<a href="#tuple5-type">Tuple5</a> :B :C :D :E :F)))</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#snd-value"><code>(SND (TUPLE _ B))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L42-L44">src</a></sub></sup><a name="snd-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type">Tuple</a> :A :B) &rarr; :B)</code>

Get the second element of a tuple.



***

# Package `COALTON/TYPES`<a name="coalton/types-package"></a>

### Types

#### <a href="#lisptype-type"><code>LispType</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L44-L45">src</a></sub></sup><a name="lisptype-type"></a>

The runtime representation of a Coalton type as a lisp type.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">Eq</a> <a href="#lisptype-type">LispType</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#lisptype-type">LispType</a></code>

</details>



***

#### <a href="#proxy-type"><code>Proxy</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L22-L24">src</a></sub></sup><a name="proxy-type"></a>
- <code>Proxy</code> 

Proxy holds no data, but has a phantom type parameter.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#proxy-type">Proxy</a> :A)</code>

</details>



***

### Classes

#### <a href="#runtimerepr-class"><code>RuntimeRepr</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L47-L53">src</a></sub></sup><a name="runtimerepr-class"></a>
<code><a href="#runtimerepr-class">RuntimeRepr</a> :A</code>


Types which have a runtime LispType representation.

`runtime-repr` corresponds to the type emitted by the Coalton compiler for the type parameter to the given Proxy.

The compiler will auto-generate instances of `RuntimeRepr` for all defined types.

Methods:
- <code>RUNTIME-REPR :: ((<a href="#proxy-type">Proxy</a> :A) &rarr; <a href="#lisptype-type">LispType</a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#creal-type">CReal</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#big-float-type">Big-Float</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#roundingmode-type">RoundingMode</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#streamoptions-type">StreamOptions</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ifexists-type">IfExists</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#filestream-type">FileStream</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#fileerror-type">FileError</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#pathname-type">Pathname</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#lispcondition-type">LispCondition</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#meteredresult-type">MeteredResult</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#seq-type">Seq</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#ordmap-type">OrdMap</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#mappair-type">MapPair</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#ordtree-type">OrdTree</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> ((<a href="#loopt-type">LoopT</a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#step-type">Step</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#freet-type">FreeT</a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#freef-type">FreeF</a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> ((<a href="#free-type">Free</a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> ((<a href="#optionalt-type">OptionalT</a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#resultt-type">ResultT</a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#envt-type">EnvT</a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#env-type">Env</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (((<a href="#statet-type">StateT</a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#st-type">ST</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#identity-type">Identity</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#queue-type">Queue</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#insertionmode-type">InsertionMode</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hashmap-type">HashMap</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hmnode-type">HmNode</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hmentry-type">HmEntry</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hashtable-type">Hashtable</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#slice-type">Slice</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#lisparray-type">LispArray</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#rangestatus-type">RangeStatus</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#iterator-type">Iterator</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple3-type">Tuple3</a> :A :B :C)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#cell-type">Cell</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#hyperdual-type">Hyperdual</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#dual-type">Dual</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#dyadic-type">Dyadic</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#complex-type">Complex</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#quantization-type">Quantization</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#symbol-type">Symbol</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ord-type">Ord</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#hash-type">Hash</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#result-type">Result</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ufix-type">UFix</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#ifix-type">IFix</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i64-type">I64</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i32-type">I32</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i16-type">I16</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#i8-type">I8</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u64-type">U64</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u32-type">U32</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u16-type">U16</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#u8-type">U8</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#bit-type">Bit</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#void-type">Void</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#proxy-type">Proxy</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#lisptype-type">LispType</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#optional-type">Optional</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#list-type">List</a> :A)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (:A &rarr; :B)</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#fraction-type">Fraction</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#string-type">String</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#f64-type">F64</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#f32-type">F32</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#integer-type">Integer</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#char-type">Char</a></code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> <a href="#boolean-type">Boolean</a></code>

</details>



***

### Values

#### <a href="#as-proxy-of-value"><code>(AS-PROXY-OF X _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L34-L36">src</a></sub></sup><a name="as-proxy-of-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#proxy-type">Proxy</a> :A) &rarr; :A)</code>

Returns the parameter, forcing the proxy to have the same type as the parameter.



***

#### <a href="#proxy-inner-value"><code>(PROXY-INNER _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L40-L41">src</a></sub></sup><a name="proxy-inner-value"></a>
<code>&forall; :A :B. ((<a href="#proxy-type">Proxy</a> (:A :B)) &rarr; (<a href="#proxy-type">Proxy</a> :B))</code>


***

#### <a href="#proxy-of-value"><code>(PROXY-OF _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L28-L30">src</a></sub></sup><a name="proxy-of-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#proxy-type">Proxy</a> :A))</code>

Returns a Proxy containing the type of the parameter.



***

#### <a href="#runtime-repr-of-value"><code>(RUNTIME-REPR-OF X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L57-L59">src</a></sub></sup><a name="runtime-repr-of-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RuntimeRepr</a> :A &rArr; (:A &rarr; <a href="#lisptype-type">LispType</a>)</code>

Returns the runtime representation of the type of the given value.



***

# Package `COALTON/VECTOR`<a name="coalton/vector-package"></a>

### Types

#### <a href="#vector-type"><code>Vector</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L64-L64">src</a></sub></sup><a name="vector-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#default-class">Default</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#eq-class">Eq</a> :A &rArr; <a href="#eq-class">Eq</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#foldable-class">Foldable</a> <a href="#vector-type">Vector</a></code>
- <code><a href="#fromiterator-class">FromIterator</a> (<a href="#vector-type">Vector</a> :A) :A</code>
- <code><a href="#functor-class">Functor</a> <a href="#vector-type">Vector</a></code>
- <code><a href="#into-class">Into</a> (<a href="#list-type">List</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#seq-type">Seq</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#slice-type">Slice</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> :A) (<a href="#slice-type">Slice</a> :A)</code>
- <code><a href="#into-class">Into</a> (<a href="#vector-type">Vector</a> <a href="#char-type">Char</a>) <a href="#string-type">String</a></code>
- <code><a href="#into-class">Into</a> <a href="#string-type">String</a> (<a href="#vector-type">Vector</a> <a href="#char-type">Char</a>)</code>
- <code><a href="#intoiterator-class">IntoIterator</a> (<a href="#vector-type">Vector</a> :A) :A</code>
- <code><a href="#iso-class">Iso</a> (<a href="#slice-type">Slice</a> :A) (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#iso-class">Iso</a> (<a href="#vector-type">Vector</a> :A) (<a href="#list-type">List</a> :A)</code>
- <code><a href="#monoid-class">Monoid</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#randomaccess-class">RandomAccess</a> (<a href="#vector-type">Vector</a> :A) :A</code>
- <code><a href="#runtimerepr-class">RuntimeRepr</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#semigroup-class">Semigroup</a> (<a href="#vector-type">Vector</a> :A)</code>
- <code><a href="#sliceable-class">Sliceable</a> (<a href="#vector-type">Vector</a> :A)</code>

</details>



***

### Values

#### <a href="#append-value"><code>(APPEND V1 V2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L251-L256">src</a></sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Create a new vector containing the elements of `v1` followed by the elements of `v2`.



***

#### <a href="#capacity-value"><code>(CAPACITY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L113-L116">src</a></sub></sup><a name="capacity-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Returns the number of elements that `v` can store without resizing.



***

#### <a href="#clear!-value"><code>(CLEAR! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L164-L166">src</a></sub></sup><a name="clear!-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Set the capacity of `v` to `0`.



***

#### <a href="#copy-value"><code>(COPY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L132-L137">src</a></sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Return a new vector containing the same elements as `v`.



***

#### <a href="#empty?-value"><code>(EMPTY? V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L120-L122">src</a></sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `v` empty?



***

#### <a href="#extend!-value"><code>(EXTEND! VEC ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L307-L323">src</a></sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B. <a href="#intoiterator-class">IntoIterator</a> :B :A &rArr; ((<a href="#vector-type">Vector</a> :A) &rarr; :B &rarr; <a href="#unit-type">Unit</a>)</code>

Push every element in `iter` to the end of `vec`.



***

#### <a href="#find-elem-value"><code>(FIND-ELEM E V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L236-L248">src</a></sub></sup><a name="find-elem-value"></a>
<code>&forall; :A. <a href="#eq-class">Eq</a> :A &rArr; (:A &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#optional-type">Optional</a> <a href="#ufix-type">UFix</a>))</code>

Find the index of element `e` in `v`.



***

#### <a href="#head-value"><code>(HEAD V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L213-L215">src</a></sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Return the first item of `v`.



***

#### <a href="#head-unsafe-value"><code>(HEAD-UNSAFE V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L219-L221">src</a></sub></sup><a name="head-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; :A)</code>

Return the first item of `v` without first checking if `v` is empty.



***

#### <a href="#index-value"><code>(INDEX INDEX V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L190-L194">src</a></sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Return the `index`th element of `v`.



***

#### <a href="#index-unsafe-value"><code>(INDEX-UNSAFE IDX V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L198-L201">src</a></sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; :A)</code>

Return the `idx`th element of `v` without checking if the element exists.



***

#### <a href="#last-value"><code>(LAST V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L224-L228">src</a></sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Return the last element of `v`.



***

#### <a href="#last-unsafe-value"><code>(LAST-UNSAFE V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L231-L233">src</a></sub></sup><a name="last-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; :A)</code>

Return the last element of `v` without first checking if `v` is empty.



***

#### <a href="#length-value"><code>(LENGTH V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L94-L97">src</a></sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Returns the length of `v`.



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L68-L70">src</a></sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#unit-type">Unit</a> &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Create a new empty vector



***

#### <a href="#pop!-value"><code>(POP! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L176-L180">src</a></sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Remove and return the last item of `v`.



***

#### <a href="#pop-unsafe!-value"><code>(POP-UNSAFE! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L184-L187">src</a></sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; :A)</code>

Remove and return the last item of `v` without checking if the vector is empty.



***

#### <a href="#push!-value"><code>(PUSH! ITEM V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L170-L173">src</a></sub></sup><a name="push!-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; <a href="#ufix-type">UFix</a>)</code>

Append `item` to `v` and resize `v` if necessary, returning the index of the new item.



***

#### <a href="#resect!-value"><code>(RESECT! V START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L151-L160">src</a></sub></sup><a name="resect!-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#unit-type">Unit</a>)</code>

Destructively kills a subsequence in a vector bounded by given indices.

`start` index is inclusive and `end` index is exclusive.



***

#### <a href="#reverse-value"><code>(REVERSE V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L265-L271">src</a></sub></sup><a name="reverse-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Returns a fresh vector with the elements of vector `v` in reverse order.  The original vector isn't modified.



***

#### <a href="#reverse!-value"><code>(REVERSE! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L259-L262">src</a></sub></sup><a name="reverse!-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Returns a vector with the elements of vector `v` in reverse order.  The original vector may be destroyed to produce the result.



***

#### <a href="#set!-value"><code>(SET! IDX ITEM V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L205-L209">src</a></sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; :A &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Set the `idx`th element of `v` to `item`. This function left intentionally unsafe because it does not have a return value to check.



***

#### <a href="#set-capacity!-value"><code>(SET-CAPACITY! NEW-CAPACITY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L140-L147">src</a></sub></sup><a name="set-capacity!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Set the capacity of `v` to `new-capacity`. Setting the capacity to lower then the length will remove elements from the end.



***

#### <a href="#singleton-value"><code>(SINGLETON X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L88-L90">src</a></sub></sup><a name="singleton-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Create a new vector with a single element equal to `x`



***

#### <a href="#singleton?-value"><code>(SINGLETON? V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L126-L128">src</a></sub></sup><a name="singleton?-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#boolean-type">Boolean</a>)</code>

Is `v` a singleton?



***

#### <a href="#sort!-value"><code>(SORT! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L302-L304">src</a></sub></sup><a name="sort!-value"></a>
<code>&forall; :A. <a href="#ord-class">Ord</a> :A &rArr; ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Sort a vector in-place in ascending order.



***

#### <a href="#sort-by!-value"><code>(SORT-BY! F V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L291-L298">src</a></sub></sup><a name="sort-by!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">Boolean</a>) &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; <a href="#unit-type">Unit</a>)</code>

Sort a vector in-place with predicate function `f`.



***

#### <a href="#subseq-value"><code>(SUBSEQ V START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L101-L109">src</a></sub></sup><a name="subseq-value"></a>
<code>&forall; :A. ((<a href="#vector-type">Vector</a> :A) &rarr; <a href="#ufix-type">UFix</a> &rarr; <a href="#ufix-type">UFix</a> &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Compute a subseq of a vector bounded by given indices.

`start` index is inclusive and `end` index is exclusive.



***

#### <a href="#swap-remove!-value"><code>(SWAP-REMOVE! IDX VEC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L274-L278">src</a></sub></sup><a name="swap-remove!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; (<a href="#optional-type">Optional</a> :A))</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec`. Then return the removed element.



***

#### <a href="#swap-remove-unsafe!-value"><code>(SWAP-REMOVE-UNSAFE! IDX VEC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L281-L288">src</a></sub></sup><a name="swap-remove-unsafe!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#vector-type">Vector</a> :A) &rarr; :A)</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec` without bounds checking. Then return the removed element.



***

#### <a href="#with-capacity-value"><code>(WITH-CAPACITY N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L74-L77">src</a></sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Create a new vector with `n` elements preallocated.



***

#### <a href="#with-initial-element-value"><code>(WITH-INITIAL-ELEMENT N X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L80-L84">src</a></sub></sup><a name="with-initial-element-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFix</a> &rarr; :A &rarr; (<a href="#vector-type">Vector</a> :A))</code>

Create a new vector with `n` elements equal to `x`.



***

### Macros

#### <a href="#coalton-vector-make-macro"><code>MAKE (&amp;REST ELEMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-vector-make-macro"></a>

Construct a `Vector' containing the ELEMENTS, in the order listed.



***

</div>
