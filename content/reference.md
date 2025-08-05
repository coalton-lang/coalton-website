---
identifier: Reference
summary: 'The Coalton standard library reference.'
math: true
layout: two-pane
---
<aside class="sidebar">

### Reference

<div class="symbol-search">
  <input type="text" id="symbol-search-input" placeholder="Search symbols..." autocomplete="off">
  <div class="search-results" id="search-results"></div>
</div>

- <a href="#coalton-package"><code>COALTON</code></a>
- <a href="#coalton-library/big-float-package"><code>COALTON-LIBRARY/BIG-FLOAT</code></a>
- <a href="#coalton-library/bits-package"><code>COALTON-LIBRARY/BITS</code></a>
- <a href="#coalton-library/builtin-package"><code>COALTON-LIBRARY/BUILTIN</code></a>
- <a href="#coalton-library/cell-package"><code>COALTON-LIBRARY/CELL</code></a>
- <a href="#coalton-library/char-package"><code>COALTON-LIBRARY/CHAR</code></a>
- <a href="#coalton-library/classes-package"><code>COALTON-LIBRARY/CLASSES</code></a>
- <a href="#coalton-library/computable-reals-package"><code>COALTON-LIBRARY/COMPUTABLE-REALS</code></a>
- <a href="#coalton-library/experimental/loops-package"><code>COALTON-LIBRARY/EXPERIMENTAL/LOOPS</code></a>
- <a href="#coalton-library/file-package"><code>COALTON-LIBRARY/FILE</code></a>
- <a href="#coalton-library/functions-package"><code>COALTON-LIBRARY/FUNCTIONS</code></a>
- <a href="#coalton-library/hash-package"><code>COALTON-LIBRARY/HASH</code></a>
- <a href="#coalton-library/hashmap-package"><code>COALTON-LIBRARY/HASHMAP</code></a>
- <a href="#coalton-library/hashtable-package"><code>COALTON-LIBRARY/HASHTABLE</code></a>
- <a href="#coalton-library/iterator-package"><code>COALTON-LIBRARY/ITERATOR</code></a>
- <a href="#coalton-library/lisparray-package"><code>COALTON-LIBRARY/LISPARRAY</code></a>
- <a href="#coalton-library/list-package"><code>COALTON-LIBRARY/LIST</code></a>
- <a href="#coalton-library/math/arith-package"><code>COALTON-LIBRARY/MATH/ARITH</code></a>
- <a href="#coalton-library/math/bounded-package"><code>COALTON-LIBRARY/MATH/BOUNDED</code></a>
- <a href="#coalton-library/math/complex-package"><code>COALTON-LIBRARY/MATH/COMPLEX</code></a>
- <a href="#coalton-library/math/dual-package"><code>COALTON-LIBRARY/MATH/DUAL</code></a>
- <a href="#coalton-library/math/dyadic-package"><code>COALTON-LIBRARY/MATH/DYADIC</code></a>
- <a href="#coalton-library/math/elementary-package"><code>COALTON-LIBRARY/MATH/ELEMENTARY</code></a>
- <a href="#coalton-library/math/fraction-package"><code>COALTON-LIBRARY/MATH/FRACTION</code></a>
- <a href="#coalton-library/math/hyperdual-package"><code>COALTON-LIBRARY/MATH/HYPERDUAL</code></a>
- <a href="#coalton-library/math/integral-package"><code>COALTON-LIBRARY/MATH/INTEGRAL</code></a>
- <a href="#coalton-library/math/real-package"><code>COALTON-LIBRARY/MATH/REAL</code></a>
- <a href="#coalton-library/monad/environment-package"><code>COALTON-LIBRARY/MONAD/ENVIRONMENT</code></a>
- <a href="#coalton-library/monad/free-package"><code>COALTON-LIBRARY/MONAD/FREE</code></a>
- <a href="#coalton-library/monad/freet-package"><code>COALTON-LIBRARY/MONAD/FREET</code></a>
- <a href="#coalton-library/monad/identity-package"><code>COALTON-LIBRARY/MONAD/IDENTITY</code></a>
- <a href="#coalton-library/monad/optionalt-package"><code>COALTON-LIBRARY/MONAD/OPTIONALT</code></a>
- <a href="#coalton-library/monad/resultt-package"><code>COALTON-LIBRARY/MONAD/RESULTT</code></a>
- <a href="#coalton-library/monad/state-package"><code>COALTON-LIBRARY/MONAD/STATE</code></a>
- <a href="#coalton-library/optional-package"><code>COALTON-LIBRARY/OPTIONAL</code></a>
- <a href="#coalton-library/ordmap-package"><code>COALTON-LIBRARY/ORDMAP</code></a>
- <a href="#coalton-library/ordtree-package"><code>COALTON-LIBRARY/ORDTREE</code></a>
- <a href="#coalton-library/queue-package"><code>COALTON-LIBRARY/QUEUE</code></a>
- <a href="#coalton-library/randomaccess-package"><code>COALTON-LIBRARY/RANDOMACCESS</code></a>
- <a href="#coalton-library/result-package"><code>COALTON-LIBRARY/RESULT</code></a>
- <a href="#coalton-library/seq-package"><code>COALTON-LIBRARY/SEQ</code></a>
- <a href="#coalton-library/slice-package"><code>COALTON-LIBRARY/SLICE</code></a>
- <a href="#coalton-library/string-package"><code>COALTON-LIBRARY/STRING</code></a>
- <a href="#coalton-library/system-package"><code>COALTON-LIBRARY/SYSTEM</code></a>
- <a href="#coalton-library/tuple-package"><code>COALTON-LIBRARY/TUPLE</code></a>
- <a href="#coalton-library/types-package"><code>COALTON-LIBRARY/TYPES</code></a>
- <a href="#coalton-library/vector-package"><code>COALTON-LIBRARY/VECTOR</code></a>
</aside>
<div class="main-content">

# Package `COALTON`<a name="coalton-package"></a>


Public interface to COALTON.

### Types

#### <a href="#arrow-type"><code>ARROW</code></a> <sup><sub>[TYPE]</sub></sup><a name="arrow-type"></a>

Type constructor for function types.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (:A &rarr; :B)</code>

</details>



***

#### <a href="#boolean-type"><code>BOOLEAN</code></a> <sup><sub>[TYPE]</sub></sup><a name="boolean-type"></a>
- <code>FALSE</code> 
  - Boolean `False`
- <code>TRUE</code> 
  - Boolean `True`

Either true or false represented by `t` and `nil` respectively.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">DEFAULT</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>

</details>



***

#### <a href="#char-type"><code>CHAR</code></a> <sup><sub>[TYPE]</sub></sup><a name="char-type"></a>

A character represented by a Common Lisp `character`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#char-type"><code>CHAR</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#char-type"><code>CHAR</code></a></code>

</details>



***

#### <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L124-L125">src</a>)</sub></sup><a name="double-float-type"></a>

Deprecated name for F64. This is provided for backward compatibility.



***

#### <a href="#f32-type"><code>F32</code></a> <sup><sub>[TYPE]</sub></sup><a name="f32-type"></a>

Single-precision floating point number (32-bits in size). Represented by a Common Lisp `single-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#f64-type"><code>F64</code></a> <sup><sub>[TYPE]</sub></sup><a name="f64-type"></a>

Double-precision floating point number (64 bits in size). Represented by a Common Lisp `double-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#fraction-type"><code>FRACTION</code></a> <sup><sub>[TYPE]</sub></sup><a name="fraction-type"></a>

A ratio of integers always in reduced form. Represented by a Common Lisp `rational`.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#dyadic-type"><code>DYADIC</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#i16-type"><code>I16</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L102-L103">src</a>)</sub></sup><a name="i16-type"></a>

