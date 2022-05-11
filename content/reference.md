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
<div style="position: relative; right: 40%; width: 40%;">

### Reference
- <a href="#coalton-package"><code>coalton</code></a>
- <a href="#coalton-library/classes-package"><code>coalton-library/classes</code></a>
- <a href="#coalton-library/builtin-package"><code>coalton-library/builtin</code></a>
- <a href="#coalton-library/bits-package"><code>coalton-library/bits</code></a>
- <a href="#coalton-library/arith-package"><code>coalton-library/arith</code></a>
- <a href="#coalton-library/char-package"><code>coalton-library/char</code></a>
- <a href="#coalton-library/string-package"><code>coalton-library/string</code></a>
- <a href="#coalton-library/tuple-package"><code>coalton-library/tuple</code></a>
- <a href="#coalton-library/optional-package"><code>coalton-library/optional</code></a>
- <a href="#coalton-library/list-package"><code>coalton-library/list</code></a>
- <a href="#coalton-library/result-package"><code>coalton-library/result</code></a>
- <a href="#coalton-library/functions-package"><code>coalton-library/functions</code></a>
- <a href="#coalton-library/cell-package"><code>coalton-library/cell</code></a>
- <a href="#coalton-library/vector-package"><code>coalton-library/vector</code></a>
- <a href="#coalton-library/slice-package"><code>coalton-library/slice</code></a>
- <a href="#coalton-library/hashtable-package"><code>coalton-library/hashtable</code></a>
- <a href="#coalton-library/monad/state-package"><code>coalton-library/monad/state</code></a>
- <a href="#coalton-library/iterator-package"><code>coalton-library/iterator</code></a>


</div>
</div>
<div>

# Package `coalton`<a name="coalton-package"></a>

### Types

#### <code>I8</code> <sup><sub>[TYPE]</sub></sup><a name="i8-type"></a>

