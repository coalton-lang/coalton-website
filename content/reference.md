---
identifier: Reference
---

<style>
@media only screen and (max-width: 1250px) {
  .sidebar {
    display: none;
  }
}
</style>

<div class="sidebar" style="height: 0; position: sticky; top: 10px">
<div style="position: relative; right: 50%; width: 50%;">

### Reference
- <a href="#coalton-package"><code>COALTON</code></a>
- <a href="#coalton-library/big-float-package"><code>COALTON-LIBRARY/BIG-FLOAT</code></a>
- <a href="#coalton-library/bits-package"><code>COALTON-LIBRARY/BITS</code></a>
- <a href="#coalton-library/builtin-package"><code>COALTON-LIBRARY/BUILTIN</code></a>
- <a href="#coalton-library/cell-package"><code>COALTON-LIBRARY/CELL</code></a>
- <a href="#coalton-library/char-package"><code>COALTON-LIBRARY/CHAR</code></a>
- <a href="#coalton-library/classes-package"><code>COALTON-LIBRARY/CLASSES</code></a>
- <a href="#coalton-library/computable-reals-package"><code>COALTON-LIBRARY/COMPUTABLE-REALS</code></a>
- <a href="#coalton-library/file-package"><code>COALTON-LIBRARY/FILE</code></a>
- <a href="#coalton-library/functions-package"><code>COALTON-LIBRARY/FUNCTIONS</code></a>
- <a href="#coalton-library/hash-package"><code>COALTON-LIBRARY/HASH</code></a>
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
- <a href="#coalton-library/math/integral-package"><code>COALTON-LIBRARY/MATH/INTEGRAL</code></a>
- <a href="#coalton-library/math/real-package"><code>COALTON-LIBRARY/MATH/REAL</code></a>
- <a href="#coalton-library/monad/free-package"><code>COALTON-LIBRARY/MONAD/FREE</code></a>
- <a href="#coalton-library/monad/state-package"><code>COALTON-LIBRARY/MONAD/STATE</code></a>
- <a href="#coalton-library/optional-package"><code>COALTON-LIBRARY/OPTIONAL</code></a>
- <a href="#coalton-library/ord-map-package"><code>COALTON-LIBRARY/ORD-MAP</code></a>
- <a href="#coalton-library/ord-tree-package"><code>COALTON-LIBRARY/ORD-TREE</code></a>
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
</div></div><div>

# Package `COALTON`<a name="coalton-package"></a>


Public interface to COALTON.

### Types

#### <code><a href="">ARROW</a></code> <sup><sub>[TYPE]</sub></sup><a name="arrow-type"></a>

Type constructor for function types.

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (:A &rarr; :B)</code>

</details>



***

#### <code><a href="">BOOLEAN</a></code> <sup><sub>[TYPE]</sub></sup><a name="boolean-type"></a>

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

#### <code><a href="">CHAR</a></code> <sup><sub>[TYPE]</sub></sup><a name="char-type"></a>

A single character represented as a `character` type.

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

#### <code><a href="">DOUBLE-FLOAT</a></code> <sup><sub>[TYPE]</sub></sup><a name="double-float-type"></a>

