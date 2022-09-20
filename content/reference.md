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
- <a href="#coalton-package"><code>coalton</code></a>
- <a href="#coalton-library/classes-package"><code>coalton-library/classes</code></a>
- <a href="#coalton-library/types-package"><code>coalton-library/types</code></a>
- <a href="#coalton-library/builtin-package"><code>coalton-library/builtin</code></a>
- <a href="#coalton-library/functions-package"><code>coalton-library/functions</code></a>
- <a href="#coalton-library/math/arith-package"><code>coalton-library/math/arith</code></a>
- <a href="#coalton-library/math/bounded-package"><code>coalton-library/math/bounded</code></a>
- <a href="#coalton-library/math/fraction-package"><code>coalton-library/math/fraction</code></a>
- <a href="#coalton-library/math/integral-package"><code>coalton-library/math/integral</code></a>
- <a href="#coalton-library/math/real-package"><code>coalton-library/math/real</code></a>
- <a href="#coalton-library/math/complex-package"><code>coalton-library/math/complex</code></a>
- <a href="#coalton-library/math/elementary-package"><code>coalton-library/math/elementary</code></a>
- <a href="#coalton-library/bits-package"><code>coalton-library/bits</code></a>
- <a href="#coalton-library/char-package"><code>coalton-library/char</code></a>
- <a href="#coalton-library/string-package"><code>coalton-library/string</code></a>
- <a href="#coalton-library/tuple-package"><code>coalton-library/tuple</code></a>
- <a href="#coalton-library/optional-package"><code>coalton-library/optional</code></a>
- <a href="#coalton-library/list-package"><code>coalton-library/list</code></a>
- <a href="#coalton-library/result-package"><code>coalton-library/result</code></a>
- <a href="#coalton-library/cell-package"><code>coalton-library/cell</code></a>
- <a href="#coalton-library/vector-package"><code>coalton-library/vector</code></a>
- <a href="#coalton-library/slice-package"><code>coalton-library/slice</code></a>
- <a href="#coalton-library/hashtable-package"><code>coalton-library/hashtable</code></a>
- <a href="#coalton-library/monad/state-package"><code>coalton-library/monad/state</code></a>
- <a href="#coalton-library/iterator-package"><code>coalton-library/iterator</code></a>
- <a href="#coalton-library/ord-tree-package"><code>coalton-library/ord-tree</code></a>
- <a href="#coalton-library/ord-map-package"><code>coalton-library/ord-map</code></a>


</div>
</div>
<div>

# Package `coalton`<a name="coalton-package"></a>

## [fixed-size-numbers.lisp](https://github.com/coalton-lang/coalton/tree/main/library/fixed-size-numbers.lisp) <a name="coalton-fixed-size-numbers-lisp-file"></a>

### Types

#### <code>I8</code> <sup><sub>[TYPE]</sub></sup><a name="i8-type"></a>