Signed 16-bit integer capable of storing values in `[-32768, 32767]`. Uses `(signed-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#i32-type"><code>I32</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L106-L107">src</a>)</sub></sup><a name="i32-type"></a>

Signed 32-bit integer capable of storing values in `[-2147483648, 2147483647]`. Uses `(signed-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#i64-type"><code>I64</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L110-L111">src</a>)</sub></sup><a name="i64-type"></a>

Signed 64-bit integer capable of storing values in `[-9223372036854775808, 9223372036854775807]`. Uses `(signed-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#i8-type"><code>I8</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L98-L99">src</a>)</sub></sup><a name="i8-type"></a>

Signed 8-bit integer capable of storing values in `[-128, 127]`. Uses `(signed-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#ifix-type"><code>IFIX</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L114-L115">src</a>)</sub></sup><a name="ifix-type"></a>

Non-allocating tagged integer; range is platform-dependent. Does not error on overflow. Uses `fixnum`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#integer-type"><code>INTEGER</code></a> <sup><sub>[TYPE]</sub></sup><a name="integer-type"></a>

Unbound integer. Represented by a Common Lisp `integer`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#list-type"><code>LIST</code></a> <sup><sub>[TYPE]</sub></sup><a name="list-type"></a>
- <code>NIL</code> 
  - `Nil` represents an empty `List`.
- <code>(CONS :A (<a href="#list-type"><code>LIST</code></a> :A))</code>
  - `Cons` represents a `List` containing a first element (`car`) and a nested `Cons` (`cdr`).

Homogeneous list of objects. Represented as a typical Common Lisp chain of conses (or `nil`).

<details>
<summary>Instances</summary>

- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#default-class">DEFAULT</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#list-type"><code>LIST</code></a> :A) :A</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#seq-type"><code>SEQ</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#list-type"><code>LIST</code></a> :A) :A</code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#iso-class">ISO</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type"><code>LIST</code></a></code>

</details>



***

#### <a href="#optional-type"><code>OPTIONAL</code></a> <sup><sub>[TYPE]</sub></sup><a name="optional-type"></a>
- <code>(SOME :A)</code>
  - `Some` expresses the presence of a meaningful value.
- <code>NONE</code> 
  - `None` expresses the absence of a meaningful value.

A type that allows indicating the presence or absence of a value. The underlying representation does not allocate when a value is present (i.e., with `Some`).

<details>
<summary>Instances</summary>

- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#default-class">DEFAULT</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> :A :B &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type"><code>RESULT</code></a> :A :B) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) :A</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#monadfail-class">MONADFAIL</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>

</details>



***

#### <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L121-L122">src</a>)</sub></sup><a name="single-float-type"></a>

Deprecated name for F32. This is provided for backward compatibility.



***

#### <a href="#string-type"><code>STRING</code></a> <sup><sub>[TYPE]</sub></sup><a name="string-type"></a>

String of characters. Represented by Common Lisp `string`.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">DEFAULT</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; <a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#char-type"><code>CHAR</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#pathname-type"><code>PATHNAME</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#vector-type"><code>VECTOR</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#monoid-class">MONOID</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#u16-type"><code>U16</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L86-L87">src</a>)</sub></sup><a name="u16-type"></a>

Unsigned 16-bit integer capable of storing values in `[0, 65535]`. Uses `(unsigned-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#u32-type"><code>U32</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L90-L91">src</a>)</sub></sup><a name="u32-type"></a>

Unsigned 32-bit integer capable of storing values in `[0, 4294967295]`. Uses `(unsigned-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#u64-type"><code>U64</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L94-L95">src</a>)</sub></sup><a name="u64-type"></a>

Unsigned 64-bit integer capable of storing values in `[0, 18446744073709551615]`. Uses `(unsigned-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#u8-type"><code>U8</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L82-L83">src</a>)</sub></sup><a name="u8-type"></a>

Unsigned 8-bit integer capable of storing values in `[0, 255]`. Uses `(unsigned-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#ufix-type"><code>UFIX</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L118-L119">src</a>)</sub></sup><a name="ufix-type"></a>

Non-allocating tagged non-negative integer; range is platform-dependent. Uses `(and fixnum unsigned-byte)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#unit-type"><code>UNIT</code></a> <sup><sub>[TYPE]</sub></sup><a name="unit-type"></a>
- <code>UNIT</code> 
  - `Unit` represents nullary parameters and return types.

The "unit" type whose only member is the value `Unit`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#unit-type"><code>UNIT</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> <a href="#unit-type"><code>UNIT</code></a> :A</code>

</details>



***

#### <a href="#void-type"><code>VOID</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L18-L18">src</a>)</sub></sup><a name="void-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#void-type"><code>VOID</code></a></code>

</details>



***

### Values

#### <a href="#cons-value"><code>(CONS X XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L34-L36">src</a>)</sub></sup><a name="cons-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>


***

#### <a href="#some-value"><code>(SOME X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L52-L64">src</a>)</sub></sup><a name="some-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

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

#### <a href="#false-value"><code>FALSE</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L25-L25">src</a>)</sub></sup><a name="false-value"></a>
<code><a href="#boolean-type"><code>BOOLEAN</code></a></code>


***

#### <a href="#nil-value"><code>NIL</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L39-L41">src</a>)</sub></sup><a name="nil-value"></a>
<code>&forall; :A. (<a href="#list-type"><code>LIST</code></a> :A)</code>


***

#### <a href="#none-value"><code>NONE</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L67-L79">src</a>)</sub></sup><a name="none-value"></a>
<code>&forall; :A. (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>

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

#### <a href="#true-value"><code>TRUE</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L22-L22">src</a>)</sub></sup><a name="true-value"></a>
<code><a href="#boolean-type"><code>BOOLEAN</code></a></code>


***

#### <a href="#unit-value"><code>UNIT</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L29-L29">src</a>)</sub></sup><a name="unit-value"></a>
<code><a href="#unit-type"><code>UNIT</code></a></code>


***

### Macros

#### <a href="#.<-macro"><code>.&lt; (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name=".<-macro"></a>

Right associative compose operator. Creates a new functions that will run the
functions right to left when applied. This is the same as the `nest` macro without supplying
the value. The composition is thus the same order as `compose`.

`(.< f g h)` creates the function `(fn (x) (f (g (h x))))



***

#### <a href="#.>-macro"><code>.&gt; (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name=".>-macro"></a>

Left associative compose operator. Creates a new functions that will run the
functions left to right when applied. This is the same as the `pipe` macro without supplying
the value. The composition is thus the reverse order of `compose`.

`(.> f g h)` creates the function `(fn (x) (h (g (f x))))



***

#### <a href="#as-macro"><code>AS (TYPE &amp;OPTIONAL (EXPR NIL EXPR-SUPPLIED-P))</code></a> <sup><sub>[MACRO]</sub></sup><a name="as-macro"></a>

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

#### <a href="#assert-macro"><code>ASSERT (DATUM &amp;OPTIONAL (FORMAT-STRING &quot;&quot;) &amp;REST FORMAT-DATA)</code></a> <sup><sub>[MACRO]</sub></sup><a name="assert-macro"></a>

Signal an error unless DATUM is `True`.

If the assertion fails, the signaled error will apply the FORMAT-DATA
to the FORMAT-STRING via `cl:format` to produce an error message.



***

#### <a href="#make-list-macro"><code>MAKE-LIST (&amp;REST FORMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="make-list-macro"></a>

Create a heterogeneous Coalton `List` of objects.



***

#### <a href="#nest-macro"><code>NEST (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="nest-macro"></a>

A syntactic convenience for function application. Transform

    (NEST f g h x)

to

    (f (g (h x))).



***

#### <a href="#pipe-macro"><code>PIPE (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="pipe-macro"></a>

A syntactic convenience for function application, sometimes called a "threading macro". Transform

    (PIPE x h g f)

to

    (f (g (h x))).



***

#### <a href="#try-as-macro"><code>TRY-AS (TYPE &amp;OPTIONAL (EXPR NIL EXPR-SUPPLIED-P))</code></a> <sup><sub>[MACRO]</sub></sup><a name="try-as-macro"></a>

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

#### <a href="#unwrap-as-macro"><code>UNWRAP-AS (TYPE &amp;OPTIONAL (EXPR NIL EXPR-SUPPLIED-P))</code></a> <sup><sub>[MACRO]</sub></sup><a name="unwrap-as-macro"></a>

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

# Package `COALTON-LIBRARY/BIG-FLOAT`<a name="coalton-library/big-float-package"></a>

### Types

#### <a href="#big-float-type"><code>BIG-FLOAT</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L162-L163">src</a>)</sub></sup><a name="big-float-type"></a>

An arbitrary (but fixed) precision floating point number.

<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>

</details>



***

#### <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L88-L88">src</a>)</sub></sup><a name="roundingmode-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

</details>



***

### Values

#### <a href="#bf-ee-value"><code>(BF-EE _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L305-L308">src</a>)</sub></sup><a name="bf-ee-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#big-float-type"><code>BIG-FLOAT</code></a>)</code>

Return the value of ee = exp(1) to the currently set precision.



***

#### <a href="#bf-pi-value"><code>(BF-PI _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L276-L279">src</a>)</sub></sup><a name="bf-pi-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#big-float-type"><code>BIG-FLOAT</code></a>)</code>

Return the value of pi to the currently set precision.



***

#### <a href="#get-precision-value"><code>(GET-PRECISION _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L130-L133">src</a>)</sub></sup><a name="get-precision-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Get the current precision of Big-Float arithmetic.



***

#### <a href="#get-rounding-mode-value"><code>(GET-ROUNDING-MODE _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L136-L139">src</a>)</sub></sup><a name="get-rounding-mode-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a>)</code>

Get the current rounding-mode of Big-Float arithmetic.



***

#### <a href="#set-precision!-value"><code>(SET-PRECISION! PREC-BITS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L114-L120">src</a>)</sub></sup><a name="set-precision!-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the precision of Big-Float arithmetic to PREC-BITS bits.



***

#### <a href="#set-rounding-mode!-value"><code>(SET-ROUNDING-MODE! R)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L123-L127">src</a>)</sub></sup><a name="set-rounding-mode!-value"></a>
<code>(<a href="#roundingmode-type"><code>ROUNDINGMODE</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the global rounding mode for Big-Float operations.



***

#### <a href="#with-precision-value"><code>(WITH-PRECISION PREC-BITS F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L151-L153">src</a>)</sub></sup><a name="with-precision-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float precision PREC-BITS.



***

#### <a href="#with-precision-rounding-value"><code>(WITH-PRECISION-ROUNDING PREC-BITS RND F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L143-L148">src</a>)</sub></sup><a name="with-precision-rounding-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a> &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float PREC-BITS precision and RND rounding-mode.



***

#### <a href="#with-rounding-value"><code>(WITH-ROUNDING RND F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L156-L158">src</a>)</sub></sup><a name="with-rounding-value"></a>
<code>&forall; :A. (<a href="#roundingmode-type"><code>ROUNDINGMODE</code></a> &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float rounding-mode RND.



***

#### <a href="#rnda-value"><code>RNDA</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L105-L107">src</a>)</sub></sup><a name="rnda-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND Away from zero.



***

#### <a href="#rndd-value"><code>RNDD</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L102-L104">src</a>)</sub></sup><a name="rndd-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND Down, toward negative infinity.



***

#### <a href="#rndf-value"><code>RNDF</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L108-L110">src</a>)</sub></sup><a name="rndf-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

Faithful rounding (experimental).



***

#### <a href="#rndn-value"><code>RNDN</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L93-L95">src</a>)</sub></sup><a name="rndn-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND to Nearest, with the even rounding rule.



***

#### <a href="#rndna-value"><code>RNDNA</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L90-L92">src</a>)</sub></sup><a name="rndna-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND to Nearest Away.



***

#### <a href="#rndu-value"><code>RNDU</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L99-L101">src</a>)</sub></sup><a name="rndu-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND Up, toward positive infinity.



***

#### <a href="#rndz-value"><code>RNDZ</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L96-L98">src</a>)</sub></sup><a name="rndz-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND toward Zero.



***

# Package `COALTON-LIBRARY/BITS`<a name="coalton-library/bits-package"></a>

### Classes

#### <a href="#bits-class"><code>BITS</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L30-L41">src</a>)</sub></sup><a name="bits-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#bits-class">BITS</a> :A</code>


Operations on the bits of twos-complement integers

Methods:
- <code>AND :: (:A &rarr; :A &rarr; :A)</code><br/>The bitwise logical `and` of two integers
- <code>OR :: (:A &rarr; :A &rarr; :A)</code><br/>The bitwise logical `or` of two integers
- <code>XOR :: (:A &rarr; :A &rarr; :A)</code><br/>The bitwise logical exclusive `or` of two integers
- <code>NOT :: (:A &rarr; :A)</code><br/>The bitwise logical `not` of two integers
- <code>SHIFT :: (<a href="#integer-type"><code>INTEGER</code></a> &rarr; :A &rarr; :A)</code><br/>The arithmetic left-shift of an integer by an integer number of bits
<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#integer-type"><code>INTEGER</code></a></code>

</details>



***

### Values

#### <a href="#dpb-value"><code>(DPB NEWBYTE SIZE POSITION BITSTRING)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L44-L47">src</a>)</sub></sup><a name="dpb-value"></a>
<code>&forall; :A. <a href="#bits-class">BITS</a> :A &rArr; (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; :A)</code>

Deposits a byte `newbyte` of size `size` into a bitstring `bitstring` at a position `position`.



***

#### <a href="#ldb-value"><code>(LDB SIZE POSITION BITSTRING)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L50-L53">src</a>)</sub></sup><a name="ldb-value"></a>
<code>&forall; :A. <a href="#bits-class">BITS</a> :A &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; :A)</code>

Deposits a byte of size `size` into a bitstring at a position `position`.



***

# Package `COALTON-LIBRARY/BUILTIN`<a name="coalton-library/builtin-package"></a>

### Values

#### <a href="#boolean-and-value"><code>(BOOLEAN-AND X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L61-L64">src</a>)</sub></sup><a name="boolean-and-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Are both `x` and `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `and` macro for short-circuiting behavior.



***

#### <a href="#boolean-not-value"><code>(BOOLEAN-NOT X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L47-L50">src</a>)</sub></sup><a name="boolean-not-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

The logical negation of `x`. Is `x` false?



***

#### <a href="#boolean-or-value"><code>(BOOLEAN-OR X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L54-L57">src</a>)</sub></sup><a name="boolean-or-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is either `x` or `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `or` macro for short-circuiting behavior.



***

#### <a href="#boolean-xor-value"><code>(BOOLEAN-XOR X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L68-L72">src</a>)</sub></sup><a name="boolean-xor-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Are `x` or `y` true, but not both?



***

#### <a href="#not-value"><code>(NOT X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L35-L37">src</a>)</sub></sup><a name="not-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Synonym for `boolean-not`.



***

#### <a href="#undefined-value"><code>(UNDEFINED _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L29-L31">src</a>)</sub></sup><a name="undefined-value"></a>
<code>&forall; :A :B. (:A &rarr; :B)</code>

A function which can be used in place of any value, throwing an error at runtime.



***

#### <a href="#xor-value"><code>(XOR X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L41-L43">src</a>)</sub></sup><a name="xor-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Synonym for `boolean-xor`.



***

### Macros

#### <a href="#unreachable-macro"><code>UNREACHABLE (&amp;OPTIONAL (DATUM &quot;Unreachable&quot;) &amp;REST ARGUMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="unreachable-macro"></a>

Signal an error with CL format string DATUM and optional format arguments ARGUMENTS.



***

# Package `COALTON-LIBRARY/CELL`<a name="coalton-library/cell-package"></a>

### Types

#### <a href="#cell-type"><code>CELL</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L41-L42">src</a>)</sub></sup><a name="cell-type"></a>

Internally mutable cell

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#cell-type"><code>CELL</code></a></code>
- <code><a href="#default-class">DEFAULT</a> :A &rArr; <a href="#default-class">DEFAULT</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#cell-type"><code>CELL</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) :A</code>
- <code><a href="#into-class">INTO</a> :A (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; <a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>

</details>



***

### Values

#### <a href="#decrement!-value"><code>(DECREMENT! CEL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L111-L114">src</a>)</sub></sup><a name="decrement!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Subtract one from the contents of `cel`, storing and returning the new
value.



***

#### <a href="#increment!-value"><code>(INCREMENT! CEL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L105-L107">src</a>)</sub></sup><a name="increment!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Add one to the contents of `cel`, storing and returning the new value.



***

#### <a href="#new-value"><code>(NEW DATA)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L46-L49">src</a>)</sub></sup><a name="new-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#cell-type"><code>CELL</code></a> :A))</code>

Create a new mutable cell containing `data`.



***

#### <a href="#pop!-value"><code>(POP! CEL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L94-L100">src</a>)</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove and return the first element of the list in `cel`.



***

#### <a href="#push!-value"><code>(PUSH! CEL NEW-ELT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L89-L91">src</a>)</sub></sup><a name="push!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Push `new-elt` onto the start of the list in `cel`.



***

#### <a href="#read-value"><code>(READ CEL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L53-L56">src</a>)</sub></sup><a name="read-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Read the value of a mutable cell `cel`.



***

#### <a href="#swap!-value"><code>(SWAP! CEL DATA)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L59-L65">src</a>)</sub></sup><a name="swap!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A &rarr; :A)</code>

Replace the value of a mutable cell `cel` with a new value `data`,
then return the old value.



***

#### <a href="#update!-value"><code>(UPDATE! F CEL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L77-L79">src</a>)</sub></sup><a name="update!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Apply `f` to the contents of `cel`, storing and returning the result.



***

#### <a href="#update-swap!-value"><code>(UPDATE-SWAP! F CEL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L82-L85">src</a>)</sub></sup><a name="update-swap!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Apply `f` to the contents of `cel`, swapping the result for the old
value.



***

#### <a href="#write!-value"><code>(WRITE! CEL DATA)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L69-L73">src</a>)</sub></sup><a name="write!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A &rarr; :A)</code>

Set the value of a mutable cell `cel` to `data`, returning the new
value.



***

# Package `COALTON-LIBRARY/CHAR`<a name="coalton-library/char-package"></a>

### Values

#### <a href="#alpha?-value"><code>(ALPHA? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L73-L76">src</a>)</sub></sup><a name="alpha?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` an alphabetic character?



***

#### <a href="#ascii-alpha?-value"><code>(ASCII-ALPHA? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L79-L84">src</a>)</sub></sup><a name="ascii-alpha?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` an ASCII alphabetic character?



***

#### <a href="#ascii-alphanumeric?-value"><code>(ASCII-ALPHANUMERIC? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L99-L102">src</a>)</sub></sup><a name="ascii-alphanumeric?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` an ASCII alphanumeric character?



***

#### <a href="#ascii-digit?-value"><code>(ASCII-DIGIT? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L93-L96">src</a>)</sub></sup><a name="ascii-digit?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` an ASCII digit character?



***

#### <a href="#ascii-lowercase?-value"><code>(ASCII-LOWERCASE? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L124-L128">src</a>)</sub></sup><a name="ascii-lowercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` an ASCII lowercase character?



***

#### <a href="#ascii-uppercase?-value"><code>(ASCII-UPPERCASE? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L111-L115">src</a>)</sub></sup><a name="ascii-uppercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` an ASCII uppercase character?



***

#### <a href="#char-code-value"><code>(CHAR-CODE CHAR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L38-L41">src</a>)</sub></sup><a name="char-code-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Convert a character to its ASCII representation.



***

#### <a href="#code-char-value"><code>(CODE-CHAR CODE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L50-L57">src</a>)</sub></sup><a name="code-char-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Convert a number to its ASCII character, returning None on failure.



***

#### <a href="#digit?-value"><code>(DIGIT? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L87-L90">src</a>)</sub></sup><a name="digit?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` a digit character?



***

#### <a href="#downcase-value"><code>(DOWNCASE C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L137-L140">src</a>)</sub></sup><a name="downcase-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a>)</code>

Returns the downcased version of `c`, returning `c` when there is none.



***

#### <a href="#lowercase?-value"><code>(LOWERCASE? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L118-L121">src</a>)</sub></sup><a name="lowercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` a lowercase character?



***

#### <a href="#range-value"><code>(RANGE START END)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L143-L150">src</a>)</sub></sup><a name="range-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

An inclusive range of characters from `start` to `end` by `char-code`.



***

#### <a href="#upcase-value"><code>(UPCASE C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L131-L134">src</a>)</sub></sup><a name="upcase-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a>)</code>

Returns the upcased version of `c`, returning `c` when there is none.



***

#### <a href="#uppercase?-value"><code>(UPPERCASE? C)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L105-L108">src</a>)</sub></sup><a name="uppercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `c` an uppercase character?



***

# Package `COALTON-LIBRARY/CLASSES`<a name="coalton-library/classes-package"></a>

### Types

#### <a href="#hash-type"><code>HASH</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L124-L125">src</a>)</sub></sup><a name="hash-type"></a>

Implementation dependent hash code.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">DEFAULT</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#monoid-class">MONOID</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#hash-type"><code>HASH</code></a></code>

</details>



***

#### <a href="#ord-type"><code>ORD</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L138-L142">src</a>)</sub></sup><a name="ord-type"></a>
- <code>LT</code> 
  - Less than
- <code>GT</code> 
  - Greater than
- <code>EQ</code> 
  - Equal to

The result of an ordered comparison.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#ord-type"><code>ORD</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ord-type"><code>ORD</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ord-type"><code>ORD</code></a></code>

</details>



***

#### <a href="#result-type"><code>RESULT</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L76-L82">src</a>)</sub></sup><a name="result-type"></a>
- <code>(ERR :A)</code>
- <code>(OK :B)</code>

Represents something that may have failed.

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#result-type"><code>RESULT</code></a> :A :B)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#result-type"><code>RESULT</code></a> :A :B)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#bifunctor-class">BIFUNCTOR</a> <a href="#result-type"><code>RESULT</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> :A :B &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#result-type"><code>RESULT</code></a> :C :A) (<a href="#result-type"><code>RESULT</code></a> :C :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type"><code>RESULT</code></a> :A :B) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#result-type"><code>RESULT</code></a> :A :B) :B</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#result-type"><code>RESULT</code></a> :B :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#result-type"><code>RESULT</code></a> :A :B)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#result-type"><code>RESULT</code></a> :B :A)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>

</details>



***

### Structs

#### <a href="#tuple-type"><code>TUPLE :A :B</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L71-L74">src</a>)</sub></sup><a name="tuple-type"></a>

A heterogeneous collection of items.

<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#bifunctor-class">BIFUNCTOR</a> <a href="#tuple-type"><code>TUPLE</code></a></code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>

</details>



***

### Classes

#### <a href="#alternative-class"><code>ALTERNATIVE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L254-L257">src</a>)</sub></sup><a name="alternative-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#alternative-class">ALTERNATIVE</a> :A</code>


Types which are monoids on applicative functors.

Methods:
- <code>ALT :: ((:A :B) &rarr; (:A :B) &rarr; (:A :B))</code>
- <code>EMPTY :: (:A :C)</code>
<details>
<summary>Instances</summary>

- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#alternative-class">ALTERNATIVE</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>

</details>



***

#### <a href="#applicative-class"><code>APPLICATIVE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L227-L230">src</a>)</sub></sup><a name="applicative-class"></a>
<code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> :A</code>


Types which are a functor which can embed pure expressions and sequence operations.

Methods:
- <code>PURE :: (:B &rarr; (:A :B))</code>
- <code>LIFTA2 :: ((:C &rarr; :D &rarr; :E) &rarr; (:A :C) &rarr; (:A :D) &rarr; (:A :E))</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#monad-class">MONAD</a> :B) &rArr; <a href="#applicative-class">APPLICATIVE</a> ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> ((<a href="#resultt-type"><code>RESULTT</code></a> :B) :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#identity-type"><code>IDENTITY</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#cell-type"><code>CELL</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>

</details>



***

#### <a href="#bifunctor-class"><code>BIFUNCTOR</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L290-L292">src</a>)</sub></sup><a name="bifunctor-class"></a>
<code><a href="#bifunctor-class">BIFUNCTOR</a> :A</code>


Types which take two type arguments and are functors on both.

Methods:
- <code>BIMAP :: ((:B &rarr; :C) &rarr; (:D &rarr; :E) &rarr; ((:A :B) :D) &rarr; ((:A :C) :E))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#bifunctor-class">BIFUNCTOR</a> (<a href="#freef-type"><code>FREEF</code></a> :A)</code>
- <code><a href="#bifunctor-class">BIFUNCTOR</a> <a href="#result-type"><code>RESULT</code></a></code>
- <code><a href="#bifunctor-class">BIFUNCTOR</a> <a href="#tuple-type"><code>TUPLE</code></a></code>

</details>



***

#### <a href="#default-class"><code>DEFAULT</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L400-L402">src</a>)</sub></sup><a name="default-class"></a>
<code><a href="#default-class">DEFAULT</a> :A</code>


Types which have default values.

Methods:
- <code>DEFAULT :: (<a href="#unit-type"><code>UNIT</code></a> &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#default-class">DEFAULT</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#default-class">DEFAULT</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#default-class">DEFAULT</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#default-class">DEFAULT</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#default-class">DEFAULT</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#default-class">DEFAULT</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#default-class">DEFAULT</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) (<a href="#default-class">DEFAULT</a> :C) (<a href="#default-class">DEFAULT</a> :D) (<a href="#default-class">DEFAULT</a> :E) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) (<a href="#default-class">DEFAULT</a> :C) (<a href="#default-class">DEFAULT</a> :D) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) (<a href="#default-class">DEFAULT</a> :C) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#default-class">DEFAULT</a> :A &rArr; <a href="#default-class">DEFAULT</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#default-class">DEFAULT</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#hash-type"><code>HASH</code></a></code>

</details>



***

#### <a href="#eq-class"><code>EQ</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L88-L90">src</a>)</sub></sup><a name="eq-class"></a>
<code><a href="#eq-class">EQ</a> :A</code>


Types which have equality defined.

Methods:
- <code>== :: (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> <a href="#color-type"><code>COLOR</code></a></code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#result-type"><code>RESULT</code></a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) (<a href="#eq-class">EQ</a> :E) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Eq only compares the primal component.
- <code><a href="#eq-class">EQ</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ord-type"><code>ORD</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#unit-type"><code>UNIT</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#lisptype-type"><code>LISPTYPE</code></a></code>

</details>



***

#### <a href="#foldable-class"><code>FOLDABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L259-L262">src</a>)</sub></sup><a name="foldable-class"></a>
<code><a href="#foldable-class">FOLDABLE</a> :A</code>


Types which can be folded into a single element.

Methods:
- <code>FOLD :: ((:B &rarr; :C &rarr; :B) &rarr; :B &rarr; (:A :C) &rarr; :B)</code><br/>A left tail-recursive fold.
- <code>FOLDR :: ((:D &rarr; :E &rarr; :E) &rarr; :E &rarr; (:A :D) &rarr; :E)</code><br/>A right non-tail-recursive fold.
<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">FOLDABLE</a> <a href="#tree-type"><code>TREE</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> :A &rArr; <a href="#foldable-class">FOLDABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#queue-type"><code>QUEUE</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#slice-type"><code>SLICE</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#vector-type"><code>VECTOR</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#lisparray-type"><code>LISPARRAY</code></a></code>

</details>



***

#### <a href="#functor-class"><code>FUNCTOR</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L223-L225">src</a>)</sub></sup><a name="functor-class"></a>
<code><a href="#functor-class">FUNCTOR</a> :A</code>


Types which can map an inner type where the mapping adheres to the identity and composition laws.

Methods:
- <code>MAP :: ((:B &rarr; :C) &rarr; (:A :B) &rarr; (:A :C))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> <a href="#seq-type"><code>SEQ</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A)</code>
- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#functor-class">FUNCTOR</a> :B) &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#freef-type"><code>FREEF</code></a> :A) :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#resultt-type"><code>RESULTT</code></a> :B) :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#identity-type"><code>IDENTITY</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#queue-type"><code>QUEUE</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#vector-type"><code>VECTOR</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#iterator-type"><code>ITERATOR</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#cell-type"><code>CELL</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>

</details>



***

#### <a href="#hash-class"><code>HASH</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L127-L131">src</a>)</sub></sup><a name="hash-class"></a>
<code><a href="#eq-class">EQ</a> :A &rArr; <a href="#hash-class">HASH</a> :A</code>


Types which can be hashed for storage in hash tables.

The hash function must satisfy the invariant that `(== left right)` implies `(== (hash left) (hash right))`.

Methods:
- <code>HASH :: (:A &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) (<a href="#hash-class">HASH</a> :E) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Hash only considers the primal component in order to be consistent with Eq.
- <code><a href="#hash-class">HASH</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#hash-type"><code>HASH</code></a></code>

</details>



***

#### <a href="#into-class"><code>INTO</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L308-L310">src</a>)</sub></sup><a name="into-class"></a>
<code><a href="#into-class">INTO</a> :A :B</code>


`INTO` imples *every* element of `:a` can be represented by an element of `:b`. This conversion might not be bijective (i.e., there may be elements in `:b` that don't correspond to any in `:a`).

Methods:
- <code>INTO :: (:A &rarr; :B)</code>
<details>
<summary>Instances</summary>

- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code>(<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) (<a href="#into-class">INTO</a> :A <a href="#creal-type"><code>CREAL</code></a>) &rArr; <a href="#into-class">INTO</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A) (<a href="#complex-type"><code>COMPLEX</code></a> <a href="#creal-type"><code>CREAL</code></a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#pathname-type"><code>PATHNAME</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#seq-type"><code>SEQ</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#seq-type"><code>SEQ</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code>(<a href="#foldable-class">FOLDABLE</a> :A) (<a href="#runtimerepr-class">RUNTIMEREPR</a> :B) &rArr; <a href="#into-class">INTO</a> (:A :B) (<a href="#seq-type"><code>SEQ</code></a> :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#char-type"><code>CHAR</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#vector-type"><code>VECTOR</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type"><code>RESULT</code></a> :A :B) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; <a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) :A</code>
- <code><a href="#into-class">INTO</a> :A (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code>(<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) (<a href="#into-class">INTO</a> :A (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rArr; <a href="#into-class">INTO</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A) (<a href="#complex-type"><code>COMPLEX</code></a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A))</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#dyadic-type"><code>DYADIC</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#into-class">INTO</a> :A :A</code>

</details>



***

#### <a href="#iso-class"><code>ISO</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L312-L313">src</a>)</sub></sup><a name="iso-class"></a>
<code>(<a href="#into-class">INTO</a> :A :B) (<a href="#into-class">INTO</a> :B :A) &rArr; <a href="#iso-class">ISO</a> :A :B</code>


Opting into this marker typeclass imples that the instances for `(Into :a :b)` and `(Into :b :a)` form a bijection.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#iso-class">ISO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#iso-class">ISO</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#iso-class">ISO</a> :A :A</code>

</details>



***

#### <a href="#monad-class"><code>MONAD</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L232-L234">src</a>)</sub></sup><a name="monad-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#monad-class">MONAD</a> :A</code>


Types which are monads as defined in Haskell. See https://wiki.haskell.org/Monad for more information.

Methods:
- <code>&gt;&gt;= :: ((:A :B) &rarr; (:B &rarr; (:A :C)) &rarr; (:A :C))</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#monad-class">MONAD</a> :B) &rArr; <a href="#monad-class">MONAD</a> ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monad-class">MONAD</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monad-class">MONAD</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monad-class">MONAD</a> ((<a href="#resultt-type"><code>RESULTT</code></a> :B) :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monad-class">MONAD</a> ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#identity-type"><code>IDENTITY</code></a></code>
- <code><a href="#monad-class">MONAD</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#monad-class">MONAD</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#monad-class">MONAD</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>

</details>



***

#### <a href="#monadfail-class"><code>MONADFAIL</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L251-L252">src</a>)</sub></sup><a name="monadfail-class"></a>
<code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monadfail-class">MONADFAIL</a> :A</code>

Methods:
- <code>FAIL :: (<a href="#string-type"><code>STRING</code></a> &rarr; (:A :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#monadfail-class">MONADFAIL</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>

</details>



***

#### <a href="#monadtransformer-class"><code>MONADTRANSFORMER</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L236-L239">src</a>)</sub></sup><a name="monadtransformer-class"></a>
<code><a href="#monadtransformer-class">MONADTRANSFORMER</a> :A</code>


Types which are monads that wrap another monad, allowing you to use - for example - State and Result
together.

Methods:
- <code>LIFT :: <a href="#monad-class">MONAD</a> :B &rArr; ((:B :C) &rarr; ((:A :B) :C))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monadtransformer-class">MONADTRANSFORMER</a> (<a href="#freet-type"><code>FREET</code></a> :A)</code>
- <code><a href="#monadtransformer-class">MONADTRANSFORMER</a> <a href="#optionalt-type"><code>OPTIONALT</code></a></code>
- <code><a href="#monadtransformer-class">MONADTRANSFORMER</a> (<a href="#resultt-type"><code>RESULTT</code></a> :A)</code>
- <code><a href="#monadtransformer-class">MONADTRANSFORMER</a> (<a href="#envt-type"><code>ENVT</code></a> :A)</code>

</details>



***

#### <a href="#monoid-class"><code>MONOID</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L219-L221">src</a>)</sub></sup><a name="monoid-class"></a>
<code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#monoid-class">MONOID</a> :A</code>


Types with an associative binary operation and identity defined.

Methods:
- <code>MEMPTY :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#monoid-class">MONOID</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#result-type"><code>RESULT</code></a> :B :A)</code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> <a href="#hash-type"><code>HASH</code></a></code>

</details>



***

#### <a href="#num-class"><code>NUM</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L97-L102">src</a>)</sub></sup><a name="num-class"></a>
<code><a href="#eq-class">EQ</a> :A &rArr; <a href="#num-class">NUM</a> :A</code>


Types which have numeric operations defined.

Methods:
- <code>+ :: (:A &rarr; :A &rarr; :A)</code>
- <code>- :: (:A &rarr; :A &rarr; :A)</code>
- <code>* :: (:A &rarr; :A &rarr; :A)</code>
- <code>FROMINT :: (<a href="#integer-type"><code>INTEGER</code></a> &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#num-class">NUM</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#integer-type"><code>INTEGER</code></a></code>

</details>



***

#### <a href="#ord-class"><code>ORD</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L165-L167">src</a>)</sub></sup><a name="ord-class"></a>
<code><a href="#eq-class">EQ</a> :A &rArr; <a href="#ord-class">ORD</a> :A</code>


Types whose values can be ordered.

Methods:
- <code>&lt;=&gt; :: (:A &rarr; :A &rarr; <a href="#ord-type"><code>ORD</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#ord-class">ORD</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#result-type"><code>RESULT</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Ord only compares the primal component.
- <code><a href="#ord-class">ORD</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ord-type"><code>ORD</code></a></code>

</details>



***

#### <a href="#semigroup-class"><code>SEMIGROUP</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L215-L217">src</a>)</sub></sup><a name="semigroup-class"></a>
<code><a href="#semigroup-class">SEMIGROUP</a> :A</code>


Types with an associative binary operation defined.

Methods:
- <code>&lt;&gt; :: (:A &rarr; :A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#result-type"><code>RESULT</code></a> :B :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#hash-type"><code>HASH</code></a></code>

</details>



***

#### <a href="#signalable-class"><code>SIGNALABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L55-L57">src</a>)</sub></sup><a name="signalable-class"></a>
<code><a href="#signalable-class">SIGNALABLE</a> :A</code>


Signals errors or warnings by calling their respective lisp conditions.

Methods:
- <code>ERROR :: (:A &rarr; :B)</code><br/>Signal an error with a type-specific error string.
<details>
<summary>Instances</summary>

- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#fileerror-type"><code>FILEERROR</code></a></code>
- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#lispcondition-type"><code>LISPCONDITION</code></a></code>
- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#traversable-class"><code>TRAVERSABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L284-L285">src</a>)</sub></sup><a name="traversable-class"></a>
<code><a href="#traversable-class">TRAVERSABLE</a> :A</code>

Methods:
- <code>TRAVERSE :: <a href="#applicative-class">APPLICATIVE</a> :B &rArr; ((:C &rarr; (:B :D)) &rarr; (:A :C) &rarr; (:B (:A :D)))</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#monad-class">MONAD</a> :A) (<a href="#traversable-class">TRAVERSABLE</a> :A) (<a href="#traversable-class">TRAVERSABLE</a> :B) &rArr; <a href="#traversable-class">TRAVERSABLE</a> ((<a href="#freet-type"><code>FREET</code></a> :B) :A)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> :A &rArr; <a href="#traversable-class">TRAVERSABLE</a> ((<a href="#freef-type"><code>FREEF</code></a> :A) :B)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> :A &rArr; <a href="#traversable-class">TRAVERSABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#traversable-class">TRAVERSABLE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>

</details>



***

#### <a href="#tryinto-class"><code>TRYINTO</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L318-L320">src</a>)</sub></sup><a name="tryinto-class"></a>
<code><a href="#tryinto-class">TRYINTO</a> :A :B :C</code>


`TRY-INTO` implies some elements of `:a` can be represented exactly by an element of `:b`, but sometimes not. If not, an error of type `:c` is returned.

Methods:
- <code>TRYINTO :: (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> :C :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f64-type"><code>F64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f32-type"><code>F32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <a href="#unwrappable-class"><code>UNWRAPPABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L328-L344">src</a>)</sub></sup><a name="unwrappable-class"></a>
<code><a href="#unwrappable-class">UNWRAPPABLE</a> :A</code>


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
- <code>UNWRAP-OR-ELSE :: ((:B &rarr; :C) &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :C) &rarr; (:A :B) &rarr; :C)</code>
<details>
<summary>Instances</summary>

- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>

</details>



***

### Values

#### <a href="#<-value"><code>(&lt; X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L177-L181">src</a>)</sub></sup><a name="<-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` less than `y`?



***

#### <a href="#<=-value"><code>(&lt;= X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L191-L195">src</a>)</sub></sup><a name="<=-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` less than or equal to `y`?



***

#### <a href="#>-value"><code>(&gt; X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L170-L174">src</a>)</sub></sup><a name=">-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` greater than `y`?



***

#### <a href="#>=-value"><code>(&gt;= X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L184-L188">src</a>)</sub></sup><a name=">=-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` greater than or equal to `y`?



***

#### <a href="#>>-value"><code>(&gt;&gt; A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L242-L244">src</a>)</sub></sup><a name=">>-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">MONAD</a> :A &rArr; ((:A :B) &rarr; (:A :C) &rarr; (:A :C))</code>

Equivalent to `(>>= a (fn (_) b))`.



***

#### <a href="#as-optional-value"><code>(AS-OPTIONAL CONTAINER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L389-L393">src</a>)</sub></sup><a name="as-optional-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((:A :B) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Convert any Unwrappable container into an `Optional`, constructing Some on a successful unwrap and None on a failed unwrap.



***

#### <a href="#default?-value"><code>(DEFAULT? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L413-L415">src</a>)</sub></sup><a name="default?-value"></a>
<code>&forall; :A. (<a href="#default-class">DEFAULT</a> :A) (<a href="#eq-class">EQ</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` the default item of its type?



***

#### <a href="#defaulting-unwrap-value"><code>(DEFAULTING-UNWRAP CONTAINER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L406-L410">src</a>)</sub></sup><a name="defaulting-unwrap-value"></a>
<code>&forall; :A :B. (<a href="#unwrappable-class">UNWRAPPABLE</a> :A) (<a href="#default-class">DEFAULT</a> :B) &rArr; ((:A :B) &rarr; :B)</code>

Unwrap an `unwrappable`, returning `(default)` of the wrapped type on failure. 



***

#### <a href="#expect-value"><code>(EXPECT REASON CONTAINER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L356-L360">src</a>)</sub></sup><a name="expect-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; (<a href="#string-type"><code>STRING</code></a> &rarr; (:A :B) &rarr; :B)</code>

Unwrap `container`, signaling an error with the description `reason` on failure.



***

#### <a href="#join-value"><code>(JOIN M)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L247-L249">src</a>)</sub></sup><a name="join-value"></a>
<code>&forall; :A :B. <a href="#monad-class">MONAD</a> :A &rArr; ((:A (:A :B)) &rarr; (:A :B))</code>

Equivalent to `(>>= m id)`.



***

#### <a href="#map-fst-value"><code>(MAP-FST F B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L295-L297">src</a>)</sub></sup><a name="map-fst-value"></a>
<code>&forall; :A :B :C :D. <a href="#bifunctor-class">BIFUNCTOR</a> :C &rArr; ((:A &rarr; :B) &rarr; (:C :A :D) &rarr; (:C :B :D))</code>

Map over the first argument of a `Bifunctor`.



***

#### <a href="#map-snd-value"><code>(MAP-SND F B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L300-L302">src</a>)</sub></sup><a name="map-snd-value"></a>
<code>&forall; :A :B :C :D. <a href="#bifunctor-class">BIFUNCTOR</a> :C &rArr; ((:A &rarr; :B) &rarr; (:C :D :A) &rarr; (:C :D :B))</code>

Map over the second argument of a `Bifunctor`.



***

#### <a href="#max-value"><code>(MAX X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L198-L202">src</a>)</sub></sup><a name="max-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the greater element of `x` and `y`.



***

#### <a href="#mcommute?-value"><code>(MCOMMUTE? A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L280-L282">src</a>)</sub></sup><a name="mcommute?-value"></a>
<code>&forall; :A. (<a href="#eq-class">EQ</a> :A) (<a href="#semigroup-class">SEMIGROUP</a> :A) &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Does `a <> b` equal `b <> a`?



***

#### <a href="#mconcat-value"><code>(MCONCAT A)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L270-L272">src</a>)</sub></sup><a name="mconcat-value"></a>
<code>&forall; :A :B. (<a href="#foldable-class">FOLDABLE</a> :A) (<a href="#monoid-class">MONOID</a> :B) &rArr; ((:A :B) &rarr; :B)</code>

Fold a container of monoids into a single element.



***

#### <a href="#mconcatmap-value"><code>(MCONCATMAP F A)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L275-L277">src</a>)</sub></sup><a name="mconcatmap-value"></a>
<code>&forall; :A :B :C. (<a href="#foldable-class">FOLDABLE</a> :C) (<a href="#monoid-class">MONOID</a> :B) &rArr; ((:A &rarr; :B) &rarr; (:C :A) &rarr; :B)</code>

Map a container to a container of monoids, and then fold that container into a single element.



***

#### <a href="#mempty?-value"><code>(MEMPTY? A)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L265-L267">src</a>)</sub></sup><a name="mempty?-value"></a>
<code>&forall; :A. (<a href="#eq-class">EQ</a> :A) (<a href="#monoid-class">MONOID</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Does `a` equal `(the Type mempty)`?



***

#### <a href="#min-value"><code>(MIN X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L205-L209">src</a>)</sub></sup><a name="min-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the lesser element of `x` and `y`.



***

#### <a href="#sequence-value"><code>(SEQUENCE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L288-L288">src</a>)</sub></sup><a name="sequence-value"></a>
<code>&forall; :A :B :C. (<a href="#traversable-class">TRAVERSABLE</a> :A) (<a href="#applicative-class">APPLICATIVE</a> :B) &rArr; ((:A (:B :C)) &rarr; (:B (:A :C)))</code>


***

#### <a href="#unwrap-value"><code>(UNWRAP CONTAINER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L365-L371">src</a>)</sub></sup><a name="unwrap-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((:A :B) &rarr; :B)</code>

Unwrap `container`, signaling an error on failure.



***

#### <a href="#unwrap-into-value"><code>(UNWRAP-INTO X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L374-L376">src</a>)</sub></sup><a name="unwrap-into-value"></a>
<code>&forall; :A :B :C. <a href="#tryinto-class">TRYINTO</a> :B :C :A &rArr; (:B &rarr; :C)</code>

Same as `tryInto` followed by `unwrap`.



***

#### <a href="#with-default-value"><code>(WITH-DEFAULT DEFAULT CONTAINER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L382-L386">src</a>)</sub></sup><a name="with-default-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :B &rArr; (:A &rarr; (:B :A) &rarr; :A)</code>

Unwrap `container`, returning `default` on failure.



***

# Package `COALTON-LIBRARY/COMPUTABLE-REALS`<a name="coalton-library/computable-reals-package"></a>

### Types

#### <a href="#creal-type"><code>CREAL</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L37-L37">src</a>)</sub></sup><a name="creal-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f32-type"><code>F32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#f64-type"><code>F64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#creal-type"><code>CREAL</code></a></code>

</details>



***

### Values

#### <a href="#approx-value"><code>(APPROX X K)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L292-L302">src</a>)</sub></sup><a name="approx-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Computes an approximation of the bits of a given
`CReal`. Specifically, given an object of type `CReal` `X` and a
non-negative integer `K`, return an integer `A` with

    |A*2^(-k) - X| <= 2^(-K).

See `rational` or `rationalize` to produce a rational approximation of
`CReal`.



***

#### <a href="#comparison-threshold-value"><code>(COMPARISON-THRESHOLD _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L47-L52">src</a>)</sub></sup><a name="comparison-threshold-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the current `CReal` comparison threshold measured as a number of bits after the 'decimal' point.

This threshold is used to ensure `Eq` and `Ord` instances terminate. (In general computable real arithmetic is undecidable.) Note that if the production of a `CReal` depends on comparison, *there is no guarantee that the `CReal` will be accurate to any precision*.



***

#### <a href="#cr-print-value"><code>(CR-PRINT X K)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L330-L333">src</a>)</sub></sup><a name="cr-print-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Prints a real `R` up to `K` bits of precision.



***

#### <a href="#rational-approx-value"><code>(RATIONAL-APPROX X K)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L305-L310">src</a>)</sub></sup><a name="rational-approx-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Produce a rational approximation of `X` called `R` such that

    |R - X| < 2^(-K).



***

#### <a href="#rationalize-value"><code>(RATIONALIZE X K)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L313-L321">src</a>)</sub></sup><a name="rationalize-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Produce a rational approximation of `X` called `R` such that

    |R - X| < 2^(-K),

taking into account the maximum precision specified by `K` to return
the simplest possible such approximation.



***

#### <a href="#set-comparison-threshold!-value"><code>(SET-COMPARISON-THRESHOLD! K)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L39-L45">src</a>)</sub></sup><a name="set-comparison-threshold!-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sets the global `CReal` comparison threshold to k bits after the 'decimal' point.

See `comparison-threshold` for more details.



***

# Package `COALTON-LIBRARY/EXPERIMENTAL/LOOPS`<a name="coalton-library/experimental/loops-package"></a>


A Coalton package of loop macros.

Note: `(return)`, `(break)`, and `(continue)` do not work inside _any_ of these loop macros.

### Macros

#### <a href="#argbesttimes-macro"><code>ARGBESTTIMES ((VARIABLE COUNT BETTER?) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="argbesttimes-macro"></a>

The `UFix` in [0, `count`) which, when `variable` is bound to it, results in the evaluation of `body` which is better than the same for the rest of the `UFix`s in [0, `count`).



***

#### <a href="#besttimes-macro"><code>BESTTIMES ((VARIABLE COUNT BETTER?) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="besttimes-macro"></a>

The result of evaluating `body` with `variable` bound to a `UFix` in [0, `count`) that is `better?` than the result of evaluating `body` with `variable` bound to the rest of the `UFix`s in [0, `count`)..



***

#### <a href="#collecttimes-macro"><code>COLLECTTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="collecttimes-macro"></a>

Collect the results of evaluating `body` for `variable` bound to every `UFix` in [0, `count`) as a `List`.



***

#### <a href="#dolist-macro"><code>DOLIST ((VARIABLE LIS) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="dolist-macro"></a>

Perform `body` with `variable` bound to every element of `lis`.



***

#### <a href="#dolist-enumerated-macro"><code>DOLIST-ENUMERATED ((INDEX-VARIABLE ELEMENT-VARIABLE LIS) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="dolist-enumerated-macro"></a>

Perform `body` with `element-variable` bound to the elements of `lis` and `index-variable` bound to their indices.



***

#### <a href="#dolists-macro"><code>DOLISTS (VARIABLES-AND-LISTS &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="dolists-macro"></a>

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

#### <a href="#dorange-macro"><code>DORANGE ((VARIABLE START-OR-STOP &amp;OPTIONAL STOP STEP) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="dorange-macro"></a>

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

#### <a href="#dotimes-macro"><code>DOTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="dotimes-macro"></a>

Perform `body` with `variable` bound to every `UFix` in [0, `count`) sequentially.



***

#### <a href="#everytimes-macro"><code>EVERYTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="everytimes-macro"></a>

Does `body` evaluate to `True` for `variable` bound to every `UFix` in [0, `count`). Returns `True` if `(zero? count)`.



***

#### <a href="#prodtimes-macro"><code>PRODTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="prodtimes-macro"></a>

The product of `body` for `variable` bount to every `UFix` in [0, `count`).



***

#### <a href="#repeat-macro"><code>REPEAT ((COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="repeat-macro"></a>

Perform `body` `count` times.



***

#### <a href="#sometimes-macro"><code>SOMETIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="sometimes-macro"></a>

Does `body` evaluate to `True` for `variable` bound to some `UFix` in [0, `count`). Returns `False` if `(zero? count)`.



***

#### <a href="#sumtimes-macro"><code>SUMTIMES ((VARIABLE COUNT) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="sumtimes-macro"></a>

The sum of `body` for `variable` bount to every `UFix` in [0, `count`).



***

# Package `COALTON-LIBRARY/FILE`<a name="coalton-library/file-package"></a>


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

#### <a href="#fileerror-type"><code>FILEERROR</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L144-L149">src</a>)</sub></sup><a name="fileerror-type"></a>
- <code>(FILEERROR <a href="#string-type"><code>STRING</code></a>)</code>

Errors for file functions.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fileerror-type"><code>FILEERROR</code></a></code>
- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#fileerror-type"><code>FILEERROR</code></a></code>

</details>



***

#### <a href="#filestream-type"><code>FILESTREAM</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L354-L355">src</a>)</sub></sup><a name="filestream-type"></a>

Represents a file stream, using `cl:file-stream`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#filestream-type"><code>FILESTREAM</code></a> :A)</code>

</details>



***

#### <a href="#ifexists-type"><code>IFEXISTS</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L358-L363">src</a>)</sub></sup><a name="ifexists-type"></a>
- <code>SUPERSEDE</code> 
- <code>OVERWRITE</code> 
- <code>EERROR</code> 
- <code>APPEND</code> 

Possible options for opening a stream when the file exists.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ifexists-type"><code>IFEXISTS</code></a></code>

</details>



***

#### <a href="#pathname-type"><code>PATHNAME</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L115-L116">src</a>)</sub></sup><a name="pathname-type"></a>

Pathname object. Equivalent to `cl:pathname`

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#pathname-type"><code>PATHNAME</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#monoid-class">MONOID</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>

</details>



***

#### <a href="#streamoptions-type"><code>STREAMOPTIONS</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L365-L369">src</a>)</sub></sup><a name="streamoptions-type"></a>
- <code>(BIDIRECTIONAL <a href="#pathname-type"><code>PATHNAME</code></a> <a href="#ifexists-type"><code>IFEXISTS</code></a>)</code>
  - Constructor for opening a bidirectional stream.
- <code>(OUTPUT <a href="#pathname-type"><code>PATHNAME</code></a> <a href="#ifexists-type"><code>IFEXISTS</code></a>)</code>
  - Constructor for opening an output stream.
- <code>(INPUT <a href="#pathname-type"><code>PATHNAME</code></a>)</code>
  - Constructor for opening an input stream

A type for providing parameters for opening streams. StreamOptions take strings for pathnames, but they will error if they are not proper and appropriate pathnames.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#streamoptions-type"><code>STREAMOPTIONS</code></a></code>

</details>



***

### Classes

#### <a href="#file-class"><code>FILE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L504-L508">src</a>)</sub></sup><a name="file-class"></a>
<code><a href="#file-class">FILE</a> :A</code>


A class of types which are able to be written to or read from a file.

Methods:
- <code>OPEN :: (<a href="#streamoptions-type"><code>STREAMOPTIONS</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#filestream-type"><code>FILESTREAM</code></a> :A)))</code>
- <code>READ :: ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :A))</code>
- <code>WRITE :: ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; :A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>
<details>
<summary>Instances</summary>

- <code><a href="#file-class">FILE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#char-type"><code>CHAR</code></a></code>

</details>



***

### Values

#### <a href="#abort-value"><code>(ABORT STREAM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L436-L439">src</a>)</sub></sup><a name="abort-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Closes a FileStream and aborts all operations..



***

#### <a href="#append-to-file!-value"><code>(APPEND-TO-FILE! PATH DATA)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L703-L707">src</a>)</sub></sup><a name="append-to-file!-value"></a>
<code>&forall; :A :B. (<a href="#runtimerepr-class">RUNTIMEREPR</a> :B) (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#file-class">FILE</a> :B) &rArr; (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :B) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Opens and appends a file with data of type :a.



***

#### <a href="#close-value"><code>(CLOSE STREAM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L430-L433">src</a>)</sub></sup><a name="close-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Closes a FileStream.



***

#### <a href="#copy!-value"><code>(COPY! INPUT OUTPUT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L329-L337">src</a>)</sub></sup><a name="copy!-value"></a>
<code>&forall; :A :B. (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#into-class">INTO</a> :B <a href="#pathname-type"><code>PATHNAME</code></a>) &rArr; (:A &rarr; :B &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Copies a file to a new location.



***

#### <a href="#create-directory!-value"><code>(CREATE-DIRECTORY! PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L263-L268">src</a>)</sub></sup><a name="create-directory!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

This is equivalent to `mkdir -p`. Creates a directory and its parents. The pathname must be a valid directory pathname.



***

#### <a href="#create-temp-directory!-value"><code>(CREATE-TEMP-DIRECTORY! _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L657-L659">src</a>)</sub></sup><a name="create-temp-directory!-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

This configures a default temporary directory for use.



***

#### <a href="#create-temp-file!-value"><code>(CREATE-TEMP-FILE! FILE-EXT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L662-L668">src</a>)</sub></sup><a name="create-temp-file!-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

This configures a default temporary file for use.



***

#### <a href="#delete-file!-value"><code>(DELETE-FILE! PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L340-L345">src</a>)</sub></sup><a name="delete-file!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Deletes a given file if the file exists.



***

#### <a href="#directory-exists?-value"><code>(DIRECTORY-EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L216-L222">src</a>)</sub></sup><a name="directory-exists?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Returns True if a pathname names a directory that exists.



***

#### <a href="#directory-files-value"><code>(DIRECTORY-FILES PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L273-L278">src</a>)</sub></sup><a name="directory-files-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>)))</code>

Returns all files within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <a href="#directory-pathname?-value"><code>(DIRECTORY-PATHNAME? PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L183-L187">src</a>)</sub></sup><a name="directory-pathname?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if a pathname has no file component.



***

#### <a href="#empty?-value"><code>(EMPTY? PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L293-L298">src</a>)</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Checks whether a directory is empty.



***

#### <a href="#exists?-value"><code>(EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L197-L201">src</a>)</sub></sup><a name="exists?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Returns whether a file or directory exists.



***

#### <a href="#file-exists?-value"><code>(FILE-EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L225-L233">src</a>)</sub></sup><a name="file-exists?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Returns True if a pathname names a file that exists.



***

#### <a href="#file-pathname?-value"><code>(FILE-PATHNAME? PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L190-L194">src</a>)</sub></sup><a name="file-pathname?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if a pathname has a file component.



***

#### <a href="#file-position-value"><code>(FILE-POSITION STREAM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L479-L482">src</a>)</sub></sup><a name="file-position-value"></a>
<code>&forall; :A. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Finds the file-position of a file stream.



***

#### <a href="#flush-value"><code>(FLUSH STREAM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L473-L476">src</a>)</sub></sup><a name="flush-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Blocks until `stream` has been flushed. Calls `cl:finish-output`.



***

#### <a href="#merge-value"><code>(MERGE PATH1 PATH2)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L242-L249">src</a>)</sub></sup><a name="merge-value"></a>
<code>&forall; :A :B. (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#into-class">INTO</a> :B <a href="#pathname-type"><code>PATHNAME</code></a>) &rArr; (:A &rarr; :B &rarr; <a href="#pathname-type"><code>PATHNAME</code></a>)</code>

Merges two pathnames together. The directory pathname should be the first argument.



***

#### <a href="#read-char-value"><code>(READ-CHAR STREAM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L442-L447">src</a>)</sub></sup><a name="read-char-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Reads a character from an FileStream.



***

#### <a href="#read-file-lines-value"><code>(READ-FILE-LINES PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L729-L733">src</a>)</sub></sup><a name="read-file-lines-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>)))</code>

Reads a file into lines, given a pathname or string.



***

#### <a href="#read-file-to-string-value"><code>(READ-FILE-TO-STRING PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L722-L726">src</a>)</sub></sup><a name="read-file-to-string-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Reads a file into a string, given a pathname string.



***

#### <a href="#read-file-to-vector-value"><code>(READ-FILE-TO-VECTOR STREAM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L583-L592">src</a>)</sub></sup><a name="read-file-to-vector-value"></a>
<code>&forall; :A. <a href="#file-class">FILE</a> :A &rArr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#vector-type"><code>VECTOR</code></a> :A)))</code>

Reads a file into a vector of type `:a`.



***

#### <a href="#read-vector-value"><code>(READ-VECTOR STREAM CHUNK-SIZE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L569-L577">src</a>)</sub></sup><a name="read-vector-value"></a>
<code>&forall; :A. <a href="#file-class">FILE</a> :A &rArr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#vector-type"><code>VECTOR</code></a> :A)))</code>

Reads a chunk of a file into a vector of type `:a`.



***

#### <a href="#remove-directory!-value"><code>(REMOVE-DIRECTORY! PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L301-L305">src</a>)</sub></sup><a name="remove-directory!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :A))</code>

Deletes an empty directory.



***

#### <a href="#remove-directory-recursive!-value"><code>(REMOVE-DIRECTORY-RECURSIVE! PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L308-L313">src</a>)</sub></sup><a name="remove-directory-recursive!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Deletes a target directory recursively. Equivalent to `rm -r`. Errors if the path is not a directory.



***

#### <a href="#set-file-position-value"><code>(SET-FILE-POSITION STREAM I)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L485-L488">src</a>)</sub></sup><a name="set-file-position-value"></a>
<code>&forall; :A. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Sets the file position of a file stream.



***

#### <a href="#subdirectories-value"><code>(SUBDIRECTORIES PATH)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L281-L286">src</a>)</sub></sup><a name="subdirectories-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>)))</code>

Returns all subdirectories within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <a href="#system-relative-pathname-value"><code>(SYSTEM-RELATIVE-PATHNAME SYSTEM-NAME NAME)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L316-L320">src</a>)</sub></sup><a name="system-relative-pathname-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; (:A &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

Generates a system-relative-pathname for a given filename or path. This is a wrapper for `asdf:system-relative-pathname`. `Name` will likely be an empty string unless a subdirectory or filename is specified.



***

#### <a href="#with-open-file-value"><code>(WITH-OPEN-FILE STREAM-OPTIONS THUNK)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L558-L562">src</a>)</sub></sup><a name="with-open-file-value"></a>
<code>&forall; :A :B. <a href="#file-class">FILE</a> :A &rArr; (<a href="#streamoptions-type"><code>STREAMOPTIONS</code></a> &rarr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B)) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Opens a file stream, performs `thunk` on it, then closes the stream.



***

#### <a href="#with-temp-directory-value"><code>(WITH-TEMP-DIRECTORY THUNK)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L684-L689">src</a>)</sub></sup><a name="with-temp-directory-value"></a>
<code>&forall; :A. ((<a href="#pathname-type"><code>PATHNAME</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :A)) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :A))</code>

Performs an operation `thunk` inside a temporary directory.



***

#### <a href="#with-temp-file-value"><code>(WITH-TEMP-FILE FILE-TYPE THUNK)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L674-L681">src</a>)</sub></sup><a name="with-temp-file-value"></a>
<code>&forall; :A :B. <a href="#file-class">FILE</a> :A &rArr; (<a href="#string-type"><code>STRING</code></a> &rarr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B)) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Performs an operation `thunk` on a temporary file. File type extensions need to include `.`, like ".txt".



***

#### <a href="#write-char-value"><code>(WRITE-CHAR STREAM DATA)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L450-L453">src</a>)</sub></sup><a name="write-char-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; <a href="#char-type"><code>CHAR</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes a `Char` to the stream.



***

#### <a href="#write-line-value"><code>(WRITE-LINE STREAM S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L610-L613">src</a>)</sub></sup><a name="write-line-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes a string with an appended newline to a filestream of type Char.



***

#### <a href="#write-string-value"><code>(WRITE-STRING FS S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L605-L607">src</a>)</sub></sup><a name="write-string-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes a `string` to a FileStream of type Char.



***

#### <a href="#write-to-file!-value"><code>(WRITE-TO-FILE! PATH DATA)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L715-L719">src</a>)</sub></sup><a name="write-to-file!-value"></a>
<code>&forall; :A :B. (<a href="#runtimerepr-class">RUNTIMEREPR</a> :B) (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#file-class">FILE</a> :B) &rArr; (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :B) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Opens and writes to a file with data of type :a. Supersedes existing data on the file.



***

#### <a href="#write-vector-value"><code>(WRITE-VECTOR STREAM V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L598-L602">src</a>)</sub></sup><a name="write-vector-value"></a>
<code>&forall; :A. (<a href="#runtimerepr-class">RUNTIMEREPR</a> :A) (<a href="#file-class">FILE</a> :A) &rArr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes elements of an vector of type `:a` to a stream of type `:a`.



***

# Package `COALTON-LIBRARY/FUNCTIONS`<a name="coalton-library/functions-package"></a>

### Values

#### <a href="#/=-value"><code>(/= A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L155-L157">src</a>)</sub></sup><a name="/=-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `a` not equal to `b`?



***

#### <a href="#asum-value"><code>(ASUM XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L149-L151">src</a>)</sub></sup><a name="asum-value"></a>
<code>&forall; :A :B :C. (<a href="#alternative-class">ALTERNATIVE</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A (:B :C)) &rarr; (:B :C))</code>

Fold over a list using `alt`.



***

#### <a href="#bracket-value"><code>(BRACKET INIT EXIT BODY)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L192-L201">src</a>)</sub></sup><a name="bracket-value"></a>
<code>&forall; :A :B :C :D. <a href="#monad-class">MONAD</a> :A &rArr; ((:A :B) &rarr; (:B &rarr; (:A :C)) &rarr; (:B &rarr; (:A :D)) &rarr; (:A :D))</code>

Bracket takes an initial state, performs a body of operations, and then forces a safe exit.

This wraps `cl:unwind-protect`.

Modeled after Haskell: https://wiki.haskell.org/Bracket_pattern



***

#### <a href="#complement-value"><code>(COMPLEMENT F X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L118-L120">src</a>)</sub></sup><a name="complement-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Compute the complement of a unary Boolean function.



***

#### <a href="#compose-value"><code>(COMPOSE F G X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L102-L104">src</a>)</sub></sup><a name="compose-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (:C &rarr; :A) &rarr; :C &rarr; :B)</code>

Equivalent to `(f (g x))`.



***

#### <a href="#conjoin-value"><code>(CONJOIN F G X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L107-L109">src</a>)</sub></sup><a name="conjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Compute the conjunction of two unary Boolean functions.



***

#### <a href="#const-value"><code>(CONST A _B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L85-L87">src</a>)</sub></sup><a name="const-value"></a>
<code>&forall; :A :B. (:A &rarr; :B &rarr; :A)</code>

A function that always returns its first argument.



***

#### <a href="#curry-value"><code>(CURRY FUNC LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L123-L125">src</a>)</sub></sup><a name="curry-value"></a>
<code>&forall; :A :B :C. (((<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :C) &rarr; :A &rarr; :B &rarr; :C)</code>

Take a function whose input is a tuple and enable curried application of the left and right parameters, equivalent to `(func (Tuple left right))`.



***

#### <a href="#disjoin-value"><code>(DISJOIN F G X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L112-L114">src</a>)</sub></sup><a name="disjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Compute the disjunction of two unary Boolean functions.



***

#### <a href="#fix-value"><code>(FIX F N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L66-L75">src</a>)</sub></sup><a name="fix-value"></a>
<code>&forall; :A :B. (((:A &rarr; :B) &rarr; :A &rarr; :B) &rarr; :A &rarr; :B)</code>

Compute the fixed point of a unary function. This is equivalent to the Y-combinator of the lambda calculus. This combinator allows recursion without specific assignment of names. For example, the factorial function can be written

    (define fact
      (fix
        (fn (f n)
          (if (== n 0)
            1
            (* n (f (- n 1)))))))



***

#### <a href="#flip-value"><code>(FLIP F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L91-L93">src</a>)</sub></sup><a name="flip-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; :B &rarr; :A &rarr; :C)</code>

Returns a function that takes its arguments in reverse order.



***

#### <a href="#id-value"><code>(ID X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L79-L81">src</a>)</sub></sup><a name="id-value"></a>
<code>&forall; :A. (:A &rarr; :A)</code>

A function that always returns its argument.



***

#### <a href="#msum-value"><code>(MSUM XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L144-L146">src</a>)</sub></sup><a name="msum-value"></a>
<code>&forall; :A :B. (<a href="#monoid-class">MONOID</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A :B) &rarr; :B)</code>

Fold over a list using `<>`.



***

#### <a href="#pair-with-value"><code>(PAIR-WITH FUNC LEFT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L135-L137">src</a>)</sub></sup><a name="pair-with-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :B))</code>

Create a `Tuple` of the form `(Tuple left (func left))`.



***

#### <a href="#print-value"><code>(PRINT ITEM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L51-L53">src</a>)</sub></sup><a name="print-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; (:A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Print the String representation of `item` to `cl:*standard-output*`.



***

#### <a href="#reduce-value"><code>(REDUCE F Y XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L96-L98">src</a>)</sub></sup><a name="reduce-value"></a>
<code>&forall; :A :B :C. <a href="#foldable-class">FOLDABLE</a> :C &rArr; ((:A &rarr; :B &rarr; :B) &rarr; :B &rarr; (:C :A) &rarr; :B)</code>

The same as `fold` but with the argument order swapped to match `cl:reduce`



***

#### <a href="#trace-value"><code>(TRACE STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L37-L41">src</a>)</sub></sup><a name="trace-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Print a line to `cl:*standard-output*`.



***

#### <a href="#traceobject-value"><code>(TRACEOBJECT STR ITEM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L44-L48">src</a>)</sub></sup><a name="traceobject-value"></a>
<code>&forall; :A. (<a href="#string-type"><code>STRING</code></a> &rarr; :A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Print a line to `cl:*standard-output*` in the form "{STR}: {ITEM}".



***

#### <a href="#uncurry-value"><code>(UNCURRY FUNC TPL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L128-L132">src</a>)</sub></sup><a name="uncurry-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :C)</code>

Take a function with two currying parameters and enable their input as a single `Tuple`.



***

#### <a href="#unsafe-pointer-eq?-value"><code>(UNSAFE-POINTER-EQ? A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L57-L59">src</a>)</sub></sup><a name="unsafe-pointer-eq?-value"></a>
<code>&forall; :A. (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>


***

# Package `COALTON-LIBRARY/HASH`<a name="coalton-library/hash-package"></a>

### Values

#### <a href="#combine-hashes-value"><code>(COMBINE-HASHES LHS RHS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L41-L43">src</a>)</sub></sup><a name="combine-hashes-value"></a>
<code>(<a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>


***

#### <a href="#combine-hashes-order-independent-value"><code>(COMBINE-HASHES-ORDER-INDEPENDENT LHS RHS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L46-L48">src</a>)</sub></sup><a name="combine-hashes-order-independent-value"></a>
<code>(<a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>


***

# Package `COALTON-LIBRARY/HASHMAP`<a name="coalton-library/hashmap-package"></a>

### Types

#### <a href="#hashmap-type"><code>HASHMAP</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L57-L59">src</a>)</sub></sup><a name="hashmap-type"></a>
- <code>(HASHMAP (<a href="#hmnode-type"><code>HMNODE</code></a> :A :B))</code>

Immutable map (also known as a dictionary or dict) using hashes. Implemented as a hash array mapped trie data structure.

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B)</code>

</details>



***

### Values

#### <a href="#count-value"><code>(COUNT HM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L291-L300">src</a>)</sub></sup><a name="count-value"></a>
<code>&forall; :A :B. ((<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Returns the number of entries in HM.



***

#### <a href="#empty?-value"><code>(EMPTY? HM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L281-L285">src</a>)</sub></sup><a name="empty?-value"></a>
<code>&forall; :A :B. ((<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if a hashmap HM is empty, False if not.



***

#### <a href="#insert-value"><code>(INSERT HM KEY VAL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L330-L369">src</a>)</sub></sup><a name="insert-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B))</code>

Returns a hashmap that has a new entry of (KEY, VAL) added to HM.  If HM
containes an entry with KEY, the new hashmap replaces it for the new entry.



***

#### <a href="#keys-value"><code>(KEYS HM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L477-L479">src</a>)</sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Returns an interator to iterate over all the keys in a hashmap hm.



***

#### <a href="#lookup-value"><code>(LOOKUP HM KEY)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L304-L325">src</a>)</sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Returns a value associated with KEY in the hashmap HM.



***

#### <a href="#remove-value"><code>(REMOVE HM KEY)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L388-L428">src</a>)</sub></sup><a name="remove-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) &rarr; :A &rarr; (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B))</code>

Returns a hashmap that is identical to HM except the entry with KEY is
removed.  If HM does not contain an entry with KEY, HM is returned as is.



***

#### <a href="#values-value"><code>(VALUES HM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L483-L485">src</a>)</sub></sup><a name="values-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Returns an interator to iterate over all the values in a hashmap hm.



***

#### <a href="#empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.lisp#L275-L277">src</a>)</sub></sup><a name="empty-value"></a>
<code>&forall; :A :B. (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B)</code>

An empty HashMap



***

# Package `COALTON-LIBRARY/HASHTABLE`<a name="coalton-library/hashtable-package"></a>

### Types

#### <a href="#hashtable-type"><code>HASHTABLE</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L39-L40">src</a>)</sub></sup><a name="hashtable-type"></a>

A mutable hash table.

<details>
<summary>Instances</summary>

- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#default-class">DEFAULT</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>

</details>



***

### Values

#### <a href="#count-value"><code>(COUNT TABLE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L109-L112">src</a>)</sub></sup><a name="count-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Returns the number of entries in TABLE



***

#### <a href="#entries-value"><code>(ENTRIES TABLE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L115-L126">src</a>)</sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Returns the key-values pairs as a list.



***

#### <a href="#extend!-value"><code>(EXTEND! TABLE ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L160-L167">src</a>)</sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B :C. (<a href="#hash-class">HASH</a> :A) (<a href="#intoiterator-class">INTOITERATOR</a> :C (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)) &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :C &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Insert all of the key value pairs from ITER into TABLE, overwriting duplicate keys.



***

#### <a href="#get-value"><code>(GET TABLE KEY)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L83-L90">src</a>)</sub></sup><a name="get-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Lookup KEY in TABLE



***

#### <a href="#keys-value"><code>(KEYS TABLE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L129-L141">src</a>)</sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Returns the keys in TABLE as a list



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L77-L80">src</a>)</sub></sup><a name="new-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B))</code>

Create a new empty hashtable



***

#### <a href="#remove!-value"><code>(REMOVE! TABLE KEY)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L101-L106">src</a>)</sub></sup><a name="remove!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Remove the entry at KEY from TABLE



***

#### <a href="#set!-value"><code>(SET! TABLE KEY VALUE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L93-L98">src</a>)</sub></sup><a name="set!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :A &rarr; :B &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set KEY to VALUE in TABLE



***

#### <a href="#values-value"><code>(VALUES TABLE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L144-L156">src</a>)</sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Returns the values in TABLE as a list



***

#### <a href="#with-capacity-value"><code>(WITH-CAPACITY CAPACITY)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L70-L74">src</a>)</sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#integer-type"><code>INTEGER</code></a> &rarr; (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B))</code>

Create a new empty hashtable with a given capacity



***

# Package `COALTON-LIBRARY/ITERATOR`<a name="coalton-library/iterator-package"></a>

### Types

#### <a href="#iterator-type"><code>ITERATOR</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L85-L87">src</a>)</sub></sup><a name="iterator-type"></a>

A forward-moving pointer into an ordered sequence of :ELTs

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> <a href="#iterator-type"><code>ITERATOR</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A)</code>

</details>



***

### Classes

#### <a href="#fromiterator-class"><code>FROMITERATOR</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L659-L660">src</a>)</sub></sup><a name="fromiterator-class"></a>
<code><a href="#fromiterator-class">FROMITERATOR</a> :A :B</code>

Methods:
- <code>COLLECT! :: ((<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#seq-type"><code>SEQ</code></a> :A) :A</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#tree-type"><code>TREE</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A) :A</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#slice-type"><code>SLICE</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#list-type"><code>LIST</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> :A :B &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#result-type"><code>RESULT</code></a> :C :A) (<a href="#result-type"><code>RESULT</code></a> :C :B)</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> :A :B &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)</code>

</details>



***

#### <a href="#intoiterator-class"><code>INTOITERATOR</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L141-L145">src</a>)</sub></sup><a name="intoiterator-class"></a>
<code><a href="#intoiterator-class">INTOITERATOR</a> :A :B</code>


Containers which can be converted into iterators.

`INTO-ITER` must not mutate its argument, only produce a "view" into it.

Methods:
- <code>INTO-ITER :: (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#seq-type"><code>SEQ</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#tree-type"><code>TREE</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#slice-type"><code>SLICE</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#list-type"><code>LIST</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#result-type"><code>RESULT</code></a> :A :B) :B</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> <a href="#unit-type"><code>UNIT</code></a> :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A) :A</code>

</details>



***

### Values

#### <a href="#and!-value"><code>(AND! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L485-L496">src</a>)</sub></sup><a name="and!-value"></a>
<code>((<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if all iterator elements are True. May not consume the entire iterator. Returns True on an empty iterator.



***

#### <a href="#any!-value"><code>(ANY! GOOD? ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L615-L621">src</a>)</sub></sup><a name="any!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Return `True` as soon as any element of ITER is GOOD?, or `False` if none of them are.

Returns `False` if ITER is empty.



***

#### <a href="#chain!-value"><code>(CHAIN! ITER1 ITER2)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L424-L435">src</a>)</sub></sup><a name="chain!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield all the elements of ITER1 followed by all the elements from ITER2.



***

#### <a href="#count!-value"><code>(COUNT! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L517-L521">src</a>)</sub></sup><a name="count!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Return the number of elements in ITER.
This operation could be called `length!`, but `count!` emphasizes the fact that it consumes ITER, and
afterwards, ITER will be exhausted.



***

#### <a href="#count-forever-value"><code>(COUNT-FOREVER _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L252-L256">src</a>)</sub></sup><a name="count-forever-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An infinite iterator which starts at 0 and counts upwards by 1.



***

#### <a href="#down-from-value"><code>(DOWN-FROM LIMIT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L247-L249">src</a>)</sub></sup><a name="down-from-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins below the provided limit and counts down through and including zero.



***

#### <a href="#elementwise-hash!-value"><code>(ELEMENTWISE-HASH! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L644-L653">src</a>)</sub></sup><a name="elementwise-hash!-value"></a>
<code>&forall; :A. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>

Hash an iterator by combining the hashes of all its elements.

The empty iterator will hash as 0.



***

#### <a href="#elementwise-match!-value"><code>(ELEMENTWISE-MATCH! SAME? LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L624-L633">src</a>)</sub></sup><a name="elementwise-match!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Are LEFT and RIGHT elementwise-identical under SAME?

True if, for every pair of elements (A B) in (LEFT RIGHT), (same? A B) is True, and LEFT and RIGHT have the
same length.



***

#### <a href="#elementwise==!-value"><code>(ELEMENTWISE==!)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L636-L641">src</a>)</sub></sup><a name="elementwise==!-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is every element of the first iterator `==' to the corresponding element of the second?

True if two iterators have the same length, and for every N, the Nth element of the first iterator is `==' to
the Nth element of the second iterator.



***

#### <a href="#enumerate!-value"><code>(ENUMERATE! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L351-L353">src</a>)</sub></sup><a name="enumerate!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> <a href="#ufix-type"><code>UFIX</code></a> :A)))</code>

Pair successive zero-based incides with elements from ITER



***

#### <a href="#every!-value"><code>(EVERY! GOOD? ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L606-L612">src</a>)</sub></sup><a name="every!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Return `True` if every element of ITER is GOOD?, or `False` as soon as any element is not GOOD?.

Returns `True` if ITER is empty.



***

#### <a href="#filter!-value"><code>(FILTER! KEEP? ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L356-L364">src</a>)</sub></sup><a name="filter!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Return an iterator over the elements from ITER for which KEEP?returns true.



***

#### <a href="#filter-map!-value"><code>(FILTER-MAP! F ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L367-L380">src</a>)</sub></sup><a name="filter-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Map an iterator, retaining only the elements where F returns SOME.



***

#### <a href="#find!-value"><code>(FIND! THIS? ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L532-L538">src</a>)</sub></sup><a name="find!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the first element of ITER for which THIS? returns `True`, or `None` if no element matches.



***

#### <a href="#find-map!-value"><code>(FIND-MAP! F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L541-L543">src</a>)</sub></sup><a name="find-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Return the first element of (map F ITER) for which F returns `Some`.



***

#### <a href="#flat-map!-value"><code>(FLAT-MAP! FUNC ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L455-L457">src</a>)</sub></sup><a name="flat-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Flatten! wrapped around map.



***

#### <a href="#flatten!-value"><code>(FLATTEN! ITERS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L438-L452">src</a>)</sub></sup><a name="flatten!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield all the elements from each of the ITERS in order.



***

#### <a href="#fold!-value"><code>(FOLD! FUNC INIT ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L113-L123">src</a>)</sub></sup><a name="fold!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B &rarr; :A) &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; :A)</code>

Tail recursive in-order fold. Common Lisp calls this operation `reduce`.

If ITER is empty, returns INIT. Otherwise, calls (FUNC STATE ITEM) for each ITEM of ITER to produce a new
STATE, using INIT as the first STATE.



***

#### <a href="#for-each!-value"><code>(FOR-EACH! THUNK ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L524-L529">src</a>)</sub></sup><a name="for-each!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#unit-type"><code>UNIT</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Call THUNK on each element of ITER in order for side effects.
Discard values returned by THUNK.



***

#### <a href="#index-of!-value"><code>(INDEX-OF! THIS? ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L546-L552">src</a>)</sub></sup><a name="index-of!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Return the zero-based index of the first element of ITER for which THIS? is `True`, or `None` if no element matches.



***

#### <a href="#interleave!-value"><code>(INTERLEAVE! LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L310-L329">src</a>)</sub></sup><a name="interleave!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Return an interator of interleaved elements from LEFT and RIGHT which terminates as soon as both LEFT and RIGHT do.

If one iterator terminates before the other, elements from the longer iterator will be yielded without
interleaving. (interleave empty ITER) is equivalent to (id ITER).



***

#### <a href="#last!-value"><code>(LAST! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L480-L482">src</a>)</sub></sup><a name="last!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Yields the last element of ITER, completely consuming it.



***

#### <a href="#map-while!-value"><code>(MAP-WHILE! F ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L383-L403">src</a>)</sub></sup><a name="map-while!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Map an iterator, stopping early if F returns NONE.



***

#### <a href="#max!-value"><code>(MAX! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L569-L571">src</a>)</sub></sup><a name="max!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the most-positive element of ITER, or `None` if ITER is empty.



***

#### <a href="#maximize-by!-value"><code>(MAXIMIZE-BY! F ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L592-L596">src</a>)</sub></sup><a name="maximize-by!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-positive.

Return `None' if ITER is empty.



***

#### <a href="#mconcat!-value"><code>(MCONCAT! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L460-L462">src</a>)</sub></sup><a name="mconcat!-value"></a>
<code>&forall; :A. <a href="#monoid-class">MONOID</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; :A)</code>

Fold an iterator of monoids into a single element.



***

#### <a href="#mconcatmap!-value"><code>(MCONCATMAP! FUNC ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L465-L467">src</a>)</sub></sup><a name="mconcatmap!-value"></a>
<code>&forall; :A :B. <a href="#monoid-class">MONOID</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; :B)</code>

Map an iterator to an iterator of monoids, and then fold that iterator into a single element.



***

#### <a href="#min!-value"><code>(MIN! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L574-L576">src</a>)</sub></sup><a name="min!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the most-negative element of ITER, or `None` if ITER is empty.



***

#### <a href="#minimize-by!-value"><code>(MINIMIZE-BY! F ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L599-L603">src</a>)</sub></sup><a name="minimize-by!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-negative.

Return `None' if ITER is empty.



***

#### <a href="#new-value"><code>(NEW F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L90-L92">src</a>)</sub></sup><a name="new-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Create a new iterator from a function that yields elements.



***

#### <a href="#next!-value"><code>(NEXT! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L104-L110">src</a>)</sub></sup><a name="next!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Advance ITER, returning its next yielded value, or `None` if the iterator is exhausted.
Behavior is undefined if two threads concurrently call `next!` on the same iterator without a lock. Note that
most of the operators defined on iterators call `next!` internally, or create new iterators which will call
`next!` on their inputs.



***

#### <a href="#once-value"><code>(ONCE ITEM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L272-L281">src</a>)</sub></sup><a name="once-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield `item` once.



***

#### <a href="#optimize!-value"><code>(OPTIMIZE! BETTER? ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L555-L566">src</a>)</sub></sup><a name="optimize!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the best element of ITER.

Return `None` if ITER is empty.



***

#### <a href="#optimize-by!-value"><code>(OPTIMIZE-BY! BETTER? F ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L582-L589">src</a>)</sub></sup><a name="optimize-by!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (:B &rarr; :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the element of ITER where (F ELT) is the best.

Return `None` if ITER is empty.



***

#### <a href="#or!-value"><code>(OR! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L499-L509">src</a>)</sub></sup><a name="or!-value"></a>
<code>((<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if any iterator elements are True. May not consume the entire iterator. Returns False on an empty iterator.



***

#### <a href="#pair-with!-value"><code>(PAIR-WITH! FUNC KEYS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L470-L473">src</a>)</sub></sup><a name="pair-with!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Returns an iterator over tuples whose FSTs are elements from KEYS, and whose SNDs are the results of applying FUNC to those KEYS.



***

#### <a href="#range-decreasing-value"><code>(RANGE-DECREASING STEP START END)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L210-L244">src</a>)</sub></sup><a name="range-decreasing-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

A range which begins below START and counts down through and including END by STEP.

Equivalent to reversing `range-increasing`



***

#### <a href="#range-increasing-value"><code>(RANGE-INCREASING STEP START END)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L174-L182">src</a>)</sub></sup><a name="range-increasing-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins at START and yields successive elements spaced by STEP, stopping before END.



***

#### <a href="#recursive-iter-value"><code>(RECURSIVE-ITER SUCC DONE? START)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L155-L167">src</a>)</sub></sup><a name="recursive-iter-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which yields first START, then (SUCC START), then (SUCC (SUCC START)), and so on, stopping as soon as such a value is `done?`.

Beware off-by-one errors: the first value which is `done?` is not yielded. If `(done?  start)' is true, the
iterator is empty.



***

#### <a href="#remove-duplicates!-value"><code>(REMOVE-DUPLICATES! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L268-L277">src</a>)</sub></sup><a name="remove-duplicates!-value"></a>
<code>&forall; :A. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield unique elements from ITER in order of first appearance.



***

#### <a href="#repeat-value"><code>(REPEAT ITEM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L259-L264">src</a>)</sub></sup><a name="repeat-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield ITEM over and over, infinitely.



***

#### <a href="#repeat-for-value"><code>(REPEAT-FOR ITEM COUNT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L267-L269">src</a>)</sub></sup><a name="repeat-for-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield ITEM COUNT times, then stop.



***

#### <a href="#size-hint-value"><code>(SIZE-HINT ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L99-L101">src</a>)</sub></sup><a name="size-hint-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>


***

#### <a href="#sum!-value"><code>(SUM! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L512-L514">src</a>)</sub></sup><a name="sum!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; :A)</code>

Add together all the elements of ITER.



***

#### <a href="#take!-value"><code>(TAKE! COUNT ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L417-L421">src</a>)</sub></sup><a name="take!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An `Iterator` which yields at most COUNT elements from ITER.



***

#### <a href="#unwrapped!-value"><code>(UNWRAPPED! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L406-L414">src</a>)</sub></sup><a name="unwrapped!-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> (:A :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>


***

#### <a href="#up-through-value"><code>(UP-THROUGH LIMIT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L190-L192">src</a>)</sub></sup><a name="up-through-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins at zero and counts up through and including LIMIT.



***

#### <a href="#up-to-value"><code>(UP-TO LIMIT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L185-L187">src</a>)</sub></sup><a name="up-to-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins at zero and counts up to, but not including, LIMIT.



***

#### <a href="#with-size-value"><code>(WITH-SIZE F SIZE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L95-L96">src</a>)</sub></sup><a name="with-size-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A)) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>


***

#### <a href="#zip!-value"><code>(ZIP!)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L346-L348">src</a>)</sub></sup><a name="zip!-value"></a>
<code>&forall; :A :B. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Return an iterator of tuples contining elements from two iterators.



***

#### <a href="#zip-with!-value"><code>(ZIP-WITH! F LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L332-L343">src</a>)</sub></sup><a name="zip-with!-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :C))</code>

Return an iterator of elements from LEFT and RIGHT which terminates as soon as either LEFT or RIGHT does.



***

#### <a href="#empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L137-L139">src</a>)</sub></sup><a name="empty-value"></a>
<code>&forall; :A. (<a href="#iterator-type"><code>ITERATOR</code></a> :A)</code>

Yields nothing; stops immediately



***

# Package `COALTON-LIBRARY/LISPARRAY`<a name="coalton-library/lisparray-package"></a>

### Types

#### <a href="#lisparray-type"><code>LISPARRAY</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L32-L37">src</a>)</sub></sup><a name="lisparray-type"></a>

A one-dimensional, non-resizable array of elements.

These arrays are represented as possibly specialized `(cl:simple-array <type> (cl:*))` and are meant to be used as a tool either to interface with Lisp code or to implement efficient data structures. One should consult `Vector` or `Seq` for more general sequential data structure needs.

Whether or not the arrays are specialized depends on the underlying Lisp implementation. Consult `cl:upgraded-array-element-type` to determine whether `LispArray` may get specialized.

<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">FOLDABLE</a> <a href="#lisparray-type"><code>LISPARRAY</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#iso-class">ISO</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#randomaccess-class">RANDOMACCESS</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A)</code>

</details>



***

### Values

#### <a href="#aref-value"><code>(AREF V I)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L78-L81">src</a>)</sub></sup><a name="aref-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A)</code>

Read the `i`th value of the `LispArray` `v`.



***

#### <a href="#copy-value"><code>(COPY V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L93-L96">src</a>)</sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) &rarr; (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A))</code>

Make a deep copy of the `LispArray` `v`.



***

#### <a href="#length-value"><code>(LENGTH V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L71-L74">src</a>)</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Return the length of the `LispArray` `v`.



***

#### <a href="#make-value"><code>(MAKE N X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L46-L53">src</a>)</sub></sup><a name="make-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A))</code>

Make a new `LispArray` of length `n` initialized to `x`.

If the type of `x` represents a specialized array 



***

#### <a href="#make-uninitialized-value"><code>(MAKE-UNINITIALIZED N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L56-L67">src</a>)</sub></sup><a name="make-uninitialized-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A))</code>

Make a new LispArray of length `n` that can store elements of type `:t`.

WARNING: The consequences are undefined if an uninitialized element is read before being set.




***

#### <a href="#set!-value"><code>(SET! V I X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L85-L89">src</a>)</sub></sup><a name="set!-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the `i`th value of the `LispArray` `v` to `x`.



***

# Package `COALTON-LIBRARY/LIST`<a name="coalton-library/list-package"></a>

### Values

#### <a href="#all-value"><code>(ALL F XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L619-L626">src</a>)</sub></sup><a name="all-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if every element in XS matches F.



***

#### <a href="#any-value"><code>(ANY F L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L629-L636">src</a>)</sub></sup><a name="any-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if at least one element in XS matches F.



***

#### <a href="#append-value"><code>(APPEND XS YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L307-L309">src</a>)</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Appends two lists together and returns a new list.



***

#### <a href="#car-value"><code>(CAR X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L109-L113">src</a>)</sub></sup><a name="car-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Return the traditional car of a list. This function is partial



***

#### <a href="#cdr-value"><code>(CDR XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L116-L120">src</a>)</sub></sup><a name="cdr-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Return the traditional cdr of a list.



***

#### <a href="#combs-value"><code>(COMBS L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L651-L659">src</a>)</sub></sup><a name="combs-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Compute a list of all combinations of elements of L. This function is sometimes goes by the name "power set" or "subsets".

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBS L)`.



***

#### <a href="#combsof-value"><code>(COMBSOF N L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L662-L675">src</a>)</sub></sup><a name="combsof-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Produce a list of size-N subsets of L.

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBSOF N L)`.

This function is equivalent to all size-N elements of `(COMBS L)`.



***

#### <a href="#concat-value"><code>(CONCAT XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L313-L315">src</a>)</sub></sup><a name="concat-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Appends a list of lists together into a single new list.



***

#### <a href="#concatmap-value"><code>(CONCATMAP F XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L319-L321">src</a>)</sub></sup><a name="concatmap-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#list-type"><code>LIST</code></a> :B)) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B))</code>

Apply F to each element in XS and concatenate the results.



***

#### <a href="#cons?-value"><code>(CONS? XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L144-L148">src</a>)</sub></sup><a name="cons?-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if XS is a non-empty list.



***

#### <a href="#countby-value"><code>(COUNTBY F THINGS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L471-L478">src</a>)</sub></sup><a name="countby-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Count the number of items in THINGS that satisfy the predicate F.



***

#### <a href="#difference-value"><code>(DIFFERENCE XS YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L407-L409">src</a>)</sub></sup><a name="difference-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list with the first occurence of each element in `ys` removed from `xs`.



***

#### <a href="#drop-value"><code>(DROP N XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L190-L197">src</a>)</sub></sup><a name="drop-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list with the first N elements removed.



***

#### <a href="#elemindex-value"><code>(ELEMINDEX X XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L268-L269">src</a>)</sub></sup><a name="elemindex-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>


***

#### <a href="#equivalence-classes-value"><code>(EQUIVALENCE-CLASSES)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L581-L581">src</a>)</sub></sup><a name="equivalence-classes-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>


***

#### <a href="#equivalence-classes-by-value"><code>(EQUIVALENCE-CLASSES-BY F L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L569-L578">src</a>)</sub></sup><a name="equivalence-classes-by-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Break a list into a list of equivalence classes according to an equivalence relation.



***

#### <a href="#filter-value"><code>(FILTER F XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L223-L232">src</a>)</sub></sup><a name="filter-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list containing every element of XS that matches the predicate function F in the same order.



***

#### <a href="#find-value"><code>(FIND F XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L213-L220">src</a>)</sub></sup><a name="find-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the first element in a list matching the predicate function F.



***

#### <a href="#findindex-value"><code>(FINDINDEX F XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L272-L281">src</a>)</sub></sup><a name="findindex-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Returns the index of the first element matching the predicate function F.



***

#### <a href="#head-value"><code>(HEAD L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L95-L99">src</a>)</sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the first element of a list.



***

#### <a href="#index-value"><code>(INDEX I XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L243-L250">src</a>)</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the Ith element of a list.



***

#### <a href="#init-value"><code>(INIT L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L131-L134">src</a>)</sub></sup><a name="init-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns every element except the last in a list.



***

#### <a href="#insert-value"><code>(INSERT E LS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L481-L483">src</a>)</sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Inserts an element into a list at the first place it is less than or equal to the next element.



***

#### <a href="#insertby-value"><code>(INSERTBY CMP X YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L486-L496">src</a>)</sub></sup><a name="insertby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type"><code>ORD</code></a>) &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Generic version of insert



***

#### <a href="#insertions-value"><code>(INSERTIONS A L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L524-L533">src</a>)</sub></sup><a name="insertions-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Produce a list of copies of L, each with A inserted at a possible position.

    (insertions 0 (make-list 1 2))
    => ((0 1 2) (1 0 2) (1 2 0))




***

#### <a href="#intercalate-value"><code>(INTERCALATE XS XSS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L519-L521">src</a>)</sub></sup><a name="intercalate-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Intersperses XS into XSS and then concatenates the result.



***

#### <a href="#intersection-value"><code>(INTERSECTION XS YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L350-L359">src</a>)</sub></sup><a name="intersection-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns elements which occur in both lists. Does not return duplicates and does not guarantee order.



***

#### <a href="#intersperse-value"><code>(INTERSPERSE E XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L512-L516">src</a>)</sub></sup><a name="intersperse-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list where every other element is E.



***

#### <a href="#last-value"><code>(LAST L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L123-L128">src</a>)</sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the last element of a list.



***

#### <a href="#length-value"><code>(LENGTH L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L235-L240">src</a>)</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of a list.



***

#### <a href="#lookup-value"><code>(LOOKUP E XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L362-L371">src</a>)</sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Returns the value of the first (key, value) tuple in XS where the key matches E.



***

#### <a href="#maximum-value"><code>(MAXIMUM L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L599-L601">src</a>)</sub></sup><a name="maximum-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns a greatest element of a list, or None.



***

#### <a href="#member-value"><code>(MEMBER E XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L324-L331">src</a>)</sub></sup><a name="member-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns true if any element of XS is equal to E.



***

#### <a href="#minimum-value"><code>(MINIMUM L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L604-L606">src</a>)</sub></sup><a name="minimum-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns a least element of a list, or None.



***

#### <a href="#nth-value"><code>(NTH N L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L253-L255">src</a>)</sub></sup><a name="nth-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Like INDEX, but errors if the index is not found.



***

#### <a href="#nth-cdr-value"><code>(NTH-CDR N L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L258-L265">src</a>)</sub></sup><a name="nth-cdr-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns the nth-cdr of a list.



***

#### <a href="#null?-value"><code>(NULL? XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L137-L141">src</a>)</sub></sup><a name="null?-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if XS is an empty list.



***

#### <a href="#optimumby-value"><code>(OPTIMUMBY F XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L586-L596">src</a>)</sub></sup><a name="optimumby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns an optimum according to a total order.



***

#### <a href="#partition-value"><code>(PARTITION F XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L557-L566">src</a>)</sub></sup><a name="partition-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Splits a list into two new lists. The first list contains elements matching predicate F.



***

#### <a href="#perms-value"><code>(PERMS L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L646-L648">src</a>)</sub></sup><a name="perms-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Produce all permutations of the list L.



***

#### <a href="#product-value"><code>(PRODUCT XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L614-L616">src</a>)</sub></sup><a name="product-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Returns the product of XS



***

#### <a href="#range-value"><code>(RANGE START END)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L284-L299">src</a>)</sub></sup><a name="range-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list containing the numbers from START to END inclusive, counting by 1.

    COALTON-USER> (coalton (range 1 5))
    (1 2 3 4 5)

    COALTON-USER> (coalton (range 5 2))
    (5 4 3 2)




***

#### <a href="#remove-value"><code>(REMOVE X YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L402-L404">src</a>)</sub></sup><a name="remove-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Return a new list with the first element equal to `x` removed.



***

#### <a href="#remove-duplicates-value"><code>(REMOVE-DUPLICATES XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L383-L385">src</a>)</sub></sup><a name="remove-duplicates-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list without duplicate elements.



***

#### <a href="#remove-if-value"><code>(REMOVE-IF PRED XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L397-L399">src</a>)</sub></sup><a name="remove-if-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Return a new list with the first element for which PRED is `True` is removed.



***

#### <a href="#repeat-value"><code>(REPEAT N X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L163-L169">src</a>)</sub></sup><a name="repeat-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list with the same value repeated multiple times.



***

#### <a href="#reverse-value"><code>(REVERSE XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L177-L180">src</a>)</sub></sup><a name="reverse-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list containing the same elements in reverse order.



***

#### <a href="#singleton-value"><code>(SINGLETON X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L151-L153">src</a>)</sub></sup><a name="singleton-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list containing one element.



***

#### <a href="#singleton?-value"><code>(SINGLETON? XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L156-L160">src</a>)</sub></sup><a name="singleton?-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `xs` a list containing exactly one element?



***

#### <a href="#sort-value"><code>(SORT XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L499-L501">src</a>)</sub></sup><a name="sort-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Performs a sort of XS.



***

#### <a href="#sortby-value"><code>(SORTBY CMP XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L504-L509">src</a>)</sub></sup><a name="sortby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type"><code>ORD</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Generic version of sort



***

#### <a href="#split-value"><code>(SPLIT C STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L639-L643">src</a>)</sub></sup><a name="split-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>))</code>


***

#### <a href="#sum-value"><code>(SUM XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L609-L611">src</a>)</sub></sup><a name="sum-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Returns the sum of XS



***

#### <a href="#tail-value"><code>(TAIL L)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L102-L106">src</a>)</sub></sup><a name="tail-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Returns every element except the first in a list.



***

#### <a href="#take-value"><code>(TAKE N XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L200-L210">src</a>)</sub></sup><a name="take-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns the first N elements of a list.



***

#### <a href="#transpose-value"><code>(TRANSPOSE XS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L536-L554">src</a>)</sub></sup><a name="transpose-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Transposes a matrix represented by a list of lists.



***

#### <a href="#union-value"><code>(UNION XS YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L334-L347">src</a>)</sub></sup><a name="union-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list with the elements from both XS and YS and without duplicates.



***

#### <a href="#zip-value"><code>(ZIP XS YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L466-L468">src</a>)</sub></sup><a name="zip-value"></a>
<code>&forall; :A :B. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Builds a list of tuples with the elements of XS and YS.



***

#### <a href="#zipwith-value"><code>(ZIPWITH F XS YS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L412-L421">src</a>)</sub></sup><a name="zipwith-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C))</code>

Builds a new list by calling `f` with elements of `xs` and `ys`.



***

#### <a href="#zipwith3-value"><code>(ZIPWITH3 F XS YS ZS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L424-L434">src</a>)</sub></sup><a name="zipwith3-value"></a>
<code>&forall; :A :B :C :D. ((:A &rarr; :B &rarr; :C &rarr; :D) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :D))</code>

Build a new list by calling F with elements of XS, YS and ZS



***

#### <a href="#zipwith4-value"><code>(ZIPWITH4 F AS BS CS DS)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L437-L448">src</a>)</sub></sup><a name="zipwith4-value"></a>
<code>&forall; :A :B :C :D :E. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :D) &rarr; (<a href="#list-type"><code>LIST</code></a> :E))</code>

Build a new list by calling F with elements of AS, BS, CS and DS



***

#### <a href="#zipwith5-value"><code>(ZIPWITH5 F AS BS CS DS ES)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L451-L463">src</a>)</sub></sup><a name="zipwith5-value"></a>
<code>&forall; :A :B :C :D :E :F. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E &rarr; :F) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :D) &rarr; (<a href="#list-type"><code>LIST</code></a> :E) &rarr; (<a href="#list-type"><code>LIST</code></a> :F))</code>

Build a new list by calling F with elements of AS, BS, CS, DS and ES



***

### Macros

#### <a href="#make-macro"><code>MAKE (&amp;REST ELEMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="make-macro"></a>

Make a homogeneous list of `elements`. Synonym for `coalton:make-list`.



***

# Package `COALTON-LIBRARY/MATH/ARITH`<a name="coalton-library/math/arith-package"></a>

### Classes

#### <a href="#dividable-class"><code>DIVIDABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L64-L86">src</a>)</sub></sup><a name="dividable-class"></a>
<code><a href="#dividable-class">DIVIDABLE</a> :A :B</code>


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

- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#dividable-class">DIVIDABLE</a> :A :A</code>

</details>



***

#### <a href="#reciprocable-class"><code>RECIPROCABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L51-L62">src</a>)</sub></sup><a name="reciprocable-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> :A</code>


Any number with a multiplicative inverse (reciprocal) where:


    1 = (* (reciprocal x) x) = (* x (reciprocal x))
    (/ x y) = (* x (reciprocal y))


If no reciprocal exists for an element, produce a run-time error (e.g., zero).


Methods:
- <code>/ :: (:A &rarr; :A &rarr; :A)</code>
- <code>RECIPROCAL :: (:A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code>(<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

#### <a href="#transfinite-class"><code>TRANSFINITE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L92-L97">src</a>)</sub></sup><a name="transfinite-class"></a>
<code><a href="#transfinite-class">TRANSFINITE</a> :A</code>


Numeric type with a value for (positive) infinity and/or NaN.

Methods:
- <code>INFINITY :: :A</code>
- <code>INFINITE? :: (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>
- <code>NAN :: :A</code>
- <code>NAN? :: (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

### Values

#### <a href="#1+-value"><code>(1+ NUM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L176-L178">src</a>)</sub></sup><a name="1+-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

Increment `num`.



***

#### <a href="#1--value"><code>(1- NUM)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L182-L184">src</a>)</sub></sup><a name="1--value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

Decrement `num`.



***

#### <a href="#abs-value"><code>(ABS X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L154-L158">src</a>)</sub></sup><a name="abs-value"></a>
<code>&forall; :A. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; :A)</code>

Absolute value of `x`.



***

#### <a href="#ash-value"><code>(ASH X N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L170-L172">src</a>)</sub></sup><a name="ash-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Compute the "arithmetic shift" of `x` by `n`. 



***

#### <a href="#finite?-value"><code>(FINITE? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L100-L102">src</a>)</sub></sup><a name="finite?-value"></a>
<code>&forall; :A. <a href="#transfinite-class">TRANSFINITE</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Neither infinite or NaN.



***

#### <a href="#negate-value"><code>(NEGATE X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L148-L150">src</a>)</sub></sup><a name="negate-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

The negation, or additive inverse, of `x`.



***

#### <a href="#negative?-value"><code>(NEGATIVE? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L194-L196">src</a>)</sub></sup><a name="negative?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` negative?



***

#### <a href="#nonnegative?-value"><code>(NONNEGATIVE? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L206-L208">src</a>)</sub></sup><a name="nonnegative?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` not negative?



***

#### <a href="#nonpositive?-value"><code>(NONPOSITIVE? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L200-L202">src</a>)</sub></sup><a name="nonpositive?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` not positive?



***

#### <a href="#nonzero?-value"><code>(NONZERO? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L218-L220">src</a>)</sub></sup><a name="nonzero?-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` not zero?



***

#### <a href="#positive?-value"><code>(POSITIVE? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L188-L190">src</a>)</sub></sup><a name="positive?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` positive?



***

#### <a href="#sign-value"><code>(SIGN X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L162-L166">src</a>)</sub></sup><a name="sign-value"></a>
<code>&forall; :A :B. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) (<a href="#num-class">NUM</a> :B) &rArr; (:A &rarr; :B)</code>

The sign of `x`, where `(sign 0) = 1`.



***

#### <a href="#zero?-value"><code>(ZERO? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L212-L214">src</a>)</sub></sup><a name="zero?-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` zero?



***

#### <a href="#negative-infinity-value"><code>NEGATIVE-INFINITY</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L105-L106">src</a>)</sub></sup><a name="negative-infinity-value"></a>
<code>&forall; :A. (<a href="#transfinite-class">TRANSFINITE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; :A</code>


***

# Package `COALTON-LIBRARY/MATH/BOUNDED`<a name="coalton-library/math/bounded-package"></a>

### Classes

#### <a href="#bounded-class"><code>BOUNDED</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/bounded.lisp#L22-L25">src</a>)</sub></sup><a name="bounded-class"></a>
<code><a href="#bounded-class">BOUNDED</a> :A</code>


Types which have a maximum and minumum bound.

Methods:
- <code>MINBOUND :: :A</code>
- <code>MAXBOUND :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#bounded-class">BOUNDED</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u8-type"><code>U8</code></a></code>

</details>



***

# Package `COALTON-LIBRARY/MATH/COMPLEX`<a name="coalton-library/math/complex-package"></a>

### Types

#### <a href="#complex-type"><code>COMPLEX</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L37-L46">src</a>)</sub></sup><a name="complex-type"></a>

A complex number with a real and imaginary component.

This object does not have any public constructors. Instead, use the
function `complex` of the `ComplexComponent` type class.

A `Complex` object may either have a native or constructed
representation. See the `ComplexComponent` type class for allowed
component types.

<details>
<summary>Instances</summary>

- <code>(<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) (<a href="#into-class">INTO</a> :A (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rArr; <a href="#into-class">INTO</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A) (<a href="#complex-type"><code>COMPLEX</code></a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A))</code>
- <code>(<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) (<a href="#into-class">INTO</a> :A <a href="#creal-type"><code>CREAL</code></a>) &rArr; <a href="#into-class">INTO</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A) (<a href="#complex-type"><code>COMPLEX</code></a> <a href="#creal-type"><code>CREAL</code></a>)</code>
- <code>(<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#radical-class">RADICAL</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>

</details>



***

### Classes

#### <a href="#complexcomponent-class"><code>COMPLEXCOMPONENT</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L61-L66">src</a>)</sub></sup><a name="complexcomponent-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A</code>


A type class for describing complex component types. This type class
also encodes the construction and projection of `Complex` data types.

Methods:
- <code>COMPLEX :: (:A &rarr; :A &rarr; (<a href="#complex-type"><code>COMPLEX</code></a> :A))</code>
- <code>REAL-PART :: ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>
- <code>IMAG-PART :: ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#complexcomponent-class">COMPLEXCOMPONENT</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

### Values

#### <a href="#conjugate-value"><code>(CONJUGATE Z)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L75-L77">src</a>)</sub></sup><a name="conjugate-value"></a>
<code>&forall; :A. <a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; (<a href="#complex-type"><code>COMPLEX</code></a> :A))</code>

The complex conjugate. If $z=a+bi$ then the conjugate $\bar z=a-bi$.



***

#### <a href="#square-magnitude-value"><code>(SQUARE-MAGNITUDE Z)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L81-L86">src</a>)</sub></sup><a name="square-magnitude-value"></a>
<code>&forall; :A. <a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>

The squared length of a complex number:
$$\vert z\vert^2=(\operatorname{Re} z)^2+(\operatorname{Im} z)^2.$$



***

#### <a href="#ii-value"><code>II</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L89-L94">src</a>)</sub></sup><a name="ii-value"></a>
<code>&forall; :A. <a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>

The complex unit $i=\sqrt{-1}$. (The double `ii` represents a
blackboard-bold 𝕚.)



***

# Package `COALTON-LIBRARY/MATH/DUAL`<a name="coalton-library/math/dual-package"></a>



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

#### <a href="#dual-type"><code>DUAL :A</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L81-L89">src</a>)</sub></sup><a name="dual-type"></a>

Representation of a dual number in the form $a + b\varepsilon$ where
$a$ and $b$ are real numbers and $\varepsilon$ satisfies
$\varepsilon^2 = 0$ and $\varepsilon \neq 0$.

Note: `Eq`, and `Ord` and `Hash` only make use of the primal
component.

<details>
<summary>Instances</summary>

- <code>(<a href="#num-class">NUM</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#radical-class">RADICAL</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) &rArr; <a href="#radical-class">RADICAL</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Eq only compares the primal component.
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Hash only considers the primal component in order to be consistent with Eq.
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Ord only compares the primal component.
- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>

</details>



***

### Values

#### <a href="#dual-part-value"><code>(DUAL-PART (DUAL _ D))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L97-L99">src</a>)</sub></sup><a name="dual-part-value"></a>
<code>&forall; :A. ((<a href="#dual-type"><code>DUAL</code></a> :A) &rarr; :A)</code>

The dual (i.e., derivative) part of a dual number.



***

#### <a href="#primal-part-value"><code>(PRIMAL-PART (DUAL P _))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L92-L94">src</a>)</sub></sup><a name="primal-part-value"></a>
<code>&forall; :A. ((<a href="#dual-type"><code>DUAL</code></a> :A) &rarr; :A)</code>

The primal (i.e., real) part of a dual number.



***

# Package `COALTON-LIBRARY/MATH/DYADIC`<a name="coalton-library/math/dyadic-package"></a>

### Types

#### <a href="#dyadic-type"><code>DYADIC</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L32-L34">src</a>)</sub></sup><a name="dyadic-type"></a>
- <code>(DYADIC <a href="#integer-type"><code>INTEGER</code></a> <a href="#integer-type"><code>INTEGER</code></a>)</code>

`(Dyadic n k)` represents the rational $\mathtt{n}\cdot 2^{\mathtt{k}}$.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#dyadic-type"><code>DYADIC</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>

</details>



***

### Values

#### <a href="#scale-value"><code>(SCALE X J)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L155-L158">src</a>)</sub></sup><a name="scale-value"></a>
<code>(<a href="#dyadic-type"><code>DYADIC</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Scales a dyadic `x` by $2^{\mathtt{k}}$.



***

#### <a href="#shift-value"><code>(SHIFT K A)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L161-L168">src</a>)</sub></sup><a name="shift-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Shift dyadic `a` to its floor with $\mathtt{k}+1$ bits of precision.



***

#### <a href="#simplify-value"><code>(SIMPLIFY D)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L99-L103">src</a>)</sub></sup><a name="simplify-value"></a>
<code>(<a href="#dyadic-type"><code>DYADIC</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Simplifies a dyadic by maximizing the absolute value of the exponent.



***

#### <a href="#simplify-integer-value"><code>(SIMPLIFY-INTEGER N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L88-L97">src</a>)</sub></sup><a name="simplify-integer-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Finds the simplest dyadic given an integer.



***

# Package `COALTON-LIBRARY/MATH/ELEMENTARY`<a name="coalton-library/math/elementary-package"></a>

### Classes

#### <a href="#elementary-class"><code>ELEMENTARY</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L122-L126">src</a>)</sub></sup><a name="elementary-class"></a>
<code>(<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#polar-class">POLAR</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#elementary-class">ELEMENTARY</a> :A</code>


`Elementary` is a marker class, providing `Reciprocable`, `Polar`, `Trigonometric`, `Exponentiable`, and `Radical`.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

#### <a href="#exponentiable-class"><code>EXPONENTIABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L72-L84">src</a>)</sub></sup><a name="exponentiable-class"></a>
<code><a href="#exponentiable-class">EXPONENTIABLE</a> :A</code>


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

- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code>(<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

#### <a href="#polar-class"><code>POLAR</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L93-L103">src</a>)</sub></sup><a name="polar-class"></a>
<code>(<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; <a href="#polar-class">POLAR</a> :A</code>


This type class includes `ComplexComponent` types that admit a magnitude and phase.

For a complex number `z = (complex x y)`, the following identities hold:

    z = (* (magnitude z) (exp (* ii (phase z))))
    (polar z) = (Tuple (magnitude z) (phase z))
    (phase z) = (atan2 y x)


Methods:
- <code>PHASE :: ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>
- <code>POLAR :: ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :A))</code>
<details>
<summary>Instances</summary>

- <code><a href="#polar-class">POLAR</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

#### <a href="#radical-class"><code>RADICAL</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L86-L91">src</a>)</sub></sup><a name="radical-class"></a>
<code><a href="#radical-class">RADICAL</a> :A</code>


Obeys:

    (^ (sqrt x) 2) = x = (^^ (nth-root n x) n)

Methods:
- <code>NTH-ROOT :: (<a href="#integer-type"><code>INTEGER</code></a> &rarr; :A &rarr; :A)</code>
- <code>SQRT :: (:A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#radical-class">RADICAL</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code>(<a href="#radical-class">RADICAL</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) &rArr; <a href="#radical-class">RADICAL</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#radical-class">RADICAL</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) &rArr; <a href="#radical-class">RADICAL</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#radical-class">RADICAL</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#radical-class">RADICAL</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

#### <a href="#trigonometric-class"><code>TRIGONOMETRIC</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L44-L52">src</a>)</sub></sup><a name="trigonometric-class"></a>
<code><a href="#trigonometric-class">TRIGONOMETRIC</a> :A</code>


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

- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code>(<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#f32-type"><code>F32</code></a></code>

</details>



***

### Values

#### <a href="#acosh-value"><code>(ACOSH X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L147-L148">src</a>)</sub></sup><a name="acosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#asinh-value"><code>(ASINH X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L143-L144">src</a>)</sub></sup><a name="asinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#atan2-value"><code>(ATAN2 Y X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L60-L70">src</a>)</sub></sup><a name="atan2-value"></a>
<code>&forall; :A. (<a href="#ord-class">ORD</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

Computes the two-argument arctangent of `y` and `x`, which is roughly the same
as `(atan (/ y x))` when defined and accounting for the quadrant of
the point $(\mathtt{x},\mathtt{y})$.



***

#### <a href="#atanh-value"><code>(ATANH X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L151-L152">src</a>)</sub></sup><a name="atanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#cis-value"><code>(CIS Z)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L113-L120">src</a>)</sub></sup><a name="cis-value"></a>
<code>&forall; :A. (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) &rArr; (:A &rarr; (<a href="#complex-type"><code>COMPLEX</code></a> :A))</code>

A point on the complex unit circle:


    (cis z) := (exp (complex 0 z))
             = (complex (cos z) (sin z))




***

#### <a href="#cosh-value"><code>(COSH X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L135-L136">src</a>)</sub></sup><a name="cosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#magnitude-value"><code>(MAGNITUDE Z)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L105-L110">src</a>)</sub></sup><a name="magnitude-value"></a>
<code>&forall; :A. (<a href="#radical-class">RADICAL</a> :A) (<a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A) &rArr; ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>

The magnitude of a complex number. For `z = x + yi`,


    (magnitude z) = (sqrt (+ (^ x 2) (^ y 2)))



***

#### <a href="#sincos-value"><code>(SINCOS X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L55-L57">src</a>)</sub></sup><a name="sincos-value"></a>
<code>&forall; :A. <a href="#trigonometric-class">TRIGONOMETRIC</a> :A &rArr; (:A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :A))</code>

Computes the sine and cosine of X.



***

#### <a href="#sinh-value"><code>(SINH X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L131-L132">src</a>)</sub></sup><a name="sinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <a href="#tanh-value"><code>(TANH X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L139-L140">src</a>)</sub></sup><a name="tanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

# Package `COALTON-LIBRARY/MATH/FRACTION`<a name="coalton-library/math/fraction-package"></a>

### Values

#### <a href="#denominator-value"><code>(DENOMINATOR Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L41-L44">src</a>)</sub></sup><a name="denominator-value"></a>
<code>(<a href="#fraction-type"><code>FRACTION</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

The denominator of a fraction.



***

#### <a href="#mkfraction-value"><code>(MKFRACTION A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L30-L32">src</a>)</sub></sup><a name="mkfraction-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>


***

#### <a href="#numerator-value"><code>(NUMERATOR Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L35-L38">src</a>)</sub></sup><a name="numerator-value"></a>
<code>(<a href="#fraction-type"><code>FRACTION</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

The numerator of a fraction.



***

# Package `COALTON-LIBRARY/MATH/HYPERDUAL`<a name="coalton-library/math/hyperdual-package"></a>


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

#### <a href="#hyperdual-type"><code>HYPERDUAL :A</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L161-L177">src</a>)</sub></sup><a name="hyperdual-type"></a>

Representation of a hyperdual number in the form `a + bε₁ + cε₂ + dε₁ε₂` where `a`, `b`, `c`, and `d` are real numbers and `ε₁` and `ε₂` satisfy `εᵢ² = 0` and `ε₁ε₂ != 0`.

Note: `Eq`, and `Ord` and `Hash` only make use of the primal component.

<details>
<summary>Instances</summary>

- <code>(<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code>(<a href="#radical-class">RADICAL</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) &rArr; <a href="#radical-class">RADICAL</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code>(<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#complexcomponent-class">COMPLEXCOMPONENT</a> :A &rArr; <a href="#complexcomponent-class">COMPLEXCOMPONENT</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>

</details>



***

### Values

#### <a href="#d-x-value"><code>(D-X F X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L357-L358">src</a>)</sub></sup><a name="d-x-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A)</code>

Compute f'(x).



***

#### <a href="#d-xx-value"><code>(D-XX F X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L360-L362">src</a>)</sub></sup><a name="d-xx-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A)</code>

Compute f''(x).



***

#### <a href="#gradient-value"><code>(GRADIENT F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L373-L378">src</a>)</sub></sup><a name="gradient-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Compute the gradient (∂f/∂x, ∂f/∂y) at the point (x, y).



***

#### <a href="#hessian-value"><code>(HESSIAN F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a>)</sub></sup><a name="hessian-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Compute the flat Hessian (∂²f/∂x², ∂²f/∂x∂y, ∂²f/∂y∂x, ∂²f/∂y²) at the point (x, y).



***

#### <a href="#laplacian-value"><code>(LAPLACIAN F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a>)</sub></sup><a name="laplacian-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute the Laplacian ∂²f/∂x² + ∂²f/∂y² at the point (x, y).



***

#### <a href="#partial-x-value"><code>(PARTIAL-X F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L364-L367">src</a>)</sub></sup><a name="partial-x-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂f/∂x(x, y).



***

#### <a href="#partial-xx-value"><code>(PARTIAL-XX F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L381-L384">src</a>)</sub></sup><a name="partial-xx-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂²f/∂x²(x, y).



***

#### <a href="#partial-xy-value"><code>(PARTIAL-XY F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a>)</sub></sup><a name="partial-xy-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂²f/∂x∂y(x, y).



***

#### <a href="#partial-y-value"><code>(PARTIAL-Y F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L369-L372">src</a>)</sub></sup><a name="partial-y-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂f/∂y(x, y).



***

#### <a href="#partial-yy-value"><code>(PARTIAL-YY F X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/hyperdual.lisp#L384-L384">src</a>)</sub></sup><a name="partial-yy-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (((<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A) &rarr; (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)) &rarr; :A &rarr; :A &rarr; :A)</code>

Compute ∂²f/∂y²(x, y).



***

# Package `COALTON-LIBRARY/MATH/INTEGRAL`<a name="coalton-library/math/integral-package"></a>

### Classes

#### <a href="#integral-class"><code>INTEGRAL</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L61-L64">src</a>)</sub></sup><a name="integral-class"></a>
<code>(<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; <a href="#integral-class">INTEGRAL</a> :A</code>


Integral is a number that is either even or odd where `div` and `quot`
are floored and truncated division, respectively.

Methods:
- <code>TOINTEGER :: (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#integral-class">INTEGRAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>

</details>



***

#### <a href="#remainder-class"><code>REMAINDER</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L46-L59">src</a>)</sub></sup><a name="remainder-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#remainder-class">REMAINDER</a> :A</code>


Remainder is typically an integral domain satisfying:

```
a = (+ (* b (quot a b)) (rem a b))
a = (+ (* b (div a b)) (mod a b))
```


Methods:
- <code>QUOT :: (:A &rarr; :A &rarr; :A)</code>
- <code>REM :: (:A &rarr; :A &rarr; :A)</code>
- <code>QUOTREM :: (:A &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :A))</code>
- <code>DIV :: (:A &rarr; :A &rarr; :A)</code>
- <code>MOD :: (:A &rarr; :A &rarr; :A)</code>
- <code>DIVMOD :: (:A &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :A))</code>
<details>
<summary>Instances</summary>

- <code><a href="#remainder-class">REMAINDER</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#integer-type"><code>INTEGER</code></a></code>

</details>



***

### Values

#### <a href="#even?-value"><code>(EVEN? N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L83-L85">src</a>)</sub></sup><a name="even?-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is N even?



***

#### <a href="#gcd-value"><code>(GCD A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L126-L129">src</a>)</sub></sup><a name="gcd-value"></a>
<code>&forall; :A. (<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The greatest common divisor of A and B.



***

#### <a href="#ilog-value"><code>(ILOG B X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L151-L167">src</a>)</sub></sup><a name="ilog-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

The floor of the logarithm with base B > 1 of X >= 1.



***

#### <a href="#integral->num-value"><code>(INTEGRAL-&gt;NUM N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L68-L70">src</a>)</sub></sup><a name="integral->num-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :A) (<a href="#num-class">NUM</a> :B) &rArr; (:A &rarr; :B)</code>

Converts any Integral N into any Num.



***

#### <a href="#isqrt-value"><code>(ISQRT X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L170-L181">src</a>)</sub></sup><a name="isqrt-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; :A)</code>

The floor of the square root of N > 0.



***

#### <a href="#lcm-value"><code>(LCM A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L132-L136">src</a>)</sub></sup><a name="lcm-value"></a>
<code>&forall; :A. (<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The least common multiple of A and B.



***

#### <a href="#lsh-value"><code>(LSH X N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L78-L80">src</a>)</sub></sup><a name="lsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :B) (<a href="#bits-class">BITS</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Left shift X by N



***

#### <a href="#odd?-value"><code>(ODD? N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L88-L90">src</a>)</sub></sup><a name="odd?-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is N odd?



***

#### <a href="#rsh-value"><code>(RSH X N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L73-L75">src</a>)</sub></sup><a name="rsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :B) (<a href="#bits-class">BITS</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Right shift X by N



***

#### <a href="#^-value"><code>(^ BASE POWER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L93-L116">src</a>)</sub></sup><a name="^-value"></a>
<code>&forall; :A :B. (<a href="#num-class">NUM</a> :A) (<a href="#integral-class">INTEGRAL</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a non-negative POWER.



***

#### <a href="#^^-value"><code>(^^ BASE POWER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L119-L123">src</a>)</sub></sup><a name="^^-value"></a>
<code>&forall; :A :B. (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#integral-class">INTEGRAL</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a signed POWER.



***

# Package `COALTON-LIBRARY/MATH/REAL`<a name="coalton-library/math/real-package"></a>

### Structs

#### <a href="#quantization-type"><code>QUANTIZATION :A</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L224-L235">src</a>)</sub></sup><a name="quantization-type"></a>

Represents an integer quantization of `:a`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#quantization-type"><code>QUANTIZATION</code></a> :A)</code>

</details>



***

### Classes

#### <a href="#quantizable-class"><code>QUANTIZABLE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L45-L65">src</a>)</sub></sup><a name="quantizable-class"></a>
<code><a href="#quantizable-class">QUANTIZABLE</a> :A</code>


The representation of a type that allows for rounding operations


    max x such that (floor x) <= x
    min x such that (ceiling x) <= x

And


    (proper x) = (Tuple (truncate x) (- x (truncate x)))


where


    (truncate x) = (* (sign x) (floor (abs x))


Methods:
- <code>PROPER :: (:A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> <a href="#integer-type"><code>INTEGER</code></a> :A))</code>
- <code>FLOOR :: (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>
- <code>CEILING :: (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u8-type"><code>U8</code></a></code>

</details>



***

#### <a href="#rational-class"><code>RATIONAL</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L71-L84">src</a>)</sub></sup><a name="rational-class"></a>
<code>(<a href="#real-class">REAL</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; <a href="#rational-class">RATIONAL</a> :A</code>


Any number that can be exactly represented by a fraction, or is not finite.

If a rational can be converted from a fraction it must satisfy:


    (into (to-fraction x)) = x
    (into (best-approx x)) = x


Furthermore, `best-approx` returns the simplest fraction, and both functions may be partial.


Methods:
- <code>TO-FRACTION :: (:A &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>
- <code>BEST-APPROX :: (:A &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#rational-class">RATIONAL</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u8-type"><code>U8</code></a></code>

</details>



***

#### <a href="#real-class"><code>REAL</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L67-L69">src</a>)</sub></sup><a name="real-class"></a>
<code>(<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; <a href="#real-class">REAL</a> :A</code>


A real number that can be approximated with abs(real-approx x - x) < 2^-n.

Methods:
- <code>REAL-APPROX :: (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#real-class">REAL</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u8-type"><code>U8</code></a></code>

</details>



***

### Values

#### <a href="#ceiling/-value"><code>(CEILING/ A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L285-L287">src</a>)</sub></sup><a name="ceiling/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Divide two integers and compute the ceiling of the quotient.



***

#### <a href="#exact/-value"><code>(EXACT/ A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L267-L269">src</a>)</sub></sup><a name="exact/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Exactly divide two integers and produce a fraction.



***

#### <a href="#floor/-value"><code>(FLOOR/ A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L280-L282">src</a>)</sub></sup><a name="floor/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Divide two integers and compute the floor of the quotient.



***

#### <a href="#fromfrac-value"><code>(FROMFRAC Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L295-L301">src</a>)</sub></sup><a name="fromfrac-value"></a>
<code>&forall; :A. <a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> :A &rArr; (<a href="#fraction-type"><code>FRACTION</code></a> &rarr; :A)</code>

Converts a fraction to a target type.

Specifically, target types must have an instance of `Dividable Integer :a`.

This conversion may result in loss of fidelity.



***

#### <a href="#inexact/-value"><code>(INEXACT/ A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L273-L277">src</a>)</sub></sup><a name="inexact/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#f64-type"><code>F64</code></a>)</code>

Compute the quotient of integers as a double-precision float.

Note: This does *not* divide double-float arguments.



***

#### <a href="#quantize-value"><code>(QUANTIZE X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L238-L246">src</a>)</sub></sup><a name="quantize-value"></a>
<code>&forall; :A. <a href="#real-class">REAL</a> :A &rArr; (:A &rarr; (<a href="#quantization-type"><code>QUANTIZATION</code></a> :A))</code>

Given X, (QUANTIZE X) will return the least integer greater or equal to X,
and the greatest integer less than or equal to X, along with their respective
remainders expressed as values of type of X.



***

#### <a href="#round-value"><code>(ROUND X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L93-L121">src</a>)</sub></sup><a name="round-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Return the nearest integer to X, with ties breaking towards even numbers.



***

#### <a href="#round-half-down-value"><code>(ROUND-HALF-DOWN X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L254-L256">src</a>)</sub></sup><a name="round-half-down-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <a href="#round-half-up-value"><code>(ROUND-HALF-UP X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L249-L251">src</a>)</sub></sup><a name="round-half-up-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <a href="#round/-value"><code>(ROUND/ A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L290-L292">src</a>)</sub></sup><a name="round/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Divide two integers and round the quotient.



***

#### <a href="#safe/-value"><code>(SAFE/ X Y)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L259-L263">src</a>)</sub></sup><a name="safe/-value"></a>
<code>&forall; :A :B. (<a href="#num-class">NUM</a> :A) (<a href="#dividable-class">DIVIDABLE</a> :A :B) &rArr; (:A &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Safely divide X by Y, returning None if Y is zero.



***

#### <a href="#truncate-value"><code>(TRUNCATE X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L87-L90">src</a>)</sub></sup><a name="truncate-value"></a>
<code>&forall; :A. <a href="#quantizable-class">QUANTIZABLE</a> :A &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Returns the integer closest/equal to `x` that is within `0` and `x`.



***

# Package `COALTON-LIBRARY/MONAD/ENVIRONMENT`<a name="coalton-library/monad/environment-package"></a>

### Types

#### <a href="#env-type"><code>ENV</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L40-L40">src</a>)</sub></sup><a name="env-type"></a>


***

#### <a href="#envt-type"><code>ENVT</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L35-L38">src</a>)</sub></sup><a name="envt-type"></a>
- <code>(ENVT (:A &rarr; (:B :C)))</code>

A monadic computation that runs inside an :env environment.
Equivalent to Haskell's ReaderT monad https://hackage.haskell.org/package/transformers-0.6.1.2/docs/Control-Monad-Trans-Reader.html

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monad-class">MONAD</a> ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monadenvironment-class">MONADENVIRONMENT</a> :B ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>
- <code><a href="#monadtransformer-class">MONADTRANSFORMER</a> (<a href="#envt-type"><code>ENVT</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#envt-type"><code>ENVT</code></a> :A) :B) :C)</code>

</details>



***

### Classes

#### <a href="#monadenvironment-class"><code>MONADENVIRONMENT</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L78-L88">src</a>)</sub></sup><a name="monadenvironment-class"></a>
<code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monadenvironment-class">MONADENVIRONMENT</a> :B :A</code>


A monad capable of a function in a computation environment.

Methods:
- <code>ASK :: (:A :B)</code><br/>Retrieves the computation environment.
- <code>LOCAL :: ((:B &rarr; :B) &rarr; (:A :B) &rarr; (:A :B))</code><br/>Run a computation in a modified environment.
- <code>ASKS :: ((:B &rarr; :C) &rarr; (:A :C))</code><br/>Retrieve an aspect of the computation environment.
<details>
<summary>Instances</summary>

- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monadenvironment-class">MONADENVIRONMENT</a> :B ((<a href="#envt-type"><code>ENVT</code></a> :B) :A)</code>

</details>



***

### Values

#### <a href="#asks-envt-value"><code>(ASKS-ENVT FENV-&gt;A)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L57-L60">src</a>)</sub></sup><a name="asks-envt-value"></a>
<code>&forall; :A :B :C. <a href="#applicative-class">APPLICATIVE</a> :C &rArr; ((:A &rarr; :B) &rarr; (((<a href="#envt-type"><code>ENVT</code></a> :A) :C) :B))</code>

Retrieve an aspect of the computation environment.



***

#### <a href="#lift-envt-value"><code>(LIFT-ENVT M)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L103-L104">src</a>)</sub></sup><a name="lift-envt-value"></a>
<code>&forall; :A :B :C. ((:A :B) &rarr; (((<a href="#envt-type"><code>ENVT</code></a> :C) :A) :B))</code>


***

#### <a href="#local-envt-value"><code>(LOCAL-ENVT FENV (ENVT FENV-&gt;A))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L44-L47">src</a>)</sub></sup><a name="local-envt-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :A) &rarr; (((<a href="#envt-type"><code>ENVT</code></a> :A) :B) :C) &rarr; (((<a href="#envt-type"><code>ENVT</code></a> :A) :B) :C))</code>

Run a computation in a modified environment.



***

#### <a href="#map-envt-value"><code>(MAP-ENVT FMA-&gt;NB (ENVT FENV-&gt;MA))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L97-L99">src</a>)</sub></sup><a name="map-envt-value"></a>
<code>&forall; :A :B :C :D :E. (((:A :B) &rarr; (:C :D)) &rarr; (((<a href="#envt-type"><code>ENVT</code></a> :E) :A) :B) &rarr; (((<a href="#envt-type"><code>ENVT</code></a> :E) :C) :D))</code>


***

#### <a href="#run-env-value"><code>(RUN-ENV ENV-COMPUTATION ENV)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L70-L72">src</a>)</sub></sup><a name="run-env-value"></a>
<code>&forall; :A :B. ((((<a href="#envt-type"><code>ENVT</code></a> :A) <a href="#identity-type"><code>IDENTITY</code></a>) :B) &rarr; :A &rarr; :B)</code>

Run a Env inside an environment.



***

#### <a href="#run-envt-value"><code>(RUN-ENVT (ENVT FENV-&gt;VAL) ENV)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L64-L66">src</a>)</sub></sup><a name="run-envt-value"></a>
<code>&forall; :A :B :C. ((((<a href="#envt-type"><code>ENVT</code></a> :A) :B) :C) &rarr; :A &rarr; (:B :C))</code>

Run a EnvT inside an environment.



***

#### <a href="#ask-envt-value"><code>ASK-ENVT</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.lisp#L51-L53">src</a>)</sub></sup><a name="ask-envt-value"></a>
<code>&forall; :A :B. <a href="#monad-class">MONAD</a> :B &rArr; (((<a href="#envt-type"><code>ENVT</code></a> :A) :B) :A)</code>

Retrieve the computation environment.



***

# Package `COALTON-LIBRARY/MONAD/FREE`<a name="coalton-library/monad/free-package"></a>

### Types

#### <a href="#free-type"><code>FREE</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L43-L48">src</a>)</sub></sup><a name="free-type"></a>
- <code>(FREE (:A ((<a href="#free-type"><code>FREE</code></a> :A) :B)))</code>
- <code>(VAL :C)</code>

`Free :f` gives you a Monad instance for any `Functor :f`.

References: [here](https://serokell.io/blog/introduction-to-free-monads) and [here](https://www.tweag.io/blog/2018-02-05-free-monads/)

<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">FOLDABLE</a> :A &rArr; <a href="#foldable-class">FOLDABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monad-class">MONAD</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monadfree-class">MONADFREE</a> :A (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> ((<a href="#free-type"><code>FREE</code></a> :A) :B)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> :A &rArr; <a href="#traversable-class">TRAVERSABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>

</details>



***

### Classes

#### <a href="#monadfree-class"><code>MONADFREE</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L27-L30">src</a>)</sub></sup><a name="monadfree-class"></a>
<code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monadfree-class">MONADFREE</a> :B :A</code>


A free monad is a monad, :m, which is capable of 'wrapping'
around functors, and then 'unwrapping' them later using `>>=`.

Methods:
- <code>WRAP :: ((:B (:A :C)) &rarr; (:A :C))</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#monad-class">MONAD</a> :B) &rArr; <a href="#monadfree-class">MONADFREE</a> :A ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monadfree-class">MONADFREE</a> :A (<a href="#free-type"><code>FREE</code></a> :A)</code>

</details>



***

### Values

#### <a href="#foldfree-value"><code>(FOLDFREE NAT FR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L54-L59">src</a>)</sub></sup><a name="foldfree-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">MONAD</a> :C &rArr; (((:A ((<a href="#free-type"><code>FREE</code></a> :A) :B)) &rarr; (:C ((<a href="#free-type"><code>FREE</code></a> :A) :B))) &rarr; ((<a href="#free-type"><code>FREE</code></a> :A) :B) &rarr; (:C :B))</code>

Given a natural transformation, induce a Monad homomorphism from a
free monad to a target monad.



***

#### <a href="#liftf-value"><code>(LIFTF F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L33-L35">src</a>)</sub></sup><a name="liftf-value"></a>
<code>&forall; :A :B :C. (<a href="#functor-class">FUNCTOR</a> :A) (<a href="#monadfree-class">MONADFREE</a> :A :C) &rArr; ((:A :B) &rarr; (:C :B))</code>

Lift a Functor into the Free Monad.



***

# Package `COALTON-LIBRARY/MONAD/FREET`<a name="coalton-library/monad/freet-package"></a>

### Types

#### <a href="#freef-type"><code>FREEF</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L39-L41">src</a>)</sub></sup><a name="freef-type"></a>
- <code>(FREEF (:A :B))</code>
- <code>(VAL :C)</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#bifunctor-class">BIFUNCTOR</a> (<a href="#freef-type"><code>FREEF</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#freef-type"><code>FREEF</code></a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#freef-type"><code>FREEF</code></a> :A) :B) :C)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> :A &rArr; <a href="#traversable-class">TRAVERSABLE</a> ((<a href="#freef-type"><code>FREEF</code></a> :A) :B)</code>

</details>



***

#### <a href="#freet-type"><code>FREET</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L75-L77">src</a>)</sub></sup><a name="freet-type"></a>
- <code>(FREET (:A (((<a href="#freef-type"><code>FREEF</code></a> :B) :C) (((<a href="#freet-type"><code>FREET</code></a> :B) :A) :C))))</code>

`Free :f :m :a` gives you a Monad Transformer instance for any `Functor :f` and `Monad :m`.

<details>
<summary>Instances</summary>

- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#functor-class">FUNCTOR</a> :B) &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#monad-class">MONAD</a> :B) &rArr; <a href="#applicative-class">APPLICATIVE</a> ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#monad-class">MONAD</a> :B) &rArr; <a href="#monad-class">MONAD</a> ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code>(<a href="#functor-class">FUNCTOR</a> :A) (<a href="#monad-class">MONAD</a> :B) &rArr; <a href="#monadfree-class">MONADFREE</a> :A ((<a href="#freet-type"><code>FREET</code></a> :A) :B)</code>
- <code>(<a href="#monad-class">MONAD</a> :A) (<a href="#traversable-class">TRAVERSABLE</a> :A) (<a href="#traversable-class">TRAVERSABLE</a> :B) &rArr; <a href="#traversable-class">TRAVERSABLE</a> ((<a href="#freet-type"><code>FREET</code></a> :B) :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monadtransformer-class">MONADTRANSFORMER</a> (<a href="#freet-type"><code>FREET</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#freet-type"><code>FREET</code></a> :A) :B) :C)</code>

</details>



***

### Values

#### <a href="#fold-freet-value"><code>(FOLD-FREET F (FREET M))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L152-L160">src</a>)</sub></sup><a name="fold-freet-value"></a>
<code>&forall; :A :B :C :D. (<a href="#monadtransformer-class">MONADTRANSFORMER</a> :D) (<a href="#monad-class">MONAD</a> (:D :B)) (<a href="#monad-class">MONAD</a> :B) &rArr; (((:A (((<a href="#freet-type"><code>FREET</code></a> :A) :B) :C)) &rarr; ((:D :B) (((<a href="#freet-type"><code>FREET</code></a> :A) :B) :C))) &rarr; (((<a href="#freet-type"><code>FREET</code></a> :A) :B) :C) &rarr; ((:D :B) :C))</code>


***

#### <a href="#run-freet-value"><code>(RUN-FREET (FREET M))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.lisp#L80-L80">src</a>)</sub></sup><a name="run-freet-value"></a>
<code>&forall; :A :B :C. ((((<a href="#freet-type"><code>FREET</code></a> :A) :B) :C) &rarr; (:B (((<a href="#freef-type"><code>FREEF</code></a> :A) :C) (((<a href="#freet-type"><code>FREET</code></a> :A) :B) :C))))</code>


***

# Package `COALTON-LIBRARY/MONAD/IDENTITY`<a name="coalton-library/monad/identity-package"></a>

### Types

#### <a href="#identity-type"><code>IDENTITY</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/identity.lisp#L19-L21">src</a>)</sub></sup><a name="identity-type"></a>
- <code>(IDENTITY :A)</code>

A bare computation. Not useful on its own, but is useful for running Monad transformers in a bare context.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#identity-type"><code>IDENTITY</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#identity-type"><code>IDENTITY</code></a></code>
- <code><a href="#monad-class">MONAD</a> <a href="#identity-type"><code>IDENTITY</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#identity-type"><code>IDENTITY</code></a> :A)</code>

</details>



***

### Values

#### <a href="#run-identity-value"><code>(RUN-IDENTITY (IDENTITY A))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/identity.lisp#L25-L26">src</a>)</sub></sup><a name="run-identity-value"></a>
<code>&forall; :A. ((<a href="#identity-type"><code>IDENTITY</code></a> :A) &rarr; :A)</code>


***

# Package `COALTON-LIBRARY/MONAD/OPTIONALT`<a name="coalton-library/monad/optionalt-package"></a>

### Types

#### <a href="#optionalt-type"><code>OPTIONALT</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.lisp#L23-L25">src</a>)</sub></sup><a name="optionalt-type"></a>
- <code>(OPTIONALT (:A (<a href="#optional-type"><code>OPTIONAL</code></a> :B)))</code>

A monadic computation that returns an Optional.

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#alternative-class">ALTERNATIVE</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monad-class">MONAD</a> (<a href="#optionalt-type"><code>OPTIONALT</code></a> :A)</code>
- <code><a href="#monadtransformer-class">MONADTRANSFORMER</a> <a href="#optionalt-type"><code>OPTIONALT</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> ((<a href="#optionalt-type"><code>OPTIONALT</code></a> :A) :B)</code>

</details>



***

### Values

#### <a href="#map-optionalt-value"><code>(MAP-OPTIONALT F (OPTIONALT M))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.lisp#L36-L37">src</a>)</sub></sup><a name="map-optionalt-value"></a>
<code>&forall; :A :B :C :D. (((:A (<a href="#optional-type"><code>OPTIONAL</code></a> :B)) &rarr; (:C (<a href="#optional-type"><code>OPTIONAL</code></a> :D))) &rarr; ((<a href="#optionalt-type"><code>OPTIONALT</code></a> :A) :B) &rarr; ((<a href="#optionalt-type"><code>OPTIONALT</code></a> :C) :D))</code>


***

#### <a href="#run-optionalt-value"><code>(RUN-OPTIONALT (OPTIONALT M))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.lisp#L29-L30">src</a>)</sub></sup><a name="run-optionalt-value"></a>
<code>&forall; :A :B. (((<a href="#optionalt-type"><code>OPTIONALT</code></a> :A) :B) &rarr; (:A (<a href="#optional-type"><code>OPTIONAL</code></a> :B)))</code>


***

# Package `COALTON-LIBRARY/MONAD/RESULTT`<a name="coalton-library/monad/resultt-package"></a>

### Types

#### <a href="#resultt-type"><code>RESULTT</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L27-L29">src</a>)</sub></sup><a name="resultt-type"></a>
- <code>(RESULTT (:A (<a href="#result-type"><code>RESULT</code></a> :B :C)))</code>

A monadic computation that returns a Result.

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> ((<a href="#resultt-type"><code>RESULTT</code></a> :B) :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> ((<a href="#resultt-type"><code>RESULTT</code></a> :B) :A)</code>
- <code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monad-class">MONAD</a> ((<a href="#resultt-type"><code>RESULTT</code></a> :B) :A)</code>
- <code><a href="#monadtransformer-class">MONADTRANSFORMER</a> (<a href="#resultt-type"><code>RESULTT</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#resultt-type"><code>RESULTT</code></a> :A) :B) :C)</code>

</details>



***

### Values

#### <a href="#err-ift-value"><code>(ERR-IFT PASSED FAILURE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L49-L50">src</a>)</sub></sup><a name="err-ift-value"></a>
<code>&forall; :A :B. <a href="#monad-class">MONAD</a> :B &rArr; (<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; :A &rarr; (((<a href="#resultt-type"><code>RESULTT</code></a> :A) :B) <a href="#unit-type"><code>UNIT</code></a>))</code>


***

#### <a href="#map-errt-value"><code>(MAP-ERRT FERR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L45-L45">src</a>)</sub></sup><a name="map-errt-value"></a>
<code>&forall; :A :B :C :D. <a href="#functor-class">FUNCTOR</a> :C &rArr; ((:A &rarr; :B) &rarr; (((<a href="#resultt-type"><code>RESULTT</code></a> :A) :C) :D) &rarr; (((<a href="#resultt-type"><code>RESULTT</code></a> :B) :C) :D))</code>


***

#### <a href="#map-resultt-value"><code>(MAP-RESULTT F (RESULTT M))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L40-L41">src</a>)</sub></sup><a name="map-resultt-value"></a>
<code>&forall; :A :B :C :D :E :F. (((:A (<a href="#result-type"><code>RESULT</code></a> :B :C)) &rarr; (:D (<a href="#result-type"><code>RESULT</code></a> :E :F))) &rarr; (((<a href="#resultt-type"><code>RESULTT</code></a> :B) :A) :C) &rarr; (((<a href="#resultt-type"><code>RESULTT</code></a> :E) :D) :F))</code>


***

#### <a href="#run-resultt-value"><code>(RUN-RESULTT (RESULTT M))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.lisp#L33-L34">src</a>)</sub></sup><a name="run-resultt-value"></a>
<code>&forall; :A :B :C. ((((<a href="#resultt-type"><code>RESULTT</code></a> :A) :B) :C) &rarr; (:B (<a href="#result-type"><code>RESULT</code></a> :A :C)))</code>


***

# Package `COALTON-LIBRARY/MONAD/STATE`<a name="coalton-library/monad/state-package"></a>

### Types

#### <a href="#st-type"><code>ST</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L26-L29">src</a>)</sub></sup><a name="st-type"></a>
- <code>(ST (:A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

A computation of a value which may affect the state.
Represented as a closure from initial state to updated state and value.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#st-type"><code>ST</code></a> :A :B)</code>

</details>



***

### Values

#### <a href="#modify-value"><code>(MODIFY STATEF)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L53-L57">src</a>)</sub></sup><a name="modify-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#st-type"><code>ST</code></a> :A <a href="#unit-type"><code>UNIT</code></a>))</code>

Modify the state in a StatefulComputation, discarding the old state.



***

#### <a href="#put-value"><code>(PUT STATE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L33-L35">src</a>)</sub></sup><a name="put-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#st-type"><code>ST</code></a> :A <a href="#unit-type"><code>UNIT</code></a>))</code>

A StatefulComputation with state set to be given state. The returned value is Unit.



***

#### <a href="#run-value"><code>(RUN SC)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L45-L49">src</a>)</sub></sup><a name="run-value"></a>
<code>&forall; :A :B. ((<a href="#st-type"><code>ST</code></a> :A :B) &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :B))</code>

Runs a StatefulComputation to produce a final updated state and value given an initial state



***

#### <a href="#get-value"><code>GET</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L39-L41">src</a>)</sub></sup><a name="get-value"></a>
<code>&forall; :A. (<a href="#st-type"><code>ST</code></a> :A :A)</code>

A StatefulComputation which returns the current state as the value.



***

# Package `COALTON-LIBRARY/OPTIONAL`<a name="coalton-library/optional-package"></a>

### Values

#### <a href="#from-some-value"><code>(FROM-SOME STR OPT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L27-L31">src</a>)</sub></sup><a name="from-some-value"></a>
<code>&forall; :A. (<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A) &rarr; :A)</code>

Get the value of OPT, erroring with the provided string if it is None.



***

#### <a href="#none?-value"><code>(NONE? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L41-L45">src</a>)</sub></sup><a name="none?-value"></a>
<code>&forall; :A. ((<a href="#optional-type"><code>OPTIONAL</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is X None?



***

#### <a href="#some?-value"><code>(SOME? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L34-L38">src</a>)</sub></sup><a name="some?-value"></a>
<code>&forall; :A. ((<a href="#optional-type"><code>OPTIONAL</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is X Some?



***

# Package `COALTON-LIBRARY/ORDMAP`<a name="coalton-library/ordmap-package"></a>

### Types

#### <a href="#ordmap-type"><code>ORDMAP</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L66-L68">src</a>)</sub></sup><a name="ordmap-type"></a>

A red-black binary tree which associates each :KEY with a :VALUE, sorted by `<=>' on the keys and unique by `==' on the keys.

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>

</details>



***

### Values

#### <a href="#collect-value"><code>(COLLECT COLL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L167-L174">src</a>)</sub></sup><a name="collect-value"></a>
<code>&forall; :A :B :C. (<a href="#ord-class">ORD</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A (<a href="#tuple-type"><code>TUPLE</code></a> :B :C)) &rarr; (<a href="#ordmap-type"><code>ORDMAP</code></a> :B :C))</code>

Construct a `OrdMap` containing all the `(key value)` pairs in `coll`.

If `coll` contains duplicate keys, later values will overwrite earlier values.



***

#### <a href="#collect!-value"><code>(COLLECT! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L157-L164">src</a>)</sub></sup><a name="collect!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)) &rarr; (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B))</code>

Construct a `OrdMap` containing all the `(key value)` pairs in `iter`.

If `iter` contains duplicate keys, later values will overwrite earlier values.



***

#### <a href="#entries-value"><code>(ENTRIES MP)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L128-L131">src</a>)</sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Iterate over the (key value) pairs in MP, sorted by the keys in least-to-greatest order.



***

#### <a href="#insert-value"><code>(INSERT MP K V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L82-L86">src</a>)</sub></sup><a name="insert-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)))</code>

Associate K with V in MP. If MP already contains a mapping for K, return None.



***

#### <a href="#insert-or-replace-value"><code>(INSERT-OR-REPLACE MP K V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L111-L118">src</a>)</sub></sup><a name="insert-or-replace-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B))</code>

Update MP to associate K with V.

If MP already contains a mapping for K, replace it and discard the old value.

Like `replace-or-insert', but prioritizing insertion as a use case.



***

#### <a href="#keys-value"><code>(KEYS MP)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L137-L140">src</a>)</sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Iterate over the keys in MP, sorted least-to-greatest.



***

#### <a href="#lookup-value"><code>(LOOKUP MP K)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L76-L79">src</a>)</sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Retrieve the value associated with K in MP, or None if MP does not contain K.



***

#### <a href="#merge-value"><code>(MERGE A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L203-L212">src</a>)</sub></sup><a name="merge-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B))</code>

Construct a Tree containing all the mappings of both A and B.

If A and B contain mappings X -> A' and X -> B', it is undefined whether the result maps X to A' or B'.

Because of the possibility that A and B will map the same X to different A' and B', this is not an associative
operation, and therefore OrdMap cannot implement Monoid.



***

#### <a href="#remove-value"><code>(REMOVE MP K)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L121-L125">src</a>)</sub></sup><a name="remove-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)))</code>

Remove the mapping associated with K in MP. If K does not have a value in MP, return None.



***

#### <a href="#replace-value"><code>(REPLACE MP K V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L90-L97">src</a>)</sub></sup><a name="replace-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) :B)))</code>

Change the association of K to V in MP. If MP did not already contain a mapping for K, return None.



***

#### <a href="#replace-or-insert-value"><code>(REPLACE-OR-INSERT MP K V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L101-L108">src</a>)</sub></sup><a name="replace-or-insert-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)))</code>

Update MP to associate K with V.

If MP already contains a mapping for K, replace it and return the old value.



***

#### <a href="#update-value"><code>(UPDATE FUNC MP KEY)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L180-L200">src</a>)</sub></sup><a name="update-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :B &rArr; ((:A &rarr; :A) &rarr; (<a href="#ordmap-type"><code>ORDMAP</code></a> :B :A) &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :B :A)))</code>

Apply FUNC to the value corresponding to KEY in MP, returning a new `OrdMap' which maps KEY to the result of the function.



***

#### <a href="#values-value"><code>(VALUES MP)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L143-L146">src</a>)</sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Iterate over the values in MP, sorted by their corresponding keys in least-to-greatest order.



***

#### <a href="#empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.lisp#L71-L73">src</a>)</sub></sup><a name="empty-value"></a>
<code>&forall; :A :B. (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>

A OrdMap containing no mappings.



***

# Package `COALTON-LIBRARY/ORDTREE`<a name="coalton-library/ordtree-package"></a>

### Types

#### <a href="#tree-type"><code>TREE</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L72-L82">src</a>)</sub></sup><a name="tree-type"></a>
- <code>EMPTY</code> 
  - exported; an empty tree. considered black for the purpose of the invariants.

A red-black balanced binary tree, sorted by `<=>` and unique by `==`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#tree-type"><code>TREE</code></a></code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#tree-type"><code>TREE</code></a> :A) :A</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#tree-type"><code>TREE</code></a> :A) :A</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>

</details>



***

### Values

#### <a href="#collect!-value"><code>(COLLECT! ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L482-L486">src</a>)</sub></sup><a name="collect!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#tree-type"><code>TREE</code></a> :A))</code>

Construct a Tree containing all the elements of ITER.

If ITER contains duplicates, later elements will overwrite earlier elements.



***

#### <a href="#decreasing-order-value"><code>(DECREASING-ORDER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L466-L468">src</a>)</sub></sup><a name="decreasing-order-value"></a>
<code>&forall; :A. ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Iterate the elements of a tree, starting with the greatest by `<=>' and ending with the least.



***

#### <a href="#increasing-order-value"><code>(INCREASING-ORDER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L450-L452">src</a>)</sub></sup><a name="increasing-order-value"></a>
<code>&forall; :A. ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Iterate the elements of a tree, starting with the least by `<=>' and ending with the greatest.



***

#### <a href="#insert-value"><code>(INSERT TRE ELT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L268-L281">src</a>)</sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tree-type"><code>TREE</code></a> :A)))</code>

Construct a new Tree like TRE but containing ELT. If TRE already had an element `==` to ELT, return None.



***

#### <a href="#insert-or-replace-value"><code>(INSERT-OR-REPLACE TRE ELT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L331-L337">src</a>)</sub></sup><a name="insert-or-replace-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#tree-type"><code>TREE</code></a> :A))</code>

Construct a new Tree like TRE but containing ELT.

If TRE already had an element `==` to ELT, remove it, replace it with ELT, and discard the removed value.

Like `replace-or-insert`, but prioritizing insertion as a use case.



***

#### <a href="#lookup-value"><code>(LOOKUP HAYSTACK NEEDLE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L117-L126">src</a>)</sub></sup><a name="lookup-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

If HAYSTACK contains an element `==` to NEEDLE, return it.



***

#### <a href="#merge-value"><code>(MERGE A B)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L492-L499">src</a>)</sub></sup><a name="merge-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#tree-type"><code>TREE</code></a> :A))</code>

Construct a Tree containing all the elements of both A and B.

If A and B contain elements A' and B' respectively where (== A' B'), the result will contain either A' or
B'. Which one is chosen for the result is undefined.



***

#### <a href="#remove-value"><code>(REMOVE TRE ELT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L343-L346">src</a>)</sub></sup><a name="remove-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tree-type"><code>TREE</code></a> :A)))</code>

Construct a new Tree like TRE but without an element `==' to ELT. Return None if TRE does not contain an element `==` to ELT.



***

#### <a href="#replace-value"><code>(REPLACE TRE ELT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L284-L302">src</a>)</sub></sup><a name="replace-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#tree-type"><code>TREE</code></a> :A) :A)))</code>

Construct a new Tree like TRE but with ELT replacing an old element `==` to ELT.

Return the new tree and the removed element.

If TRE did not have an element `==' to ELT, return None.



***

#### <a href="#replace-or-insert-value"><code>(REPLACE-OR-INSERT TRE ELT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.lisp#L305-L328">src</a>)</sub></sup><a name="replace-or-insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#tree-type"><code>TREE</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :A)))</code>

Construct a new Tree like TRE but containing ELT.

If TRE already had an element `==` to ELT, remove it, replace it with ELT, and return the removed value
alongside the new tree.



***

### Macros

#### <a href="#make-macro"><code>MAKE (&amp;REST ELEMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="make-macro"></a>

Construct a tree containing the `elements`.

e.g. `(tree:make 5 6 1 8 9)` returns a tree containing 1, 5, 6, 8, 9.



***

# Package `COALTON-LIBRARY/QUEUE`<a name="coalton-library/queue-package"></a>

### Types

#### <a href="#queue-type"><code>QUEUE</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L54-L55">src</a>)</sub></sup><a name="queue-type"></a>

Unbounded FIFO queue implemented with a linked list.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">DEFAULT</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#queue-type"><code>QUEUE</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A) :A</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#queue-type"><code>QUEUE</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>

</details>



***

### Values

#### <a href="#append-value"><code>(APPEND Q1 Q2)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L173-L178">src</a>)</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A))</code>

Create a new queue containing the elements of `q1` followed by the elements of `q2`.



***

#### <a href="#clear!-value"><code>(CLEAR! Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L95-L101">src</a>)</sub></sup><a name="clear!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Clear all elements from `q`.



***

#### <a href="#copy-value"><code>(COPY Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L76-L92">src</a>)</sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A))</code>

Return a new queue containing the same elements as `q`.



***

#### <a href="#empty?-value"><code>(EMPTY? Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L70-L73">src</a>)</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `q` empty?



***

#### <a href="#extend!-value"><code>(EXTEND! Q ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L181-L189">src</a>)</sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B. <a href="#intoiterator-class">INTOITERATOR</a> :B :A &rArr; ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :B &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Push every element in `iter` to the end of `q`.



***

#### <a href="#index-value"><code>(INDEX INDEX Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L160-L164">src</a>)</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the `index`th element of `q`.



***

#### <a href="#index-unsafe-value"><code>(INDEX-UNSAFE INDEX Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L167-L170">src</a>)</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :A)</code>

Return the `index`th element of `q` without checking if the element exists.



***

#### <a href="#items!-value"><code>(ITEMS! Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L192-L197">src</a>)</sub></sup><a name="items!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Returns an interator over the items of `q`, removing items as they are returned.



***

#### <a href="#length-value"><code>(LENGTH Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L64-L67">src</a>)</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of `q`.



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L58-L61">src</a>)</sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A))</code>

Create a new empty queue.



***

#### <a href="#peek-value"><code>(PEEK Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L146-L150">src</a>)</sub></sup><a name="peek-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Peek at the first item of `q`.



***

#### <a href="#peek-unsafe-value"><code>(PEEK-UNSAFE Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L153-L157">src</a>)</sub></sup><a name="peek-unsafe-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :A)</code>

Peek at the first item of `q` without checking if the queue is empty.



***

#### <a href="#pop!-value"><code>(POP! Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L130-L134">src</a>)</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove and return the first item of `q`.



***

#### <a href="#pop-unsafe!-value"><code>(POP-UNSAFE! Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L137-L143">src</a>)</sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :A)</code>

Remove and return the first item of `q` without checking if the queue is empty.



***

#### <a href="#push!-value"><code>(PUSH! ITEM Q)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L104-L127">src</a>)</sub></sup><a name="push!-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Push `item` onto the end of `q`.



***

# Package `COALTON-LIBRARY/RANDOMACCESS`<a name="coalton-library/randomaccess-package"></a>

### Classes

#### <a href="#randomaccess-class"><code>RANDOMACCESS</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L36-L45">src</a>)</sub></sup><a name="randomaccess-class"></a>
<code><a href="#randomaccess-class">RANDOMACCESS</a> :A :B</code>


Establishes that `:f` is a random-access store of elements of type `:t`. The **storage type** `:f` implies the **stored type** `:t`. The storage is expected to be sequential and O(1) in random access reads and writes.

It is permitted for any of `make`, `unsafe-aref`, or `unsafe-set!` to error.

Methods:
- <code>MAKE :: (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :B &rarr; :A)</code>
- <code>LENGTH :: (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>
- <code>READABLE? :: (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>
- <code>WRITABLE? :: (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>
- <code>UNSAFE-AREF :: (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :B)</code>
- <code>UNSAFE-SET! :: (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :B &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#randomaccess-class">RANDOMACCESS</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#randomaccess-class">RANDOMACCESS</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) :A</code>

</details>



***

### Values

#### <a href="#aref-value"><code>(AREF STORAGE INDEX)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L50-L56">src</a>)</sub></sup><a name="aref-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RANDOMACCESS</a> :A :B &rArr; (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Read the element at `index` of the random-access storage `storage`. Return `None` if the read is out-of-bounds or not permitted.



***

#### <a href="#set!-value"><code>(SET! STORAGE INDEX VALUE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L59-L65">src</a>)</sub></sup><a name="set!-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RANDOMACCESS</a> :A :B &rArr; (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Write the element `value` at `index` of the random-access storage `storage`. Return `None` if the write is out-of-bounds or not permitted.



***

# Package `COALTON-LIBRARY/RESULT`<a name="coalton-library/result-package"></a>

### Values

#### <a href="#err-if-value"><code>(ERR-IF FAILED? FAILURE)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L32-L36">src</a>)</sub></sup><a name="err-if-value"></a>
<code>&forall; :A. (<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; :A &rarr; (<a href="#result-type"><code>RESULT</code></a> :A <a href="#unit-type"><code>UNIT</code></a>))</code>

Fail with FAILURE value if FAILED? is True.



***

#### <a href="#err?-value"><code>(ERR? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L53-L57">src</a>)</sub></sup><a name="err?-value"></a>
<code>&forall; :A :B. ((<a href="#result-type"><code>RESULT</code></a> :A :B) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if X is ERR



***

#### <a href="#flatten-value"><code>(FLATTEN X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L67-L70">src</a>)</sub></sup><a name="flatten-value"></a>
<code>&forall; :A. ((<a href="#result-type"><code>RESULT</code></a> :A :A) &rarr; :A)</code>


***

#### <a href="#map-err-value"><code>(MAP-ERR F X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L60-L64">src</a>)</sub></sup><a name="map-err-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (<a href="#result-type"><code>RESULT</code></a> :A :C) &rarr; (<a href="#result-type"><code>RESULT</code></a> :B :C))</code>

Map over the ERR case



***

#### <a href="#ok-or-error-value"><code>(OK-OR-ERROR RES)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L73-L76">src</a>)</sub></sup><a name="ok-or-error-value"></a>
<code>&forall; :A :B. <a href="#signalable-class">SIGNALABLE</a> :A &rArr; ((<a href="#result-type"><code>RESULT</code></a> :A :B) &rarr; :B)</code>


***

#### <a href="#ok?-value"><code>(OK? X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L46-L50">src</a>)</sub></sup><a name="ok?-value"></a>
<code>&forall; :A :B. ((<a href="#result-type"><code>RESULT</code></a> :A :B) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if X is OK



***

#### <a href="#opt->result-value"><code>(OPT-&gt;RESULT FAILURE OPT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L39-L43">src</a>)</sub></sup><a name="opt->result-value"></a>
<code>&forall; :A :B. (:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B) &rarr; (<a href="#result-type"><code>RESULT</code></a> :A :B))</code>

Convert OPT to a Result, using FAILURE value if None.



***

# Package `COALTON-LIBRARY/SEQ`<a name="coalton-library/seq-package"></a>

### Types

#### <a href="#seq-type"><code>SEQ</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L58-L64">src</a>)</sub></sup><a name="seq-type"></a>
<details>
<summary>Instances</summary>

- <code>(<a href="#foldable-class">FOLDABLE</a> :A) (<a href="#runtimerepr-class">RUNTIMEREPR</a> :B) &rArr; <a href="#into-class">INTO</a> (:A :B) (<a href="#seq-type"><code>SEQ</code></a> :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#seq-type"><code>SEQ</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#seq-type"><code>SEQ</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#seq-type"><code>SEQ</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#seq-type"><code>SEQ</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#default-class">DEFAULT</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#seq-type"><code>SEQ</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>

</details>



***

### Values

#### <a href="#conc-value"><code>(CONC LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L167-L208">src</a>)</sub></sup><a name="conc-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A))</code>

Concatenate two `Seq`s



***

#### <a href="#empty?-value"><code>(EMPTY? SEQ)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L78-L79">src</a>)</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>


***

#### <a href="#get-value"><code>(GET SEQ IDX)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L82-L94">src</a>)</sub></sup><a name="get-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Get the member of `seq` at index `idx`, or `None` if `idx` is larger
than `(size seq)`



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L67-L69">src</a>)</sub></sup><a name="new-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A))</code>

Create a new empty `Seq`.



***

#### <a href="#pop-value"><code>(POP SEQ)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L128-L165">src</a>)</sub></sup><a name="pop-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A (<a href="#seq-type"><code>SEQ</code></a> :A))))</code>

If `seq` is empty, return `None`. Otherwise, the last member of `seq` and
a new `Seq` instance.



***

#### <a href="#push-value"><code>(PUSH SEQ A)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L118-L126">src</a>)</sub></sup><a name="push-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; :A &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A))</code>

Push `a` onto the end of `seq`, returning a new `Seq` instance.



***

#### <a href="#put-value"><code>(PUT SEQ IDX A)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L97-L116">src</a>)</sub></sup><a name="put-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#seq-type"><code>SEQ</code></a> :A)))</code>

If `idx` is less than `(size seq)`, Return a new `seq` whose `idx` position
contains `a`.



***

#### <a href="#size-value"><code>(SIZE SEQ)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L72-L76">src</a>)</sub></sup><a name="size-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Return the number of elements in the `seq`.



***

### Macros

#### <a href="#make-macro"><code>MAKE (&amp;REST ELEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="make-macro"></a>

Create a new `Seq` containing `elems`.



***

# Package `COALTON-LIBRARY/SLICE`<a name="coalton-library/slice-package"></a>

### Types

#### <a href="#slice-type"><code>SLICE</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L39-L39">src</a>)</sub></sup><a name="slice-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#slice-type"><code>SLICE</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#slice-type"><code>SLICE</code></a> :A) :A</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#slice-type"><code>SLICE</code></a> :A) :A</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#sliceable-class">SLICEABLE</a> (<a href="#slice-type"><code>SLICE</code></a> :A)</code>

</details>



***

### Values

#### <a href="#index-value"><code>(INDEX IDX S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L88-L92">src</a>)</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Lookup the element at `index` in `s`.



***

#### <a href="#index-unsafe-value"><code>(INDEX-UNSAFE IDX S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L96-L99">src</a>)</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; :A)</code>

Lookup the element at `index` in `s` without bounds checking.



***

#### <a href="#iter-chunked-value"><code>(ITER-CHUNKED SIZE S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L119-L144">src</a>)</sub></sup><a name="iter-chunked-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#slice-type"><code>SLICE</code></a> :B)))</code>

Divide `s` into a series of slices of length `size`. Will return a final shorter slice if `s` does not divide evenly.



***

#### <a href="#iter-chunked-exact-value"><code>(ITER-CHUNKED-EXACT SIZE S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L147-L159">src</a>)</sub></sup><a name="iter-chunked-exact-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#slice-type"><code>SLICE</code></a> :B)))</code>

Divide `s` into a series of slices of length `size`. Will skip trailing elements if `s` does not divide evenly.



***

#### <a href="#iter-sliding-value"><code>(ITER-SLIDING SIZE S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L102-L116">src</a>)</sub></sup><a name="iter-sliding-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#slice-type"><code>SLICE</code></a> :B)))</code>

Returns an iterator that yeilds a series of overlapping slices of length `size`.



***

#### <a href="#length-value"><code>(LENGTH S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L74-L77">src</a>)</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of `s`.



***

#### <a href="#new-value"><code>(NEW START LEN V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L53-L70">src</a>)</sub></sup><a name="new-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#slice-type"><code>SLICE</code></a> :B))</code>

Create a new slice backed by `v` starting at index `start` and continuing for `len` elements.



***

#### <a href="#set!-value"><code>(SET! IDX ITEM S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L81-L85">src</a>)</sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the element at index `idx` in `s` to `item`.



***

# Package `COALTON-LIBRARY/STRING`<a name="coalton-library/string-package"></a>

### Values

#### <a href="#chars-value"><code>(CHARS STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L142-L144">src</a>)</sub></sup><a name="chars-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Returns an iterator over the characters in `str`.



***

#### <a href="#concat-value"><code>(CONCAT STR1 STR2)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L52-L55">src</a>)</sub></sup><a name="concat-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Concatenate STR1 and STR2 together, returning a new string.



***

#### <a href="#length-value"><code>(LENGTH STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L63-L66">src</a>)</sub></sup><a name="length-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

The length of a string STR.



***

#### <a href="#parse-int-value"><code>(PARSE-INT STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L104-L110">src</a>)</sub></sup><a name="parse-int-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#integer-type"><code>INTEGER</code></a>))</code>

Parse the integer in string `str`.



***

#### <a href="#ref-value"><code>(REF STR IDX)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L119-L123">src</a>)</sub></sup><a name="ref-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Return the `idx`th character of `str`.



***

#### <a href="#ref-unchecked-value"><code>(REF-UNCHECKED STR IDX)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L113-L116">src</a>)</sub></sup><a name="ref-unchecked-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a>)</code>

Return the `idx`th character of `str`. This function is partial.



***

#### <a href="#reverse-value"><code>(REVERSE S)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L58-L60">src</a>)</sub></sup><a name="reverse-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Reverse a string.



***

#### <a href="#split-value"><code>(SPLIT N STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L77-L80">src</a>)</sub></sup><a name="split-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> <a href="#string-type"><code>STRING</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Splits a string into a head and tail at the nth index.



***

#### <a href="#strip-prefix-value"><code>(STRIP-PREFIX PREFIX STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L83-L90">src</a>)</sub></sup><a name="strip-prefix-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Returns a string without a give prefix, or `None` if the string
does not have that suffix.



***

#### <a href="#strip-suffix-value"><code>(STRIP-SUFFIX SUFFIX STR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L93-L101">src</a>)</sub></sup><a name="strip-suffix-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Returns a string without a give suffix, or `None` if the string
does not have that suffix.



***

#### <a href="#substring-value"><code>(SUBSTRING STR START END)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L69-L74">src</a>)</sub></sup><a name="substring-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Compute a substring of a string bounded by given indices.



***

#### <a href="#substring-index-value"><code>(SUBSTRING-INDEX SMALL BIG)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L126-L131">src</a>)</sub></sup><a name="substring-index-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

If the first argument appears as a substring within the second argument, return the starting index into the second argument.



***

#### <a href="#substring?-value"><code>(SUBSTRING? SMALL BIG)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L134-L139">src</a>)</sub></sup><a name="substring?-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Return true if the first argument appears as a substring within the second argument.



***

# Package `COALTON-LIBRARY/SYSTEM`<a name="coalton-library/system-package"></a>

### Types

#### <a href="#lispcondition-type"><code>LISPCONDITION</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L181-L182">src</a>)</sub></sup><a name="lispcondition-type"></a>

Condition for lisp error handling. Uses `cl:condition`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lispcondition-type"><code>LISPCONDITION</code></a></code>
- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#lispcondition-type"><code>LISPCONDITION</code></a></code>

</details>



***

### Structs

#### <a href="#meteredresult-type"><code>METEREDRESULT :A</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L145-L152">src</a>)</sub></sup><a name="meteredresult-type"></a>

Function output with space and timing metedata.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#meteredresult-type"><code>METEREDRESULT</code></a> :A)</code>

</details>



***

### Values

#### <a href="#add-feature-value"><code>(ADD-FEATURE FEAT)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L251-L257">src</a>)</sub></sup><a name="add-feature-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Adds a feature `feat` to `cl:*features*`.



***

#### <a href="#architecture-value"><code>(ARCHITECTURE _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L215-L218">src</a>)</sub></sup><a name="architecture-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The system's architecture (stored at compile time).



***

#### <a href="#argv0-value"><code>(ARGV0 _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L270-L276">src</a>)</sub></sup><a name="argv0-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

The first command line argument (stored at compile time).



***

#### <a href="#cmd-args-value"><code>(CMD-ARGS _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L264-L267">src</a>)</sub></sup><a name="cmd-args-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

The current command line arguments (stored at compile time).



***

#### <a href="#features-value"><code>(FEATURES _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L245-L248">src</a>)</sub></sup><a name="features-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Returns a list of active features, from `cl:*features*`.



***

#### <a href="#gc-value"><code>(GC _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L50-L54">src</a>)</sub></sup><a name="gc-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Perform a full garbage collection.



***

#### <a href="#get-real-time-value"><code>(GET-REAL-TIME _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L85-L88">src</a>)</sub></sup><a name="get-real-time-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Gets the real-time in internal time units. The difference between two successive calls to this function represents the time that has elapsed.



***

#### <a href="#getenv-value"><code>(GETENV VAR)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L194-L200">src</a>)</sub></sup><a name="getenv-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Gets the value of the environmental variable `var`, errors if `var` doesn't exist.



***

#### <a href="#hostname-value"><code>(HOSTNAME _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L227-L230">src</a>)</sub></sup><a name="hostname-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Returns the system's hostname. This is a function because the hostname can be redefined.



***

#### <a href="#implementation-value"><code>(IMPLEMENTATION _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L233-L236">src</a>)</sub></sup><a name="implementation-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The lisp implementation (stored at compile time).



***

#### <a href="#lisp-version-value"><code>(LISP-VERSION _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L239-L242">src</a>)</sub></sup><a name="lisp-version-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The lisp implementation version (stored at compile time).



***

#### <a href="#monotonic-bytes-consed-value"><code>(MONOTONIC-BYTES-CONSED _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L108-L116">src</a>)</sub></sup><a name="monotonic-bytes-consed-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#integer-type"><code>INTEGER</code></a>))</code>

Returns the number of bytes consed since some unspecified point in time.

The difference between two successive calls to this function represents the number of bytes consed in that period of time.



***

#### <a href="#os-value"><code>(OS _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L221-L224">src</a>)</sub></sup><a name="os-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The system's operating system (stored at compile time).



***

#### <a href="#setenv!-value"><code>(SETENV! VAR VAL)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L204-L208">src</a>)</sub></sup><a name="setenv!-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sets an environment variable `var` to string `val`, only if `var` already exists.



***

#### <a href="#sleep-value"><code>(SLEEP N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L57-L66">src</a>)</sub></sup><a name="sleep-value"></a>
<code>&forall; :A. <a href="#rational-class">RATIONAL</a> :A &rArr; (:A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sleep for `n` seconds, where `n` can be of any type with an instance of `Rational`.

Sleep uses type class `Rational`'s `best-approx` instead of `Real`'s `real-approx` because it handles the approximation without arbitrary precision. The only `Real` type excluded by this decision is `CReal`.



***

#### <a href="#space-value"><code>(SPACE F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L133-L143">src</a>)</sub></sup><a name="space-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#integer-type"><code>INTEGER</code></a>)))</code>

Run the thunk `f` and return a tuple containing its value along with the approximate number of bytes consed during the course of executing f.

The amount of space used may be peculiar to the implementation, such as rounding to certain page boundaries.

A garbage collection will be forced prior to invoking `f`.



***

#### <a href="#spacetime-value"><code>(SPACETIME F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L155-L171">src</a>)</sub></sup><a name="spacetime-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; (<a href="#meteredresult-type"><code>METEREDRESULT</code></a> :A))</code>

Runs a function, gathering space and timing information and returning a `MeteredResults` object.

Garbage collection will be performed before profiling is performed.



***

#### <a href="#time-value"><code>(TIME F)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L123-L130">src</a>)</sub></sup><a name="time-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A <a href="#integer-type"><code>INTEGER</code></a>))</code>

Run the thunk `f` and return a tuple containing its value along with the run time in microseconds.

While the result will always contain microseconds, some implementations may return a value rounded to less precision (e.g., rounded to the nearest second or millisecond).



***

#### <a href="#time-units->rounded-microseconds-value"><code>(TIME-UNITS-&gt;ROUNDED-MICROSECONDS T)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L102-L105">src</a>)</sub></sup><a name="time-units->rounded-microseconds-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Converts internal time units into an integer number of rounded microseconds.



***

#### <a href="#time-units->seconds-value"><code>(TIME-UNITS-&gt;SECONDS T)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L97-L99">src</a>)</sub></sup><a name="time-units->seconds-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Converts internal time units into `Fraction` seconds.



***

#### <a href="#internal-time-units-per-second-value"><code>INTERNAL-TIME-UNITS-PER-SECOND</code></a> <sup><sub>[VALUE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L91-L94">src</a>)</sub></sup><a name="internal-time-units-per-second-value"></a>
<code><a href="#integer-type"><code>INTEGER</code></a></code>

The number of internal time units per second. This is implementation specific.



***

# Package `COALTON-LIBRARY/TUPLE`<a name="coalton-library/tuple-package"></a>

### Structs

#### <a href="#tuple3-type"><code>TUPLE3 :A :B :C</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L43-L46">src</a>)</sub></sup><a name="tuple3-type"></a>
- <code>FIRST :: :A</code>
- <code>SECOND :: :B</code>
- <code>THIRD :: :C</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) (<a href="#default-class">DEFAULT</a> :C) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>

</details>



***

#### <a href="#tuple4-type"><code>TUPLE4 :A :B :C :D</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L49-L53">src</a>)</sub></sup><a name="tuple4-type"></a>
- <code>FIRST :: :A</code>
- <code>SECOND :: :B</code>
- <code>THIRD :: :C</code>
- <code>FOURTH :: :D</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) (<a href="#default-class">DEFAULT</a> :C) (<a href="#default-class">DEFAULT</a> :D) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>

</details>



***

#### <a href="#tuple5-type"><code>TUPLE5 :A :B :C :D :E</code></a> <sup><sub>[STRUCT] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L56-L61">src</a>)</sub></sup><a name="tuple5-type"></a>
- <code>FIRST :: :A</code>
- <code>SECOND :: :B</code>
- <code>THIRD :: :C</code>
- <code>FOURTH :: :D</code>
- <code>FIFTH :: :E</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) (<a href="#default-class">DEFAULT</a> :C) (<a href="#default-class">DEFAULT</a> :D) (<a href="#default-class">DEFAULT</a> :E) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) (<a href="#eq-class">EQ</a> :E) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) (<a href="#hash-class">HASH</a> :E) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>

</details>



***

### Values

#### <a href="#fst-value"><code>(FST (TUPLE A _))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L33-L35">src</a>)</sub></sup><a name="fst-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :A)</code>

Get the first element of a tuple.



***

#### <a href="#snd-value"><code>(SND (TUPLE _ B))</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L38-L40">src</a>)</sub></sup><a name="snd-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :B)</code>

Get the second element of a tuple.



***

# Package `COALTON-LIBRARY/TYPES`<a name="coalton-library/types-package"></a>

### Types

#### <a href="#lisptype-type"><code>LISPTYPE</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L44-L45">src</a>)</sub></sup><a name="lisptype-type"></a>

The runtime representation of a Coalton type as a lisp type.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#lisptype-type"><code>LISPTYPE</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lisptype-type"><code>LISPTYPE</code></a></code>

</details>



***

#### <a href="#proxy-type"><code>PROXY</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L22-L24">src</a>)</sub></sup><a name="proxy-type"></a>
- <code>PROXY</code> 

Proxy holds no data, but has a phantom type parameter.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#proxy-type"><code>PROXY</code></a> :A)</code>

</details>



***

### Classes

#### <a href="#runtimerepr-class"><code>RUNTIMEREPR</code></a> <sup><sub>[CLASS] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L47-L53">src</a>)</sub></sup><a name="runtimerepr-class"></a>
<code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A</code>


Types which have a runtime LispType representation.

`runtime-repr` corresponds to the type emitted by the Coalton compiler for the type parameter to the given Proxy.

The compiler will auto-generate instances of `RuntimeRepr` for all defined types.

Methods:
- <code>RUNTIME-REPR :: ((<a href="#proxy-type"><code>PROXY</code></a> :A) &rarr; <a href="#lisptype-type"><code>LISPTYPE</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#streamoptions-type"><code>STREAMOPTIONS</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ifexists-type"><code>IFEXISTS</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#filestream-type"><code>FILESTREAM</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fileerror-type"><code>FILEERROR</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lispcondition-type"><code>LISPCONDITION</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#meteredresult-type"><code>METEREDRESULT</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#ordmap-type"><code>ORDMAP</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iteratorstacknode-type"><code>ITERATORSTACKNODE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#color-type"><code>COLOR</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#freet-type"><code>FREET</code></a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#freef-type"><code>FREEF</code></a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> ((<a href="#free-type"><code>FREE</code></a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> ((<a href="#optionalt-type"><code>OPTIONALT</code></a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#resultt-type"><code>RESULTT</code></a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (((<a href="#envt-type"><code>ENVT</code></a> :A) :B) :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#st-type"><code>ST</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#identity-type"><code>IDENTITY</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hashmap-type"><code>HASHMAP</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hmnode-type"><code>HMNODE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hmentry-type"><code>HMENTRY</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#rangestatus-type"><code>RANGESTATUS</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hyperdual-type"><code>HYPERDUAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#quantization-type"><code>QUANTIZATION</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ord-type"><code>ORD</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#result-type"><code>RESULT</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#void-type"><code>VOID</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#proxy-type"><code>PROXY</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lisptype-type"><code>LISPTYPE</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (:A &rarr; :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#f64-type"><code>F64</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#f32-type"><code>F32</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>

</details>



***

### Values

#### <a href="#as-proxy-of-value"><code>(AS-PROXY-OF X _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L34-L36">src</a>)</sub></sup><a name="as-proxy-of-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#proxy-type"><code>PROXY</code></a> :A) &rarr; :A)</code>

Returns the parameter, forcing the proxy to have the same type as the parameter.



***

#### <a href="#proxy-inner-value"><code>(PROXY-INNER _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L40-L41">src</a>)</sub></sup><a name="proxy-inner-value"></a>
<code>&forall; :A :B. ((<a href="#proxy-type"><code>PROXY</code></a> (:A :B)) &rarr; (<a href="#proxy-type"><code>PROXY</code></a> :B))</code>


***

#### <a href="#proxy-of-value"><code>(PROXY-OF _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L28-L30">src</a>)</sub></sup><a name="proxy-of-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#proxy-type"><code>PROXY</code></a> :A))</code>

Returns a Proxy containing the type of the parameter.



***

#### <a href="#runtime-repr-of-value"><code>(RUNTIME-REPR-OF X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L57-L59">src</a>)</sub></sup><a name="runtime-repr-of-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (:A &rarr; <a href="#lisptype-type"><code>LISPTYPE</code></a>)</code>

Returns the runtime representation of the type of the given value.



***

# Package `COALTON-LIBRARY/VECTOR`<a name="coalton-library/vector-package"></a>

### Types

#### <a href="#vector-type"><code>VECTOR</code></a> <sup><sub>[TYPE] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L62-L62">src</a>)</sub></sup><a name="vector-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#default-class">DEFAULT</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#vector-type"><code>VECTOR</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#vector-type"><code>VECTOR</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#seq-type"><code>SEQ</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#vector-type"><code>VECTOR</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#randomaccess-class">RANDOMACCESS</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#sliceable-class">SLICEABLE</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>

</details>



***

### Values

#### <a href="#append-value"><code>(APPEND V1 V2)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L224-L229">src</a>)</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector containing the elements of `v1` followed by the elements of `v2`.



***

#### <a href="#capacity-value"><code>(CAPACITY V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L99-L102">src</a>)</sub></sup><a name="capacity-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the number of elements that `v` can store without resizing.



***

#### <a href="#clear!-value"><code>(CLEAR! V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L137-L139">src</a>)</sub></sup><a name="clear!-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the capacity of `v` to `0`.



***

#### <a href="#copy-value"><code>(COPY V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L118-L123">src</a>)</sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Return a new vector containing the same elements as `v`.



***

#### <a href="#empty?-value"><code>(EMPTY? V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L106-L108">src</a>)</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `v` empty?



***

#### <a href="#extend!-value"><code>(EXTEND! VEC ITER)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L280-L296">src</a>)</sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B. <a href="#intoiterator-class">INTOITERATOR</a> :B :A &rArr; ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :B &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Push every element in `iter` to the end of `vec`.



***

#### <a href="#find-elem-value"><code>(FIND-ELEM E V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L209-L221">src</a>)</sub></sup><a name="find-elem-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Find the index of element `e` in `v`.



***

#### <a href="#head-value"><code>(HEAD V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L186-L188">src</a>)</sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the first item of `v`.



***

#### <a href="#head-unsafe-value"><code>(HEAD-UNSAFE V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L192-L194">src</a>)</sub></sup><a name="head-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Return the first item of `v` without first checking if `v` is empty.



***

#### <a href="#index-value"><code>(INDEX INDEX V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L163-L167">src</a>)</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the `index`th element of `v`.



***

#### <a href="#index-unsafe-value"><code>(INDEX-UNSAFE IDX V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L171-L174">src</a>)</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Return the `idx`th element of `v` without checking if the element exists.



***

#### <a href="#last-value"><code>(LAST V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L197-L201">src</a>)</sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the last element of `v`.



***

#### <a href="#last-unsafe-value"><code>(LAST-UNSAFE V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L204-L206">src</a>)</sub></sup><a name="last-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Return the last element of `v` without first checking if `v` is empty.



***

#### <a href="#length-value"><code>(LENGTH V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L92-L95">src</a>)</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of `v`.



***

#### <a href="#new-value"><code>(NEW _)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L66-L68">src</a>)</sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new empty vector



***

#### <a href="#pop!-value"><code>(POP! V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L149-L153">src</a>)</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove and return the last item of `v`.



***

#### <a href="#pop-unsafe!-value"><code>(POP-UNSAFE! V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L157-L160">src</a>)</sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Remove and return the last item of `v` without checking if the vector is empty.



***

#### <a href="#push!-value"><code>(PUSH! ITEM V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L143-L146">src</a>)</sub></sup><a name="push!-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Append `item` to `v` and resize `v` if necessary, returning the index of the new item.



***

#### <a href="#reverse-value"><code>(REVERSE V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L238-L244">src</a>)</sub></sup><a name="reverse-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Returns a fresh vector with the elements of vector `v` in reverse order.  The original vector isn't modified.



***

#### <a href="#reverse!-value"><code>(REVERSE! V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L232-L235">src</a>)</sub></sup><a name="reverse!-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Returns a vector with the elements of vector `v` in reverse order.  The original vector may be destroyed to produce the result.



***

#### <a href="#set!-value"><code>(SET! IDX ITEM V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L178-L182">src</a>)</sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the `idx`th element of `v` to `item`. This function left intentionally unsafe because it does not have a return value to check.



***

#### <a href="#set-capacity!-value"><code>(SET-CAPACITY! NEW-CAPACITY V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L126-L133">src</a>)</sub></sup><a name="set-capacity!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the capacity of `v` to `new-capacity`. Setting the capacity to lower then the length will remove elements from the end.



***

#### <a href="#singleton-value"><code>(SINGLETON X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L86-L88">src</a>)</sub></sup><a name="singleton-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector with a single element equal to `x`



***

#### <a href="#singleton?-value"><code>(SINGLETON? V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L112-L114">src</a>)</sub></sup><a name="singleton?-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `v` a singleton?



***

#### <a href="#sort!-value"><code>(SORT! V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L275-L277">src</a>)</sub></sup><a name="sort!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sort a vector in-place in ascending order.



***

#### <a href="#sort-by!-value"><code>(SORT-BY! F V)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L264-L271">src</a>)</sub></sup><a name="sort-by!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sort a vector in-place with predicate function `f`.



***

#### <a href="#swap-remove!-value"><code>(SWAP-REMOVE! IDX VEC)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L247-L251">src</a>)</sub></sup><a name="swap-remove!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec`. Then return the removed element.



***

#### <a href="#swap-remove-unsafe!-value"><code>(SWAP-REMOVE-UNSAFE! IDX VEC)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L254-L261">src</a>)</sub></sup><a name="swap-remove-unsafe!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec` without bounds checking. Then return the removed element.



***

#### <a href="#with-capacity-value"><code>(WITH-CAPACITY N)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L72-L75">src</a>)</sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector with `n` elements preallocated.



***

#### <a href="#with-initial-element-value"><code>(WITH-INITIAL-ELEMENT N X)</code></a> <sup><sub>[FUNCTION] (<a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L78-L82">src</a>)</sub></sup><a name="with-initial-element-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector with `n` elements equal to `x`.



***

### Macros

#### <a href="#make-macro"><code>MAKE (&amp;REST ELEMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="make-macro"></a>

Construct a `Vector' containing the ELEMENTS, in the order listed.



***

</div>