Double precision floating point number. Uses `double-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="">FRACTION</a></code> <sup><sub>[TYPE]</sub></sup><a name="fraction-type"></a>

A ratio of integers always in reduced form.

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#dyadic-type"><code>DYADIC</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L59-L60">I16</a></code> <sup><sub>[TYPE]</sub></sup><a name="i16-type"></a>

Signed 16-bit integer capable of storing values in `[-32768, 32767]`. Uses `(signed-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L63-L64">I32</a></code> <sup><sub>[TYPE]</sub></sup><a name="i32-type"></a>

Signed 32-bit integer capable of storing values in `[-2147483648, 2147483647]`. Uses `(signed-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L67-L68">I64</a></code> <sup><sub>[TYPE]</sub></sup><a name="i64-type"></a>

Signed 64-bit integer capable of storing values in `[-9223372036854775808, 9223372036854775807]`. Uses `(signed-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L55-L56">I8</a></code> <sup><sub>[TYPE]</sub></sup><a name="i8-type"></a>

Signed 8-bit integer capable of storing values in `[-128, 127]`. Uses `(signed-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L71-L72">IFIX</a></code> <sup><sub>[TYPE]</sub></sup><a name="ifix-type"></a>

Non-allocating tagged integer; range is platform-dependent. Does not error on overflow. Uses `fixnum`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="">INTEGER</a></code> <sup><sub>[TYPE]</sub></sup><a name="integer-type"></a>

Unbound integer. Uses `integer`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="">LIST</a></code> <sup><sub>[TYPE]</sub></sup><a name="list-type"></a>

Homogeneous list of objects represented as a Common Lisp `list`.

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
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type"><code>LIST</code></a></code>

</details>



***

#### <code><a href="">SINGLE-FLOAT</a></code> <sup><sub>[TYPE]</sub></sup><a name="single-float-type"></a>

Single precision floating point number. Uses `single-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="">STRING</a></code> <sup><sub>[TYPE]</sub></sup><a name="string-type"></a>

String of characters represented by Common Lisp `string`.

<details>
<summary>Instances</summary>

- <code><a href="#default-class">DEFAULT</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; <a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#char-type"><code>CHAR</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#pathname-type"><code>PATHNAME</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u64-type"><code>U64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L43-L44">U16</a></code> <sup><sub>[TYPE]</sub></sup><a name="u16-type"></a>

Unsigned 16-bit integer capable of storing values in `[0, 65535]`. Uses `(unsigned-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L47-L48">U32</a></code> <sup><sub>[TYPE]</sub></sup><a name="u32-type"></a>

Unsigned 32-bit integer capable of storing values in `[0, 4294967295]`. Uses `(unsigned-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L51-L52">U64</a></code> <sup><sub>[TYPE]</sub></sup><a name="u64-type"></a>

Unsigned 64-bit integer capable of storing values in `[0, 18446744073709551615]`. Uses `(unsigned-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i64-type"><code>I64</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L39-L40">U8</a></code> <sup><sub>[TYPE]</sub></sup><a name="u8-type"></a>

Unsigned 8-bit integer capable of storing values in `[0, 255]`. Uses `(unsigned-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L75-L76">UFIX</a></code> <sup><sub>[TYPE]</sub></sup><a name="ufix-type"></a>

Non-allocating tagged non-negative integer; range is platform-dependent. Uses `(and fixnum unsigned-byte)`.

<details>
<summary>Instances</summary>

- <code><a href="#%filebyte-class">%FILEBYTE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#bits-class">BITS</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#file-class">FILE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i16-type"><code>I16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i32-type"><code>I32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#i8-type"><code>I8</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u16-type"><code>U16</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u32-type"><code>U32</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#u8-type"><code>U8</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="">UNIT</a></code> <sup><sub>[TYPE]</sub></sup><a name="unit-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#unit-type"><code>UNIT</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> <a href="#unit-type"><code>UNIT</code></a> :A</code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L14-L14">VOID</a></code> <sup><sub>[TYPE]</sub></sup><a name="void-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#void-type"><code>VOID</code></a></code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L29-L31">(CONS X XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="cons-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L21-L21">FALSE</a></code> <sup><sub>[VALUE]</sub></sup><a name="false-value"></a>
<code><a href="#boolean-type"><code>BOOLEAN</code></a></code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L34-L36">NIL</a></code> <sup><sub>[VALUE]</sub></sup><a name="nil-value"></a>
<code>&forall; :A. (<a href="#list-type"><code>LIST</code></a> :A)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L18-L18">TRUE</a></code> <sup><sub>[VALUE]</sub></sup><a name="true-value"></a>
<code><a href="#boolean-type"><code>BOOLEAN</code></a></code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.lisp#L25-L25">UNIT</a></code> <sup><sub>[VALUE]</sub></sup><a name="unit-value"></a>
<code><a href="#unit-type"><code>UNIT</code></a></code>


***

# Package `COALTON-LIBRARY/BIG-FLOAT`<a name="coalton-library/big-float-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L162-L163">BIG-FLOAT</a></code> <sup><sub>[TYPE]</sub></sup><a name="big-float-type"></a>

An arbitrary (but fixed) precision floating point number.

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L88-L88">ROUNDINGMODE</a></code> <sup><sub>[TYPE]</sub></sup><a name="roundingmode-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L305-L308">(BF-EE _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="bf-ee-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#big-float-type"><code>BIG-FLOAT</code></a>)</code>

Return the value of ee = exp(1) to the currently set precision.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L276-L279">(BF-PI _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="bf-pi-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#big-float-type"><code>BIG-FLOAT</code></a>)</code>

Return the value of pi to the currently set precision.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L130-L133">(GET-PRECISION _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="get-precision-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Get the current precision of Big-Float arithmetic.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L136-L139">(GET-ROUNDING-MODE _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="get-rounding-mode-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a>)</code>

Get the current rounding-mode of Big-Float arithmetic.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L114-L120">(SET-PRECISION! PREC-BITS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set-precision!-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the precision of Big-Float arithmetic to PREC-BITS bits.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L123-L127">(SET-ROUNDING-MODE! R)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set-rounding-mode!-value"></a>
<code>(<a href="#roundingmode-type"><code>ROUNDINGMODE</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the global rounding mode for Big-Float operations.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L151-L153">(WITH-PRECISION PREC-BITS F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-precision-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float precision PREC-BITS.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L143-L148">(WITH-PRECISION-ROUNDING PREC-BITS RND F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-precision-rounding-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#roundingmode-type"><code>ROUNDINGMODE</code></a> &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float PREC-BITS precision and RND rounding-mode.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L156-L158">(WITH-ROUNDING RND F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-rounding-value"></a>
<code>&forall; :A. (<a href="#roundingmode-type"><code>ROUNDINGMODE</code></a> &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; :A)</code>

Call F with a temporary Big-Float rounding-mode RND.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L105-L107">RNDA</a></code> <sup><sub>[VALUE]</sub></sup><a name="rnda-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND Away from zero.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L102-L104">RNDD</a></code> <sup><sub>[VALUE]</sub></sup><a name="rndd-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND Down, toward negative infinity.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L108-L110">RNDF</a></code> <sup><sub>[VALUE]</sub></sup><a name="rndf-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

Faithful rounding (experimental).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L93-L95">RNDN</a></code> <sup><sub>[VALUE]</sub></sup><a name="rndn-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND to Nearest, with the even rounding rule.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L90-L92">RNDNA</a></code> <sup><sub>[VALUE]</sub></sup><a name="rndna-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND to Nearest Away.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L99-L101">RNDU</a></code> <sup><sub>[VALUE]</sub></sup><a name="rndu-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND Up, toward positive infinity.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/big-float/impl-sbcl.lisp#L96-L98">RNDZ</a></code> <sup><sub>[VALUE]</sub></sup><a name="rndz-value"></a>
<code><a href="#roundingmode-type"><code>ROUNDINGMODE</code></a></code>

RouND toward Zero.



***

# Package `COALTON-LIBRARY/BITS`<a name="coalton-library/bits-package"></a>

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L30-L41">BITS</a></code> <sup><sub>[CLASS]</sub></sup><a name="bits-class"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L44-L47">(DPB NEWBYTE SIZE POSITION BITSTRING)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="dpb-value"></a>
<code>&forall; :A. <a href="#bits-class">BITS</a> :A &rArr; (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; :A)</code>

Deposits a byte `newbyte` of size `size` into a bitstring `bitstring` at a position `position`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp#L50-L53">(LDB SIZE POSITION BITSTRING)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ldb-value"></a>
<code>&forall; :A. <a href="#bits-class">BITS</a> :A &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; :A)</code>

Deposits a byte of size `size` into a bitstring at a position `position`.



***

# Package `COALTON-LIBRARY/BUILTIN`<a name="coalton-library/builtin-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L56-L60">(BOOLEAN-AND X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-and-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Are both `x` and `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `and` macro for short-circuiting behavior.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L42-L46">(BOOLEAN-NOT X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-not-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

The logical negation of `x`. Is `x` false?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L49-L53">(BOOLEAN-OR X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-or-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is either `x` or `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `or` macro for short-circuiting behavior.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L63-L67">(BOOLEAN-XOR X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-xor-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Are `x` or `y` true, but not both?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L33-L35">(NOT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="not-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Synonym for `boolean-not`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L29-L31">(UNDEFINED _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="undefined-value"></a>
<code>&forall; :A :B. (:A &rarr; :B)</code>

A function which can be used in place of any value, throwing an error at runtime.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp#L37-L39">(XOR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="xor-value"></a>
<code>(<a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Synonym for `boolean-xor`.



***

# Package `COALTON-LIBRARY/CELL`<a name="coalton-library/cell-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L41-L42">CELL</a></code> <sup><sub>[TYPE]</sub></sup><a name="cell-type"></a>

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L102-L104">(DECREMENT! CEL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="decrement!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Subtract one from the contents of CEL, storing and returning the new value



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L97-L99">(INCREMENT! CEL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="increment!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Add one to the contents of CEL, storing and returning the new value



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L45-L48">(NEW DATA)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#cell-type"><code>CELL</code></a> :A))</code>

Create a new mutable cell



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L87-L93">(POP! CEL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove and return the first element of the list in CEL.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L82-L84">(PUSH! CEL NEW-ELT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="push!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Push NEW-ELT onto the start of the list in CEL.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L51-L54">(READ CEL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="read-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Read the value of a mutable cell



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L57-L62">(SWAP! CEL DATA)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="swap!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A &rarr; :A)</code>

Replace the value of a mutable cell with a new value, then return the old value



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L71-L73">(UPDATE! F CEL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="update!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Apply F to the contents of CEL, storing and returning the result



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L76-L78">(UPDATE-SWAP! F CEL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="update-swap!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A)</code>

Apply F to the contents of CEL, swapping the result for the old value



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp#L65-L68">(WRITE! CEL DATA)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="write!-value"></a>
<code>&forall; :A. ((<a href="#cell-type"><code>CELL</code></a> :A) &rarr; :A &rarr; :A)</code>

Set the value of a mutable cell, returning the new value



***

# Package `COALTON-LIBRARY/CHAR`<a name="coalton-library/char-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L71-L74">(ALPHA? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="alpha?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C an alphabetic character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L77-L82">(ASCII-ALPHA? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ascii-alpha?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C an ASCII alphabetic character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L97-L100">(ASCII-ALPHANUMERIC? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ascii-alphanumeric?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C an ASCII alphanumeric character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L91-L94">(ASCII-DIGIT? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ascii-digit?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C an ASCII digit character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L122-L126">(ASCII-LOWERCASE? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ascii-lowercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C an ASCII lowercase character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L109-L113">(ASCII-UPPERCASE? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ascii-uppercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C an ASCII uppercase character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L38-L41">(CHAR-CODE CHAR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="char-code-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Convert a character to its ASCII representation.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L50-L56">(CODE-CHAR CODE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="code-char-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Convert a number to its ASCII character, returning None on failure.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L85-L88">(DIGIT? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="digit?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C a digit character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L135-L138">(DOWNCASE C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="downcase-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a>)</code>

Returns the downcased version of C, returning C when there is none.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L116-L119">(LOWERCASE? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="lowercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C a lowercase character?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L141-L148">(RANGE START END)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="range-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

An inclusive range of characters from START to END by cl:char-code.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L129-L132">(UPCASE C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="upcase-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a>)</code>

Returns the upcased version of C, returning C when there is none.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/char.lisp#L103-L106">(UPPERCASE? C)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="uppercase?-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is C an uppercase character?



***

# Package `COALTON-LIBRARY/CLASSES`<a name="coalton-library/classes-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L74-L77">OPTIONAL</a></code> <sup><sub>[TYPE]</sub></sup><a name="optional-type"></a>

Represents something that may not have a value.

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
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L115-L119">ORD</a></code> <sup><sub>[TYPE]</sub></sup><a name="ord-type"></a>

The result of an ordered comparison.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#ord-type"><code>ORD</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ord-type"><code>ORD</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ord-type"><code>ORD</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L79-L85">RESULT</a></code> <sup><sub>[TYPE]</sub></sup><a name="result-type"></a>

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
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>

</details>



***

### Structs

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L69-L72">TUPLE :A :B</a></code> <sup><sub>[STRUCT]</sub></sup><a name="tuple-type"></a>
- <code>FIRST :: :A</code>
- <code>SECOND :: :B</code>

A heterogeneous collection of items.

<details>
<summary>Instances</summary>

- <code>(<a href="#default-class">DEFAULT</a> :A) (<a href="#default-class">DEFAULT</a> :B) &rArr; <a href="#default-class">DEFAULT</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#bifunctor-class">BIFUNCTOR</a> <a href="#tuple-type"><code>TUPLE</code></a></code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#map-type"><code>MAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#map-type"><code>MAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>

</details>



***

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L226-L229">ALTERNATIVE</a></code> <sup><sub>[CLASS]</sub></sup><a name="alternative-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#alternative-class">ALTERNATIVE</a> :A</code>


Types which are monoids on applicative functors.

Methods:
- <code>ALT :: ((:A :B) &rarr; (:A :B) &rarr; (:A :B))</code>
- <code>EMPTY :: (:A :C)</code>
<details>
<summary>Instances</summary>

- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L204-L207">APPLICATIVE</a></code> <sup><sub>[CLASS]</sub></sup><a name="applicative-class"></a>
<code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> :A</code>


Types which are a functor which can embed pure expressions and sequence operations.

Methods:
- <code>PURE :: (:A &rarr; (:B :A))</code>
- <code>LIFTA2 :: ((:C &rarr; :D &rarr; :E) &rarr; (:B :C) &rarr; (:B :D) &rarr; (:B :E))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#cell-type"><code>CELL</code></a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L257-L259">BIFUNCTOR</a></code> <sup><sub>[CLASS]</sub></sup><a name="bifunctor-class"></a>
<code><a href="#bifunctor-class">BIFUNCTOR</a> :A</code>


Types which take two type arguments and are functors on both.

Methods:
- <code>BIMAP :: ((:A &rarr; :B) &rarr; (:C &rarr; :D) &rarr; ((:E :A) :C) &rarr; ((:E :B) :D))</code>
<details>
<summary>Instances</summary>

- <code><a href="#bifunctor-class">BIFUNCTOR</a> <a href="#result-type"><code>RESULT</code></a></code>
- <code><a href="#bifunctor-class">BIFUNCTOR</a> <a href="#tuple-type"><code>TUPLE</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L356-L358">DEFAULT</a></code> <sup><sub>[CLASS]</sub></sup><a name="default-class"></a>
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
- <code><a href="#default-class">DEFAULT</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#default-class">DEFAULT</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L91-L93">EQ</a></code> <sup><sub>[CLASS]</sub></sup><a name="eq-class"></a>
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
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> <a href="#color-type"><code>COLOR</code></a></code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
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
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Eq only compares the primal component.
- <code><a href="#eq-class">EQ</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#eq-class">EQ</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L231-L234">FOLDABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="foldable-class"></a>
<code><a href="#foldable-class">FOLDABLE</a> :A</code>


Types which can be folded into a single element.

Methods:
- <code>FOLD :: ((:A &rarr; :B &rarr; :A) &rarr; :A &rarr; (:C :B) &rarr; :A)</code><br/>A left tail-recursive fold.
- <code>FOLDR :: ((:D &rarr; :E &rarr; :E) &rarr; :E &rarr; (:C :D) &rarr; :E)</code><br/>A right non-tail-recursive fold.
<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">FOLDABLE</a> :A &rArr; <a href="#foldable-class">FOLDABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#tree-type"><code>TREE</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#queue-type"><code>QUEUE</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#slice-type"><code>SLICE</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#vector-type"><code>VECTOR</code></a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#list-type"><code>LIST</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L200-L202">FUNCTOR</a></code> <sup><sub>[CLASS]</sub></sup><a name="functor-class"></a>
<code><a href="#functor-class">FUNCTOR</a> :A</code>


Types which can map an inner type where the mapping adheres to the identity and composition laws.

Methods:
- <code>MAP :: ((:A &rarr; :B) &rarr; (:C :A) &rarr; (:C :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> <a href="#seq-type"><code>SEQ</code></a></code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#map-type"><code>MAP</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L275-L277">INTO</a></code> <sup><sub>[CLASS]</sub></sup><a name="into-class"></a>
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
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#into-class">INTO</a> :A <a href="#creal-type"><code>CREAL</code></a>) &rArr; <a href="#into-class">INTO</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A) (<a href="#complex-type"><code>COMPLEX</code></a> <a href="#creal-type"><code>CREAL</code></a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
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
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
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
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#char-type"><code>CHAR</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type"><code>STRING</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type"><code>RESULT</code></a> :A :B) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; <a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#into-class">INTO</a> (<a href="#cell-type"><code>CELL</code></a> :A) :A</code>
- <code><a href="#into-class">INTO</a> :A (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#dyadic-type"><code>DYADIC</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type"><code>U16</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type"><code>U8</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L279-L280">ISO</a></code> <sup><sub>[CLASS]</sub></sup><a name="iso-class"></a>
<code>(<a href="#into-class">INTO</a> :A :B) (<a href="#into-class">INTO</a> :B :A) &rArr; <a href="#iso-class">ISO</a> :A :B</code>


Opting into this marker typeclass imples that the instances for `(Into :a :b)` and `(Into :b :a)` form a bijection.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#iso-class">ISO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type"><code>LIST</code></a> <a href="#char-type"><code>CHAR</code></a>) <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type"><code>RESULT</code></a> <a href="#unit-type"><code>UNIT</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :B :A)</code>
- <code><a href="#iso-class">ISO</a> :A :A</code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L209-L211">MONAD</a></code> <sup><sub>[CLASS]</sub></sup><a name="monad-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#monad-class">MONAD</a> :A</code>


Types which are monads as defined in Haskell. See https://wiki.haskell.org/Monad for more information.

Methods:
- <code>&gt;&gt;= :: ((:A :B) &rarr; (:B &rarr; (:A :C)) &rarr; (:A :C))</code>
<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monad-class">MONAD</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#st-type"><code>ST</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#list-type"><code>LIST</code></a></code>
- <code><a href="#monad-class">MONAD</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>
- <code><a href="#monad-class">MONAD</a> (<a href="#arrow-type"><code>ARROW</code></a> :A)</code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L223-L224">MONADFAIL</a></code> <sup><sub>[CLASS]</sub></sup><a name="monadfail-class"></a>
<code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monadfail-class">MONADFAIL</a> :A</code>

Methods:
- <code>FAIL :: (<a href="#string-type"><code>STRING</code></a> &rarr; (:A :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#monadfail-class">MONADFAIL</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L196-L198">MONOID</a></code> <sup><sub>[CLASS]</sub></sup><a name="monoid-class"></a>
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
- <code><a href="#monoid-class">MONOID</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#result-type"><code>RESULT</code></a> :B :A)</code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> <a href="#hash-type"><code>HASH</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L100-L105">NUM</a></code> <sup><sub>[CLASS]</sub></sup><a name="num-class"></a>
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
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#num-class">NUM</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L142-L144">ORD</a></code> <sup><sub>[CLASS]</sub></sup><a name="ord-class"></a>
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
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Ord only compares the primal component.
- <code><a href="#ord-class">ORD</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#ord-class">ORD</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L192-L194">SEMIGROUP</a></code> <sup><sub>[CLASS]</sub></sup><a name="semigroup-class"></a>
<code><a href="#semigroup-class">SEMIGROUP</a> :A</code>


Types with an associative binary operation defined.

Methods:
- <code>&lt;&gt; :: (:A &rarr; :A &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#pathname-type"><code>PATHNAME</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#seq-type"><code>SEQ</code></a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L53-L55">SIGNALABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="signalable-class"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L251-L252">TRAVERSABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="traversable-class"></a>
<code><a href="#traversable-class">TRAVERSABLE</a> :A</code>

Methods:
- <code>TRAVERSE :: <a href="#applicative-class">APPLICATIVE</a> :A &rArr; ((:B &rarr; (:A :C)) &rarr; (:D :B) &rarr; (:A (:D :C)))</code>
<details>
<summary>Instances</summary>

- <code><a href="#traversable-class">TRAVERSABLE</a> :A &rArr; <a href="#traversable-class">TRAVERSABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type"><code>LIST</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L285-L287">TRYINTO</a></code> <sup><sub>[CLASS]</sub></sup><a name="tryinto-class"></a>
<code><a href="#tryinto-class">TRYINTO</a> :A :B :C</code>


`TRY-INTO` implies some elements of `:a` can be represented exactly by an element of `:b`, but sometimes not. If not, an error of type `:c` is returned.

Methods:
- <code>TRYINTO :: (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> :B :C))</code>
<details>
<summary>Instances</summary>

- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type"><code>STRING</code></a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type"><code>U32</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type"><code>UFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type"><code>U64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#string-type"><code>STRING</code></a></code>
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
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#string-type"><code>STRING</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L295-L311">UNWRAPPABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="unwrappable-class"></a>
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
- <code>UNWRAP-OR-ELSE :: ((:A &rarr; :B) &rarr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; :B) &rarr; (:C :A) &rarr; :B)</code>
<details>
<summary>Instances</summary>

- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type"><code>RESULT</code></a> :A)</code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type"><code>OPTIONAL</code></a></code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L154-L158">(&lt; X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="<-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` less than `y`?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L168-L172">(&lt;= X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="<=-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` less than or equal to `y`?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L147-L151">(&gt; X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name=">-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` greater than `y`?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L161-L165">(&gt;= X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name=">=-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` greater than or equal to `y`?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L214-L216">(&gt;&gt; A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name=">>-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">MONAD</a> :A &rArr; ((:A :B) &rarr; (:A :C) &rarr; (:A :C))</code>

Equivalent to `(>>= a (fn (_) b))`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L345-L349">(AS-OPTIONAL CONTAINER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="as-optional-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((:A :B) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Convert any Unwrappable container into an `Optional`, constructing Some on a successful unwrap and None on a failed unwrap.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L369-L371">(DEFAULT? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="default?-value"></a>
<code>&forall; :A. (<a href="#default-class">DEFAULT</a> :A) (<a href="#eq-class">EQ</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` the default item of its type?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L362-L366">(DEFAULTING-UNWRAP CONTAINER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="defaulting-unwrap-value"></a>
<code>&forall; :A :B. (<a href="#unwrappable-class">UNWRAPPABLE</a> :A) (<a href="#default-class">DEFAULT</a> :B) &rArr; ((:A :B) &rarr; :B)</code>

Unwrap an `unwrappable`, returning `(default)` of the wrapped type on failure. 



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L317-L321">(EXPECT REASON CONTAINER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="expect-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; (<a href="#string-type"><code>STRING</code></a> &rarr; (:A :B) &rarr; :B)</code>

Unwrap `container`, signaling an error with the description `reason` on failure.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L219-L221">(JOIN M)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="join-value"></a>
<code>&forall; :A :B. <a href="#monad-class">MONAD</a> :A &rArr; ((:A (:A :B)) &rarr; (:A :B))</code>

Equivalent to `(>>= m id)`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L262-L264">(MAP-FST F B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="map-fst-value"></a>
<code>&forall; :A :B :C :D. <a href="#bifunctor-class">BIFUNCTOR</a> :C &rArr; ((:A &rarr; :B) &rarr; (:C :A :D) &rarr; (:C :B :D))</code>

Map over the first argument of a `Bifunctor`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L267-L269">(MAP-SND F B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="map-snd-value"></a>
<code>&forall; :A :B :C :D. <a href="#bifunctor-class">BIFUNCTOR</a> :C &rArr; ((:A &rarr; :B) &rarr; (:C :D :A) &rarr; (:C :D :B))</code>

Map over the second argument of a `Bifunctor`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L175-L179">(MAX X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="max-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the greater element of `x` and `y`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L247-L249">(MCOMMUTE? A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="mcommute?-value"></a>
<code>&forall; :A. (<a href="#eq-class">EQ</a> :A) (<a href="#semigroup-class">SEMIGROUP</a> :A) &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Does `a <> b` equal `b <> a`?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L237-L239">(MCONCAT A)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="mconcat-value"></a>
<code>&forall; :A :B. (<a href="#foldable-class">FOLDABLE</a> :A) (<a href="#monoid-class">MONOID</a> :B) &rArr; ((:A :B) &rarr; :B)</code>

Fold a container of monoids into a single element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L242-L244">(MCONCATMAP F A)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="mconcatmap-value"></a>
<code>&forall; :A :B :C. (<a href="#foldable-class">FOLDABLE</a> :C) (<a href="#monoid-class">MONOID</a> :B) &rArr; ((:A &rarr; :B) &rarr; (:C :A) &rarr; :B)</code>

Map a container to a container of monoids, and then fold that container into a single element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L182-L186">(MIN X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="min-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the lesser element of `x` and `y`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L255-L255">(SEQUENCE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sequence-value"></a>
<code>&forall; :A :B :C. (<a href="#traversable-class">TRAVERSABLE</a> :A) (<a href="#applicative-class">APPLICATIVE</a> :B) &rArr; ((:A (:B :C)) &rarr; (:B (:A :C)))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L326-L332">(UNWRAP CONTAINER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="unwrap-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((:A :B) &rarr; :B)</code>

Unwrap `container`, signaling an error on failure.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp#L338-L342">(WITH-DEFAULT DEFAULT CONTAINER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-default-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :B &rArr; (:A &rarr; (:B :A) &rarr; :A)</code>

Unwrap `container`, returning `default` on failure.



***

# Package `COALTON-LIBRARY/COMPUTABLE-REALS`<a name="coalton-library/computable-reals-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L37-L37">CREAL</a></code> <sup><sub>[TYPE]</sub></sup><a name="creal-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#eq-class">EQ</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type"><code>FRACTION</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type"><code>I16</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type"><code>I32</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type"><code>I64</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type"><code>I8</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type"><code>IFIX</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L292-L299">(APPROX X K)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="approx-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Computes an approximation of the bits of a given `Creal`. Specifically, given an object of type `Creal` `X` and a non-negative integer `K`, return an integer `A` with

    `|A*2^(-k) - X| <= 2^(-K)`.

See `rational` or `rationalize` to produce a rational approximation of `Creal`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L47-L52">(COMPARISON-THRESHOLD _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="comparison-threshold-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the current `Creal` comparison threshold measured as a number of bits after the 'decimal' point.

This threshold is used to ensure `Eq` and `Ord` instances terminate. (In general computable real arithmetic is undecidable.) Note that if the production of a `Creal` depends on comparison, *there is no guarantee that the `Creal` will be accurate to any precision*.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L327-L330">(CR-PRINT X K)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="cr-print-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Prints a real `R` up to `K` bits of precision.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L302-L307">(RATIONAL-APPROX X K)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="rational-approx-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Produce a rational approximation of `X` called `R` such that

    `|R - X| < 2^(-K)`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L310-L318">(RATIONALIZE X K)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="rationalize-value"></a>
<code>(<a href="#creal-type"><code>CREAL</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Produce a rational approximation of `X` called `R` such that

    `|R - X| < 2^(-K)`,

   taking into account the maximum precision specified by `K` to return
   the simplest possible such approximation.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/computable-reals/computable-reals.lisp#L39-L45">(SET-COMPARISON-THRESHOLD! K)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set-comparison-threshold!-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sets the global `Creal` comparison threshold to k bits after the 'decimal' point.

See `comparison-threshold` for more details.



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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L144-L149">FILEERROR</a></code> <sup><sub>[TYPE]</sub></sup><a name="fileerror-type"></a>
- <code>(PATHERROR <a href="#string-type"><code>STRING</code></a> <a href="#pathname-type"><code>PATHNAME</code></a> )</code>
- <code>(LISPERROR <a href="#lispcondition-type"><code>LISPCONDITION</code></a> )</code>
- <code>EOF</code>

Errors for file functions.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fileerror-type"><code>FILEERROR</code></a></code>
- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#fileerror-type"><code>FILEERROR</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L354-L355">FILESTREAM</a></code> <sup><sub>[TYPE]</sub></sup><a name="filestream-type"></a>

Represents a file stream, using `cl:file-stream`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#filestream-type"><code>FILESTREAM</code></a> :A)</code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L358-L363">IFEXISTS</a></code> <sup><sub>[TYPE]</sub></sup><a name="ifexists-type"></a>

Possible options for opening a stream when the file exists.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ifexists-type"><code>IFEXISTS</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L115-L116">PATHNAME</a></code> <sup><sub>[TYPE]</sub></sup><a name="pathname-type"></a>

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L365-L369">STREAMOPTIONS</a></code> <sup><sub>[TYPE]</sub></sup><a name="streamoptions-type"></a>

A type for providing parameters for opening streams. StreamOptions take strings for pathnames, but they will error if they are not proper and appropriate pathnames.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#streamoptions-type"><code>STREAMOPTIONS</code></a></code>

</details>



***

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L493-L497">FILE</a></code> <sup><sub>[CLASS]</sub></sup><a name="file-class"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L433-L436">(ABORT STREAM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="abort-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Closes a FileStream and aborts all operations..



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L692-L696">(APPEND-TO-FILE! PATH DATA)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="append-to-file!-value"></a>
<code>&forall; :A :B. (<a href="#runtimerepr-class">RUNTIMEREPR</a> :B) (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#file-class">FILE</a> :B) &rArr; (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :B) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Opens and appends a file with data of type :a.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L427-L430">(CLOSE STREAM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="close-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Closes a FileStream.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L329-L337">(COPY! INPUT OUTPUT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="copy!-value"></a>
<code>&forall; :A :B. (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#into-class">INTO</a> :B <a href="#pathname-type"><code>PATHNAME</code></a>) &rArr; (:A &rarr; :B &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Copies a file to a new location.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L263-L268">(CREATE-DIRECTORY! PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="create-directory!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

This is equivalent to `mkdir -p`. Creates a directory and its parents. The pathname must be a valid directory pathname.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L646-L648">(CREATE-TEMP-DIRECTORY! _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="create-temp-directory!-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

This configures a default temporary directory for use.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L651-L657">(CREATE-TEMP-FILE! FILE-EXT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="create-temp-file!-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

This configures a default temporary file for use.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L340-L345">(DELETE-FILE! PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="delete-file!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Deletes a given file if the file exists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L216-L222">(DIRECTORY-EXISTS? PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="directory-exists?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Returns True if a pathname names a directory that exists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L273-L278">(DIRECTORY-FILES PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="directory-files-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>)))</code>

Returns all files within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L183-L187">(DIRECTORY-PATHNAME? PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="directory-pathname?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if a pathname has no file component.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L293-L298">(EMPTY? PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Checks whether a directory is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L197-L201">(EXISTS? PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="exists?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Returns whether a file or directory exists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L225-L233">(FILE-EXISTS? PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="file-exists?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>))</code>

Returns True if a pathname names a file that exists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L190-L194">(FILE-PATHNAME? PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="file-pathname?-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if a pathname has a file component.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L476-L479">(FILE-POSITION STREAM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="file-position-value"></a>
<code>&forall; :A. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Finds the file-position of a file stream.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L470-L473">(FLUSH STREAM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="flush-value"></a>
<code>&forall; :A :B. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Blocks until `stream` has been flushed. Calls `cl:finish-output`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L242-L249">(MERGE PATH1 PATH2)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="merge-value"></a>
<code>&forall; :A :B. (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#into-class">INTO</a> :B <a href="#pathname-type"><code>PATHNAME</code></a>) &rArr; (:A &rarr; :B &rarr; <a href="#pathname-type"><code>PATHNAME</code></a>)</code>

Merges two pathnames together. The directory pathname should be the first argument.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L439-L444">(READ-CHAR STREAM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="read-char-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Reads a character from an FileStream.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L718-L722">(READ-FILE-LINES PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="read-file-lines-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>)))</code>

Reads a file into lines, given a pathname or string.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L711-L715">(READ-FILE-TO-STRING PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="read-file-to-string-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Reads a file into a string, given a pathname string.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L571-L581">(READ-FILE-TO-VECTOR STREAM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="read-file-to-vector-value"></a>
<code>&forall; :A. (<a href="#runtimerepr-class">RUNTIMEREPR</a> :A) (<a href="#file-class">FILE</a> :A) &rArr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#vector-type"><code>VECTOR</code></a> :A)))</code>

Reads a file into a vector of type `:a`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L556-L566">(READ-VECTOR STREAM CHUNK-SIZE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="read-vector-value"></a>
<code>&forall; :A. <a href="#file-class">FILE</a> :A &rArr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#vector-type"><code>VECTOR</code></a> :A)))</code>

Reads a chunk of a file into a vector of type `:a`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L301-L305">(REMOVE-DIRECTORY! PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-directory!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :A))</code>

Deletes an empty directory.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L308-L313">(REMOVE-DIRECTORY-RECURSIVE! PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-directory-recursive!-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Deletes a target directory recursively. Equivalent to `rm -r`. Errors if the path is not a directory.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L482-L485">(SET-FILE-POSITION STREAM I)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set-file-position-value"></a>
<code>&forall; :A. ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Sets the file position of a file stream.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L281-L286">(SUBDIRECTORIES PATH)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="subdirectories-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a> &rArr; (:A &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> (<a href="#list-type"><code>LIST</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>)))</code>

Returns all subdirectories within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L316-L320">(SYSTEM-RELATIVE-PATHNAME SYSTEM-NAME NAME)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="system-relative-pathname-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; (:A &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#pathname-type"><code>PATHNAME</code></a>))</code>

Generates a system-relative-pathname for a given filename or path. This is a wrapper for `asdf:system-relative-pathname`. `Name` will likely be an empty string unless a subdirectory or filename is specified.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L546-L550">(WITH-OPEN-FILE STREAM-OPTIONS THUNK)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-open-file-value"></a>
<code>&forall; :A :B. <a href="#file-class">FILE</a> :A &rArr; (<a href="#streamoptions-type"><code>STREAMOPTIONS</code></a> &rarr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B)) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Opens a file stream, performs `thunk` on it, then closes the stream.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L673-L678">(WITH-TEMP-DIRECTORY THUNK)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-temp-directory-value"></a>
<code>&forall; :A. ((<a href="#pathname-type"><code>PATHNAME</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :A)) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :A))</code>

Performs an operation `thunk` inside a temporary directory.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L663-L670">(WITH-TEMP-FILE FILE-TYPE THUNK)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-temp-file-value"></a>
<code>&forall; :A :B. <a href="#file-class">FILE</a> :A &rArr; (<a href="#string-type"><code>STRING</code></a> &rarr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B)) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> :B))</code>

Performs an operation `thunk` on a temporary file. File type extensions need to include `.`, like ".txt".



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L447-L450">(WRITE-CHAR STREAM DATA)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="write-char-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; <a href="#char-type"><code>CHAR</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes a `Char` to the stream.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L599-L602">(WRITE-LINE STREAM S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="write-line-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes a string with an appended newline to a filestream of type Char.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L594-L596">(WRITE-STRING FS S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="write-string-value"></a>
<code>((<a href="#filestream-type"><code>FILESTREAM</code></a> <a href="#char-type"><code>CHAR</code></a>) &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes a `string` to a FileStream of type Char.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L704-L708">(WRITE-TO-FILE! PATH DATA)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="write-to-file!-value"></a>
<code>&forall; :A :B. (<a href="#runtimerepr-class">RUNTIMEREPR</a> :B) (<a href="#into-class">INTO</a> :A <a href="#pathname-type"><code>PATHNAME</code></a>) (<a href="#file-class">FILE</a> :B) &rArr; (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :B) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Opens and writes to a file with data of type :a. Supersedes existing data on the file.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/file.lisp#L587-L591">(WRITE-VECTOR STREAM V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="write-vector-value"></a>
<code>&forall; :A. (<a href="#runtimerepr-class">RUNTIMEREPR</a> :A) (<a href="#file-class">FILE</a> :A) &rArr; ((<a href="#filestream-type"><code>FILESTREAM</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#result-type"><code>RESULT</code></a> <a href="#fileerror-type"><code>FILEERROR</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Writes elements of an vector of type `:a` to a stream of type `:a`.



***

# Package `COALTON-LIBRARY/FUNCTIONS`<a name="coalton-library/functions-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L154-L156">(/= A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="/=-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `a` not equal to `b`?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L149-L151">(ASUM XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="asum-value"></a>
<code>&forall; :A :B :C. (<a href="#alternative-class">ALTERNATIVE</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A (:B :C)) &rarr; (:B :C))</code>

Fold over a list using `alt`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L191-L200">(BRACKET INIT EXIT BODY)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="bracket-value"></a>
<code>&forall; :A :B :C :D. <a href="#monad-class">MONAD</a> :A &rArr; ((:A :B) &rarr; (:B &rarr; (:A :C)) &rarr; (:B &rarr; (:A :D)) &rarr; (:A :D))</code>

Bracket takes an initial state, performs a body of operations, and then forces a safe exit.

This wraps `cl:unwind-protect`.

Modeled after Haskell: https://wiki.haskell.org/Bracket_pattern



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L118-L120">(COMPLEMENT F X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="complement-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Compute the complement of a unary Boolean function.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L101-L105">(COMPOSE F G)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="compose-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (:C &rarr; :A) &rarr; :C &rarr; :B)</code>

Produces a function equivalent to applying `g` followed by `f`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L108-L110">(CONJOIN F G X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="conjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Compute the conjunction of two unary Boolean functions.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L82-L84">(CONST A _B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="const-value"></a>
<code>&forall; :A :B. (:A &rarr; :B &rarr; :A)</code>

A function that always returns its first argument.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L123-L125">(CURRY FUNC LEFT RIGHT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="curry-value"></a>
<code>&forall; :A :B :C. (((<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :C) &rarr; :A &rarr; :B &rarr; :C)</code>

Take a function whose input is a tuple and enable curried application of the left and right parameters, equivalent to `(func (Tuple left right))`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L113-L115">(DISJOIN F G X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="disjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Compute the disjunction of two unary Boolean functions.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L65-L74">(FIX F N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="fix-value"></a>
<code>&forall; :A :B. (((:A &rarr; :B) &rarr; :A &rarr; :B) &rarr; :A &rarr; :B)</code>

Compute the fixed point of a unary function. This is equivalent to the Y-combinator of the lambda calculus. This combinator allows recursion without specific assignment of names. For example, the factorial function can be written

    (define fact
      (fix
        (fn (f n)
          (if (== n 0)
            1
            (* n (f (- n 1)))))))



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L87-L89">(FLIP F X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="flip-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; :B &rarr; :A &rarr; :C)</code>

Returns a function that takes its arguments in reverse order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L77-L79">(ID X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="id-value"></a>
<code>&forall; :A. (:A &rarr; :A)</code>

A function that always returns its argument.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L144-L146">(MSUM XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="msum-value"></a>
<code>&forall; :A :B. (<a href="#monoid-class">MONOID</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A :B) &rarr; :B)</code>

Fold over a list using `<>`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L135-L137">(PAIR-WITH FUNC LEFT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pair-with-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :B))</code>

Create a `Tuple` of the form `(Tuple left (func left))`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L51-L53">(PRINT ITEM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="print-value"></a>
<code>&forall; :A. <a href="#into-class">INTO</a> :A <a href="#string-type"><code>STRING</code></a> &rArr; (:A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Print the String representation of `item` to `cl:*standard-output*`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L92-L94">(REDUCE F Y XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="reduce-value"></a>
<code>&forall; :A :B :C. <a href="#foldable-class">FOLDABLE</a> :C &rArr; ((:A &rarr; :B &rarr; :B) &rarr; :B &rarr; (:C :A) &rarr; :B)</code>

The same as `fold` but with the argument order swapped to match `cl:reduce`



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L37-L41">(TRACE STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="trace-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Print a line to `cl:*standard-output*`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L44-L48">(TRACEOBJECT STR ITEM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="traceobject-value"></a>
<code>&forall; :A. (<a href="#string-type"><code>STRING</code></a> &rarr; :A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Print a line to `cl:*standard-output*` in the form "{STR}: {ITEM}".



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L128-L132">(UNCURRY FUNC TPL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="uncurry-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :C)</code>

Take a function with two currying parameters and enable their input as a single `Tuple`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp#L56-L58">(UNSAFE-POINTER-EQ? A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="unsafe-pointer-eq?-value"></a>
<code>&forall; :A. (:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>


***

# Package `COALTON-LIBRARY/HASH`<a name="coalton-library/hash-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L32-L33">HASH</a></code> <sup><sub>[TYPE]</sub></sup><a name="hash-type"></a>

Implementation dependent hash code

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

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L35-L39">HASH</a></code> <sup><sub>[CLASS]</sub></sup><a name="hash-class"></a>
<code><a href="#eq-class">EQ</a> :A &rArr; <a href="#hash-class">HASH</a> :A</code>


Types which can be hashed for storage in hash tables.

The hash function must satisfy the invariant that `(== left right)` implies `(== (hash left) (hash right))`.

Methods:
- <code>HASH :: (:A &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) (<a href="#hash-class">HASH</a> :E) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>  
Note: Hash only considers the primal component in order to be consistent with Eq.
- <code><a href="#hash-class">HASH</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#hash-class">HASH</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
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

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L42-L57">(COMBINE-HASHES LHS RHS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="combine-hashes-value"></a>
<code>(<a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.lisp#L60-L62">(COMBINE-HASHES-ORDER-INDEPENDENT LHS RHS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="combine-hashes-order-independent-value"></a>
<code>(<a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a> &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>


***

# Package `COALTON-LIBRARY/HASHTABLE`<a name="coalton-library/hashtable-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L39-L40">HASHTABLE</a></code> <sup><sub>[TYPE]</sub></sup><a name="hashtable-type"></a>

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L109-L112">(COUNT TABLE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="count-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Returns the number of entries in TABLE



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L115-L126">(ENTRIES TABLE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Returns the key-values pairs as a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L160-L167">(EXTEND! TABLE ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B :C. (<a href="#hash-class">HASH</a> :A) (<a href="#intoiterator-class">INTOITERATOR</a> :C (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)) &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :C &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Insert all of the key value pairs from ITER into TABLE, overwriting duplicate keys.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L83-L90">(GET TABLE KEY)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="get-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Lookup KEY in TABLE



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L129-L141">(KEYS TABLE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Returns the keys in TABLE as a list



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L77-L80">(NEW _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B))</code>

Create a new empty hashtable



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L101-L106">(REMOVE! TABLE KEY)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Remove the entry at KEY from TABLE



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L93-L98">(SET! TABLE KEY VALUE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; :A &rarr; :B &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set KEY to VALUE in TABLE



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L144-L156">(VALUES TABLE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Returns the values in TABLE as a list



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L70-L74">(WITH-CAPACITY CAPACITY)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#integer-type"><code>INTEGER</code></a> &rarr; (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B))</code>

Create a new empty hashtable with a given capacity



***

# Package `COALTON-LIBRARY/ITERATOR`<a name="coalton-library/iterator-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L85-L87">ITERATOR</a></code> <sup><sub>[TYPE]</sub></sup><a name="iterator-type"></a>
- <code>(%ITERATOR (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A)) (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>) )</code>

A forward-moving pointer into an ordered sequence of :ELTs

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> <a href="#iterator-type"><code>ITERATOR</code></a></code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A)</code>

</details>



***

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L628-L629">FROMITERATOR</a></code> <sup><sub>[CLASS]</sub></sup><a name="fromiterator-class"></a>
<code><a href="#fromiterator-class">FROMITERATOR</a> :A :B</code>

Methods:
- <code>COLLECT! :: ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; :B)</code>
<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#seq-type"><code>SEQ</code></a> :A) :A</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#map-type"><code>MAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#tree-type"><code>TREE</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A) :A</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#slice-type"><code>SLICE</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> <a href="#string-type"><code>STRING</code></a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> (<a href="#list-type"><code>LIST</code></a> :A) :A</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> :A :B &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#result-type"><code>RESULT</code></a> :C :A) (<a href="#result-type"><code>RESULT</code></a> :C :B)</code>
- <code><a href="#fromiterator-class">FROMITERATOR</a> :A :B &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)</code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L141-L145">INTOITERATOR</a></code> <sup><sub>[CLASS]</sub></sup><a name="intoiterator-class"></a>
<code><a href="#intoiterator-class">INTOITERATOR</a> :A :B</code>


Containers which can be converted into iterators.

`INTO-ITER` must not mutate its argument, only produce a "view" into it.

Methods:
- <code>INTO-ITER :: (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#seq-type"><code>SEQ</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#map-type"><code>MAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#tree-type"><code>TREE</code></a> :A) :A</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A) :A</code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L454-L465">(AND! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="and!-value"></a>
<code>((<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if all iterator elements are True. May not consume the entire iterator. Returns True on an empty iterator.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L584-L590">(ANY! GOOD? ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="any!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Return `True` as soon as any element of ITER is GOOD?, or `False` if none of them are.

Returns `False` if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L393-L404">(CHAIN! ITER1 ITER2)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="chain!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield all the elements of ITER1 followed by all the elements from ITER2.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L486-L490">(COUNT! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="count!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Return the number of elements in ITER.
This operation could be called `length!`, but `count!` emphasizes the fact that it consumes ITER, and
afterwards, ITER will be exhausted.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L221-L225">(COUNT-FOREVER _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="count-forever-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An infinite iterator which starts at 0 and counts upwards by 1.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L216-L218">(DOWN-FROM LIMIT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="down-from-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins below the provided limit and counts down through and including zero.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L613-L622">(ELEMENTWISE-HASH! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="elementwise-hash!-value"></a>
<code>&forall; :A. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#hash-type"><code>HASH</code></a>)</code>

Hash an iterator by combining the hashes of all its elements.

The empty iterator will hash as 0.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L593-L602">(ELEMENTWISE-MATCH! SAME? LEFT RIGHT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="elementwise-match!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Are LEFT and RIGHT elementwise-identical under SAME?

True if, for every pair of elements (A B) in (LEFT RIGHT), (same? A B) is True, and LEFT and RIGHT have the
same length.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L605-L610">(ELEMENTWISE==!)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="elementwise==!-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is every element of the first iterator `==' to the corresponding element of the second?

True if two iterators have the same length, and for every N, the Nth element of the first iterator is `==' to
the Nth element of the second iterator.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L320-L322">(ENUMERATE! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="enumerate!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> <a href="#ufix-type"><code>UFIX</code></a> :A)))</code>

Pair successive zero-based incides with elements from ITER



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L575-L581">(EVERY! GOOD? ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="every!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Return `True` if every element of ITER is GOOD?, or `False` as soon as any element is not GOOD?.

Returns `True` if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L325-L333">(FILTER! KEEP? ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="filter!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Return an iterator over the elements from ITER for which KEEP?returns true.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L336-L349">(FILTER-MAP! F ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="filter-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Map an iterator, retaining only the elements where F returns SOME.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L501-L507">(FIND! THIS? ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="find!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the first element of ITER for which THIS? returns `True`, or `None` if no element matches.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L510-L512">(FIND-MAP! F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="find-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Return the first element of (map F ITER) for which F returns `Some`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L424-L426">(FLAT-MAP! FUNC ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="flat-map!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Flatten! wrapped around map.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L407-L421">(FLATTEN! ITERS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="flatten!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield all the elements from each of the ITERS in order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L113-L123">(FOLD! FUNC INIT ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="fold!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B &rarr; :A) &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; :A)</code>

Tail recursive in-order fold. Common Lisp calls this operation `reduce`.

If ITER is empty, returns INIT. Otherwise, calls (FUNC STATE ITEM) for each ITEM of ITER to produce a new
STATE, using INIT as the first STATE.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L493-L498">(FOR-EACH! THUNK ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="for-each!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#unit-type"><code>UNIT</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Call THUNK on each element of ITER in order for side effects.
Discard values returned by THUNK.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L515-L521">(INDEX-OF! THIS? ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-of!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Return the zero-based index of the first element of ITER for which THIS? is `True`, or `None` if no element matches.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L279-L298">(INTERLEAVE! LEFT RIGHT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="interleave!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Return an interator of interleaved elements from LEFT and RIGHT which terminates as soon as both LEFT and RIGHT do.

If one iterator terminates before the other, elements from the longer iterator will be yielded without
interleaving. (interleave empty ITER) is equivalent to (id ITER).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L449-L451">(LAST! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="last!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Yields the last element of ITER, completely consuming it.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L352-L372">(MAP-WHILE! F ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="map-while!-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Map an iterator, stopping early if F returns NONE.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L538-L540">(MAX! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="max!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the most-positive element of ITER, or `None` if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L561-L565">(MAXIMIZE-BY! F ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="maximize-by!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-positive.

Return `None' if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L429-L431">(MCONCAT! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="mconcat!-value"></a>
<code>&forall; :A. <a href="#monoid-class">MONOID</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; :A)</code>

Fold an iterator of monoids into a single element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L434-L436">(MCONCATMAP! FUNC ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="mconcatmap!-value"></a>
<code>&forall; :A :B. <a href="#monoid-class">MONOID</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; :B)</code>

Map an iterator to an iterator of monoids, and then fold that iterator into a single element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L543-L545">(MIN! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="min!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the most-negative element of ITER, or `None` if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L568-L572">(MINIMIZE-BY! F ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="minimize-by!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :B &rArr; ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-negative.

Return `None' if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L90-L92">(NEW F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Create a new iterator from a function that yields elements.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L104-L110">(NEXT! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="next!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Advance ITER, returning its next yielded value, or `None` if the iterator is exhausted.
Behavior is undefined if two threads concurrently call `next!` on the same iterator without a lock. Note that
most of the operators defined on iterators call `next!` internally, or create new iterators which will call
`next!` on their inputs.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L241-L250">(ONCE ITEM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="once-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield `item` once.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L524-L535">(OPTIMIZE! BETTER? ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="optimize!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the best element of ITER.

Return `None` if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L551-L558">(OPTIMIZE-BY! BETTER? F ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="optimize-by!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (:B &rarr; :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the element of ITER where (F ELT) is the best.

Return `None` if ITER is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L468-L478">(OR! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="or!-value"></a>
<code>((<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns True if any iterator elements are True. May not consume the entire iterator. Returns False on an empty iterator.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L439-L442">(PAIR-WITH! FUNC KEYS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pair-with!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Returns an iterator over tuples whose FSTs are elements from KEYS, and whose SNDs are the results of applying FUNC to those KEYS.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L199-L213">(RANGE-DECREASING STEP START END)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="range-decreasing-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

A range which begins below START and counts down through and including END by STEP.

Equivalent to reversing `range-increasing`



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L174-L182">(RANGE-INCREASING STEP START END)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="range-increasing-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins at START and yields successive elements spaced by STEP, stopping before END.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L155-L167">(RECURSIVE-ITER SUCC DONE? START)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="recursive-iter-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; :A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which yields first START, then (SUCC START), then (SUCC (SUCC START)), and so on, stopping as soon as such a value is `done?`.

Beware off-by-one errors: the first value which is `done?` is not yielded. If `(done?  start)' is true, the
iterator is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp#L268-L277">(REMOVE-DUPLICATES! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-duplicates!-value"></a>
<code>&forall; :A. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield unique elements from ITER in order of first appearance.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L228-L233">(REPEAT ITEM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="repeat-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield ITEM over and over, infinitely.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L236-L238">(REPEAT-FOR ITEM COUNT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="repeat-for-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Yield ITEM COUNT times, then stop.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L99-L101">(SIZE-HINT ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="size-hint-value"></a>
<code>&forall; :A. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L481-L483">(SUM! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sum!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; :A)</code>

Add together all the elements of ITER.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L386-L390">(TAKE! COUNT ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="take!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An `Iterator` which yields at most COUNT elements from ITER.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L375-L383">(UNWRAPPED! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="unwrapped!-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> (:A :B)) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L190-L192">(UP-THROUGH LIMIT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="up-through-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins at zero and counts up through and including LIMIT.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L185-L187">(UP-TO LIMIT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="up-to-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

An iterator which begins at zero and counts up to, but not including, LIMIT.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L95-L96">(WITH-SIZE F SIZE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-size-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A)) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L315-L317">(ZIP!)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zip!-value"></a>
<code>&forall; :A :B. ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Return an iterator of tuples contining elements from two iterators.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L301-L312">(ZIP-WITH! F LEFT RIGHT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zip-with!-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :C))</code>

Return an iterator of elements from LEFT and RIGHT which terminates as soon as either LEFT or RIGHT does.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp#L137-L139">EMPTY</a></code> <sup><sub>[VALUE]</sub></sup><a name="empty-value"></a>
<code>&forall; :A. (<a href="#iterator-type"><code>ITERATOR</code></a> :A)</code>

Yields nothing; stops immediately



***

# Package `COALTON-LIBRARY/LISPARRAY`<a name="coalton-library/lisparray-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L27-L32">LISPARRAY</a></code> <sup><sub>[TYPE]</sub></sup><a name="lisparray-type"></a>

A one-dimensional, non-resizable array of elements.

These arrays are represented as possibly specialized `(cl:simple-array <type> (cl:*))` and are meant to be used as a tool either to interface with Lisp code or to implement efficient data structures. One should consult `Vector` or `Seq` for more general sequential data structure needs.

Whether or not the arrays are specialized depends on the underlying Lisp implementation. Consult `cl:upgraded-array-element-type` to determine whether `LispArray` may get specialized.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A)</code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L65-L68">(AREF V I)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="aref-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A)</code>

Read the `i`th value of the `LispArray` `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L59-L62">(LENGTH V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Return the length of the `LispArray` `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L35-L42">(MAKE N X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="make-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A))</code>

Make a new `LispArray` of length `n` initialized to `x`.

If the type of `x` represents a specialized array 



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L45-L56">(MAKE-UNINITIALIZED N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="make-uninitialized-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A))</code>