Signed 8-bit integer capable of storing values in `[-128, 127]`. Uses `(signed-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i8-type">I8</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i8-type">I8</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i8-type">I8</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i8-type">I8</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i8-type">I8</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i8-type">I8</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type">U8</a> <a href="#i8-type">I8</a></code>
- <code><a href="#real-class">REAL</a> <a href="#i8-type">I8</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i8-type">I8</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i8-type">I8</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i8-type">I8</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i8-type">I8</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i8-type">I8</a></code>

</details>


***

#### <code>U8</code> <sup><sub>[TYPE]</sub></sup><a name="u8-type"></a>

Unsigned 8-bit integer capable of storing values in `[0, 255]`. Uses `(unsigned-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u8-type">U8</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u8-type">U8</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u8-type">U8</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u8-type">U8</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u8-type">U8</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type">U8</a> <a href="#i8-type">I8</a></code>
- <code><a href="#real-class">REAL</a> <a href="#u8-type">U8</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u8-type">U8</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u8-type">U8</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u8-type">U8</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u8-type">U8</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u8-type">U8</a></code>

</details>


***

#### <code>I16</code> <sup><sub>[TYPE]</sub></sup><a name="i16-type"></a>

Signed 16-bit integer capable of storing values in `[-32768, 32767]`. Uses `(signed-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i16-type">I16</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i16-type">I16</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i16-type">I16</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i16-type">I16</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i16-type">I16</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#i16-type">I16</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i16-type">I16</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i16-type">I16</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i16-type">I16</a></code>

</details>


***

#### <code>I32</code> <sup><sub>[TYPE]</sub></sup><a name="i32-type"></a>

Signed 32-bit integer capable of storing values in `[-2147483648, 2147483647]`. Uses `(signed-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i32-type">I32</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i32-type">I32</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i32-type">I32</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i32-type">I32</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i32-type">I32</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i32-type">I32</a></code>
- <code><a href="#real-class">REAL</a> <a href="#i32-type">I32</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i32-type">I32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i32-type">I32</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i32-type">I32</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i32-type">I32</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i32-type">I32</a></code>

</details>


***

#### <code>I64</code> <sup><sub>[TYPE]</sub></sup><a name="i64-type"></a>

Signed 64-bit integer capable of storing values in `[-9223372036854775808, 9223372036854775807]`. Uses `(signed-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i64-type">I64</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i64-type">I64</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i64-type">I64</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i64-type">I64</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i64-type">I64</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type">I64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i64-type">I64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i64-type">I64</a></code>
- <code><a href="#real-class">REAL</a> <a href="#i64-type">I64</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i64-type">I64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i64-type">I64</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i64-type">I64</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i64-type">I64</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i64-type">I64</a></code>

</details>


***

#### <code>U16</code> <sup><sub>[TYPE]</sub></sup><a name="u16-type"></a>

Unsigned 16-bit integer capable of storing values in `[0, 65535]`. Uses `(unsigned-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u16-type">U16</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u16-type">U16</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u16-type">U16</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u16-type">U16</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u16-type">U16</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u16-type">U16</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u16-type">U16</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u16-type">U16</a></code>

</details>


***

#### <code>U32</code> <sup><sub>[TYPE]</sub></sup><a name="u32-type"></a>

Unsigned 32-bit integer capable of storing values in `[0, 4294967295]`. Uses `(unsigned-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u32-type">U32</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u32-type">U32</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u32-type">U32</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u32-type">U32</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u32-type">U32</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#real-class">REAL</a> <a href="#u32-type">U32</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u32-type">U32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u32-type">U32</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u32-type">U32</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u32-type">U32</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u32-type">U32</a></code>

</details>


***

#### <code>U64</code> <sup><sub>[TYPE]</sub></sup><a name="u64-type"></a>

Unsigned 64-bit integer capable of storing values in `[0, 18446744073709551615]`. Uses `(unsigned-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u64-type">U64</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u64-type">U64</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u64-type">U64</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u64-type">U64</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u64-type">U64</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i64-type">I64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#real-class">REAL</a> <a href="#u64-type">U64</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u64-type">U64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u64-type">U64</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u64-type">U64</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u64-type">U64</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u64-type">U64</a></code>

</details>


***

#### <code>IFIX</code> <sup><sub>[TYPE]</sub></sup><a name="ifix-type"></a>

Non-allocating tagged integer; range is platform-dependent. Does not error on overflow. Uses `fixnum`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#num-class">NUM</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#real-class">REAL</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ifix-type">IFIX</a></code>

</details>


***

#### <code>UFIX</code> <sup><sub>[TYPE]</sub></sup><a name="ufix-type"></a>

Non-allocating tagged non-negative integer; range is platform-dependent. Uses `(and fixnum unsigned-byte)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#num-class">NUM</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#real-class">REAL</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ufix-type">UFIX</a></code>

</details>


***

## [classes.lisp](https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp) <a name="coalton-classes-lisp-file"></a>

### Types

#### <code>UNIT</code> <sup><sub>[TYPE]</sub></sup><a name="unit-type"></a>
- <code>UNIT</code>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#unit-type">UNIT</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#unit-type">UNIT</a></code>
- <code><a href="#addressable-class">ADDRESSABLE</a> <a href="#unit-type">UNIT</a></code>

</details>


***

#### <code>VOID</code> <sup><sub>[TYPE]</sub></sup><a name="void-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#void-type">VOID</a></code>

</details>


***

### Types

#### <code>CHAR</code> <sup><sub>[TYPE]</sub></sup><a name="char-type"></a>

A single character represented as a `character` type.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#char-type">CHAR</a></code>

</details>


***

#### <code>LIST :A</code> <sup><sub>[TYPE]</sub></sup><a name="list-type"></a>
- <code>(CONS :A (<a href="#list-type">LIST</a> :A))</code>
- <code>NIL</code>

Homogeneous list of objects represented as a Common Lisp `list`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type">STRING</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#list-type">LIST</a></code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#list-type">LIST</a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type">LIST</a></code>

</details>


***

#### <code>ARROW :A :B</code> <sup><sub>[TYPE]</sub></sup><a name="arrow-type"></a>

Type constructor for function types.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (:A &rarr; :B)</code>

</details>


***

#### <code>STRING</code> <sup><sub>[TYPE]</sub></sup><a name="string-type"></a>

String of characters represented by Common Lisp `string`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#string-type">STRING</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#string-type">STRING</a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#string-type">STRING</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type">STRING</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>)</code>
- <code><a href="#monoid-class">MONOID</a> <a href="#string-type">STRING</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type">STRING</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#string-type">STRING</a></code>
- <code><a href="#addressable-class">ADDRESSABLE</a> <a href="#string-type">STRING</a></code>

</details>


***

#### <code>BOOLEAN</code> <sup><sub>[TYPE]</sub></sup><a name="boolean-type"></a>
- <code>FALSE</code>
- <code>TRUE</code>

Either true or false represented by `t` and `nil` respectively.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#boolean-type">BOOLEAN</a></code>

</details>


***

#### <code>INTEGER</code> <sup><sub>[TYPE]</sub></sup><a name="integer-type"></a>

Unbound integer. Uses `integer`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#num-class">NUM</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type">I64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type">STRING</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i64-type">I64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u8-type">U8</a></code>
- <code><a href="#real-class">REAL</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#integer-type">INTEGER</a></code>

</details>


***

#### <code>FRACTION</code> <sup><sub>[TYPE]</sub></sup><a name="fraction-type"></a>

A ratio of integers always in reduced form.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type">FRACTION</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#dyadic-type">DYADIC</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#real-class">REAL</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#fraction-type">FRACTION</a></code>

</details>


***

#### <code>DOUBLE-FLOAT</code> <sup><sub>[TYPE]</sub></sup><a name="double-float-type"></a>

Double precision floating point numer. Uses `double-float`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#real-class">REAL</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>

</details>


***

#### <code>SINGLE-FLOAT</code> <sup><sub>[TYPE]</sub></sup><a name="single-float-type"></a>

Single precision floating point numer. Uses `single-float`.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#real-class">REAL</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>

</details>


***

# Package `coalton-library/classes`<a name="coalton-library/classes-package"></a>

## [classes.lisp](https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp) <a name="coalton-library/classes-classes-lisp-file"></a>

### Types

#### <code>ORD</code> <sup><sub>[TYPE]</sub></sup><a name="ord-type"></a>
- <code>LT</code>
- <code>GT</code>
- <code>EQ</code>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#addressable-class">ADDRESSABLE</a> <a href="#ord-type">ORD</a></code>

</details>


***

#### <code>TUPLE :A :B</code> <sup><sub>[TYPE]</sub></sup><a name="tuple-type"></a>
- <code>(TUPLE :A :B)</code>

A heterogeneous collection of items.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type">TUPLE</a> :A :B) (<a href="#tuple-type">TUPLE</a> :B :A)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#mappair-type">MAPPAIR</a> :A :B) (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type">TUPLE</a> :A :B) (<a href="#tuple-type">TUPLE</a> :B :A)</code>

</details>


***

#### <code>RESULT :A :B</code> <sup><sub>[TYPE]</sub></sup><a name="result-type"></a>
- <code>(ERR :A)</code>
- <code>(OK :B)</code>

Represents something that may have failed.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#result-type">RESULT</a> :A :B)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#result-type">RESULT</a> :A :B)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> :A) (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#result-type">RESULT</a> :A :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type">OPTIONAL</a> :A) (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type">RESULT</a> :A :B) (<a href="#optional-type">OPTIONAL</a> :B)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#result-type">RESULT</a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#result-type">RESULT</a> :B :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#result-type">RESULT</a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#result-type">RESULT</a> :B :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#result-type">RESULT</a> :A)</code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type">RESULT</a> :A)</code>

</details>


***

#### <code>OPTIONAL :A</code> <sup><sub>[TYPE]</sub></sup><a name="optional-type"></a>
- <code>(SOME :A)</code>
- <code>NONE</code>

Represents something that may not have a value.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> :A) (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type">OPTIONAL</a> :A) (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type">RESULT</a> :A :B) (<a href="#optional-type">OPTIONAL</a> :B)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#monadfail-class">MONADFAIL</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type">OPTIONAL</a></code>

</details>


***

### Classes

#### <code>EQ</code> <sup><sub>[CLASS]</sub></sup><a name="eq-class"></a>
<code><a href="#eq-class">EQ</a> :A</code>

Types which have equality defined.

Methods:
- <code>== :: (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#unit-type">UNIT</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u8-type">U8</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u16-type">U16</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u32-type">U32</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u64-type">U64</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i8-type">I8</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i16-type">I16</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i32-type">I32</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i64-type">I64</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#eq-class">EQ</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#string-type">STRING</a></code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple3-type">TUPLE3</a> :A :B :C)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple4-type">TUPLE4</a> :A :B :C :D)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) (<a href="#eq-class">EQ</a> :E) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple5-type">TUPLE5</a> :A :B :C :D :E)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#list-type">LIST</a> :A)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#result-type">RESULT</a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#eq-class">EQ</a> <a href="#color-type">COLOR</a></code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#mappair-type">MAPPAIR</a> :A :B)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#map-type">MAP</a> :A :B)</code>
- <code><a href="#eq-class">EQ</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>ISO</code> <sup><sub>[CLASS]</sub></sup><a name="iso-class"></a>
<code>(<a href="#into-class">INTO</a> :A :B) (<a href="#into-class">INTO</a> :B :A) &rArr; <a href="#iso-class">ISO</a> :A :B</code>

Opting into this marker typeclass imples that the instances for (Into :a :b) and (Into :b :a) form a bijection.

Methods:

<details>
<summary>Instances</summary>

- <code><a href="#iso-class">ISO</a> :A :A</code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type">TUPLE</a> :A :B) (<a href="#tuple-type">TUPLE</a> :B :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> :A) (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type">SLICE</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>

</details>


***

#### <code>NUM</code> <sup><sub>[CLASS]</sub></sup><a name="num-class"></a>
<code><a href="#eq-class">EQ</a> :A &rArr; <a href="#num-class">NUM</a> :A</code>

Types which have numeric operations defined.

Methods:
- <code>+ :: (:A &rarr; :A &rarr; :A)</code>
- <code>- :: (:A &rarr; :A &rarr; :A)</code>
- <code>* :: (:A &rarr; :A &rarr; :A)</code>
- <code>FROMINT :: (<a href="#integer-type">INTEGER</a> &rarr; :A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#num-class">NUM</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i8-type">I8</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i16-type">I16</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i32-type">I32</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i64-type">I64</a></code>
- <code><a href="#num-class">NUM</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u8-type">U8</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u16-type">U16</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u32-type">U32</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u64-type">U64</a></code>
- <code><a href="#num-class">NUM</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#num-class">NUM</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#num-class">NUM</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#num-class">NUM</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>ORD</code> <sup><sub>[CLASS]</sub></sup><a name="ord-class"></a>
<code><a href="#eq-class">EQ</a> :A &rArr; <a href="#ord-class">ORD</a> :A</code>

Types whose values can be ordered.

Methods:
- <code>&lt;=&gt; :: (:A &rarr; :A &rarr; <a href="#ord-type">ORD</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#ord-class">ORD</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u8-type">U8</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u16-type">U16</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u32-type">U32</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u64-type">U64</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i8-type">I8</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i16-type">I16</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i32-type">I32</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i64-type">I64</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#string-type">STRING</a></code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code>(<a href="#ord-class">ORD</a> :A) (<a href="#ord-class">ORD</a> :B) &rArr; <a href="#ord-class">ORD</a> (<a href="#result-type">RESULT</a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#ord-class">ORD</a> (<a href="#mappair-type">MAPPAIR</a> :A :B)</code>
- <code><a href="#ord-class">ORD</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>HASH</code> <sup><sub>[CLASS]</sub></sup><a name="hash-class"></a>
<code><a href="#eq-class">EQ</a> :A &rArr; <a href="#hash-class">HASH</a> :A</code>

Types which can be hashed for storage in hash tables.

Invariant (== left right) implies (== (hash left) (hash right)).

Methods:
- <code>HASH :: (:A &rarr; <a href="#ufix-type">UFIX</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#hash-class">HASH</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i8-type">I8</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i16-type">I16</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i32-type">I32</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i64-type">I64</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u8-type">U8</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u16-type">U16</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u32-type">U32</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u64-type">U64</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#string-type">STRING</a></code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple3-type">TUPLE3</a> :A :B :C)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple4-type">TUPLE4</a> :A :B :C :D)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) (<a href="#hash-class">HASH</a> :E) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple5-type">TUPLE5</a> :A :B :C :D :E)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#map-type">MAP</a> :A :B)</code>

</details>


***

#### <code>INTO</code> <sup><sub>[CLASS]</sub></sup><a name="into-class"></a>
<code><a href="#into-class">INTO</a> :A :B</code>

INTO imples *every* element of :a can be represented by an element of :b. This conversion might not be injective (i.e., there may be elements in :a that don't correspond to any in :b).

Methods:
- <code>INTO :: (:A &rarr; :B)</code>

<details>
<summary>Instances</summary>

- <code><a href="#into-class">INTO</a> :A :A</code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type">I64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#into-class">INTO</a> <a href="#dyadic-type">DYADIC</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type">STRING</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type">TUPLE</a> :A :B) (<a href="#tuple-type">TUPLE</a> :B :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type">RESULT</a> :A :B) (<a href="#optional-type">OPTIONAL</a> :B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type">OPTIONAL</a> :A) (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> :A)</code>
- <code><a href="#into-class">INTO</a> :A (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#cell-type">CELL</a> :A) :A</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type">SLICE</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#mappair-type">MAPPAIR</a> :A :B) (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#fraction-type">FRACTION</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>MONAD</code> <sup><sub>[CLASS]</sub></sup><a name="monad-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#monad-class">MONAD</a> :A</code>

Types which are monads as defined in Haskell. See https://wiki.haskell.org/Monad for more information.

Methods:
- <code>&gt;&gt;= :: ((:A :B) &rarr; (:B &rarr; (:A :C)) &rarr; (:A :C))</code>

<details>
<summary>Instances</summary>

- <code><a href="#monad-class">MONAD</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#monad-class">MONAD</a> <a href="#list-type">LIST</a></code>
- <code><a href="#monad-class">MONAD</a> (<a href="#result-type">RESULT</a> :A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#st-type">ST</a> :A)</code>

</details>


***

#### <code>MONOID</code> <sup><sub>[CLASS]</sub></sup><a name="monoid-class"></a>
<code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#monoid-class">MONOID</a> :A</code>

Types with an associative binary operation and identity defined.

Methods:
- <code>MEMPTY :: :A</code>

<details>
<summary>Instances</summary>

- <code><a href="#monoid-class">MONOID</a> <a href="#string-type">STRING</a></code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#monoid-class">MONOID</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#result-type">RESULT</a> :B :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#tree-type">TREE</a> :A)</code>

</details>


***

#### <code>FUNCTOR</code> <sup><sub>[CLASS]</sub></sup><a name="functor-class"></a>
<code><a href="#functor-class">FUNCTOR</a> :A</code>

Types which can map an inner type where the mapping adheres to the identity and composition laws.

Methods:
- <code>MAP :: ((:B &rarr; :C) &rarr; (:A :B) &rarr; (:A :C))</code>

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#list-type">LIST</a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#result-type">RESULT</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#cell-type">CELL</a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#vector-type">VECTOR</a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#iterator-type">ITERATOR</a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#map-type">MAP</a> :A)</code>

</details>


***

#### <code>TRYINTO</code> <sup><sub>[CLASS]</sub></sup><a name="tryinto-class"></a>
<code><a href="#tryinto-class">TRYINTO</a> :A :B</code>

TRY-INTO implies *most* elements of :a can be represented exactly by an element of :b, but sometimes not. If not, an error string is returned.

Methods:
- <code>TRYINTO :: (:A &rarr; (<a href="#result-type">RESULT</a> <a href="#string-type">STRING</a> :B))</code>

<details>
<summary>Instances</summary>

- <code><a href="#tryinto-class">TRYINTO</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u8-type">U8</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i8-type">I8</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u16-type">U16</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i16-type">I16</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u32-type">U32</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i32-type">I32</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#i64-type">I64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#u64-type">U64</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#i64-type">I64</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ufix-type">UFIX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#ifix-type">IFIX</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u8-type">U8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u16-type">U16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i16-type">I16</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u32-type">U32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i32-type">I32</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#u64-type">U64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#i64-type">I64</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type">STRING</a> <a href="#integer-type">INTEGER</a></code>

</details>


***

#### <code>FOLDABLE</code> <sup><sub>[CLASS]</sub></sup><a name="foldable-class"></a>
<code><a href="#foldable-class">FOLDABLE</a> :A</code>

Types which can be folded into a single element.

`fold` is a left tail recursive fold

`foldr` is a right non tail recursive fold

Methods:
- <code>FOLD :: ((:B &rarr; :C &rarr; :B) &rarr; :B &rarr; (:A :C) &rarr; :B)</code>
- <code>FOLDR :: ((:D &rarr; :E &rarr; :E) &rarr; :E &rarr; (:A :D) &rarr; :E)</code>

<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">FOLDABLE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#vector-type">VECTOR</a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#slice-type">SLICE</a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#tree-type">TREE</a></code>

</details>


***

#### <code>MONADFAIL</code> <sup><sub>[CLASS]</sub></sup><a name="monadfail-class"></a>
<code><a href="#monad-class">MONAD</a> :A &rArr; <a href="#monadfail-class">MONADFAIL</a> :A</code>

Methods:
- <code>FAIL :: (<a href="#string-type">STRING</a> &rarr; (:A :B))</code>

<details>
<summary>Instances</summary>

- <code><a href="#monadfail-class">MONADFAIL</a> <a href="#optional-type">OPTIONAL</a></code>

</details>


***

#### <code>SEMIGROUP</code> <sup><sub>[CLASS]</sub></sup><a name="semigroup-class"></a>
<code><a href="#semigroup-class">SEMIGROUP</a> :A</code>

Types with an associative binary operation defined.

Methods:
- <code>&lt;&gt; :: (:A &rarr; :A &rarr; :A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#string-type">STRING</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#result-type">RESULT</a> :B :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#map-type">MAP</a> :A :B)</code>

</details>


***

#### <code>ADDRESSABLE</code> <sup><sub>[CLASS]</sub></sup><a name="addressable-class"></a>
<code><a href="#addressable-class">ADDRESSABLE</a> :A</code>

Types for which object identity is meaningful.

`eq?` should correspond exactly to the Common Lisp function `eq`, testing object identity (aka pointer
equality).

The compiler will auto-generate instances of `Addressable` for types which specify `repr :enum` or `repr
:lisp`.

Types with `repr :native` may manually implement `Addressable`, but programmers are encouraged to check the
[Common Lisp Hyperspec](http://www.lispworks.com/documentation/HyperSpec/Body/f_eq.htm) to determine what
guarantees, if any, are imposed on the behavior of `eq`. Types represented by `cl:character` or
`cl:number` (or sub- or supertypes thereof) should not implement `Addressable`, as those objects may be
implicitly copied.

No other types may implement `Addressable`. Defining an `Addressable` instance manually for a type which does
not specify `repr :native` will error. If you need an `Addressable` instance for a non-`repr :native` type,
specify `repr :lisp`.

Methods:
- <code>EQ? :: (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#addressable-class">ADDRESSABLE</a> <a href="#unit-type">UNIT</a></code>
- <code><a href="#addressable-class">ADDRESSABLE</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> <a href="#string-type">STRING</a></code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#hashtable-type">HASHTABLE</a> :A :B)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> <a href="#color-type">COLOR</a></code>

</details>


***

#### <code>ALTERNATIVE</code> <sup><sub>[CLASS]</sub></sup><a name="alternative-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> :A &rArr; <a href="#alternative-class">ALTERNATIVE</a> :A</code>

Types which are monoids on applicative functors.

Methods:
- <code>ALT :: ((:A :B) &rarr; (:A :B) &rarr; (:A :B))</code>
- <code>EMPTY :: (:A :C)</code>

<details>
<summary>Instances</summary>

- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#list-type">LIST</a></code>

</details>


***

#### <code>APPLICATIVE</code> <sup><sub>[CLASS]</sub></sup><a name="applicative-class"></a>
<code><a href="#functor-class">FUNCTOR</a> :A &rArr; <a href="#applicative-class">APPLICATIVE</a> :A</code>

Types which are a functor which can embed pure expressions and sequence operations.

Methods:
- <code>PURE :: (:B &rarr; (:A :B))</code>
- <code>LIFTA2 :: ((:C &rarr; :D &rarr; :E) &rarr; (:A :C) &rarr; (:A :D) &rarr; (:A :E))</code>

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#result-type">RESULT</a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#cell-type">CELL</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#st-type">ST</a> :A)</code>

</details>


***

#### <code>TRAVERSABLE</code> <sup><sub>[CLASS]</sub></sup><a name="traversable-class"></a>
<code><a href="#traversable-class">TRAVERSABLE</a> :A</code>

Methods:
- <code>TRAVERSE :: <a href="#applicative-class">APPLICATIVE</a> :B &rArr; ((:C &rarr; (:B :D)) &rarr; (:A :C) &rarr; (:B (:A :D)))</code>

<details>
<summary>Instances</summary>

- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type">LIST</a></code>

</details>


***

#### <code>UNWRAPPABLE</code> <sup><sub>[CLASS]</sub></sup><a name="unwrappable-class"></a>
<code><a href="#unwrappable-class">UNWRAPPABLE</a> :A</code>

Containers which can be unwrapped to get access to their contents.

(unwrap-or-else SUCCEED FAIL CONTAINER) should invoke the SUCCEED continuation on the unwrapped contents of
CONTAINER when successful, or invoke the FAIL continuation with no arguments (i.e. with Unit as an argument)
when unable to unwrap a value.

The SUCCEED continuation will often, but not always, be the identity function. `as-optional` passes Some to
construct an Optional.

Typical `fail` continuations are:
- Return a default value, or
- Signal an error.

Methods:
- <code>UNWRAP-OR-ELSE :: ((:B &rarr; :C) &rarr; (<a href="#unit-type">UNIT</a> &rarr; :C) &rarr; (:A :B) &rarr; :C)</code>

<details>
<summary>Instances</summary>

- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type">RESULT</a> :A)</code>

</details>


***

### Values

#### <code>(&lt; X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="&lt;-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X less than Y?


***

#### <code>(&gt; X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="&gt;-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X greater than Y?


***

#### <code>(&lt;= X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="&lt;=-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X less than or equal to Y?


***

#### <code>(&gt;= X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="&gt;=-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X greater than or equal to Y?


***

#### <code>(&gt;&gt; A B)</code> <sup><sub>FUNCTION</sub></sup><a name="&gt;&gt;-value"></a>
<code>&forall; :A :B :C. <a href="#monad-class">MONAD</a> :A &rArr; ((:A :B) &rarr; (:A :C) &rarr; (:A :C))</code>

***

#### <code>(MAX X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="max-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the greater element of X and Y.


***

#### <code>(MIN X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="min-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the lesser element of X and Y.


***

#### <code>(ERROR STR)</code> <sup><sub>FUNCTION</sub></sup><a name="error-value"></a>
<code>&forall; :A. (<a href="#string-type">STRING</a> &rarr; :A)</code>

Signal an error by calling `CL:ERROR`.


***

#### <code>(EXPECT REASON CONTAINER)</code> <sup><sub>FUNCTION</sub></sup><a name="expect-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; (<a href="#string-type">STRING</a> &rarr; (:A :B) &rarr; :B)</code>

Unwrap CONTAINER, signaling an error with the description REASON on failure.


***

#### <code>(UNWRAP CONTAINER)</code> <sup><sub>FUNCTION</sub></sup><a name="unwrap-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((:A :B) &rarr; :B)</code>

Unwrap CONTAINER, signaling an error on failure.


***

#### <code>MCONCAT</code> <sup><sub>[FUNCTION]</sub></sup><a name="mconcat-value"></a>
<code>&forall; :A :B. (<a href="#foldable-class">FOLDABLE</a> :A) (<a href="#monoid-class">MONOID</a> :B) &rArr; ((:A :B) &rarr; :B)</code>

***

#### <code>SEQUENCE</code> <sup><sub>[FUNCTION]</sub></sup><a name="sequence-value"></a>
<code>&forall; :A :B :C. (<a href="#traversable-class">TRAVERSABLE</a> :A) (<a href="#applicative-class">APPLICATIVE</a> :B) &rArr; ((:A (:B :C)) &rarr; (:B (:A :C)))</code>

***

#### <code>(AS-OPTIONAL CONTAINER)</code> <sup><sub>FUNCTION</sub></sup><a name="as-optional-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((:A :B) &rarr; (<a href="#optional-type">OPTIONAL</a> :B))</code>

Convert any Unwrappable container into an Optional, constructing Some on a successful unwrap and None on a failed unwrap.


***

#### <code>(WITH-DEFAULT DEFAULT CONTAINER)</code> <sup><sub>FUNCTION</sub></sup><a name="with-default-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :B &rArr; (:A &rarr; (:B :A) &rarr; :A)</code>

Unwrap CONTAINER, returning DEFAULT on failure.


***

#### <code>(COMBINE-HASHES LEFT RIGHT)</code> <sup><sub>FUNCTION</sub></sup><a name="combine-hashes-value"></a>
<code>(<a href="#ufix-type">UFIX</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; <a href="#ufix-type">UFIX</a>)</code>

***

# Package `coalton-library/types`<a name="coalton-library/types-package"></a>

## [types.lisp](https://github.com/coalton-lang/coalton/tree/main/library/types.lisp) <a name="coalton-library/types-types-lisp-file"></a>

### Types

#### <code>PROXY :A</code> <sup><sub>[TYPE]</sub></sup><a name="proxy-type"></a>
- <code>PROXY</code>

Proxy holds no data, but has a phantom type parameter.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#proxy-type">PROXY</a> :A)</code>

</details>


***

#### <code>LISPTYPE</code> <sup><sub>[TYPE]</sub></sup><a name="lisptype-type"></a>

The runtime representation of a Coalton type as a lisp type.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lisptype-type">LISPTYPE</a></code>

</details>


***

### Classes

#### <code>RUNTIMEREPR</code> <sup><sub>[CLASS]</sub></sup><a name="runtimerepr-class"></a>
<code><a href="#runtimerepr-class">RUNTIMEREPR</a> :A</code>

Types which have a runtime LispType representation.

`runtime-repr` corresponds to the type emitted by the Coalton compiler for the type parameter to the given Proxy.

The compiler will auto-generate instances of `RuntimeRepr` for all defined types.

Methods:
- <code>RUNTIME-REPR :: ((<a href="#proxy-type">PROXY</a> :A) &rarr; <a href="#lisptype-type">LISPTYPE</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#string-type">STRING</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (:A &rarr; :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#lisptype-type">LISPTYPE</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#proxy-type">PROXY</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i64-type">I64</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i32-type">I32</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i16-type">I16</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#i8-type">I8</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u64-type">U64</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u32-type">U32</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u16-type">U16</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#u8-type">U8</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#void-type">VOID</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#unit-type">UNIT</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#result-type">RESULT</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#optional-type">OPTIONAL</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple-type">TUPLE</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#quantization-type">QUANTIZATION</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple5-type">TUPLE5</a> :A :B :C :D :E)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple4-type">TUPLE4</a> :A :B :C :D)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple3-type">TUPLE3</a> :A :B :C)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hashtable-type">HASHTABLE</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#st-type">ST</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iterator-type">ITERATOR</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#color-type">COLOR</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iteratorstacknode-type">ITERATORSTACKNODE</a> :A)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#mappair-type">MAPPAIR</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#map-type">MAP</a> :A :B)</code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#big-float-type">BIG-FLOAT</a></code>
- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> <a href="#roundingmode-type">ROUNDINGMODE</a></code>

</details>


***

### Values

#### <code>(PROXY-OF _)</code> <sup><sub>FUNCTION</sub></sup><a name="proxy-of-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#proxy-type">PROXY</a> :A))</code>

Returns a Proxy containing the type of the parameter.


***

#### <code>(RUNTIME-REPR-OF X)</code> <sup><sub>FUNCTION</sub></sup><a name="runtime-repr-of-value"></a>
<code>&forall; :A. <a href="#runtimerepr-class">RUNTIMEREPR</a> :A &rArr; (:A &rarr; <a href="#lisptype-type">LISPTYPE</a>)</code>

Returns the runtime representation of the type of the given value.


***

# Package `coalton-library/builtin`<a name="coalton-library/builtin-package"></a>

## [builtin.lisp](https://github.com/coalton-lang/coalton/tree/main/library/builtin.lisp) <a name="coalton-library/builtin-builtin-lisp-file"></a>

### Values

#### <code>NOT</code> <sup><sub>[FUNCTION]</sub></sup><a name="not-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Synonym for BOOLEAN-NOT.


***

#### <code>XOR</code> <sup><sub>[FUNCTION]</sub></sup><a name="xor-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Synonym for BOOLEAN-XOR.


***

#### <code>(UNDEFINED X)</code> <sup><sub>FUNCTION</sub></sup><a name="undefined-value"></a>
<code>&forall; :A :B. (:A &rarr; :B)</code>

A function which can be used in place of any value, throwing an error at runtime.


***

#### <code>(BOOLEAN-OR X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="boolean-or-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X or Y True? Note that this is a *function* which means both X and Y will be evaluated. Use the OR macro for short-circuiting behavior.


***

#### <code>(BOOLEAN-AND X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="boolean-and-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Are X and Y True? Note that this is a *function* which means both X and Y will be evaluated. Use the AND macro for short-circuiting behavior.


***

#### <code>(BOOLEAN-NOT X)</code> <sup><sub>FUNCTION</sub></sup><a name="boolean-not-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X False?


***

#### <code>(BOOLEAN-XOR X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="boolean-xor-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Are X or Y True, but not both?


***

# Package `coalton-library/functions`<a name="coalton-library/functions-package"></a>

## [functions.lisp](https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp) <a name="coalton-library/functions-functions-lisp-file"></a>

### Values

#### <code>(/= A B)</code> <sup><sub>FUNCTION</sub></sup><a name="/=-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is A not equal to B?


***

#### <code>(ID X)</code> <sup><sub>FUNCTION</sub></sup><a name="id-value"></a>
<code>&forall; :A. (:A &rarr; :A)</code>

A function that always returns its argument.


***

#### <code>(FIX F N)</code> <sup><sub>FUNCTION</sub></sup><a name="fix-value"></a>
<code>&forall; :A :B. (((:A &rarr; :B) &rarr; :A &rarr; :B) &rarr; :A &rarr; :B)</code>

Compute the fixed point of a unary function. This is equivalent to the Y-combinator of the lambda calculus. This combinator allows recursion without specific assignment of names. For example, the factorial function can be written

    (define fact
      (fix
        (fn (f n)
          (if (== n 0)
            1
            (* n (f (- n 1)))))))


***

#### <code>(ASUM XS)</code> <sup><sub>FUNCTION</sub></sup><a name="asum-value"></a>
<code>&forall; :A :B :C. (<a href="#alternative-class">ALTERNATIVE</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A (:B :C)) &rarr; (:B :C))</code>

Fold over a list using alt


***

#### <code>(FLIP F X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="flip-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; :B &rarr; :A &rarr; :C)</code>

Returns a function that takes its arguments in reverse order.


***

#### <code>(MSUM XS)</code> <sup><sub>FUNCTION</sub></sup><a name="msum-value"></a>
<code>&forall; :A :B. (<a href="#monoid-class">MONOID</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A :B) &rarr; :B)</code>

Fold over a list using &lt;&gt;


***

#### <code>(CONST A B)</code> <sup><sub>FUNCTION</sub></sup><a name="const-value"></a>
<code>&forall; :A :B. (:A &rarr; :B &rarr; :A)</code>

A function that always returns its first argument.


***

#### <code>(TRACE STR)</code> <sup><sub>FUNCTION</sub></sup><a name="trace-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#unit-type">UNIT</a>)</code>

Print a line to `*STANDARD-OUTPUT*`


***

#### <code>(REDUCE F Y XS)</code> <sup><sub>FUNCTION</sub></sup><a name="reduce-value"></a>
<code>&forall; :A :B :C. <a href="#foldable-class">FOLDABLE</a> :C &rArr; ((:A &rarr; :B &rarr; :B) &rarr; :B &rarr; (:C :A) &rarr; :B)</code>

The same as `fold` but with the argument order swapped to match `cl:reduce`


***

#### <code>(COMPOSE F G)</code> <sup><sub>FUNCTION</sub></sup><a name="compose-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (:C &rarr; :A) &rarr; :C &rarr; :B)</code>

Produces a function equivalent to applying G then F in succession.


***

#### <code>(CONJOIN F G X)</code> <sup><sub>FUNCTION</sub></sup><a name="conjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Compute the conjunction of two unary Boolean functions.


***

#### <code>(DISJOIN F G X)</code> <sup><sub>FUNCTION</sub></sup><a name="disjoin-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Compute the disjunction of two unary Boolean functions.


***

#### <code>(UNCURRY FUNC TPL)</code> <sup><sub>FUNCTION</sub></sup><a name="uncurry-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#tuple-type">TUPLE</a> :A :B) &rarr; :C)</code>

***

#### <code>(COMPLEMENT F X)</code> <sup><sub>FUNCTION</sub></sup><a name="complement-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Compute the complement of a unary Boolean function.


***

#### <code>(TRACEOBJECT STR ITEM)</code> <sup><sub>FUNCTION</sub></sup><a name="traceobject-value"></a>
<code>&forall; :A. (<a href="#string-type">STRING</a> &rarr; :A &rarr; <a href="#unit-type">UNIT</a>)</code>

Print a line to `*STANDARD-OUTPUT*` in the form "{STR}: {ITEM}"


***

# Package `coalton-library/math/arith`<a name="coalton-library/math/arith-package"></a>

## [math/arith.lisp](https://github.com/coalton-lang/coalton/tree/main/library/math/arith.lisp) <a name="coalton-library/math/arith-math-arith-lisp-file"></a>

### Classes

#### <code>DIVIDABLE</code> <sup><sub>[CLASS]</sub></sup><a name="dividable-class"></a>
<code><a href="#dividable-class">DIVIDABLE</a> :A :B</code>

The representation of a type such that division within that type possibly results in another type. For instance,


    (Dividable Integer Fraction)


establishes that division of two `Integer`s can result in a `Fraction`, whereas


    (Dividable Single-Float Single-Float)


establishes that division of two `Single-Float`s can result in a `Single-Float`.

Note that `Dividable` does *not* establish a default result type; you must constrain the result type yourself.

The function general/ is partial, and will error produce a run-time error if the divisor is zero.


Methods:
- <code>GENERAL/ :: (:A &rarr; :A &rarr; :B)</code>

<details>
<summary>Instances</summary>

- <code><a href="#reciprocable-class">RECIPROCABLE</a> :A &rArr; <a href="#dividable-class">DIVIDABLE</a> :A :A</code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>TRANSFINITE</code> <sup><sub>[CLASS]</sub></sup><a name="transfinite-class"></a>
<code><a href="#transfinite-class">TRANSFINITE</a> :A</code>

Numberic type with a value for (positive) 'infinity' and/or 'NaN'

Methods:
- <code>INFINITY :: :A</code>
- <code>INFINITE? :: (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>
- <code>NAN :: :A</code>
- <code>NAN? :: (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#transfinite-class">TRANSFINITE</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>RECIPROCABLE</code> <sup><sub>[CLASS]</sub></sup><a name="reciprocable-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> :A</code>

Any number with a multiplicative inverse (reciprocal) where:


    1 = (* (reciprocal x) x) = (* x (reciprocal x))
    (/ x y) = (* x (reciprocal y))


If no reciprocal exists for an element, produce a run-time error (e.g. zero).


Methods:
- <code>/ :: (:A &rarr; :A &rarr; :A)</code>
- <code>RECIPROCAL :: (:A &rarr; :A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#fraction-type">FRACTION</a></code>
- <code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#reciprocable-class">RECIPROCABLE</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

### Values

#### <code>(1+ NUM)</code> <sup><sub>FUNCTION</sub></sup><a name="1+-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

Increment `num`.


***

#### <code>(1- NUM)</code> <sup><sub>FUNCTION</sub></sup><a name="1--value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

Decrement `num`.


***

#### <code>(ABS X)</code> <sup><sub>FUNCTION</sub></sup><a name="abs-value"></a>
<code>&forall; :A. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; :A)</code>

Absolute value of `x`.


***

#### <code>(ASH X N)</code> <sup><sub>FUNCTION</sub></sup><a name="ash-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Compute the "arithmetic shift" of X by N. 


***

#### <code>(SIGN X)</code> <sup><sub>FUNCTION</sub></sup><a name="sign-value"></a>
<code>&forall; :A :B. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) (<a href="#num-class">NUM</a> :B) &rArr; (:A &rarr; :B)</code>

The sign of `x`, where `(sign 0) = 1`.


***

#### <code>(NEGATE X)</code> <sup><sub>FUNCTION</sub></sup><a name="negate-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

The negation, or additive inverse, of `x`.


***

#### <code>(FINITE? X)</code> <sup><sub>FUNCTION</sub></sup><a name="finite?-value"></a>
<code>&forall; :A. <a href="#transfinite-class">TRANSFINITE</a> :A &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Neither infinite or NaN.


***

#### <code>(NONZERO? X)</code> <sup><sub>FUNCTION</sub></sup><a name="nonzero?-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is `x` not zero?


***

#### <code>(NEGATIVE? X)</code> <sup><sub>FUNCTION</sub></sup><a name="negative?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is `x` negative?


***

#### <code>(POSITIVE? X)</code> <sup><sub>FUNCTION</sub></sup><a name="positive?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is `x` positive?


***

#### <code>(NONNEGATIVE? X)</code> <sup><sub>FUNCTION</sub></sup><a name="nonnegative?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is `x` not negative?


***

#### <code>(NONPOSITIVE? X)</code> <sup><sub>FUNCTION</sub></sup><a name="nonpositive?-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is `x` not positive?


***

#### <code>NEGATIVE-INFINITY</code> <sup><sub>[VALUE]</sub></sup><a name="negative-infinity-value"></a>
<code>&forall; :A. (<a href="#transfinite-class">TRANSFINITE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; :A</code>

***

# Package `coalton-library/math/bounded`<a name="coalton-library/math/bounded-package"></a>

## [math/bounded.lisp](https://github.com/coalton-lang/coalton/tree/main/library/math/bounded.lisp) <a name="coalton-library/math/bounded-math-bounded-lisp-file"></a>

### Classes

#### <code>BOUNDED</code> <sup><sub>[CLASS]</sub></sup><a name="bounded-class"></a>
<code><a href="#bounded-class">BOUNDED</a> :A</code>

Types which have a maximum and minumum bound.

Methods:
- <code>MINBOUND :: :A</code>
- <code>MAXBOUND :: :A</code>

<details>
<summary>Instances</summary>

- <code><a href="#bounded-class">BOUNDED</a> <a href="#u8-type">U8</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i8-type">I8</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u16-type">U16</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i16-type">I16</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u32-type">U32</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i32-type">I32</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#u64-type">U64</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#i64-type">I64</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#bounded-class">BOUNDED</a> <a href="#ufix-type">UFIX</a></code>

</details>


***

# Package `coalton-library/math/fraction`<a name="coalton-library/math/fraction-package"></a>

## [math/fraction.lisp](https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.lisp) <a name="coalton-library/math/fraction-math-fraction-lisp-file"></a>

### Values

#### <code>(NUMERATOR Q)</code> <sup><sub>FUNCTION</sub></sup><a name="numerator-value"></a>
<code>(<a href="#fraction-type">FRACTION</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

The numerator of a fraction.


***

#### <code>(MKFRACTION A B)</code> <sup><sub>FUNCTION</sub></sup><a name="mkfraction-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#fraction-type">FRACTION</a>)</code>

***

#### <code>(DENOMINATOR Q)</code> <sup><sub>FUNCTION</sub></sup><a name="denominator-value"></a>
<code>(<a href="#fraction-type">FRACTION</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

The denominator of a fraction.


***

# Package `coalton-library/math/integral`<a name="coalton-library/math/integral-package"></a>

## [math/integral.lisp](https://github.com/coalton-lang/coalton/tree/main/library/math/integral.lisp) <a name="coalton-library/math/integral-math-integral-lisp-file"></a>

### Classes

#### <code>INTEGRAL</code> <sup><sub>[CLASS]</sub></sup><a name="integral-class"></a>
<code>(<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; <a href="#integral-class">INTEGRAL</a> :A</code>

Integral is a number that is either even or odd where `div` and `quot`
are floored and truncated division, respectively.

Methods:
- <code>TOINTEGER :: (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#integral-class">INTEGRAL</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i8-type">I8</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i16-type">I16</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i32-type">I32</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#i64-type">I64</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u8-type">U8</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u16-type">U16</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u32-type">U32</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#u64-type">U64</a></code>
- <code><a href="#integral-class">INTEGRAL</a> <a href="#ufix-type">UFIX</a></code>

</details>


***

#### <code>REMAINDER</code> <sup><sub>[CLASS]</sub></sup><a name="remainder-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#remainder-class">REMAINDER</a> :A</code>

Remainder is typically an integral domain satisfying:

```
a = (+ (* b (quot a b)) (rem a b))
a = (+ (* b (div a b)) (mod a b))
```


Methods:
- <code>QUOT :: (:A &rarr; :A &rarr; :A)</code>
- <code>REM :: (:A &rarr; :A &rarr; :A)</code>
- <code>QUOTREM :: (:A &rarr; :A &rarr; (<a href="#tuple-type">TUPLE</a> :A :A))</code>
- <code>DIV :: (:A &rarr; :A &rarr; :A)</code>
- <code>MOD :: (:A &rarr; :A &rarr; :A)</code>
- <code>DIVMOD :: (:A &rarr; :A &rarr; (<a href="#tuple-type">TUPLE</a> :A :A))</code>

<details>
<summary>Instances</summary>

- <code><a href="#remainder-class">REMAINDER</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i8-type">I8</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i16-type">I16</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i32-type">I32</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#i64-type">I64</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u8-type">U8</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u16-type">U16</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u32-type">U32</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#u64-type">U64</a></code>
- <code><a href="#remainder-class">REMAINDER</a> <a href="#ufix-type">UFIX</a></code>

</details>


***

### Values

#### <code>(^ BASE POWER)</code> <sup><sub>FUNCTION</sub></sup><a name="^-value"></a>
<code>&forall; :A :B. (<a href="#num-class">NUM</a> :A) (<a href="#integral-class">INTEGRAL</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a non-negative POWER.


***

#### <code>(^^ BASE POWER)</code> <sup><sub>FUNCTION</sub></sup><a name="^^-value"></a>
<code>&forall; :A :B. (<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#integral-class">INTEGRAL</a> :B) &rArr; (:A &rarr; :B &rarr; :A)</code>

Exponentiate BASE to a signed POWER.


***

#### <code>(GCD A B)</code> <sup><sub>FUNCTION</sub></sup><a name="gcd-value"></a>
<code>&forall; :A. (<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The greatest common divisor of A and B.


***

#### <code>(LCM A B)</code> <sup><sub>FUNCTION</sub></sup><a name="lcm-value"></a>
<code>&forall; :A. (<a href="#remainder-class">REMAINDER</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

The least common multiple of A and B.


***

#### <code>(LSH X N)</code> <sup><sub>FUNCTION</sub></sup><a name="lsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :B) (<a href="#bits-class">BITS</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Left shift X by N


***

#### <code>(RSH X N)</code> <sup><sub>FUNCTION</sub></sup><a name="rsh-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :B) (<a href="#bits-class">BITS</a> :A) &rArr; (:A &rarr; :B &rarr; :A)</code>

Right shift X by N


***

#### <code>(ILOG B X)</code> <sup><sub>FUNCTION</sub></sup><a name="ilog-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

The floor of the logarithm with base B &gt; 1 of X &gt;= 1.


***

#### <code>(ODD? N)</code> <sup><sub>FUNCTION</sub></sup><a name="odd?-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is N odd?


***

#### <code>(EVEN? N)</code> <sup><sub>FUNCTION</sub></sup><a name="even?-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is N even?


***

#### <code>(ISQRT X)</code> <sup><sub>FUNCTION</sub></sup><a name="isqrt-value"></a>
<code>&forall; :A. <a href="#integral-class">INTEGRAL</a> :A &rArr; (:A &rarr; :A)</code>

The floor of the square root of N &gt; 0.


***

#### <code>(INTEGRAL-&gt;NUM N)</code> <sup><sub>FUNCTION</sub></sup><a name="integral-&gt;num-value"></a>
<code>&forall; :A :B. (<a href="#integral-class">INTEGRAL</a> :A) (<a href="#num-class">NUM</a> :B) &rArr; (:A &rarr; :B)</code>

Converts any Integral N into any Num.


***

# Package `coalton-library/math/real`<a name="coalton-library/math/real-package"></a>

## [math/real.lisp](https://github.com/coalton-lang/coalton/tree/main/library/math/real.lisp) <a name="coalton-library/math/real-math-real-lisp-file"></a>

### Types

#### <code>QUANTIZATION :A</code> <sup><sub>[TYPE]</sub></sup><a name="quantization-type"></a>
- <code>(QUANTIZATION :A <a href="#integer-type">INTEGER</a> :A <a href="#integer-type">INTEGER</a> :A)</code>

Represents an integer quantization of `:a`.

The fields are defined as follows:

1. A value of type `:a`.
2. The greatest integer less than or equal to a particular value.
3. The remainder of this as a value of type `:a`.
4. The least integer greater than or equal to a particular value.
5. The remainder of this as a value of type `:a`.


<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#quantization-type">QUANTIZATION</a> :A)</code>

</details>


***

### Classes

#### <code>REAL</code> <sup><sub>[CLASS]</sub></sup><a name="real-class"></a>
<code>(<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; <a href="#real-class">REAL</a> :A</code>

A real number that can be approximated with abs(real-approx x - x) &lt; 2^-n.

Methods:
- <code>REAL-APPROX :: (<a href="#ufix-type">UFIX</a> &rarr; :A &rarr; <a href="#fraction-type">FRACTION</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#real-class">REAL</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#real-class">REAL</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#real-class">REAL</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#real-class">REAL</a> <a href="#u8-type">U8</a></code>
- <code><a href="#real-class">REAL</a> <a href="#u32-type">U32</a></code>
- <code><a href="#real-class">REAL</a> <a href="#u64-type">U64</a></code>
- <code><a href="#real-class">REAL</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#real-class">REAL</a> <a href="#i8-type">I8</a></code>
- <code><a href="#real-class">REAL</a> <a href="#i32-type">I32</a></code>
- <code><a href="#real-class">REAL</a> <a href="#i64-type">I64</a></code>
- <code><a href="#real-class">REAL</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#real-class">REAL</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#real-class">REAL</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#real-class">REAL</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>RATIONAL</code> <sup><sub>[CLASS]</sub></sup><a name="rational-class"></a>
<code>(<a href="#real-class">REAL</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; <a href="#rational-class">RATIONAL</a> :A</code>

Any number that can be exactly represented by a fraction, or is not finite.

If a rational can be converted from a fraction it must satisfy:


    (into (to-fraction x)) = x
    (into (best-approx x)) = x


Furthermore, `best-approx` returns the simplest fraction, and both functions may be partial.


Methods:
- <code>TO-FRACTION :: (:A &rarr; <a href="#fraction-type">FRACTION</a>)</code>
- <code>BEST-APPROX :: (:A &rarr; <a href="#fraction-type">FRACTION</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#rational-class">RATIONAL</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u8-type">U8</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u32-type">U32</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#u64-type">U64</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i8-type">I8</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i32-type">I32</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#i64-type">I64</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#rational-class">RATIONAL</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>QUANTIZABLE</code> <sup><sub>[CLASS]</sub></sup><a name="quantizable-class"></a>
<code><a href="#quantizable-class">QUANTIZABLE</a> :A</code>

The representation of a type that allows for rounding operations


    max x such that (floor x) &lt;= x
    min x such that (ceiling x) &lt;= x

And


    (proper x) = (Tuple (truncate x) (- x (truncate x)))


where


    (truncate x) = (* (sign x) (floor (abs x))


Methods:
- <code>PROPER :: (:A &rarr; (<a href="#tuple-type">TUPLE</a> <a href="#integer-type">INTEGER</a> :A))</code>
- <code>FLOOR :: (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>
- <code>CEILING :: (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

<details>
<summary>Instances</summary>

- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u8-type">U8</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u32-type">U32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u64-type">U64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i8-type">I8</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i32-type">I32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i64-type">I64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#dyadic-type">DYADIC</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

### Values

#### <code>(ROUND X)</code> <sup><sub>FUNCTION</sub></sup><a name="round-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

Return the nearest integer to X, with ties breaking towards even numbers.


***

#### <code>(SAFE/ X Y)</code> <sup><sub>FUNCTION</sub></sup><a name="safe/-value"></a>
<code>&forall; :A :B. (<a href="#num-class">NUM</a> :A) (<a href="#dividable-class">DIVIDABLE</a> :A :B) &rArr; (:A &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> :B))</code>

Safely divide X by Y, returning None if Y is zero.


***

#### <code>(EXACT/ A B)</code> <sup><sub>FUNCTION</sub></sup><a name="exact/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#fraction-type">FRACTION</a>)</code>

Exactly divide two integers and produce a fraction.


***

#### <code>(FLOOR/ A B)</code> <sup><sub>FUNCTION</sub></sup><a name="floor/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Divide two integers and compute the floor of the quotient.


***

#### <code>(ROUND/ A B)</code> <sup><sub>FUNCTION</sub></sup><a name="round/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Divide two integers and round the quotient.


***

#### <code>(CEILING/ A B)</code> <sup><sub>FUNCTION</sub></sup><a name="ceiling/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Divide two integers and compute the ceiling of the quotient.


***

#### <code>(INEXACT/ A B)</code> <sup><sub>FUNCTION</sub></sup><a name="inexact/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>

Compute the quotient of integers as a double-precision float.

Note: This does *not* divide double-float arguments.


***

#### <code>(QUANTIZE X)</code> <sup><sub>FUNCTION</sub></sup><a name="quantize-value"></a>
<code>&forall; :A. <a href="#real-class">REAL</a> :A &rArr; (:A &rarr; (<a href="#quantization-type">QUANTIZATION</a> :A))</code>

Given X, (QUANTIZE X) will return the least integer greater or equal to X,
and the greatest integer less than or equal to X, along with their respective
remainders expressed as values of type of X.


***

#### <code>(TRUNCATE X)</code> <sup><sub>FUNCTION</sub></sup><a name="truncate-value"></a>
<code>&forall; :A. <a href="#quantizable-class">QUANTIZABLE</a> :A &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

Returns the integer closest/equal to `x` that is within `0` and `x`.


***

#### <code>(ROUND-HALF-UP X)</code> <sup><sub>FUNCTION</sub></sup><a name="round-half-up-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.


***

#### <code>(ROUND-HALF-DOWN X)</code> <sup><sub>FUNCTION</sub></sup><a name="round-half-down-value"></a>
<code>&forall; :A. (<a href="#quantizable-class">QUANTIZABLE</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.


***

# Package `coalton-library/math/complex`<a name="coalton-library/math/complex-package"></a>

## [math/complex.lisp](https://github.com/coalton-lang/coalton/tree/main/library/math/complex.lisp) <a name="coalton-library/math/complex-math-complex-lisp-file"></a>

### Types

#### <code>COMPLEX :A</code> <sup><sub>[TYPE]</sub></sup><a name="complex-type"></a>

Complex number that may either have a native or constructed representation.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#into-class">INTO</a> :A (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#reciprocable-class">RECIPROCABLE</a> :A) &rArr; <a href="#reciprocable-class">RECIPROCABLE</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#complex-class">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#polar-class">POLAR</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#radical-class">RADICAL</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#elementary-class">ELEMENTARY</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#complex-type">COMPLEX</a> :A)</code>

</details>


***

### Classes

#### <code>COMPLEX</code> <sup><sub>[CLASS]</sub></sup><a name="complex-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#complex-class">COMPLEX</a> :A</code>

Methods:
- <code>COMPLEX :: (:A &rarr; :A &rarr; (<a href="#complex-type">COMPLEX</a> :A))</code>
- <code>REAL-PART :: ((<a href="#complex-type">COMPLEX</a> :A) &rarr; :A)</code>
- <code>IMAG-PART :: ((<a href="#complex-type">COMPLEX</a> :A) &rarr; :A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> :A &rArr; <a href="#complex-class">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u8-type">U8</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u16-type">U16</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u32-type">U32</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#u64-type">U64</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i8-type">I8</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i16-type">I16</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i32-type">I32</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#i64-type">I64</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

### Values

#### <code>II</code> <sup><sub>[VALUE]</sub></sup><a name="ii-value"></a>
<code>&forall; :A. <a href="#complex-class">COMPLEX</a> :A &rArr; (<a href="#complex-type">COMPLEX</a> :A)</code>

The complex unit i. (The double ii represents a blackboard-bold i.)


***

#### <code>(CONJUGATE N)</code> <sup><sub>FUNCTION</sub></sup><a name="conjugate-value"></a>
<code>&forall; :A. <a href="#complex-class">COMPLEX</a> :A &rArr; ((<a href="#complex-type">COMPLEX</a> :A) &rarr; (<a href="#complex-type">COMPLEX</a> :A))</code>

The complex conjugate.


***

#### <code>(SQUARE-MAGNITUDE A)</code> <sup><sub>FUNCTION</sub></sup><a name="square-magnitude-value"></a>
<code>&forall; :A. <a href="#complex-class">COMPLEX</a> :A &rArr; ((<a href="#complex-type">COMPLEX</a> :A) &rarr; :A)</code>

The length of a complex number.


***

# Package `coalton-library/math/elementary`<a name="coalton-library/math/elementary-package"></a>

## [math/elementary.lisp](https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.lisp) <a name="coalton-library/math/elementary-math-elementary-lisp-file"></a>

### Classes

#### <code>POLAR</code> <sup><sub>[CLASS]</sub></sup><a name="polar-class"></a>
<code>(<a href="#complex-class">COMPLEX</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; <a href="#polar-class">POLAR</a> :A</code>

For a complex number `z = (complex x y)`, the following identities hold:

    z = (* (magnitude z) (exp (* ii (phase z))))
    (polar z) = (Tuple (magnitude z) (phase z))
    (phase z) = (atan2 y x)


Methods:
- <code>PHASE :: ((<a href="#complex-type">COMPLEX</a> :A) &rarr; :A)</code>
- <code>POLAR :: ((<a href="#complex-type">COMPLEX</a> :A) &rarr; (<a href="#tuple-type">TUPLE</a> :A :A))</code>

<details>
<summary>Instances</summary>

- <code><a href="#polar-class">POLAR</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#polar-class">POLAR</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#polar-class">POLAR</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#polar-class">POLAR</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>RADICAL</code> <sup><sub>[CLASS]</sub></sup><a name="radical-class"></a>
<code><a href="#radical-class">RADICAL</a> :A</code>

Obeys:

    (^ (sqrt x) 2) = x = (^^ (nth-root n x) n)

Methods:
- <code>NTH-ROOT :: (<a href="#integer-type">INTEGER</a> &rarr; :A &rarr; :A)</code>
- <code>SQRT :: (:A &rarr; :A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#radical-class">RADICAL</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#radical-class">RADICAL</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#radical-class">RADICAL</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#radical-class">RADICAL</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>ELEMENTARY</code> <sup><sub>[CLASS]</sub></sup><a name="elementary-class"></a>
<code>(<a href="#reciprocable-class">RECIPROCABLE</a> :A) (<a href="#polar-class">POLAR</a> :A) (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#exponentiable-class">EXPONENTIABLE</a> :A) (<a href="#radical-class">RADICAL</a> :A) &rArr; <a href="#elementary-class">ELEMENTARY</a> :A</code>

Numbers that can be can be passed to elementary functions.

Methods:
- <code>EE :: :A</code>
- <code>PI :: :A</code>

<details>
<summary>Instances</summary>

- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#elementary-class">ELEMENTARY</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#elementary-class">ELEMENTARY</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>EXPONENTIABLE</code> <sup><sub>[CLASS]</sub></sup><a name="exponentiable-class"></a>
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

<details>
<summary>Instances</summary>

- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#exponentiable-class">EXPONENTIABLE</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#exponentiable-class">EXPONENTIABLE</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

#### <code>TRIGONOMETRIC</code> <sup><sub>[CLASS]</sub></sup><a name="trigonometric-class"></a>
<code><a href="#trigonometric-class">TRIGONOMETRIC</a> :A</code>

Standard circular functions and their inverses.

Methods:
- <code>SIN :: (:A &rarr; :A)</code>
- <code>COS :: (:A &rarr; :A)</code>
- <code>TAN :: (:A &rarr; :A)</code>
- <code>ASIN :: (:A &rarr; :A)</code>
- <code>ACOS :: (:A &rarr; :A)</code>
- <code>ATAN :: (:A &rarr; :A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#elementary-class">ELEMENTARY</a> :A &rArr; <a href="#trigonometric-class">TRIGONOMETRIC</a> (<a href="#complex-type">COMPLEX</a> :A)</code>
- <code><a href="#trigonometric-class">TRIGONOMETRIC</a> <a href="#big-float-type">BIG-FLOAT</a></code>

</details>


***

### Values

#### <code>(CIS Z)</code> <sup><sub>FUNCTION</sub></sup><a name="cis-value"></a>
<code>&forall; :A. (<a href="#trigonometric-class">TRIGONOMETRIC</a> :A) (<a href="#complex-class">COMPLEX</a> :A) &rArr; (:A &rarr; (<a href="#complex-type">COMPLEX</a> :A))</code>

A point on the complex unit circle:


    (cis z) := (exp (complex 0 z))
             = (complex (cos z) (sin z))



***

#### <code>(COSH X)</code> <sup><sub>FUNCTION</sub></sup><a name="cosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>(SINH X)</code> <sup><sub>FUNCTION</sub></sup><a name="sinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>(TANH X)</code> <sup><sub>FUNCTION</sub></sup><a name="tanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>(ACOSH X)</code> <sup><sub>FUNCTION</sub></sup><a name="acosh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>(ASINH X)</code> <sup><sub>FUNCTION</sub></sup><a name="asinh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>(ATAN2 Y X)</code> <sup><sub>FUNCTION</sub></sup><a name="atan2-value"></a>
<code>&forall; :A. (<a href="#ord-class">ORD</a> :A) (<a href="#elementary-class">ELEMENTARY</a> :A) &rArr; (:A &rarr; :A &rarr; :A)</code>

Computes the two-argument arctangent of y and x, which is roughly the same
as (atan (/ y x)) when defined and accounting for the quadrant of the (x,y).


***

#### <code>(ATANH X)</code> <sup><sub>FUNCTION</sub></sup><a name="atanh-value"></a>
<code>&forall; :A. <a href="#elementary-class">ELEMENTARY</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>(SINCOS X)</code> <sup><sub>FUNCTION</sub></sup><a name="sincos-value"></a>
<code>&forall; :A. <a href="#trigonometric-class">TRIGONOMETRIC</a> :A &rArr; (:A &rarr; (<a href="#tuple-type">TUPLE</a> :A :A))</code>

***

#### <code>(MAGNITUDE Z)</code> <sup><sub>FUNCTION</sub></sup><a name="magnitude-value"></a>
<code>&forall; :A. (<a href="#radical-class">RADICAL</a> :A) (<a href="#complex-class">COMPLEX</a> :A) &rArr; ((<a href="#complex-type">COMPLEX</a> :A) &rarr; :A)</code>

For `z = x + yi`,


    (magnitude z) = (sqrt (+ (^ x 2) (^ y 2)))


***

# Package `coalton-library/bits`<a name="coalton-library/bits-package"></a>

## [bits.lisp](https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp) <a name="coalton-library/bits-bits-lisp-file"></a>

### Classes

#### <code>BITS</code> <sup><sub>[CLASS]</sub></sup><a name="bits-class"></a>
<code><a href="#num-class">NUM</a> :A &rArr; <a href="#bits-class">BITS</a> :A</code>

Operations on the bits of twos-complement integers

Methods:
- <code>AND :: (:A &rarr; :A &rarr; :A)</code>
- <code>OR :: (:A &rarr; :A &rarr; :A)</code>
- <code>XOR :: (:A &rarr; :A &rarr; :A)</code>
- <code>NOT :: (:A &rarr; :A)</code>
- <code>SHIFT :: (<a href="#integer-type">INTEGER</a> &rarr; :A &rarr; :A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i8-type">I8</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i16-type">I16</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i32-type">I32</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#i64-type">I64</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u8-type">U8</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u16-type">U16</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u32-type">U32</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#u64-type">U64</a></code>
- <code><a href="#bits-class">BITS</a> <a href="#ufix-type">UFIX</a></code>

</details>


***

# Package `coalton-library/char`<a name="coalton-library/char-package"></a>

## [char.lisp](https://github.com/coalton-lang/coalton/tree/main/library/char.lisp) <a name="coalton-library/char-char-lisp-file"></a>

### Values

#### <code>(CHAR-CODE CHAR)</code> <sup><sub>FUNCTION</sub></sup><a name="char-code-value"></a>
<code>(<a href="#char-type">CHAR</a> &rarr; <a href="#ufix-type">UFIX</a>)</code>

***

#### <code>(CODE-CHAR CODE)</code> <sup><sub>FUNCTION</sub></sup><a name="code-char-value"></a>
<code>(<a href="#ufix-type">UFIX</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#char-type">CHAR</a>))</code>

***

# Package `coalton-library/string`<a name="coalton-library/string-package"></a>

## [string.lisp](https://github.com/coalton-lang/coalton/tree/main/library/string.lisp) <a name="coalton-library/string-string-lisp-file"></a>

### Values

#### <code>(REF STR IDX)</code> <sup><sub>FUNCTION</sub></sup><a name="ref-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#char-type">CHAR</a>))</code>

***

#### <code>(CONCAT STR1 STR2)</code> <sup><sub>FUNCTION</sub></sup><a name="concat-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a>)</code>

Concatenate STR1 and STR2 together, returning a new string.


***

#### <code>(LENGTH STR)</code> <sup><sub>FUNCTION</sub></sup><a name="length-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#ufix-type">UFIX</a>)</code>

The length of a string STR.


***

#### <code>(REVERSE S)</code> <sup><sub>FUNCTION</sub></sup><a name="reverse-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a>)</code>

Reverse a string.


***

#### <code>(PARSE-INT STR)</code> <sup><sub>FUNCTION</sub></sup><a name="parse-int-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#integer-type">INTEGER</a>))</code>

Parse the integer in string STR.


***

#### <code>(SUBSTRING STR START END)</code> <sup><sub>FUNCTION</sub></sup><a name="substring-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; <a href="#string-type">STRING</a>)</code>

Compute a substring of a string bounded by given indices.


***

#### <code>(SUBSTRING? SMALL BIG)</code> <sup><sub>FUNCTION</sub></sup><a name="substring?-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Return true if the first argument appears as a substring within the second argument.


***

#### <code>(STRIP-PREFIX PREFIX STR)</code> <sup><sub>FUNCTION</sub></sup><a name="strip-prefix-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#string-type">STRING</a>))</code>

Returns a string without a give prefix, or None if the string
does not have that suffix.


***

#### <code>(STRIP-SUFFIX SUFFIX STR)</code> <sup><sub>FUNCTION</sub></sup><a name="strip-suffix-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#string-type">STRING</a>))</code>

Returns a string without a give suffix, or None if the string
does not have that suffix.


***

#### <code>(REF-UNCHECKED STR IDX)</code> <sup><sub>FUNCTION</sub></sup><a name="ref-unchecked-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; <a href="#char-type">CHAR</a>)</code>

***

#### <code>(SUBSTRING-INDEX SMALL BIG)</code> <sup><sub>FUNCTION</sub></sup><a name="substring-index-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#ufix-type">UFIX</a>))</code>

If the first argument appears as a substring within the second argument, return the starting index into the second argument.


***

# Package `coalton-library/tuple`<a name="coalton-library/tuple-package"></a>

## [tuple.lisp](https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp) <a name="coalton-library/tuple-tuple-lisp-file"></a>

### Types

#### <code>TUPLE3 :A :B :C</code> <sup><sub>[TYPE]</sub></sup><a name="tuple3-type"></a>
- <code>(TUPLE3 :A :B :C)</code>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple3-type">TUPLE3</a> :A :B :C)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple3-type">TUPLE3</a> :A :B :C)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple3-type">TUPLE3</a> :A :B :C)</code>

</details>


***

#### <code>TUPLE4 :A :B :C :D</code> <sup><sub>[TYPE]</sub></sup><a name="tuple4-type"></a>
- <code>(TUPLE4 :A :B :C :D)</code>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple4-type">TUPLE4</a> :A :B :C :D)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple4-type">TUPLE4</a> :A :B :C :D)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple4-type">TUPLE4</a> :A :B :C :D)</code>

</details>


***

#### <code>TUPLE5 :A :B :C :D :E</code> <sup><sub>[TYPE]</sub></sup><a name="tuple5-type"></a>
- <code>(TUPLE5 :A :B :C :D :E)</code>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tuple5-type">TUPLE5</a> :A :B :C :D :E)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) (<a href="#eq-class">EQ</a> :C) (<a href="#eq-class">EQ</a> :D) (<a href="#eq-class">EQ</a> :E) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple5-type">TUPLE5</a> :A :B :C :D :E)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) (<a href="#hash-class">HASH</a> :C) (<a href="#hash-class">HASH</a> :D) (<a href="#hash-class">HASH</a> :E) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple5-type">TUPLE5</a> :A :B :C :D :E)</code>

</details>


***

### Values

#### <code>(FST T)</code> <sup><sub>FUNCTION</sub></sup><a name="fst-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type">TUPLE</a> :A :B) &rarr; :A)</code>

Get the first element of a tuple.


***

#### <code>(SND T)</code> <sup><sub>FUNCTION</sub></sup><a name="snd-value"></a>
<code>&forall; :A :B. ((<a href="#tuple-type">TUPLE</a> :A :B) &rarr; :B)</code>

Get the second element of a tuple.


***

# Package `coalton-library/optional`<a name="coalton-library/optional-package"></a>

## [optional.lisp](https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp) <a name="coalton-library/optional-optional-lisp-file"></a>

### Values

#### <code>(ISNONE X)</code> <sup><sub>FUNCTION</sub></sup><a name="isnone-value"></a>
<code>&forall; :A. ((<a href="#optional-type">OPTIONAL</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X None?


***

#### <code>(ISSOME X)</code> <sup><sub>FUNCTION</sub></sup><a name="issome-value"></a>
<code>&forall; :A. ((<a href="#optional-type">OPTIONAL</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X Some?


***

#### <code>(FROMSOME STR OPT)</code> <sup><sub>FUNCTION</sub></sup><a name="fromsome-value"></a>
<code>&forall; :A. (<a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> :A) &rarr; :A)</code>

Get the value of OPT, erroring with the provided string if it is None.


***

# Package `coalton-library/list`<a name="coalton-library/list-package"></a>

## [list.lisp](https://github.com/coalton-lang/coalton/tree/main/library/list.lisp) <a name="coalton-library/list-list-lisp-file"></a>

### Values

#### <code>(ALL F XS)</code> <sup><sub>FUNCTION</sub></sup><a name="all-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if every element in XS matches F.


***

#### <code>(ANY F L)</code> <sup><sub>FUNCTION</sub></sup><a name="any-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if at least one element in XS matches F.


***

#### <code>(CAR X)</code> <sup><sub>FUNCTION</sub></sup><a name="car-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Return the traditional car of a list. This function is partial


***

#### <code>(CDR XS)</code> <sup><sub>FUNCTION</sub></sup><a name="cdr-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Return the traditional cdr of a list. This function is partial


***

#### <code>(NTH N L)</code> <sup><sub>FUNCTION</sub></sup><a name="nth-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Like INDEX, but errors if the index is not found.


***

#### <code>(SUM XS)</code> <sup><sub>FUNCTION</sub></sup><a name="sum-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Returns the sum of XS


***

#### <code>(ZIP XS YS)</code> <sup><sub>FUNCTION</sub></sup><a name="zip-value"></a>
<code>&forall; :A :B. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

Builds a list of tuples with the elements of XS and YS.


***

#### <code>(DROP N XS)</code> <sup><sub>FUNCTION</sub></sup><a name="drop-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a list with the first N elements removed.


***

#### <code>(FIND F XS)</code> <sup><sub>FUNCTION</sub></sup><a name="find-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the first element in a list matching the predicate function F.


***

#### <code>(HEAD L)</code> <sup><sub>FUNCTION</sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the first element of a list.


***

#### <code>(INIT L)</code> <sup><sub>FUNCTION</sub></sup><a name="init-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns every element except the last in a list.


***

#### <code>(LAST L)</code> <sup><sub>FUNCTION</sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the last element of a list.


***

#### <code>(SORT XS)</code> <sup><sub>FUNCTION</sub></sup><a name="sort-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Performs a sort of XS.


***

#### <code>(TAIL L)</code> <sup><sub>FUNCTION</sub></sup><a name="tail-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#list-type">LIST</a> :A)))</code>

Returns every element except the first in a list.


***

#### <code>(TAKE N XS)</code> <sup><sub>FUNCTION</sub></sup><a name="take-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns the first N elements of a list.


***

#### <code>(COMBS L)</code> <sup><sub>FUNCTION</sub></sup><a name="combs-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Compute a list of all combinations of elements of L. This function is sometimes goes by the name "power set" or "subsets".

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBS L)`.


***

#### <code>(INDEX I XS)</code> <sup><sub>FUNCTION</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the Ith element of a list.


***

#### <code>(NULL? XS)</code> <sup><sub>FUNCTION</sub></sup><a name="null?-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if XS is an empty list.


***

#### <code>(PERMS L)</code> <sup><sub>FUNCTION</sub></sup><a name="perms-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Produce all permutations of the list L.


***

#### <code>(RANGE START END)</code> <sup><sub>FUNCTION</sub></sup><a name="range-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a list containing the numbers from START to END inclusive, counting by 1.


    ```
    &gt; COALTON-USER&gt; (coalton (range 1 5))
    (1 2 3 4 5)

    &gt; COALTON-USER&gt; (coalton (range 5 2))
    (5 4 3 2)
    ```


***

#### <code>(SPLIT C STR)</code> <sup><sub>FUNCTION</sub></sup><a name="split-value"></a>
<code>(<a href="#char-type">CHAR</a> &rarr; <a href="#string-type">STRING</a> &rarr; (<a href="#list-type">LIST</a> <a href="#string-type">STRING</a>))</code>

***

#### <code>(UNION XS YS)</code> <sup><sub>FUNCTION</sub></sup><a name="union-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list with the elements from both XS and YS and without duplicates.


***

#### <code>(APPEND XS YS)</code> <sup><sub>FUNCTION</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Appends two lists together and returns a new list.


***

#### <code>(CONCAT XS)</code> <sup><sub>FUNCTION</sub></sup><a name="concat-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Appends a list of lists together into a single new list.


***

#### <code>(DELETE X YS)</code> <sup><sub>FUNCTION</sub></sup><a name="delete-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Return a new list with the first element equal to X removed.


***

#### <code>(FILTER F XS)</code> <sup><sub>FUNCTION</sub></sup><a name="filter-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list containing every element of XS that matches the predicate function F in the same order.


***

#### <code>(INSERT E LS)</code> <sup><sub>FUNCTION</sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Inserts an element into a list at the first place it is less than or equal to the next element.


***

#### <code>(LENGTH L)</code> <sup><sub>FUNCTION</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Returns the length of a list.


***

#### <code>(LOOKUP E XS)</code> <sup><sub>FUNCTION</sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> (<a href="#tuple-type">TUPLE</a> :A :B)) &rarr; (<a href="#optional-type">OPTIONAL</a> :B))</code>

Returns the value of the first (key, value) tuple in XS where the key matches E.


***

#### <code>(MEMBER E XS)</code> <sup><sub>FUNCTION</sub></sup><a name="member-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns true if any element of XS is equal to E.


***

#### <code>(REPEAT N X)</code> <sup><sub>FUNCTION</sub></sup><a name="repeat-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; :A &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a list with the same value repeated multiple times.


***

#### <code>(SORTBY CMP XS)</code> <sup><sub>FUNCTION</sub></sup><a name="sortby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type">ORD</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Generic version of sort


***

#### <code>(COMBSOF N L)</code> <sup><sub>FUNCTION</sub></sup><a name="combsof-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Produce a list of size-N subsets of L.

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBSOF N L)`.

This function is equivalent to all size-N elements of `(COMBS L)`.


***

#### <code>(COUNTBY F THINGS)</code> <sup><sub>FUNCTION</sub></sup><a name="countby-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Count the number of items in THINGS that satisfy the predicate F.


***

#### <code>(MAXIMUM L)</code> <sup><sub>FUNCTION</sub></sup><a name="maximum-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns a greatest element of a list, or None.


***

#### <code>(MINIMUM L)</code> <sup><sub>FUNCTION</sub></sup><a name="minimum-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns a least element of a list, or None.


***

#### <code>(PRODUCT XS)</code> <sup><sub>FUNCTION</sub></sup><a name="product-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Returns the product of XS


***

#### <code>(REVERSE XS)</code> <sup><sub>FUNCTION</sub></sup><a name="reverse-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list containing the same elements in reverse order.


***

#### <code>(ZIPWITH F XS YS)</code> <sup><sub>FUNCTION</sub></sup><a name="zipwith-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C))</code>

Builds a new list by calling F with elements of XS and YS.


***

#### <code>(INSERTBY CMP X YS)</code> <sup><sub>FUNCTION</sub></sup><a name="insertby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#ord-type">ORD</a>) &rarr; :A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Generic version of insert


***

#### <code>(ZIPWITH3 F XS YS ZS)</code> <sup><sub>FUNCTION</sub></sup><a name="zipwith3-value"></a>
<code>&forall; :A :B :C :D. ((:A &rarr; :B &rarr; :C &rarr; :D) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C) &rarr; (<a href="#list-type">LIST</a> :D))</code>

Build a new list by calling F with elements of XS, YS and ZS


***

#### <code>(ZIPWITH4 F AS BS CS DS)</code> <sup><sub>FUNCTION</sub></sup><a name="zipwith4-value"></a>
<code>&forall; :A :B :C :D :E. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C) &rarr; (<a href="#list-type">LIST</a> :D) &rarr; (<a href="#list-type">LIST</a> :E))</code>

Build a new list by calling F with elements of AS, BS, CS and DS


***

#### <code>(ZIPWITH5 F AS BS CS DS ES)</code> <sup><sub>FUNCTION</sub></sup><a name="zipwith5-value"></a>
<code>&forall; :A :B :C :D :E :F. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E &rarr; :F) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C) &rarr; (<a href="#list-type">LIST</a> :D) &rarr; (<a href="#list-type">LIST</a> :E) &rarr; (<a href="#list-type">LIST</a> :F))</code>

Build a new list by calling F with elements of AS, BS, CS, DS and ES


***

#### <code>(CONCATMAP F XS)</code> <sup><sub>FUNCTION</sub></sup><a name="concatmap-value"></a>
<code>&forall; :A :B. ((:A &rarr; (<a href="#list-type">LIST</a> :B)) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B))</code>

Apply F to each element in XS and concatenate the results.


***

#### <code>(ELEMINDEX X XS)</code> <sup><sub>FUNCTION</sub></sup><a name="elemindex-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#ufix-type">UFIX</a>))</code>

***

#### <code>(FINDINDEX F XS)</code> <sup><sub>FUNCTION</sub></sup><a name="findindex-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#ufix-type">UFIX</a>))</code>

Returns the index of the first element matching the predicate function F.


***

#### <code>(OPTIMUMBY F XS)</code> <sup><sub>FUNCTION</sub></sup><a name="optimumby-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns an optimum according to a total order.


***

#### <code>(PARTITION F XS)</code> <sup><sub>FUNCTION</sub></sup><a name="partition-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#tuple-type">TUPLE</a> (<a href="#list-type">LIST</a> :A) (<a href="#list-type">LIST</a> :A)))</code>

Splits a list into two new lists. The first list contains elements matching predicate F.


***

#### <code>(SINGLETON X)</code> <sup><sub>FUNCTION</sub></sup><a name="singleton-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a list containting one element.


***

#### <code>(TRANSPOSE XS)</code> <sup><sub>FUNCTION</sub></sup><a name="transpose-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Transposes a matrix represented by a list of lists.


***

#### <code>(DIFFERENCE XS YS)</code> <sup><sub>FUNCTION</sub></sup><a name="difference-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list with the first occurence of each element in YS deleted from XS.


***

#### <code>(INSERTIONS A L)</code> <sup><sub>FUNCTION</sub></sup><a name="insertions-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Produce a list of copies of L, each with A inserted at a possible position.

    (insertions 0 (make-list 1 2))
    =&gt; ((0 1 2) (1 0 2) (1 2 0))



***

#### <code>(INTERCALATE XS XSS)</code> <sup><sub>FUNCTION</sub></sup><a name="intercalate-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Intersperses XS into XSS and then concatenates the result.


***

#### <code>(INTERSPERSE E XS)</code> <sup><sub>FUNCTION</sub></sup><a name="intersperse-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list where every other element is E.


***

#### <code>(INTERSECTION XS YS)</code> <sup><sub>FUNCTION</sub></sup><a name="intersection-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns elements which occur in both lists. Does not return duplicates and does not guarantee order.


***

#### <code>(REMOVE-DUPLICATES XS)</code> <sup><sub>FUNCTION</sub></sup><a name="remove-duplicates-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list without duplicate elements.


***

#### <code>EQUIVALENCE-CLASSES</code> <sup><sub>[FUNCTION]</sub></sup><a name="equivalence-classes-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

***

#### <code>(EQUIVALENCE-CLASSES-BY F L)</code> <sup><sub>FUNCTION</sub></sup><a name="equivalence-classes-by-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Break a list into a list of equivalence classes according to an equivalence relation.


***

# Package `coalton-library/result`<a name="coalton-library/result-package"></a>

## [result.lisp](https://github.com/coalton-lang/coalton/tree/main/library/result.lisp) <a name="coalton-library/result-result-lisp-file"></a>

### Values

#### <code>(ISOK X)</code> <sup><sub>FUNCTION</sub></sup><a name="isok-value"></a>
<code>&forall; :A :B. ((<a href="#result-type">RESULT</a> :A :B) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if X is ERR


***

#### <code>(ISERR X)</code> <sup><sub>FUNCTION</sub></sup><a name="iserr-value"></a>
<code>&forall; :A :B. ((<a href="#result-type">RESULT</a> :A :B) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if X is ERR


***

#### <code>(MAPERR F X)</code> <sup><sub>FUNCTION</sub></sup><a name="maperr-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B) &rarr; (<a href="#result-type">RESULT</a> :A :C) &rarr; (<a href="#result-type">RESULT</a> :B :C))</code>

Map over the ERR case


***

#### <code>(FLATTEN X)</code> <sup><sub>FUNCTION</sub></sup><a name="flatten-value"></a>
<code>&forall; :A. ((<a href="#result-type">RESULT</a> :A :A) &rarr; :A)</code>

***

# Package `coalton-library/cell`<a name="coalton-library/cell-package"></a>

## [cell.lisp](https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp) <a name="coalton-library/cell-cell-lisp-file"></a>

### Types

#### <code>CELL :A</code> <sup><sub>[TYPE]</sub></sup><a name="cell-type"></a>

Internally mutable cell

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#num-class">NUM</a> :A &rArr; <a href="#num-class">NUM</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#cell-type">CELL</a> :A) :A</code>
- <code><a href="#into-class">INTO</a> :A (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#cell-type">CELL</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#cell-type">CELL</a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#cell-type">CELL</a></code>

</details>


***

### Values

#### <code>(NEW DATA)</code> <sup><sub>FUNCTION</sub></sup><a name="new-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#cell-type">CELL</a> :A))</code>

Create a new mutable cell


***

#### <code>(POP! CEL)</code> <sup><sub>FUNCTION</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">CELL</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

***

#### <code>(READ CEL)</code> <sup><sub>FUNCTION</sub></sup><a name="read-value"></a>
<code>&forall; :A. ((<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Read the value of a mutable cell


***

#### <code>(PUSH! CEL NEW-ELT)</code> <sup><sub>FUNCTION</sub></sup><a name="push!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">CELL</a> (<a href="#list-type">LIST</a> :A)) &rarr; :A &rarr; (<a href="#list-type">LIST</a> :A))</code>

***

#### <code>(SWAP! CEL DATA)</code> <sup><sub>FUNCTION</sub></sup><a name="swap!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">CELL</a> :A) &rarr; :A &rarr; :A)</code>

Replace the value of a mutable cell with a new value, then return the old value


***

#### <code>(WRITE! CEL DATA)</code> <sup><sub>FUNCTION</sub></sup><a name="write!-value"></a>
<code>&forall; :A. ((<a href="#cell-type">CELL</a> :A) &rarr; :A &rarr; :A)</code>

Set the value of a mutable cell, returning the new value


***

#### <code>(UPDATE! F CEL)</code> <sup><sub>FUNCTION</sub></sup><a name="update!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Apply F to the contents of CEL, storing and returning the result


***

#### <code>(DECREMENT! CEL)</code> <sup><sub>FUNCTION</sub></sup><a name="decrement!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Subtract one from the contents of CEL, storing and returning the new value


***

#### <code>(INCREMENT! CEL)</code> <sup><sub>FUNCTION</sub></sup><a name="increment!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Add one to the contents of CEL, storing and returning the new value


***

#### <code>(UPDATE-SWAP! F CEL)</code> <sup><sub>FUNCTION</sub></sup><a name="update-swap!-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Apply F to the contents of CEL, swapping the result for the old value


***

# Package `coalton-library/vector`<a name="coalton-library/vector-package"></a>

## [vector.lisp](https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp) <a name="coalton-library/vector-vector-lisp-file"></a>

### Types

#### <code>VECTOR :A</code> <sup><sub>[TYPE]</sub></sup><a name="vector-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type">SLICE</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type">SLICE</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#list-type">LIST</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#vector-type">VECTOR</a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#vector-type">VECTOR</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#vector-type">VECTOR</a> :A)</code>

</details>


***

### Values

#### <code>(NEW _)</code> <sup><sub>FUNCTION</sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#unit-type">UNIT</a> &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Create a new empty vector


***

#### <code>(COPY V)</code> <sup><sub>FUNCTION</sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Return a new vector containing the same elements as V


***

#### <code>(HEAD V)</code> <sup><sub>FUNCTION</sub></sup><a name="head-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the first item of V


***

#### <code>(LAST V)</code> <sup><sub>FUNCTION</sub></sup><a name="last-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the last element of V


***

#### <code>(POP! V)</code> <sup><sub>FUNCTION</sub></sup><a name="pop!-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Remove and return the first item of V


***

#### <code>(SET! INDEX ITEM V)</code> <sup><sub>FUNCTION</sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; :A &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Set the INDEXth element of V to ITEM. This function left intentionally unsafe because it does not have a return value to check.


***

#### <code>(INDEX INDEX V)</code> <sup><sub>FUNCTION</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the INDEXth element of V


***

#### <code>(PUSH! ITEM V)</code> <sup><sub>FUNCTION</sub></sup><a name="push!-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Append ITEM to V and resize V if necessary


***

#### <code>(SORT! V)</code> <sup><sub>FUNCTION</sub></sup><a name="sort!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Sort a vector inplace


***

#### <code>(APPEND V1 V2)</code> <sup><sub>FUNCTION</sub></sup><a name="append-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Create a new VECTOR containing the elements of v1 followed by the elements of v2


***

#### <code>(EMPTY? V)</code> <sup><sub>FUNCTION</sub></sup><a name="empty?-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if V is empty


***

#### <code>(LENGTH V)</code> <sup><sub>FUNCTION</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Returns the length of V


***

#### <code>(FOREACH F V)</code> <sup><sub>FUNCTION</sub></sup><a name="foreach-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in V


***

#### <code>(CAPACITY V)</code> <sup><sub>FUNCTION</sub></sup><a name="capacity-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Returns the number of elements that V can store without resizing


***

#### <code>(FOREACH2 F V1 V2)</code> <sup><sub>FUNCTION</sub></sup><a name="foreach2-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :B) &rarr; <a href="#unit-type">UNIT</a>)</code>

Like vector-foreach but twice as good


***

#### <code>(SORT-BY! F V)</code> <sup><sub>FUNCTION</sub></sup><a name="sort-by!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Sort a vector inplace with predicate function F


***

#### <code>(FIND-ELEM E V)</code> <sup><sub>FUNCTION</sub></sup><a name="find-elem-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#ufix-type">UFIX</a>))</code>

Find the index of element E in V


***

#### <code>(HEAD-UNSAFE V)</code> <sup><sub>FUNCTION</sub></sup><a name="head-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Return the first item of V without first checking if V is empty


***

#### <code>(LAST-UNSAFE V)</code> <sup><sub>FUNCTION</sub></sup><a name="last-unsafe-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Return the last element of V without first checking if V is empty


***

#### <code>(POP-UNSAFE! V)</code> <sup><sub>FUNCTION</sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Remove and return the first item of V without checking if the vector is empty


***

#### <code>(INDEX-UNSAFE INDEX V)</code> <sup><sub>FUNCTION</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Return the INDEXth element of V without checking if the element exists


***

#### <code>(SWAP-REMOVE! IDX VEC)</code> <sup><sub>FUNCTION</sub></sup><a name="swap-remove!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Remove the element IDX from VEC and replace it with the last element in VEC. Then return the removed element.


***

#### <code>(FOREACH-INDEX F V)</code> <sup><sub>FUNCTION</sub></sup><a name="foreach-index-value"></a>
<code>&forall; :A :B. ((<a href="#ufix-type">UFIX</a> &rarr; :A &rarr; :B) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in V with its index


***

#### <code>(WITH-CAPACITY N)</code> <sup><sub>FUNCTION</sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Create a new vector with N elements preallocated


***

#### <code>(SWAP-REMOVE-UNSAFE! IDX VEC)</code> <sup><sub>FUNCTION</sub></sup><a name="swap-remove-unsafe!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Remove the element IDX from VEC and replace it with the last element in VEC without bounds checking. Then return the removed element.


***

# Package `coalton-library/slice`<a name="coalton-library/slice-package"></a>

## [slice.lisp](https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp) <a name="coalton-library/slice-slice-lisp-file"></a>

### Types

#### <code>SLICE :A</code> <sup><sub>[TYPE]</sub></sup><a name="slice-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type">SLICE</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> :A) (<a href="#slice-type">SLICE</a> :A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type">SLICE</a> :A) (<a href="#vector-type">VECTOR</a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#slice-type">SLICE</a></code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#slice-type">SLICE</a> :A)</code>

</details>


***

### Values

#### <code>(NEW START LENGTH V)</code> <sup><sub>FUNCTION</sub></sup><a name="new-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#slice-type">SLICE</a> :A))</code>

***

#### <code>(COPY S)</code> <sup><sub>FUNCTION</sub></sup><a name="copy-value"></a>
<code>&forall; :A. ((<a href="#slice-type">SLICE</a> :A) &rarr; (<a href="#slice-type">SLICE</a> :A))</code>

Returns a new slice containg the same elements as S


***

#### <code>(SET! INDEX ITEM S)</code> <sup><sub>FUNCTION</sub></sup><a name="set!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; :A &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Set the element at INDEX in S to ITEM


***

#### <code>(INDEX IDX S)</code> <sup><sub>FUNCTION</sub></sup><a name="index-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Lookup the element at INDEX in S


***

#### <code>(LENGTH S)</code> <sup><sub>FUNCTION</sub></sup><a name="length-value"></a>
<code>&forall; :A. ((<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Returns the length of S


***

#### <code>(FOREACH F S)</code> <sup><sub>FUNCTION</sub></sup><a name="foreach-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in S


***

#### <code>(FOREACH2 F S1 S2)</code> <sup><sub>FUNCTION</sub></sup><a name="foreach2-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; (<a href="#slice-type">SLICE</a> :B) &rarr; <a href="#unit-type">UNIT</a>)</code>

Iterate over S1 and S2 calling F once on each iteration


***

#### <code>(INDEX-UNSAFE IDX S)</code> <sup><sub>FUNCTION</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; :A)</code>

Lookup the element at INDEX in S without bounds checking


***

#### <code>(ITER-CHUNKED F SIZE V)</code> <sup><sub>FUNCTION</sub></sup><a name="iter-chunked-value"></a>
<code>&forall; :A :B. (((<a href="#slice-type">SLICE</a> :A) &rarr; :B) &rarr; <a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Chunked iteration over a vector. Ignores elements at the end if the vector does not evenly divide by the chunk size.


***

#### <code>(ITER-SLIDING F SIZE V)</code> <sup><sub>FUNCTION</sub></sup><a name="iter-sliding-value"></a>
<code>&forall; :A :B. (((<a href="#slice-type">SLICE</a> :A) &rarr; :B) &rarr; <a href="#ufix-type">UFIX</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Sliding iteration over a vector


***

#### <code>(FOREACH-INDEX F S)</code> <sup><sub>FUNCTION</sub></sup><a name="foreach-index-value"></a>
<code>&forall; :A :B. ((<a href="#ufix-type">UFIX</a> &rarr; :A &rarr; :B) &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in S with its index


***

# Package `coalton-library/hashtable`<a name="coalton-library/hashtable-package"></a>

## [hashtable.lisp](https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp) <a name="coalton-library/hashtable-hashtable-lisp-file"></a>

### Types

#### <code>HASHTABLE :A :B</code> <sup><sub>[TYPE]</sub></sup><a name="hashtable-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#hashtable-type">HASHTABLE</a> :A :B)</code>
- <code><a href="#addressable-class">ADDRESSABLE</a> (<a href="#hashtable-type">HASHTABLE</a> :A :B)</code>

</details>


***

### Values

#### <code>(GET TABLE KEY)</code> <sup><sub>FUNCTION</sub></sup><a name="get-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> :B))</code>

Lookup KEY in TABLE


***

#### <code>(NEW _)</code> <sup><sub>FUNCTION</sub></sup><a name="new-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#unit-type">UNIT</a> &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B))</code>

Create a new empty hashtable


***

#### <code>(KEYS TABLE)</code> <sup><sub>FUNCTION</sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns the keys in TABLE as a list


***

#### <code>(SET! TABLE KEY VALUE)</code> <sup><sub>FUNCTION</sub></sup><a name="set!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; :A &rarr; :B &rarr; <a href="#unit-type">UNIT</a>)</code>

Set KEY to VALUE in TABLE


***

#### <code>(COUNT TABLE)</code> <sup><sub>FUNCTION</sub></sup><a name="count-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Returns the number of entries in TABLE


***

#### <code>(VALUES TABLE)</code> <sup><sub>FUNCTION</sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; (<a href="#list-type">LIST</a> :B))</code>

Returns the values in TABLE as a list


***

#### <code>(ENTRIES TABLE)</code> <sup><sub>FUNCTION</sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; (<a href="#list-type">LIST</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

***

#### <code>(FOREACH F TABLE)</code> <sup><sub>FUNCTION</sub></sup><a name="foreach-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call F once for each key value pair in TABLE


***

#### <code>(REMOVE! TABLE KEY)</code> <sup><sub>FUNCTION</sub></sup><a name="remove!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; :A &rarr; <a href="#unit-type">UNIT</a>)</code>

Remove the entry at KEY from TABLE


***

#### <code>(WITH-CAPACITY CAPACITY)</code> <sup><sub>FUNCTION</sub></sup><a name="with-capacity-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B))</code>

Crate a new empty hashtable with a given capacity


***

# Package `coalton-library/monad/state`<a name="coalton-library/monad/state-package"></a>

## [monad/state.lisp](https://github.com/coalton-lang/coalton/tree/main/library/monad/state.lisp) <a name="coalton-library/monad/state-monad-state-lisp-file"></a>

### Types

#### <code>ST :A :B</code> <sup><sub>[TYPE]</sub></sup><a name="st-type"></a>
- <code>(ST (:A &rarr; (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

A computation of a value which may affect the state.
Represented as a closure from initial state to updated state and value.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#st-type">ST</a> :A :B)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#st-type">ST</a> :A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#st-type">ST</a> :A)</code>

</details>


***

### Values

#### <code>GET</code> <sup><sub>[VALUE]</sub></sup><a name="get-value"></a>
<code>&forall; :A. (<a href="#st-type">ST</a> :A :A)</code>

A StatefulComputation which returns the current state as the value.


***

#### <code>(PUT STATE)</code> <sup><sub>FUNCTION</sub></sup><a name="put-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#st-type">ST</a> :A <a href="#unit-type">UNIT</a>))</code>

A StatefulComputation with state set to be given state. The returned value is Unit.


***

#### <code>(RUN SC)</code> <sup><sub>FUNCTION</sub></sup><a name="run-value"></a>
<code>&forall; :A :B. ((<a href="#st-type">ST</a> :A :B) &rarr; :A &rarr; (<a href="#tuple-type">TUPLE</a> :A :B))</code>

Runs a StatefulComputation to produce a final updated state and value given an initial state


***

# Package `coalton-library/iterator`<a name="coalton-library/iterator-package"></a>

## [iterator.lisp](https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp) <a name="coalton-library/iterator-iterator-lisp-file"></a>

### Types

#### <code>ITERATOR :A</code> <sup><sub>[TYPE]</sub></sup><a name="iterator-type"></a>

A forward-moving pointer into an ordered sequence of :ELTs

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#iterator-type">ITERATOR</a> :A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#iterator-type">ITERATOR</a></code>

</details>


***

### Values

#### <code>NEW</code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; :A. ((<a href="#unit-type">UNIT</a> &rarr; (<a href="#optional-type">OPTIONAL</a> :A)) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

***

#### <code>OR!</code> <sup><sub>[FUNCTION]</sub></sup><a name="or!-value"></a>
<code>((<a href="#iterator-type">ITERATOR</a> <a href="#boolean-type">BOOLEAN</a>) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

***

#### <code>AND!</code> <sup><sub>[FUNCTION]</sub></sup><a name="and!-value"></a>
<code>((<a href="#iterator-type">ITERATOR</a> <a href="#boolean-type">BOOLEAN</a>) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

***

#### <code>(ANY! GOOD? ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="any!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Return `True` as soon as any element of ITER is GOOD?, or `False` if none of them are.

Returns `False` if ITER is empty.


***

#### <code>(MAX! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="max!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the most-positive element of ITER, or `None` if ITER is empty.


***

#### <code>(MIN! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="min!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the most-negative element of ITER, or `None` if ITER is empty.


***

#### <code>(SUM! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="sum!-value"></a>
<code>&forall; :A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; :A)</code>

Add together all the elements of ITER.


***

#### <code>ZIP!</code> <sup><sub>[FUNCTION]</sub></sup><a name="zip!-value"></a>
<code>&forall; :A :B. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :B) &rarr; (<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

Return an iterator of tuples contining elements from two iterators.


***

#### <code>EMPTY</code> <sup><sub>[VALUE]</sub></sup><a name="empty-value"></a>
<code>&forall; :A. (<a href="#iterator-type">ITERATOR</a> :A)</code>

Yields nothing; stops immediately


***

#### <code>(FIND! THIS? ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="find!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the first element of ITER for which THIS? returns `True`, or `None` if no element matches.


***

#### <code>(FOLD! FUNC INIT ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="fold!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B &rarr; :A) &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :B) &rarr; :A)</code>

Tail recursive in-order fold. Common Lisp calls this operation `reduce`.

If ITER is empty, returns INIT. Otherwise, calls (FUNC STATE ITEM) for each ITEM of ITER to produce a new
STATE, using INIT as the first STATE.


***

#### <code>(LAST! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="last!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Yields the last element of ITER, completely consuming it.


***

#### <code>(NEXT! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="next!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Advance ITER, returning its next yielded value, or `None` if the iterator is exhausted.
Behavior is undefined if two threads concurrently call `next!` on the same iterator without a lock. Note that
most of the operators defined on iterators call `next!` internally, or create new iterators which will call
`next!` on their inputs.


***

#### <code>(TAKE! COUNT ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="take!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An `Iterator` which yields at most COUNT elements from ITER.


***

#### <code>(UP-TO LIMIT)</code> <sup><sub>FUNCTION</sub></sup><a name="up-to-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins at zero and counts up to, but not including, LIMIT.


***

#### <code>(CHAIN! ITER1 ITER2)</code> <sup><sub>FUNCTION</sub></sup><a name="chain!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

***

#### <code>(COUNT! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="count!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Return the number of elements in ITER.
This operation could be called `length!`, but `count!` emphasizes the fact that it consumes ITER, and
afterwards, ITER will be exhausted.


***

#### <code>(EVERY! GOOD? ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="every!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Return `True` if every element of ITER is GOOD?, or `False` as soon as any element is not GOOD?.

Returns `True` if ITER is empty.


***

#### <code>(CONCAT! FIRST SECOND)</code> <sup><sub>FUNCTION</sub></sup><a name="concat!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield all the elements of FIRST followed by all the elements from SECOND.


***

#### <code>(FILTER! KEEP? ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="filter!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Return an iterator over the elements from ITER for which KEEP? returns true.


***

#### <code>(FLATTEN! ITERS)</code> <sup><sub>FUNCTION</sub></sup><a name="flatten!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> (<a href="#iterator-type">ITERATOR</a> :A)) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield all the elements from each of the ITERS in order.


***

#### <code>(ZIPWITH! F LEFT RIGHT)</code> <sup><sub>FUNCTION</sub></sup><a name="zipwith!-value"></a>
<code>&forall; :A :B :C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :C))</code>

Return an iterator of elements from LEFT and RIGHT which terminates as soon as either LEFT or RIGHT does.


***

#### <code>(DOWN-FROM LIMIT)</code> <sup><sub>FUNCTION</sub></sup><a name="down-from-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins below the provided limit and counts down through and including zero.


***

#### <code>(FOR-EACH! THUNK ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="for-each!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call THUNK on each element of ITER in order for side effects.
Discard values returned by THUNK.


***

#### <code>(INDEX-OF! THIS? ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="index-of!-value"></a>
<code>&forall; :A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#ufix-type">UFIX</a>))</code>

Return the zero-based index of the first element of ITER for which THIS? is `True`, or `None` if no element matches.


***

#### <code>(LIST-ITER LST)</code> <sup><sub>FUNCTION</sub></sup><a name="list-iter-value"></a>
<code>&forall; :A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield successive elements of LST.
Behavior is undefined if the iterator is advanced after a destructive modification of LST.


***

#### <code>(OPTIMIZE! BETTER? ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="optimize!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the best element of ITER.

Return `None` if ITER is empty.


***

#### <code>(CHAR-RANGE START END)</code> <sup><sub>FUNCTION</sub></sup><a name="char-range-value"></a>
<code>(<a href="#char-type">CHAR</a> &rarr; <a href="#char-type">CHAR</a> &rarr; (<a href="#iterator-type">ITERATOR</a> <a href="#char-type">CHAR</a>))</code>

An inclusive range of characters from START to END by cl:char-code.


***

#### <code>(ENUMERATE! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="enumerate!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> <a href="#ufix-type">UFIX</a> :A)))</code>

Pair successive zero-based incides with elements from ITER


***

#### <code>(PAIR-WITH! FUNC KEYS)</code> <sup><sub>FUNCTION</sub></sup><a name="pair-with!-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

Returns an iterator over tuples whose FSTs are elements from KEYS, and whose SNDs are the results of applying FUNC to those KEYS.


***

#### <code>(UNWRAPPED! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="unwrapped!-value"></a>
<code>&forall; :A :B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> (:A :B)) &rarr; (<a href="#iterator-type">ITERATOR</a> :B))</code>

***

#### <code>(UP-THROUGH LIMIT)</code> <sup><sub>FUNCTION</sub></sup><a name="up-through-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins at zero and counts up through and including LIMIT.


***

#### <code>(INTERLEAVE! LEFT RIGHT)</code> <sup><sub>FUNCTION</sub></sup><a name="interleave!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Return an interator of interleaved elements from LEFT and RIGHT which terminates as soon as both LEFT and RIGHT do.
In the case one iterator terminates before the other, the other is exhausted before terminating.


***

#### <code>(REPEAT-ITEM ITEM COUNT)</code> <sup><sub>FUNCTION</sub></sup><a name="repeat-item-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#ufix-type">UFIX</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield ITEM COUNT times, then stop.


***

#### <code>(VECTOR-ITER VEC)</code> <sup><sub>FUNCTION</sub></sup><a name="vector-iter-value"></a>
<code>&forall; :A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield successive elements of VEC.
Behavior is undefined if the iterator is advanced after a destructive modification of VEC.


***

#### <code>(STRING-CHARS STR)</code> <sup><sub>FUNCTION</sub></sup><a name="string-chars-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; (<a href="#iterator-type">ITERATOR</a> <a href="#char-type">CHAR</a>))</code>

Yield successive `Char`s from STR.
Behavior is undefined if the iterator is advanced after a destructive modification of STR.


***

#### <code>(COLLECT-LIST! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="collect-list!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Construct a `List` containing all the elements from ITER in order.


***

#### <code>(COUNT-FOREVER _)</code> <sup><sub>FUNCTION</sub></sup><a name="count-forever-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (<a href="#unit-type">UNIT</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An infinite iterator which starts at 0 and counts upwards by 1.


***

#### <code>ELEMENTWISE==!</code> <sup><sub>[FUNCTION]</sub></sup><a name="elementwise==!-value"></a>
<code>&forall; :A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is every element of the first iterator `==' to the corresponding element of the second?

True if two iterators have the same length, and for every N, the Nth element of the first iterator is `==' to
the Nth element of the second iterator.


***

#### <code>(RECURSIVE-ITER SUCC DONE? START)</code> <sup><sub>FUNCTION</sub></sup><a name="recursive-iter-value"></a>
<code>&forall; :A. ((:A &rarr; :A) &rarr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which yields first START, then (SUCC START), then (SUCC (SUCC START)), and so on, stopping as soon as such a value is `done?`.

Beware off-by-one errors: the first value which is `done?` is not yielded. If `(done?  start)' is true, the
iterator is empty.


***

#### <code>(REPEAT-FOREVER ITEM)</code> <sup><sub>FUNCTION</sub></sup><a name="repeat-forever-value"></a>
<code>&forall; :A. (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield ITEM over and over, infinitely.


***

#### <code>(COLLECT-VECTOR! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="collect-vector!-value"></a>
<code>&forall; :A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Construct a `Vector` containing all the elements from ITER in order.


***

#### <code>(RANGE-DECREASING STEP START END)</code> <sup><sub>FUNCTION</sub></sup><a name="range-decreasing-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

A range which begins below START and counts down through and including END by STEP.

Equivalent to reversing `range-increasing`


***

#### <code>(RANGE-INCREASING STEP START END)</code> <sup><sub>FUNCTION</sub></sup><a name="range-increasing-value"></a>
<code>&forall; :A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins at START and yields successive elements spaced by STEP, stopping before END.


***

#### <code>(ELEMENTWISE-HASH! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="elementwise-hash!-value"></a>
<code>&forall; :A. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#ufix-type">UFIX</a>)</code>

Hash an iterator by combining the hashes of all its elements.

The empty iterator will hash as 0.


***

#### <code>(COLLECT-HASHTABLE! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="collect-hashtable!-value"></a>
<code>&forall; :A :B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)) &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B))</code>