Signed 8-bit integer capable of storing values in `[-128, 127]`. Uses `(signed-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i8-type">I8</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i8-type">I8</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i8-type">I8</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i8-type">I8</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i8-type">I8</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i8-type">I8</a></code>

</details>


***

#### <code>U8</code> <sup><sub>[TYPE]</sub></sup><a name="u8-type"></a>

Unsigned 8-bit integer capable of storing values in `[0, 255]`. Uses `(unsigned-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u8-type">U8</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u8-type">U8</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u8-type">U8</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u8-type">U8</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u8-type">U8</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u8-type">U8</a></code>

</details>


***

#### <code>I16</code> <sup><sub>[TYPE]</sub></sup><a name="i16-type"></a>

Signed 16-bit integer capable of storing values in `[-32768, 32767]`. Uses `(signed-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i16-type">I16</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i16-type">I16</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i16-type">I16</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i16-type">I16</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i16-type">I16</a></code>

</details>


***

#### <code>I32</code> <sup><sub>[TYPE]</sub></sup><a name="i32-type"></a>

Signed 32-bit integer capable of storing values in `[-2147483648, 2147483647]`. Uses `(signed-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i32-type">I32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i32-type">I32</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i32-type">I32</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i32-type">I32</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i32-type">I32</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i32-type">I32</a></code>

</details>


***

#### <code>I64</code> <sup><sub>[TYPE]</sub></sup><a name="i64-type"></a>

Signed 64-bit integer capable of storing values in `[-9223372036854775808, 9223372036854775807]`. Uses `(signed-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#i64-type">I64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i64-type">I64</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#i64-type">I64</a></code>
- <code><a href="#num-class">NUM</a> <a href="#i64-type">I64</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#i64-type">I64</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type">I64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i64-type">I64</a></code>

</details>


***

#### <code>U16</code> <sup><sub>[TYPE]</sub></sup><a name="u16-type"></a>

Unsigned 16-bit integer capable of storing values in `[0, 65535]`. Uses `(unsigned-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u16-type">U16</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u16-type">U16</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u16-type">U16</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u16-type">U16</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u16-type">U16</a></code>

</details>


***

#### <code>U32</code> <sup><sub>[TYPE]</sub></sup><a name="u32-type"></a>

Unsigned 32-bit integer capable of storing values in `[0, 4294967295]`. Uses `(unsigned-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u32-type">U32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u32-type">U32</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u32-type">U32</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u32-type">U32</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u32-type">U32</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u32-type">U32</a></code>

</details>


***

#### <code>U64</code> <sup><sub>[TYPE]</sub></sup><a name="u64-type"></a>

Unsigned 64-bit integer capable of storing values in `[0, 18446744073709551615]`. Uses `(unsigned-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#u64-type">U64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u64-type">U64</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#u64-type">U64</a></code>
- <code><a href="#num-class">NUM</a> <a href="#u64-type">U64</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#u64-type">U64</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u64-type">U64</a></code>

</details>


***

#### <code>CHAR</code> <sup><sub>[TYPE]</sub></sup><a name="char-type"></a>

A single character represented as a `character` type.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#char-type">CHAR</a></code>

</details>


***

#### <code>IFIX</code> <sup><sub>[TYPE]</sub></sup><a name="ifix-type"></a>

Non-allocating tagged integer; range is platform-dependent. Uses `fixnum`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#num-class">NUM</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#ifix-type">IFIX</a></code>

</details>


***

#### <code>UFIX</code> <sup><sub>[TYPE]</sub></sup><a name="ufix-type"></a>

Non-allocating tagged non-negative integer; range is platform-dependent. Uses `(and fixnum unsigned-byte)`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#num-class">NUM</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#ufix-type">UFIX</a></code>

</details>


***

#### <code>VOID</code> <sup><sub>[TYPE]</sub></sup><a name="void-type"></a>


***

#### <code>ARROW A B</code> <sup><sub>[TYPE]</sub></sup><a name="arrow-type"></a>

Type constructor for function types.


***

#### <code>STRING</code> <sup><sub>[TYPE]</sub></sup><a name="string-type"></a>

String of characters represented by Common Lisp `string`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#string-type">STRING</a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#string-type">STRING</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type">STRING</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#string-type">STRING</a></code>
- <code><a href="#monoid-class">MONOID</a> <a href="#string-type">STRING</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type">STRING</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#string-type">STRING</a></code>

</details>


***

#### <code>INTEGER</code> <sup><sub>[TYPE]</sub></sup><a name="integer-type"></a>

Unbound integer. Uses `integer`.

<details>
<summary>Instances</summary>

- <code><a href="#bits-class">BITS</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#num-class">NUM</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#fraction-type">FRACTION</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type">I64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i8-type">I8</a></code>
- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type">STRING</a> <a href="#integer-type">INTEGER</a></code>

</details>


***

#### <code>FRACTION</code> <sup><sub>[TYPE]</sub></sup><a name="fraction-type"></a>

A ratio of integers always in reduced form.

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#fraction-type">FRACTION</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#fraction-type">FRACTION</a></code>

</details>


***

#### <code>LISP-OBJECT</code> <sup><sub>[TYPE]</sub></sup><a name="lisp-object-type"></a>

Opaque container for arbitrary lisp objects. At runtime this is equivalent to type `t`.


***

#### <code>DOUBLE-FLOAT</code> <sup><sub>[TYPE]</sub></sup><a name="double-float-type"></a>

Double precision floating point numer. Uses `double-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>

</details>


***

#### <code>SINGLE-FLOAT</code> <sup><sub>[TYPE]</sub></sup><a name="single-float-type"></a>

Single precision floating point numer. Uses `single-float`.

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>

</details>


***

## [classes.lisp](https://github.com/coalton-lang/coalton/tree/main/library/classes.lisp) <a name="coalton-classes-lisp-file"></a>

### Types

#### <code>LIST A</code> <sup><sub>[TYPE]</sub></sup><a name="list-type"></a>
- <code>(CONS A (<a href="#list-type">LIST</a> A))</code>
- <code>NIL</code>

Homogeneous list of objects represented as a Common Lisp `list`.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#hash-class">HASH</a> A &rArr; <a href="#hash-class">HASH</a> (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> A) (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#string-type">STRING</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#list-type">LIST</a></code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#list-type">LIST</a></code>
- <code><a href="#foldable-class">FOLDABLE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type">LIST</a></code>

</details>


***

#### <code>UNIT</code> <sup><sub>[TYPE]</sub></sup><a name="unit-type"></a>
- <code>UNIT</code>

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#unit-type">UNIT</a></code>

</details>


***

#### <code>BOOLEAN</code> <sup><sub>[TYPE]</sub></sup><a name="boolean-type"></a>
- <code>FALSE</code>
- <code>TRUE</code>

Either true or false represented by `t` and `nil` respectively.

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#boolean-type">BOOLEAN</a></code>
- <code><a href="#hash-class">HASH</a> <a href="#boolean-type">BOOLEAN</a></code>

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

- <code><a href="#eq-class">EQ</a> <a href="#ord-type">ORD</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#ord-type">ORD</a></code>

</details>


***

#### <code>TUPLE A B</code> <sup><sub>[TYPE]</sub></sup><a name="tuple-type"></a>
- <code>(TUPLE A B)</code>

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple-type">TUPLE</a> A B)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type">TUPLE</a> A B) (<a href="#tuple-type">TUPLE</a> B A)</code>
- <code>(<a href="#ord-class">ORD</a> A) (<a href="#ord-class">ORD</a> B) &rArr; <a href="#ord-class">ORD</a> (<a href="#tuple-type">TUPLE</a> A B)</code>
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type">TUPLE</a> A B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type">TUPLE</a> A B) (<a href="#tuple-type">TUPLE</a> B A)</code>

</details>


***

#### <code>RESULT A B</code> <sup><sub>[TYPE]</sub></sup><a name="result-type"></a>
- <code>(ERR A)</code>
- <code>(OK B)</code>

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) &rArr; <a href="#eq-class">EQ</a> (<a href="#result-type">RESULT</a> A B)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> A) (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code>(<a href="#ord-class">ORD</a> A) (<a href="#ord-class">ORD</a> B) &rArr; <a href="#ord-class">ORD</a> (<a href="#result-type">RESULT</a> A B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type">OPTIONAL</a> A) (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type">RESULT</a> A B) (<a href="#optional-type">OPTIONAL</a> B)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#result-type">RESULT</a> A)</code>
- <code><a href="#monoid-class">MONOID</a> A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#result-type">RESULT</a> B A)</code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#result-type">RESULT</a> A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#result-type">RESULT</a> B A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#result-type">RESULT</a> A)</code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type">RESULT</a> A)</code>

</details>


***

#### <code>OPTIONAL A</code> <sup><sub>[TYPE]</sub></sup><a name="optional-type"></a>
- <code>(SOME A)</code>
- <code>NONE</code>

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> A) (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#num-class">NUM</a> A &rArr; <a href="#num-class">NUM</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#ord-class">ORD</a> A &rArr; <a href="#ord-class">ORD</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type">OPTIONAL</a> A) (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type">RESULT</a> A B) (<a href="#optional-type">OPTIONAL</a> B)</code>
- <code><a href="#monad-class">MONAD</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#monoid-class">MONOID</a> A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#monadfail-class">MONADFAIL</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type">OPTIONAL</a></code>

</details>


***

### Classes

#### <code>EQ</code> <sup><sub>[CLASS]</sub></sup><a name="eq-class"></a>
<code><a href="#eq-class">EQ</a> A</code>

Types which have equality defined.

Methods:
- <code>== :: (A &rarr; A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

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
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> A) &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> A))</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#fraction-type">FRACTION</a>)</code>
- <code><a href="#eq-class">EQ</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#eq-class">EQ</a> <a href="#string-type">STRING</a></code>
- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple-type">TUPLE</a> A B)</code>
- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) (<a href="#eq-class">EQ</a> C) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple3-type">TUPLE3</a> A B C)</code>
- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) (<a href="#eq-class">EQ</a> C) (<a href="#eq-class">EQ</a> D) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple4-type">TUPLE4</a> A B C D)</code>
- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) (<a href="#eq-class">EQ</a> C) (<a href="#eq-class">EQ</a> D) (<a href="#eq-class">EQ</a> E) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple5-type">TUPLE5</a> A B C D E)</code>
- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#list-type">LIST</a> A)</code>
- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) &rArr; <a href="#eq-class">EQ</a> (<a href="#result-type">RESULT</a> A B)</code>
- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#cell-type">CELL</a> A)</code>
- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#slice-type">SLICE</a> A)</code>

</details>


***

#### <code>ISO</code> <sup><sub>[CLASS]</sub></sup><a name="iso-class"></a>
<code>(<a href="#into-class">INTO</a> A B) (<a href="#into-class">INTO</a> B A) &rArr; <a href="#iso-class">ISO</a> A B</code>

Opting into this marker typeclass imples that the instances for (Into :a :b) and (Into :b :a) form a bijection.

Methods:

<details>
<summary>Instances</summary>

- <code><a href="#iso-class">ISO</a> A A</code>
- <code><a href="#iso-class">ISO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#iso-class">ISO</a> (<a href="#tuple-type">TUPLE</a> A B) (<a href="#tuple-type">TUPLE</a> B A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> A) (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type">SLICE</a> A) (<a href="#vector-type">VECTOR</a> A)</code>

</details>


***

#### <code>NUM</code> <sup><sub>[CLASS]</sub></sup><a name="num-class"></a>
<code><a href="#eq-class">EQ</a> A &rArr; <a href="#num-class">NUM</a> A</code>

Types which have numeric operations defined.

Methods:
- <code>+ :: (A &rarr; A &rarr; A)</code>
- <code>- :: (A &rarr; A &rarr; A)</code>
- <code>* :: (A &rarr; A &rarr; A)</code>
- <code>FROMINT :: (<a href="#integer-type">INTEGER</a> &rarr; A)</code>

<details>
<summary>Instances</summary>

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
- <code><a href="#num-class">NUM</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#num-class">NUM</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#num-class">NUM</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> A) &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> A))</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#fraction-type">FRACTION</a>)</code>
- <code><a href="#num-class">NUM</a> A &rArr; <a href="#num-class">NUM</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#num-class">NUM</a> A &rArr; <a href="#num-class">NUM</a> (<a href="#cell-type">CELL</a> A)</code>

</details>


***

#### <code>ORD</code> <sup><sub>[CLASS]</sub></sup><a name="ord-class"></a>
<code><a href="#eq-class">EQ</a> A &rArr; <a href="#ord-class">ORD</a> A</code>

Types whose values can be ordered.

Methods:
- <code>&lt;=&gt; :: (A &rarr; A &rarr; <a href="#ord-type">ORD</a>)</code>

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
- <code><a href="#ord-class">ORD</a> <a href="#char-type">CHAR</a></code>
- <code><a href="#ord-class">ORD</a> <a href="#string-type">STRING</a></code>
- <code>(<a href="#ord-class">ORD</a> A) (<a href="#ord-class">ORD</a> B) &rArr; <a href="#ord-class">ORD</a> (<a href="#tuple-type">TUPLE</a> A B)</code>
- <code><a href="#ord-class">ORD</a> A &rArr; <a href="#ord-class">ORD</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code>(<a href="#ord-class">ORD</a> A) (<a href="#ord-class">ORD</a> B) &rArr; <a href="#ord-class">ORD</a> (<a href="#result-type">RESULT</a> A B)</code>

</details>


***

#### <code>HASH</code> <sup><sub>[CLASS]</sub></sup><a name="hash-class"></a>
<code><a href="#eq-class">EQ</a> A &rArr; <a href="#hash-class">HASH</a> A</code>

Types which can be hashed for storage in hash tables.

Invariant (== left right) implies (== (hash left) (hash right)).

Methods:
- <code>HASH :: (A &rarr; <a href="#ufix-type">UFIX</a>)</code>

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
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple-type">TUPLE</a> A B)</code>
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) (<a href="#hash-class">HASH</a> C) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple3-type">TUPLE3</a> A B C)</code>
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) (<a href="#hash-class">HASH</a> C) (<a href="#hash-class">HASH</a> D) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple4-type">TUPLE4</a> A B C D)</code>
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) (<a href="#hash-class">HASH</a> C) (<a href="#hash-class">HASH</a> D) (<a href="#hash-class">HASH</a> E) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple5-type">TUPLE5</a> A B C D E)</code>
- <code><a href="#hash-class">HASH</a> A &rArr; <a href="#hash-class">HASH</a> (<a href="#list-type">LIST</a> A)</code>

</details>


***

#### <code>INTO</code> <sup><sub>[CLASS]</sub></sup><a name="into-class"></a>
<code><a href="#into-class">INTO</a> A B</code>

INTO imples *every* element of :a can be represented by an element of :b. This conversion might not be injective (i.e., there may be elements in :a that don't correspond to any in :b).

Methods:
- <code>INTO :: (A &rarr; B)</code>

<details>
<summary>Instances</summary>

- <code><a href="#into-class">INTO</a> A A</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i8-type">I8</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i8-type">I8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i16-type">I16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i16-type">I16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i32-type">I32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i32-type">I32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#i64-type">I64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#i64-type">I64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#ifix-type">IFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ifix-type">IFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u8-type">U8</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u8-type">U8</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u16-type">U16</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u16-type">U16</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u32-type">U32</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u32-type">U32</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#u64-type">U64</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#u64-type">U64</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#ufix-type">UFIX</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#ufix-type">UFIX</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#fraction-type">FRACTION</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#string-type">STRING</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> <a href="#char-type">CHAR</a>) <a href="#string-type">STRING</a></code>
- <code><a href="#into-class">INTO</a> (<a href="#tuple-type">TUPLE</a> A B) (<a href="#tuple-type">TUPLE</a> B A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#result-type">RESULT</a> A B) (<a href="#optional-type">OPTIONAL</a> B)</code>
- <code><a href="#into-class">INTO</a> (<a href="#optional-type">OPTIONAL</a> A) (<a href="#result-type">RESULT</a> <a href="#unit-type">UNIT</a> A)</code>
- <code><a href="#into-class">INTO</a> A (<a href="#cell-type">CELL</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#cell-type">CELL</a> A) A</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> A) (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type">SLICE</a> A) (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#slice-type">SLICE</a> A)</code>

</details>


***

#### <code>MONAD</code> <sup><sub>[CLASS]</sub></sup><a name="monad-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> A &rArr; <a href="#monad-class">MONAD</a> A</code>

Types which are monads as defined in Haskell. See https://wiki.haskell.org/Monad for more information.

Methods:
- <code>&gt;&gt;= :: ((A B) &rarr; (B &rarr; (A C)) &rarr; (A C))</code>

<details>
<summary>Instances</summary>

- <code><a href="#monad-class">MONAD</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#monad-class">MONAD</a> <a href="#list-type">LIST</a></code>
- <code><a href="#monad-class">MONAD</a> (<a href="#result-type">RESULT</a> A)</code>
- <code><a href="#monad-class">MONAD</a> (<a href="#st-type">ST</a> A)</code>

</details>


***

#### <code>MONOID</code> <sup><sub>[CLASS]</sub></sup><a name="monoid-class"></a>
<code><a href="#semigroup-class">SEMIGROUP</a> A &rArr; <a href="#monoid-class">MONOID</a> A</code>

Types with an associative binary operation and identity defined.

Methods:
- <code>MEMPTY :: A</code>

<details>
<summary>Instances</summary>

- <code><a href="#monoid-class">MONOID</a> <a href="#string-type">STRING</a></code>
- <code><a href="#monoid-class">MONOID</a> A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#monoid-class">MONOID</a> (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#monoid-class">MONOID</a> A &rArr; <a href="#monoid-class">MONOID</a> (<a href="#result-type">RESULT</a> B A)</code>

</details>


***

#### <code>FUNCTOR</code> <sup><sub>[CLASS]</sub></sup><a name="functor-class"></a>
<code><a href="#functor-class">FUNCTOR</a> A</code>

Types which can map an inner type where the mapping adheres to the identity and composition laws.

Methods:
- <code>MAP :: ((B &rarr; C) &rarr; (A B) &rarr; (A C))</code>

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#list-type">LIST</a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#result-type">RESULT</a> A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#cell-type">CELL</a></code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#vector-type">VECTOR</a></code>
- <code><a href="#functor-class">FUNCTOR</a> (<a href="#st-type">ST</a> A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#iterator-type">ITERATOR</a></code>

</details>


***

#### <code>TRYINTO</code> <sup><sub>[CLASS]</sub></sup><a name="tryinto-class"></a>
<code><a href="#tryinto-class">TRYINTO</a> A B</code>

TRY-INTO implies *most* elements of :a can be represented exactly by an element of :b, but sometimes not. If not, an error string is returned.

Methods:
- <code>TRYINTO :: (A &rarr; (<a href="#result-type">RESULT</a> <a href="#string-type">STRING</a> B))</code>

<details>
<summary>Instances</summary>

- <code><a href="#tryinto-class">TRYINTO</a> <a href="#string-type">STRING</a> <a href="#integer-type">INTEGER</a></code>

</details>


***

#### <code>FOLDABLE</code> <sup><sub>[CLASS]</sub></sup><a name="foldable-class"></a>
<code><a href="#foldable-class">FOLDABLE</a> A</code>

Types which can be folded into a single element.

`fold` is a left tail recursive fold

`foldr` is a right non tail recursive fold

Methods:
- <code>FOLD :: ((B &rarr; C &rarr; B) &rarr; B &rarr; (A C) &rarr; B)</code>
- <code>FOLDR :: ((D &rarr; E &rarr; E) &rarr; E &rarr; (A D) &rarr; E)</code>

<details>
<summary>Instances</summary>

- <code><a href="#foldable-class">FOLDABLE</a> <a href="#list-type">LIST</a></code>

</details>


***

#### <code>MONADFAIL</code> <sup><sub>[CLASS]</sub></sup><a name="monadfail-class"></a>
<code><a href="#monad-class">MONAD</a> A &rArr; <a href="#monadfail-class">MONADFAIL</a> A</code>

Methods:
- <code>FAIL :: (<a href="#string-type">STRING</a> &rarr; (A B))</code>

<details>
<summary>Instances</summary>

- <code><a href="#monadfail-class">MONADFAIL</a> <a href="#optional-type">OPTIONAL</a></code>

</details>


***

#### <code>SEMIGROUP</code> <sup><sub>[CLASS]</sub></sup><a name="semigroup-class"></a>
<code><a href="#semigroup-class">SEMIGROUP</a> A</code>

Types with an associative binary operation defined.

Methods:
- <code>&lt;&gt; :: (A &rarr; A &rarr; A)</code>

<details>
<summary>Instances</summary>

- <code><a href="#semigroup-class">SEMIGROUP</a> <a href="#string-type">STRING</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#optional-type">OPTIONAL</a> A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#result-type">RESULT</a> B A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#cell-type">CELL</a> A)</code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#vector-type">VECTOR</a> A)</code>

</details>


***

#### <code>ALTERNATIVE</code> <sup><sub>[CLASS]</sub></sup><a name="alternative-class"></a>
<code><a href="#applicative-class">APPLICATIVE</a> A &rArr; <a href="#alternative-class">ALTERNATIVE</a> A</code>

Types which are monoids on applicative functors.

Methods:
- <code>ALT :: ((A B) &rarr; (A B) &rarr; (A B))</code>
- <code>EMPTY :: (A C)</code>

<details>
<summary>Instances</summary>

- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#alternative-class">ALTERNATIVE</a> <a href="#list-type">LIST</a></code>

</details>


***

#### <code>APPLICATIVE</code> <sup><sub>[CLASS]</sub></sup><a name="applicative-class"></a>
<code><a href="#functor-class">FUNCTOR</a> A &rArr; <a href="#applicative-class">APPLICATIVE</a> A</code>

Types which are a functor which can embed pure expressions and sequence operations.

Methods:
- <code>PURE :: (B &rarr; (A B))</code>
- <code>LIFTA2 :: ((C &rarr; D &rarr; E) &rarr; (A C) &rarr; (A D) &rarr; (A E))</code>

<details>
<summary>Instances</summary>

- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#list-type">LIST</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#result-type">RESULT</a> A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#cell-type">CELL</a></code>
- <code><a href="#applicative-class">APPLICATIVE</a> (<a href="#st-type">ST</a> A)</code>

</details>


***

#### <code>TRAVERSABLE</code> <sup><sub>[CLASS]</sub></sup><a name="traversable-class"></a>
<code><a href="#traversable-class">TRAVERSABLE</a> A</code>

Methods:
- <code>TRAVERSE :: <a href="#applicative-class">APPLICATIVE</a> B &rArr; ((C &rarr; (B D)) &rarr; (A C) &rarr; (B (A D)))</code>

<details>
<summary>Instances</summary>

- <code><a href="#traversable-class">TRAVERSABLE</a> <a href="#list-type">LIST</a></code>

</details>


***

#### <code>UNWRAPPABLE</code> <sup><sub>[CLASS]</sub></sup><a name="unwrappable-class"></a>
<code><a href="#unwrappable-class">UNWRAPPABLE</a> A</code>

Containers which can be unwrapped to get access to their contents.

The first argument to `unwrap-or-else' is a continuation, usually named `fail'. Methods should call `fail' and
return its value if they are unable to unwrap a value.

Typical `fail' continuations are:
- Return a default value, or
- Signal an error.

Methods:
- <code>UNWRAP-OR-ELSE :: ((<a href="#unit-type">UNIT</a> &rarr; B) &rarr; (A B) &rarr; B)</code>

<details>
<summary>Instances</summary>

- <code><a href="#unwrappable-class">UNWRAPPABLE</a> <a href="#optional-type">OPTIONAL</a></code>
- <code><a href="#unwrappable-class">UNWRAPPABLE</a> (<a href="#result-type">RESULT</a> A)</code>

</details>


***

### Values

#### <code>&lt;</code> <sup><sub>[FUNCTION]</sub></sup><a name="&lt;-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X less than Y?


***

#### <code>&gt;</code> <sup><sub>[FUNCTION]</sub></sup><a name="&gt;-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X greater than Y?


***

#### <code>&lt;=</code> <sup><sub>[FUNCTION]</sub></sup><a name="&lt;=-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X less than or equal to Y?


***

#### <code>&gt;=</code> <sup><sub>[FUNCTION]</sub></sup><a name="&gt;=-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X greater than or equal to Y?


***

#### <code>&gt;&gt;</code> <sup><sub>[FUNCTION]</sub></sup><a name="&gt;&gt;-value"></a>
<code>&forall; A B C. <a href="#monad-class">MONAD</a> :A &rArr; ((:A :B) &rarr; (:A :C) &rarr; (:A :C))</code>

***

#### <code>MAX</code> <sup><sub>[FUNCTION]</sub></sup><a name="max-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the greater element of X and Y.


***

#### <code>MIN</code> <sup><sub>[FUNCTION]</sub></sup><a name="min-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; :A &rarr; :A)</code>

Returns the lesser element of X and Y.


***

#### <code>ERROR</code> <sup><sub>[FUNCTION]</sub></sup><a name="error-value"></a>
<code>&forall; A. (<a href="#string-type">STRING</a> &rarr; :A)</code>

Signal an error by calling `CL:ERROR`.


***

#### <code>EXPECT</code> <sup><sub>[FUNCTION]</sub></sup><a name="expect-value"></a>
<code>&forall; A B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; (<a href="#string-type">STRING</a> &rarr; (:A :B) &rarr; :B)</code>

Unwrap CONTAINER, signaling an error with the description REASON on failure.


***

#### <code>UNWRAP</code> <sup><sub>[FUNCTION]</sub></sup><a name="unwrap-value"></a>
<code>&forall; A B. <a href="#unwrappable-class">UNWRAPPABLE</a> :A &rArr; ((:A :B) &rarr; :B)</code>

Unwrap CONTAINER, signaling an error on failure.


***

#### <code>SEQUENCE</code> <sup><sub>[FUNCTION]</sub></sup><a name="sequence-value"></a>
<code>&forall; A B C. (<a href="#traversable-class">TRAVERSABLE</a> :A) (<a href="#applicative-class">APPLICATIVE</a> :B) &rArr; ((:A (:B :C)) &rarr; (:B (:A :C)))</code>

***

#### <code>WITH-DEFAULT</code> <sup><sub>[FUNCTION]</sub></sup><a name="with-default-value"></a>
<code>&forall; A B. <a href="#unwrappable-class">UNWRAPPABLE</a> :B &rArr; (:A &rarr; (:B :A) &rarr; :A)</code>

Unwrap CONTAINER, returning DEFAULT on failure.


***

#### <code>COMBINE-HASHES</code> <sup><sub>[FUNCTION]</sub></sup><a name="combine-hashes-value"></a>
<code>(<a href="#ufix-type">UFIX</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; <a href="#ufix-type">UFIX</a>)</code>

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

#### <code>UNDEFINED</code> <sup><sub>[FUNCTION]</sub></sup><a name="undefined-value"></a>
<code>&forall; A B. (:A &rarr; :B)</code>

A function which can be used in place of any value, throwing an error at runtime.


***

#### <code>BOOLEAN-OR</code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-or-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X or Y True? Note that this is a *function* which means both X and Y will be evaluated. Use the OR macro for short-circuiting behavior.


***

#### <code>BOOLEAN-AND</code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-and-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Are X and Y True? Note that this is a *function* which means both X and Y will be evaluated. Use the AND macro for short-circuiting behavior.


***

#### <code>BOOLEAN-NOT</code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-not-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X False?


***

#### <code>BOOLEAN-XOR</code> <sup><sub>[FUNCTION]</sub></sup><a name="boolean-xor-value"></a>
<code>(<a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Are X or Y True, but not both?


***

# Package `coalton-library/bits`<a name="coalton-library/bits-package"></a>

## [bits.lisp](https://github.com/coalton-lang/coalton/tree/main/library/bits.lisp) <a name="coalton-library/bits-bits-lisp-file"></a>

### Classes

#### <code>BITS</code> <sup><sub>[CLASS]</sub></sup><a name="bits-class"></a>
<code><a href="#num-class">NUM</a> A &rArr; <a href="#bits-class">BITS</a> A</code>

Operations on the bits of twos-complement integers

Methods:
- <code>AND :: (A &rarr; A &rarr; A)</code>
- <code>OR :: (A &rarr; A &rarr; A)</code>
- <code>XOR :: (A &rarr; A &rarr; A)</code>
- <code>NOT :: (A &rarr; A)</code>
- <code>SHIFT :: (<a href="#integer-type">INTEGER</a> &rarr; A &rarr; A)</code>

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

# Package `coalton-library/arith`<a name="coalton-library/arith-package"></a>

## [arith.lisp](https://github.com/coalton-lang/coalton/tree/main/library/arith.lisp) <a name="coalton-library/arith-arith-lisp-file"></a>

### Types

#### <code>COMPLEX A</code> <sup><sub>[TYPE]</sub></sup><a name="complex-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> A)</code>
- <code><a href="#dividable-class">DIVIDABLE</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>) (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#dividable-class">DIVIDABLE</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>) (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#dividable-class">DIVIDABLE</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>) (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#fraction-type">FRACTION</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> A) &rArr; <a href="#eq-class">EQ</a> (<a href="#complex-type">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> A))</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#fraction-type">FRACTION</a>)</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> A) &rArr; <a href="#num-class">NUM</a> (<a href="#complex-type">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> A))</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#fraction-type">FRACTION</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#into-class">INTO</a> <a href="#integer-type">INTEGER</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>

</details>


***

#### <code>QUANTIZATION A</code> <sup><sub>[TYPE]</sub></sup><a name="quantization-type"></a>
- <code>(QUANTIZATION A <a href="#integer-type">INTEGER</a> A <a href="#integer-type">INTEGER</a> A)</code>


***

### Classes

#### <code>COMPLEX</code> <sup><sub>[CLASS]</sub></sup><a name="complex-class"></a>
<code><a href="#complex-class">COMPLEX</a> A</code>

Methods:
- <code>COMPLEX :: (A &rarr; A &rarr; (<a href="#complex-type">COMPLEX</a> A))</code>

<details>
<summary>Instances</summary>

- <code><a href="#complex-class">COMPLEX</a> (<a href="#complex-type">COMPLEX</a> A)</code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#complex-class">COMPLEX</a> <a href="#fraction-type">FRACTION</a></code>

</details>


***

#### <code>DIVIDABLE</code> <sup><sub>[CLASS]</sub></sup><a name="dividable-class"></a>
<code><a href="#dividable-class">DIVIDABLE</a> A B</code>

The representation of a type such that division within that type possibly results in another type. For instance,


    (Dividable Integer Fraction)


establishes that division of two `Integer`s can result in a `Fraction`, whereas


    (Dividable Single-Float Single-Float)


establishes that division of two `Single-Float`s can result in a `Single-Float`.

Note that `Dividable` does *not* establish a default result type; you must constrain the result type yourself.

The function / is partial, and will error produce a run-time error if the divisor is zero.


Methods:
- <code>GENERAL/ :: (A &rarr; A &rarr; B)</code>

<details>
<summary>Instances</summary>

- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#fraction-type">FRACTION</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#fraction-type">FRACTION</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> <a href="#integer-type">INTEGER</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#dividable-class">DIVIDABLE</a> (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>) (<a href="#complex-type">COMPLEX</a> <a href="#integer-type">INTEGER</a>)</code>
- <code><a href="#dividable-class">DIVIDABLE</a> (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>) (<a href="#complex-type">COMPLEX</a> <a href="#single-float-type">SINGLE-FLOAT</a>)</code>
- <code><a href="#dividable-class">DIVIDABLE</a> (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>) (<a href="#complex-type">COMPLEX</a> <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>

</details>


***

#### <code>QUANTIZABLE</code> <sup><sub>[CLASS]</sub></sup><a name="quantizable-class"></a>
<code>(<a href="#ord-class">ORD</a> A) (<a href="#num-class">NUM</a> A) &rArr; <a href="#quantizable-class">QUANTIZABLE</a> A</code>

The representation of a type that allows "quantizing", "snapping to integers", or "rounding." (All of these concepts are roughly equivalent.)


Methods:
- <code>QUANTIZE :: (A &rarr; (<a href="#quantization-type">QUANTIZATION</a> A))</code>

<details>
<summary>Instances</summary>

- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#integer-type">INTEGER</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i32-type">I32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#i64-type">I64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u8-type">U8</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u32-type">U32</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#u64-type">U64</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#single-float-type">SINGLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#double-float-type">DOUBLE-FLOAT</a></code>
- <code><a href="#quantizable-class">QUANTIZABLE</a> <a href="#fraction-type">FRACTION</a></code>

</details>


***

### Values

#### <code>/</code> <sup><sub>[FUNCTION]</sub></sup><a name="/-value"></a>
<code>&forall; A. <a href="#dividable-class">DIVIDABLE</a> :A :A &rArr; (:A &rarr; :A &rarr; :A)</code>

***

#### <code>1+</code> <sup><sub>[FUNCTION]</sub></sup><a name="1+-value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>1-</code> <sup><sub>[FUNCTION]</sub></sup><a name="1--value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>II</code> <sup><sub>[VALUE]</sub></sup><a name="ii-value"></a>
<code>&forall; A. (<a href="#complex-class">COMPLEX</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (<a href="#complex-type">COMPLEX</a> :A)</code>

The complex unit i. (The double ii represents a blackboard-bold i.)


***

#### <code>ABS</code> <sup><sub>[FUNCTION]</sub></sup><a name="abs-value"></a>
<code>&forall; A. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; :A)</code>

Absolute value of X.


***

#### <code>ASH</code> <sup><sub>[FUNCTION]</sub></sup><a name="ash-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Compute the "arithmetic shift" of X by N. 


***

#### <code>GCD</code> <sup><sub>[FUNCTION]</sub></sup><a name="gcd-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Compute the greatest common divisor of A and B.


***

#### <code>LCM</code> <sup><sub>[FUNCTION]</sub></sup><a name="lcm-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Compute the least common multiple of A and B.


***

#### <code>MOD</code> <sup><sub>[FUNCTION]</sub></sup><a name="mod-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Compute NUM modulo BASE.


***

#### <code>EXPT</code> <sup><sub>[FUNCTION]</sub></sup><a name="expt-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Exponentiate BASE to a non-negative POWER.


***

#### <code>ODD?</code> <sup><sub>[FUNCTION]</sub></sup><a name="odd?-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is N odd?


***

#### <code>SIGN</code> <sup><sub>[FUNCTION]</sub></sup><a name="sign-value"></a>
<code>&forall; A. (<a href="#ord-class">ORD</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

The sign of X.


***

#### <code>EVEN?</code> <sup><sub>[FUNCTION]</sub></sup><a name="even?-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is N even?


***

#### <code>FLOOR</code> <sup><sub>[FUNCTION]</sub></sup><a name="floor-value"></a>
<code>&forall; A. <a href="#quantizable-class">QUANTIZABLE</a> :A &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

Return the greatest integer less than or equal to X.


***

#### <code>ROUND</code> <sup><sub>[FUNCTION]</sub></sup><a name="round-value"></a>
<code>&forall; A. <a href="#quantizable-class">QUANTIZABLE</a> :A &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

Return the nearest integer to X, with ties breaking toward positive infinity.


***

#### <code>EXACT/</code> <sup><sub>[FUNCTION]</sub></sup><a name="exact/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#fraction-type">FRACTION</a>)</code>

Exactly divide two integers and produce a fraction.


***

#### <code>FLOOR/</code> <sup><sub>[FUNCTION]</sub></sup><a name="floor/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Divide two integers and compute the floor of the quotient.


***

#### <code>NEGATE</code> <sup><sub>[FUNCTION]</sub></sup><a name="negate-value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; (:A &rarr; :A)</code>

***

#### <code>ROUND/</code> <sup><sub>[FUNCTION]</sub></sup><a name="round/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Divide two integers and round the quotient.


***

#### <code>CEILING</code> <sup><sub>[FUNCTION]</sub></sup><a name="ceiling-value"></a>
<code>&forall; A. <a href="#quantizable-class">QUANTIZABLE</a> :A &rArr; (:A &rarr; <a href="#integer-type">INTEGER</a>)</code>

Return the least integer greater than or equal to X.


***

#### <code>CEILING/</code> <sup><sub>[FUNCTION]</sub></sup><a name="ceiling/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

Divide two integers and compute the ceiling of the quotient.


***

#### <code>INEXACT/</code> <sup><sub>[FUNCTION]</sub></sup><a name="inexact/-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>

Compute the quotient of integers as a double-precision float.

Note: This does *not* divide double-float arguments.


***

#### <code>CONJUGATE</code> <sup><sub>[FUNCTION]</sub></sup><a name="conjugate-value"></a>
<code>&forall; A. (<a href="#complex-class">COMPLEX</a> :A) (<a href="#num-class">NUM</a> :A) &rArr; ((<a href="#complex-type">COMPLEX</a> :A) &rarr; (<a href="#complex-type">COMPLEX</a> :A))</code>

***

#### <code>IMAG-PART</code> <sup><sub>[FUNCTION]</sub></sup><a name="imag-part-value"></a>
<code>&forall; A. ((<a href="#complex-type">COMPLEX</a> :A) &rarr; :A)</code>

***

#### <code>NUMERATOR</code> <sup><sub>[FUNCTION]</sub></sup><a name="numerator-value"></a>
<code>(<a href="#fraction-type">FRACTION</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

The numerator of a fraction.


***

#### <code>REAL-PART</code> <sup><sub>[FUNCTION]</sub></sup><a name="real-part-value"></a>
<code>&forall; A. ((<a href="#complex-type">COMPLEX</a> :A) &rarr; :A)</code>

***

#### <code>MKFRACTION</code> <sup><sub>[FUNCTION]</sub></sup><a name="mkfraction-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#fraction-type">FRACTION</a>)</code>

***

#### <code>RECIPROCAL</code> <sup><sub>[FUNCTION]</sub></sup><a name="reciprocal-value"></a>
<code>(<a href="#fraction-type">FRACTION</a> &rarr; <a href="#fraction-type">FRACTION</a>)</code>

The reciprocal of a fraction.


***

#### <code>DENOMINATOR</code> <sup><sub>[FUNCTION]</sub></sup><a name="denominator-value"></a>
<code>(<a href="#fraction-type">FRACTION</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

The denominator of a fraction.


***

#### <code>DOUBLE-FLOAT-&gt;INTEGER</code> <sup><sub>[FUNCTION]</sub></sup><a name="double-float-&gt;integer-value"></a>
<code>(<a href="#double-float-type">DOUBLE-FLOAT</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#integer-type">INTEGER</a>))</code>

Round a Double-Float to the nearest Integer.


***

#### <code>INTEGER-&gt;DOUBLE-FLOAT</code> <sup><sub>[FUNCTION]</sub></sup><a name="integer-&gt;double-float-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#double-float-type">DOUBLE-FLOAT</a>)</code>

***

#### <code>INTEGER-&gt;SINGLE-FLOAT</code> <sup><sub>[FUNCTION]</sub></sup><a name="integer-&gt;single-float-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#single-float-type">SINGLE-FLOAT</a>)</code>

***

#### <code>SINGLE-FLOAT-&gt;INTEGER</code> <sup><sub>[FUNCTION]</sub></sup><a name="single-float-&gt;integer-value"></a>
<code>(<a href="#single-float-type">SINGLE-FLOAT</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#integer-type">INTEGER</a>))</code>

Round a Single-Float to the nearest Integer.


***

# Package `coalton-library/char`<a name="coalton-library/char-package"></a>

## [char.lisp](https://github.com/coalton-lang/coalton/tree/main/library/char.lisp) <a name="coalton-library/char-char-lisp-file"></a>

### Values

#### <code>CHAR-CODE</code> <sup><sub>[FUNCTION]</sub></sup><a name="char-code-value"></a>
<code>(<a href="#char-type">CHAR</a> &rarr; <a href="#ufix-type">UFIX</a>)</code>

***

#### <code>CODE-CHAR</code> <sup><sub>[FUNCTION]</sub></sup><a name="code-char-value"></a>
<code>(<a href="#ufix-type">UFIX</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#char-type">CHAR</a>))</code>

***

# Package `coalton-library/string`<a name="coalton-library/string-package"></a>

## [string.lisp](https://github.com/coalton-lang/coalton/tree/main/library/string.lisp) <a name="coalton-library/string-string-lisp-file"></a>

### Values

#### <code>REF</code> <sup><sub>[FUNCTION]</sub></sup><a name="ref-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#char-type">CHAR</a>))</code>

***

#### <code>CONCAT</code> <sup><sub>[FUNCTION]</sub></sup><a name="concat-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a>)</code>

Concatenate STR1 and STR2 together, returning a new string.


***

#### <code>LENGTH</code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#integer-type">INTEGER</a>)</code>

The length of a string STR.


***

#### <code>REVERSE</code> <sup><sub>[FUNCTION]</sub></sup><a name="reverse-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a>)</code>

Reverse a string.


***

#### <code>PARSE-INT</code> <sup><sub>[FUNCTION]</sub></sup><a name="parse-int-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#integer-type">INTEGER</a>))</code>

Parse the integer in string STR.


***

#### <code>SUBSTRING</code> <sup><sub>[FUNCTION]</sub></sup><a name="substring-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; <a href="#string-type">STRING</a>)</code>

Compute a substring of a string bounded by given indices.


***

#### <code>STRIP-PREFIX</code> <sup><sub>[FUNCTION]</sub></sup><a name="strip-prefix-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#string-type">STRING</a>))</code>

Returns a string without a give prefix, or None if the string
does not have that suffix.


***

#### <code>STRIP-SUFFIX</code> <sup><sub>[FUNCTION]</sub></sup><a name="strip-suffix-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#string-type">STRING</a>))</code>

Returns a string without a give suffix, or None if the string
does not have that suffix.


***

#### <code>REF-UNCHECKED</code> <sup><sub>[FUNCTION]</sub></sup><a name="ref-unchecked-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#ufix-type">UFIX</a> &rarr; <a href="#char-type">CHAR</a>)</code>

***

# Package `coalton-library/tuple`<a name="coalton-library/tuple-package"></a>

## [tuple.lisp](https://github.com/coalton-lang/coalton/tree/main/library/tuple.lisp) <a name="coalton-library/tuple-tuple-lisp-file"></a>

### Types

#### <code>TUPLE3 A B C</code> <sup><sub>[TYPE]</sub></sup><a name="tuple3-type"></a>
- <code>(TUPLE3 A B C)</code>

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) (<a href="#eq-class">EQ</a> C) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple3-type">TUPLE3</a> A B C)</code>
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) (<a href="#hash-class">HASH</a> C) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple3-type">TUPLE3</a> A B C)</code>

</details>


***

#### <code>TUPLE4 A B C D</code> <sup><sub>[TYPE]</sub></sup><a name="tuple4-type"></a>
- <code>(TUPLE4 A B C D)</code>

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) (<a href="#eq-class">EQ</a> C) (<a href="#eq-class">EQ</a> D) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple4-type">TUPLE4</a> A B C D)</code>
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) (<a href="#hash-class">HASH</a> C) (<a href="#hash-class">HASH</a> D) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple4-type">TUPLE4</a> A B C D)</code>

</details>


***

#### <code>TUPLE5 A B C D E</code> <sup><sub>[TYPE]</sub></sup><a name="tuple5-type"></a>
- <code>(TUPLE5 A B C D E)</code>

<details>
<summary>Instances</summary>

- <code>(<a href="#eq-class">EQ</a> A) (<a href="#eq-class">EQ</a> B) (<a href="#eq-class">EQ</a> C) (<a href="#eq-class">EQ</a> D) (<a href="#eq-class">EQ</a> E) &rArr; <a href="#eq-class">EQ</a> (<a href="#tuple5-type">TUPLE5</a> A B C D E)</code>
- <code>(<a href="#hash-class">HASH</a> A) (<a href="#hash-class">HASH</a> B) (<a href="#hash-class">HASH</a> C) (<a href="#hash-class">HASH</a> D) (<a href="#hash-class">HASH</a> E) &rArr; <a href="#hash-class">HASH</a> (<a href="#tuple5-type">TUPLE5</a> A B C D E)</code>

</details>


***

### Values

#### <code>FST</code> <sup><sub>[FUNCTION]</sub></sup><a name="fst-value"></a>
<code>&forall; A B. ((<a href="#tuple-type">TUPLE</a> :A :B) &rarr; :A)</code>

Get the first element of a tuple.


***

#### <code>SND</code> <sup><sub>[FUNCTION]</sub></sup><a name="snd-value"></a>
<code>&forall; A B. ((<a href="#tuple-type">TUPLE</a> :A :B) &rarr; :B)</code>

Get the second element of a tuple.


***

# Package `coalton-library/optional`<a name="coalton-library/optional-package"></a>

## [optional.lisp](https://github.com/coalton-lang/coalton/tree/main/library/optional.lisp) <a name="coalton-library/optional-optional-lisp-file"></a>

### Values

#### <code>ISNONE</code> <sup><sub>[FUNCTION]</sub></sup><a name="isnone-value"></a>
<code>&forall; A. ((<a href="#optional-type">OPTIONAL</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X None?


***

#### <code>ISSOME</code> <sup><sub>[FUNCTION]</sub></sup><a name="issome-value"></a>
<code>&forall; A. ((<a href="#optional-type">OPTIONAL</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Is X Some?


***

#### <code>FROMSOME</code> <sup><sub>[FUNCTION]</sub></sup><a name="fromsome-value"></a>
<code>&forall; A. (<a href="#string-type">STRING</a> &rarr; (<a href="#optional-type">OPTIONAL</a> :A) &rarr; :A)</code>

Get the value of OPT, erroring with the provided string if it is None.


***

# Package `coalton-library/list`<a name="coalton-library/list-package"></a>

## [list.lisp](https://github.com/coalton-lang/coalton/tree/main/library/list.lisp) <a name="coalton-library/list-list-lisp-file"></a>

### Values

#### <code>ALL</code> <sup><sub>[FUNCTION]</sub></sup><a name="all-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if every element in XS matches F.


***

#### <code>ANY</code> <sup><sub>[FUNCTION]</sub></sup><a name="any-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if at least one element in XS matches F.


***

#### <code>CAR</code> <sup><sub>[FUNCTION]</sub></sup><a name="car-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Return the traditional car of a list. This function is partial


***

#### <code>CDR</code> <sup><sub>[FUNCTION]</sub></sup><a name="cdr-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Return the traditional cdr of a list. This function is partial


***

#### <code>NTH</code> <sup><sub>[FUNCTION]</sub></sup><a name="nth-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Like INDEX, but errors if the index is not found.


***

#### <code>SUM</code> <sup><sub>[FUNCTION]</sub></sup><a name="sum-value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Returns the sum of XS


***

#### <code>ZIP</code> <sup><sub>[FUNCTION]</sub></sup><a name="zip-value"></a>
<code>&forall; A B. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

Builds a list of tuples with the elements of XS and YS.


***

#### <code>DROP</code> <sup><sub>[FUNCTION]</sub></sup><a name="drop-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a list with the first N elements removed.


***

#### <code>FIND</code> <sup><sub>[FUNCTION]</sub></sup><a name="find-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the first element in a list matching the predicate function F.


***

#### <code>HEAD</code> <sup><sub>[FUNCTION]</sub></sup><a name="head-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the first element of a list.


***

#### <code>INIT</code> <sup><sub>[FUNCTION]</sub></sup><a name="init-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns every element except the last in a list.


***

#### <code>LAST</code> <sup><sub>[FUNCTION]</sub></sup><a name="last-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the last element of a list.


***

#### <code>SORT</code> <sup><sub>[FUNCTION]</sub></sup><a name="sort-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Performs a sort of XS.


***

#### <code>TAIL</code> <sup><sub>[FUNCTION]</sub></sup><a name="tail-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> (<a href="#list-type">LIST</a> :A)))</code>

Returns every element except the first in a list.


***

#### <code>TAKE</code> <sup><sub>[FUNCTION]</sub></sup><a name="take-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns the first N elements of a list.


***

#### <code>COMBS</code> <sup><sub>[FUNCTION]</sub></sup><a name="combs-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Compute a list of all combinations of elements of L. This function is sometimes goes by the name "power set" or "subsets".

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBS L)`.


***

#### <code>INDEX</code> <sup><sub>[FUNCTION]</sub></sup><a name="index-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; <a href="#integer-type">INTEGER</a> &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns the Ith element of a list.


***

#### <code>NULL?</code> <sup><sub>[FUNCTION]</sub></sup><a name="null?-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if XS is an empty list.


***

#### <code>PERMS</code> <sup><sub>[FUNCTION]</sub></sup><a name="perms-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Produce all permutations of the list L.


***

#### <code>RANGE</code> <sup><sub>[FUNCTION]</sub></sup><a name="range-value"></a>
<code>(<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; (<a href="#list-type">LIST</a> <a href="#integer-type">INTEGER</a>))</code>

Returns a list containing the numbers from START to END inclusive.


    ```
    &gt; COALTON-USER&gt; (coalton (range 1 5))
    (1 2 3 4 5)

    &gt; COALTON-USER&gt; (coalton (range 5 2))
    (5 4 3 2)
    ```


***

#### <code>SPLIT</code> <sup><sub>[FUNCTION]</sub></sup><a name="split-value"></a>
<code>(<a href="#char-type">CHAR</a> &rarr; <a href="#string-type">STRING</a> &rarr; (<a href="#list-type">LIST</a> <a href="#string-type">STRING</a>))</code>

***

#### <code>UNION</code> <sup><sub>[FUNCTION]</sub></sup><a name="union-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list with the elements from both XS and YS and without duplicates.


***

#### <code>APPEND</code> <sup><sub>[FUNCTION]</sub></sup><a name="append-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Appends two lists together and returns a new list.


***

#### <code>CONCAT</code> <sup><sub>[FUNCTION]</sub></sup><a name="concat-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Appends a list of lists together into a single new list.


***

#### <code>DELETE</code> <sup><sub>[FUNCTION]</sub></sup><a name="delete-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Return a new list with the first element equal to X removed.


***

#### <code>FILTER</code> <sup><sub>[FUNCTION]</sub></sup><a name="filter-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list containing every element of XS that matches the predicate function F in the same order.


***

#### <code>INSERT</code> <sup><sub>[FUNCTION]</sub></sup><a name="insert-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Inserts an element into a list at the first place it is less than or equal to the next element.


***

#### <code>LENGTH</code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Returns the length of a list.


***

#### <code>LOOKUP</code> <sup><sub>[FUNCTION]</sub></sup><a name="lookup-value"></a>
<code>&forall; A B. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> (<a href="#tuple-type">TUPLE</a> :A :B)) &rarr; (<a href="#optional-type">OPTIONAL</a> :B))</code>

Returns the value of the first (key, value) tuple in XS where the key matches E.


***

#### <code>MEMBER</code> <sup><sub>[FUNCTION]</sub></sup><a name="member-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns true if any element of XS is equal to E.


***

#### <code>REPEAT</code> <sup><sub>[FUNCTION]</sub></sup><a name="repeat-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; :A &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a list with the same value repeated multiple times.


***

#### <code>SORTBY</code> <sup><sub>[FUNCTION]</sub></sup><a name="sortby-value"></a>
<code>&forall; A. ((:A &rarr; :A &rarr; <a href="#ord-type">ORD</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Generic version of sort


***

#### <code>COMBSOF</code> <sup><sub>[FUNCTION]</sub></sup><a name="combsof-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Produce a list of size-N subsets of L.

The ordering of elements of L is preserved in the ordering of elements in each list produced by `(COMBSOF N L)`.

This function is equivalent to all size-N elements of `(COMBS L)`.


***

#### <code>COUNTBY</code> <sup><sub>[FUNCTION]</sub></sup><a name="countby-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Count the number of items in THINGS that satisfy the predicate F.


***

#### <code>MAXIMUM</code> <sup><sub>[FUNCTION]</sub></sup><a name="maximum-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns a greatest element of a list, or None.


***

#### <code>MINIMUM</code> <sup><sub>[FUNCTION]</sub></sup><a name="minimum-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns a least element of a list, or None.


***

#### <code>PRODUCT</code> <sup><sub>[FUNCTION]</sub></sup><a name="product-value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; :A)</code>

Returns the product of XS


***

#### <code>REVERSE</code> <sup><sub>[FUNCTION]</sub></sup><a name="reverse-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list containing the same elements in reverse order.


***

#### <code>ZIPWITH</code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith-value"></a>
<code>&forall; A B C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C))</code>

Builds a new list by calling F with elements of XS and YS.


***

#### <code>INSERTBY</code> <sup><sub>[FUNCTION]</sub></sup><a name="insertby-value"></a>
<code>&forall; A. ((:A &rarr; :A &rarr; <a href="#ord-type">ORD</a>) &rarr; :A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Generic version of insert


***

#### <code>ZIPWITH3</code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith3-value"></a>
<code>&forall; A B C D. ((:A &rarr; :B &rarr; :C &rarr; :D) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C) &rarr; (<a href="#list-type">LIST</a> :D))</code>

Build a new list by calling F with elements of XS, YS and ZS


***

#### <code>ZIPWITH4</code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith4-value"></a>
<code>&forall; A B C D E. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C) &rarr; (<a href="#list-type">LIST</a> :D) &rarr; (<a href="#list-type">LIST</a> :E))</code>

Build a new list by calling F with elements of AS, BS, CS and DS


***

#### <code>ZIPWITH5</code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith5-value"></a>
<code>&forall; A B C D E F. ((:A &rarr; :B &rarr; :C &rarr; :D &rarr; :E &rarr; :F) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B) &rarr; (<a href="#list-type">LIST</a> :C) &rarr; (<a href="#list-type">LIST</a> :D) &rarr; (<a href="#list-type">LIST</a> :E) &rarr; (<a href="#list-type">LIST</a> :F))</code>

Build a new list by calling F with elements of AS, BS, CS, DS and ES


***

#### <code>CONCATMAP</code> <sup><sub>[FUNCTION]</sub></sup><a name="concatmap-value"></a>
<code>&forall; A B. ((:A &rarr; (<a href="#list-type">LIST</a> :B)) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :B))</code>

Apply F to each element in XS and concatenate the results.


***

#### <code>ELEMINDEX</code> <sup><sub>[FUNCTION]</sub></sup><a name="elemindex-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#integer-type">INTEGER</a>))</code>

***

#### <code>FINDINDEX</code> <sup><sub>[FUNCTION]</sub></sup><a name="findindex-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#integer-type">INTEGER</a>))</code>

Returns the index of the first element matching the predicate function F.


***

#### <code>OPTIMUMBY</code> <sup><sub>[FUNCTION]</sub></sup><a name="optimumby-value"></a>
<code>&forall; A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Returns an optimum according to a total order.


***

#### <code>PARTITION</code> <sup><sub>[FUNCTION]</sub></sup><a name="partition-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#tuple-type">TUPLE</a> (<a href="#list-type">LIST</a> :A) (<a href="#list-type">LIST</a> :A)))</code>

Splits a list into two new lists. The first list contains elements matching predicate F.


***

#### <code>SINGLETON</code> <sup><sub>[FUNCTION]</sub></sup><a name="singleton-value"></a>
<code>&forall; A. (:A &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a list containting one element.


***

#### <code>TRANSPOSE</code> <sup><sub>[FUNCTION]</sub></sup><a name="transpose-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Transposes a matrix represented by a list of lists.


***

#### <code>DIFFERENCE</code> <sup><sub>[FUNCTION]</sub></sup><a name="difference-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list with the first occurence of each element in YS deleted from XS.


***

#### <code>INSERTIONS</code> <sup><sub>[FUNCTION]</sub></sup><a name="insertions-value"></a>
<code>&forall; A. (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Produce a list of copies of L, each with A inserted at a possible position.

    (insertions 0 (make-list 1 2))
    =&gt; ((0 1 2) (1 0 2) (1 2 0))



***

#### <code>INTERCALATE</code> <sup><sub>[FUNCTION]</sub></sup><a name="intercalate-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Intersperses XS into XSS and then concatenates the result.


***

#### <code>INTERSPERSE</code> <sup><sub>[FUNCTION]</sub></sup><a name="intersperse-value"></a>
<code>&forall; A. (:A &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list where every other element is E.


***

#### <code>INTERSECTION</code> <sup><sub>[FUNCTION]</sub></sup><a name="intersection-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns elements which occur in both lists. Does not return duplicates and does not guarantee order.


***

#### <code>REMOVE-DUPLICATES</code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-duplicates-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns a new list without duplicate elements.


***

#### <code>EQUIVALENCE-CLASSES</code> <sup><sub>[FUNCTION]</sub></sup><a name="equivalence-classes-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

***

#### <code>EQUIVALENCE-CLASSES-BY</code> <sup><sub>[FUNCTION]</sub></sup><a name="equivalence-classes-by-value"></a>
<code>&forall; A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#list-type">LIST</a> :A) &rarr; (<a href="#list-type">LIST</a> (<a href="#list-type">LIST</a> :A)))</code>

Break a list into a list of equivalence classes according to an equivalence relation.


***

# Package `coalton-library/result`<a name="coalton-library/result-package"></a>

## [result.lisp](https://github.com/coalton-lang/coalton/tree/main/library/result.lisp) <a name="coalton-library/result-result-lisp-file"></a>

### Values

#### <code>ISOK</code> <sup><sub>[FUNCTION]</sub></sup><a name="isok-value"></a>
<code>&forall; A B. ((<a href="#result-type">RESULT</a> :A :B) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if X is ERR


***

#### <code>ISERR</code> <sup><sub>[FUNCTION]</sub></sup><a name="iserr-value"></a>
<code>&forall; A B. ((<a href="#result-type">RESULT</a> :A :B) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if X is ERR


***

#### <code>FLATTEN</code> <sup><sub>[FUNCTION]</sub></sup><a name="flatten-value"></a>
<code>&forall; A. ((<a href="#result-type">RESULT</a> :A :A) &rarr; :A)</code>

***

# Package `coalton-library/functions`<a name="coalton-library/functions-package"></a>

## [functions.lisp](https://github.com/coalton-lang/coalton/tree/main/library/functions.lisp) <a name="coalton-library/functions-functions-lisp-file"></a>

### Values

#### <code>/=</code> <sup><sub>[FUNCTION]</sub></sup><a name="/=-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

***

#### <code>ID</code> <sup><sub>[FUNCTION]</sub></sup><a name="id-value"></a>
<code>&forall; A. (:A &rarr; :A)</code>

A function that always returns its argument.


***

#### <code>FIX</code> <sup><sub>[FUNCTION]</sub></sup><a name="fix-value"></a>
<code>&forall; A B. (((:A &rarr; :B) &rarr; :A &rarr; :B) &rarr; :A &rarr; :B)</code>

Compute the fixed point of a unary function. This is equivalent to the Y-combinator of the lambda calculus. This combinator allows recursion without specific assignment of names. For example, the factorial function can be written


    ```
    (define fact
      (fix
        (fn (f n)
          (if (== n 0)
            1
            (* n (f (- n 1)))))))
    ```


***

#### <code>ASUM</code> <sup><sub>[FUNCTION]</sub></sup><a name="asum-value"></a>
<code>&forall; A B C. (<a href="#alternative-class">ALTERNATIVE</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A (:B :C)) &rarr; (:B :C))</code>

Fold over a list using alt


***

#### <code>FLIP</code> <sup><sub>[FUNCTION]</sub></sup><a name="flip-value"></a>
<code>&forall; A B C. ((:A &rarr; :B &rarr; :C) &rarr; :B &rarr; :A &rarr; :C)</code>

Returns a function that takes its arguments in reverse order.


***

#### <code>MSUM</code> <sup><sub>[FUNCTION]</sub></sup><a name="msum-value"></a>
<code>&forall; A B. (<a href="#monoid-class">MONOID</a> :B) (<a href="#foldable-class">FOLDABLE</a> :A) &rArr; ((:A :B) &rarr; :B)</code>

Fold over a list using &lt;&gt;


***

#### <code>CONST</code> <sup><sub>[FUNCTION]</sub></sup><a name="const-value"></a>
<code>&forall; A B. (:A &rarr; :B &rarr; :A)</code>

A function that always returns its first argument.


***

#### <code>TRACE</code> <sup><sub>[FUNCTION]</sub></sup><a name="trace-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; <a href="#unit-type">UNIT</a>)</code>

Print a line to *STANDARD-OUTPUT*


***

#### <code>REDUCE</code> <sup><sub>[FUNCTION]</sub></sup><a name="reduce-value"></a>
<code>&forall; A B C. <a href="#foldable-class">FOLDABLE</a> :C &rArr; ((:A &rarr; :B &rarr; :B) &rarr; :B &rarr; (:C :A) &rarr; :B)</code>

The same as `fold` but with the argument order swapped to match `cl:reduce`


***

#### <code>COMPOSE</code> <sup><sub>[FUNCTION]</sub></sup><a name="compose-value"></a>
<code>&forall; A B C. ((:A &rarr; :B) &rarr; (:C &rarr; :A) &rarr; :C &rarr; :B)</code>

***

#### <code>CONJOIN</code> <sup><sub>[FUNCTION]</sub></sup><a name="conjoin-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Compute the conjunction of two unary Boolean functions.


***

#### <code>DISJOIN</code> <sup><sub>[FUNCTION]</sub></sup><a name="disjoin-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Compute the disjunction of two unary Boolean functions.


***

#### <code>UNCURRY</code> <sup><sub>[FUNCTION]</sub></sup><a name="uncurry-value"></a>
<code>&forall; A B C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#tuple-type">TUPLE</a> :A :B) &rarr; :C)</code>

***

#### <code>COMPLEMENT</code> <sup><sub>[FUNCTION]</sub></sup><a name="complement-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Compute the complement of a unary Boolean function.


***

#### <code>TRACEOBJECT</code> <sup><sub>[FUNCTION]</sub></sup><a name="traceobject-value"></a>
<code>&forall; A. (<a href="#string-type">STRING</a> &rarr; :A &rarr; <a href="#unit-type">UNIT</a>)</code>

Print a line to *STANDARD-OUTPUT* in the form "{STR}: {ITEM}"


***

# Package `coalton-library/cell`<a name="coalton-library/cell-package"></a>

## [cell.lisp](https://github.com/coalton-lang/coalton/tree/main/library/cell.lisp) <a name="coalton-library/cell-cell-lisp-file"></a>

### Types

#### <code>CELL A</code> <sup><sub>[TYPE]</sub></sup><a name="cell-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#cell-type">CELL</a> A)</code>
- <code><a href="#num-class">NUM</a> A &rArr; <a href="#num-class">NUM</a> (<a href="#cell-type">CELL</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#cell-type">CELL</a> A) A</code>
- <code><a href="#into-class">INTO</a> A (<a href="#cell-type">CELL</a> A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#cell-type">CELL</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> A &rArr; <a href="#semigroup-class">SEMIGROUP</a> (<a href="#cell-type">CELL</a> A)</code>
- <code><a href="#applicative-class">APPLICATIVE</a> <a href="#cell-type">CELL</a></code>

</details>


***

### Values

#### <code>NEW</code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; A. (:A &rarr; (<a href="#cell-type">CELL</a> :A))</code>

Create a new mutable cell


***

#### <code>POP!</code> <sup><sub>[FUNCTION]</sub></sup><a name="pop!-value"></a>
<code>&forall; A. ((<a href="#cell-type">CELL</a> (<a href="#list-type">LIST</a> :A)) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

***

#### <code>READ</code> <sup><sub>[FUNCTION]</sub></sup><a name="read-value"></a>
<code>&forall; A. ((<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Read the value of a mutable cell


***

#### <code>PUSH!</code> <sup><sub>[FUNCTION]</sub></sup><a name="push!-value"></a>
<code>&forall; A. ((<a href="#cell-type">CELL</a> (<a href="#list-type">LIST</a> :A)) &rarr; :A &rarr; (<a href="#list-type">LIST</a> :A))</code>

***

#### <code>SWAP!</code> <sup><sub>[FUNCTION]</sub></sup><a name="swap!-value"></a>
<code>&forall; A. ((<a href="#cell-type">CELL</a> :A) &rarr; :A &rarr; :A)</code>

Replace the value of a mutable cell with a new value, then return the old value


***

#### <code>WRITE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="write!-value"></a>
<code>&forall; A. ((<a href="#cell-type">CELL</a> :A) &rarr; :A &rarr; :A)</code>

Set the value of a mutable cell, returning the new value


***

#### <code>UPDATE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="update!-value"></a>
<code>&forall; A. ((:A &rarr; :A) &rarr; (<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Apply F to the contents of CEL, storing and returning the result


***

#### <code>DECREMENT!</code> <sup><sub>[FUNCTION]</sub></sup><a name="decrement!-value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Add one to the contents of CEL, storing and returning the new value


***

#### <code>INCREMENT!</code> <sup><sub>[FUNCTION]</sub></sup><a name="increment!-value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Add one to the contents of CEL, storing and returning the new value


***

#### <code>UPDATE-SWAP!</code> <sup><sub>[FUNCTION]</sub></sup><a name="update-swap!-value"></a>
<code>&forall; A. ((:A &rarr; :A) &rarr; (<a href="#cell-type">CELL</a> :A) &rarr; :A)</code>

Apply F to the contents of CEL, swapping the result for the old value


***

# Package `coalton-library/vector`<a name="coalton-library/vector-package"></a>

## [vector.lisp](https://github.com/coalton-lang/coalton/tree/main/library/vector.lisp) <a name="coalton-library/vector-vector-lisp-file"></a>

### Types

#### <code>VECTOR A</code> <sup><sub>[TYPE]</sub></sup><a name="vector-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type">SLICE</a> A) (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#slice-type">SLICE</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type">SLICE</a> A) (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#list-type">LIST</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#list-type">LIST</a> A) (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#functor-class">FUNCTOR</a> <a href="#vector-type">VECTOR</a></code>
- <code><a href="#semigroup-class">SEMIGROUP</a> (<a href="#vector-type">VECTOR</a> A)</code>

</details>


***

### Values

#### <code>NEW</code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; A. (<a href="#unit-type">UNIT</a> &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Create a new empty vector


***

#### <code>COPY</code> <sup><sub>[FUNCTION]</sub></sup><a name="copy-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Return a new vector containing the same elements as V


***

#### <code>HEAD</code> <sup><sub>[FUNCTION]</sub></sup><a name="head-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the first item of V


***

#### <code>LAST</code> <sup><sub>[FUNCTION]</sub></sup><a name="last-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the last element of V


***

#### <code>POP!</code> <sup><sub>[FUNCTION]</sub></sup><a name="pop!-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Remove and return the first item of V


***

#### <code>SET!</code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; :A &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Set the INDEXth element of V to ITEM. This function left intentionally unsafe because it does not have a return value to check.


***

#### <code>INDEX</code> <sup><sub>[FUNCTION]</sub></sup><a name="index-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the INDEXth element of V


***

#### <code>PUSH!</code> <sup><sub>[FUNCTION]</sub></sup><a name="push!-value"></a>
<code>&forall; A. (:A &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Append ITEM to V and resize V if necessary


***

#### <code>SORT!</code> <sup><sub>[FUNCTION]</sub></sup><a name="sort!-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Sort a vector inplace


***

#### <code>APPEND</code> <sup><sub>[FUNCTION]</sub></sup><a name="append-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Create a new VECTOR containing the elements of v1 followed by the elements of v2


***

#### <code>EMPTY?</code> <sup><sub>[FUNCTION]</sub></sup><a name="empty?-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Returns TRUE if V is empty


***

#### <code>LENGTH</code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Returns the length of V


***

#### <code>FOREACH</code> <sup><sub>[FUNCTION]</sub></sup><a name="foreach-value"></a>
<code>&forall; A B. ((:A &rarr; :B) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in V


***

#### <code>CAPACITY</code> <sup><sub>[FUNCTION]</sub></sup><a name="capacity-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Returns the number of elements that V can store without resizing


***

#### <code>FOREACH2</code> <sup><sub>[FUNCTION]</sub></sup><a name="foreach2-value"></a>
<code>&forall; A B C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :B) &rarr; <a href="#unit-type">UNIT</a>)</code>

Like vector-foreach but twice as good


***

#### <code>SORT-BY!</code> <sup><sub>[FUNCTION]</sub></sup><a name="sort-by!-value"></a>
<code>&forall; A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Sort a vector inplace with predicate function F


***

#### <code>FIND-ELEM</code> <sup><sub>[FUNCTION]</sub></sup><a name="find-elem-value"></a>
<code>&forall; A. <a href="#eq-class">EQ</a> :A &rArr; (:A &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#integer-type">INTEGER</a>))</code>

Find the index of element E in V


***

#### <code>HEAD-UNSAFE</code> <sup><sub>[FUNCTION]</sub></sup><a name="head-unsafe-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Return the first item of V without first checking if V is empty


***

#### <code>LAST-UNSAFE</code> <sup><sub>[FUNCTION]</sub></sup><a name="last-unsafe-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Return the last element of V without first checking if V is empty


***

#### <code>POP-UNSAFE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="pop-unsafe!-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Remove and return the first item of V without checking if the vector is empty


***

#### <code>INDEX-UNSAFE</code> <sup><sub>[FUNCTION]</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Return the INDEXth element of V without checking if the element exists


***

#### <code>SWAP-REMOVE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="swap-remove!-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Remove the element IDX from VEC and replace it with the last element in VEC. Then return the removed element.


***

#### <code>FOREACH-INDEX</code> <sup><sub>[FUNCTION]</sub></sup><a name="foreach-index-value"></a>
<code>&forall; A B. ((<a href="#integer-type">INTEGER</a> &rarr; :A &rarr; :B) &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in V with its index


***

#### <code>WITH-CAPACITY</code> <sup><sub>[FUNCTION]</sub></sup><a name="with-capacity-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Create a new vector with N elements preallocated


***

#### <code>SWAP-REMOVE-UNSAFE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="swap-remove-unsafe!-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; :A)</code>

Remove the element IDX from VEC and replace it with the last element in VEC without bounds checking. Then return the removed element.


***

# Package `coalton-library/slice`<a name="coalton-library/slice-package"></a>

## [slice.lisp](https://github.com/coalton-lang/coalton/tree/main/library/slice.lisp) <a name="coalton-library/slice-slice-lisp-file"></a>

### Types

#### <code>SLICE A</code> <sup><sub>[TYPE]</sub></sup><a name="slice-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#eq-class">EQ</a> A &rArr; <a href="#eq-class">EQ</a> (<a href="#slice-type">SLICE</a> A)</code>
- <code><a href="#iso-class">ISO</a> (<a href="#slice-type">SLICE</a> A) (<a href="#vector-type">VECTOR</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#vector-type">VECTOR</a> A) (<a href="#slice-type">SLICE</a> A)</code>
- <code><a href="#into-class">INTO</a> (<a href="#slice-type">SLICE</a> A) (<a href="#vector-type">VECTOR</a> A)</code>

</details>


***

### Values

#### <code>NEW</code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; <a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#slice-type">SLICE</a> :A))</code>

***

#### <code>COPY</code> <sup><sub>[FUNCTION]</sub></sup><a name="copy-value"></a>
<code>&forall; A. ((<a href="#slice-type">SLICE</a> :A) &rarr; (<a href="#slice-type">SLICE</a> :A))</code>

Returns a new slice containg the same elements as S


***

#### <code>SET!</code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; :A &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Set the element at INDEX in S to ITEM


***

#### <code>INDEX</code> <sup><sub>[FUNCTION]</sub></sup><a name="index-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Lookup the element at INDEX in S


***

#### <code>LENGTH</code> <sup><sub>[FUNCTION]</sub></sup><a name="length-value"></a>
<code>&forall; A. ((<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Returns the length of S


***

#### <code>FOREACH</code> <sup><sub>[FUNCTION]</sub></sup><a name="foreach-value"></a>
<code>&forall; A B. ((:A &rarr; :B) &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in S


***

#### <code>FOREACH2</code> <sup><sub>[FUNCTION]</sub></sup><a name="foreach2-value"></a>
<code>&forall; A B C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; (<a href="#slice-type">SLICE</a> :B) &rarr; <a href="#unit-type">UNIT</a>)</code>

Iterate over S1 and S2 calling F once on each iteration


***

#### <code>INDEX-UNSAFE</code> <sup><sub>[FUNCTION]</sub></sup><a name="index-unsafe-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; :A)</code>

Lookup the element at INDEX in S without bounds checking


***

#### <code>ITER-CHUNKED</code> <sup><sub>[FUNCTION]</sub></sup><a name="iter-chunked-value"></a>
<code>&forall; A B. (((<a href="#slice-type">SLICE</a> :A) &rarr; :B) &rarr; <a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Chunked iteration over a vector. Ignores elements at the end if the vector does not evenly divide by the chunk size.


***

#### <code>ITER-SLIDING</code> <sup><sub>[FUNCTION]</sub></sup><a name="iter-sliding-value"></a>
<code>&forall; A B. (((<a href="#slice-type">SLICE</a> :A) &rarr; :B) &rarr; <a href="#integer-type">INTEGER</a> &rarr; (<a href="#vector-type">VECTOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Sliding iteration over a vector


***

#### <code>FOREACH-INDEX</code> <sup><sub>[FUNCTION]</sub></sup><a name="foreach-index-value"></a>
<code>&forall; A B. ((<a href="#integer-type">INTEGER</a> &rarr; :A &rarr; :B) &rarr; (<a href="#slice-type">SLICE</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call the function F once for each item in S with its index


***

# Package `coalton-library/hashtable`<a name="coalton-library/hashtable-package"></a>

## [hashtable.lisp](https://github.com/coalton-lang/coalton/tree/main/library/hashtable.lisp) <a name="coalton-library/hashtable-hashtable-lisp-file"></a>

### Types

#### <code>HASHTABLE A B</code> <sup><sub>[TYPE]</sub></sup><a name="hashtable-type"></a>


***

### Values

#### <code>GET</code> <sup><sub>[FUNCTION]</sub></sup><a name="get-value"></a>
<code>&forall; A B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; :A &rarr; (<a href="#optional-type">OPTIONAL</a> :B))</code>

Lookup KEY in TABLE


***

#### <code>NEW</code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; A B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#unit-type">UNIT</a> &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B))</code>

Create a new empty hashtable


***

#### <code>KEYS</code> <sup><sub>[FUNCTION]</sub></sup><a name="keys-value"></a>
<code>&forall; A B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Returns the keys in TABLE as a list


***

#### <code>SET!</code> <sup><sub>[FUNCTION]</sub></sup><a name="set!-value"></a>
<code>&forall; A B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; :A &rarr; :B &rarr; <a href="#unit-type">UNIT</a>)</code>

Set KEY to VALUE in TABLE


***

#### <code>COUNT</code> <sup><sub>[FUNCTION]</sub></sup><a name="count-value"></a>
<code>&forall; A B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Returns the number of entries in TABLE


***

#### <code>VALUES</code> <sup><sub>[FUNCTION]</sub></sup><a name="values-value"></a>
<code>&forall; A B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; (<a href="#list-type">LIST</a> :B))</code>

Returns the values in TABLE as a list


***

#### <code>ENTRIES</code> <sup><sub>[FUNCTION]</sub></sup><a name="entries-value"></a>
<code>&forall; A B. ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; (<a href="#list-type">LIST</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

***

#### <code>FOREACH</code> <sup><sub>[FUNCTION]</sub></sup><a name="foreach-value"></a>
<code>&forall; A B C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call F once for each key value pair in TABLE


***

#### <code>REMOVE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="remove!-value"></a>
<code>&forall; A B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#hashtable-type">HASHTABLE</a> :A :B) &rarr; :A &rarr; <a href="#unit-type">UNIT</a>)</code>

Remove the entry at KEY from TABLE


***

#### <code>WITH-CAPACITY</code> <sup><sub>[FUNCTION]</sub></sup><a name="with-capacity-value"></a>
<code>&forall; A B. <a href="#hash-class">HASH</a> :A &rArr; (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B))</code>

Crate a new empty hashtable with a given capacity


***

# Package `coalton-library/monad/state`<a name="coalton-library/monad/state-package"></a>

# Package `coalton-library/iterator`<a name="coalton-library/iterator-package"></a>

## [iterator.lisp](https://github.com/coalton-lang/coalton/tree/main/library/iterator.lisp) <a name="coalton-library/iterator-iterator-lisp-file"></a>

### Types

#### <code>ITERATOR A</code> <sup><sub>[TYPE]</sub></sup><a name="iterator-type"></a>

<details>
<summary>Instances</summary>

- <code><a href="#functor-class">FUNCTOR</a> <a href="#iterator-type">ITERATOR</a></code>

</details>


***

### Values

#### <code>NEW</code> <sup><sub>[FUNCTION]</sub></sup><a name="new-value"></a>
<code>&forall; A. ((<a href="#unit-type">UNIT</a> &rarr; (<a href="#optional-type">OPTIONAL</a> :A)) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

***

#### <code>OR!</code> <sup><sub>[FUNCTION]</sub></sup><a name="or!-value"></a>
<code>((<a href="#iterator-type">ITERATOR</a> <a href="#boolean-type">BOOLEAN</a>) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

***

#### <code>AND!</code> <sup><sub>[FUNCTION]</sub></sup><a name="and!-value"></a>
<code>((<a href="#iterator-type">ITERATOR</a> <a href="#boolean-type">BOOLEAN</a>) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

***

#### <code>ANY!</code> <sup><sub>[FUNCTION]</sub></sup><a name="any!-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Return `True` as soon as any element of ITER is GOOD?, or `False` if none of them are.

Returns `False` if ITER is empty.


***

#### <code>MAX!</code> <sup><sub>[FUNCTION]</sub></sup><a name="max!-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the most-positive element of ITER, or `None` if ITER is empty.


***

#### <code>MIN!</code> <sup><sub>[FUNCTION]</sub></sup><a name="min!-value"></a>
<code>&forall; A. <a href="#ord-class">ORD</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the most-negative element of ITER, or `None` if ITER is empty.


***

#### <code>SUM!</code> <sup><sub>[FUNCTION]</sub></sup><a name="sum!-value"></a>
<code>&forall; A. <a href="#num-class">NUM</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; :A)</code>

Add together all the elements of ITER.


***

#### <code>ZIP!</code> <sup><sub>[FUNCTION]</sub></sup><a name="zip!-value"></a>
<code>&forall; A B. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :B) &rarr; (<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

Return an iterator of tuples contining elements from two iterators.


***

#### <code>EMPTY</code> <sup><sub>[VALUE]</sub></sup><a name="empty-value"></a>
<code>&forall; A. (<a href="#iterator-type">ITERATOR</a> :A)</code>

Yields nothing; stops immediately


***

#### <code>FIND!</code> <sup><sub>[FUNCTION]</sub></sup><a name="find!-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Return the first element of ITER for which THIS? returns `True`, or `None` if no element matches.


***

#### <code>FOLD!</code> <sup><sub>[FUNCTION]</sub></sup><a name="fold!-value"></a>
<code>&forall; A B. ((:A &rarr; :B &rarr; :A) &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :B) &rarr; :A)</code>

Tail recursive in-order fold. Common Lisp calls this operation `reduce`.

If ITER is empty, returns INIT. Otherwise, calls (FUNC STATE ITEM) for each ITEM of ITER to produce a new
STATE, using INIT as the first STATE.


***

#### <code>NEXT!</code> <sup><sub>[FUNCTION]</sub></sup><a name="next!-value"></a>
<code>&forall; A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

Advance ITER, returning its next yielded value, or `None` if the iterator is exhausted.
Behavior is undefined if two threads concurrently call `next!` on the same iterator without a lock. Note that
most of the operators defined on iterators call `next!` internally, or create new iterators which will call
`next!` on their inputs.


***

#### <code>TAKE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="take!-value"></a>
<code>&forall; A. (<a href="#ufix-type">UFIX</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An `Iterator` which yields at most COUNT elements from ITER.


***

#### <code>UP-TO</code> <sup><sub>[FUNCTION]</sub></sup><a name="up-to-value"></a>
<code>&forall; A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins at zero and counts up to, but not including, LIMIT.


***

#### <code>COUNT!</code> <sup><sub>[FUNCTION]</sub></sup><a name="count!-value"></a>
<code>&forall; A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#integer-type">INTEGER</a>)</code>

Return the number of elements in ITER.
This operation could be called `length!`, but `count!` emphasizes the fact that it consumes ITER, and
afterwards, ITER will be exhausted.


***

#### <code>EVERY!</code> <sup><sub>[FUNCTION]</sub></sup><a name="every!-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#boolean-type">BOOLEAN</a>)</code>

Return `True` if every element of ITER is GOOD?, or `False` as soon as any element is not GOOD?.

Returns `True` if ITER is empty.


***

#### <code>CONCAT!</code> <sup><sub>[FUNCTION]</sub></sup><a name="concat!-value"></a>
<code>&forall; A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield all the elements of FIRST followed by all the elements from SECOND.


***

#### <code>FILTER!</code> <sup><sub>[FUNCTION]</sub></sup><a name="filter!-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Return an iterator over the elements from ITER for which KEEP? returns true.


***

#### <code>FLATTEN!</code> <sup><sub>[FUNCTION]</sub></sup><a name="flatten!-value"></a>
<code>&forall; A. ((<a href="#iterator-type">ITERATOR</a> (<a href="#iterator-type">ITERATOR</a> :A)) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield all the elements from each of the ITERS in order.


***

#### <code>ZIPWITH!</code> <sup><sub>[FUNCTION]</sub></sup><a name="zipwith!-value"></a>
<code>&forall; A B C. ((:A &rarr; :B &rarr; :C) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :C))</code>

Return an iterator of elements from LEFT and RIGHT which terminates as soon as either LEFT or RIGHT does.


***

#### <code>DOWN-FROM</code> <sup><sub>[FUNCTION]</sub></sup><a name="down-from-value"></a>
<code>&forall; A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins below the provided limit and counts down through and including zero.


***

#### <code>FOR-EACH!</code> <sup><sub>[FUNCTION]</sub></sup><a name="for-each!-value"></a>
<code>&forall; A B. ((:A &rarr; :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; <a href="#unit-type">UNIT</a>)</code>

Call THUNK on each element of ITER in order for side effects.
Discard values returned by THUNK.


***

#### <code>INDEX-OF!</code> <sup><sub>[FUNCTION]</sub></sup><a name="index-of!-value"></a>
<code>&forall; A. ((:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> <a href="#ufix-type">UFIX</a>))</code>

Return the zero-based index of the first element of ITER for which THIS? is `True`, or `None` if no element matches.


***

#### <code>LIST-ITER</code> <sup><sub>[FUNCTION]</sub></sup><a name="list-iter-value"></a>
<code>&forall; A. ((<a href="#list-type">LIST</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield successive elements of LST.
Behavior is undefined if the iterator is advanced after a destructive modification of LST.


***

#### <code>OPTIMIZE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="optimize!-value"></a>
<code>&forall; A. ((:A &rarr; :A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#optional-type">OPTIONAL</a> :A))</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the best element of ITER.

Return `None` if ITER is empty.


***

#### <code>CHAR-RANGE</code> <sup><sub>[FUNCTION]</sub></sup><a name="char-range-value"></a>
<code>(<a href="#char-type">CHAR</a> &rarr; <a href="#char-type">CHAR</a> &rarr; (<a href="#iterator-type">ITERATOR</a> <a href="#char-type">CHAR</a>))</code>

An inclusive range of characters from START to END by cl:char-code.


***

#### <code>ENUMERATE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="enumerate!-value"></a>
<code>&forall; A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> <a href="#ufix-type">UFIX</a> :A)))</code>

Pair successive zero-based incides with elements from ITER


***

#### <code>PAIR-WITH!</code> <sup><sub>[FUNCTION]</sub></sup><a name="pair-with!-value"></a>
<code>&forall; A B. ((:A &rarr; :B) &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)))</code>

Returns an iterator over tuples whose FSTs are elements from KEYS, and whose SNDs are the results of applying FUNC to those KEYS.


***

#### <code>UP-THROUGH</code> <sup><sub>[FUNCTION]</sub></sup><a name="up-through-value"></a>
<code>&forall; A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins at zero and counts up through and including LIMIT.


***

#### <code>REPEAT-ITEM</code> <sup><sub>[FUNCTION]</sub></sup><a name="repeat-item-value"></a>
<code>&forall; A. (:A &rarr; <a href="#ufix-type">UFIX</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield ITEM COUNT times, then stop.


***

#### <code>VECTOR-ITER</code> <sup><sub>[FUNCTION]</sub></sup><a name="vector-iter-value"></a>
<code>&forall; A. ((<a href="#vector-type">VECTOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield successive elements of VEC.
Behavior is undefined if the iterator is advanced after a destructive modification of VEC.


***

#### <code>STRING-CHARS</code> <sup><sub>[FUNCTION]</sub></sup><a name="string-chars-value"></a>
<code>(<a href="#string-type">STRING</a> &rarr; (<a href="#iterator-type">ITERATOR</a> <a href="#char-type">CHAR</a>))</code>

Yield successive `Char`s from STR.
Behavior is undefined if the iterator is advanced after a destructive modification of STR.


***

#### <code>COLLECT-LIST!</code> <sup><sub>[FUNCTION]</sub></sup><a name="collect-list!-value"></a>
<code>&forall; A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#list-type">LIST</a> :A))</code>

Construct a `List` containing all the elements from ITER in order.


***

#### <code>COUNT-FOREVER</code> <sup><sub>[FUNCTION]</sub></sup><a name="count-forever-value"></a>
<code>&forall; A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (<a href="#unit-type">UNIT</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An infinite iterator which starts at 0 and counts upwards by 1.


***

#### <code>RECURSIVE-ITER</code> <sup><sub>[FUNCTION]</sub></sup><a name="recursive-iter-value"></a>
<code>&forall; A. ((:A &rarr; :A) &rarr; (:A &rarr; <a href="#boolean-type">BOOLEAN</a>) &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which yields first START, then (SUCC START), then (SUCC (SUCC START)), and so on, stopping as soon as such a value is `done?`.

Beware off-by-one errors: the first value which is `done?` is not yielded. If `(done?  start)' is true, the
iterator is empty.


***

#### <code>REPEAT-FOREVER</code> <sup><sub>[FUNCTION]</sub></sup><a name="repeat-forever-value"></a>
<code>&forall; A. (:A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield ITEM over and over, infinitely.


***

#### <code>COLLECT-VECTOR!</code> <sup><sub>[FUNCTION]</sub></sup><a name="collect-vector!-value"></a>
<code>&forall; A. ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Construct a `Vector` containing all the elements from ITER in order.


***

#### <code>RANGE-DECREASING</code> <sup><sub>[FUNCTION]</sub></sup><a name="range-decreasing-value"></a>
<code>&forall; A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

A range which begins below START and counts down through and including END by STEP.

Equivalent to reversing `range-increasing`


***

#### <code>RANGE-INCREASING</code> <sup><sub>[FUNCTION]</sub></sup><a name="range-increasing-value"></a>
<code>&forall; A. (<a href="#num-class">NUM</a> :A) (<a href="#ord-class">ORD</a> :A) &rArr; (:A &rarr; :A &rarr; :A &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

An iterator which begins at START and yields successive elements spaced by STEP, stopping before END.


***

#### <code>COLLECT-HASHTABLE!</code> <sup><sub>[FUNCTION]</sub></sup><a name="collect-hashtable!-value"></a>
<code>&forall; A B. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> (<a href="#tuple-type">TUPLE</a> :A :B)) &rarr; (<a href="#hashtable-type">HASHTABLE</a> :A :B))</code>

Construct a `HashTable` containing all the key/value pairs from ITER.

If a key appears in ITER multiple times, the resulting table will contain its last corresponding value.


***

#### <code>REMOVE-DUPLICATES!</code> <sup><sub>[FUNCTION]</sub></sup><a name="remove-duplicates!-value"></a>
<code>&forall; A. <a href="#hash-class">HASH</a> :A &rArr; ((<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#iterator-type">ITERATOR</a> :A))</code>

Yield unique elements from ITER in order of first appearance.


***

#### <code>COLLECT-VECTOR-SIZE-HINT!</code> <sup><sub>[FUNCTION]</sub></sup><a name="collect-vector-size-hint!-value"></a>
<code>&forall; A. (<a href="#integer-type">INTEGER</a> &rarr; (<a href="#iterator-type">ITERATOR</a> :A) &rarr; (<a href="#vector-type">VECTOR</a> :A))</code>

Construct a `Vector` with initial allocation for SIZE elements, and fill it with all the elements from ITER in order.

The vector will be resized if ITER contains more than SIZE elements.


***

</div>
    </div>
    </div>