Make a new LispArray of length `n` that can store elements of type `:t`.

WARNING: The consequences are undefined if an uninitialized element is read before being set.




***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.lisp#L71-L75">(SET! V I X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; :A. ((<a href="#lisparray-type"><code>LISPARRAY</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the `i`th value of the `LispArray` `v` to `x`.



***

# Package `COALTON-LIBRARY/LIST`<a name="coalton-library/list-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L596-L603">(ALL F XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="all-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if every element in XS matches F.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L606-L613">(ANY F L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="any-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if at least one element in XS matches F.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L298-L300">(APPEND XS YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Appends two lists together and returns a new list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L107-L111">(CAR X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="car-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Return the traditional car of a list. This function is partial



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L114-L118">(CDR XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="cdr-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Return the traditional cdr of a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L628-L636">(COMBS L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="combs-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Compute a list of all combinations of elements of L. This function is sometimes goes by the name "power set" or "subsets".

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBS L)`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L639-L652">(COMBSOF N L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="combsof-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Produce a list of size-N subsets of L.

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBSOF N L)`.

This function is equivalent to all size-N elements of `(COMBS L)`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L303-L305">(CONCAT XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="concat-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Appends a list of lists together into a single new list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L308-L310">(CONCATMAP F XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="concatmap-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#list-type"><code>LIST</code></a> :B)) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B))</code>