Construct a `HashTable` containing all the key/value pairs from ITER.

If a key appears in ITER multiple times, the resulting table will contain its last corresponding value.


***

#### <code>(ELEMENTWISE-MATCH! SAME? LEFT RIGHT)</code> <sup><sub>FUNCTION</sub></sup><a name="elementwise-match!-value"></a>
<code>&forall; :A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Are LEFT and RIGHT elementwise-identical under SAME?

True if, for every pair of elements (A B) in (LEFT RIGHT), (same? A B) is True, and LEFT and RIGHT have the
same length.


***

#### <code>(REMOVE-DUPLICATES! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="remove-duplicates!-value"></a>
<code>&forall; :A. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield unique elements from ITER in order of first appearance.


***

#### <code>(COLLECT-VECTOR-SIZE-HINT! SIZE ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="collect-vector-size-hint!-value"></a>
<code>&forall; :A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Construct a `Vector` with initial allocation for SIZE elements, and fill it with all the elements from ITER in order.

The vector will be resized if ITER contains more than SIZE elements.


***

# Package `coalton-library/ord-tree`<a name="coalton-library/ord-tree-package"></a>

## [ord-tree.lisp](https://github.com/coalton-lang/coalton/tree/main/library/ord-tree.lisp) <a name="coalton-library/ord-tree-ord-tree-lisp-file"></a>