Apply F to each element in XS and concatenate the results.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L448-L455">(COUNTBY F THINGS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="countby-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Count the number of items in THINGS that satisfy the predicate F.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L394-L396">(DIFFERENCE XS YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="difference-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list with the first occurence of each element in `ys` removed from `xs`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L182-L189">(DROP N XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="drop-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list with the first N elements removed.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L259-L260">(ELEMINDEX X XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="elemindex-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L558-L558">(EQUIVALENCE-CLASSES)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="equivalence-classes-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L546-L555">(EQUIVALENCE-CLASSES-BY F L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="equivalence-classes-by-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Break a list into a list of equivalence classes according to an equivalence relation.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L214-L223">(FILTER F XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="filter-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list containing every element of XS that matches the predicate function F in the same order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L204-L211">(FIND F XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="find-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the first element in a list matching the predicate function F.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L263-L272">(FINDINDEX F XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="findindex-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Returns the index of the first element matching the predicate function F.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L93-L97">(HEAD L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the first element of a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L234-L241">(INDEX I XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the Ith element of a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L129-L132">(INIT L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="init-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns every element except the last in a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L458-L460">(INSERT E LS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Inserts an element into a list at the first place it is less than or equal to the next element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L463-L473">(INSERTBY CMP X YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="insertby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type"><code>ORD</code></a>) &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Generic version of insert



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L501-L510">(INSERTIONS A L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="insertions-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Produce a list of copies of L, each with A inserted at a possible position.

    (insertions 0 (make-list 1 2))
    => ((0 1 2) (1 0 2) (1 2 0))




***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L496-L498">(INTERCALATE XS XSS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="intercalate-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Intersperses XS into XSS and then concatenates the result.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L337-L346">(INTERSECTION XS YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="intersection-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns elements which occur in both lists. Does not return duplicates and does not guarantee order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L489-L493">(INTERSPERSE E XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="intersperse-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list where every other element is E.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L121-L126">(LAST L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns the last element of a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L226-L231">(LENGTH L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L349-L358">(LOOKUP E XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Returns the value of the first (key, value) tuple in XS where the key matches E.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L576-L578">(MAXIMUM L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="maximum-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns a greatest element of a list, or None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L313-L320">(MEMBER E XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="member-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns true if any element of XS is equal to E.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L581-L583">(MINIMUM L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="minimum-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns a least element of a list, or None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L244-L246">(NTH N L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="nth-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Like INDEX, but errors if the index is not found.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L249-L256">(NTH-CDR N L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="nth-cdr-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns the nth-cdr of a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L135-L139">(NULL? XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="null?-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if XS is an empty list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L563-L573">(OPTIMUMBY F XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="optimumby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Returns an optimum according to a total order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L534-L543">(PARTITION F XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="partition-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#list-type"><code>LIST</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Splits a list into two new lists. The first list contains elements matching predicate F.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L623-L625">(PERMS L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="perms-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Produce all permutations of the list L.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L591-L593">(PRODUCT XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="product-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Returns the product of XS



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L275-L290">(RANGE START END)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="range-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list containing the numbers from START to END inclusive, counting by 1.

    COALTON-USER> (coalton (range 1 5))
    (1 2 3 4 5)

    COALTON-USER> (coalton (range 5 2))
    (5 4 3 2)




***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L389-L391">(REMOVE X YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Return a new list with the first element equal to `x` removed.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L370-L372">(REMOVE-DUPLICATES XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-duplicates-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list without duplicate elements.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L384-L386">(REMOVE-IF PRED XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-if-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Return a new list with the first element for which PRED is `True` is removed.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L154-L161">(REPEAT N X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="repeat-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list with the same value repeated multiple times.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L169-L172">(REVERSE XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="reverse-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list containing the same elements in reverse order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L142-L144">(SINGLETON X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="singleton-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a list containing one element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L147-L151">(SINGLETON? XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="singleton?-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `xs` a list containing exactly one element?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L476-L478">(SORT XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sort-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Performs a sort of XS.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L481-L486">(SORTBY CMP XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sortby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type"><code>ORD</code></a>) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Generic version of sort



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L616-L620">(SPLIT C STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="split-value"></a>
<code>(<a href="#char-type"><code>CHAR</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L586-L588">(SUM XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sum-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; :A)</code>

Returns the sum of XS



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L100-L104">(TAIL L)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="tail-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Returns every element except the first in a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L192-L201">(TAKE N XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="take-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns the first N elements of a list.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L513-L531">(TRANSPOSE XS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="transpose-value"></a>
<code>&forall; :A. ((<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#list-type"><code>LIST</code></a> :A)))</code>

Transposes a matrix represented by a list of lists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L323-L334">(UNION XS YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="union-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :A))</code>

Returns a new list with the elements from both XS and YS and without duplicates.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L443-L445">(ZIP XS YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zip-value"></a>
<code>&forall; :A :B. ((<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Builds a list of tuples with the elements of XS and YS.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L399-L407">(ZIPWITH F XS YS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C))</code>

Builds a new list by calling `f` with elements of `xs` and `ys`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L410-L418">(ZIPWITH3 F XS YS ZS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith3-value"></a>
<code>&forall; :A :B :C :D. ((:A &rarr; :B &rarr; :C &rarr; :D) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :D))</code>

Build a new list by calling F with elements of XS, YS and ZS



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L421-L429">(ZIPWITH4 F AS BS CS DS)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith4-value"></a>
<code>&forall; :A :B :C :D :E. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :D) &rarr; (<a href="#list-type"><code>LIST</code></a> :E))</code>

Build a new list by calling F with elements of AS, BS, CS and DS



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/list.lisp#L432-L440">(ZIPWITH5 F AS BS CS DS ES)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith5-value"></a>
<code>&forall; :A :B :C :D :E :F. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E &rarr; :F) &rarr; (<a href="#list-type"><code>LIST</code></a> :A) &rarr; (<a href="#list-type"><code>LIST</code></a> :B) &rarr; (<a href="#list-type"><code>LIST</code></a> :C) &rarr; (<a href="#list-type"><code>LIST</code></a> :D) &rarr; (<a href="#list-type"><code>LIST</code></a> :E) &rarr; (<a href="#list-type"><code>LIST</code></a> :F))</code>

Build a new list by calling F with elements of AS, BS, CS, DS and ES



***

# Package `COALTON-LIBRARY/MATH/ARITH`<a name="coalton-library/math/arith-package"></a>

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L64-L86">DIVIDABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="dividable-class"></a>
<code><a href="#dividable-class">DIVIDABLE</a> :A :B</code>


The representation of a type such that division within that type possibly results in another type. For instance,


    (Dividable Integer Fraction)


establishes that division of two `Integer`s can result in a `Fraction`, whereas


    (Dividable Single-Float Single-Float)


establishes that division of two `Single-Float`s can result in a `Single-Float`.

Note that `Dividable` does *not* establish a default result type; you must constrain the result type yourself.

The function `general/` is partial, and will error produce a run-time error if the divisor is zero.


Methods:
- <code>GENERAL/ :: (:A &rarr; :A &rarr; :B)</code>
<details>
<summary>Instances</summary>

- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#dividable-class">DIVIDABLE</a> :A :A</code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L51-L62">RECIPROCABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="reciprocable-class"></a>
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
- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L91-L96">TRANSFINITE</a></code> <sup><sub>[CLASS]</sub></sup><a name="transfinite-class"></a>
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
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L166-L168">(1+ NUM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="1+-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

Increment `num`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L171-L173">(1- NUM)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="1--value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

Decrement `num`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L147-L151">(ABS X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="abs-value"></a>
<code>&forall; :A. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; :A)</code>

Absolute value of `x`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L161-L163">(ASH X N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ash-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Compute the "arithmetic shift" of `x` by `n`. 



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L99-L101">(FINITE? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="finite?-value"></a>
<code>&forall; :A. <a href="#transfinite-class">TRANSFINITE</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Neither infinite or NaN.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L142-L144">(NEGATE X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="negate-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

The negation, or additive inverse, of `x`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L181-L183">(NEGATIVE? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="negative?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` negative?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L191-L193">(NONNEGATIVE? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="nonnegative?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` not negative?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L186-L188">(NONPOSITIVE? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="nonpositive?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` not positive?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L201-L203">(NONZERO? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="nonzero?-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` not zero?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L176-L178">(POSITIVE? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="positive?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` positive?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L154-L158">(SIGN X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sign-value"></a>
<code>&forall; :A :B. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) (<a href="#num-class">NUM</a> :B) &rArr; (:A &rarr; :B)</code>

The sign of `x`, where `(sign 0) = 1`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L196-L198">(ZERO? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="zero?-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `x` zero?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp#L104-L105">NEGATIVE-INFINITY</a></code> <sup><sub>[VALUE]</sub></sup><a name="negative-infinity-value"></a>
<code>&forall; :A. (<a href="#transfinite-class">TRANSFINITE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; :A</code>


***

# Package `COALTON-LIBRARY/MATH/BOUNDED`<a name="coalton-library/math/bounded-package"></a>

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/bounded.lisp#L22-L25">BOUNDED</a></code> <sup><sub>[CLASS]</sub></sup><a name="bounded-class"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L30-L32">COMPLEX</a></code> <sup><sub>[TYPE]</sub></sup><a name="complex-type"></a>
- <code>(%COMPLEX :A :A )</code>

Complex number that may either have a native or constructed representation.

<details>
<summary>Instances</summary>

- <code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#into-class">INTO</a> :A <a href="#creal-type"><code>CREAL</code></a>) &rArr; <a href="#into-class">INTO</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A) (<a href="#complex-type"><code>COMPLEX</code></a> <a href="#creal-type"><code>CREAL</code></a>)</code>
- <code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#complex-class">COMPLEX</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#elementary-class">ELEMENTARY</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#polar-class">POLAR</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#radical-class">RADICAL</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>

</details>



***

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L40-L43">COMPLEX</a></code> <sup><sub>[CLASS]</sub></sup><a name="complex-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#complex-class">COMPLEX</a> :A</code>

Methods:
- <code>COMPLEX :: (:A &rarr; :A &rarr; (<a href="#complex-type"><code>COMPLEX</code></a> :A))</code>
- <code>REAL-PART :: ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>
- <code>IMAG-PART :: ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i16-type"><code>I16</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u16-type"><code>U16</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#complex-class">COMPLEX</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L50-L52">(CONJUGATE N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="conjugate-value"></a>
<code>&forall; :A. <a href="#complex-class">COMPLEX</a> :A &rArr; ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; (<a href="#complex-type"><code>COMPLEX</code></a> :A))</code>

The complex conjugate.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L55-L58">(SQUARE-MAGNITUDE A)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="square-magnitude-value"></a>
<code>&forall; :A. <a href="#complex-class">COMPLEX</a> :A &rArr; ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>

The length of a complex number.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp#L61-L63">II</a></code> <sup><sub>[VALUE]</sub></sup><a name="ii-value"></a>
<code>&forall; :A. <a href="#complex-class">COMPLEX</a> :A &rArr; (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>

The complex unit i. (The double ii represents a blackboard-bold i.)



***

# Package `COALTON-LIBRARY/MATH/DUAL`<a name="coalton-library/math/dual-package"></a>



Dual numbers are a hypercomplex number system [1]. A dual number has
the form `a + bε` where `a` and `b` are real numbers and `ε` is a
symbol that satisfies `ε^2 = 0` and `ε != 0`. The value `a` is often
called the *primal part* and the value `b` is often called the *dual
part*. One application of dual numbers is automatic differentiation;
an example taken from [2] is as follows.

Consider the function `f(x) = 3x+2` and you want to calculate `f(4)`
and `f'(4)`. By the usual rules of differentiation, we know `f'(x) = 3`
 and thus `(f(4), f'(4)) = (14, 3)`. We seek to recover this with
dual numbers.

With dual numbers, we can calculate

```
f(a) + f'(a)ε
```

by taking a real-valued function `f` and evaluating as if it were a
dual-valued function at the point `a + ε`. Thus, for the defined `f`,
we have:

```
f(4 + ε) = 3(4 + ε) + 2
         = 3*4 + 3ε + 2
         = 14 + 3ε.
```

In this result, the primal `14` is the value of `f(4)` and the dual is
the value of of `f'(4)`.

Haskell has an automatic differentiation library and you can find it here [3].

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L78-L85">DUAL :A</a></code> <sup><sub>[STRUCT]</sub></sup><a name="dual-type"></a>
- <code>PRIMAL-PART :: :A</code><br/>The primal part.
- <code>DUAL-PART :: :A</code><br/>The dual part.

Representation of a dual number in the form `a + bε` where `a` and `b` are real numbers and `ε` satisfies `ε^2 = 0` and `ε != 0`.

Note: `Eq`, and `Ord` and `Hash` only make use of the primal component.

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L91-L95">(DUAL-PART (DUAL _ D))</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="dual-part-value"></a>
<code>&forall; :A. ((<a href="#dual-type"><code>DUAL</code></a> :A) &rarr; :A)</code>

The dual (i.e., derivative) part of a dual number.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dual.lisp#L86-L90">(PRIMAL-PART (DUAL P _))</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="primal-part-value"></a>
<code>&forall; :A. ((<a href="#dual-type"><code>DUAL</code></a> :A) &rarr; :A)</code>

The primal (i.e., real) part of a dual number.



***

# Package `COALTON-LIBRARY/MATH/DYADIC`<a name="coalton-library/math/dyadic-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L32-L34">DYADIC</a></code> <sup><sub>[TYPE]</sub></sup><a name="dyadic-type"></a>

`(Dyadic n k)` represents the rational n*2^k.

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L152-L155">(SCALE X J)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="scale-value"></a>
<code>(<a href="#dyadic-type"><code>DYADIC</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Scales the exponent of a dyadic X by J.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L158-L165">(SHIFT K A)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="shift-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Shift dyadic A to its floor with K+1 bits of precision.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L97-L101">(SIMPLIFY D)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="simplify-value"></a>
<code>(<a href="#dyadic-type"><code>DYADIC</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Simplifies a Dyadic by maximizing the absolute value of the exponent.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/dyadic.lisp#L86-L95">(SIMPLIFY-INTEGER N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="simplify-integer-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#dyadic-type"><code>DYADIC</code></a>)</code>

Finds the simplest dyadic given an integer



***

# Package `COALTON-LIBRARY/MATH/ELEMENTARY`<a name="coalton-library/math/elementary-package"></a>

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L119-L123">ELEMENTARY</a></code> <sup><sub>[CLASS]</sub></sup><a name="elementary-class"></a>
<code>(<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#polar-class">POLAR</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#elementary-class">ELEMENTARY</a> :A</code>


`Elementary` is a marker class, providing `Reciprocable`, `Polar`, `Trigonometric`, `Exponentiable`, and `Radical`.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#elementary-class">ELEMENTARY</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L71-L83">EXPONENTIABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="exponentiable-class"></a>
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
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L92-L100">POLAR</a></code> <sup><sub>[CLASS]</sub></sup><a name="polar-class"></a>
<code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; <a href="#polar-class">POLAR</a> :A</code>


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
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#polar-class">POLAR</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#polar-class">POLAR</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L85-L90">RADICAL</a></code> <sup><sub>[CLASS]</sub></sup><a name="radical-class"></a>
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
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#radical-class">RADICAL</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) &rArr; <a href="#radical-class">RADICAL</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#radical-class">RADICAL</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#radical-class">RADICAL</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L44-L52">TRIGONOMETRIC</a></code> <sup><sub>[CLASS]</sub></sup><a name="trigonometric-class"></a>
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
- <code>(<a href="#num-class">NUM</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L144-L145">(ACOSH X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="acosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L140-L141">(ASINH X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="asinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L60-L69">(ATAN2 Y X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="atan2-value"></a>
<code>&forall; :A. (<a href="#ord-class">ORD</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

Computes the two-argument arctangent of y and x, which is roughly the same
as (atan (/ y x)) when defined and accounting for the quadrant of the (x,y).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L148-L149">(ATANH X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="atanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L110-L117">(CIS Z)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="cis-value"></a>
<code>&forall; :A. (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#complex-class">COMPLEX</a> :A) &rArr; (:A &rarr; (<a href="#complex-type"><code>COMPLEX</code></a> :A))</code>

A point on the complex unit circle:


    (cis z) := (exp (complex 0 z))
             = (complex (cos z) (sin z))




***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L132-L133">(COSH X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="cosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L102-L107">(MAGNITUDE Z)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="magnitude-value"></a>
<code>&forall; :A. (<a href="#radical-class">RADICAL</a> :A) (<a href="#complex-class">COMPLEX</a> :A) &rArr; ((<a href="#complex-type"><code>COMPLEX</code></a> :A) &rarr; :A)</code>

For `z = x + yi`,


    (magnitude z) = (sqrt (+ (^ x 2) (^ y 2)))



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L55-L57">(SINCOS X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sincos-value"></a>
<code>&forall; :A. <a href="#trigonometric-class">TRIGONOMETRIC</a> :A &rArr; (:A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :A))</code>

Computes the sine and cosine of X.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L128-L129">(SINH X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp#L136-L137">(TANH X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="tanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>


***

# Package `COALTON-LIBRARY/MATH/FRACTION`<a name="coalton-library/math/fraction-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L41-L44">(DENOMINATOR Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="denominator-value"></a>
<code>(<a href="#fraction-type"><code>FRACTION</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

The denominator of a fraction.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L30-L32">(MKFRACTION A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="mkfraction-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp#L35-L38">(NUMERATOR Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="numerator-value"></a>
<code>(<a href="#fraction-type"><code>FRACTION</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

The numerator of a fraction.



***

# Package `COALTON-LIBRARY/MATH/INTEGRAL`<a name="coalton-library/math/integral-package"></a>

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L61-L64">INTEGRAL</a></code> <sup><sub>[CLASS]</sub></sup><a name="integral-class"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L46-L59">REMAINDER</a></code> <sup><sub>[CLASS]</sub></sup><a name="remainder-class"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L82-L84">(EVEN? N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="even?-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is N even?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L125-L128">(GCD A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="gcd-value"></a>
<code>&forall; :A. (<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The greatest common divisor of A and B.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L150-L166">(ILOG B X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ilog-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

The floor of the logarithm with base B > 1 of X >= 1.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L67-L69">(INTEGRAL-&gt;NUM N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="integral->num-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :A) (<a href="#num-class">NUM</a> :B) &rArr; (:A &rarr; :B)</code>

Converts any Integral N into any Num.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L169-L180">(ISQRT X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="isqrt-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; :A)</code>

The floor of the square root of N > 0.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L131-L135">(LCM A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="lcm-value"></a>
<code>&forall; :A. (<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The least common multiple of A and B.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L77-L79">(LSH X N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="lsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :B) (<a href="#bits-class">BITS</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Left shift X by N



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L87-L89">(ODD? N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="odd?-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is N odd?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L72-L74">(RSH X N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="rsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :B) (<a href="#bits-class">BITS</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Right shift X by N



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L92-L115">(^ BASE POWER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="^-value"></a>
<code>&forall; :A :B. (<a href="#num-class">NUM</a> :A) (<a href="#integral-class">INTEGRAL</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a non-negative POWER.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp#L118-L122">(^^ BASE POWER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="^^-value"></a>
<code>&forall; :A :B. (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#integral-class">INTEGRAL</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a signed POWER.



***

# Package `COALTON-LIBRARY/MATH/REAL`<a name="coalton-library/math/real-package"></a>

### Structs

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L202-L213">QUANTIZATION :A</a></code> <sup><sub>[STRUCT]</sub></sup><a name="quantization-type"></a>
- <code>VALUE :: :A</code><br/>A value of type `:a`.
- <code>FLOOR :: COALTON:INTEGER</code><br/>The greatest integer less than or equal to a particular value.
- <code>FLOOR-REM :: :A</code><br/>The remainder of the floor operation as type `:a`.
- <code>CEILING :: COALTON:INTEGER</code><br/>The least integer greater than or equal to a particular value.
- <code>CEILING-REM :: :A</code><br/>The remainder of the ceiling operation as type `:a`.

Represents an integer quantization of `:a`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#quantization-type"><code>QUANTIZATION</code></a> :A)</code>

</details>



***

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L45-L65">QUANTIZABLE</a></code> <sup><sub>[CLASS]</sub></sup><a name="quantizable-class"></a>
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
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type"><code>FRACTION</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L71-L84">RATIONAL</a></code> <sup><sub>[CLASS]</sub></sup><a name="rational-class"></a>
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
- <code><a href="#rational-class">RATIONAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L67-L69">REAL</a></code> <sup><sub>[CLASS]</sub></sup><a name="real-class"></a>
<code>(<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; <a href="#real-class">REAL</a> :A</code>


A real number that can be approximated with abs(real-approx x - x) < 2^-n.

Methods:
- <code>REAL-APPROX :: (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#real-class">REAL</a> <a href="#creal-type"><code>CREAL</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#big-float-type"><code>BIG-FLOAT</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#ifix-type"><code>IFIX</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i64-type"><code>I64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i32-type"><code>I32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#i8-type"><code>I8</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#ufix-type"><code>UFIX</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u64-type"><code>U64</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u32-type"><code>U32</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#u8-type"><code>U8</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#real-class">REAL</a> <a href="#fraction-type"><code>FRACTION</code></a></code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L261-L263">(CEILING/ A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ceiling/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Divide two integers and compute the ceiling of the quotient.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L244-L246">(EXACT/ A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="exact/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Exactly divide two integers and produce a fraction.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L256-L258">(FLOOR/ A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="floor/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Divide two integers and compute the floor of the quotient.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L271-L277">(FROMFRAC Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="fromfrac-value"></a>
<code>&forall; :A. <a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type"><code>INTEGER</code></a> :A &rArr; (<a href="#fraction-type"><code>FRACTION</code></a> &rarr; :A)</code>

Converts a fraction to a target type.

Specifically, target types must have an instance of `Dividable Integer :a`.

This conversion may result in loss of fidelity.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L249-L253">(INEXACT/ A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="inexact/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a>)</code>

Compute the quotient of integers as a double-precision float.

Note: This does *not* divide double-float arguments.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L216-L224">(QUANTIZE X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="quantize-value"></a>
<code>&forall; :A. <a href="#real-class">REAL</a> :A &rArr; (:A &rarr; (<a href="#quantization-type"><code>QUANTIZATION</code></a> :A))</code>

Given X, (QUANTIZE X) will return the least integer greater or equal to X,
and the greatest integer less than or equal to X, along with their respective
remainders expressed as values of type of X.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L93-L121">(ROUND X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="round-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Return the nearest integer to X, with ties breaking towards even numbers.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L232-L234">(ROUND-HALF-DOWN X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="round-half-down-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L227-L229">(ROUND-HALF-UP X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="round-half-up-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L266-L268">(ROUND/ A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="round/-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Divide two integers and round the quotient.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L237-L241">(SAFE/ X Y)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="safe/-value"></a>
<code>&forall; :A :B. (<a href="#num-class">NUM</a> :A) (<a href="#dividable-class">DIVIDABLE</a> :A :B) &rArr; (:A &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Safely divide X by Y, returning None if Y is zero.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp#L87-L90">(TRUNCATE X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="truncate-value"></a>
<code>&forall; :A. <a href="#quantizable-class">QUANTIZABLE</a> :A &rArr; (:A &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Returns the integer closest/equal to `x` that is within `0` and `x`.



***

# Package `COALTON-LIBRARY/MONAD/FREE`<a name="coalton-library/monad/free-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L26-L31">FREE</a></code> <sup><sub>[TYPE]</sub></sup><a name="free-type"></a>

`Free :f` gives you a Monad instance for any `Functor :f`.

References: [here](https://serokell.io/blog/introduction-to-free-monads) and [here](https://www.tweag.io/blog/2018-02-05-free-monads/)

<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">FOLDABLE</a> :A &rArr; <a href="#foldable-class">FOLDABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#functor-class">FUNCTOR</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#monad-class">MONAD</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> ((<a href="#free-type"><code>FREE</code></a> :A) :B)</code>
- <code><a href="#traversable-class">TRAVERSABLE</a> :A &rArr; <a href="#traversable-class">TRAVERSABLE</a> (<a href="#free-type"><code>FREE</code></a> :A)</code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L43-L48">(FOLDFREE NAT FR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="foldfree-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">MONAD</a> :C &rArr; (((:A ((<a href="#free-type"><code>FREE</code></a> :A) :B)) &rarr; (:C ((<a href="#free-type"><code>FREE</code></a> :A) :B))) &rarr; ((<a href="#free-type"><code>FREE</code></a> :A) :B) &rarr; (:C :B))</code>

Given a natural transformation, induce a Monad homomorphism from a
free monad to a target monad.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.lisp#L34-L36">(LIFTF F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="liftf-value"></a>
<code>&forall; :A :B. <a href="#functor-class">FUNCTOR</a> :A &rArr; ((:A :B) &rarr; ((<a href="#free-type"><code>FREE</code></a> :A) :B))</code>

Lift a Functor into the Free Monad.



***

# Package `COALTON-LIBRARY/MONAD/STATE`<a name="coalton-library/monad/state-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L25-L28">ST</a></code> <sup><sub>[TYPE]</sub></sup><a name="st-type"></a>

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L31-L33">(PUT STATE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="put-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#st-type"><code>ST</code></a> :A <a href="#unit-type"><code>UNIT</code></a>))</code>

A StatefulComputation with state set to be given state. The returned value is Unit.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L41-L45">(RUN SC)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="run-value"></a>
<code>&forall; :A :B. ((<a href="#st-type"><code>ST</code></a> :A :B) &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A :B))</code>

Runs a StatefulComputation to produce a final updated state and value given an initial state



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp#L36-L38">GET</a></code> <sup><sub>[VALUE]</sub></sup><a name="get-value"></a>
<code>&forall; :A. (<a href="#st-type"><code>ST</code></a> :A :A)</code>

A StatefulComputation which returns the current state as the value.



***

# Package `COALTON-LIBRARY/OPTIONAL`<a name="coalton-library/optional-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L27-L31">(FROM-SOME STR OPT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="from-some-value"></a>
<code>&forall; :A. (<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A) &rarr; :A)</code>

Get the value of OPT, erroring with the provided string if it is None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L41-L45">(NONE? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="none?-value"></a>
<code>&forall; :A. ((<a href="#optional-type"><code>OPTIONAL</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is X None?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp#L34-L38">(SOME? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="some?-value"></a>
<code>&forall; :A. ((<a href="#optional-type"><code>OPTIONAL</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is X Some?



***

# Package `COALTON-LIBRARY/ORD-MAP`<a name="coalton-library/ord-map-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L66-L68">MAP</a></code> <sup><sub>[TYPE]</sub></sup><a name="map-type"></a>
- <code>(%MAP (<a href="#tree-type"><code>TREE</code></a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B)) )</code>

A red-black binary tree which associates each :KEY with a :VALUE, sorted by `<=>' on the keys and unique by `==' on the keys.

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#map-type"><code>MAP</code></a> :A)</code>
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#map-type"><code>MAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#fromiterator-class">FROMITERATOR</a> (<a href="#map-type"><code>MAP</code></a> :A :B) (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L167-L174">(COLLECT COLL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="collect-value"></a>
<code>&forall; :A :B :C. (<a href="#ord-class">ORD</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A (<a href="#tuple-type"><code>TUPLE</code></a> :B :C)) &rarr; (<a href="#map-type"><code>MAP</code></a> :B :C))</code>

Construct a `Map` containing all the `(key value)` pairs in `coll`.

If `coll` contains duplicate keys, later values will overwrite earlier values.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L157-L164">(COLLECT! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="collect!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)) &rarr; (<a href="#map-type"><code>MAP</code></a> :A :B))</code>

Construct a `Map` containing all the `(key value)` pairs in `iter`.

If `iter` contains duplicate keys, later values will overwrite earlier values.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L128-L131">(ENTRIES MP)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)))</code>

Iterate over the (key value) pairs in MP, sorted by the keys in least-to-greatest order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L82-L86">(INSERT MP K V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="insert-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#map-type"><code>MAP</code></a> :A :B)))</code>

Associate K with V in MP. If MP already contains a mapping for K, return None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L111-L118">(INSERT-OR-REPLACE MP K V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="insert-or-replace-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#map-type"><code>MAP</code></a> :A :B))</code>

Update MP to associate K with V.

If MP already contains a mapping for K, replace it and discard the old value.

Like `replace-or-insert', but prioritizing insertion as a use case.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L137-L140">(KEYS MP)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Iterate over the keys in MP, sorted least-to-greatest.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L76-L79">(LOOKUP MP K)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Retrieve the value associated with K in MP, or None if MP does not contain K.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L203-L212">(MERGE A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="merge-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; (<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; (<a href="#map-type"><code>MAP</code></a> :A :B))</code>

Construct a Tree containing all the mappings of both A and B.

If A and B contain mappings X -> A' and X -> B', it is undefined whether the result maps X to A' or B'.

Because of the possibility that A and B will map the same X to different A' and B', this is not an associative
operation, and therefore Map cannot implement Monoid.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L121-L125">(REMOVE MP K)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#map-type"><code>MAP</code></a> :A :B)))</code>

Remove the mapping associated with K in MP. If K does not have a value in MP, return None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L90-L97">(REPLACE MP K V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="replace-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#map-type"><code>MAP</code></a> :A :B) :B)))</code>

Change the association of K to V in MP. If MP did not already contain a mapping for K, return None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L101-L108">(REPLACE-OR-INSERT MP K V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="replace-or-insert-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#map-type"><code>MAP</code></a> :A :B) (<a href="#optional-type"><code>OPTIONAL</code></a> :B)))</code>

Update MP to associate K with V.

If MP already contains a mapping for K, replace it and return the old value.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L180-L200">(UPDATE FUNC MP KEY)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="update-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :B &rArr; ((:A &rarr; :A) &rarr; (<a href="#map-type"><code>MAP</code></a> :B :A) &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#map-type"><code>MAP</code></a> :B :A)))</code>

Apply FUNC to the value corresponding to KEY in MP, returning a new `Map' which maps KEY to the result of the function.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L143-L146">(VALUES MP)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#map-type"><code>MAP</code></a> :A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :B))</code>

Iterate over the values in MP, sorted by their corresponding keys in least-to-greatest order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp#L71-L73">EMPTY</a></code> <sup><sub>[VALUE]</sub></sup><a name="empty-value"></a>
<code>&forall; :A :B. (<a href="#map-type"><code>MAP</code></a> :A :B)</code>

A Map containing no mappings.



***

# Package `COALTON-LIBRARY/ORD-TREE`<a name="coalton-library/ord-tree-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L80-L90">TREE</a></code> <sup><sub>[TYPE]</sub></sup><a name="tree-type"></a>
- <code>DOUBLEBLACKEMPTY</code>
- <code>(BRANCH <a href="#color-type"><code>COLOR</code></a> (<a href="#tree-type"><code>TREE</code></a> :A) :A (<a href="#tree-type"><code>TREE</code></a> :A) unexported; a tree with at least one element, and possibly children. (Branch clr less elt right). Every element of LESS is less than ELT, and every element of RIGHT is greater than ELT.)</code>

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L490-L494">(COLLECT! ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="collect!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type"><code>ITERATOR</code></a> :A) &rarr; (<a href="#tree-type"><code>TREE</code></a> :A))</code>

Construct a Tree containing all the elements of ITER.

If ITER contains duplicates, later elements will overwrite earlier elements.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L474-L476">(DECREASING-ORDER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="decreasing-order-value"></a>
<code>&forall; :A. ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Iterate the elements of a tree, starting with the greatest by `<=>' and ending with the least.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L458-L460">(INCREASING-ORDER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="increasing-order-value"></a>
<code>&forall; :A. ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Iterate the elements of a tree, starting with the least by `<=>' and ending with the greatest.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L276-L289">(INSERT TRE ELT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tree-type"><code>TREE</code></a> :A)))</code>

Construct a new Tree like TRE but containing ELT. If TRE already had an element `==` to ELT, return None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L339-L345">(INSERT-OR-REPLACE TRE ELT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="insert-or-replace-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#tree-type"><code>TREE</code></a> :A))</code>

Construct a new Tree like TRE but containing ELT.

If TRE already had an element `==` to ELT, remove it, replace it with ELT, and discard the removed value.

Like `replace-or-insert`, but prioritizing insertion as a use case.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L125-L134">(LOOKUP HAYSTACK NEEDLE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="lookup-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

If HAYSTACK contains an element `==` to NEEDLE, return it.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L500-L507">(MERGE A B)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="merge-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#tree-type"><code>TREE</code></a> :A) &rarr; (<a href="#tree-type"><code>TREE</code></a> :A))</code>

Construct a Tree containing all the elements of both A and B.

If A and B contain elements A' and B' respectively where (== A' B'), the result will contain either A' or
B'. Which one is chosen for the result is undefined.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L351-L354">(REMOVE TRE ELT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tree-type"><code>TREE</code></a> :A)))</code>

Construct a new Tree like TRE but without an element `==' to ELT. Return None if TRE does not contain an element `==` to ELT.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L292-L310">(REPLACE TRE ELT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="replace-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#tree-type"><code>TREE</code></a> :A) :A)))</code>

Construct a new Tree like TRE but with ELT replacing an old element `==` to ELT.

Return the new tree and the removed element.

If TRE did not have an element `==' to ELT, return None.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp#L313-L336">(REPLACE-OR-INSERT TRE ELT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="replace-or-insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type"><code>TREE</code></a> :A) &rarr; :A &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> (<a href="#tree-type"><code>TREE</code></a> :A) (<a href="#optional-type"><code>OPTIONAL</code></a> :A)))</code>

Construct a new Tree like TRE but containing ELT.

If TRE already had an element `==` to ELT, remove it, replace it with ELT, and return the removed value
alongside the new tree.



***

# Package `COALTON-LIBRARY/QUEUE`<a name="coalton-library/queue-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L54-L55">QUEUE</a></code> <sup><sub>[TYPE]</sub></sup><a name="queue-type"></a>

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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L173-L178">(APPEND Q1 Q2)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A))</code>

Create a new queue containing the elements of `q1` followed by the elements of `q2`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L95-L101">(CLEAR! Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="clear!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Clear all elements from `q`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L76-L92">(COPY Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A))</code>

Return a new queue containing the same elements as `q`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L70-L73">(EMPTY? Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `q` empty?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L181-L189">(EXTEND! Q ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B. <a href="#intoiterator-class">INTOITERATOR</a> :B :A &rArr; ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :B &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Push every element in `iter` to the end of `q`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L160-L164">(INDEX INDEX Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the `index`th element of `q`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L167-L170">(INDEX-UNSAFE INDEX Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :A)</code>

Return the `index`th element of `q` without checking if the element exists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L192-L197">(ITEMS! Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="items!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> :A))</code>

Returns an interator over the items of `q`, removing items as they are returned.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L64-L67">(LENGTH Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of `q`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L58-L61">(NEW _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A))</code>

Create a new empty queue.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L146-L150">(PEEK Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="peek-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Peek at the first item of `q`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L153-L157">(PEEK-UNSAFE Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="peek-unsafe-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :A)</code>

Peek at the first item of `q` without checking if the queue is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L130-L134">(POP! Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove and return the first item of `q`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L137-L143">(POP-UNSAFE! Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; :A. ((<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; :A)</code>

Remove and return the first item of `q` without checking if the queue is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.lisp#L104-L127">(PUSH! ITEM Q)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="push!-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#queue-type"><code>QUEUE</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Push `item` onto the end of `q`.



***

# Package `COALTON-LIBRARY/RANDOMACCESS`<a name="coalton-library/randomaccess-package"></a>

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L36-L45">RANDOMACCESS</a></code> <sup><sub>[CLASS]</sub></sup><a name="randomaccess-class"></a>
<code><a href="#randomaccess-class">RANDOMACCESS</a> :A :B</code>


Establishes that `:f` is a random-access store of elements of type `:t`. The **storage type** `:f` implies the **stored type** `:t`. The storage is expected to be sequential and O(1) in random access reads and writes.

It is permitted for any of `make`, `unsafe-aref`, or `unsafe-set!` to error.

Methods:
- <code>MAKE :: (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; :B)</code>
- <code>LENGTH :: (:B &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>
- <code>READABLE? :: (:B &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>
- <code>WRITABLE? :: (:B &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>
- <code>UNSAFE-AREF :: (:B &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A)</code>
- <code>UNSAFE-SET! :: (:B &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>
<details>
<summary>Instances</summary>

- <code><a href="#randomaccess-class">RANDOMACCESS</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L50-L56">(AREF STORAGE INDEX)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="aref-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RANDOMACCESS</a> :A :B &rArr; (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :B))</code>

Read the element at `index` of the random-access storage `storage`. Return `None` if the read is out-of-bounds or not permitted.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.lisp#L59-L65">(SET! STORAGE INDEX VALUE)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; :A :B. <a href="#randomaccess-class">RANDOMACCESS</a> :A :B &rArr; (:A &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :B &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#unit-type"><code>UNIT</code></a>))</code>

Write the element `value` at `index` of the random-access storage `storage`. Return `None` if the write is out-of-bounds or not permitted.



***

# Package `COALTON-LIBRARY/RESULT`<a name="coalton-library/result-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L37-L41">(ERR? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="err?-value"></a>
<code>&forall; :A :B. ((<a href="#result-type"><code>RESULT</code></a> :A :B) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if X is ERR



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L51-L54">(FLATTEN X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="flatten-value"></a>
<code>&forall; :A. ((<a href="#result-type"><code>RESULT</code></a> :A :A) &rarr; :A)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L44-L48">(MAP-ERR F X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="map-err-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (<a href="#result-type"><code>RESULT</code></a> :A :C) &rarr; (<a href="#result-type"><code>RESULT</code></a> :B :C))</code>

Map over the ERR case



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L57-L60">(OK-OR-ERROR RES)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ok-or-error-value"></a>
<code>&forall; :A :B. <a href="#signalable-class">SIGNALABLE</a> :A &rArr; ((<a href="#result-type"><code>RESULT</code></a> :A :B) &rarr; :B)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/result.lisp#L30-L34">(OK? X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ok?-value"></a>
<code>&forall; :A :B. ((<a href="#result-type"><code>RESULT</code></a> :A :B) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Returns TRUE if X is OK



***

# Package `COALTON-LIBRARY/SEQ`<a name="coalton-library/seq-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L58-L64">SEQ</a></code> <sup><sub>[TYPE]</sub></sup><a name="seq-type"></a>
- <code>(RELAXEDNODE <a href="#ufix-type"><code>UFIX</code></a> <a href="#ufix-type"><code>UFIX</code></a> (<a href="#vector-type"><code>VECTOR</code></a> <a href="#ufix-type"><code>UFIX</code></a>) (<a href="#vector-type"><code>VECTOR</code></a> (<a href="#seq-type"><code>SEQ</code></a> :A)) )</code>
- <code>(LEAFARRAY (<a href="#vector-type"><code>VECTOR</code></a> :B) )</code>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L167-L208">(CONC LEFT RIGHT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="conc-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A))</code>

Concatenate two `Seq`s



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L78-L79">(EMPTY? SEQ)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L82-L94">(GET SEQ IDX)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="get-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Get the member of `seq` at index `idx`, or `None` if `idx` is larger
than `(size seq)`



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L67-L69">(NEW _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A))</code>

Create a new empty `Seq`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L128-L165">(POP SEQ)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pop-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#tuple-type"><code>TUPLE</code></a> :A (<a href="#seq-type"><code>SEQ</code></a> :A))))</code>

If `seq` is empty, return `None`. Otherwise, the last member of `seq` and
a new `Seq` instance.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L118-L126">(PUSH SEQ A)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="push-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; :A &rarr; (<a href="#seq-type"><code>SEQ</code></a> :A))</code>

Push `a` onto the end of `seq`, returning a new `Seq` instance.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L97-L116">(PUT SEQ IDX A)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="put-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> (<a href="#seq-type"><code>SEQ</code></a> :A)))</code>

If `idx` is less than `(size seq)`, Return a new `seq` whose `idx` position
contains `a`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.lisp#L72-L76">(SIZE SEQ)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="size-value"></a>
<code>&forall; :A. ((<a href="#seq-type"><code>SEQ</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Return the number of elements in the `seq`.



***

# Package `COALTON-LIBRARY/SLICE`<a name="coalton-library/slice-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L39-L39">SLICE</a></code> <sup><sub>[TYPE]</sub></sup><a name="slice-type"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L84-L88">(INDEX IDX S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Lookup the element at `index` in `s`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L91-L94">(INDEX-UNSAFE IDX S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; :A)</code>

Lookup the element at `index` in `s` without bounds checking.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L114-L139">(ITER-CHUNKED SIZE S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="iter-chunked-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#slice-type"><code>SLICE</code></a> :B)))</code>

Divide `s` into a series of slices of length `size`. Will return a final shorter slice if `s` does not divide evenly.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L142-L154">(ITER-CHUNKED-EXACT SIZE S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="iter-chunked-exact-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#slice-type"><code>SLICE</code></a> :B)))</code>

Divide `s` into a series of slices of length `size`. Will skip trailing elements if `s` does not divide evenly.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L97-L111">(ITER-SLIDING SIZE S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="iter-sliding-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> (<a href="#slice-type"><code>SLICE</code></a> :B)))</code>

Returns an iterator that yeilds a series of overlapping slices of length `size`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L71-L74">(LENGTH S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of `s`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L51-L68">(NEW START LEN V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A :B. <a href="#sliceable-class">SLICEABLE</a> (:A :B) &rArr; (<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (:A :B) &rarr; (<a href="#slice-type"><code>SLICE</code></a> :B))</code>

Create a new slice backed by `v` starting at index `start` and continuing for `len` elements.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp#L77-L81">(SET! IDX ITEM S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#slice-type"><code>SLICE</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the element at index `idx` in `s` to `item`.



***

# Package `COALTON-LIBRARY/STRING`<a name="coalton-library/string-package"></a>

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L142-L144">(CHARS STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="chars-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#iterator-type"><code>ITERATOR</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Returns an iterator over the characters in `str`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L52-L55">(CONCAT STR1 STR2)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="concat-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Concatenate STR1 and STR2 together, returning a new string.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L63-L66">(LENGTH STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

The length of a string STR.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L104-L110">(PARSE-INT STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="parse-int-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#integer-type"><code>INTEGER</code></a>))</code>

Parse the integer in string `str`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L119-L123">(REF STR IDX)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ref-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#char-type"><code>CHAR</code></a>))</code>

Return the `idx`th character of `str`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L113-L116">(REF-UNCHECKED STR IDX)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="ref-unchecked-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#char-type"><code>CHAR</code></a>)</code>

Return the `idx`th character of `str`. This function is partial.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L58-L60">(REVERSE S)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="reverse-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Reverse a string.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L77-L80">(SPLIT N STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="split-value"></a>
<code>(<a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> <a href="#string-type"><code>STRING</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Splits a string into a head and tail at the nth index.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L83-L90">(STRIP-PREFIX PREFIX STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="strip-prefix-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Returns a string without a give prefix, or `None` if the string
does not have that suffix.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L93-L101">(STRIP-SUFFIX SUFFIX STR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="strip-suffix-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Returns a string without a give suffix, or `None` if the string
does not have that suffix.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L69-L74">(SUBSTRING STR START END)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="substring-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#ufix-type"><code>UFIX</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Compute a substring of a string bounded by given indices.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L126-L131">(SUBSTRING-INDEX SMALL BIG)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="substring-index-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

If the first argument appears as a substring within the second argument, return the starting index into the second argument.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/string.lisp#L134-L139">(SUBSTRING? SMALL BIG)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="substring?-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Return true if the first argument appears as a substring within the second argument.



***

# Package `COALTON-LIBRARY/SYSTEM`<a name="coalton-library/system-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L181-L182">LISPCONDITION</a></code> <sup><sub>[TYPE]</sub></sup><a name="lispcondition-type"></a>

Condition for lisp error handling. Uses `cl:condition`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lispcondition-type"><code>LISPCONDITION</code></a></code>
- <code><a href="#signalable-class">SIGNALABLE</a> <a href="#lispcondition-type"><code>LISPCONDITION</code></a></code>

</details>



***

### Structs

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L145-L152">METEREDRESULT :A</a></code> <sup><sub>[STRUCT]</sub></sup><a name="meteredresult-type"></a>
- <code>RESULT :: :A</code><br/>The result of the function.
- <code>TIME-ELAPSED :: COALTON:INTEGER</code><br/>The real time elapsed running the function (in internal time units).
- <code>BYTES-CONSED :: (COALTON-LIBRARY/CLASSES:OPTIONAL COALTON:INTEGER)</code><br/>The number of bytes consed during the run.

Function output with space and timing metedata.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#meteredresult-type"><code>METEREDRESULT</code></a> :A)</code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L251-L257">(ADD-FEATURE FEAT)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="add-feature-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Adds a feature `feat` to `cl:*features*`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L215-L218">(ARCHITECTURE _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="architecture-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The system's architecture (stored at compile time).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L270-L276">(ARGV0 _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="argv0-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

The first command line argument (stored at compile time).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L264-L267">(CMD-ARGS _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="cmd-args-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

The current command line arguments (stored at compile time).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L245-L248">(FEATURES _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="features-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#list-type"><code>LIST</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Returns a list of active features, from `cl:*features*`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L50-L54">(GC _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="gc-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Perform a full garbage collection.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L85-L88">(GET-REAL-TIME _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="get-real-time-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Gets the real-time in internal time units. The difference between two successive calls to this function represents the time that has elapsed.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L194-L200">(GETENV VAR)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="getenv-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#string-type"><code>STRING</code></a>))</code>

Gets the value of the environmental variable `var`, errors if `var` doesn't exist.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L227-L230">(HOSTNAME _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="hostname-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

Returns the system's hostname. This is a function because the hostname can be redefined.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L233-L236">(IMPLEMENTATION _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="implementation-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The lisp implementation (stored at compile time).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L239-L242">(LISP-VERSION _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="lisp-version-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The lisp implementation version (stored at compile time).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L108-L116">(MONOTONIC-BYTES-CONSED _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="monotonic-bytes-consed-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#integer-type"><code>INTEGER</code></a>))</code>

Returns the number of bytes consed since some unspecified point in time.

The difference between two successive calls to this function represents the number of bytes consed in that period of time.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L221-L224">(OS _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="os-value"></a>
<code>(<a href="#unit-type"><code>UNIT</code></a> &rarr; <a href="#string-type"><code>STRING</code></a>)</code>

The system's operating system (stored at compile time).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L204-L208">(SETENV! VAR VAL)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="setenv!-value"></a>
<code>(<a href="#string-type"><code>STRING</code></a> &rarr; <a href="#string-type"><code>STRING</code></a> &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sets an environment variable `var` to string `val`, only if `var` already exists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L57-L66">(SLEEP N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sleep-value"></a>
<code>&forall; :A. <a href="#rational-class">RATIONAL</a> :A &rArr; (:A &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sleep for `n` seconds, where `n` can be of any type with an instance of `Rational`.

Sleep uses type class `Rational`'s `best-approx` instead of `Real`'s `real-approx` because it handles the approximation without arbitrary precision. The only `Real` type excluded by this decision is `CReal`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L133-L143">(SPACE F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="space-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#integer-type"><code>INTEGER</code></a>)))</code>

Run the thunk `f` and return a tuple containing its value along with the approximate number of bytes consed during the course of executing f.

The amount of space used may be peculiar to the implementation, such as rounding to certain page boundaries.

A garbage collection will be forced prior to invoking `f`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L155-L171">(SPACETIME F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="spacetime-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; (<a href="#meteredresult-type"><code>METEREDRESULT</code></a> :A))</code>

Runs a function, gathering space and timing information and returning a `MeteredResults` object.

Garbage collection will be performed before profiling is performed.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L123-L130">(TIME F)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="time-value"></a>
<code>&forall; :A. ((<a href="#unit-type"><code>UNIT</code></a> &rarr; :A) &rarr; (<a href="#tuple-type"><code>TUPLE</code></a> :A <a href="#integer-type"><code>INTEGER</code></a>))</code>

Run the thunk `f` and return a tuple containing its value along with the run time in microseconds.

While the result will always contain microseconds, some implementations may return a value rounded to less precision (e.g., rounded to the nearest second or millisecond).



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L102-L105">(TIME-UNITS-&gt;ROUNDED-MICROSECONDS T)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="time-units->rounded-microseconds-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#integer-type"><code>INTEGER</code></a>)</code>

Converts internal time units into an integer number of rounded microseconds.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L97-L99">(TIME-UNITS-&gt;SECONDS T)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="time-units->seconds-value"></a>
<code>(<a href="#integer-type"><code>INTEGER</code></a> &rarr; <a href="#fraction-type"><code>FRACTION</code></a>)</code>

Converts internal time units into `Fraction` seconds.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/system.lisp#L91-L94">INTERNAL-TIME-UNITS-PER-SECOND</a></code> <sup><sub>[VALUE]</sub></sup><a name="internal-time-units-per-second-value"></a>
<code><a href="#integer-type"><code>INTEGER</code></a></code>

The number of internal time units per second. This is implementation specific.



***

# Package `COALTON-LIBRARY/TUPLE`<a name="coalton-library/tuple-package"></a>

### Structs

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L37-L40">TUPLE3 :A :B :C</a></code> <sup><sub>[STRUCT]</sub></sup><a name="tuple3-type"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L42-L46">TUPLE4 :A :B :C :D</a></code> <sup><sub>[STRUCT]</sub></sup><a name="tuple4-type"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L48-L53">TUPLE5 :A :B :C :D :E</a></code> <sup><sub>[STRUCT]</sub></sup><a name="tuple5-type"></a>
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

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L28-L30">(FST (TUPLE A _))</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="fst-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :A)</code>

Get the first element of a tuple.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp#L33-L35">(SND (TUPLE _ B))</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="snd-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type"><code>TUPLE</code></a> :A :B) &rarr; :B)</code>

Get the second element of a tuple.



***

# Package `COALTON-LIBRARY/TYPES`<a name="coalton-library/types-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L41-L42">LISPTYPE</a></code> <sup><sub>[TYPE]</sub></sup><a name="lisptype-type"></a>

The runtime representation of a Coalton type as a lisp type.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#lisptype-type"><code>LISPTYPE</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lisptype-type"><code>LISPTYPE</code></a></code>

</details>



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L22-L24">PROXY</a></code> <sup><sub>[TYPE]</sub></sup><a name="proxy-type"></a>

Proxy holds no data, but has a phantom type parameter.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#proxy-type"><code>PROXY</code></a> :A)</code>

</details>



***

### Classes

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L44-L50">RUNTIMEREPR</a></code> <sup><sub>[CLASS]</sub></sup><a name="runtimerepr-class"></a>
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
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> ((<a href="#free-type"><code>FREE</code></a> :A) :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#map-type"><code>MAP</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#mappair-type"><code>MAPPAIR</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iteratorstacknode-type"><code>ITERATORSTACKNODE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tree-type"><code>TREE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#color-type"><code>COLOR</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#st-type"><code>ST</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#queue-type"><code>QUEUE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hashtable-type"><code>HASHTABLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#slice-type"><code>SLICE</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#lisparray-type"><code>LISPARRAY</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iterator-type"><code>ITERATOR</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple5-type"><code>TUPLE5</code></a> :A :B :C :D :E)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple4-type"><code>TUPLE4</code></a> :A :B :C :D)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple3-type"><code>TUPLE3</code></a> :A :B :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#cell-type"><code>CELL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#dual-type"><code>DUAL</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#dyadic-type"><code>DYADIC</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#complex-type"><code>COMPLEX</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#quantization-type"><code>QUANTIZATION</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#hash-type"><code>HASH</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple-type"><code>TUPLE</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ord-type"><code>ORD</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#result-type"><code>RESULT</code></a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#optional-type"><code>OPTIONAL</code></a> :A)</code>
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
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (:A &rarr; :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fraction-type"><code>FRACTION</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#string-type"><code>STRING</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#double-float-type"><code>DOUBLE-FLOAT</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#single-float-type"><code>SINGLE-FLOAT</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#integer-type"><code>INTEGER</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#char-type"><code>CHAR</code></a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#boolean-type"><code>BOOLEAN</code></a></code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L32-L34">(AS-PROXY-OF X _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="as-proxy-of-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#proxy-type"><code>PROXY</code></a> :A) &rarr; :A)</code>

Returns the parameter, forcing the proxy to have the same type as the parameter.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L37-L38">(PROXY-INNER _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="proxy-inner-value"></a>
<code>&forall; :A :B. ((<a href="#proxy-type"><code>PROXY</code></a> (:A :B)) &rarr; (<a href="#proxy-type"><code>PROXY</code></a> :B))</code>


***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L27-L29">(PROXY-OF _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="proxy-of-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#proxy-type"><code>PROXY</code></a> :A))</code>

Returns a Proxy containing the type of the parameter.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/types.lisp#L53-L55">(RUNTIME-REPR-OF X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="runtime-repr-of-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (:A &rarr; <a href="#lisptype-type"><code>LISPTYPE</code></a>)</code>

Returns the runtime representation of the type of the given value.



***

# Package `COALTON-LIBRARY/VECTOR`<a name="coalton-library/vector-package"></a>

### Types

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L59-L59">VECTOR</a></code> <sup><sub>[TYPE]</sub></sup><a name="vector-type"></a>
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
- <code><a href="#intoiterator-class">INTOITERATOR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type"><code>SLICE</code></a> :A) (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) (<a href="#list-type"><code>LIST</code></a> :A)</code>
- <code><a href="#randomaccess-class">RANDOMACCESS</a> (<a href="#vector-type"><code>VECTOR</code></a> :A) :A</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>
- <code><a href="#sliceable-class">SLICEABLE</a> (<a href="#vector-type"><code>VECTOR</code></a> :A)</code>

</details>



***

### Values

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L204-L209">(APPEND V1 V2)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector containing the elements of `v1` followed by the elements of `v2`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L91-L94">(CAPACITY V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="capacity-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the number of elements that `v` can store without resizing.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L125-L127">(CLEAR! V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="clear!-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the capacity of `v` to `0`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L107-L112">(COPY V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Return a new vector containing the same elements as `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L97-L99">(EMPTY? V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `v` empty?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L244-L260">(EXTEND! VEC ITER)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="extend!-value"></a>
<code>&forall; :A :B. <a href="#intoiterator-class">INTOITERATOR</a> :B :A &rArr; ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :B &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Push every element in `iter` to the end of `vec`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L189-L201">(FIND-ELEM E V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="find-elem-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> <a href="#ufix-type"><code>UFIX</code></a>))</code>

Find the index of element `e` in `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L169-L171">(HEAD V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the first item of `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L174-L176">(HEAD-UNSAFE V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="head-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Return the first item of `v` without first checking if `v` is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L149-L153">(INDEX INDEX V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the `index`th element of `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L156-L159">(INDEX-UNSAFE IDX V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Return the `idx`th element of `v` without checking if the element exists.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L179-L181">(LAST V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Return the last element of `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L184-L186">(LAST-UNSAFE V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="last-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Return the last element of `v` without first checking if `v` is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L85-L88">(LENGTH V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Returns the length of `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L62-L64">(NEW _)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#unit-type"><code>UNIT</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new empty vector



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L136-L140">(POP! V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove and return the last item of `v`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L143-L146">(POP-UNSAFE! V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Remove and return the last item of `v` without checking if the vector is empty.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L130-L133">(PUSH! ITEM V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="push!-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#ufix-type"><code>UFIX</code></a>)</code>

Append `item` to `v` and resize `v` if necessary, returning the index of the new item.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L162-L166">(SET! IDX ITEM V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the `idx`th element of `v` to `item`. This function left intentionally unsafe because it does not have a return value to check.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L115-L122">(SET-CAPACITY! NEW-CAPACITY V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="set-capacity!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Set the capacity of `v` to `new-capacity`. Setting the capacity to lower then the length will remove elements from the end.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L80-L82">(SINGLETON X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="singleton-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector with a single element equal to `x`



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L102-L104">(SINGLETON? V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="singleton?-value"></a>
<code>&forall; :A. ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>)</code>

Is `v` a singleton?



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L239-L241">(SORT! V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sort!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sort a vector in-place in ascending order.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L229-L236">(SORT-BY! F V)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="sort-by!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type"><code>BOOLEAN</code></a>) &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; <a href="#unit-type"><code>UNIT</code></a>)</code>

Sort a vector in-place with predicate function `f`.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L212-L216">(SWAP-REMOVE! IDX VEC)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="swap-remove!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; (<a href="#optional-type"><code>OPTIONAL</code></a> :A))</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec`. Then return the removed element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L219-L226">(SWAP-REMOVE-UNSAFE! IDX VEC)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="swap-remove-unsafe!-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A) &rarr; :A)</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec` without bounds checking. Then return the removed element.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L67-L70">(WITH-CAPACITY N)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector with `n` elements preallocated.



***

#### <code><a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp#L73-L77">(WITH-INITIAL-ELEMENT N X)</a></code> <sup><sub>[FUNCTION]</sub></sup><a name="with-initial-element-value"></a>
<code>&forall; :A. (<a href="#ufix-type"><code>UFIX</code></a> &rarr; :A &rarr; (<a href="#vector-type"><code>VECTOR</code></a> :A))</code>

Create a new vector with `n` elements equal to `x`.



***

</div></div></div>