### Types

#### <code>TREE :A</code> <sup><sub>[TYPE]</sub></sup><a name="tree-type"></a>
- <code>EMPTY</code>

A red-black balanced binary tree, sorted by `&lt;=&gt;' and unique by `=='.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code><a href="#eq-class">EQ</a> :A &rArr; <a href="#eq-class">EQ</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code><a href="#hash-class">HASH</a> :A &rArr; <a href="#hash-class">HASH</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#tree-type">TREE</a> :A)</code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#tree-type">TREE</a></code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#tree-type">TREE</a> :A)</code>

</details>


***

### Values

#### <code>(MERGE A B)</code> <sup><sub>FUNCTION</sub></sup><a name="merge-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type">TREE</a> :A) &rarr; (<a href="#tree-type">TREE</a> :A) &rarr; (<a href="#tree-type">TREE</a> :A))</code>

Construct a Tree containing all the elements of both A and B.

If A and B contain elements A' and B' respectively where (== A' B'), the result will contain either A' or
B'. Which one is chosen for the result is undefined.


***

#### <code>(INSERT TRE ELT)</code> <sup><sub>FUNCTION</sub></sup><a name="insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type">TREE</a> :A) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#tree-type">TREE</a> :A)))</code>

Construct a new Tree like TRE but containing ELT. If TRE already had an element `==' to ELT, return None.


***

#### <code>(LOOKUP HAYSTACK NEEDLE)</code> <sup><sub>FUNCTION</sub></sup><a name="lookup-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type">TREE</a> :A) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

If HAYSTACK contains an element `==' to NEEDLE, return it.


***

#### <code>(REMOVE TRE ELT)</code> <sup><sub>FUNCTION</sub></sup><a name="remove-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type">TREE</a> :A) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#tree-type">TREE</a> :A)))</code>

Construct a new Tree like TRE but without an element `==' to ELT. Return None if TRE does not contain an element `==' to ELT.


***

#### <code>(REPLACE TRE ELT)</code> <sup><sub>FUNCTION</sub></sup><a name="replace-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type">TREE</a> :A) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#tuple-type">TUPLE</a> (<a href="#tree-type">TREE</a> :A) :A)))</code>

Construct a new Tree like TRE but with ELT replacing an old element `==' to ELT.

Return the new tree and the removed element.

If TRE did not have an element `==' to ELT, return None.


***

#### <code>(COLLECT! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="collect!-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#tree-type">TREE</a> :A))</code>

Construct a Tree containing all the elements of ITER.

If ITER contains duplicates, later elements will overwrite earlier elements.


***

#### <code>DECREASING-ORDER</code> <sup><sub>[FUNCTION]</sub></sup><a name="decreasing-order-value"></a>
<code>&forall; :A. ((<a href="#tree-type">TREE</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Iterate the elements of a tree, starting with the greatest by `&lt;=&gt;' and ending with the least.


***

#### <code>INCREASING-ORDER</code> <sup><sub>[FUNCTION]</sub></sup><a name="increasing-order-value"></a>
<code>&forall; :A. ((<a href="#tree-type">TREE</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Iterate the elements of a tree, starting with the least by `&lt;=&gt;' and ending with the greatest.


***

#### <code>(INSERT-OR-REPLACE TRE ELT)</code> <sup><sub>FUNCTION</sub></sup><a name="insert-or-replace-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type">TREE</a> :A) &rarr; :A &rarr; (<a href="#tree-type">TREE</a> :A))</code>

Construct a new Tree like TRE but containing ELT.

If TRE already had an element `==' to ELT, remove it, replace it with ELT, and discard the removed value.

Like `replace-or-insert', but prioritizing insertion as a use case.


***

#### <code>(REPLACE-OR-INSERT TRE ELT)</code> <sup><sub>FUNCTION</sub></sup><a name="replace-or-insert-value"></a>
<code>&forall; :A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#tree-type">TREE</a> :A) &rarr; :A &rarr; (<a href="#tuple-type">TUPLE</a> (<a href="#tree-type">TREE</a> :A) (<a href="#optional-type">OPTIONAL</a> :A)))</code>

Construct a new Tree like TRE but containing ELT.

If TRE already had an element `==' to ELT, remove it, replace it with ELT, and return the removed value
alongside the new tree.


***

# Package `coalton-library/ord-map`<a name="coalton-library/ord-map-package"></a>

## [ord-map.lisp](https://github.com/coalton-lang/coalton/tree/main/library/ord-map.lisp) <a name="coalton-library/ord-map-ord-map-lisp-file"></a>

### Types

#### <code>MAP :A :B</code> <sup><sub>[TYPE]</sub></sup><a name="map-type"></a>

A red-black binary tree which associates each :KEY with a :VALUE, sorted by `&lt;=&gt;' on the keys and unique by `==' on the keys.

<details>
<summary>Instances</summary>

- <code><a href="#runtimerepr-class">RUNTIMEREPR</a> (<a href="#map-type">MAP</a> :A :B)</code>
- <code>(<a href="#eq-class">EQ</a> :A) (<a href="#eq-class">EQ</a> :B) &rArr; <a href="#eq-class">EQ</a> (<a href="#map-type">MAP</a> :A :B)</code>
- <code>(<a href="#hash-class">HASH</a> :A) (<a href="#hash-class">HASH</a> :B) &rArr; <a href="#hash-class">HASH</a> (<a href="#map-type">MAP</a> :A :B)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#map-type">MAP</a> :A)</code>
- <code><a href="#ord-class">ORD</a> :A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#map-type">MAP</a> :A :B)</code>

</details>


***

### Values

#### <code>(KEYS MP)</code> <sup><sub>FUNCTION</sub></sup><a name="keys-value"></a>
<code>&forall; :A :B. ((<a href="#map-type">MAP</a> :A :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Iterate over the keys in MP, sorted least-to-greatest.


***

#### <code>EMPTY</code> <sup><sub>[VALUE]</sub></sup><a name="empty-value"></a>
<code>&forall; :A :B. (<a href="#map-type">MAP</a> :A :B)</code>

A Map containing no mappings.


***

#### <code>(MERGE A B)</code> <sup><sub>FUNCTION</sub></sup><a name="merge-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type">MAP</a> :A :B) &rarr; (<a href="#map-type">MAP</a> :A :B) &rarr; (<a href="#map-type">MAP</a> :A :B))</code>

Construct a Tree containing all the mappings of both A and B.

If A and B contain mappings X -&gt; A' and X -&gt; B', it is undefined whether the result maps X to A' or B'.

Because of the possibility that A and B will map the same X to different A' and B', this is not an associative
operation, and therefore Map cannot implement Monoid.


***

#### <code>(INSERT MP K V)</code> <sup><sub>FUNCTION</sub></sup><a name="insert-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type">MAP</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#map-type">MAP</a> :A :B)))</code>

Associate K with V in MP. If MP already contains a mapping for K, return None.


***

#### <code>(LOOKUP MP K)</code> <sup><sub>FUNCTION</sub></sup><a name="lookup-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type">MAP</a> :A :B) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> :B))</code>

Retrieve the value associated with K in MP, or None if MP does not contain K.


***

#### <code>(REMOVE MP K)</code> <sup><sub>FUNCTION</sub></sup><a name="remove-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type">MAP</a> :A :B) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#map-type">MAP</a> :A :B)))</code>

Remove the mapping associated with K in MP. If K does not have a value in MP, return None.


***

#### <code>(UPDATE FUNC MP KEY)</code> <sup><sub>FUNCTION</sub></sup><a name="update-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :B &rArr; ((:A &rarr; :A) &rarr; (<a href="#map-type">MAP</a> :B :A) &rarr; :B &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#map-type">MAP</a> :B :A)))</code>

Apply FUNC to the value corresponding to KEY in MP, returning a new `Map' which maps KEY to the result of the function.


***

#### <code>(VALUES MP)</code> <sup><sub>FUNCTION</sub></sup><a name="values-value"></a>
<code>&forall; :A :B. ((<a href="#map-type">MAP</a> :A :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :B))</code>

Iterate over the values in MP, sorted by their corresponding keys in least-to-greatest order.


***

#### <code>(ENTRIES MP)</code> <sup><sub>FUNCTION</sub></sup><a name="entries-value"></a>
<code>&forall; :A :B. ((<a href="#map-type">MAP</a> :A :B) &rarr; (<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

Iterate over the (key value) pairs in MP, sorted by the keys in least-to-greatest order.


***

#### <code>(REPLACE MP K V)</code> <sup><sub>FUNCTION</sub></sup><a name="replace-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type">MAP</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#tuple-type">TUPLE</a> (<a href="#map-type">MAP</a> :A :B) :B)))</code>

Change the association of K to V in MP. If MP did not already contain a mapping for K, return None.


***

#### <code>(COLLECT! ITER)</code> <sup><sub>FUNCTION</sub></sup><a name="collect!-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)) &rarr; (<a href="#map-type">MAP</a> :A :B))</code>

Construct a Map containing all the (key value) pairs in ITER.

If ITER contains duplicate keys, later values will overwrite earlier values.


***

#### <code>(INSERT-OR-REPLACE MP K V)</code> <sup><sub>FUNCTION</sub></sup><a name="insert-or-replace-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type">MAP</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#map-type">MAP</a> :A :B))</code>

Update MP to associate K with V.

If MP already contains a mapping for K, replace it and discard the old value.

Like `replace-or-insert', but prioritizing insertion as a use case.


***

#### <code>(REPLACE-OR-INSERT MP K V)</code> <sup><sub>FUNCTION</sub></sup><a name="replace-or-insert-value"></a>
<code>&forall; :A :B. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#map-type">MAP</a> :A :B) &rarr; :A &rarr; :B &rarr; (<a href="#tuple-type">TUPLE</a> (<a href="#map-type">MAP</a> :A :B) (<a href="#optional-type">OPTIONAL</a> :B)))</code>

Update MP to associate K with V.

If MP already contains a mapping for K, replace it and return the old value.


***

</div>
    </div>
    </div>