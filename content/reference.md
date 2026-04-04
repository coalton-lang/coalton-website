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
- <a href="#coalton-bits-package"><code>COALTON/BITS</code></a>
- <a href="#coalton-builtin-package"><code>COALTON/BUILTIN</code></a>
- <a href="#coalton-cell-package"><code>COALTON/CELL</code></a>
- <a href="#coalton-char-package"><code>COALTON/CHAR</code></a>
- <a href="#coalton-classes-package"><code>COALTON/CLASSES</code></a>
- <a href="#coalton-experimental-do-control-core-package"><code>COALTON/EXPERIMENTAL/DO-CONTROL-CORE</code></a>
- <a href="#coalton-experimental-do-control-loops-package"><code>COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS</code></a>
- <a href="#coalton-experimental-do-control-loops-adv-package"><code>COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS-ADV</code></a>
- <a href="#coalton-experimental-loops-package"><code>COALTON/EXPERIMENTAL/LOOPS</code></a>
- <a href="#coalton-file-package"><code>COALTON/FILE</code></a>
- <a href="#coalton-functions-package"><code>COALTON/FUNCTIONS</code></a>
- <a href="#coalton-hash-package"><code>COALTON/HASH</code></a>
- <a href="#coalton-hashmap-package"><code>COALTON/HASHMAP</code></a>
- <a href="#coalton-hashtable-package"><code>COALTON/HASHTABLE</code></a>
- <a href="#coalton-iterator-package"><code>COALTON/ITERATOR</code></a>
- <a href="#coalton-lisparray-package"><code>COALTON/LISPARRAY</code></a>
- <a href="#coalton-list-package"><code>COALTON/LIST</code></a>
- <a href="#coalton-math-arith-package"><code>COALTON/MATH/ARITH</code></a>
- <a href="#coalton-math-bounded-package"><code>COALTON/MATH/BOUNDED</code></a>
- <a href="#coalton-math-complex-package"><code>COALTON/MATH/COMPLEX</code></a>
- <a href="#coalton-math-elementary-package"><code>COALTON/MATH/ELEMENTARY</code></a>
- <a href="#coalton-math-fraction-package"><code>COALTON/MATH/FRACTION</code></a>
- <a href="#coalton-math-integral-package"><code>COALTON/MATH/INTEGRAL</code></a>
- <a href="#coalton-math-real-package"><code>COALTON/MATH/REAL</code></a>
- <a href="#coalton-monad-classes-package"><code>COALTON/MONAD/CLASSES</code></a>
- <a href="#coalton-monad-environment-package"><code>COALTON/MONAD/ENVIRONMENT</code></a>
- <a href="#coalton-monad-free-package"><code>COALTON/MONAD/FREE</code></a>
- <a href="#coalton-monad-freet-package"><code>COALTON/MONAD/FREET</code></a>
- <a href="#coalton-monad-identity-package"><code>COALTON/MONAD/IDENTITY</code></a>
- <a href="#coalton-monad-optionalt-package"><code>COALTON/MONAD/OPTIONALT</code></a>
- <a href="#coalton-monad-resultt-package"><code>COALTON/MONAD/RESULTT</code></a>
- <a href="#coalton-monad-state-package"><code>COALTON/MONAD/STATE</code></a>
- <a href="#coalton-monad-statet-package"><code>COALTON/MONAD/STATET</code></a>
- <a href="#coalton-optional-package"><code>COALTON/OPTIONAL</code></a>
- <a href="#coalton-ordmap-package"><code>COALTON/ORDMAP</code></a>
- <a href="#coalton-ordtree-package"><code>COALTON/ORDTREE</code></a>
- <a href="#coalton-queue-package"><code>COALTON/QUEUE</code></a>
- <a href="#coalton-randomaccess-package"><code>COALTON/RANDOMACCESS</code></a>
- <a href="#coalton-result-package"><code>COALTON/RESULT</code></a>
- <a href="#coalton-seq-package"><code>COALTON/SEQ</code></a>
- <a href="#coalton-show-package"><code>COALTON/SHOW</code></a>
- <a href="#coalton-slice-package"><code>COALTON/SLICE</code></a>
- <a href="#coalton-string-package"><code>COALTON/STRING</code></a>
- <a href="#coalton-symbol-package"><code>COALTON/SYMBOL</code></a>
- <a href="#coalton-system-package"><code>COALTON/SYSTEM</code></a>
- <a href="#coalton-tuple-package"><code>COALTON/TUPLE</code></a>
- <a href="#coalton-types-package"><code>COALTON/TYPES</code></a>
- <a href="#coalton-utils-package"><code>COALTON/UTILS</code></a>
- <a href="#coalton-vector-package"><code>COALTON/VECTOR</code></a>
- <a href="#coalton-xmath-big-float-package"><code>COALTON/XMATH/BIG-FLOAT</code></a>
- <a href="#coalton-xmath-computable-reals-package"><code>COALTON/XMATH/COMPUTABLE-REALS</code></a>
- <a href="#coalton-xmath-dual-package"><code>COALTON/XMATH/DUAL</code></a>
- <a href="#coalton-xmath-dyadic-package"><code>COALTON/XMATH/DYADIC</code></a>
- <a href="#coalton-xmath-fft-package"><code>COALTON/XMATH/FFT</code></a>
- <a href="#coalton-xmath-hyperdual-package"><code>COALTON/XMATH/HYPERDUAL</code></a>
- <a href="#coalton-xmath-realalgebraic-package"><code>COALTON/XMATH/REALALGEBRAIC</code></a>
</div>
</aside>
<div class="main-content">

# Package `COALTON`<a name="coalton-package"></a>


Public interface to COALTON.

### Types

#### <a href="#coalton-arrow-type"><code>Arrow</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-arrow-type"></a>

A named constructor for function types. `Arrow :a :b` is equivalent to `:a -> :b`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-arrow-type">Arrow</a> :A)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-arrow-type">Arrow</a> :A)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-arrow-type">Arrow</a> :A)</code>

</details>



***

#### <a href="#coalton-bit-type"><code>Bit</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L77-L78">src</a></sub></sup><a name="coalton-bit-type"></a>

A single bit, equal to 0 or 1. Uses `cl:bit`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-bit-type">Bit</a></code>

</details>



***

#### <a href="#coalton-boolean-type"><code>Boolean</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-boolean-type"></a>
- <code>False</code> 
  - Boolean `False`
- <code>True</code> 
  - Boolean `True`

Either true or false, internally represented by `cl:t` and `cl:nil` respectively.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> <a href="#coalton-boolean-type">Boolean</a></code>

</details>



***

#### <a href="#coalton-char-type"><code>Char</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-char-type"></a>

A character represented by a Common Lisp `cl:character`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> <a href="#coalton-string-type">String</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-char-type">Char</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> <a href="#coalton-string-type">String</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-char-type">Char</a></code>

</details>



***

#### <a href="#coalton-double-float-type"><code>Double-Float</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L123-L124">src</a></sub></sup><a name="coalton-double-float-type"></a>

Deprecated name for F64. This is provided for backward compatibility.



***

#### <a href="#coalton-f32-type"><code>F32</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-f32-type"></a>

Single-precision floating point number (32 bits in size). Represented by a Common Lisp `cl:single-float`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-arith-transfinite-class">Transfinite</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

#### <a href="#coalton-f64-type"><code>F64</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-f64-type"></a>

Double-precision floating point number (64 bits in size). Represented by a Common Lisp `cl:double-float`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-arith-transfinite-class">Transfinite</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-f64-type">F64</a></code>

</details>



***

#### <a href="#coalton-fraction-type"><code>Fraction</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-fraction-type"></a>

A ratio of integers always in reduced form. Represented by a Common Lisp `cl:rational`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> <a href="#coalton-fraction-type">Fraction</a></code>

</details>



***

#### <a href="#coalton-i16-type"><code>I16</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L101-L102">src</a></sub></sup><a name="coalton-i16-type"></a>

Signed 16-bit integer capable of storing values in `[-32768, 32767]`. Uses `(signed-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i16-type">I16</a></code>

</details>



***

#### <a href="#coalton-i32-type"><code>I32</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L105-L106">src</a></sub></sup><a name="coalton-i32-type"></a>

Signed 32-bit integer capable of storing values in `[-2147483648, 2147483647]`. Uses `(signed-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i32-type">I32</a></code>

</details>



***

#### <a href="#coalton-i64-type"><code>I64</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L109-L110">src</a></sub></sup><a name="coalton-i64-type"></a>

Signed 64-bit integer capable of storing values in `[-9223372036854775808, 9223372036854775807]`. Uses `(signed-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i64-type">I64</a></code>

</details>



***

#### <a href="#coalton-i8-type"><code>I8</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L97-L98">src</a></sub></sup><a name="coalton-i8-type"></a>

Signed 8-bit integer capable of storing values in `[-128, 127]`. Uses `(signed-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i8-type">I8</a></code>

</details>



***

#### <a href="#coalton-ifix-type"><code>IFix</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L113-L114">src</a></sub></sup><a name="coalton-ifix-type"></a>

Non-allocating tagged integer; range is platform-dependent. Does not error on overflow. Uses `fixnum`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-ifix-type">IFix</a></code>

</details>



***

#### <a href="#coalton-integer-type"><code>Integer</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-integer-type"></a>

Integer of unbounded size. Represented by a Common Lisp `cl:integer`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-string-type">String</a> <a href="#coalton-integer-type">Integer</a></code>

</details>



***

#### <a href="#coalton-list-type"><code>List</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-list-type"></a>
- <code>Nil</code> 
  - `Nil` represents an empty `List`.
- <code>(Cons :A <a href="#coalton-list-type">List</a> :A)</code>
  - `Cons` represents a `List` containing a first element (`car`) and a nested `Cons` (`cdr`).

Homogeneous list of objects. Represented as a typical Common Lisp chain of `cl:cons` (or `cl:nil`).

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-alternative-class">Alternative</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>
- <code><a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT (<a href="#coalton-list-type">List</a> :ELT)</code>
- <code><a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>
- <code><a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT (<a href="#coalton-list-type">List</a> :ELT)</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :A &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) (<a href="#coalton-list-type">List</a> :T)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-optional-type">Optional</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-list-type">List</a> :ELT)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> :T) (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) (<a href="#coalton-list-type">List</a> :T)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> <a href="#coalton-list-type">List</a></code>

</details>



***

#### <a href="#coalton-optional-type"><code>Optional</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-optional-type"></a>
- <code>(Some :A)</code>
  - `Some` expresses the presence of a meaningful value.
- <code>None</code> 
  - `None` expresses the absence of a meaningful value.

A type that allows indicating the presence or absence of a value. The underlying representation does not allocate when a value is present (i.e., with `Some`).

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-alternative-class">Alternative</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> :CONTAINER :ELT &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-optional-type">Optional</a> :CONTAINER) (<a href="#coalton-optional-type">Optional</a> :ELT)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-optional-type">Optional</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-optional-type">Optional</a> :B) (<a href="#coalton-classes-result-type">Result</a> <a href="#coalton-unit-type">Unit</a> :B)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-classes-result-type">Result</a> :A :B) (<a href="#coalton-optional-type">Optional</a> :B)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-optional-type">Optional</a> :A) :A</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-classes-result-type">Result</a> <a href="#coalton-unit-type">Unit</a> :A) (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-monadfail-class">MonadFail</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> :A &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> :A &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-unwrappable-class">Unwrappable</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> <a href="#coalton-optional-type">Optional</a></code>

</details>



***

#### <a href="#coalton-single-float-type"><code>Single-Float</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L120-L121">src</a></sub></sup><a name="coalton-single-float-type"></a>

Deprecated name for F32. This is provided for backward compatibility.



***

#### <a href="#coalton-string-type"><code>String</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-string-type"></a>

String of characters. Represented by Common Lisp `cl:string`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> <a href="#coalton-string-type">String</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-string-type">String</a> &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-cell-cell-type">Cell</a> :A) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-char-type">Char</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-file-pathname-type">Pathname</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> (<a href="#coalton-vector-vector-type">Vector</a> <a href="#coalton-char-type">Char</a>)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> <a href="#coalton-string-type">String</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-signalable-class">Signalable</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-string-type">String</a> <a href="#coalton-integer-type">Integer</a></code>

</details>



***

#### <a href="#coalton-u16-type"><code>U16</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L85-L86">src</a></sub></sup><a name="coalton-u16-type"></a>

Unsigned 16-bit integer capable of storing values in `[0, 65535]`. Uses `(unsigned-byte 16)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u16-type">U16</a></code>

</details>



***

#### <a href="#coalton-u32-type"><code>U32</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L89-L90">src</a></sub></sup><a name="coalton-u32-type"></a>

Unsigned 32-bit integer capable of storing values in `[0, 4294967295]`. Uses `(unsigned-byte 32)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u32-type">U32</a></code>

</details>



***

#### <a href="#coalton-u64-type"><code>U64</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L93-L94">src</a></sub></sup><a name="coalton-u64-type"></a>

Unsigned 64-bit integer capable of storing values in `[0, 18446744073709551615]`. Uses `(unsigned-byte 64)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-ufix-type">UFix</a></code>

</details>



***

#### <a href="#coalton-u8-type"><code>U8</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L81-L82">src</a></sub></sup><a name="coalton-u8-type"></a>

Unsigned 8-bit integer capable of storing values in `[0, 255]`. Uses `(unsigned-byte 8)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u8-type">U8</a></code>

</details>



***

#### <a href="#coalton-ufix-type"><code>UFix</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L117-L118">src</a></sub></sup><a name="coalton-ufix-type"></a>

Non-allocating tagged non-negative integer; range is platform-dependent. Uses `(and fixnum unsigned-byte)`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-%filebyte-class">%FileByte</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u8-type">U8</a></code>

</details>



***

#### <a href="#coalton-unit-type"><code>Unit</code></a> <sup><sub>[TYPE]</sub></sup><a name="coalton-unit-type"></a>
- <code>Unit</code> 
  - `Unit` is the explicit one-value unit type, distinct from zero-value returns `()`.

The "unit" type whose only member is the value `Unit`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-unit-type">Unit</a></code>

</details>



***

### Values

#### <a href="#coalton-cons-value"><code>(CONS X XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L29-L31">src</a></sub></sup><a name="coalton-cons-value"></a>
<code>&forall; :A. :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>


***

#### <a href="#coalton-inline-value"><code>(INLINE APPLICATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L1-L2">src</a></sub></sup><a name="coalton-inline-value"></a>
<code>&forall; :A. :A &rarr; :A</code>

Try to inline `application`. It will only attempt to inline
`application` written syntactically as a function application.



***

#### <a href="#coalton-likely-value"><code>(LIKELY PREDICATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L3-L3">src</a></sub></sup><a name="coalton-likely-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Hint to the compiler that `predicate` is likely `True`.



***

#### <a href="#coalton-noinline-value"><code>(NOINLINE APPLICATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L2-L3">src</a></sub></sup><a name="coalton-noinline-value"></a>
<code>&forall; :A. :A &rarr; :A</code>

Prevent `application` from being inlined. It will prevent
inlining when the argument is syntactically a function application.



***

#### <a href="#coalton-some-value"><code>(SOME X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L47-L59">src</a></sub></sup><a name="coalton-some-value"></a>
<code>&forall; :A. :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

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

#### <a href="#coalton-unlikely-value"><code>(UNLIKELY PREDICATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/&lt;macroexpansion&gt;#L3-L3">src</a></sub></sup><a name="coalton-unlikely-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Hint to the compiler that `predicate` is likely `False`.



***

#### <a href="#coalton-false-value"><code>False</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L20-L20">src</a></sub></sup><a name="coalton-false-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a></code>


***

#### <a href="#coalton-nil-value"><code>Nil</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L34-L36">src</a></sub></sup><a name="coalton-nil-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A</code>


***

#### <a href="#coalton-none-value"><code>None</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L62-L74">src</a></sub></sup><a name="coalton-none-value"></a>
<code>&forall; :A. <a href="#coalton-optional-type">Optional</a> :A</code>

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

#### <a href="#coalton-true-value"><code>True</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L17-L17">src</a></sub></sup><a name="coalton-true-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a></code>


***

#### <a href="#coalton-unit-value"><code>Unit</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/primitive-types.ct#L24-L24">src</a></sub></sup><a name="coalton-unit-value"></a>
<code><a href="#coalton-unit-type">Unit</a></code>


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

    (the (Optional <type>) (tryInto <expr>))

and

    (try-as <type>)

is equivalent to

    (fn (expr) (the (Optional <type>) (tryInto expr))).

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

# Package `COALTON/BITS`<a name="coalton-bits-package"></a>

### Classes

#### <a href="#coalton-bits-bits-class"><code>Bits</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.ct#L34-L45">src</a></sub></sup><a name="coalton-bits-bits-class"></a>
<code><a href="#coalton-classes-num-class">Num</a> :INT &rArr; <a href="#coalton-bits-bits-class">Bits</a> :INT</code>


Operations on the bits of twos-complement integers

Methods:
- <code>AND :: :INT * :INT &rarr; :INT</code><br/>The bitwise logical `and` of two integers
- <code>OR :: :INT * :INT &rarr; :INT</code><br/>The bitwise logical `or` of two integers
- <code>XOR :: :INT * :INT &rarr; :INT</code><br/>The bitwise logical exclusive `or` of two integers
- <code>NOT :: :INT &rarr; :INT</code><br/>The bitwise logical `not` of two integers
- <code>SHIFT :: <a href="#coalton-integer-type">Integer</a> * :INT &rarr; :INT</code><br/>The arithmetic left-shift of an integer by an integer number of bits
<details>
<summary>Instances</summary>

- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-bits-bits-class">Bits</a> <a href="#coalton-integer-type">Integer</a></code>

</details>



***

#### <a href="#coalton-bits-reversebits-class"><code>ReverseBits</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.ct#L61-L68">src</a></sub></sup><a name="coalton-bits-reversebits-class"></a>
<code><a href="#coalton-bits-reversebits-class">ReverseBits</a> :T</code>


A type class for number types that support bit reversal.

Methods:
- <code>REVERSE-BITS :: :T &rarr; :T</code><br/>Reverse the bits of `x`.
- <code>REVERSE-N-BITS :: <a href="#coalton-ufix-type">UFix</a> * :T &rarr; :T</code><br/>Reverse the first `n` bits of `x` and set the rest to 0.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-bits-reversebits-class">ReverseBits</a> <a href="#coalton-u8-type">U8</a></code>

</details>



***

### Values

#### <a href="#coalton-bits-dpb-value"><code>(DPB NEWBYTE SIZE POSITION BITSTRING)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.ct#L48-L51">src</a></sub></sup><a name="coalton-bits-dpb-value"></a>
<code>&forall; :A. <a href="#coalton-bits-bits-class">Bits</a> :A &rArr; :A * <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> * :A &rarr; :A</code>

Deposits a byte `newbyte` of size `size` into a bitstring `bitstring` at a position `position`.



***

#### <a href="#coalton-bits-ldb-value"><code>(LDB SIZE POSITION BITSTRING)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/bits.ct#L54-L57">src</a></sub></sup><a name="coalton-bits-ldb-value"></a>
<code>&forall; :A. <a href="#coalton-bits-bits-class">Bits</a> :A &rArr; <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> * :A &rarr; :A</code>

Deposits a byte of size `size` into a bitstring at a position `position`.



***

# Package `COALTON/BUILTIN`<a name="coalton-builtin-package"></a>

### Values

#### <a href="#coalton-builtin-boolean-and-value"><code>(BOOLEAN-AND X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.ct#L59-L62">src</a></sub></sup><a name="coalton-builtin-boolean-and-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> * <a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Are both `x` and `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `and` macro for short-circuiting behavior.



***

#### <a href="#coalton-builtin-boolean-not-value"><code>(BOOLEAN-NOT X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.ct#L45-L48">src</a></sub></sup><a name="coalton-builtin-boolean-not-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

The logical negation of `x`. Is `x` false?



***

#### <a href="#coalton-builtin-boolean-or-value"><code>(BOOLEAN-OR X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.ct#L52-L55">src</a></sub></sup><a name="coalton-builtin-boolean-or-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> * <a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is either `x` or `y` true? Note that this is a *function* which means both `x` and `y` will be evaluated. Use the `or` macro for short-circuiting behavior.



***

#### <a href="#coalton-builtin-boolean-xor-value"><code>(BOOLEAN-XOR X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.ct#L66-L70">src</a></sub></sup><a name="coalton-builtin-boolean-xor-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> * <a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Are `x` or `y` true, but not both?



***

#### <a href="#coalton-builtin-not-value"><code>(NOT X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.ct#L33-L35">src</a></sub></sup><a name="coalton-builtin-not-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Synonym for `boolean-not`.



***

#### <a href="#coalton-builtin-undefined-value"><code>(UNDEFINED _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.ct#L27-L29">src</a></sub></sup><a name="coalton-builtin-undefined-value"></a>
<code>&forall; :A :B. :A &rarr; :B</code>

A function which can be used in place of any value, throwing an error at runtime.



***

#### <a href="#coalton-builtin-xor-value"><code>(XOR X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/builtin.ct#L39-L41">src</a></sub></sup><a name="coalton-builtin-xor-value"></a>
<code><a href="#coalton-boolean-type">Boolean</a> * <a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Synonym for `boolean-xor`.



***

### Macros

#### <a href="#coalton-builtin-unreachable-macro"><code>UNREACHABLE (&amp;OPTIONAL (DATUM &quot;Unreachable&quot;) &amp;REST ARGUMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-builtin-unreachable-macro"></a>

Signal an error with CL format string DATUM and optional format arguments ARGUMENTS.



***

# Package `COALTON/CELL`<a name="coalton-cell-package"></a>

### Types

#### <a href="#coalton-cell-cell-type"><code>Cell</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L39-L40">src</a></sub></sup><a name="coalton-cell-cell-type"></a>

Internally mutable cell

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-cell-cell-type">Cell</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> :A &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-cell-cell-type">Cell</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-cell-cell-type">Cell</a> :A) :A</code>
- <code><a href="#coalton-classes-into-class">Into</a> :A (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-string-type">String</a> &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-cell-cell-type">Cell</a> :A) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> :A &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-cell-cell-type">Cell</a> :|0|)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> :A &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>

</details>



***

### Values

#### <a href="#coalton-cell-decrement!-value"><code>(DECREMENT! CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L109-L112">src</a></sub></sup><a name="coalton-cell-decrement!-value"></a>
<code>&forall; :COUNTER. <a href="#coalton-classes-num-class">Num</a> :COUNTER &rArr; <a href="#coalton-cell-cell-type">Cell</a> :COUNTER &rarr; :COUNTER</code>

Subtract one from the contents of `cel`, storing and returning the new
value.



***

#### <a href="#coalton-cell-increment!-value"><code>(INCREMENT! CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L103-L105">src</a></sub></sup><a name="coalton-cell-increment!-value"></a>
<code>&forall; :COUNTER. <a href="#coalton-classes-num-class">Num</a> :COUNTER &rArr; <a href="#coalton-cell-cell-type">Cell</a> :COUNTER &rarr; :COUNTER</code>

Add one to the contents of `cel`, storing and returning the new value.



***

#### <a href="#coalton-cell-new-value"><code>(NEW DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L44-L47">src</a></sub></sup><a name="coalton-cell-new-value"></a>
<code>&forall; :A. :A &rarr; <a href="#coalton-cell-cell-type">Cell</a> :A</code>

Create a new mutable cell containing `data`.



***

#### <a href="#coalton-cell-pop!-value"><code>(POP! CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L92-L98">src</a></sub></sup><a name="coalton-cell-pop!-value"></a>
<code>&forall; :ELT. <a href="#coalton-cell-cell-type">Cell</a> (<a href="#coalton-list-type">List</a> :ELT) &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

Remove and return the first element of the list in `cel`.



***

#### <a href="#coalton-cell-push!-value"><code>(PUSH! CEL NEW-ELT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L87-L89">src</a></sub></sup><a name="coalton-cell-push!-value"></a>
<code>&forall; :ELT. <a href="#coalton-cell-cell-type">Cell</a> (<a href="#coalton-list-type">List</a> :ELT) * :ELT &rarr; <a href="#coalton-list-type">List</a> :ELT</code>

Push `new-elt` onto the start of the list in `cel`.



***

#### <a href="#coalton-cell-read-value"><code>(READ CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L51-L54">src</a></sub></sup><a name="coalton-cell-read-value"></a>
<code>&forall; :A. <a href="#coalton-cell-cell-type">Cell</a> :A &rarr; :A</code>

Read the value of a mutable cell `cel`.



***

#### <a href="#coalton-cell-swap!-value"><code>(SWAP! CEL DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L57-L63">src</a></sub></sup><a name="coalton-cell-swap!-value"></a>
<code>&forall; :A. <a href="#coalton-cell-cell-type">Cell</a> :A * :A &rarr; :A</code>

Replace the value of a mutable cell `cel` with a new value `data`,
then return the old value.



***

#### <a href="#coalton-cell-update!-value"><code>(UPDATE! F CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L75-L77">src</a></sub></sup><a name="coalton-cell-update!-value"></a>
<code>&forall; :A. (:A &rarr; :A) * <a href="#coalton-cell-cell-type">Cell</a> :A &rarr; :A</code>

Apply `f` to the contents of `cel`, storing and returning the result.



***

#### <a href="#coalton-cell-update-swap!-value"><code>(UPDATE-SWAP! F CEL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L80-L83">src</a></sub></sup><a name="coalton-cell-update-swap!-value"></a>
<code>&forall; :A. (:A &rarr; :A) * <a href="#coalton-cell-cell-type">Cell</a> :A &rarr; :A</code>

Apply `f` to the contents of `cel`, swapping the result for the old
value.



***

#### <a href="#coalton-cell-write!-value"><code>(WRITE! CEL DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/cell.ct#L67-L71">src</a></sub></sup><a name="coalton-cell-write!-value"></a>
<code>&forall; :A. <a href="#coalton-cell-cell-type">Cell</a> :A * :A &rarr; :A</code>

Set the value of a mutable cell `cel` to `data`, returning the new
value.



***

# Package `COALTON/CHAR`<a name="coalton-char-package"></a>

### Values

#### <a href="#coalton-char-alpha?-value"><code>(ALPHA? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L71-L74">src</a></sub></sup><a name="coalton-char-alpha?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` an alphabetic character?



***

#### <a href="#coalton-char-ascii-alpha?-value"><code>(ASCII-ALPHA? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L77-L82">src</a></sub></sup><a name="coalton-char-ascii-alpha?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` an ASCII alphabetic character?



***

#### <a href="#coalton-char-ascii-alphanumeric?-value"><code>(ASCII-ALPHANUMERIC? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L97-L100">src</a></sub></sup><a name="coalton-char-ascii-alphanumeric?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` an ASCII alphanumeric character?



***

#### <a href="#coalton-char-ascii-digit?-value"><code>(ASCII-DIGIT? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L91-L94">src</a></sub></sup><a name="coalton-char-ascii-digit?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` an ASCII digit character?



***

#### <a href="#coalton-char-ascii-lowercase?-value"><code>(ASCII-LOWERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L122-L126">src</a></sub></sup><a name="coalton-char-ascii-lowercase?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` an ASCII lowercase character?



***

#### <a href="#coalton-char-ascii-uppercase?-value"><code>(ASCII-UPPERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L109-L113">src</a></sub></sup><a name="coalton-char-ascii-uppercase?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` an ASCII uppercase character?



***

#### <a href="#coalton-char-char-code-value"><code>(CHAR-CODE CHAR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L36-L39">src</a></sub></sup><a name="coalton-char-char-code-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Convert a character to its ASCII representation.



***

#### <a href="#coalton-char-code-char-value"><code>(CODE-CHAR CODE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L48-L55">src</a></sub></sup><a name="coalton-char-code-char-value"></a>
<code><a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-char-type">Char</a></code>

Convert a number to its ASCII character, returning None on failure.



***

#### <a href="#coalton-char-digit?-value"><code>(DIGIT? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L85-L88">src</a></sub></sup><a name="coalton-char-digit?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` a digit character?



***

#### <a href="#coalton-char-downcase-value"><code>(DOWNCASE C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L135-L138">src</a></sub></sup><a name="coalton-char-downcase-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-char-type">Char</a></code>

Returns the downcased version of `c`, returning `c` when there is none.



***

#### <a href="#coalton-char-lowercase?-value"><code>(LOWERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L116-L119">src</a></sub></sup><a name="coalton-char-lowercase?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` a lowercase character?



***

#### <a href="#coalton-char-range-value"><code>(RANGE START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L141-L148">src</a></sub></sup><a name="coalton-char-range-value"></a>
<code><a href="#coalton-char-type">Char</a> * <a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> <a href="#coalton-char-type">Char</a></code>

An inclusive range of characters from `start` to `end` by `char-code`.



***

#### <a href="#coalton-char-upcase-value"><code>(UPCASE C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L129-L132">src</a></sub></sup><a name="coalton-char-upcase-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-char-type">Char</a></code>

Returns the upcased version of `c`, returning `c` when there is none.



***

#### <a href="#coalton-char-uppercase?-value"><code>(UPPERCASE? C)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/char.ct#L103-L106">src</a></sub></sup><a name="coalton-char-uppercase?-value"></a>
<code><a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `c` an uppercase character?



***

# Package `COALTON/CLASSES`<a name="coalton-classes-package"></a>

### Types

#### <a href="#coalton-classes-hash-type"><code>Hash</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L128-L129">src</a></sub></sup><a name="coalton-classes-hash-type"></a>

Implementation dependent hash code.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> <a href="#coalton-classes-hash-type">Hash</a></code>

</details>



***

#### <a href="#coalton-classes-ordering-type"><code>Ordering</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L142-L146">src</a></sub></sup><a name="coalton-classes-ordering-type"></a>
- <code>LT</code> 
  - Less than
- <code>GT</code> 
  - Greater than
- <code>EQ</code> 
  - Equal to

The result of an ordered comparison.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-classes-ordering-type">Ordering</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-classes-ordering-type">Ordering</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-classes-ordering-type">Ordering</a></code>

</details>



***

#### <a href="#coalton-classes-result-type"><code>Result</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L80-L86">src</a></sub></sup><a name="coalton-classes-result-type"></a>
- <code>(Err :A)</code>
- <code>(Ok :A)</code>

Represents something that may have failed.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code>(<a href="#coalton-classes-ord-class">Ord</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :B) &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-classes-bifunctor-class">Bifunctor</a> <a href="#coalton-classes-result-type">Result</a></code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> :CONTAINER :ELT &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-classes-result-type">Result</a> :ERR :CONTAINER) (<a href="#coalton-classes-result-type">Result</a> :ERR :ELT)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-optional-type">Optional</a> :B) (<a href="#coalton-classes-result-type">Result</a> <a href="#coalton-unit-type">Unit</a> :B)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-classes-result-type">Result</a> :A :B) (<a href="#coalton-optional-type">Optional</a> :B)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-classes-result-type">Result</a> :ERR :ELT) :ELT</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-classes-result-type">Result</a> <a href="#coalton-unit-type">Unit</a> :A) (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> :B &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-result-type">Result</a> :|0| :|1|)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> :B &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> (<a href="#coalton-classes-result-type">Result</a> :E :A)</code>
- <code><a href="#coalton-classes-unwrappable-class">Unwrappable</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> (<a href="#coalton-classes-result-type">Result</a> :E)</code>

</details>



***

### Structs

#### <a href="#coalton-classes-tuple-type"><code>Tuple #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :B&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L75-L78">src</a></sub></sup><a name="coalton-classes-tuple-type"></a>

A heterogeneous collection of items.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code>(<a href="#coalton-classes-ord-class">Ord</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :B) &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#coalton-classes-bifunctor-class">Bifunctor</a> <a href="#coalton-classes-tuple-type">Tuple</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V) (<a href="#coalton-classes-tuple-type">Tuple</a> :K :V)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-ordmap-mappair-type">MapPair</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B) (<a href="#coalton-classes-tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V) (<a href="#coalton-classes-tuple-type">Tuple</a> :K :V)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B) (<a href="#coalton-classes-tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :|0| :|1|)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A)</code>

</details>



***

### Classes

#### <a href="#coalton-classes-alternative-class"><code>Alternative</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L258-L261">src</a></sub></sup><a name="coalton-classes-alternative-class"></a>
<code><a href="#coalton-classes-applicative-class">Applicative</a> :F &rArr; <a href="#coalton-classes-alternative-class">Alternative</a> :F</code>


Types which are monoids on applicative functors.

Methods:
- <code>ALT :: :F :A * :F :A &rarr; :F :A</code>
- <code>EMPTY :: :F :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-alternative-class">Alternative</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-alternative-class">Alternative</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-alternative-class">Alternative</a> <a href="#coalton-optional-type">Optional</a></code>

</details>



***

#### <a href="#coalton-classes-applicative-class"><code>Applicative</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L231-L234">src</a></sub></sup><a name="coalton-classes-applicative-class"></a>
<code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> :F</code>


Types which are a functor which can embed pure expressions and sequence operations.

Methods:
- <code>PURE :: :A &rarr; :F :A</code>
- <code>LIFTA2 :: (:A * :B &rarr; :C) * :F :A * :F :B &rarr; :F :C</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-monad-class">Monad</a> :M) &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-state-st-type">ST</a> :STATE)</code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-monad-identity-identity-type">Identity</a></code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-cell-cell-type">Cell</a></code>
- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-arrow-type">Arrow</a> :A)</code>

</details>



***

#### <a href="#coalton-classes-bifunctor-class"><code>Bifunctor</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L295-L297">src</a></sub></sup><a name="coalton-classes-bifunctor-class"></a>
<code><a href="#coalton-classes-bifunctor-class">Bifunctor</a> :F</code>


Types which take two type arguments and are functors on both.

Methods:
- <code>BIMAP :: (:A &rarr; :B) * (:C &rarr; :D) * :F :A :C &rarr; :F :B :D</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-bifunctor-class">Bifunctor</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :F)</code>
- <code><a href="#coalton-classes-bifunctor-class">Bifunctor</a> <a href="#coalton-classes-result-type">Result</a></code>
- <code><a href="#coalton-classes-bifunctor-class">Bifunctor</a> <a href="#coalton-classes-tuple-type">Tuple</a></code>

</details>



***

#### <a href="#coalton-classes-default-class"><code>Default</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L521-L523">src</a></sub></sup><a name="coalton-classes-default-class"></a>
<code><a href="#coalton-classes-default-class">Default</a> :A</code>


Types which have default values.

Methods:
- <code>DEFAULT :: Void &rarr; :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) (<a href="#coalton-classes-default-class">Default</a> :C) (<a href="#coalton-classes-default-class">Default</a> :D) (<a href="#coalton-classes-default-class">Default</a> :E) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) (<a href="#coalton-classes-default-class">Default</a> :C) (<a href="#coalton-classes-default-class">Default</a> :D) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) (<a href="#coalton-classes-default-class">Default</a> :C) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#coalton-classes-default-class">Default</a> :A &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-symbol-symbol-type">Symbol</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-classes-hash-type">Hash</a></code>

</details>



***

#### <a href="#coalton-classes-eq-class"><code>Eq</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L92-L94">src</a></sub></sup><a name="coalton-classes-eq-class"></a>
<code><a href="#coalton-classes-eq-class">Eq</a> :A</code>


Types which have equality defined.

Methods:
- <code>== :: :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :T &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :T &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>  
Note: Eq only compares the primal component.
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :KEY) (<a href="#coalton-classes-eq-class">Eq</a> :VALUE) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :KEY &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-ordmap-mappair-type">MapPair</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :ELT &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :K) (<a href="#coalton-classes-eq-class">Eq</a> :V) (<a href="#coalton-classes-hash-class">Hash</a> :K) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :KEY) (<a href="#coalton-classes-eq-class">Eq</a> :VALUE) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :T &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) (<a href="#coalton-classes-eq-class">Eq</a> :C) (<a href="#coalton-classes-eq-class">Eq</a> :D) (<a href="#coalton-classes-eq-class">Eq</a> :E) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) (<a href="#coalton-classes-eq-class">Eq</a> :C) (<a href="#coalton-classes-eq-class">Eq</a> :D) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) (<a href="#coalton-classes-eq-class">Eq</a> :C) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-symbol-symbol-type">Symbol</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-classes-ordering-type">Ordering</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-unit-type">Unit</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-types-lisptype-type">LispType</a></code>

</details>



***

#### <a href="#coalton-classes-foldable-class"><code>Foldable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L263-L266">src</a></sub></sup><a name="coalton-classes-foldable-class"></a>
<code><a href="#coalton-classes-foldable-class">Foldable</a> :CONTAINER</code>


Types which can be folded into a single element.

Methods:
- <code>FOLD :: (:ACCUM * :ELT &rarr; :ACCUM) * :ACCUM * :CONTAINER :ELT &rarr; :ACCUM</code><br/>A left tail-recursive fold.
- <code>FOLDR :: (:ELT * :ACCUM &rarr; :ACCUM) * :ACCUM * :CONTAINER :ELT &rarr; :ACCUM</code><br/>A right non-tail-recursive fold.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-ordtree-ordtree-type">OrdTree</a></code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> :F &rArr; <a href="#coalton-classes-foldable-class">Foldable</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-queue-queue-type">Queue</a></code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-slice-slice-type">Slice</a></code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-vector-vector-type">Vector</a></code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-lisparray-lisparray-type">LispArray</a></code>

</details>



***

#### <a href="#coalton-classes-fromassociationcomprehension-class"><code>FromAssociationComprehension</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L392-L417">src</a></sub></sup><a name="coalton-classes-fromassociationcomprehension-class"></a>
<code><a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> :ASSOCIATION :KEY :VALUE :BUILDER</code>


Types which can be built from association comprehension syntax like `[key => value :for ...]`.

These methods form a streaming builder protocol:

  1. `begin-association-comprehension` creates the initial builder state. It
     receives an advisory size hint when the compiler can cheaply determine
     one.
  2. `adjoin-to-association-comprehension` is called once per emitted key/value
     pair, left to right. Duplicate keys should be kept or discarded
     consistently; the standard association instances keep the first
     occurrence.
  3. `finalize-association-comprehension` converts the builder state into the
     final association.

When no concrete type is specified, the compiler defaults to `Seq (Tuple :key :value)`.

Methods:
- <code>BEGIN-ASSOCIATION-COMPREHENSION :: <a href="#coalton-types-proxy-type">Proxy</a> :ASSOCIATION * <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a> &rarr; :BUILDER</code><br/>Return the initial builder state. SIZE-HINT is an advisory initial capacity hint: `Some n` when the compiler can cheaply approximate a useful starting size, and `None` otherwise.
- <code>ADJOIN-TO-ASSOCIATION-COMPREHENSION :: <a href="#coalton-types-proxy-type">Proxy</a> :ASSOCIATION * :BUILDER * :KEY * :VALUE &rarr; :BUILDER</code><br/>Add one emitted key/value pair to the builder state. Duplicate keys keep the first occurrence.
- <code>FINALIZE-ASSOCIATION-COMPREHENSION :: <a href="#coalton-types-proxy-type">Proxy</a> :ASSOCIATION * :BUILDER &rarr; :ASSOCIATION</code><br/>Convert the finished builder state into the target association.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE) &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>

</details>



***

#### <a href="#coalton-classes-fromcollectioncomprehension-class"><code>FromCollectionComprehension</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L367-L390">src</a></sub></sup><a name="coalton-classes-fromcollectioncomprehension-class"></a>
<code><a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> :COLLECTION :ELEMENT :BUILDER</code>


Types which can be built from collection comprehension syntax like `[expr :for ...]`.

These methods form a streaming builder protocol:

  1. `begin-collection-comprehension` creates the initial builder state. It
     receives an advisory size hint when the compiler can cheaply determine
     one.
  2. `adjoin-to-collection-comprehension` is called once per emitted element,
     left to right.
  3. `finalize-collection-comprehension` converts the builder state into the
     final collection.

When no concrete type is specified, the compiler defaults to `Seq`.

Methods:
- <code>BEGIN-COLLECTION-COMPREHENSION :: <a href="#coalton-types-proxy-type">Proxy</a> :COLLECTION * <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a> &rarr; :BUILDER</code><br/>Return the initial builder state. SIZE-HINT is an advisory initial capacity hint: `Some n` when the compiler can cheaply approximate a useful starting size, and `None` otherwise.
- <code>ADJOIN-TO-COLLECTION-COMPREHENSION :: <a href="#coalton-types-proxy-type">Proxy</a> :COLLECTION * :BUILDER * :ELEMENT &rarr; :BUILDER</code><br/>Add one emitted comprehension element to the builder state.
- <code>FINALIZE-COLLECTION-COMPREHENSION :: <a href="#coalton-types-proxy-type">Proxy</a> :COLLECTION * :BUILDER &rarr; :COLLECTION</code><br/>Convert the finished builder state into the target collection.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT (<a href="#coalton-list-type">List</a> :ELT)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) :T (<a href="#coalton-lisparray-lisparraybuilder-type">LispArrayBuilder</a> :T)</code>

</details>



***

#### <a href="#coalton-classes-fromitemizedassociation-class"><code>FromItemizedAssociation</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L337-L365">src</a></sub></sup><a name="coalton-classes-fromitemizedassociation-class"></a>
<code><a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> :ASSOCIATION :KEY :VALUE :BUILDER</code>


Types which can be built from association builder syntax `[k1 => v1 k2 => v2]`,
where the entries are explicitly and finitely itemized in source.

These methods form an exact indexed builder protocol:

  1. `begin-association-builder` creates the initial builder state. It receives
     the exact number of source entries in the builder syntax.
  2. `adjoin-to-association-builder` is called once per key/value pair, left to
     right, with the zero-based source index of that entry. Duplicate keys
     should be kept or discarded consistently; the standard instances keep the
     first occurrence.
  3. `finalize-association-builder` converts the builder state into the final
     association.

Use this class for converting a finite, explicitly itemized sequence of source
entries into a target association.

When no concrete type is specified, the compiler defaults to `Seq (Tuple :key :value)`.

Methods:
- <code>BEGIN-ASSOCIATION-BUILDER :: <a href="#coalton-types-proxy-type">Proxy</a> :ASSOCIATION * <a href="#coalton-ufix-type">UFix</a> &rarr; :BUILDER</code><br/>Return the initial builder state for a builder with exactly SIZE source entries.
- <code>ADJOIN-TO-ASSOCIATION-BUILDER :: <a href="#coalton-types-proxy-type">Proxy</a> :ASSOCIATION * :BUILDER * <a href="#coalton-ufix-type">UFix</a> * :KEY * :VALUE &rarr; :BUILDER</code><br/>Add one key/value pair to the builder state. INDEX is the zero-based source position of the entry. Duplicate keys keep the first occurrence.
- <code>FINALIZE-ASSOCIATION-BUILDER :: <a href="#coalton-types-proxy-type">Proxy</a> :ASSOCIATION * :BUILDER &rarr; :ASSOCIATION</code><br/>Convert the completed builder state into the final association.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE) &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>

</details>



***

#### <a href="#coalton-classes-fromitemizedcollection-class"><code>FromItemizedCollection</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L309-L335">src</a></sub></sup><a name="coalton-classes-fromitemizedcollection-class"></a>
<code><a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> :COLLECTION :ELEMENT :BUILDER</code>


Types which can be built from collection builder syntax `[a b c]`, where the
elements are explicitly and finitely itemized in source.

These methods form an exact indexed builder protocol:

  1. `begin-collection-builder` creates the initial builder state. It receives
     the exact number of source items in the builder syntax.
  2. `adjoin-to-collection-builder` is called once per element, left to right,
     with the zero-based source index of that element.
  3. `finalize-collection-builder` converts the builder state into the final
     collection.

Use this class for converting a finite, explicitly itemized sequence of source
elements into a target collection.

When no concrete type is specified, the compiler defaults to `Seq`.

Methods:
- <code>BEGIN-COLLECTION-BUILDER :: <a href="#coalton-types-proxy-type">Proxy</a> :COLLECTION * <a href="#coalton-ufix-type">UFix</a> &rarr; :BUILDER</code><br/>Return the initial builder state for a builder with exactly SIZE source elements.
- <code>ADJOIN-TO-COLLECTION-BUILDER :: <a href="#coalton-types-proxy-type">Proxy</a> :COLLECTION * :BUILDER * <a href="#coalton-ufix-type">UFix</a> * :ELEMENT &rarr; :BUILDER</code><br/>Add one evaluated builder element to the builder state. INDEX is the zero-based source position of ITEM.
- <code>FINALIZE-COLLECTION-BUILDER :: <a href="#coalton-types-proxy-type">Proxy</a> :COLLECTION * :BUILDER &rarr; :COLLECTION</code><br/>Convert the completed builder state into the final collection.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT (<a href="#coalton-list-type">List</a> :ELT)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) :T (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>

</details>



***

#### <a href="#coalton-classes-functor-class"><code>Functor</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L227-L229">src</a></sub></sup><a name="coalton-classes-functor-class"></a>
<code><a href="#coalton-classes-functor-class">Functor</a> :F</code>


Types which can map an inner type where the mapping adheres to the identity and composition laws.

Methods:
- <code>MAP :: (:A &rarr; :B) * :F :A &rarr; :F :B</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-seq-seq-type">Seq</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-functor-class">Functor</a> :M) &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :F :A)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-state-st-type">ST</a> :STATE)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-monad-identity-identity-type">Identity</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-queue-queue-type">Queue</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-vector-vector-type">Vector</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-iterator-iterator-type">Iterator</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-cell-cell-type">Cell</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-arrow-type">Arrow</a> :A)</code>

</details>



***

#### <a href="#coalton-classes-hash-class"><code>Hash</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L131-L135">src</a></sub></sup><a name="coalton-classes-hash-class"></a>
<code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-hash-class">Hash</a> :A</code>


Types which can be hashed for storage in hash tables.

The hash function must satisfy the invariant that `(== left right)` implies `(== (hash left) (hash right))`.

Methods:
- <code>HASH :: :A &rarr; <a href="#coalton-classes-hash-type">Hash</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-hash-class">Hash</a> :T &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :T &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>  
Note: Hash only considers the primal component in order to be consistent with Eq.
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :KEY) (<a href="#coalton-classes-hash-class">Hash</a> :VALUE) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :ELT &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :K) (<a href="#coalton-classes-hash-class">Hash</a> :V) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :KEY) (<a href="#coalton-classes-hash-class">Hash</a> :VALUE) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :A &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) (<a href="#coalton-classes-hash-class">Hash</a> :C) (<a href="#coalton-classes-hash-class">Hash</a> :D) (<a href="#coalton-classes-hash-class">Hash</a> :E) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) (<a href="#coalton-classes-hash-class">Hash</a> :C) (<a href="#coalton-classes-hash-class">Hash</a> :D) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) (<a href="#coalton-classes-hash-class">Hash</a> :C) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> <a href="#coalton-classes-hash-type">Hash</a></code>

</details>



***

#### <a href="#coalton-classes-into-class"><code>Into</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L423-L425">src</a></sub></sup><a name="coalton-classes-into-class"></a>
<code><a href="#coalton-classes-into-class">Into</a> :A :B</code>


`Into :a :b` implies *every* element of `:a` can be represented by an element of `:b`. This conversion might not be bijective (i.e., there may be elements in `:b` that don't correspond to any in `:a`).

Methods:
- <code>INTO :: :A &rarr; :B</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code>(<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A) (<a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-xmath-computable-reals-creal-type">CReal</a>) &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A) (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a>)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code>(<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :T) (<a href="#coalton-classes-into-class">Into</a> :T (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)) &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :T) (<a href="#coalton-math-complex-complex-type">Complex</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T))</code>
- <code><a href="#coalton-classes-num-class">Num</a> :T &rArr; <a href="#coalton-classes-into-class">Into</a> :T (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-file-pathname-type">Pathname</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code>(<a href="#coalton-classes-foldable-class">Foldable</a> :F) (<a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A) &rArr; <a href="#coalton-classes-into-class">Into</a> (:F :A) (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-ordmap-mappair-type">MapPair</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-char-type">Char</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> (<a href="#coalton-vector-vector-type">Vector</a> <a href="#coalton-char-type">Char</a>)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-optional-type">Optional</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) (<a href="#coalton-list-type">List</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> :T) (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-optional-type">Optional</a> :B) (<a href="#coalton-classes-result-type">Result</a> <a href="#coalton-unit-type">Unit</a> :B)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-classes-result-type">Result</a> :A :B) (<a href="#coalton-optional-type">Optional</a> :B)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B) (<a href="#coalton-classes-tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-string-type">String</a> &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-cell-cell-type">Cell</a> :A) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-cell-cell-type">Cell</a> :A) :A</code>
- <code><a href="#coalton-classes-into-class">Into</a> :A (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-classes-into-class">Into</a> :A (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-bit-type">Bit</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> :A :A</code>

</details>



***

#### <a href="#coalton-classes-iso-class"><code>Iso</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L427-L428">src</a></sub></sup><a name="coalton-classes-iso-class"></a>
<code>(<a href="#coalton-classes-into-class">Into</a> :A :B) (<a href="#coalton-classes-into-class">Into</a> :B :A) &rArr; <a href="#coalton-classes-iso-class">Iso</a> :A :B</code>


Opting into this marker typeclass implies that the instances for `(Into :a :b)` and `(Into :b :a)` form a bijection.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) (<a href="#coalton-list-type">List</a> :T)</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-classes-result-type">Result</a> <a href="#coalton-unit-type">Unit</a> :A) (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B) (<a href="#coalton-classes-tuple-type">Tuple</a> :B :A)</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> :A :A</code>

</details>



***

#### <a href="#coalton-classes-monad-class"><code>Monad</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L236-L238">src</a></sub></sup><a name="coalton-classes-monad-class"></a>
<code><a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> :M</code>


Types which are monads as defined in Haskell. See https://wiki.haskell.org/Monad for more information.

Methods:
- <code>&gt;&gt;= :: :M :A * (:A &rarr; :M :B) &rarr; :M :B</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-monad-class">Monad</a> :M) &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-state-st-type">ST</a> :STATE)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> <a href="#coalton-monad-identity-identity-type">Identity</a></code>
- <code><a href="#coalton-classes-monad-class">Monad</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-arrow-type">Arrow</a> :A)</code>

</details>



***

#### <a href="#coalton-classes-monadfail-class"><code>MonadFail</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L255-L256">src</a></sub></sup><a name="coalton-classes-monadfail-class"></a>
<code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monadfail-class">MonadFail</a> :M</code>

Methods:
- <code>FAIL :: <a href="#coalton-string-type">String</a> &rarr; :M :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-monadfail-class">MonadFail</a> <a href="#coalton-optional-type">Optional</a></code>

</details>



***

#### <a href="#coalton-classes-monadtransformer-class"><code>MonadTransformer</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L240-L243">src</a></sub></sup><a name="coalton-classes-monadtransformer-class"></a>
<code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> :T</code>


Types which are monads that wrap another monad, allowing you to use - for example - State and Result
together.

Methods:
- <code>LIFT :: <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; :M :A &rarr; :T :M :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> <a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a></code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S)</code>

</details>



***

#### <a href="#coalton-classes-monoid-class"><code>Monoid</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L223-L225">src</a></sub></sup><a name="coalton-classes-monoid-class"></a>
<code><a href="#coalton-classes-semigroup-class">Semigroup</a> :A &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> :A</code>


Types with an associative binary operation and identity defined.

Methods:
- <code>MEMPTY :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-monoid-class">Monoid</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> :B &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> :A &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> <a href="#coalton-classes-hash-type">Hash</a></code>

</details>



***

#### <a href="#coalton-classes-num-class"><code>Num</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L101-L106">src</a></sub></sup><a name="coalton-classes-num-class"></a>
<code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-num-class">Num</a> :A</code>


Types which have numeric operations defined.

Methods:
- <code>+ :: :A * :A &rarr; :A</code>
- <code>- :: :A * :A &rarr; :A</code>
- <code>* :: :A * :A &rarr; :A</code>
- <code>FROMINT :: <a href="#coalton-integer-type">Integer</a> &rarr; :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> :T &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-num-class">Num</a> :T &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> :A &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-integer-type">Integer</a></code>

</details>



***

#### <a href="#coalton-classes-ord-class"><code>Ord</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L169-L173">src</a></sub></sup><a name="coalton-classes-ord-class"></a>
<code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-ord-class">Ord</a> :A</code>


Types whose values can be ordered. Requires `Eq`.

Methods:
- <code>&lt;=&gt; :: :A * :A &rarr; <a href="#coalton-classes-ordering-type">Ordering</a></code><br/>Given two objects, return their comparison (as an `Ordering` object).
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :T &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :T &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>  
Note: Ord only compares the primal component.
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-ordmap-mappair-type">MapPair</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-list-type">List</a> :ELT)</code>
- <code>(<a href="#coalton-classes-ord-class">Ord</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :B) &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code>(<a href="#coalton-classes-ord-class">Ord</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :B) &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-boolean-type">Boolean</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-classes-ordering-type">Ordering</a></code>

</details>



***

#### <a href="#coalton-classes-semigroup-class"><code>Semigroup</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L219-L221">src</a></sub></sup><a name="coalton-classes-semigroup-class"></a>
<code><a href="#coalton-classes-semigroup-class">Semigroup</a> :A</code>


Types with an associative binary operation defined.

Methods:
- <code>&lt;&gt; :: :A * :A &rarr; :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> :B &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-classes-result-type">Result</a> :A :B)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> :A &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> :A &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-cell-cell-type">Cell</a> :A)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> <a href="#coalton-classes-hash-type">Hash</a></code>

</details>



***

#### <a href="#coalton-classes-signalable-class"><code>Signalable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L59-L61">src</a></sub></sup><a name="coalton-classes-signalable-class"></a>
<code><a href="#coalton-classes-signalable-class">Signalable</a> :A</code>


Signals errors or warnings by calling their respective lisp conditions.

Methods:
- <code>ERROR :: :A &rarr; :B</code><br/>Signal an error with a type-specific error string.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-signalable-class">Signalable</a> <a href="#coalton-file-fileerror-type">FileError</a></code>
- <code><a href="#coalton-classes-signalable-class">Signalable</a> <a href="#coalton-system-lispcondition-type">LispCondition</a></code>
- <code><a href="#coalton-classes-signalable-class">Signalable</a> <a href="#coalton-string-type">String</a></code>

</details>



***

#### <a href="#coalton-classes-traversable-class"><code>Traversable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L288-L289">src</a></sub></sup><a name="coalton-classes-traversable-class"></a>
<code><a href="#coalton-classes-traversable-class">Traversable</a> :T</code>

Methods:
- <code>TRAVERSE :: <a href="#coalton-classes-applicative-class">Applicative</a> :F &rArr; (:A &rarr; :F :B) * :T :A &rarr; :F (:T :B)</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-classes-traversable-class">Traversable</a> :M) (<a href="#coalton-classes-traversable-class">Traversable</a> :F) &rArr; <a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> :F &rArr; <a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :F :A)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> :T &rArr; <a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-monad-free-free-type">Free</a> :T)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> <a href="#coalton-list-type">List</a></code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A)</code>

</details>



***

#### <a href="#coalton-classes-tryinto-class"><code>TryInto</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L433-L435">src</a></sub></sup><a name="coalton-classes-tryinto-class"></a>
<code><a href="#coalton-classes-tryinto-class">TryInto</a> :A :B</code>


`TRY-INTO` implies some elements of `:a` can be represented exactly by an element of `:b`, but sometimes not. Failed conversions return `None`.

Methods:
- <code>TRYINTO :: :A &rarr; <a href="#coalton-optional-type">Optional</a> :B</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-string-type">String</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-fraction-type">Fraction</a></code>

</details>



***

#### <a href="#coalton-classes-unwrappable-class"><code>Unwrappable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L443-L459">src</a></sub></sup><a name="coalton-classes-unwrappable-class"></a>
<code><a href="#coalton-classes-unwrappable-class">Unwrappable</a> :CONTAINER</code>


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
- <code>UNWRAP-OR-ELSE :: (:ELT &rarr; :RESULT) * (Void &rarr; :RESULT) * :CONTAINER :ELT &rarr; :RESULT</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-unwrappable-class">Unwrappable</a> <a href="#coalton-optional-type">Optional</a></code>
- <code><a href="#coalton-classes-unwrappable-class">Unwrappable</a> (<a href="#coalton-classes-result-type">Result</a> :A)</code>

</details>



***

### Values

#### <a href="#coalton-classes-<-value"><code>(&lt; X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L181-L183">src</a></sub></sup><a name="coalton-classes-<-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` less than `y`?



***

#### <a href="#coalton-classes-<=-value"><code>(&lt;= X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L194-L199">src</a></sub></sup><a name="coalton-classes-<=-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` less than or equal to `y`?



***

#### <a href="#coalton-classes->-value"><code>(&gt; X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L176-L178">src</a></sub></sup><a name="coalton-classes->-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` greater than `y`?



***

#### <a href="#coalton-classes->=-value"><code>(&gt;= X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L186-L191">src</a></sub></sup><a name="coalton-classes->=-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` greater than or equal to `y`?



***

#### <a href="#coalton-classes->>-value"><code>(&gt;&gt; A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L246-L248">src</a></sub></sup><a name="coalton-classes->>-value"></a>
<code>&forall; :M :A :B. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; :M :A * :M :B &rarr; :M :B</code>

Equivalent to `(>>= a (fn (_) b))`.



***

#### <a href="#coalton-classes-as-optional-value"><code>(AS-OPTIONAL CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L510-L514">src</a></sub></sup><a name="coalton-classes-as-optional-value"></a>
<code>&forall; :CONTAINER :ELT. <a href="#coalton-classes-unwrappable-class">Unwrappable</a> :CONTAINER &rArr; :CONTAINER :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

Convert any Unwrappable container into an `Optional`, constructing Some on a successful unwrap and None on a failed unwrap.



***

#### <a href="#coalton-classes-default?-value"><code>(DEFAULT? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L534-L536">src</a></sub></sup><a name="coalton-classes-default?-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :A) &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` the default item of its type?



***

#### <a href="#coalton-classes-defaulting-unwrap-value"><code>(DEFAULTING-UNWRAP CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L527-L531">src</a></sub></sup><a name="coalton-classes-defaulting-unwrap-value"></a>
<code>&forall; :CONTAINER :ELEMENT. (<a href="#coalton-classes-unwrappable-class">Unwrappable</a> :CONTAINER) (<a href="#coalton-classes-default-class">Default</a> :ELEMENT) &rArr; :CONTAINER :ELEMENT &rarr; :ELEMENT</code>

Unwrap an `unwrappable`, returning `(default)` of the wrapped type on failure.



***

#### <a href="#coalton-classes-expect-value"><code>(EXPECT REASON CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L477-L481">src</a></sub></sup><a name="coalton-classes-expect-value"></a>
<code>&forall; :CONTAINER :ELEMENT. <a href="#coalton-classes-unwrappable-class">Unwrappable</a> :CONTAINER &rArr; <a href="#coalton-string-type">String</a> * :CONTAINER :ELEMENT &rarr; :ELEMENT</code>

Unwrap `container`, signaling an error with the description `reason` on failure.



***

#### <a href="#coalton-classes-join-value"><code>(JOIN M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L251-L253">src</a></sub></sup><a name="coalton-classes-join-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; :M (:M :A) &rarr; :M :A</code>

Equivalent to `(>>= m id)`.



***

#### <a href="#coalton-classes-map-fst-value"><code>(MAP-FST F B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L300-L302">src</a></sub></sup><a name="coalton-classes-map-fst-value"></a>
<code>&forall; :A :B :F :C. <a href="#coalton-classes-bifunctor-class">Bifunctor</a> :F &rArr; (:A &rarr; :B) * :F :A :C &rarr; :F :B :C</code>

Map over the first argument of a `Bifunctor`.



***

#### <a href="#coalton-classes-map-snd-value"><code>(MAP-SND F B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L305-L307">src</a></sub></sup><a name="coalton-classes-map-snd-value"></a>
<code>&forall; :B :C :F :A. <a href="#coalton-classes-bifunctor-class">Bifunctor</a> :F &rArr; (:B &rarr; :C) * :F :A :B &rarr; :F :A :C</code>

Map over the second argument of a `Bifunctor`.



***

#### <a href="#coalton-classes-max-value"><code>(MAX X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L202-L206">src</a></sub></sup><a name="coalton-classes-max-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; :A * :A &rarr; :A</code>

Returns the greater element of `x` and `y`.



***

#### <a href="#coalton-classes-mcommute?-value"><code>(MCOMMUTE? A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L284-L286">src</a></sub></sup><a name="coalton-classes-mcommute?-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-semigroup-class">Semigroup</a> :A) &rArr; :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Does `a <> b` equal `b <> a`?



***

#### <a href="#coalton-classes-mconcat-value"><code>(MCONCAT A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L274-L276">src</a></sub></sup><a name="coalton-classes-mconcat-value"></a>
<code>&forall; :F :A. (<a href="#coalton-classes-foldable-class">Foldable</a> :F) (<a href="#coalton-classes-monoid-class">Monoid</a> :A) &rArr; :F :A &rarr; :A</code>

Fold a container of monoids into a single element.



***

#### <a href="#coalton-classes-mconcatmap-value"><code>(MCONCATMAP F A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L279-L281">src</a></sub></sup><a name="coalton-classes-mconcatmap-value"></a>
<code>&forall; :B :A :F. (<a href="#coalton-classes-foldable-class">Foldable</a> :F) (<a href="#coalton-classes-monoid-class">Monoid</a> :A) &rArr; (:B &rarr; :A) * :F :B &rarr; :A</code>

Map a container to a container of monoids, and then fold that container into a single element.



***

#### <a href="#coalton-classes-mempty?-value"><code>(MEMPTY? A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L269-L271">src</a></sub></sup><a name="coalton-classes-mempty?-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-monoid-class">Monoid</a> :A) &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Does `a` equal `(the Type mempty)`?



***

#### <a href="#coalton-classes-min-value"><code>(MIN X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L209-L213">src</a></sub></sup><a name="coalton-classes-min-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; :A * :A &rarr; :A</code>

Returns the lesser element of `x` and `y`.



***

#### <a href="#coalton-classes-sequence-value"><code>(SEQUENCE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L292-L293">src</a></sub></sup><a name="coalton-classes-sequence-value"></a>
<code>&forall; :T :F :B. (<a href="#coalton-classes-traversable-class">Traversable</a> :T) (<a href="#coalton-classes-applicative-class">Applicative</a> :F) &rArr; :T (:F :B) &rarr; :F (:T :B)</code>


***

#### <a href="#coalton-classes-unwrap-value"><code>(UNWRAP CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L486-L492">src</a></sub></sup><a name="coalton-classes-unwrap-value"></a>
<code>&forall; :CONTAINER :ELEMENT. <a href="#coalton-classes-unwrappable-class">Unwrappable</a> :CONTAINER &rArr; :CONTAINER :ELEMENT &rarr; :ELEMENT</code>

Unwrap `container`, signaling an error on failure.



***

#### <a href="#coalton-classes-unwrap-into-value"><code>(UNWRAP-INTO X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L495-L497">src</a></sub></sup><a name="coalton-classes-unwrap-into-value"></a>
<code>&forall; :A :B. <a href="#coalton-classes-tryinto-class">TryInto</a> :A :B &rArr; :A &rarr; :B</code>

Same as `tryInto` followed by `unwrap`.



***

#### <a href="#coalton-classes-with-default-value"><code>(WITH-DEFAULT DEFAULT CONTAINER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/classes.ct#L503-L507">src</a></sub></sup><a name="coalton-classes-with-default-value"></a>
<code>&forall; :ELEMENT :CONTAINER. <a href="#coalton-classes-unwrappable-class">Unwrappable</a> :CONTAINER &rArr; :ELEMENT * :CONTAINER :ELEMENT &rarr; :ELEMENT</code>

Unwrap `container`, returning `default` on failure.



***

# Package `COALTON/EXPERIMENTAL/DO-CONTROL-CORE`<a name="coalton-experimental-do-control-core-package"></a>

### Values

#### <a href="#coalton-experimental-do-control-core-flatmap-success-value"><code>(FLATMAP-SUCCESS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L204-L204">src</a></sub></sup><a name="coalton-experimental-do-control-core-flatmap-success-value"></a>
<code>&forall; :Y :A :M :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :Y :A * (:A &rarr; :M (:Y :B)) &rarr; :M (:Y :B)</code>


***

#### <a href="#coalton-experimental-do-control-core-flatmap-successm-value"><code>(FLATMAP-SUCCESSM MVAL? F-&gt;MVAL?B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L208-L213">src</a></sub></sup><a name="coalton-experimental-do-control-core-flatmap-successm-value"></a>
<code>&forall; :M :Y :A :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :M (:Y :A) * (:A &rarr; :M (:Y :B)) &rarr; :M (:Y :B)</code>

Evaluate MVAL?, and if the result yields a value, then flatmap F->MVAL?B
over the value.



***

#### <a href="#coalton-experimental-do-control-core-if*-value"><code>(IF* VAL? M-TRUE M-FALSE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L152-L157">src</a></sub></sup><a name="coalton-experimental-do-control-core-if*-value"></a>
<code>&forall; :T :M :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> :T) &rArr; :T * :M :B * :M :B &rarr; :M :B</code>

Choose between M-TRUE and M-FALSE based on VAL?. If VAL? is true-like, run M-TRUE,
otherwise run M-FALSE.



***

#### <a href="#coalton-experimental-do-control-core-if-val-value"><code>(IF-VAL VAL? F-MVAL M-NONE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L161-L167">src</a></sub></sup><a name="coalton-experimental-do-control-core-if-val-value"></a>
<code>&forall; :Y :A :M :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :Y :A * (:A &rarr; :M :B) * :M :B &rarr; :M :B</code>

If VAL? yields a value, apply F-MVAL to it. Otherwise, run M-NONE.



***

#### <a href="#coalton-experimental-do-control-core-if-valm-value"><code>(IF-VALM MVAL? F-MVAL M-NONE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L181-L186">src</a></sub></sup><a name="coalton-experimental-do-control-core-if-valm-value"></a>
<code>&forall; :M :Y :A :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :M (:Y :A) * (:A &rarr; :M :B) * :M :B &rarr; :M :B</code>

Evaluate MVAL? and dispatch to F-MVAL if the result yields a value.
Otherwise evaluate M-NONE.



***

#### <a href="#coalton-experimental-do-control-core-if-val_-value"><code>(IF-VAL_ VAL? F-MVAL M-NONE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L171-L177">src</a></sub></sup><a name="coalton-experimental-do-control-core-if-val_-value"></a>
<code>&forall; :Y :A :M :B :C. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :Y :A * (:A &rarr; :M :B) * :M :C &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Like if-val, but discards the branch result and returns Unit.



***

#### <a href="#coalton-experimental-do-control-core-map-success-value"><code>(MAP-SUCCESS VAL? F-&gt;MB)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L190-L192">src</a></sub></sup><a name="coalton-experimental-do-control-core-map-success-value"></a>
<code>&forall; :Y :A :M :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :Y :A * (:A &rarr; :M :B) &rarr; :M (:Y :B)</code>

Map F->MB over the successful/available value(s) of VAL? within the monad.



***

#### <a href="#coalton-experimental-do-control-core-map-successm-value"><code>(MAP-SUCCESSM MVAL? F-&gt;MB)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L196-L200">src</a></sub></sup><a name="coalton-experimental-do-control-core-map-successm-value"></a>
<code>&forall; :M :Y :A :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :M (:Y :A) * (:A &rarr; :M :B) &rarr; :M (:Y :B)</code>

Evaluate MVAL? and map F->MB over the successful value(s) from inside the monad.



***

#### <a href="#coalton-experimental-do-control-core-when-val-value"><code>(WHEN-VAL VAL? F-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L132-L140">src</a></sub></sup><a name="coalton-experimental-do-control-core-when-val-value"></a>
<code>&forall; :Y :A :M :Z. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :Y :A * (:A &rarr; :M :Z) &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

If VAL? yields a value, apply F->M to it. If not, do nothing. Always returns Unit.



***

#### <a href="#coalton-experimental-do-control-core-when-valm-value"><code>(WHEN-VALM MVAL? F-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L144-L148">src</a></sub></sup><a name="coalton-experimental-do-control-core-when-valm-value"></a>
<code>&forall; :M :Y :A :Z. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :M (:Y :A) * (:A &rarr; :M :Z) &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Evaluate MVAL?, and if it yields, run F->M on the value. Otherwise, do nothing.



***

#### <a href="#coalton-experimental-do-control-core-whenm-value"><code>(WHENM MVAL MOP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L124-L128">src</a></sub></sup><a name="coalton-experimental-do-control-core-whenm-value"></a>
<code>&forall; :M :T :Z. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> :T) &rArr; :M :T * :M :Z &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Evaluate MVAL, and if returns a true-like value, run MOP. Otherwise do nothing.



***

#### <a href="#coalton-experimental-do-control-core-when_-value"><code>(WHEN_ VAL M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-core.ct#L116-L120">src</a></sub></sup><a name="coalton-experimental-do-control-core-when_-value"></a>
<code>&forall; :T :M :Z. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> :T) &rArr; :T * :M :Z &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Run the monadic operation M when the value VAL is true-like. Otherwise do nothing.



***

# Package `COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS`<a name="coalton-experimental-do-control-loops-package"></a>

### Values

#### <a href="#coalton-experimental-do-control-loops-collect-value"><code>(COLLECT INTO-ITR FA-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.ct#L97-L107">src</a></sub></sup><a name="coalton-experimental-do-control-loops-collect-value"></a>
<code>&forall; :I :A :M :Z. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-iterator-intoiterator-class">IntoIterator</a> :I :A) &rArr; :I * (:A &rarr; :M :Z) &rarr; :M (<a href="#coalton-list-type">List</a> :Z)</code>

Apply FA->M to each element produced by INTO-ITR and run the resulting monadic action.
Collect the results.



***

#### <a href="#coalton-experimental-do-control-loops-collect-val-value"><code>(COLLECT-VAL M-OPERATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.ct#L84-L94">src</a></sub></sup><a name="coalton-experimental-do-control-loops-collect-val-value"></a>
<code>&forall; :M :Y :A. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :M (:Y :A) &rarr; :M (<a href="#coalton-list-type">List</a> :A)</code>

Repeatedly run M-OPERATION, collecting each yielded value into a list until
no value is yielded.



***

#### <a href="#coalton-experimental-do-control-loops-foreach-value"><code>(FOREACH INTO-ITR FA-&gt;M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.ct#L110-L119">src</a></sub></sup><a name="coalton-experimental-do-control-loops-foreach-value"></a>
<code>&forall; :I :A :M :Z. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-iterator-intoiterator-class">IntoIterator</a> :I :A) &rArr; :I * (:A &rarr; :M :Z) &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Apply FA->M to each element produced by INTO-ITR and run the resulting monadic action.
Discards the return values and returns Unit.



***

#### <a href="#coalton-experimental-do-control-loops-loop-do-while-value"><code>(LOOP-DO-WHILE M-TERM? BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.ct#L60-L69">src</a></sub></sup><a name="coalton-experimental-do-control-loops-loop-do-while-value"></a>
<code>&forall; :M :T :A. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> :T) &rArr; :M :T * :M :A &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Before each iteration, evaluate M-TERM?. If it returns a true-like value, run BODY.
Otherwise, stop.



***

#### <a href="#coalton-experimental-do-control-loops-loop-times-value"><code>(LOOP-TIMES N M-OPERATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.ct#L72-L80">src</a></sub></sup><a name="coalton-experimental-do-control-loops-loop-times-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-ufix-type">UFix</a> * (<a href="#coalton-ufix-type">UFix</a> &rarr; :M :A) &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Repeat M-OPERATION N times. Passes the current index (starting at 0) to
M-OPERATION. Returns Unit.



***

#### <a href="#coalton-experimental-do-control-loops-loop-while-value"><code>(LOOP-WHILE M-OPERATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.ct#L37-L43">src</a></sub></sup><a name="coalton-experimental-do-control-loops-loop-while-value"></a>
<code>&forall; :M :T. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> :T) &rArr; :M :T &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Run M-OPERATION. If it returns a true-like value, repeat. Otherwise stop.



***

#### <a href="#coalton-experimental-do-control-loops-loop-while-valm-value"><code>(LOOP-WHILE-VALM M-OPERATION F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops.ct#L46-L57">src</a></sub></sup><a name="coalton-experimental-do-control-loops-loop-while-valm-value"></a>
<code>&forall; :M :Y :A :B. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; :M (:Y :A) * (:A &rarr; :M :B) &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

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

# Package `COALTON/EXPERIMENTAL/DO-CONTROL-LOOPS-ADV`<a name="coalton-experimental-do-control-loops-adv-package"></a>

### Types

#### <a href="#coalton-experimental-do-control-loops-adv-loopt-type"><code>LoopT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L81-L82">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-loopt-type"></a>
- <code>(LoopT :A (<a href="#coalton-experimental-do-control-loops-adv-step-type">Step</a> :B))</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :|0| :|1|)</code>

</details>



***

### Values

#### <a href="#coalton-experimental-do-control-loops-adv-collect-value"><code>(COLLECT BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L237-L247">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-collect-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A &rarr; :M (<a href="#coalton-list-type">List</a> :A)</code>

Run BODY in a loop, collecting each value it produces into a list in encounter order.
Stops when BODY breaks. Continues skip the rest of the iteration. Returns the collected list.



***

#### <a href="#coalton-experimental-do-control-loops-adv-collect-val-value"><code>(COLLECT-VAL BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L250-L265">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-collect-val-value"></a>
<code>&forall; :M :Y :A. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-yielder-class">Yielder</a> :Y) &rArr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M (:Y :A) &rarr; :M (<a href="#coalton-list-type">List</a> :A)</code>

Run BODY in a loop, adding each available value it yields to a list.
Stops when BODY yields no value or breaks. Continue skips the rest of the iteration.
Returns the collected list.



***

#### <a href="#coalton-experimental-do-control-loops-adv-foreach-value"><code>(FOREACH LST FA-&gt;LPT-M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L268-L279">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-foreach-value"></a>
<code>&forall; :A :M :Z. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-list-type">List</a> :A * (:A &rarr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :Z) &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

For each element of LST, run FA->LPT-M on it. Break stops the iteration.
Continue skips to the next element. Discards return values and returns Unit.



***

#### <a href="#coalton-experimental-do-control-loops-adv-loop-do-while-value"><code>(LOOP-DO-WHILE M-TERM? BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L209-L220">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-loop-do-while-value"></a>
<code>&forall; :M :T :A. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> :T) &rArr; :M :T * <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Before each iteration, evaluate M-TERM?. If it returns a true-like value, run BODY.
Otherwise, stop.



***

#### <a href="#coalton-experimental-do-control-loops-adv-loop-times-value"><code>(LOOP-TIMES N BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L223-L234">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-loop-times-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-ufix-type">UFix</a> * (<a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A) &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Repeat BODY N times. Passes the current index (starting at 0) to BODY.
Returns Unit.



***

#### <a href="#coalton-experimental-do-control-loops-adv-loop-while-value"><code>(LOOP-WHILE BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L196-L206">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-loop-while-value"></a>
<code>&forall; :M :T. (<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-experimental-do-control-core-truthlike-class">Truthlike</a> :T) &rArr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :T &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Run BODY. If it returns a true-like value, repeat. Otherwise stop.



***

#### <a href="#coalton-experimental-do-control-loops-adv-loop_-value"><code>(LOOP_ BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L187-L193">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-loop_-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Run BODY forever, until it signals a break. Any produced values are ignored. Returns Unit.



***

#### <a href="#coalton-experimental-do-control-loops-adv-once-value"><code>(ONCE LP-M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L283-L288">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-once-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A &rarr; :M <a href="#coalton-unit-type">Unit</a></code>

Run an operation exactly once. Continue or break will both immediately end
execution in the operation. Returns Unit.



***

#### <a href="#coalton-experimental-do-control-loops-adv-unwrap-loop-value"><code>(UNWRAP-LOOP (LOOPT M-STP))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L86-L89">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-unwrap-loop-value"></a>
<code>&forall; :M :A. <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A &rarr; :M (<a href="#coalton-experimental-do-control-loops-adv-step-type">Step</a> :A)</code>

Advance a LoopT computation by one step, returning whether it asked to continue,
break, or produced a value.



***

#### <a href="#coalton-experimental-do-control-loops-adv-break-loop-value"><code>BREAK-LOOP</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L93-L95">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-break-loop-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A</code>

Signal that the loop should terminate immediately.



***

#### <a href="#coalton-experimental-do-control-loops-adv-continue-loop-value"><code>CONTINUE-LOOP</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/experimental/do-control-loops-adv.ct#L99-L101">src</a></sub></sup><a name="coalton-experimental-do-control-loops-adv-continue-loop-value"></a>
<code>&forall; :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M :A</code>

Signal that the current iteration should be skipped and the loop should continue.



***

# Package `COALTON/EXPERIMENTAL/LOOPS`<a name="coalton-experimental-loops-package"></a>


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

#### <a href="#coalton-experimental-loops-doiter-macro"><code>DOITER ((VARIABLE ITERABLE) &amp;BODY BODY)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-experimental-loops-doiter-macro"></a>

Perform `body` with `variable` bound to every element produced by `iterable`.



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

# Package `COALTON/FILE`<a name="coalton-file-package"></a>


This is Coalton's library for directory utilities and file IO.

Most functions return outputs of type `(Result FileError :a)`, ensuring that errors can be assessed and handled.

File IO is handled using keyword options, for instance:

```
(with-open-file file
  (fn (stream)
    (write-string stream "Hello World!")
    (read-file-to-vector stream))
  :direction Bidirectional
  :if-exists EError)
```

`Input`, `Output`, and `Bidirectional` select the stream direction. `IfExists`
controls what happens when an output or bidirectional stream opens an existing
file.

Common Lisp makes a distinction between file and directory paths. Directory
paths are always terminated with a trailing slash, file paths must never have a
trailing slash.

### Types

#### <a href="#coalton-file-fileerror-type"><code>FileError</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L154-L159">src</a></sub></sup><a name="coalton-file-fileerror-type"></a>
- <code>(PathError <a href="#coalton-string-type">String</a> <a href="#coalton-file-pathname-type">Pathname</a>)</code>
- <code>(LispError <a href="#coalton-system-lispcondition-type">LispCondition</a>)</code>
- <code>(FileError <a href="#coalton-string-type">String</a>)</code>
- <code>EOF</code> 

Errors for file functions.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-fileerror-type">FileError</a></code>
- <code><a href="#coalton-classes-signalable-class">Signalable</a> <a href="#coalton-file-fileerror-type">FileError</a></code>

</details>



***

#### <a href="#coalton-file-filestream-type"><code>FileStream</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L365-L366">src</a></sub></sup><a name="coalton-file-filestream-type"></a>

Represents a file stream, using `cl:file-stream`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-file-filestream-type">FileStream</a> :|0|)</code>

</details>



***

#### <a href="#coalton-file-ifexists-type"><code>IfExists</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L369-L374">src</a></sub></sup><a name="coalton-file-ifexists-type"></a>
- <code>Supersede</code> 
- <code>Overwrite</code> 
- <code>EError</code> 
- <code>Append</code> 

Possible options for opening a stream when the file exists.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-ifexists-type">IfExists</a></code>

</details>



***

#### <a href="#coalton-file-opendirection-type"><code>OpenDirection</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L377-L381">src</a></sub></sup><a name="coalton-file-opendirection-type"></a>
- <code>Bidirectional</code> 
- <code>Output</code> 
- <code>Input</code> 

Possible directions for opening a stream.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-opendirection-type">OpenDirection</a></code>

</details>



***

#### <a href="#coalton-file-pathname-type"><code>Pathname</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L125-L126">src</a></sub></sup><a name="coalton-file-pathname-type"></a>

Pathname object. Equivalent to `cl:pathname`

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-file-pathname-type">Pathname</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> <a href="#coalton-file-pathname-type">Pathname</a></code>

</details>



***

### Classes

#### <a href="#coalton-file-file-class"><code>File</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L527-L537">src</a></sub></sup><a name="coalton-file-file-class"></a>
<code><a href="#coalton-file-file-class">File</a> :A</code>


A class of types which are able to be written to or read from a file.

Methods:
- <code>OPEN :: <a href="#coalton-classes-into-class">Into</a> :PATH <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :PATH &key (:direction <a href="#coalton-file-opendirection-type">OpenDirection</a>) (:if-exists <a href="#coalton-file-ifexists-type">IfExists</a>) &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> (<a href="#coalton-file-filestream-type">FileStream</a> :A)</code>
- <code>READ :: <a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :A</code>
- <code>WRITE :: <a href="#coalton-file-filestream-type">FileStream</a> :A * :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-file-file-class">File</a> <a href="#coalton-char-type">Char</a></code>

</details>



***

### Values

#### <a href="#coalton-file-abort-value"><code>(ABORT STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L448-L451">src</a></sub></sup><a name="coalton-file-abort-value"></a>
<code>&forall; :A :B. <a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :B</code>

Closes a FileStream and aborts all operations..



***

#### <a href="#coalton-file-append-to-file!-value"><code>(APPEND-TO-FILE! PATH DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L738-L744">src</a></sub></sup><a name="coalton-file-append-to-file!-value"></a>
<code>&forall; :P :A. (<a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A) (<a href="#coalton-classes-into-class">Into</a> :P <a href="#coalton-file-pathname-type">Pathname</a>) (<a href="#coalton-file-file-class">File</a> :A) &rArr; :P * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Opens and appends a file with data of type :a.



***

#### <a href="#coalton-file-close-value"><code>(CLOSE STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L442-L445">src</a></sub></sup><a name="coalton-file-close-value"></a>
<code>&forall; :A :B. <a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :B</code>

Closes a FileStream.



***

#### <a href="#coalton-file-copy!-value"><code>(COPY! INPUT OUTPUT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L340-L348">src</a></sub></sup><a name="coalton-file-copy!-value"></a>
<code>&forall; :A :B. (<a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a>) (<a href="#coalton-classes-into-class">Into</a> :B <a href="#coalton-file-pathname-type">Pathname</a>) &rArr; :A * :B &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Copies a file to a new location.



***

#### <a href="#coalton-file-create-directory!-value"><code>(CREATE-DIRECTORY! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L274-L279">src</a></sub></sup><a name="coalton-file-create-directory!-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-file-pathname-type">Pathname</a></code>

This is equivalent to `mkdir -p`. Creates a directory and its parents. The pathname must be a valid directory pathname.



***

#### <a href="#coalton-file-create-temp-directory!-value"><code>(CREATE-TEMP-DIRECTORY!)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L690-L692">src</a></sub></sup><a name="coalton-file-create-temp-directory!-value"></a>
<code>Void &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-file-pathname-type">Pathname</a></code>

This configures a default temporary directory for use.



***

#### <a href="#coalton-file-create-temp-file!-value"><code>(CREATE-TEMP-FILE!)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L695-L701">src</a></sub></sup><a name="coalton-file-create-temp-file!-value"></a>
<code>&key (:extension <a href="#coalton-string-type">String</a>) &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-file-pathname-type">Pathname</a></code>

Create a temporary file path, optionally ending in EXTENSION.



***

#### <a href="#coalton-file-delete-file!-value"><code>(DELETE-FILE! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L351-L356">src</a></sub></sup><a name="coalton-file-delete-file!-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Deletes a given file if the file exists.



***

#### <a href="#coalton-file-directory-exists?-value"><code>(DIRECTORY-EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L226-L232">src</a></sub></sup><a name="coalton-file-directory-exists?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-boolean-type">Boolean</a></code>

Returns True if a pathname names a directory that exists.



***

#### <a href="#coalton-file-directory-files-value"><code>(DIRECTORY-FILES PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L284-L289">src</a></sub></sup><a name="coalton-file-directory-files-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-file-pathname-type">Pathname</a>)</code>

Returns all files within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <a href="#coalton-file-directory-pathname?-value"><code>(DIRECTORY-PATHNAME? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L193-L197">src</a></sub></sup><a name="coalton-file-directory-pathname?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns True if a pathname has no file component.



***

#### <a href="#coalton-file-empty?-value"><code>(EMPTY? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L304-L309">src</a></sub></sup><a name="coalton-file-empty?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-boolean-type">Boolean</a></code>

Checks whether a directory is empty.



***

#### <a href="#coalton-file-exists?-value"><code>(EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L207-L211">src</a></sub></sup><a name="coalton-file-exists?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-boolean-type">Boolean</a></code>

Returns whether a file or directory exists.



***

#### <a href="#coalton-file-file-exists?-value"><code>(FILE-EXISTS? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L235-L243">src</a></sub></sup><a name="coalton-file-file-exists?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-boolean-type">Boolean</a></code>

Returns True if a pathname names a file that exists.



***

#### <a href="#coalton-file-file-pathname?-value"><code>(FILE-PATHNAME? PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L200-L204">src</a></sub></sup><a name="coalton-file-file-pathname?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns True if a pathname has a file component.



***

#### <a href="#coalton-file-file-position-value"><code>(FILE-POSITION STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L499-L502">src</a></sub></sup><a name="coalton-file-file-position-value"></a>
<code>&forall; :A. <a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-ufix-type">UFix</a></code>

Finds the file-position of a file stream.



***

#### <a href="#coalton-file-flush-value"><code>(FLUSH STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L493-L496">src</a></sub></sup><a name="coalton-file-flush-value"></a>
<code>&forall; :A :B. <a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :B</code>

Blocks until `stream` has been flushed. Calls `cl:finish-output`.



***

#### <a href="#coalton-file-merge-value"><code>(MERGE PATH1 PATH2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L252-L259">src</a></sub></sup><a name="coalton-file-merge-value"></a>
<code>&forall; :A :B. (<a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a>) (<a href="#coalton-classes-into-class">Into</a> :B <a href="#coalton-file-pathname-type">Pathname</a>) &rArr; :A * :B &rarr; <a href="#coalton-file-pathname-type">Pathname</a></code>

Merges two pathnames together. The directory pathname should be the first argument.



***

#### <a href="#coalton-file-read-char-value"><code>(READ-CHAR STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L454-L459">src</a></sub></sup><a name="coalton-file-read-char-value"></a>
<code><a href="#coalton-file-filestream-type">FileStream</a> <a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-char-type">Char</a></code>

Reads a character from an FileStream.



***

#### <a href="#coalton-file-read-file-lines-value"><code>(READ-FILE-LINES PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L770-L774">src</a></sub></sup><a name="coalton-file-read-file-lines-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-string-type">String</a>)</code>

Reads a file into lines, given a pathname or string.



***

#### <a href="#coalton-file-read-file-to-string-value"><code>(READ-FILE-TO-STRING PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L763-L767">src</a></sub></sup><a name="coalton-file-read-file-to-string-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-string-type">String</a></code>

Reads a file into a string, given a pathname string.



***

#### <a href="#coalton-file-read-file-to-vector-value"><code>(READ-FILE-TO-VECTOR STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L616-L625">src</a></sub></sup><a name="coalton-file-read-file-to-vector-value"></a>
<code>&forall; :A. <a href="#coalton-file-file-class">File</a> :A &rArr; <a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>

Reads a file into a vector of type `:a`.



***

#### <a href="#coalton-file-read-line-value"><code>(READ-LINE STREAM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L462-L467">src</a></sub></sup><a name="coalton-file-read-line-value"></a>
<code><a href="#coalton-file-filestream-type">FileStream</a> <a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-string-type">String</a></code>

Reads a line of characters from a FileStream.



***

#### <a href="#coalton-file-read-vector-value"><code>(READ-VECTOR STREAM CHUNK-SIZE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L602-L610">src</a></sub></sup><a name="coalton-file-read-vector-value"></a>
<code>&forall; :A. <a href="#coalton-file-file-class">File</a> :A &rArr; <a href="#coalton-file-filestream-type">FileStream</a> :A * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>

Reads a chunk of a file into a vector of type `:a`.



***

#### <a href="#coalton-file-remove-directory!-value"><code>(REMOVE-DIRECTORY! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L312-L316">src</a></sub></sup><a name="coalton-file-remove-directory!-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :A</code>

Deletes an empty directory.



***

#### <a href="#coalton-file-remove-directory-recursive!-value"><code>(REMOVE-DIRECTORY-RECURSIVE! PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L319-L324">src</a></sub></sup><a name="coalton-file-remove-directory-recursive!-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Deletes a target directory recursively. Equivalent to `rm -r`. Errors if the path is not a directory.



***

#### <a href="#coalton-file-set-file-position-value"><code>(SET-FILE-POSITION STREAM I)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L505-L508">src</a></sub></sup><a name="coalton-file-set-file-position-value"></a>
<code>&forall; :A. <a href="#coalton-file-filestream-type">FileStream</a> :A * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Sets the file position of a file stream.



***

#### <a href="#coalton-file-subdirectories-value"><code>(SUBDIRECTORIES PATH)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L292-L297">src</a></sub></sup><a name="coalton-file-subdirectories-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-file-pathname-type">Pathname</a> &rArr; :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-file-pathname-type">Pathname</a>)</code>

Returns all subdirectories within the directory. Returns an error if the pathname is not a directory pathname.



***

#### <a href="#coalton-file-system-relative-pathname-value"><code>(SYSTEM-RELATIVE-PATHNAME SYSTEM-NAME NAME)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L327-L331">src</a></sub></sup><a name="coalton-file-system-relative-pathname-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-string-type">String</a> &rArr; :A * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-file-pathname-type">Pathname</a></code>

Generates a system-relative-pathname for a given filename or path. This is a wrapper for `asdf:system-relative-pathname`. `Name` will likely be an empty string unless a subdirectory or filename is specified.



***

#### <a href="#coalton-file-with-open-file-value"><code>(WITH-OPEN-FILE PATH THUNK)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L591-L595">src</a></sub></sup><a name="coalton-file-with-open-file-value"></a>
<code>&forall; :PATH :A :B. (<a href="#coalton-file-file-class">File</a> :A) (<a href="#coalton-classes-into-class">Into</a> :PATH <a href="#coalton-file-pathname-type">Pathname</a>) &rArr; :PATH * (<a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :B) &key (:direction <a href="#coalton-file-opendirection-type">OpenDirection</a>) (:if-exists <a href="#coalton-file-ifexists-type">IfExists</a>) &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :B</code>

Open PATH, run THUNK on the stream, and then close it.



***

#### <a href="#coalton-file-with-temp-directory-value"><code>(WITH-TEMP-DIRECTORY THUNK)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L719-L724">src</a></sub></sup><a name="coalton-file-with-temp-directory-value"></a>
<code>&forall; :A. (<a href="#coalton-file-pathname-type">Pathname</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :A) &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :A</code>

Performs an operation `thunk` inside a temporary directory.



***

#### <a href="#coalton-file-with-temp-file-value"><code>(WITH-TEMP-FILE THUNK)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L709-L716">src</a></sub></sup><a name="coalton-file-with-temp-file-value"></a>
<code>&forall; :A :B. <a href="#coalton-file-file-class">File</a> :A &rArr; (<a href="#coalton-file-filestream-type">FileStream</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :B) &key (:extension <a href="#coalton-string-type">String</a>) &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> :B</code>

Perform THUNK on a temporary file, optionally ending in EXTENSION.



***

#### <a href="#coalton-file-write-char-value"><code>(WRITE-CHAR STREAM DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L470-L473">src</a></sub></sup><a name="coalton-file-write-char-value"></a>
<code><a href="#coalton-file-filestream-type">FileStream</a> <a href="#coalton-char-type">Char</a> * <a href="#coalton-char-type">Char</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Writes a `Char` to the stream.



***

#### <a href="#coalton-file-write-line-value"><code>(WRITE-LINE STREAM S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L643-L646">src</a></sub></sup><a name="coalton-file-write-line-value"></a>
<code><a href="#coalton-file-filestream-type">FileStream</a> <a href="#coalton-char-type">Char</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Writes a string with an appended newline to a filestream of type Char.



***

#### <a href="#coalton-file-write-string-value"><code>(WRITE-STRING FS S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L638-L640">src</a></sub></sup><a name="coalton-file-write-string-value"></a>
<code><a href="#coalton-file-filestream-type">FileStream</a> <a href="#coalton-char-type">Char</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Writes a `string` to a FileStream of type Char.



***

#### <a href="#coalton-file-write-to-file!-value"><code>(WRITE-TO-FILE! PATH DATA)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L754-L760">src</a></sub></sup><a name="coalton-file-write-to-file!-value"></a>
<code>&forall; :P :A. (<a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A) (<a href="#coalton-classes-into-class">Into</a> :P <a href="#coalton-file-pathname-type">Pathname</a>) (<a href="#coalton-file-file-class">File</a> :A) &rArr; :P * <a href="#coalton-vector-vector-type">Vector</a> :A &key (:if-exists <a href="#coalton-file-ifexists-type">IfExists</a>) &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Open PATH and write DATA using the requested IF-EXISTS policy.



***

#### <a href="#coalton-file-write-vector-value"><code>(WRITE-VECTOR STREAM V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/file.ct#L631-L635">src</a></sub></sup><a name="coalton-file-write-vector-value"></a>
<code>&forall; :A. (<a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A) (<a href="#coalton-file-file-class">File</a> :A) &rArr; <a href="#coalton-file-filestream-type">FileStream</a> :A * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-file-fileerror-type">FileError</a> <a href="#coalton-unit-type">Unit</a></code>

Writes elements of an vector of type `:a` to a stream of type `:a`.



***

# Package `COALTON/FUNCTIONS`<a name="coalton-functions-package"></a>

### Values

#### <a href="#coalton-functions-/=-value"><code>(/= A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L194-L196">src</a></sub></sup><a name="coalton-functions-/=-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `a` not equal to `b`?



***

#### <a href="#coalton-functions-asum-value"><code>(ASUM XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L188-L190">src</a></sub></sup><a name="coalton-functions-asum-value"></a>
<code>&forall; :T :F :A. (<a href="#coalton-classes-alternative-class">Alternative</a> :F) (<a href="#coalton-classes-foldable-class">Foldable</a> :T) &rArr; :T (:F :A) &rarr; :F :A</code>

Fold over a list using `alt`.



***

#### <a href="#coalton-functions-bracket-value"><code>(BRACKET INIT EXIT BODY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L233-L242">src</a></sub></sup><a name="coalton-functions-bracket-value"></a>
<code>&forall; :M :A :B :C. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; :M :A * (:A &rarr; :M :B) * (:A &rarr; :M :C) &rarr; :M :C</code>

Bracket takes an initial state, performs a body of operations, and then forces a safe exit.

This wraps `cl:unwind-protect`.

Modeled after Haskell: https://wiki.haskell.org/Bracket_pattern



***

#### <a href="#coalton-functions-complement-value"><code>(COMPLEMENT F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L153-L155">src</a></sub></sup><a name="coalton-functions-complement-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Compute the complement of a unary Boolean function.



***

#### <a href="#coalton-functions-compose-value"><code>(COMPOSE F G)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L109-L111">src</a></sub></sup><a name="coalton-functions-compose-value"></a>
<code>&forall; :B :C :A. (:B &rarr; :C) * (:A &rarr; :B) &rarr; :A &rarr; :C</code>

Equivalent to `(f (g x))`.



***

#### <a href="#coalton-functions-conjoin-value"><code>(CONJOIN F G X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L116-L118">src</a></sub></sup><a name="coalton-functions-conjoin-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Compute the conjunction of two unary Boolean functions.



***

#### <a href="#coalton-functions-const-value"><code>(CONST A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L92-L94">src</a></sub></sup><a name="coalton-functions-const-value"></a>
<code>&forall; :A :B. :A &rarr; :B &rarr; :A</code>

A function that always returns its first argument.



***

#### <a href="#coalton-functions-curry-value"><code>(CURRY FUNC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L158-L161">src</a></sub></sup><a name="coalton-functions-curry-value"></a>
<code>&forall; :LEFT :RIGHT :RESULT. (<a href="#coalton-classes-tuple-type">Tuple</a> :LEFT :RIGHT &rarr; :RESULT) &rarr; :LEFT * :RIGHT &rarr; :RESULT</code>

Adapt a function on `(Tuple left right)` into a two-argument function.



***

#### <a href="#coalton-functions-disjoin-value"><code>(DISJOIN F G X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L121-L123">src</a></sub></sup><a name="coalton-functions-disjoin-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Compute the disjunction of two unary Boolean functions.



***

#### <a href="#coalton-functions-fix-value"><code>(FIX F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L72-L82">src</a></sub></sup><a name="coalton-functions-fix-value"></a>
<code>&forall; :A :B. ((:A &rarr; :B) * :A &rarr; :B) &rarr; :A &rarr; :B</code>

Compute the fixed point of a unary function. This is equivalent to the Y-combinator of the lambda calculus. This combinator allows recursion without specific assignment of names. For example, the factorial function can be written

    (define fact
      (fix
        (fn (f n)
          (if (== n 0)
            1
            (* n (f (- n 1)))))))



***

#### <a href="#coalton-functions-flip-value"><code>(FLIP F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L98-L100">src</a></sub></sup><a name="coalton-functions-flip-value"></a>
<code>&forall; :A :B :C. (:A * :B &rarr; :C) &rarr; :B * :A &rarr; :C</code>

Returns a function that takes its arguments in reverse order.



***

#### <a href="#coalton-functions-id-value"><code>(ID X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L86-L88">src</a></sub></sup><a name="coalton-functions-id-value"></a>
<code>&forall; :A. :A &rarr; :A</code>

A function that always returns its argument.



***

#### <a href="#coalton-functions-msum-value"><code>(MSUM XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L183-L185">src</a></sub></sup><a name="coalton-functions-msum-value"></a>
<code>&forall; :T :A. (<a href="#coalton-classes-monoid-class">Monoid</a> :A) (<a href="#coalton-classes-foldable-class">Foldable</a> :T) &rArr; :T :A &rarr; :A</code>

Fold over a list using `<>`.



***

#### <a href="#coalton-functions-pair-with-value"><code>(PAIR-WITH FUNC LEFT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L172-L174">src</a></sub></sup><a name="coalton-functions-pair-with-value"></a>
<code>&forall; :LEFT :RIGHT. (:LEFT &rarr; :RIGHT) * :LEFT &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> :LEFT :RIGHT</code>

Create a `Tuple` of the form `(Tuple left (func left))`.



***

#### <a href="#coalton-functions-print-value"><code>(PRINT ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L57-L59">src</a></sub></sup><a name="coalton-functions-print-value"></a>
<code>&forall; :A. <a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-string-type">String</a> &rArr; :A &rarr; Void</code>

Print the String representation of `item` to `cl:*standard-output*`.



***

#### <a href="#coalton-functions-reduce-value"><code>(REDUCE F Y XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L103-L105">src</a></sub></sup><a name="coalton-functions-reduce-value"></a>
<code>&forall; :A :B :F. <a href="#coalton-classes-foldable-class">Foldable</a> :F &rArr; (:A * :B &rarr; :B) * :B * :F :A &rarr; :B</code>

The same as `fold` but with the argument order swapped to match `cl:reduce`



***

#### <a href="#coalton-functions-trace-value"><code>(TRACE STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L37-L44">src</a></sub></sup><a name="coalton-functions-trace-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; Void</code>

Deprecated: Use `show`.

Print a line to `cl:*standard-output*`.



***

#### <a href="#coalton-functions-traceobject-value"><code>(TRACEOBJECT STR ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L47-L54">src</a></sub></sup><a name="coalton-functions-traceobject-value"></a>
<code>&forall; :A. <a href="#coalton-string-type">String</a> * :A &rarr; Void</code>

Deprecated: Use `show` or explicit formatting.

Print a line to `cl:*standard-output*` in the form "{STR}: {ITEM}".



***

#### <a href="#coalton-functions-uncurry-value"><code>(UNCURRY FUNC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L164-L169">src</a></sub></sup><a name="coalton-functions-uncurry-value"></a>
<code>&forall; :LEFT :RIGHT :RESULT. (:LEFT * :RIGHT &rarr; :RESULT) &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> :LEFT :RIGHT &rarr; :RESULT</code>

Adapt a two-argument function into one that accepts a single `Tuple`.



***

#### <a href="#coalton-functions-unsafe-pointer-eq?-value"><code>(UNSAFE-POINTER-EQ? A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/functions.ct#L63-L65">src</a></sub></sup><a name="coalton-functions-unsafe-pointer-eq?-value"></a>
<code>&forall; :A. :A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>


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

# Package `COALTON/HASH`<a name="coalton-hash-package"></a>

### Values

#### <a href="#coalton-hash-combine-hashes-value"><code>(COMBINE-HASHES LHS RHS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.ct#L39-L41">src</a></sub></sup><a name="coalton-hash-combine-hashes-value"></a>
<code><a href="#coalton-classes-hash-type">Hash</a> * <a href="#coalton-classes-hash-type">Hash</a> &rarr; <a href="#coalton-classes-hash-type">Hash</a></code>


***

#### <a href="#coalton-hash-combine-hashes-order-independent-value"><code>(COMBINE-HASHES-ORDER-INDEPENDENT LHS RHS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hash.ct#L44-L46">src</a></sub></sup><a name="coalton-hash-combine-hashes-order-independent-value"></a>
<code><a href="#coalton-classes-hash-type">Hash</a> * <a href="#coalton-classes-hash-type">Hash</a> &rarr; <a href="#coalton-classes-hash-type">Hash</a></code>


***

# Package `COALTON/HASHMAP`<a name="coalton-hashmap-package"></a>


Immutable hash array mapped trie maps from keys to values.

### Types

#### <a href="#coalton-hashmap-hashmap-type"><code>HashMap</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L69-L71">src</a></sub></sup><a name="coalton-hashmap-hashmap-type"></a>
- <code>(HashMap <a href="#coalton-hashmap-hmnode-type">HmNode</a> :A :B)</code>

Immutable map (also known as a dictionary or dict) using hashes. Implemented as a hash array mapped trie data structure.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-eq-class">Eq</a> :K) (<a href="#coalton-classes-eq-class">Eq</a> :V) (<a href="#coalton-classes-hash-class">Hash</a> :K) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :K) (<a href="#coalton-classes-hash-class">Hash</a> :V) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :K) (<a href="#coalton-show-show-class">Show</a> :K) (<a href="#coalton-show-show-class">Show</a> :V) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V) (<a href="#coalton-classes-tuple-type">Tuple</a> :K :V)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V) (<a href="#coalton-classes-tuple-type">Tuple</a> :K :V)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :|0| :|1|)</code>

</details>



***

### Values

#### <a href="#coalton-hashmap-adjoin-value"><code>(ADJOIN HM KEY VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L472-L475">src</a></sub></sup><a name="coalton-hashmap-adjoin-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K * :V &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Returns a hashmap that has a new entry of (`key`, `val`) added to `hm`.
If `hm` alreay contains an entry with `key`, however, `hm` is returned as is.



***

#### <a href="#coalton-hashmap-count-value"><code>(COUNT HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L332-L341">src</a></sub></sup><a name="coalton-hashmap-count-value"></a>
<code>&forall; :K :V. <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-integer-type">Integer</a></code>

Returns the number of entries in HM.



***

#### <a href="#coalton-hashmap-difference-value"><code>(DIFFERENCE A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L783-L785">src</a></sub></sup><a name="coalton-hashmap-difference-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Returns a HashMap that contains mappings in `a` but not in `b`.



***

#### <a href="#coalton-hashmap-empty?-value"><code>(EMPTY? HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L322-L326">src</a></sub></sup><a name="coalton-hashmap-empty?-value"></a>
<code>&forall; :K :V. <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns True if a hashmap HM is empty, False if not.



***

#### <a href="#coalton-hashmap-entries-value"><code>(ENTRIES HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L699-L701">src</a></sub></sup><a name="coalton-hashmap-entries-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :K :V)</code>

Returns an iterator over all entries in hashmap hm.



***

#### <a href="#coalton-hashmap-insert-value"><code>(INSERT HM KEY VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L464-L467">src</a></sub></sup><a name="coalton-hashmap-insert-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K * :V &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Returns a hashmap that has a new entry of (KEY, VAL) added to HM.  If HM
contains an entry with KEY, the new hashmap replaces it for the new entry.



***

#### <a href="#coalton-hashmap-intersection-value"><code>(INTERSECTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L770-L780">src</a></sub></sup><a name="coalton-hashmap-intersection-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Construct a HashMap containing all the mappings whose key is in both A and B.

The entries from A remains in the result.



***

#### <a href="#coalton-hashmap-keys-value"><code>(KEYS HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L687-L689">src</a></sub></sup><a name="coalton-hashmap-keys-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :K</code>

Returns an iterator over all the keys in a hashmap hm.



***

#### <a href="#coalton-hashmap-lookup-value"><code>(LOOKUP HM KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L345-L366">src</a></sub></sup><a name="coalton-hashmap-lookup-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K &rarr; <a href="#coalton-optional-type">Optional</a> :V</code>

Returns a value associated with KEY in the hashmap HM.



***

#### <a href="#coalton-hashmap-modify-value"><code>(MODIFY HM KEY F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L615-L618">src</a></sub></sup><a name="coalton-hashmap-modify-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K * (:V &rarr; :V) &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Modify the value at KEY with F. Returns the modified `HashMap`.



***

#### <a href="#coalton-hashmap-modify-get-value"><code>(MODIFY-GET HM KEY F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L602-L611">src</a></sub></sup><a name="coalton-hashmap-modify-get-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K * (:V &rarr; :V) &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * <a href="#coalton-optional-type">Optional</a> :V</code>

Modify the value at KEY with F. Returns the modified `HashMap` and the
new value, if the key was found.



***

#### <a href="#coalton-hashmap-remove-value"><code>(REMOVE HM KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L489-L499">src</a></sub></sup><a name="coalton-hashmap-remove-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Returns a hashmap that is identical to HM except the entry with KEY is
removed.  If HM does not contain an entry with KEY, HM is returned as is.



***

#### <a href="#coalton-hashmap-replace-value"><code>(REPLACE HM KEY VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L480-L484">src</a></sub></sup><a name="coalton-hashmap-replace-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K * :V &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Returns a hashmap where the value associated with `key` is replaced
with `val`.  If `hm` does not contain an entry with `key`, `hm` is
 returned as is.



***

#### <a href="#coalton-hashmap-union-value"><code>(UNION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L761-L767">src</a></sub></sup><a name="coalton-hashmap-union-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Construct a HashMap containing all the mappings from A and B.

If A and B contain mappings X -> A' and X -> B', the former mapping is kept.

The operation is associative, but not commutative.



***

#### <a href="#coalton-hashmap-update-value"><code>(UPDATE HM KEY F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L506-L598">src</a></sub></sup><a name="coalton-hashmap-update-value"></a>
<code>&forall; :K :V :A. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :K * (<a href="#coalton-optional-type">Optional</a> :V &rarr; <a href="#coalton-optional-type">Optional</a> :V * :A) &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * :A</code>

Generic update/filter function. Takes a KEY and a F. F is passed
NONE if KEY is not found, (Some KEY) if it is found. F returns two values:
an `(Optional :v)` replacement value and an auxiliary result `:a`. If the
first return value is NONE, then the KEY entry is cleared from the hashmap.
If it is (SOME v), then the KEY entry is updated to V. The second return
value, `:a`, is returned from `update` along with the modified `HashMap`.



***

#### <a href="#coalton-hashmap-values-iter-value"><code>(VALUES-ITER HM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L693-L695">src</a></sub></sup><a name="coalton-hashmap-values-iter-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :V</code>

Returns an iterator over all the values in a hashmap hm.



***

#### <a href="#coalton-hashmap-xor-value"><code>(XOR A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L788-L800">src</a></sub></sup><a name="coalton-hashmap-xor-value"></a>
<code>&forall; :K :V. <a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V * <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V &rarr; <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

Returns a HashMap that contains mappings either in `a` or in `b`,
but not in both.



***

#### <a href="#coalton-hashmap-empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashmap.ct#L316-L318">src</a></sub></sup><a name="coalton-hashmap-empty-value"></a>
<code>&forall; :K :V. <a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V</code>

An empty HashMap



***

# Package `COALTON/HASHTABLE`<a name="coalton-hashtable-package"></a>


Mutable hash tables keyed by Coalton `Hash` and `Eq` instances.

### Types

#### <a href="#coalton-hashtable-hashtable-type"><code>HashTable</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L39-L40">src</a></sub></sup><a name="coalton-hashtable-hashtable-type"></a>

A mutable hash table.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-hash-class">Hash</a> :KEY) (<a href="#coalton-classes-eq-class">Eq</a> :VALUE) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :KEY) (<a href="#coalton-classes-hash-class">Hash</a> :VALUE) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code>(<a href="#coalton-show-show-class">Show</a> :KEY) (<a href="#coalton-show-show-class">Show</a> :VALUE) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :|0| :|1|)</code>

</details>



***

### Values

#### <a href="#coalton-hashtable-count-value"><code>(COUNT TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L97-L100">src</a></sub></sup><a name="coalton-hashtable-count-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE &rarr; <a href="#coalton-integer-type">Integer</a></code>

Returns the number of entries in TABLE



***

#### <a href="#coalton-hashtable-entries-value"><code>(ENTRIES TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L103-L113">src</a></sub></sup><a name="coalton-hashtable-entries-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>

Returns the key-values pairs as a list.



***

#### <a href="#coalton-hashtable-extend!-value"><code>(EXTEND! TABLE ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L145-L152">src</a></sub></sup><a name="coalton-hashtable-extend!-value"></a>
<code>&forall; :KEY :VALUE :CONTAINER. (<a href="#coalton-classes-hash-class">Hash</a> :KEY) (<a href="#coalton-iterator-intoiterator-class">IntoIterator</a> :CONTAINER (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) &rArr; <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE * :CONTAINER &rarr; Void</code>

Insert all of the key value pairs from ITER into TABLE, overwriting duplicate keys.



***

#### <a href="#coalton-hashtable-get-value"><code>(GET TABLE KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L71-L78">src</a></sub></sup><a name="coalton-hashtable-get-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE * :KEY &rarr; <a href="#coalton-optional-type">Optional</a> :VALUE</code>

Lookup KEY in TABLE



***

#### <a href="#coalton-hashtable-keys-value"><code>(KEYS TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L116-L127">src</a></sub></sup><a name="coalton-hashtable-keys-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :KEY</code>

Returns the keys in TABLE as a list



***

#### <a href="#coalton-hashtable-new-value"><code>(NEW)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L65-L68">src</a></sub></sup><a name="coalton-hashtable-new-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; Void &rarr; <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE</code>

Create a new empty hashtable



***

#### <a href="#coalton-hashtable-remove!-value"><code>(REMOVE! TABLE KEY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L89-L94">src</a></sub></sup><a name="coalton-hashtable-remove!-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE * :KEY &rarr; Void</code>

Remove the entry at KEY from TABLE



***

#### <a href="#coalton-hashtable-set!-value"><code>(SET! TABLE KEY VALUE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L81-L86">src</a></sub></sup><a name="coalton-hashtable-set!-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE * :KEY * :VALUE &rarr; Void</code>

Set KEY to VALUE in TABLE



***

#### <a href="#coalton-hashtable-values-iter-value"><code>(VALUES-ITER TABLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L130-L141">src</a></sub></sup><a name="coalton-hashtable-values-iter-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :VALUE</code>

Returns the values in TABLE as a list



***

#### <a href="#coalton-hashtable-with-capacity-value"><code>(WITH-CAPACITY CAPACITY)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/hashtable.ct#L52-L62">src</a></sub></sup><a name="coalton-hashtable-with-capacity-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE</code>

Create a new empty hashtable with a given capacity



***

# Package `COALTON/ITERATOR`<a name="coalton-iterator-package"></a>

### Types

#### <a href="#coalton-iterator-iterator-type"><code>Iterator</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L83-L85">src</a></sub></sup><a name="coalton-iterator-iterator-type"></a>

A forward-moving pointer into an ordered sequence of :ELTs

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-iterator-iterator-type">Iterator</a></code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-iterator-iterator-type">Iterator</a> :ELT) :ELT</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-iterator-iterator-type">Iterator</a> :|0|)</code>

</details>



***

### Classes

#### <a href="#coalton-iterator-fromiterator-class"><code>FromIterator</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L659-L660">src</a></sub></sup><a name="coalton-iterator-fromiterator-class"></a>
<code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> :CONTAINER :ELT</code>

Methods:
- <code>COLLECT! :: <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; :CONTAINER</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT) :ELT</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :K &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V) (<a href="#coalton-classes-tuple-type">Tuple</a> :K :V)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :KEY &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) :A</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> <a href="#coalton-string-type">String</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> :CONTAINER :ELT &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-classes-result-type">Result</a> :ERR :CONTAINER) (<a href="#coalton-classes-result-type">Result</a> :ERR :ELT)</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> :CONTAINER :ELT &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-optional-type">Optional</a> :CONTAINER) (<a href="#coalton-optional-type">Optional</a> :ELT)</code>

</details>



***

#### <a href="#coalton-iterator-intoiterator-class"><code>IntoIterator</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L139-L143">src</a></sub></sup><a name="coalton-iterator-intoiterator-class"></a>
<code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> :CONTAINER :ELT</code>


Containers which can be converted into iterators.

`INTO-ITER` must not mutate its argument, only produce a "view" into it.

Methods:
- <code>INTO-ITER :: :CONTAINER &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT) :ELT</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V) (<a href="#coalton-classes-tuple-type">Tuple</a> :K :V)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) :A</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> <a href="#coalton-string-type">String</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-list-type">List</a> :ELT) :ELT</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-classes-result-type">Result</a> :ERR :ELT) :ELT</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-optional-type">Optional</a> :A) :A</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-iterator-iterator-type">Iterator</a> :ELT) :ELT</code>

</details>



***

### Values

#### <a href="#coalton-iterator-and!-value"><code>(AND! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L481-L492">src</a></sub></sup><a name="coalton-iterator-and!-value"></a>
<code><a href="#coalton-iterator-iterator-type">Iterator</a> <a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns True if all iterator elements are True. May not consume the entire iterator. Returns True on an empty iterator.



***

#### <a href="#coalton-iterator-any!-value"><code>(ANY! GOOD? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L615-L621">src</a></sub></sup><a name="coalton-iterator-any!-value"></a>
<code>&forall; :ELT. (:ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Return `True` as soon as any element of ITER is GOOD?, or `False` if none of them are.

Returns `False` if ITER is empty.



***

#### <a href="#coalton-iterator-chain!-value"><code>(CHAIN! ITER1 ITER2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L420-L431">src</a></sub></sup><a name="coalton-iterator-chain!-value"></a>
<code>&forall; :ELT. <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

Yield all the elements of ITER1 followed by all the elements from ITER2.



***

#### <a href="#coalton-iterator-count!-value"><code>(COUNT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L513-L517">src</a></sub></sup><a name="coalton-iterator-count!-value"></a>
<code>&forall; :ELT. <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Return the number of elements in ITER.
This operation could be called `length!`, but `count!` emphasizes the fact that it consumes ITER, and
afterwards, ITER will be exhausted.



***

#### <a href="#coalton-iterator-count-forever-value"><code>(COUNT-FOREVER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L248-L252">src</a></sub></sup><a name="coalton-iterator-count-forever-value"></a>
<code>&forall; :NUM. (<a href="#coalton-classes-num-class">Num</a> :NUM) (<a href="#coalton-classes-ord-class">Ord</a> :NUM) &rArr; Void &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM</code>

An infinite iterator which starts at 0 and counts upwards by 1.



***

#### <a href="#coalton-iterator-down-from-value"><code>(DOWN-FROM LIMIT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L243-L245">src</a></sub></sup><a name="coalton-iterator-down-from-value"></a>
<code>&forall; :NUM. (<a href="#coalton-classes-num-class">Num</a> :NUM) (<a href="#coalton-classes-ord-class">Ord</a> :NUM) &rArr; :NUM &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM</code>

An iterator which begins below the provided limit and counts down through and including zero.



***

#### <a href="#coalton-iterator-elementwise-hash!-value"><code>(ELEMENTWISE-HASH! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L644-L653">src</a></sub></sup><a name="coalton-iterator-elementwise-hash!-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-hash-class">Hash</a> :ELT &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-classes-hash-type">Hash</a></code>

Hash an iterator by combining the hashes of all its elements.

The empty iterator will hash as 0.



***

#### <a href="#coalton-iterator-elementwise-match!-value"><code>(ELEMENTWISE-MATCH! SAME? LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L624-L633">src</a></sub></sup><a name="coalton-iterator-elementwise-match!-value"></a>
<code>&forall; :ELT. (:ELT * :ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Are LEFT and RIGHT elementwise-identical under SAME?

True if, for every pair of elements (A B) in (LEFT RIGHT), (same? A B) is True, and LEFT and RIGHT have the
same length.



***

#### <a href="#coalton-iterator-elementwise==!-value"><code>(ELEMENTWISE==! LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L636-L641">src</a></sub></sup><a name="coalton-iterator-elementwise==!-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-eq-class">Eq</a> :ELT &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is every element of the first iterator `==' to the corresponding element of the second?

True if two iterators have the same length, and for every N, the Nth element of the first iterator is `==' to
the Nth element of the second iterator.



***

#### <a href="#coalton-iterator-enumerate!-value"><code>(ENUMERATE! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L347-L349">src</a></sub></sup><a name="coalton-iterator-enumerate!-value"></a>
<code>&forall; :ELT. <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-classes-tuple-type">Tuple</a> <a href="#coalton-ufix-type">UFix</a> :ELT)</code>

Pair successive zero-based incides with elements from ITER



***

#### <a href="#coalton-iterator-every!-value"><code>(EVERY! GOOD? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L606-L612">src</a></sub></sup><a name="coalton-iterator-every!-value"></a>
<code>&forall; :ELT. (:ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Return `True` if every element of ITER is GOOD?, or `False` as soon as any element is not GOOD?.

Returns `True` if ITER is empty.



***

#### <a href="#coalton-iterator-filter!-value"><code>(FILTER! KEEP? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L352-L360">src</a></sub></sup><a name="coalton-iterator-filter!-value"></a>
<code>&forall; :ELT. (:ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

Return an iterator over the elements from ITER for which KEEP? returns true.



***

#### <a href="#coalton-iterator-filter-map!-value"><code>(FILTER-MAP! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L363-L376">src</a></sub></sup><a name="coalton-iterator-filter-map!-value"></a>
<code>&forall; :A :B. (:A &rarr; <a href="#coalton-optional-type">Optional</a> :B) * <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :B</code>

Map an iterator, retaining only the elements where F returns SOME.



***

#### <a href="#coalton-iterator-find!-value"><code>(FIND! THIS? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L532-L538">src</a></sub></sup><a name="coalton-iterator-find!-value"></a>
<code>&forall; :ELT. (:ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

Return the first element of ITER for which THIS? returns `True`, or `None` if no element matches.



***

#### <a href="#coalton-iterator-find-map!-value"><code>(FIND-MAP! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L541-L543">src</a></sub></sup><a name="coalton-iterator-find-map!-value"></a>
<code>&forall; :A :B. (:A &rarr; <a href="#coalton-optional-type">Optional</a> :B) * <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :B</code>

Return the first element of (map F ITER) for which F returns `Some`.



***

#### <a href="#coalton-iterator-flat-map!-value"><code>(FLAT-MAP! FUNC ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L451-L453">src</a></sub></sup><a name="coalton-iterator-flat-map!-value"></a>
<code>&forall; :A :B. (:A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :B) * <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :B</code>

Flatten! wrapped around map.



***

#### <a href="#coalton-iterator-flatten!-value"><code>(FLATTEN! ITERS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L434-L448">src</a></sub></sup><a name="coalton-iterator-flatten!-value"></a>
<code>&forall; :ELT. <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-iterator-iterator-type">Iterator</a> :ELT) &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

Yield all the elements from each of the ITERS in order.



***

#### <a href="#coalton-iterator-fold!-value"><code>(FOLD! FUNC INIT ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L111-L121">src</a></sub></sup><a name="coalton-iterator-fold!-value"></a>
<code>&forall; :STATE :ELT. (:STATE * :ELT &rarr; :STATE) * :STATE * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; :STATE</code>

Tail recursive in-order fold. Common Lisp calls this operation `reduce`.

If ITER is empty, returns INIT. Otherwise, calls (FUNC STATE ITEM) for each ITEM of ITER to produce a new
STATE, using INIT as the first STATE.



***

#### <a href="#coalton-iterator-for-each!-value"><code>(FOR-EACH! THUNK ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L521-L529">src</a></sub></sup><a name="coalton-iterator-for-each!-value"></a>
<code>&forall; :ELT. (:ELT &rarr; Void) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; Void</code>

Call THUNK on each element of ITER in order for side effects.
Discard values returned by THUNK.



***

#### <a href="#coalton-iterator-index-of!-value"><code>(INDEX-OF! THIS? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L546-L552">src</a></sub></sup><a name="coalton-iterator-index-of!-value"></a>
<code>&forall; :ELT. (:ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a></code>

Return the zero-based index of the first element of ITER for which THIS? is `True`, or `None` if no element matches.



***

#### <a href="#coalton-iterator-interleave!-value"><code>(INTERLEAVE! LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L306-L325">src</a></sub></sup><a name="coalton-iterator-interleave!-value"></a>
<code>&forall; :A. <a href="#coalton-iterator-iterator-type">Iterator</a> :A * <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :A</code>

Return an iterator of interleaved elements from LEFT and RIGHT which terminates as soon as both LEFT and RIGHT do.

If one iterator terminates before the other, elements from the longer iterator will be yielded without
interleaving. (interleave empty ITER) is equivalent to (id ITER).



***

#### <a href="#coalton-iterator-last!-value"><code>(LAST! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L476-L478">src</a></sub></sup><a name="coalton-iterator-last!-value"></a>
<code>&forall; :A. <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Yields the last element of ITER, completely consuming it.



***

#### <a href="#coalton-iterator-map-while!-value"><code>(MAP-WHILE! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L379-L399">src</a></sub></sup><a name="coalton-iterator-map-while!-value"></a>
<code>&forall; :A :B. (:A &rarr; <a href="#coalton-optional-type">Optional</a> :B) * <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :B</code>

Map an iterator, stopping early if F returns NONE.



***

#### <a href="#coalton-iterator-max!-value"><code>(MAX! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L569-L571">src</a></sub></sup><a name="coalton-iterator-max!-value"></a>
<code>&forall; :NUM. <a href="#coalton-classes-ord-class">Ord</a> :NUM &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM &rarr; <a href="#coalton-optional-type">Optional</a> :NUM</code>

Return the most-positive element of ITER, or `None` if ITER is empty.



***

#### <a href="#coalton-iterator-maximize-by!-value"><code>(MAXIMIZE-BY! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L592-L596">src</a></sub></sup><a name="coalton-iterator-maximize-by!-value"></a>
<code>&forall; :ELT :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; (:ELT &rarr; :A) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-positive.

Return `None' if ITER is empty.



***

#### <a href="#coalton-iterator-mconcat!-value"><code>(MCONCAT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L456-L458">src</a></sub></sup><a name="coalton-iterator-mconcat!-value"></a>
<code>&forall; :A. <a href="#coalton-classes-monoid-class">Monoid</a> :A &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; :A</code>

Fold an iterator of monoids into a single element.



***

#### <a href="#coalton-iterator-mconcatmap!-value"><code>(MCONCATMAP! FUNC ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L461-L463">src</a></sub></sup><a name="coalton-iterator-mconcatmap!-value"></a>
<code>&forall; :B :A. <a href="#coalton-classes-monoid-class">Monoid</a> :A &rArr; (:B &rarr; :A) * <a href="#coalton-iterator-iterator-type">Iterator</a> :B &rarr; :A</code>

Map an iterator to an iterator of monoids, and then fold that iterator into a single element.



***

#### <a href="#coalton-iterator-min!-value"><code>(MIN! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L574-L576">src</a></sub></sup><a name="coalton-iterator-min!-value"></a>
<code>&forall; :NUM. <a href="#coalton-classes-ord-class">Ord</a> :NUM &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM &rarr; <a href="#coalton-optional-type">Optional</a> :NUM</code>

Return the most-negative element of ITER, or `None` if ITER is empty.



***

#### <a href="#coalton-iterator-minimize-by!-value"><code>(MINIMIZE-BY! F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L599-L603">src</a></sub></sup><a name="coalton-iterator-minimize-by!-value"></a>
<code>&forall; :ELT :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; (:ELT &rarr; :A) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

For a function F, which maps the iterator, return the element of ITER where (F ELT) is the most-negative.

Return `None' if ITER is empty.



***

#### <a href="#coalton-iterator-new-value"><code>(NEW F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L88-L90">src</a></sub></sup><a name="coalton-iterator-new-value"></a>
<code>&forall; :ELT. (Void &rarr; <a href="#coalton-optional-type">Optional</a> :ELT) &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

Create a new iterator from a function that yields elements.



***

#### <a href="#coalton-iterator-next!-value"><code>(NEXT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L102-L108">src</a></sub></sup><a name="coalton-iterator-next!-value"></a>
<code>&forall; :ELT. <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

Advance ITER, returning its next yielded value, or `None` if the iterator is exhausted.
Behavior is undefined if two threads concurrently call `next!` on the same iterator without a lock. Note that
most of the operators defined on iterators call `next!` internally, or create new iterators which will call
`next!` on their inputs.



***

#### <a href="#coalton-iterator-once-value"><code>(ONCE ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L268-L277">src</a></sub></sup><a name="coalton-iterator-once-value"></a>
<code>&forall; :ITEM. :ITEM &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ITEM</code>

Yield `item` once.



***

#### <a href="#coalton-iterator-optimize!-value"><code>(OPTIMIZE! BETTER? ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L555-L566">src</a></sub></sup><a name="coalton-iterator-optimize!-value"></a>
<code>&forall; :ELT. (:ELT * :ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the best element of ITER.

Return `None` if ITER is empty.



***

#### <a href="#coalton-iterator-optimize-by!-value"><code>(OPTIMIZE-BY! BETTER? F ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L582-L589">src</a></sub></sup><a name="coalton-iterator-optimize-by!-value"></a>
<code>&forall; :B :A. (:B * :B &rarr; <a href="#coalton-boolean-type">Boolean</a>) * (:A &rarr; :B) * <a href="#coalton-iterator-iterator-type">Iterator</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

For an order BETTER? which returns `True` if its first argument is better than its second argument, return the element of ITER where (F ELT) is the best.

Return `None` if ITER is empty.



***

#### <a href="#coalton-iterator-or!-value"><code>(OR! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L495-L505">src</a></sub></sup><a name="coalton-iterator-or!-value"></a>
<code><a href="#coalton-iterator-iterator-type">Iterator</a> <a href="#coalton-boolean-type">Boolean</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns True if any iterator elements are True. May not consume the entire iterator. Returns False on an empty iterator.



***

#### <a href="#coalton-iterator-pair-with!-value"><code>(PAIR-WITH! FUNC KEYS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L466-L469">src</a></sub></sup><a name="coalton-iterator-pair-with!-value"></a>
<code>&forall; :KEY :VALUE. (:KEY &rarr; :VALUE) * <a href="#coalton-iterator-iterator-type">Iterator</a> :KEY &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>

Returns an iterator over tuples whose FSTs are elements from KEYS, and whose SNDs are the results of applying FUNC to those KEYS.



***

#### <a href="#coalton-iterator-range-decreasing-value"><code>(RANGE-DECREASING STEP START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L206-L240">src</a></sub></sup><a name="coalton-iterator-range-decreasing-value"></a>
<code>&forall; :NUM. (<a href="#coalton-classes-num-class">Num</a> :NUM) (<a href="#coalton-classes-ord-class">Ord</a> :NUM) &rArr; :NUM * :NUM * :NUM &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM</code>

A range which begins below START and counts down through and including END by STEP.

Equivalent to reversing `range-increasing`



***

#### <a href="#coalton-iterator-range-increasing-value"><code>(RANGE-INCREASING STEP START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L168-L178">src</a></sub></sup><a name="coalton-iterator-range-increasing-value"></a>
<code>&forall; :NUM. (<a href="#coalton-classes-num-class">Num</a> :NUM) (<a href="#coalton-classes-ord-class">Ord</a> :NUM) &rArr; :NUM * :NUM * :NUM &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM</code>

An iterator which begins at START and yields successive elements spaced by STEP, stopping before END.



***

#### <a href="#coalton-iterator-recursive-iter-value"><code>(RECURSIVE-ITER SUCC DONE? START)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L149-L161">src</a></sub></sup><a name="coalton-iterator-recursive-iter-value"></a>
<code>&forall; :ELT. (:ELT &rarr; :ELT) * (:ELT &rarr; <a href="#coalton-boolean-type">Boolean</a>) * :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

An iterator which yields first START, then (SUCC START), then (SUCC (SUCC START)), and so on, stopping as soon as such a value is `done?`.

Beware off-by-one errors: the first value which is `done?` is not yielded. If `(done?  start)' is true, the
iterator is empty.



***

#### <a href="#coalton-iterator-remove-duplicates!-value"><code>(REMOVE-DUPLICATES! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator-hashtable.ct#L5-L15">src</a></sub></sup><a name="coalton-iterator-remove-duplicates!-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-hash-class">Hash</a> :ELT &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

Yield unique elements from ITER in order of first appearance.



***

#### <a href="#coalton-iterator-repeat-value"><code>(REPEAT ITEM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L255-L260">src</a></sub></sup><a name="coalton-iterator-repeat-value"></a>
<code>&forall; :ITEM. :ITEM &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ITEM</code>

Yield ITEM over and over, infinitely.



***

#### <a href="#coalton-iterator-repeat-for-value"><code>(REPEAT-FOR ITEM COUNT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L263-L265">src</a></sub></sup><a name="coalton-iterator-repeat-for-value"></a>
<code>&forall; :ITEM. :ITEM * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ITEM</code>

Yield ITEM COUNT times, then stop.



***

#### <a href="#coalton-iterator-size-hint-value"><code>(SIZE-HINT ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L97-L99">src</a></sub></sup><a name="coalton-iterator-size-hint-value"></a>
<code>&forall; :ELT. <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a></code>


***

#### <a href="#coalton-iterator-sum!-value"><code>(SUM! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L508-L510">src</a></sub></sup><a name="coalton-iterator-sum!-value"></a>
<code>&forall; :NUM. <a href="#coalton-classes-num-class">Num</a> :NUM &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM &rarr; :NUM</code>

Add together all the elements of ITER.



***

#### <a href="#coalton-iterator-take!-value"><code>(TAKE! COUNT ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L413-L417">src</a></sub></sup><a name="coalton-iterator-take!-value"></a>
<code>&forall; :ELT. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

An `Iterator` which yields at most COUNT elements from ITER.



***

#### <a href="#coalton-iterator-unwrapped!-value"><code>(UNWRAPPED! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L402-L410">src</a></sub></sup><a name="coalton-iterator-unwrapped!-value"></a>
<code>&forall; :WRAPPER :ELT. <a href="#coalton-classes-unwrappable-class">Unwrappable</a> :WRAPPER &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> (:WRAPPER :ELT) &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>


***

#### <a href="#coalton-iterator-up-through-value"><code>(UP-THROUGH LIMIT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L186-L188">src</a></sub></sup><a name="coalton-iterator-up-through-value"></a>
<code>&forall; :NUM. (<a href="#coalton-classes-num-class">Num</a> :NUM) (<a href="#coalton-classes-ord-class">Ord</a> :NUM) &rArr; :NUM &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM</code>

An iterator which begins at zero and counts up through and including LIMIT.



***

#### <a href="#coalton-iterator-up-to-value"><code>(UP-TO LIMIT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L181-L183">src</a></sub></sup><a name="coalton-iterator-up-to-value"></a>
<code>&forall; :NUM. (<a href="#coalton-classes-num-class">Num</a> :NUM) (<a href="#coalton-classes-ord-class">Ord</a> :NUM) &rArr; :NUM &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :NUM</code>

An iterator which begins at zero and counts up to, but not including, LIMIT.



***

#### <a href="#coalton-iterator-with-size-value"><code>(WITH-SIZE F SIZE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L93-L94">src</a></sub></sup><a name="coalton-iterator-with-size-value"></a>
<code>&forall; :ELT. (Void &rarr; <a href="#coalton-optional-type">Optional</a> :ELT) * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>


***

#### <a href="#coalton-iterator-zip!-value"><code>(ZIP! LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L342-L344">src</a></sub></sup><a name="coalton-iterator-zip!-value"></a>
<code>&forall; :LEFT :RIGHT. <a href="#coalton-iterator-iterator-type">Iterator</a> :LEFT * <a href="#coalton-iterator-iterator-type">Iterator</a> :RIGHT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :LEFT :RIGHT)</code>

Return an iterator of tuples contining elements from two iterators.



***

#### <a href="#coalton-iterator-zip-with!-value"><code>(ZIP-WITH! F LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L328-L339">src</a></sub></sup><a name="coalton-iterator-zip-with!-value"></a>
<code>&forall; :LEFT :RIGHT :OUT. (:LEFT * :RIGHT &rarr; :OUT) * <a href="#coalton-iterator-iterator-type">Iterator</a> :LEFT * <a href="#coalton-iterator-iterator-type">Iterator</a> :RIGHT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :OUT</code>

Return an iterator of elements from LEFT and RIGHT which terminates as soon as either LEFT or RIGHT does.



***

#### <a href="#coalton-iterator-empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/iterator.ct#L135-L137">src</a></sub></sup><a name="coalton-iterator-empty-value"></a>
<code>&forall; :ANY. <a href="#coalton-iterator-iterator-type">Iterator</a> :ANY</code>

Yields nothing; stops immediately



***

# Package `COALTON/LISPARRAY`<a name="coalton-lisparray-package"></a>


Fixed-size one-dimensional Common Lisp arrays for interop and efficient storage.

### Types

#### <a href="#coalton-lisparray-lisparray-type"><code>LispArray</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.ct#L33-L38">src</a></sub></sup><a name="coalton-lisparray-lisparray-type"></a>

A one-dimensional, non-resizable array of elements.

These arrays are represented as possibly specialized `(cl:simple-array <type> (cl:*))` and are meant to be used as a tool either to interface with Lisp code or to implement efficient data structures. One should consult `Vector` or `Seq` for more general sequential data structure needs.

Whether or not the arrays are specialized depends on the underlying Lisp implementation. Consult `cl:upgraded-array-element-type` to determine whether `LispArray` may get specialized.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> :T &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-lisparray-lisparray-type">LispArray</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) (<a href="#coalton-list-type">List</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) :T (<a href="#coalton-lisparray-lisparraybuilder-type">LispArrayBuilder</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) :T (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> :T) (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) (<a href="#coalton-list-type">List</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) :T</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :A)</code>

</details>



***

### Values

#### <a href="#coalton-lisparray-aref-value"><code>(AREF V I)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.ct#L79-L82">src</a></sub></sup><a name="coalton-lisparray-aref-value"></a>
<code>&forall; :T. <a href="#coalton-lisparray-lisparray-type">LispArray</a> :T * <a href="#coalton-ufix-type">UFix</a> &rarr; :T</code>

Read the `i`th value of the `LispArray` `v`.



***

#### <a href="#coalton-lisparray-copy-value"><code>(COPY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.ct#L95-L98">src</a></sub></sup><a name="coalton-lisparray-copy-value"></a>
<code>&forall; :T. <a href="#coalton-lisparray-lisparray-type">LispArray</a> :T &rarr; <a href="#coalton-lisparray-lisparray-type">LispArray</a> :T</code>

Make a deep copy of the `LispArray` `v`.



***

#### <a href="#coalton-lisparray-length-value"><code>(LENGTH V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.ct#L72-L75">src</a></sub></sup><a name="coalton-lisparray-length-value"></a>
<code>&forall; :T. <a href="#coalton-lisparray-lisparray-type">LispArray</a> :T &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Return the length of the `LispArray` `v`.



***

#### <a href="#coalton-lisparray-make-value"><code>(MAKE N X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.ct#L49-L56">src</a></sub></sup><a name="coalton-lisparray-make-value"></a>
<code>&forall; :T. <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-ufix-type">UFix</a> * :T &rarr; <a href="#coalton-lisparray-lisparray-type">LispArray</a> :T</code>

Make a new `LispArray` of length `n` initialized to `x`.

If the type of `x` represents a specialized array 



***

#### <a href="#coalton-lisparray-make-uninitialized-value"><code>(MAKE-UNINITIALIZED N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.ct#L61-L68">src</a></sub></sup><a name="coalton-lisparray-make-uninitialized-value"></a>
<code>&forall; :T. <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-lisparray-lisparray-type">LispArray</a> :T</code>

Make a new LispArray of length `n` that can store elements of type `:t`.

WARNING: The consequences are undefined if an uninitialized element is read before being set.




***

#### <a href="#coalton-lisparray-set!-value"><code>(SET! V I X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/lisparray.ct#L86-L91">src</a></sub></sup><a name="coalton-lisparray-set!-value"></a>
<code>&forall; :T. <a href="#coalton-lisparray-lisparray-type">LispArray</a> :T * <a href="#coalton-ufix-type">UFix</a> * :T &rarr; Void</code>

Set the `i`th value of the `LispArray` `v` to `x`.



***

# Package `COALTON/LIST`<a name="coalton-list-package"></a>


Immutable singly linked lists and list-processing utilities.

### Values

#### <a href="#coalton-list-all-value"><code>(ALL F? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L644-L651">src</a></sub></sup><a name="coalton-list-all-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns `True` if every element in `xs` matches `f?`.



***

#### <a href="#coalton-list-any-value"><code>(ANY F? L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L654-L661">src</a></sub></sup><a name="coalton-list-any-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns `True` if at least one element in `xs` matches `f?`.



***

#### <a href="#coalton-list-append-value"><code>(APPEND XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L330-L332">src</a></sub></sup><a name="coalton-list-append-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Appends two lists together and returns a new list.



***

#### <a href="#coalton-list-car-value"><code>(CAR X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L111-L115">src</a></sub></sup><a name="coalton-list-car-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; :A</code>

Return the traditional car of a list. This function is partial.



***

#### <a href="#coalton-list-cdr-value"><code>(CDR XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L119-L123">src</a></sub></sup><a name="coalton-list-cdr-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Return the traditional cdr of a list.



***

#### <a href="#coalton-list-combs-value"><code>(COMBS L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L672-L680">src</a></sub></sup><a name="coalton-list-combs-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A)</code>

Compute a list of all combinations of elements of `l`. This function sometimes goes by the name "power set" or "subsets".

The ordering of elements of `l` is preserved in the ordering of elements in each list produced by this function.



***

#### <a href="#coalton-list-combsof-value"><code>(COMBSOF N L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L683-L697">src</a></sub></sup><a name="coalton-list-combsof-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A)</code>

Produce a list of size-N subsets of `l`.

The ordering of elements of `l` is preserved in the ordering of elements in each list produced by `(combsOf n l)`.

This function is equivalent to all size-`n` elements of `(combs l)`.



***

#### <a href="#coalton-list-concat-value"><code>(CONCAT XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L336-L338">src</a></sub></sup><a name="coalton-list-concat-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A) &rarr; <a href="#coalton-list-type">List</a> :A</code>

Appends a list of lists together into a single new list.



***

#### <a href="#coalton-list-concatmap-value"><code>(CONCATMAP F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L342-L344">src</a></sub></sup><a name="coalton-list-concatmap-value"></a>
<code>&forall; :A :B. (:A &rarr; <a href="#coalton-list-type">List</a> :B) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :B</code>

Apply F to each element in XS and concatenate the results.



***

#### <a href="#coalton-list-cons?-value"><code>(CONS? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L148-L152">src</a></sub></sup><a name="coalton-list-cons?-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns TRUE if XS is a non-empty list.



***

#### <a href="#coalton-list-countby-value"><code>(COUNTBY F THINGS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L494-L501">src</a></sub></sup><a name="coalton-list-countby-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Count the number of items in THINGS that satisfy the predicate F.



***

#### <a href="#coalton-list-difference-value"><code>(DIFFERENCE XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L430-L432">src</a></sub></sup><a name="coalton-list-difference-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a new list with the first occurrence of each element in `ys` removed from `xs`.



***

#### <a href="#coalton-list-drop-value"><code>(DROP N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L194-L201">src</a></sub></sup><a name="coalton-list-drop-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a list with the first N elements removed.



***

#### <a href="#coalton-list-elemindex-value"><code>(ELEMINDEX X XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L291-L292">src</a></sub></sup><a name="coalton-list-elemindex-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a></code>


***

#### <a href="#coalton-list-equivalence-classes-value"><code>(EQUIVALENCE-CLASSES L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L605-L606">src</a></sub></sup><a name="coalton-list-equivalence-classes-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A)</code>


***

#### <a href="#coalton-list-equivalence-classes-by-value"><code>(EQUIVALENCE-CLASSES-BY F L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L593-L602">src</a></sub></sup><a name="coalton-list-equivalence-classes-by-value"></a>
<code>&forall; :A. (:A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A)</code>

Break a list into a list of equivalence classes according to an equivalence relation.



***

#### <a href="#coalton-list-filter-value"><code>(FILTER F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L246-L255">src</a></sub></sup><a name="coalton-list-filter-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a new list containing every element of XS that matches the predicate function F in the same order.



***

#### <a href="#coalton-list-find-value"><code>(FIND F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L236-L243">src</a></sub></sup><a name="coalton-list-find-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Returns the first element in a list matching the predicate function F.



***

#### <a href="#coalton-list-findindex-value"><code>(FINDINDEX F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L295-L304">src</a></sub></sup><a name="coalton-list-findindex-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a></code>

Returns the index of the first element matching the predicate function F.



***

#### <a href="#coalton-list-head-value"><code>(HEAD L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L96-L100">src</a></sub></sup><a name="coalton-list-head-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Returns the first element of a list.



***

#### <a href="#coalton-list-index-value"><code>(INDEX I XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L266-L273">src</a></sub></sup><a name="coalton-list-index-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Returns the Ith element of a list.



***

#### <a href="#coalton-list-init-value"><code>(INIT L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L134-L137">src</a></sub></sup><a name="coalton-list-init-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns every element except the last in a list.



***

#### <a href="#coalton-list-insert-value"><code>(INSERT E LS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L504-L506">src</a></sub></sup><a name="coalton-list-insert-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Inserts an element into a list at the first place it is less than or equal to the next element.



***

#### <a href="#coalton-list-insertby-value"><code>(INSERTBY CMP X YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L509-L519">src</a></sub></sup><a name="coalton-list-insertby-value"></a>
<code>&forall; :A. (:A * :A &rarr; <a href="#coalton-classes-ordering-type">Ordering</a>) * :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Generic version of insert



***

#### <a href="#coalton-list-insertions-value"><code>(INSERTIONS A L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L547-L557">src</a></sub></sup><a name="coalton-list-insertions-value"></a>
<code>&forall; :A. :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A)</code>

Produce a list of copies of `l`, each with A inserted at a possible position.

    (insertions 0 (make-list 1 2))
    ;; => ((0 1 2) (1 0 2) (1 2 0))




***

#### <a href="#coalton-list-intercalate-value"><code>(INTERCALATE XS XSS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L542-L544">src</a></sub></sup><a name="coalton-list-intercalate-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A) &rarr; <a href="#coalton-list-type">List</a> :A</code>

Intersperse `xs` into `xss` and then concatenate the result.



***

#### <a href="#coalton-list-intersection-value"><code>(INTERSECTION XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L373-L382">src</a></sub></sup><a name="coalton-list-intersection-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns elements which occur in both lists. Does not return duplicates and does not guarantee order.



***

#### <a href="#coalton-list-intersperse-value"><code>(INTERSPERSE E XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L535-L539">src</a></sub></sup><a name="coalton-list-intersperse-value"></a>
<code>&forall; :A. :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a new list by inserting `e` between every element of `xs`.



***

#### <a href="#coalton-list-last-value"><code>(LAST L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L126-L131">src</a></sub></sup><a name="coalton-list-last-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Returns the last element of a list.



***

#### <a href="#coalton-list-length-value"><code>(LENGTH L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L258-L263">src</a></sub></sup><a name="coalton-list-length-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Returns the length of a list.



***

#### <a href="#coalton-list-lookup-value"><code>(LOOKUP E XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L385-L394">src</a></sub></sup><a name="coalton-list-lookup-value"></a>
<code>&forall; :A :B. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; :A * <a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B) &rarr; <a href="#coalton-optional-type">Optional</a> :B</code>

Returns the value of the first (key, value) tuple in XS where the key matches E.



***

#### <a href="#coalton-list-maximum-value"><code>(MAXIMUM L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L624-L626">src</a></sub></sup><a name="coalton-list-maximum-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Returns a greatest element of a list, or `None`.



***

#### <a href="#coalton-list-member-value"><code>(MEMBER E XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L347-L354">src</a></sub></sup><a name="coalton-list-member-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns true if any element of XS is equal to E.



***

#### <a href="#coalton-list-minimum-value"><code>(MINIMUM L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L629-L631">src</a></sub></sup><a name="coalton-list-minimum-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Returns a least element of a list, or `None`.



***

#### <a href="#coalton-list-nth-value"><code>(NTH N L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L276-L278">src</a></sub></sup><a name="coalton-list-nth-value"></a>
<code>&forall; :T. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :T &rarr; :T</code>

Like INDEX, but errors if the index is not found.



***

#### <a href="#coalton-list-nth-cdr-value"><code>(NTH-CDR N L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L281-L288">src</a></sub></sup><a name="coalton-list-nth-cdr-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns the nth-cdr of a list.



***

#### <a href="#coalton-list-null?-value"><code>(NULL? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L141-L145">src</a></sub></sup><a name="coalton-list-null?-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns TRUE if XS is an empty list.



***

#### <a href="#coalton-list-optimumby-value"><code>(OPTIMUMBY F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L611-L621">src</a></sub></sup><a name="coalton-list-optimumby-value"></a>
<code>&forall; :A. (:A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Returns an optimum according to a total order.



***

#### <a href="#coalton-list-partition-value"><code>(PARTITION F XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L581-L590">src</a></sub></sup><a name="coalton-list-partition-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> (<a href="#coalton-list-type">List</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>

Splits a list into two new lists. The first list contains elements matching predicate F.



***

#### <a href="#coalton-list-perms-value"><code>(PERMS L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L664-L669">src</a></sub></sup><a name="coalton-list-perms-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A)</code>

Produce all permutations of the list L.



***

#### <a href="#coalton-list-product-value"><code>(PRODUCT XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L639-L641">src</a></sub></sup><a name="coalton-list-product-value"></a>
<code>&forall; :A. <a href="#coalton-classes-num-class">Num</a> :A &rArr; <a href="#coalton-list-type">List</a> :A &rarr; :A</code>

Returns the product of `xs`.



***

#### <a href="#coalton-list-range-value"><code>(RANGE START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L307-L322">src</a></sub></sup><a name="coalton-list-range-value"></a>
<code>&forall; :INT. (<a href="#coalton-classes-num-class">Num</a> :INT) (<a href="#coalton-classes-ord-class">Ord</a> :INT) &rArr; :INT * :INT &rarr; <a href="#coalton-list-type">List</a> :INT</code>

Returns a list containing the numbers from START to END inclusive, counting by 1.

    COALTON-USER> (coalton (range 1 5))
    (1 2 3 4 5)

    COALTON-USER> (coalton (range 5 2))
    (5 4 3 2)




***

#### <a href="#coalton-list-remove-value"><code>(REMOVE X YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L425-L427">src</a></sub></sup><a name="coalton-list-remove-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Return a new list with the first element equal to `x` removed.



***

#### <a href="#coalton-list-remove-duplicates-value"><code>(REMOVE-DUPLICATES XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L406-L408">src</a></sub></sup><a name="coalton-list-remove-duplicates-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a new list without duplicate elements.



***

#### <a href="#coalton-list-remove-if-value"><code>(REMOVE-IF PRED XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L420-L422">src</a></sub></sup><a name="coalton-list-remove-if-value"></a>
<code>&forall; :A. (:A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Return a new list with the first element for which PRED is `True` is removed.



***

#### <a href="#coalton-list-repeat-value"><code>(REPEAT N X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L167-L173">src</a></sub></sup><a name="coalton-list-repeat-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a list with the same value repeated multiple times.



***

#### <a href="#coalton-list-reverse-value"><code>(REVERSE XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L181-L184">src</a></sub></sup><a name="coalton-list-reverse-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a new list containing the same elements in reverse order.



***

#### <a href="#coalton-list-singleton-value"><code>(SINGLETON X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L155-L157">src</a></sub></sup><a name="coalton-list-singleton-value"></a>
<code>&forall; :A. :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a list containing one element.



***

#### <a href="#coalton-list-singleton?-value"><code>(SINGLETON? XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L160-L164">src</a></sub></sup><a name="coalton-list-singleton?-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `xs` a list containing exactly one element?



***

#### <a href="#coalton-list-sort-value"><code>(SORT XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L522-L524">src</a></sub></sup><a name="coalton-list-sort-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Sort `xs`.



***

#### <a href="#coalton-list-sortby-value"><code>(SORTBY CMP XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L527-L532">src</a></sub></sup><a name="coalton-list-sortby-value"></a>
<code>&forall; :A. (:A * :A &rarr; <a href="#coalton-classes-ordering-type">Ordering</a>) * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Sort `xs` by a custom comparison function `cmp`.



***

#### <a href="#coalton-list-split-around-value"><code>(SPLIT-AROUND N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L229-L233">src</a></sub></sup><a name="coalton-list-split-around-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-tuple-tuple3-type">Tuple3</a> (<a href="#coalton-list-type">List</a> :A) (<a href="#coalton-optional-type">Optional</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>

Splits a list around N into a Tuple of the first N elements, the element at index N, and a tail of all remaining elements. N must be a valid index.



***

#### <a href="#coalton-list-split-at-value"><code>(SPLIT-AT N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L217-L226">src</a></sub></sup><a name="coalton-list-split-at-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> (<a href="#coalton-list-type">List</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>

Splits a list into a Tuple of the first N elements and all remaining elements. The return value is equivalent to `(Tuple (take n xs) (drop n xs)`.



***

#### <a href="#coalton-list-sum-value"><code>(SUM XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L634-L636">src</a></sub></sup><a name="coalton-list-sum-value"></a>
<code>&forall; :A. <a href="#coalton-classes-num-class">Num</a> :A &rArr; <a href="#coalton-list-type">List</a> :A &rarr; :A</code>

Returns the sum of `xs`.



***

#### <a href="#coalton-list-tail-value"><code>(TAIL L)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L104-L108">src</a></sub></sup><a name="coalton-list-tail-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> (<a href="#coalton-list-type">List</a> :A)</code>

Returns every element except the first in a list.



***

#### <a href="#coalton-list-take-value"><code>(TAKE N XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L204-L214">src</a></sub></sup><a name="coalton-list-take-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns the first N elements of a list.



***

#### <a href="#coalton-list-transpose-value"><code>(TRANSPOSE XS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L560-L578">src</a></sub></sup><a name="coalton-list-transpose-value"></a>
<code>&forall; :A. <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A) &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-list-type">List</a> :A)</code>

Transposes a matrix represented by a list of lists.



***

#### <a href="#coalton-list-union-value"><code>(UNION XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L357-L370">src</a></sub></sup><a name="coalton-list-union-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :A &rarr; <a href="#coalton-list-type">List</a> :A</code>

Returns a new list with the elements from both XS and YS and without duplicates.



***

#### <a href="#coalton-list-zip-value"><code>(ZIP XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L489-L491">src</a></sub></sup><a name="coalton-list-zip-value"></a>
<code>&forall; :A :B. <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :B &rarr; <a href="#coalton-list-type">List</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>

Builds a list of tuples with the elements of XS and YS.



***

#### <a href="#coalton-list-zipwith-value"><code>(ZIPWITH F XS YS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L435-L444">src</a></sub></sup><a name="coalton-list-zipwith-value"></a>
<code>&forall; :A :B :C. (:A * :B &rarr; :C) * <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :B &rarr; <a href="#coalton-list-type">List</a> :C</code>

Builds a new list by calling `f` with elements of `xs` and `ys`.



***

#### <a href="#coalton-list-zipwith3-value"><code>(ZIPWITH3 F XS YS ZS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L447-L457">src</a></sub></sup><a name="coalton-list-zipwith3-value"></a>
<code>&forall; :A :B :C :D. (:A * :B * :C &rarr; :D) * <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :B * <a href="#coalton-list-type">List</a> :C &rarr; <a href="#coalton-list-type">List</a> :D</code>

Build a new list by calling F with elements of XS, YS and ZS



***

#### <a href="#coalton-list-zipwith4-value"><code>(ZIPWITH4 F AS BS CS DS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L460-L471">src</a></sub></sup><a name="coalton-list-zipwith4-value"></a>
<code>&forall; :A :B :C :D :E. (:A * :B * :C * :D &rarr; :E) * <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :B * <a href="#coalton-list-type">List</a> :C * <a href="#coalton-list-type">List</a> :D &rarr; <a href="#coalton-list-type">List</a> :E</code>

Build a new list by calling F with elements of AS, BS, CS and DS



***

#### <a href="#coalton-list-zipwith5-value"><code>(ZIPWITH5 F AS BS CS DS ES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/list.ct#L474-L486">src</a></sub></sup><a name="coalton-list-zipwith5-value"></a>
<code>&forall; :A :B :C :D :E :F. (:A * :B * :C * :D * :E &rarr; :F) * <a href="#coalton-list-type">List</a> :A * <a href="#coalton-list-type">List</a> :B * <a href="#coalton-list-type">List</a> :C * <a href="#coalton-list-type">List</a> :D * <a href="#coalton-list-type">List</a> :E &rarr; <a href="#coalton-list-type">List</a> :F</code>

Build a new list by calling F with elements of AS, BS, CS, DS and ES



***

### Macros

#### <a href="#coalton-list-make-macro"><code>MAKE (&amp;REST ELEMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-list-make-macro"></a>

Make a homogeneous list of `elements`. Synonym for `coalton:make-list`.



***

# Package `COALTON/MATH/ARITH`<a name="coalton-math-arith-package"></a>

### Classes

#### <a href="#coalton-math-arith-dividable-class"><code>Dividable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L62-L84">src</a></sub></sup><a name="coalton-math-arith-dividable-class"></a>
<code><a href="#coalton-math-arith-dividable-class">Dividable</a> :ARG-TYPE :RES-TYPE</code>


The representation of a type such that division within that type possibly results in another type. For instance,


    (Dividable Integer Fraction)


establishes that division of two `Integer`s can result in a `Fraction`, whereas


    (Dividable F32 F32)


establishes that division of two `F32`s can result in a `F32`.

Note that `Dividable` does *not* establish a default result type; you must constrain the result type yourself.

The function `general/` is partial, and will error produce a run-time error if the divisor is zero.


Methods:
- <code>GENERAL/ :: :ARG-TYPE * :ARG-TYPE &rarr; :RES-TYPE</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :A &rArr; <a href="#coalton-math-arith-dividable-class">Dividable</a> :A :A</code>

</details>



***

#### <a href="#coalton-math-arith-reciprocable-class"><code>Reciprocable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L49-L60">src</a></sub></sup><a name="coalton-math-arith-reciprocable-class"></a>
<code><a href="#coalton-classes-num-class">Num</a> :A &rArr; <a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :A</code>


Any number with a multiplicative inverse (reciprocal) where:


    1 = (* (reciprocal x) x) = (* x (reciprocal x))
    (/ x y) = (* x (reciprocal y))


If no reciprocal exists for an element, produce a run-time error (e.g., zero).


Methods:
- <code>/ :: :A * :A &rarr; :A</code>
- <code>RECIPROCAL :: :A &rarr; :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T &rArr; <a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T &rArr; <a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code>(<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

#### <a href="#coalton-math-arith-transfinite-class"><code>Transfinite</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L90-L95">src</a></sub></sup><a name="coalton-math-arith-transfinite-class"></a>
<code><a href="#coalton-math-arith-transfinite-class">Transfinite</a> :A</code>


Numeric type with a value for (positive) infinity and/or NaN.

Methods:
- <code>INFINITY :: :A</code>
- <code>INFINITE? :: :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>
- <code>NAN :: :A</code>
- <code>NAN? :: :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-arith-transfinite-class">Transfinite</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-arith-transfinite-class">Transfinite</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-arith-transfinite-class">Transfinite</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

### Values

#### <a href="#coalton-math-arith-1+-value"><code>(1+ NUM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L184-L186">src</a></sub></sup><a name="coalton-math-arith-1+-value"></a>
<code>&forall; :NUM. <a href="#coalton-classes-num-class">Num</a> :NUM &rArr; :NUM &rarr; :NUM</code>

Increment `num`.



***

#### <a href="#coalton-math-arith-1--value"><code>(1- NUM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L190-L192">src</a></sub></sup><a name="coalton-math-arith-1--value"></a>
<code>&forall; :NUM. <a href="#coalton-classes-num-class">Num</a> :NUM &rArr; :NUM &rarr; :NUM</code>

Decrement `num`.



***

#### <a href="#coalton-math-arith-abs-value"><code>(ABS X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L160-L164">src</a></sub></sup><a name="coalton-math-arith-abs-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-ord-class">Ord</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) &rArr; :A &rarr; :A</code>

Absolute value of `x`.



***

#### <a href="#coalton-math-arith-ash-value"><code>(ASH X N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L177-L180">src</a></sub></sup><a name="coalton-math-arith-ash-value"></a>
<code><a href="#coalton-integer-type">Integer</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

Compute the "arithmetic shift" of `x` by `n`.



***

#### <a href="#coalton-math-arith-finite?-value"><code>(FINITE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L98-L100">src</a></sub></sup><a name="coalton-math-arith-finite?-value"></a>
<code>&forall; :A. <a href="#coalton-math-arith-transfinite-class">Transfinite</a> :A &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Neither infinite or NaN.



***

#### <a href="#coalton-math-arith-negate-value"><code>(NEGATE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L154-L156">src</a></sub></sup><a name="coalton-math-arith-negate-value"></a>
<code>&forall; :A. <a href="#coalton-classes-num-class">Num</a> :A &rArr; :A &rarr; :A</code>

The negation, or additive inverse, of `x`.



***

#### <a href="#coalton-math-arith-negative?-value"><code>(NEGATIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L202-L204">src</a></sub></sup><a name="coalton-math-arith-negative?-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-num-class">Num</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :A) &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` negative?



***

#### <a href="#coalton-math-arith-nonnegative?-value"><code>(NONNEGATIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L214-L216">src</a></sub></sup><a name="coalton-math-arith-nonnegative?-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-num-class">Num</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :A) &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` not negative?



***

#### <a href="#coalton-math-arith-nonpositive?-value"><code>(NONPOSITIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L208-L210">src</a></sub></sup><a name="coalton-math-arith-nonpositive?-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-num-class">Num</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :A) &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` not positive?



***

#### <a href="#coalton-math-arith-nonzero?-value"><code>(NONZERO? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L226-L228">src</a></sub></sup><a name="coalton-math-arith-nonzero?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-num-class">Num</a> :A &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` not zero?



***

#### <a href="#coalton-math-arith-positive?-value"><code>(POSITIVE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L196-L198">src</a></sub></sup><a name="coalton-math-arith-positive?-value"></a>
<code>&forall; :A. (<a href="#coalton-classes-num-class">Num</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :A) &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` positive?



***

#### <a href="#coalton-math-arith-sign-value"><code>(SIGN X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L168-L173">src</a></sub></sup><a name="coalton-math-arith-sign-value"></a>
<code>&forall; :A :B. (<a href="#coalton-classes-ord-class">Ord</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) (<a href="#coalton-classes-num-class">Num</a> :B) &rArr; :A &rarr; :B</code>

The sign of `x`, where `(sign 0) = 0`.



***

#### <a href="#coalton-math-arith-zero?-value"><code>(ZERO? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L220-L222">src</a></sub></sup><a name="coalton-math-arith-zero?-value"></a>
<code>&forall; :A. <a href="#coalton-classes-num-class">Num</a> :A &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `x` zero?



***

#### <a href="#coalton-math-arith-negative-infinity-value"><code>NEGATIVE-INFINITY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/arith.ct#L103-L104">src</a></sub></sup><a name="coalton-math-arith-negative-infinity-value"></a>
<code>&forall; :A. (<a href="#coalton-math-arith-transfinite-class">Transfinite</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) &rArr; :A</code>


***

# Package `COALTON/MATH/BOUNDED`<a name="coalton-math-bounded-package"></a>

### Classes

#### <a href="#coalton-math-bounded-bounded-class"><code>Bounded</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/bounded.ct#L20-L23">src</a></sub></sup><a name="coalton-math-bounded-bounded-class"></a>
<code><a href="#coalton-math-bounded-bounded-class">Bounded</a> :A</code>


Types which have a maximum and minumum bound.

Methods:
- <code>MINBOUND :: :A</code>
- <code>MAXBOUND :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-bounded-bounded-class">Bounded</a> <a href="#coalton-bit-type">Bit</a></code>

</details>



***

# Package `COALTON/MATH/COMPLEX`<a name="coalton-math-complex-package"></a>

### Types

#### <a href="#coalton-math-complex-complex-type"><code>Complex</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.ct#L37-L46">src</a></sub></sup><a name="coalton-math-complex-complex-type"></a>

A complex number with a real and imaginary component.

This object does not have any public constructors. Instead, use the
function `complex` of the `ComplexComponent` type class.

A `Complex` object may either have a native or constructed
representation. See the `ComplexComponent` type class for allowed
component types.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A) (<a href="#coalton-classes-into-class">Into</a> :A <a href="#coalton-xmath-computable-reals-creal-type">CReal</a>) &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A) (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a>)</code>
- <code>(<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :A) &rArr; <a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code>(<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :T) (<a href="#coalton-classes-into-class">Into</a> :T (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)) &rArr; <a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :T) (<a href="#coalton-math-complex-complex-type">Complex</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T))</code>
- <code>(<a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T) (<a href="#coalton-show-show-class">Show</a> :T) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :T)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-classes-into-class">Into</a> :A (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> :A &rArr; <a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> :A &rArr; <a href="#coalton-math-elementary-radical-class">Radical</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> :A &rArr; <a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>
- <code><a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-xmath-fft-fftfield-class">FFTField</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>
- <code><a href="#coalton-xmath-fft-fftfield-class">FFTField</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-xmath-fft-fftgroup-class">FFTGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>
- <code><a href="#coalton-xmath-fft-fftgroup-class">FFTGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-xmath-fft-fftring-class">FFTRing</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>
- <code><a href="#coalton-xmath-fft-fftring-class">FFTRing</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :T)</code>

</details>



***

### Classes

#### <a href="#coalton-math-complex-complexcomponent-class"><code>ComplexComponent</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.ct#L79-L84">src</a></sub></sup><a name="coalton-math-complex-complexcomponent-class"></a>
<code><a href="#coalton-classes-num-class">Num</a> :A &rArr; <a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A</code>


A type class for describing complex component types. This type class
also encodes the construction and projection of `Complex` data types.

Methods:
- <code>COMPLEX :: :A * :A &rarr; <a href="#coalton-math-complex-complex-type">Complex</a> :A</code>
- <code>REAL-PART :: <a href="#coalton-math-complex-complex-type">Complex</a> :A &rarr; :A</code>
- <code>IMAG-PART :: <a href="#coalton-math-complex-complex-type">Complex</a> :A &rarr; :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :T &rArr; <a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

### Values

#### <a href="#coalton-math-complex-conjugate-value"><code>(CONJUGATE Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.ct#L93-L95">src</a></sub></sup><a name="coalton-math-complex-conjugate-value"></a>
<code>&forall; :A. <a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-math-complex-complex-type">Complex</a> :A &rarr; <a href="#coalton-math-complex-complex-type">Complex</a> :A</code>

The complex conjugate. If $z=a+bi$ then the conjugate $\bar z=a-bi$.



***

#### <a href="#coalton-math-complex-square-magnitude-value"><code>(SQUARE-MAGNITUDE Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.ct#L99-L104">src</a></sub></sup><a name="coalton-math-complex-square-magnitude-value"></a>
<code>&forall; :A. <a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-math-complex-complex-type">Complex</a> :A &rarr; :A</code>

The squared length of a complex number:
$$\vert z\vert^2=(\operatorname{Re} z)^2+(\operatorname{Im} z)^2.$$



***

#### <a href="#coalton-math-complex-ii-value"><code>II</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/complex.ct#L107-L110">src</a></sub></sup><a name="coalton-math-complex-ii-value"></a>
<code>&forall; :A. <a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A &rArr; <a href="#coalton-math-complex-complex-type">Complex</a> :A</code>

The complex unit $i=\sqrt{-1}$. (The double `ii` represents a
blackboard-bold 𝕚.)



***

# Package `COALTON/MATH/ELEMENTARY`<a name="coalton-math-elementary-package"></a>

### Classes

#### <a href="#coalton-math-elementary-elementary-class"><code>Elementary</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L122-L126">src</a></sub></sup><a name="coalton-math-elementary-elementary-class"></a>
<code>(<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :A) (<a href="#coalton-math-elementary-polar-class">Polar</a> :A) (<a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :A) (<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :A) (<a href="#coalton-math-elementary-radical-class">Radical</a> :A) &rArr; <a href="#coalton-math-elementary-elementary-class">Elementary</a> :A</code>


`Elementary` is a marker class, providing `Reciprocable`, `Polar`, `Trigonometric`, `Exponentiable`, and `Radical`.

Methods:
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

#### <a href="#coalton-math-elementary-exponentiable-class"><code>Exponentiable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L72-L84">src</a></sub></sup><a name="coalton-math-elementary-exponentiable-class"></a>
<code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :A</code>


Exponential maps obeying:

    (* (exp x) (exp y)) = (exp (+ x y))
    (exp (ln x)) = x = (ln (exp x))
    (log b x) = (/ (ln x) (ln b))
    (pow x y) = (exp (* y (ln x)))


Methods:
- <code>EXP :: :A &rarr; :A</code>
- <code>POW :: :A * :A &rarr; :A</code>
- <code>LN :: :A &rarr; :A</code>
- <code>LOG :: :A * :A &rarr; :A</code>
- <code>EE :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code>(<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) &rArr; <a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code>(<a href="#coalton-classes-num-class">Num</a> :T) (<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) &rArr; <a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> :A &rArr; <a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

#### <a href="#coalton-math-elementary-polar-class"><code>Polar</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L93-L103">src</a></sub></sup><a name="coalton-math-elementary-polar-class"></a>
<code>(<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) &rArr; <a href="#coalton-math-elementary-polar-class">Polar</a> :A</code>


This type class includes `ComplexComponent` types that admit a magnitude and phase.

For a complex number `z = (complex x y)`, the following identities hold:

    z = (* (magnitude z) (exp (* ii (phase z))))
    (polar z) = (values (magnitude z) (phase z))
    (phase z) = (atan2 y x)


Methods:
- <code>PHASE :: <a href="#coalton-math-complex-complex-type">Complex</a> :A &rarr; :A</code>
- <code>POLAR :: <a href="#coalton-math-complex-complex-type">Complex</a> :A &rarr; :A * :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

#### <a href="#coalton-math-elementary-radical-class"><code>Radical</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L86-L91">src</a></sub></sup><a name="coalton-math-elementary-radical-class"></a>
<code><a href="#coalton-math-elementary-radical-class">Radical</a> :A</code>


Obeys:

    (^ (sqrt x) 2) = x = (^^ (nth-root n x) n)

Methods:
- <code>NTH-ROOT :: <a href="#coalton-integer-type">Integer</a> * :A &rarr; :A</code>
- <code>SQRT :: :A &rarr; :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code>(<a href="#coalton-math-elementary-radical-class">Radical</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) &rArr; <a href="#coalton-math-elementary-radical-class">Radical</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code>(<a href="#coalton-classes-num-class">Num</a> :T) (<a href="#coalton-math-elementary-radical-class">Radical</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) &rArr; <a href="#coalton-math-elementary-radical-class">Radical</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> :A &rArr; <a href="#coalton-math-elementary-radical-class">Radical</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

#### <a href="#coalton-math-elementary-trigonometric-class"><code>Trigonometric</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L44-L52">src</a></sub></sup><a name="coalton-math-elementary-trigonometric-class"></a>
<code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :A</code>


Standard circular functions and their inverses.

Methods:
- <code>SIN :: :A &rarr; :A</code>
- <code>COS :: :A &rarr; :A</code>
- <code>TAN :: :A &rarr; :A</code>
- <code>ASIN :: :A &rarr; :A</code>
- <code>ACOS :: :A &rarr; :A</code>
- <code>ATAN :: :A &rarr; :A</code>
- <code>PI :: :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code>(<a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-radical-class">Radical</a> :T) &rArr; <a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code>(<a href="#coalton-classes-num-class">Num</a> :T) (<a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-radical-class">Radical</a> :T) &rArr; <a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> :A &rArr; <a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :A)</code>
- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-f32-type">F32</a></code>

</details>



***

### Values

#### <a href="#coalton-math-elementary-acosh-value"><code>(ACOSH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L147-L148">src</a></sub></sup><a name="coalton-math-elementary-acosh-value"></a>
<code>&forall; :F. <a href="#coalton-math-elementary-elementary-class">Elementary</a> :F &rArr; :F &rarr; :F</code>


***

#### <a href="#coalton-math-elementary-asinh-value"><code>(ASINH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L143-L144">src</a></sub></sup><a name="coalton-math-elementary-asinh-value"></a>
<code>&forall; :F. <a href="#coalton-math-elementary-elementary-class">Elementary</a> :F &rArr; :F &rarr; :F</code>


***

#### <a href="#coalton-math-elementary-atan2-value"><code>(ATAN2 Y X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L60-L70">src</a></sub></sup><a name="coalton-math-elementary-atan2-value"></a>
<code>&forall; :F. (<a href="#coalton-classes-ord-class">Ord</a> :F) (<a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :F) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :F) &rArr; :F * :F &rarr; :F</code>

Computes the two-argument arctangent of `y` and `x`, which is roughly the same
as `(atan (/ y x))` when defined and accounting for the quadrant of
the point $(\mathtt{x},\mathtt{y})$.



***

#### <a href="#coalton-math-elementary-atanh-value"><code>(ATANH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L151-L152">src</a></sub></sup><a name="coalton-math-elementary-atanh-value"></a>
<code>&forall; :F. <a href="#coalton-math-elementary-elementary-class">Elementary</a> :F &rArr; :F &rarr; :F</code>


***

#### <a href="#coalton-math-elementary-cis-value"><code>(CIS Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L113-L120">src</a></sub></sup><a name="coalton-math-elementary-cis-value"></a>
<code>&forall; :A. (<a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :A) (<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A) &rArr; :A &rarr; <a href="#coalton-math-complex-complex-type">Complex</a> :A</code>

A point on the complex unit circle:


    (cis z) := (exp (complex 0 z))
             = (complex (cos z) (sin z))




***

#### <a href="#coalton-math-elementary-cosh-value"><code>(COSH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L135-L136">src</a></sub></sup><a name="coalton-math-elementary-cosh-value"></a>
<code>&forall; :F. <a href="#coalton-math-elementary-elementary-class">Elementary</a> :F &rArr; :F &rarr; :F</code>


***

#### <a href="#coalton-math-elementary-magnitude-value"><code>(MAGNITUDE Z)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L105-L110">src</a></sub></sup><a name="coalton-math-elementary-magnitude-value"></a>
<code>&forall; :A. (<a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :A) (<a href="#coalton-math-elementary-radical-class">Radical</a> :A) &rArr; <a href="#coalton-math-complex-complex-type">Complex</a> :A &rarr; :A</code>

The magnitude of a complex number. For `z = x + yi`,


    (magnitude z) = (sqrt (+ (^ x 2) (^ y 2)))



***

#### <a href="#coalton-math-elementary-sincos-value"><code>(SINCOS X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L55-L57">src</a></sub></sup><a name="coalton-math-elementary-sincos-value"></a>
<code>&forall; :A. <a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :A &rArr; :A &rarr; :A * :A</code>

Computes the sine and cosine of X.



***

#### <a href="#coalton-math-elementary-sinh-value"><code>(SINH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L131-L132">src</a></sub></sup><a name="coalton-math-elementary-sinh-value"></a>
<code>&forall; :F. <a href="#coalton-math-elementary-elementary-class">Elementary</a> :F &rArr; :F &rarr; :F</code>


***

#### <a href="#coalton-math-elementary-tanh-value"><code>(TANH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/elementary.ct#L139-L140">src</a></sub></sup><a name="coalton-math-elementary-tanh-value"></a>
<code>&forall; :F. <a href="#coalton-math-elementary-elementary-class">Elementary</a> :F &rArr; :F &rarr; :F</code>


***

# Package `COALTON/MATH/FRACTION`<a name="coalton-math-fraction-package"></a>

### Values

#### <a href="#coalton-math-fraction-denominator-value"><code>(DENOMINATOR Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.ct#L40-L44">src</a></sub></sup><a name="coalton-math-fraction-denominator-value"></a>
<code><a href="#coalton-fraction-type">Fraction</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

The denominator of a fraction.



***

#### <a href="#coalton-math-fraction-mkfraction-value"><code>(MKFRACTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.ct#L28-L30">src</a></sub></sup><a name="coalton-math-fraction-mkfraction-value"></a>
<code><a href="#coalton-integer-type">Integer</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-fraction-type">Fraction</a></code>


***

#### <a href="#coalton-math-fraction-numerator-value"><code>(NUMERATOR Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/fraction.ct#L33-L37">src</a></sub></sup><a name="coalton-math-fraction-numerator-value"></a>
<code><a href="#coalton-fraction-type">Fraction</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

The numerator of a fraction.



***

# Package `COALTON/MATH/INTEGRAL`<a name="coalton-math-integral-package"></a>

### Classes

#### <a href="#coalton-math-integral-integral-class"><code>Integral</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L59-L62">src</a></sub></sup><a name="coalton-math-integral-integral-class"></a>
<code>(<a href="#coalton-math-integral-remainder-class">Remainder</a> :INT) (<a href="#coalton-classes-ord-class">Ord</a> :INT) &rArr; <a href="#coalton-math-integral-integral-class">Integral</a> :INT</code>


Integral is a number that is either even or odd where `div` and `quot`
are floored and truncated division, respectively.

Methods:
- <code>TOINTEGER :: :INT &rarr; <a href="#coalton-integer-type">Integer</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-integral-integral-class">Integral</a> <a href="#coalton-integer-type">Integer</a></code>

</details>



***

#### <a href="#coalton-math-integral-remainder-class"><code>Remainder</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L44-L57">src</a></sub></sup><a name="coalton-math-integral-remainder-class"></a>
<code><a href="#coalton-classes-num-class">Num</a> :A &rArr; <a href="#coalton-math-integral-remainder-class">Remainder</a> :A</code>


Remainder is typically an integral domain satisfying:

```
a = (+ (* b (quot a b)) (rem a b))
a = (+ (* b (div a b)) (mod a b))
```


Methods:
- <code>QUOT :: :A * :A &rarr; :A</code>
- <code>REM :: :A * :A &rarr; :A</code>
- <code>QUOTREM :: :A * :A &rarr; :A * :A</code>
- <code>DIV :: :A * :A &rarr; :A</code>
- <code>MOD :: :A * :A &rarr; :A</code>
- <code>DIVMOD :: :A * :A &rarr; :A * :A</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-integral-remainder-class">Remainder</a> <a href="#coalton-integer-type">Integer</a></code>

</details>



***

### Values

#### <a href="#coalton-math-integral-even?-value"><code>(EVEN? N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L81-L83">src</a></sub></sup><a name="coalton-math-integral-even?-value"></a>
<code>&forall; :A. <a href="#coalton-math-integral-integral-class">Integral</a> :A &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is N even?



***

#### <a href="#coalton-math-integral-gcd-value"><code>(GCD A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L124-L127">src</a></sub></sup><a name="coalton-math-integral-gcd-value"></a>
<code>&forall; :A. (<a href="#coalton-math-integral-remainder-class">Remainder</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :A) &rArr; :A * :A &rarr; :A</code>

The greatest common divisor of A and B.



***

#### <a href="#coalton-math-integral-ilog-value"><code>(ILOG B X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L149-L165">src</a></sub></sup><a name="coalton-math-integral-ilog-value"></a>
<code>&forall; :INT. <a href="#coalton-math-integral-integral-class">Integral</a> :INT &rArr; :INT * :INT &rarr; :INT</code>

The floor of the logarithm with base B > 1 of X >= 1.



***

#### <a href="#coalton-math-integral-integral->num-value"><code>(INTEGRAL-&gt;NUM N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L66-L68">src</a></sub></sup><a name="coalton-math-integral-integral->num-value"></a>
<code>&forall; :A :B. (<a href="#coalton-math-integral-integral-class">Integral</a> :A) (<a href="#coalton-classes-num-class">Num</a> :B) &rArr; :A &rarr; :B</code>

Converts any Integral N into any Num.



***

#### <a href="#coalton-math-integral-isqrt-value"><code>(ISQRT X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L168-L179">src</a></sub></sup><a name="coalton-math-integral-isqrt-value"></a>
<code>&forall; :INT. <a href="#coalton-math-integral-integral-class">Integral</a> :INT &rArr; :INT &rarr; :INT</code>

The floor of the square root of N > 0.



***

#### <a href="#coalton-math-integral-lcm-value"><code>(LCM A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L130-L134">src</a></sub></sup><a name="coalton-math-integral-lcm-value"></a>
<code>&forall; :A. (<a href="#coalton-math-integral-remainder-class">Remainder</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :A) &rArr; :A * :A &rarr; :A</code>

The least common multiple of A and B.



***

#### <a href="#coalton-math-integral-lsh-value"><code>(LSH X N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L76-L78">src</a></sub></sup><a name="coalton-math-integral-lsh-value"></a>
<code>&forall; :B :N. (<a href="#coalton-math-integral-integral-class">Integral</a> :N) (<a href="#coalton-bits-bits-class">Bits</a> :B) &rArr; :B * :N &rarr; :B</code>

Left shift X by N



***

#### <a href="#coalton-math-integral-odd?-value"><code>(ODD? N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L86-L88">src</a></sub></sup><a name="coalton-math-integral-odd?-value"></a>
<code>&forall; :A. <a href="#coalton-math-integral-integral-class">Integral</a> :A &rArr; :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is N odd?



***

#### <a href="#coalton-math-integral-rsh-value"><code>(RSH X N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L71-L73">src</a></sub></sup><a name="coalton-math-integral-rsh-value"></a>
<code>&forall; :B :N. (<a href="#coalton-math-integral-integral-class">Integral</a> :N) (<a href="#coalton-bits-bits-class">Bits</a> :B) &rArr; :B * :N &rarr; :B</code>

Right shift X by N



***

#### <a href="#coalton-math-integral-^-value"><code>(^ BASE POWER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L91-L114">src</a></sub></sup><a name="coalton-math-integral-^-value"></a>
<code>&forall; :A :INT. (<a href="#coalton-classes-num-class">Num</a> :A) (<a href="#coalton-math-integral-integral-class">Integral</a> :INT) &rArr; :A * :INT &rarr; :A</code>

Exponentiate BASE to a non-negative POWER.



***

#### <a href="#coalton-math-integral-^^-value"><code>(^^ BASE POWER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/integral.ct#L117-L121">src</a></sub></sup><a name="coalton-math-integral-^^-value"></a>
<code>&forall; :A :INT. (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :A) (<a href="#coalton-math-integral-integral-class">Integral</a> :INT) &rArr; :A * :INT &rarr; :A</code>

Exponentiate BASE to a signed POWER.



***

# Package `COALTON/MATH/REAL`<a name="coalton-math-real-package"></a>

### Structs

#### <a href="#coalton-math-real-quantization-type"><code>Quantization #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L227-L238">src</a></sub></sup><a name="coalton-math-real-quantization-type"></a>

Represents an integer quantization of `:a`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-math-real-quantization-type">Quantization</a> :|0|)</code>

</details>



***

### Classes

#### <a href="#coalton-math-real-quantizable-class"><code>Quantizable</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L43-L63">src</a></sub></sup><a name="coalton-math-real-quantizable-class"></a>
<code><a href="#coalton-math-real-quantizable-class">Quantizable</a> :A</code>


The representation of a type that allows for rounding operations


    max x such that (floor x) <= x
    min x such that (ceiling x) <= x

And


    (proper x) = (values (truncate x) (- x (truncate x)))


where


    (truncate x) = (* (sign x) (floor (abs x))


Methods:
- <code>PROPER :: :A &rarr; <a href="#coalton-integer-type">Integer</a> * :A</code>
- <code>FLOOR :: :A &rarr; <a href="#coalton-integer-type">Integer</a></code>
- <code>CEILING :: :A &rarr; <a href="#coalton-integer-type">Integer</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-bit-type">Bit</a></code>

</details>



***

#### <a href="#coalton-math-real-rational-class"><code>Rational</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L69-L82">src</a></sub></sup><a name="coalton-math-real-rational-class"></a>
<code>(<a href="#coalton-math-real-real-class">Real</a> :A) (<a href="#coalton-classes-ord-class">Ord</a> :A) &rArr; <a href="#coalton-math-real-rational-class">Rational</a> :A</code>


Any number that can be exactly represented by a fraction, or is not finite.

If a rational can be converted from a fraction it must satisfy:


    (into (to-fraction x)) = x
    (into (best-approx x)) = x


Furthermore, `best-approx` returns the simplest fraction, and both functions may be partial.


Methods:
- <code>TO-FRACTION :: :A &rarr; <a href="#coalton-fraction-type">Fraction</a></code>
- <code>BEST-APPROX :: :A &rarr; <a href="#coalton-fraction-type">Fraction</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-bit-type">Bit</a></code>

</details>



***

#### <a href="#coalton-math-real-real-class"><code>Real</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L65-L67">src</a></sub></sup><a name="coalton-math-real-real-class"></a>
<code>(<a href="#coalton-math-real-quantizable-class">Quantizable</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) &rArr; <a href="#coalton-math-real-real-class">Real</a> :A</code>


A real number that can be approximated with abs(real-approx x - x) < 2^-n.

Methods:
- <code>REAL-APPROX :: <a href="#coalton-ufix-type">UFix</a> * :A &rarr; <a href="#coalton-fraction-type">Fraction</a></code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-bit-type">Bit</a></code>

</details>



***

### Values

#### <a href="#coalton-math-real-ceiling/-value"><code>(CEILING/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L288-L290">src</a></sub></sup><a name="coalton-math-real-ceiling/-value"></a>
<code><a href="#coalton-integer-type">Integer</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

Divide two integers and compute the ceiling of the quotient.



***

#### <a href="#coalton-math-real-exact/-value"><code>(EXACT/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L270-L272">src</a></sub></sup><a name="coalton-math-real-exact/-value"></a>
<code><a href="#coalton-integer-type">Integer</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-fraction-type">Fraction</a></code>

Exactly divide two integers and produce a fraction.



***

#### <a href="#coalton-math-real-floor/-value"><code>(FLOOR/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L283-L285">src</a></sub></sup><a name="coalton-math-real-floor/-value"></a>
<code><a href="#coalton-integer-type">Integer</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

Divide two integers and compute the floor of the quotient.



***

#### <a href="#coalton-math-real-fromfrac-value"><code>(FROMFRAC Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L298-L304">src</a></sub></sup><a name="coalton-math-real-fromfrac-value"></a>
<code>&forall; :A. <a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> :A &rArr; <a href="#coalton-fraction-type">Fraction</a> &rarr; :A</code>

Converts a fraction to a target type.

Specifically, target types must have an instance of `Dividable Integer :a`.

This conversion may result in loss of fidelity.



***

#### <a href="#coalton-math-real-inexact/-value"><code>(INEXACT/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L276-L280">src</a></sub></sup><a name="coalton-math-real-inexact/-value"></a>
<code><a href="#coalton-integer-type">Integer</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-f64-type">F64</a></code>

Compute the quotient of integers as a double-precision float.

Note: This does *not* divide double-float arguments.



***

#### <a href="#coalton-math-real-quantize-value"><code>(QUANTIZE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L241-L249">src</a></sub></sup><a name="coalton-math-real-quantize-value"></a>
<code>&forall; :A. <a href="#coalton-math-real-real-class">Real</a> :A &rArr; :A &rarr; <a href="#coalton-math-real-quantization-type">Quantization</a> :A</code>

Given X, (QUANTIZE X) will return the least integer greater or equal to X,
and the greatest integer less than or equal to X, along with their respective
remainders expressed as values of type of X.



***

#### <a href="#coalton-math-real-round-value"><code>(ROUND X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L91-L118">src</a></sub></sup><a name="coalton-math-real-round-value"></a>
<code>&forall; :A. (<a href="#coalton-math-real-quantizable-class">Quantizable</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) &rArr; :A &rarr; <a href="#coalton-integer-type">Integer</a></code>

Return the nearest integer to X, with ties breaking towards even numbers.



***

#### <a href="#coalton-math-real-round-half-down-value"><code>(ROUND-HALF-DOWN X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L257-L259">src</a></sub></sup><a name="coalton-math-real-round-half-down-value"></a>
<code>&forall; :A. (<a href="#coalton-math-real-quantizable-class">Quantizable</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) &rArr; :A &rarr; <a href="#coalton-integer-type">Integer</a></code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <a href="#coalton-math-real-round-half-up-value"><code>(ROUND-HALF-UP X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L252-L254">src</a></sub></sup><a name="coalton-math-real-round-half-up-value"></a>
<code>&forall; :A. (<a href="#coalton-math-real-quantizable-class">Quantizable</a> :A) (<a href="#coalton-classes-num-class">Num</a> :A) &rArr; :A &rarr; <a href="#coalton-integer-type">Integer</a></code>

Return the nearest integer to X, with ties breaking toward positive infinity.



***

#### <a href="#coalton-math-real-round/-value"><code>(ROUND/ A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L293-L295">src</a></sub></sup><a name="coalton-math-real-round/-value"></a>
<code><a href="#coalton-integer-type">Integer</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

Divide two integers and round the quotient.



***

#### <a href="#coalton-math-real-safe/-value"><code>(SAFE/ X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L262-L266">src</a></sub></sup><a name="coalton-math-real-safe/-value"></a>
<code>&forall; :A :B. (<a href="#coalton-classes-num-class">Num</a> :A) (<a href="#coalton-math-arith-dividable-class">Dividable</a> :A :B) &rArr; :A * :A &rarr; <a href="#coalton-optional-type">Optional</a> :B</code>

Safely divide X by Y, returning None if Y is zero.



***

#### <a href="#coalton-math-real-truncate-value"><code>(TRUNCATE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/math/real.ct#L85-L88">src</a></sub></sup><a name="coalton-math-real-truncate-value"></a>
<code>&forall; :A. <a href="#coalton-math-real-quantizable-class">Quantizable</a> :A &rArr; :A &rarr; <a href="#coalton-integer-type">Integer</a></code>

Returns the integer closest/equal to `x` that is within `0` and `x`.



***

# Package `COALTON/MONAD/CLASSES`<a name="coalton-monad-classes-package"></a>

### Classes

#### <a href="#coalton-monad-classes-liftto-class"><code>LiftTo</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/classes.ct#L27-L29">src</a></sub></sup><a name="coalton-monad-classes-liftto-class"></a>
<code>(<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-classes-monad-class">Monad</a> :R) &rArr; <a href="#coalton-monad-classes-liftto-class">LiftTo</a> :M :R</code>


A monad, :m, which can be lifted to :r. Typically because :m is a MonadTransformer or :m and :r are the same.

Methods:
- <code>LIFT-TO :: :M :A &rarr; :R :A</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-classes-monad-class">Monad</a> (:T :M)) (<a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> :T) &rArr; <a href="#coalton-monad-classes-liftto-class">LiftTo</a> :M (:T :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-classes-liftto-class">LiftTo</a> :M :M</code>

</details>



***

#### <a href="#coalton-monad-classes-monadenvironment-class"><code>MonadEnvironment</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/classes.ct#L39-L49">src</a></sub></sup><a name="coalton-monad-classes-monadenvironment-class"></a>
<code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV :M</code>


A monad capable of a function in a computation environment.

Methods:
- <code>ASK :: :M :ENV</code><br/>Retrieves the computation environment.
- <code>LOCAL :: (:ENV &rarr; :ENV) * :M :A &rarr; :M :A</code><br/>Run a computation in a modified environment.
- <code>ASKS :: (:ENV &rarr; :A) &rarr; :M :A</code><br/>Retrieve an aspect of the computation environment.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>

</details>



***

#### <a href="#coalton-monad-classes-monadstate-class"><code>MonadState</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/classes.ct#L51-L61">src</a></sub></sup><a name="coalton-monad-classes-monadstate-class"></a>
<code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M</code>


A monad capable of tracking state in a computation.

Methods:
- <code>GET :: :M :S</code><br/>Retrieve the computation state.
- <code>PUT :: :S &rarr; :M <a href="#coalton-unit-type">Unit</a></code><br/>Set the state to a given value.
- <code>MODIFY :: (:S &rarr; :S) &rarr; :M <a href="#coalton-unit-type">Unit</a></code><br/>Modify the computation state, discarding the old state.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-environment-envt-type">EnvT</a> :E :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>

</details>



***

# Package `COALTON/MONAD/ENVIRONMENT`<a name="coalton-monad-environment-package"></a>

### Types

#### <a href="#coalton-monad-environment-env-type"><code>Env</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L47-L49">src</a></sub></sup><a name="coalton-monad-environment-env-type"></a>
- <code>(Env :A &rarr; :B)</code>

A computation that runs inside an :env environment.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-environment-env-type">Env</a> :ENV)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-environment-env-type">Env</a> :|0| :|1|)</code>

</details>



***

#### <a href="#coalton-monad-environment-envt-type"><code>EnvT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L118-L121">src</a></sub></sup><a name="coalton-monad-environment-envt-type"></a>
- <code>(EnvT :A &rarr; :B :C)</code>

A monadic computation that runs inside an :env environment.
Equivalent to Haskell's ReaderT monad https://hackage.haskell.org/package/transformers-0.6.1.2/docs/Control-Monad-Trans-Reader.html

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M)</code>
- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-environment-envt-type">EnvT</a> :E :M)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :|0| :|1| :|2|)</code>

</details>



***

### Values

#### <a href="#coalton-monad-environment-asks-env-value"><code>(ASKS-ENV FENV-&gt;A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L71-L74">src</a></sub></sup><a name="coalton-monad-environment-asks-env-value"></a>
<code>&forall; :ENV :A. (:ENV &rarr; :A) &rarr; <a href="#coalton-monad-environment-env-type">Env</a> :ENV :A</code>

Retrieve an aspect of the computation environment.



***

#### <a href="#coalton-monad-environment-asks-envt-value"><code>(ASKS-ENVT FENV-&gt;A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L138-L141">src</a></sub></sup><a name="coalton-monad-environment-asks-envt-value"></a>
<code>&forall; :ENV :A :M. <a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; (:ENV &rarr; :A) &rarr; <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M :A</code>

Retrieve an aspect of the computation environment.



***

#### <a href="#coalton-monad-environment-lift-envt-value"><code>(LIFT-ENVT M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L162-L163">src</a></sub></sup><a name="coalton-monad-environment-lift-envt-value"></a>
<code>&forall; :M :A :ENV. :M :A &rarr; <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M :A</code>


***

#### <a href="#coalton-monad-environment-local-env-value"><code>(LOCAL-ENV FENV MENV)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L59-L61">src</a></sub></sup><a name="coalton-monad-environment-local-env-value"></a>
<code>&forall; :ENV :VALUE. (:ENV &rarr; :ENV) * <a href="#coalton-monad-environment-env-type">Env</a> :ENV :VALUE &rarr; <a href="#coalton-monad-environment-env-type">Env</a> :ENV :VALUE</code>


***

#### <a href="#coalton-monad-environment-local-envt-value"><code>(LOCAL-ENVT FENV (ENVT FENV-&gt;A))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L125-L128">src</a></sub></sup><a name="coalton-monad-environment-local-envt-value"></a>
<code>&forall; :ENV :M :VALUE. (:ENV &rarr; :ENV) * <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M :VALUE &rarr; <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M :VALUE</code>

Run a computation in a modified environment.



***

#### <a href="#coalton-monad-environment-map-envt-value"><code>(MAP-ENVT FMA-&gt;NB (ENVT FENV-&gt;MA))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L156-L158">src</a></sub></sup><a name="coalton-monad-environment-map-envt-value"></a>
<code>&forall; :M :A :N :B :ENV. (:M :A &rarr; :N :B) * <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M :A &rarr; <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :N :B</code>


***

#### <a href="#coalton-monad-environment-run-env-value"><code>(RUN-ENV (ENV ENV-COMPUTATION) ENV)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L53-L55">src</a></sub></sup><a name="coalton-monad-environment-run-env-value"></a>
<code>&forall; :ENV :VALUE. <a href="#coalton-monad-environment-env-type">Env</a> :ENV :VALUE * :ENV &rarr; :VALUE</code>

Run a Env inside an environment.



***

#### <a href="#coalton-monad-environment-run-envt-value"><code>(RUN-ENVT (ENVT FENV-&gt;VAL) ENV)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L145-L147">src</a></sub></sup><a name="coalton-monad-environment-run-envt-value"></a>
<code>&forall; :ENV :M :VALUE. <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M :VALUE * :ENV &rarr; :M :VALUE</code>

Run a EnvT inside an environment.



***

#### <a href="#coalton-monad-environment-ask-env-value"><code>ASK-ENV</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L65-L67">src</a></sub></sup><a name="coalton-monad-environment-ask-env-value"></a>
<code>&forall; :ENV. <a href="#coalton-monad-environment-env-type">Env</a> :ENV :ENV</code>

Retrieve the computation environment.



***

#### <a href="#coalton-monad-environment-ask-envt-value"><code>ASK-ENVT</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/environment.ct#L132-L134">src</a></sub></sup><a name="coalton-monad-environment-ask-envt-value"></a>
<code>&forall; :ENV :M. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-environment-envt-type">EnvT</a> :ENV :M :ENV</code>

Retrieve the computation environment.



***

# Package `COALTON/MONAD/FREE`<a name="coalton-monad-free-package"></a>

### Types

#### <a href="#coalton-monad-free-free-type"><code>Free</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.ct#L42-L47">src</a></sub></sup><a name="coalton-monad-free-free-type"></a>
- <code>(Free :A (<a href="#coalton-monad-free-free-type">Free</a> :A :B))</code>
- <code>(Val :A)</code>

`Free :f` gives you a Monad instance for any `Functor :f`.

References: [here](https://serokell.io/blog/introduction-to-free-monads) and [here](https://www.tweag.io/blog/2018-02-05-free-monads/)

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-foldable-class">Foldable</a> :F &rArr; <a href="#coalton-classes-foldable-class">Foldable</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-monad-free-monadfree-class">MonadFree</a> :F (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-free-free-type">Free</a> :|0| :|1|)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> :T &rArr; <a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-monad-free-free-type">Free</a> :T)</code>

</details>



***

### Classes

#### <a href="#coalton-monad-free-monadfree-class"><code>MonadFree</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.ct#L26-L29">src</a></sub></sup><a name="coalton-monad-free-monadfree-class"></a>
<code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-free-monadfree-class">MonadFree</a> :F :M</code>


A free monad is a monad, :m, which is capable of 'wrapping'
around functors, and then 'unwrapping' them later using `>>=`.

Methods:
- <code>WRAP :: :F (:M :A) &rarr; :M :A</code>
<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-monad-class">Monad</a> :M) &rArr; <a href="#coalton-monad-free-monadfree-class">MonadFree</a> :F (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-monad-free-monadfree-class">MonadFree</a> :F (<a href="#coalton-monad-free-free-type">Free</a> :F)</code>

</details>



***

### Values

#### <a href="#coalton-monad-free-foldfree-value"><code>(FOLDFREE NAT FR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.ct#L53-L58">src</a></sub></sup><a name="coalton-monad-free-foldfree-value"></a>
<code>&forall; :A :B :C. <a href="#coalton-classes-monad-class">Monad</a> :C &rArr; (:A (<a href="#coalton-monad-free-free-type">Free</a> :A :B) &rarr; :C (<a href="#coalton-monad-free-free-type">Free</a> :A :B)) * <a href="#coalton-monad-free-free-type">Free</a> :A :B &rarr; :C :B</code>

Given a natural transformation, induce a Monad homomorphism from a
free monad to a target monad.



***

#### <a href="#coalton-monad-free-liftf-value"><code>(LIFTF F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.ct#L32-L34">src</a></sub></sup><a name="coalton-monad-free-liftf-value"></a>
<code>&forall; :F :A :M. (<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-monad-free-monadfree-class">MonadFree</a> :F :M) &rArr; :F :A &rarr; :M :A</code>

Lift a Functor into the Free Monad.



***

#### <a href="#coalton-monad-free-run-free-value"><code>(RUN-FREE TRANSF OP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/free.ct#L61-L70">src</a></sub></sup><a name="coalton-monad-free-run-free-value"></a>
<code>&forall; :F :A. <a href="#coalton-classes-functor-class">Functor</a> :F &rArr; (:F (<a href="#coalton-monad-free-free-type">Free</a> :F :A) &rarr; <a href="#coalton-monad-free-free-type">Free</a> :F :A) * <a href="#coalton-monad-free-free-type">Free</a> :F :A &rarr; :A</code>

Run a free monad with a function that unwraps a single layer of the functor
`f` at a time.

References: [here](https://github.com/purescript/purescript-free/blob/v5.1.0/src/Control/Monad/Free.purs#L167)



***

# Package `COALTON/MONAD/FREET`<a name="coalton-monad-freet-package"></a>

### Types

#### <a href="#coalton-monad-freet-freef-type"><code>FreeF</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.ct#L38-L40">src</a></sub></sup><a name="coalton-monad-freet-freef-type"></a>
- <code>(FreeF :A :B)</code>
- <code>(Val :A)</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-bifunctor-class">Bifunctor</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :F)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :F :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :|0| :|1| :|2|)</code>
- <code><a href="#coalton-classes-traversable-class">Traversable</a> :F &rArr; <a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :F :A)</code>

</details>



***

#### <a href="#coalton-monad-freet-freet-type"><code>FreeT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.ct#L74-L76">src</a></sub></sup><a name="coalton-monad-freet-freet-type"></a>
- <code>(FreeT :A (<a href="#coalton-monad-freet-freef-type">FreeF</a> :B :C (<a href="#coalton-monad-freet-freet-type">FreeT</a> :B :A :C)))</code>

`Free :f :m :a` gives you a Monad Transformer instance for any `Functor :f` and `Monad :m`.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-functor-class">Functor</a> :M) &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-monad-class">Monad</a> :M) &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-monad-class">Monad</a> :M) &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code>(<a href="#coalton-classes-functor-class">Functor</a> :F) (<a href="#coalton-classes-monad-class">Monad</a> :M) &rArr; <a href="#coalton-monad-free-monadfree-class">MonadFree</a> :F (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code>(<a href="#coalton-classes-monad-class">Monad</a> :M) (<a href="#coalton-classes-traversable-class">Traversable</a> :M) (<a href="#coalton-classes-traversable-class">Traversable</a> :F) &rArr; <a href="#coalton-classes-traversable-class">Traversable</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :F &rArr; <a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :|0| :|1| :|2|)</code>

</details>



***

### Values

#### <a href="#coalton-monad-freet-fold-freet-value"><code>(FOLD-FREET F (FREET M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.ct#L174-L182">src</a></sub></sup><a name="coalton-monad-freet-fold-freet-value"></a>
<code>&forall; :F :M :A :T. (<a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> :T) (<a href="#coalton-classes-monad-class">Monad</a> (:T :M)) (<a href="#coalton-classes-monad-class">Monad</a> :M) &rArr; (:F (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A) &rarr; :T :M (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A)) * <a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A &rarr; :T :M :A</code>


***

#### <a href="#coalton-monad-freet-run-freet-value"><code>(RUN-FREET TRANSF OP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.ct#L90-L99">src</a></sub></sup><a name="coalton-monad-freet-run-freet-value"></a>
<code>&forall; :F :M :A. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; (:F (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A) &rarr; <a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A) * <a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A &rarr; :M :A</code>

Run a free monad transformer with a function that unwraps a single layer of the
functor `f` at a time.



***

#### <a href="#coalton-monad-freet-unwrap-freet-value"><code>(UNWRAP-FREET (FREET M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/freet.ct#L80-L84">src</a></sub></sup><a name="coalton-monad-freet-unwrap-freet-value"></a>
<code>&forall; :F :M :A. <a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A &rarr; :M (<a href="#coalton-monad-freet-freef-type">FreeF</a> :F :A (<a href="#coalton-monad-freet-freet-type">FreeT</a> :F :M :A))</code>

Unwrap one layer of the the free monad transformer, returning a value of the base
monad containing a FreeF (which can either contain VAL, a pure value, or FREEF, another
wrapped layer of the free monad transformer).



***

# Package `COALTON/MONAD/IDENTITY`<a name="coalton-monad-identity-package"></a>

### Types

#### <a href="#coalton-monad-identity-identity-type"><code>Identity</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/identity.ct#L17-L19">src</a></sub></sup><a name="coalton-monad-identity-identity-type"></a>
- <code>(Identity :A)</code>

A bare computation. Not useful on its own, but is useful for running Monad transformers in a bare context.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-applicative-class">Applicative</a> <a href="#coalton-monad-identity-identity-type">Identity</a></code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-monad-identity-identity-type">Identity</a></code>
- <code><a href="#coalton-classes-monad-class">Monad</a> <a href="#coalton-monad-identity-identity-type">Identity</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-identity-identity-type">Identity</a> :|0|)</code>

</details>



***

### Values

#### <a href="#coalton-monad-identity-run-identity-value"><code>(RUN-IDENTITY (IDENTITY A))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/identity.ct#L23-L24">src</a></sub></sup><a name="coalton-monad-identity-run-identity-value"></a>
<code>&forall; :A. <a href="#coalton-monad-identity-identity-type">Identity</a> :A &rarr; :A</code>


***

# Package `COALTON/MONAD/OPTIONALT`<a name="coalton-monad-optionalt-package"></a>

### Types

#### <a href="#coalton-monad-optionalt-optionalt-type"><code>OptionalT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.ct#L22-L24">src</a></sub></sup><a name="coalton-monad-optionalt-optionalt-type"></a>
- <code>(OptionalT :A (<a href="#coalton-optional-type">Optional</a> :B))</code>

A monadic computation that returns an Optional.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-alternative-class">Alternative</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> <a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :|0| :|1|)</code>

</details>



***

### Values

#### <a href="#coalton-monad-optionalt-map-optionalt-value"><code>(MAP-OPTIONALT F (OPTIONALT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.ct#L35-L36">src</a></sub></sup><a name="coalton-monad-optionalt-map-optionalt-value"></a>
<code>&forall; :M :A :N :B. (:M (<a href="#coalton-optional-type">Optional</a> :A) &rarr; :N (<a href="#coalton-optional-type">Optional</a> :B)) * <a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M :A &rarr; <a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :N :B</code>


***

#### <a href="#coalton-monad-optionalt-run-optionalt-value"><code>(RUN-OPTIONALT (OPTIONALT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/optionalt.ct#L28-L29">src</a></sub></sup><a name="coalton-monad-optionalt-run-optionalt-value"></a>
<code>&forall; :M :A. <a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :M :A &rarr; :M (<a href="#coalton-optional-type">Optional</a> :A)</code>


***

# Package `COALTON/MONAD/RESULTT`<a name="coalton-monad-resultt-package"></a>

### Types

#### <a href="#coalton-monad-resultt-resultt-type"><code>ResultT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.ct#L28-L30">src</a></sub></sup><a name="coalton-monad-resultt-resultt-type"></a>
- <code>(ResultT :A (<a href="#coalton-classes-result-type">Result</a> :B :C))</code>

A monadic computation that returns a Result.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :ENV (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :|0| :|1| :|2|)</code>

</details>



***

### Values

#### <a href="#coalton-monad-resultt-err-ifm-value"><code>(ERR-IFM FAILED? FAILURE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.ct#L69-L71">src</a></sub></sup><a name="coalton-monad-resultt-err-ifm-value"></a>
<code>&forall; :ERR :M. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-boolean-type">Boolean</a> * :ERR &rarr; :M (<a href="#coalton-classes-result-type">Result</a> :ERR <a href="#coalton-unit-type">Unit</a>)</code>

Fail with FAILURE inside :m if FAILED? is True.



***

#### <a href="#coalton-monad-resultt-err-ift-value"><code>(ERR-IFT FAILED? FAILURE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.ct#L63-L65">src</a></sub></sup><a name="coalton-monad-resultt-err-ift-value"></a>
<code>&forall; :ERR :M. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-boolean-type">Boolean</a> * :ERR &rarr; <a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M <a href="#coalton-unit-type">Unit</a></code>

Fail with FAILURE if FAILED? is True.



***

#### <a href="#coalton-monad-resultt-map-errm-value"><code>(MAP-ERRM FERR M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.ct#L46-L50">src</a></sub></sup><a name="coalton-monad-resultt-map-errm-value"></a>
<code>&forall; :A :B :M :C. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; (:A &rarr; :B) * :M (<a href="#coalton-classes-result-type">Result</a> :A :C) &rarr; :M (<a href="#coalton-classes-result-type">Result</a> :B :C)</code>

Map FERR over the error value of a Result contained in M.



***

#### <a href="#coalton-monad-resultt-map-errt-value"><code>(MAP-ERRT FERR RT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.ct#L54-L59">src</a></sub></sup><a name="coalton-monad-resultt-map-errt-value"></a>
<code>&forall; :A :B :M :C. <a href="#coalton-classes-functor-class">Functor</a> :M &rArr; (:A &rarr; :B) * <a href="#coalton-monad-resultt-resultt-type">ResultT</a> :A :M :C &rarr; <a href="#coalton-monad-resultt-resultt-type">ResultT</a> :B :M :C</code>


***

#### <a href="#coalton-monad-resultt-map-resultt-value"><code>(MAP-RESULTT F (RESULTT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.ct#L41-L42">src</a></sub></sup><a name="coalton-monad-resultt-map-resultt-value"></a>
<code>&forall; :M :E1 :A :N :E2 :B. (:M (<a href="#coalton-classes-result-type">Result</a> :E1 :A) &rarr; :N (<a href="#coalton-classes-result-type">Result</a> :E2 :B)) * <a href="#coalton-monad-resultt-resultt-type">ResultT</a> :E1 :M :A &rarr; <a href="#coalton-monad-resultt-resultt-type">ResultT</a> :E2 :N :B</code>


***

#### <a href="#coalton-monad-resultt-run-resultt-value"><code>(RUN-RESULTT (RESULTT M))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/resultt.ct#L34-L35">src</a></sub></sup><a name="coalton-monad-resultt-run-resultt-value"></a>
<code>&forall; :ERR :M :OK. <a href="#coalton-monad-resultt-resultt-type">ResultT</a> :ERR :M :OK &rarr; :M (<a href="#coalton-classes-result-type">Result</a> :ERR :OK)</code>


***

# Package `COALTON/MONAD/STATE`<a name="coalton-monad-state-package"></a>

### Types

#### <a href="#coalton-monad-state-st-type"><code>ST</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L27-L30">src</a></sub></sup><a name="coalton-monad-state-st-type"></a>
- <code>(ST :A &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>

A computation of a value which may affect the state.
Represented as a closure from initial state to updated state and value.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-state-st-type">ST</a> :STATE)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-state-st-type">ST</a> :STATE)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-state-st-type">ST</a> :STATE)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-state-st-type">ST</a> :|0| :|1|)</code>

</details>



***

### Values

#### <a href="#coalton-monad-state-modify-value"><code>(MODIFY FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L54-L57">src</a></sub></sup><a name="coalton-monad-state-modify-value"></a>
<code>&forall; :STATE. (:STATE &rarr; :STATE) &rarr; <a href="#coalton-monad-state-st-type">ST</a> :STATE <a href="#coalton-unit-type">Unit</a></code>

Modify the state in a StatefulComputation, discarding the old state.



***

#### <a href="#coalton-monad-state-modify-get-value"><code>(MODIFY-GET FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L61-L65">src</a></sub></sup><a name="coalton-monad-state-modify-get-value"></a>
<code>&forall; :STATE. (:STATE &rarr; :STATE) &rarr; <a href="#coalton-monad-state-st-type">ST</a> :STATE :STATE</code>

Modify the state in a StatefulComputation, discarding the old state. Return the new state.



***

#### <a href="#coalton-monad-state-modify-swap-value"><code>(MODIFY-SWAP FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L75-L78">src</a></sub></sup><a name="coalton-monad-state-modify-swap-value"></a>
<code>&forall; :STATE. (:STATE &rarr; :STATE) &rarr; <a href="#coalton-monad-state-st-type">ST</a> :STATE :STATE</code>

Modify the state in a StatefulComputation, returning the old state.



***

#### <a href="#coalton-monad-state-put-value"><code>(PUT STATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L34-L36">src</a></sub></sup><a name="coalton-monad-state-put-value"></a>
<code>&forall; :STATE. :STATE &rarr; <a href="#coalton-monad-state-st-type">ST</a> :STATE <a href="#coalton-unit-type">Unit</a></code>

A StatefulComputation with state set to be the given state. The returned value is Unit.



***

#### <a href="#coalton-monad-state-run-value"><code>(RUN SC STATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L46-L50">src</a></sub></sup><a name="coalton-monad-state-run-value"></a>
<code>&forall; :STATE :A. <a href="#coalton-monad-state-st-type">ST</a> :STATE :A * :STATE &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> :STATE :A</code>

Runs a StatefulComputation to produce a final updated state and value given an initial state



***

#### <a href="#coalton-monad-state-swap-value"><code>(SWAP STATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L69-L71">src</a></sub></sup><a name="coalton-monad-state-swap-value"></a>
<code>&forall; :STATE. :STATE &rarr; <a href="#coalton-monad-state-st-type">ST</a> :STATE :STATE</code>

A StatefulComputation with state set to be the given state. The old state is returned.



***

#### <a href="#coalton-monad-state-get-value"><code>GET</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/state.ct#L40-L42">src</a></sub></sup><a name="coalton-monad-state-get-value"></a>
<code>&forall; :STATE. <a href="#coalton-monad-state-st-type">ST</a> :STATE :STATE</code>

A StatefulComputation which returns the current state as the value.



***

# Package `COALTON/MONAD/STATET`<a name="coalton-monad-statet-package"></a>

### Types

#### <a href="#coalton-monad-statet-statet-type"><code>StateT</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L39-L41">src</a></sub></sup><a name="coalton-monad-statet-statet-type"></a>
- <code>(StateT :A &rarr; :B (<a href="#coalton-classes-tuple-type">Tuple</a> :A :C))</code>

A monadic computation that tracks state of type :s.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-classes-applicative-class">Applicative</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> :M &rArr; <a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-monad-class">Monad</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-monad-classes-monadstate-class">MonadState</a> :S (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E :M &rArr; <a href="#coalton-monad-classes-monadenvironment-class">MonadEnvironment</a> :E (<a href="#coalton-monad-statet-statet-type">StateT</a> :S :M)</code>
- <code><a href="#coalton-classes-monadtransformer-class">MonadTransformer</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :S)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :|0| :|1| :|2|)</code>

</details>



***

### Values

#### <a href="#coalton-monad-statet-lift-statet-value"><code>(LIFT-STATET M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L88-L93">src</a></sub></sup><a name="coalton-monad-statet-lift-statet-value"></a>
<code>&forall; :M :A :S. <a href="#coalton-classes-functor-class">Functor</a> :M &rArr; :M :A &rarr; <a href="#coalton-monad-statet-statet-type">StateT</a> :S :M :A</code>

Lift a stateless computation into a stateful context.



***

#### <a href="#coalton-monad-statet-map-statet-value"><code>(MAP-STATET FMA-&gt;NB (STATET FS-&gt;MSA))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L81-L84">src</a></sub></sup><a name="coalton-monad-statet-map-statet-value"></a>
<code>&forall; :M :S :A :N :B. (:M (<a href="#coalton-classes-tuple-type">Tuple</a> :S :A) &rarr; :N (<a href="#coalton-classes-tuple-type">Tuple</a> :S :B)) * <a href="#coalton-monad-statet-statet-type">StateT</a> :S :M :A &rarr; <a href="#coalton-monad-statet-statet-type">StateT</a> :S :N :B</code>

Map the return value, the final state, and the execution context.



***

#### <a href="#coalton-monad-statet-modify-statet-value"><code>(MODIFY-STATET FS-&gt;S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L69-L73">src</a></sub></sup><a name="coalton-monad-statet-modify-statet-value"></a>
<code>&forall; :S :M. <a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; (:S &rarr; :S) &rarr; <a href="#coalton-monad-statet-statet-type">StateT</a> :S :M <a href="#coalton-unit-type">Unit</a></code>

Modify the computation state, discarding the old state.



***

#### <a href="#coalton-monad-statet-put-statet-value"><code>(PUT-STATET STATE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L45-L47">src</a></sub></sup><a name="coalton-monad-statet-put-statet-value"></a>
<code>&forall; :S :M. <a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; :S &rarr; <a href="#coalton-monad-statet-statet-type">StateT</a> :S :M <a href="#coalton-unit-type">Unit</a></code>

A stateful computation with state set to the given state. The returned value is Unit.



***

#### <a href="#coalton-monad-statet-run-statet-value"><code>(RUN-STATET (STATET FS-&gt;MSA) S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L58-L59">src</a></sub></sup><a name="coalton-monad-statet-run-statet-value"></a>
<code>&forall; :S :M :A. <a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-monad-statet-statet-type">StateT</a> :S :M :A * :S &rarr; :M (<a href="#coalton-classes-tuple-type">Tuple</a> :S :A)</code>


***

#### <a href="#coalton-monad-statet-run-statet_-value"><code>(RUN-STATET_ ST-OP S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L63-L65">src</a></sub></sup><a name="coalton-monad-statet-run-statet_-value"></a>
<code>&forall; :S :M :A. <a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-monad-statet-statet-type">StateT</a> :S :M :A * :S &rarr; :M :A</code>

Run ST-OP, discarding the state and returning the result.



***

#### <a href="#coalton-monad-statet-get-statet-value"><code>GET-STATET</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/monad/statet.ct#L51-L54">src</a></sub></sup><a name="coalton-monad-statet-get-statet-value"></a>
<code>&forall; :S :M. <a href="#coalton-classes-applicative-class">Applicative</a> :M &rArr; <a href="#coalton-monad-statet-statet-type">StateT</a> :S :M :S</code>

A stateful computation which returns the current state as the value.



***

# Package `COALTON/OPTIONAL`<a name="coalton-optional-package"></a>

### Values

#### <a href="#coalton-optional-from-some-value"><code>(FROM-SOME STR OPT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.ct#L22-L26">src</a></sub></sup><a name="coalton-optional-from-some-value"></a>
<code>&forall; :A. <a href="#coalton-string-type">String</a> * <a href="#coalton-optional-type">Optional</a> :A &rarr; :A</code>

Get the value of OPT, erroring with the provided string if it is None.



***

#### <a href="#coalton-optional-none?-value"><code>(NONE? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.ct#L38-L42">src</a></sub></sup><a name="coalton-optional-none?-value"></a>
<code>&forall; :A. <a href="#coalton-optional-type">Optional</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is X None?



***

#### <a href="#coalton-optional-some?-value"><code>(SOME? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/optional.ct#L30-L34">src</a></sub></sup><a name="coalton-optional-some?-value"></a>
<code>&forall; :A. <a href="#coalton-optional-type">Optional</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is X Some?



***

# Package `COALTON/ORDMAP`<a name="coalton-ordmap-package"></a>


Immutable maps ordered by key comparison and iterated in ascending key order.

### Types

#### <a href="#coalton-ordmap-ordmap-type"><code>OrdMap</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L83-L85">src</a></sub></sup><a name="coalton-ordmap-ordmap-type"></a>

A binary tree which associates each :KEY with a :VALUE, sorted by `<=>' on the keys and unique by `==' on the keys.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-eq-class">Eq</a> :KEY) (<a href="#coalton-classes-eq-class">Eq</a> :VALUE) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :KEY) (<a href="#coalton-classes-hash-class">Hash</a> :VALUE) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code>(<a href="#coalton-show-show-class">Show</a> :KEY) (<a href="#coalton-show-show-class">Show</a> :VALUE) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) :KEY :VALUE (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE) (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :|0| :|1|)</code>

</details>



***

### Values

#### <a href="#coalton-ordmap-adjoin-value"><code>(ADJOIN MP K V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L147-L152">src</a></sub></sup><a name="coalton-ordmap-adjoin-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :KEY * :VALUE &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Returns an OrdMap in which the key `k` is associated with `v` added
to the `mp`, only when `mp` doesn't have an association with `k`.
If `mp` already contains an association with `k`, `mp` is returned as is.



***

#### <a href="#coalton-ordmap-collect-value"><code>(COLLECT COLL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L237-L246">src</a></sub></sup><a name="coalton-ordmap-collect-value"></a>
<code>&forall; :COLLECTION :KEY :VALUE. (<a href="#coalton-classes-ord-class">Ord</a> :KEY) (<a href="#coalton-classes-foldable-class">Foldable</a> :COLLECTION) &rArr; :COLLECTION (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE) &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Construct a `OrdMap` containing all the `(key value)` pairs in `coll`.

If `coll` contains duplicate keys, later values will overwrite earlier values.



***

#### <a href="#coalton-ordmap-collect!-value"><code>(COLLECT! ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L225-L234">src</a></sub></sup><a name="coalton-ordmap-collect!-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE) &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Construct a `OrdMap` containing all the `(key value)` pairs in `iter`.

If `iter` contains duplicate keys, later values will overwrite earlier values.



***

#### <a href="#coalton-ordmap-difference-value"><code>(DIFFERENCE A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L337-L341">src</a></sub></sup><a name="coalton-ordmap-difference-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Returns an OrdMap that contains mappings in `a` but not in `b`.



***

#### <a href="#coalton-ordmap-empty?-value"><code>(EMPTY? M)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L94-L97">src</a></sub></sup><a name="coalton-ordmap-empty?-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns True iff the given OrdMap is empty.



***

#### <a href="#coalton-ordmap-entries-value"><code>(ENTRIES MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L172-L175">src</a></sub></sup><a name="coalton-ordmap-entries-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>

Iterate over the (key value) pairs in MP, sorted by the keys in least-to-greatest order.



***

#### <a href="#coalton-ordmap-insert-value"><code>(INSERT MP K V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L139-L143">src</a></sub></sup><a name="coalton-ordmap-insert-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :KEY * :VALUE &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Returns an OrdMap in which the key `k` is associated with `v` added
to the `mp`.  If `mp` already contains mapping for `k`, it is replaced.



***

#### <a href="#coalton-ordmap-intersection-value"><code>(INTERSECTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L329-L334">src</a></sub></sup><a name="coalton-ordmap-intersection-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Construct an OrdMap contaning elements whose key appears in both `a` and `b`.
The resulting values are from `a`.



***

#### <a href="#coalton-ordmap-keys-value"><code>(KEYS MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L182-L185">src</a></sub></sup><a name="coalton-ordmap-keys-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :KEY</code>

Iterate over the keys in MP, sorted least-to-greatest.



***

#### <a href="#coalton-ordmap-lookup-value"><code>(LOOKUP MP K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L101-L104">src</a></sub></sup><a name="coalton-ordmap-lookup-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :KEY &rarr; <a href="#coalton-optional-type">Optional</a> :VALUE</code>

Retrieve the value associated with K in MP, or None if MP does not contain K.



***

#### <a href="#coalton-ordmap-lookup-neighbors-value"><code>(LOOKUP-NEIGHBORS MP K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L122-L135">src</a></sub></sup><a name="coalton-ordmap-lookup-neighbors-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :KEY &rarr; <a href="#coalton-tuple-tuple3-type">Tuple3</a> (<a href="#coalton-optional-type">Optional</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) (<a href="#coalton-optional-type">Optional</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) (<a href="#coalton-optional-type">Optional</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>

Returns elements LO, ON, and HI, such that LO has the closest
key that is strictly less than `k`, ON is the entry with `k`,
and HI has the closest key that is strictly greater than 'k'.
Any of these values can be None if there's no such entry.



***

#### <a href="#coalton-ordmap-max-key-entry-value"><code>(MAX-KEY-ENTRY MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L107-L110">src</a></sub></sup><a name="coalton-ordmap-max-key-entry-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-optional-type">Optional</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>

Returns the entry (Tuple :key :value) with the maximum key in the map `mp`. If the map is empty, None is returned.



***

#### <a href="#coalton-ordmap-min-key-entry-value"><code>(MIN-KEY-ENTRY MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L113-L116">src</a></sub></sup><a name="coalton-ordmap-min-key-entry-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-optional-type">Optional</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)</code>

Returns the entry (Tuple :key :value) with the minimum key in the map `mp`. If the map is empty, None is returned.



***

#### <a href="#coalton-ordmap-remove-value"><code>(REMOVE MP K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L165-L169">src</a></sub></sup><a name="coalton-ordmap-remove-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :KEY &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Returns an OrdMap in which the association with key 'k' is removed from
`mp`.  If `mp` doesn't have an association with `k`, it is returned as is.



***

#### <a href="#coalton-ordmap-replace-value"><code>(REPLACE MP K V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L156-L161">src</a></sub></sup><a name="coalton-ordmap-replace-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :KEY * :VALUE &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Returns an OrdMap in which the key `k` is associated with `v` replaced
from `mp`, when `mp` already has an association with `k`.
If `mp` doesn't has an association with `k`, `mp` is returned as is.



***

#### <a href="#coalton-ordmap-union-value"><code>(UNION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L318-L326">src</a></sub></sup><a name="coalton-ordmap-union-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Construct an OrdMap containing all the mappings of both A and B.

If A and B contain mappings X -> A' and X -> B', the former mapping is kept.

The operation is associative, but not commutative.



***

#### <a href="#coalton-ordmap-update-value"><code>(UPDATE MP K F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L281-L314">src</a></sub></sup><a name="coalton-ordmap-update-value"></a>
<code>&forall; :KEY :VALUE :A. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :KEY * (<a href="#coalton-optional-type">Optional</a> :VALUE &rarr; <a href="#coalton-optional-type">Optional</a> :VALUE * :A) &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * :A</code>

Lookup an association with `k` in `mp`.  If there's an entry, call `f`
with its value wrapped with Some.  If there isn't an entry, call 'f' with
None.  `f` must return a possible new value and an auxiliary result.
If the first return value of `f` is Some, its content is inserted into
`mp` in association with `k`. If the first return value of `f` is None,
an association with `k` in `mp` is removed. A possibly updated mapping
is returned as the first value.
The auxiliary result from `f` is returned as the second value.

This can be used for the caller to obtain the previous state along
updated map.  For example, the following code inserts an entry (k, v)
into mp, and obtain (Some v') or None in the second value of the
result, where v' is the previous value associated with k.

```
(update mp k (fn (prev) (values (Some v) prev)))
```




***

#### <a href="#coalton-ordmap-values-iter-value"><code>(VALUES-ITER MP)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L188-L191">src</a></sub></sup><a name="coalton-ordmap-values-iter-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :VALUE</code>

Iterate over the values in MP, sorted by their corresponding keys in least-to-greatest order.



***

#### <a href="#coalton-ordmap-xor-value"><code>(XOR A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L344-L349">src</a></sub></sup><a name="coalton-ordmap-xor-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-classes-ord-class">Ord</a> :KEY &rArr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE * <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE &rarr; <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

Returns an OrdMap that contains mappings either in `a` or in `b`,
but not in both.



***

#### <a href="#coalton-ordmap-empty-value"><code>EMPTY</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordmap.ct#L89-L91">src</a></sub></sup><a name="coalton-ordmap-empty-value"></a>
<code>&forall; :KEY :VALUE. <a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE</code>

A OrdMap containing no mappings.



***

# Package `COALTON/ORDTREE`<a name="coalton-ordtree-package"></a>

### Types

#### <a href="#coalton-ordtree-ordtree-type"><code>OrdTree</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L44-L61">src</a></sub></sup><a name="coalton-ordtree-ordtree-type"></a>
- <code>Empty</code> 
  - exported; an empty tree.

A 1-2 brother tree, sorted by `<=>` and unique by `==`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> :ELT &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT)</code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-ordtree-ordtree-type">OrdTree</a></code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :ELT &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT) :ELT</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT) :ELT</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :|0|)</code>

</details>



***

### Values

#### <a href="#coalton-ordtree-adjoin-value"><code>(ADJOIN T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L239-L252">src</a></sub></sup><a name="coalton-ordtree-adjoin-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Returns an ordtree that has a new entry `a`.  If `t` already has an entry
which is `==` to `a`, however, the original `t` is returned as is.



***

#### <a href="#coalton-ordtree-decreasing-order-value"><code>(DECREASING-ORDER TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L411-L426">src</a></sub></sup><a name="coalton-ordtree-decreasing-order-value"></a>
<code>&forall; :ELT. <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

Returns an iterator that traverses elements in `tre` in decreasing order.



***

#### <a href="#coalton-ordtree-difference-value"><code>(DIFFERENCE A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L513-L515">src</a></sub></sup><a name="coalton-ordtree-difference-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Returns an OrdTree that contains elements in `a` but not in `b`.



***

#### <a href="#coalton-ordtree-empty?-value"><code>(EMPTY? T)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L64-L67">src</a></sub></sup><a name="coalton-ordtree-empty?-value"></a>
<code>&forall; :ELT. <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-boolean-type">Boolean</a></code>


***

#### <a href="#coalton-ordtree-increasing-order-value"><code>(INCREASING-ORDER TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L392-L408">src</a></sub></sup><a name="coalton-ordtree-increasing-order-value"></a>
<code>&forall; :ELT. <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :ELT</code>

Returns an iterator that traverses elements in `tre` in increasing order.
This is same as (iter:into-iter tre).



***

#### <a href="#coalton-ordtree-insert-value"><code>(INSERT T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L221-L235">src</a></sub></sup><a name="coalton-ordtree-insert-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Returns an ordtree that has an new entry `a` added to `t`.  If `t` already
has an entry which is `==` to `a`,  The new ordtree has `a` in place of the
existing entry.



***

#### <a href="#coalton-ordtree-intersection-value"><code>(INTERSECTION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L501-L510">src</a></sub></sup><a name="coalton-ordtree-intersection-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Returns an OrdTree that contains elements that appear in both `a` and `b`.
The resulting elements are from `a`.



***

#### <a href="#coalton-ordtree-lookup-value"><code>(LOOKUP HAYSTACK NEEDLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L104-L116">src</a></sub></sup><a name="coalton-ordtree-lookup-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

If HAYSTACK contains an element `==` to NEEDLE, return it.



***

#### <a href="#coalton-ordtree-lookup-neighbors-value"><code>(LOOKUP-NEIGHBORS HAYSTACK NEEDLE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L463-L486">src</a></sub></sup><a name="coalton-ordtree-lookup-neighbors-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :ELT &rarr; <a href="#coalton-tuple-tuple3-type">Tuple3</a> (<a href="#coalton-optional-type">Optional</a> :ELT) (<a href="#coalton-optional-type">Optional</a> :ELT) (<a href="#coalton-optional-type">Optional</a> :ELT)</code>

Returns elements LO, ON, and HI, such that LO is the closest
element that is strictly less than `needle`, ON is the element
that is `==` to `needle`, and HI is the closest element that is
strictly greater than `needle`.  Any of these values can be None
if there's no such element.



***

#### <a href="#coalton-ordtree-max-element-value"><code>(MAX-ELEMENT TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L436-L444">src</a></sub></sup><a name="coalton-ordtree-max-element-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

Returns the maximum element in the tree, or None if the tree is empty.



***

#### <a href="#coalton-ordtree-min-element-value"><code>(MIN-ELEMENT TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L448-L456">src</a></sub></sup><a name="coalton-ordtree-min-element-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT</code>

Returns the minimum element in the tree, or None if the tree is empty.



***

#### <a href="#coalton-ordtree-remove-value"><code>(REMOVE T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L274-L290">src</a></sub></sup><a name="coalton-ordtree-remove-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Returns an ordtree that is the same as `t` except that the entry
which is `==` to `a` is removed.  If `t` does not have such an entry,
`t` is returned as is.



***

#### <a href="#coalton-ordtree-replace-value"><code>(REPLACE T A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L256-L270">src</a></sub></sup><a name="coalton-ordtree-replace-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Returns an ordtree that has an entry `a` only if `t` already has an
entry which is `==` to `a`.  The original entry is replaced with the given
`a`.  If `t` doesn't have an entry `==` to `a`, `t` is returned as is.



***

#### <a href="#coalton-ordtree-transform-elements-value"><code>(TRANSFORM-ELEMENTS F TRE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L375-L388">src</a></sub></sup><a name="coalton-ordtree-transform-elements-value"></a>
<code>&forall; :A :B. (:A &rarr; :B) * <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :A &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :B</code>

Returns a tree whose element consists of the result of `f` applied to
the original element, and isomorphic to the original tree.

It is important that transforming keys with `f` does not change the order
of the element.  If `f` violates the condition, the resulting tree isn't
guaranteed to be consistent.

We do not name this `map` because of this restriction.



***

#### <a href="#coalton-ordtree-union-value"><code>(UNION A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L495-L498">src</a></sub></sup><a name="coalton-ordtree-union-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Returns an OrdTree that contains all the elements from `a` and `b`.
If both OrdTrees has the same (`==`) element, the one from `a` is taken.



***

#### <a href="#coalton-ordtree-update-value"><code>(UPDATE T A F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L309-L372">src</a></sub></sup><a name="coalton-ordtree-update-value"></a>
<code>&forall; :ELT :A. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :ELT * (<a href="#coalton-optional-type">Optional</a> :ELT &rarr; <a href="#coalton-optional-type">Optional</a> :ELT * :A) &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * :A</code>

Generic update.  Look for the element `a` in `t`.  If there's an entry,
call `f` with the existing entry wrapped with Some.  If there isn't an entry,
call `f` with None.  `f` must return a possible replacement entry and an
auxiliary result.

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

#### <a href="#coalton-ordtree-xor-value"><code>(XOR A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/ordtree.ct#L518-L530">src</a></sub></sup><a name="coalton-ordtree-xor-value"></a>
<code>&forall; :ELT. <a href="#coalton-classes-ord-class">Ord</a> :ELT &rArr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT * <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT &rarr; <a href="#coalton-ordtree-ordtree-type">OrdTree</a> :ELT</code>

Rdturns an OrdTree that contains elements either in `a` or in `b`,
but not in both.



***

# Package `COALTON/QUEUE`<a name="coalton-queue-package"></a>


Mutable FIFO queues with efficient insertion at the back and removal from the front.

### Types

#### <a href="#coalton-queue-queue-type"><code>Queue</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L54-L55">src</a></sub></sup><a name="coalton-queue-queue-type"></a>

Unbounded FIFO queue implemented with a linked list.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-queue-queue-type">Queue</a></code>
- <code><a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-queue-queue-type">Queue</a></code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-queue-queue-type">Queue</a> :A) :A</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-queue-queue-type">Queue</a> :|0|)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>

</details>



***

### Values

#### <a href="#coalton-queue-append-value"><code>(APPEND Q1 Q2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L174-L179">src</a></sub></sup><a name="coalton-queue-append-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A * <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-queue-queue-type">Queue</a> :A</code>

Create a new queue containing the elements of `q1` followed by the elements of `q2`.



***

#### <a href="#coalton-queue-clear!-value"><code>(CLEAR! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L95-L102">src</a></sub></sup><a name="coalton-queue-clear!-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; Void</code>

Clear all elements from `q`.



***

#### <a href="#coalton-queue-copy-value"><code>(COPY Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L76-L92">src</a></sub></sup><a name="coalton-queue-copy-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-queue-queue-type">Queue</a> :A</code>

Return a new queue containing the same elements as `q`.



***

#### <a href="#coalton-queue-empty?-value"><code>(EMPTY? Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L70-L73">src</a></sub></sup><a name="coalton-queue-empty?-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `q` empty?



***

#### <a href="#coalton-queue-extend!-value"><code>(EXTEND! Q ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L182-L189">src</a></sub></sup><a name="coalton-queue-extend!-value"></a>
<code>&forall; :ELT :CONTAINER. <a href="#coalton-iterator-intoiterator-class">IntoIterator</a> :CONTAINER :ELT &rArr; <a href="#coalton-queue-queue-type">Queue</a> :ELT * :CONTAINER &rarr; Void</code>

Push every element in `iter` to the end of `q`.



***

#### <a href="#coalton-queue-index-value"><code>(INDEX INDEX Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L161-L165">src</a></sub></sup><a name="coalton-queue-index-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Return the `index`th element of `q`.



***

#### <a href="#coalton-queue-index-unsafe-value"><code>(INDEX-UNSAFE INDEX Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L168-L171">src</a></sub></sup><a name="coalton-queue-index-unsafe-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; :A</code>

Return the `index`th element of `q` without checking if the element exists.



***

#### <a href="#coalton-queue-items!-value"><code>(ITEMS! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L192-L197">src</a></sub></sup><a name="coalton-queue-items!-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> :A</code>

Returns an iterator over the items of `q`, removing items as they are returned.



***

#### <a href="#coalton-queue-length-value"><code>(LENGTH Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L64-L67">src</a></sub></sup><a name="coalton-queue-length-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Returns the length of `q`.



***

#### <a href="#coalton-queue-new-value"><code>(NEW)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L58-L61">src</a></sub></sup><a name="coalton-queue-new-value"></a>
<code>&forall; :A. Void &rarr; <a href="#coalton-queue-queue-type">Queue</a> :A</code>

Create a new empty queue.



***

#### <a href="#coalton-queue-peek-value"><code>(PEEK Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L147-L151">src</a></sub></sup><a name="coalton-queue-peek-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Peek at the first item of `q`.



***

#### <a href="#coalton-queue-peek-unsafe-value"><code>(PEEK-UNSAFE Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L154-L158">src</a></sub></sup><a name="coalton-queue-peek-unsafe-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; :A</code>

Peek at the first item of `q` without checking if the queue is empty.



***

#### <a href="#coalton-queue-pop!-value"><code>(POP! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L131-L135">src</a></sub></sup><a name="coalton-queue-pop!-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Remove and return the first item of `q`.



***

#### <a href="#coalton-queue-pop-unsafe!-value"><code>(POP-UNSAFE! Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L138-L144">src</a></sub></sup><a name="coalton-queue-pop-unsafe!-value"></a>
<code>&forall; :A. <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; :A</code>

Remove and return the first item of `q` without checking if the queue is empty.



***

#### <a href="#coalton-queue-push!-value"><code>(PUSH! ITEM Q)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/queue.ct#L105-L128">src</a></sub></sup><a name="coalton-queue-push!-value"></a>
<code>&forall; :A. :A * <a href="#coalton-queue-queue-type">Queue</a> :A &rarr; Void</code>

Push `item` onto the end of `q`.



***

# Package `COALTON/RANDOMACCESS`<a name="coalton-randomaccess-package"></a>

### Classes

#### <a href="#coalton-randomaccess-randomaccess-class"><code>RandomAccess</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.ct#L37-L47">src</a></sub></sup><a name="coalton-randomaccess-randomaccess-class"></a>
<code><a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :F :T</code>


Establishes that `:f` is a random-access store of elements of type `:t`. The **storage type** `:f` implies the **stored type** `:t`. The storage is expected to be sequential and O(1) in random access reads and writes.

It is permitted for any of `make`, `unsafe-aref`, or `unsafe-set!` to error.

Methods:
- <code>MAKE :: <a href="#coalton-ufix-type">UFix</a> * :T &rarr; :F</code>
- <code>MAKE-UNINITIALIZED :: <a href="#coalton-ufix-type">UFix</a> &rarr; :F</code>
- <code>LENGTH :: :F &rarr; <a href="#coalton-ufix-type">UFix</a></code>
- <code>READABLE? :: :F &rarr; <a href="#coalton-boolean-type">Boolean</a></code>
- <code>WRITABLE? :: :F &rarr; <a href="#coalton-boolean-type">Boolean</a></code>
- <code>UNSAFE-AREF :: :F * <a href="#coalton-ufix-type">UFix</a> &rarr; :T</code>
- <code>UNSAFE-SET! :: :F * <a href="#coalton-ufix-type">UFix</a> * :T &rarr; Void</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> (<a href="#coalton-vector-vector-type">Vector</a> :T) :T</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T) :T</code>

</details>



***

### Values

#### <a href="#coalton-randomaccess-aref-value"><code>(AREF STORAGE INDEX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.ct#L53-L60">src</a></sub></sup><a name="coalton-randomaccess-aref-value"></a>
<code>&forall; :F :T. <a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :F :T &rArr; :F * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-optional-type">Optional</a> :T</code>

Read the element at `index` of the random-access storage `storage`. Return `None` if the read is out-of-bounds or not permitted.



***

#### <a href="#coalton-randomaccess-rotate!-value"><code>(ROTATE! STORAGE INDEX1 INDEX2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.ct#L84-L96">src</a></sub></sup><a name="coalton-randomaccess-rotate!-value"></a>
<code>&forall; :T :F. <a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :F :T &rArr; :F * <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-unit-type">Unit</a></code>

Rotate the elements at indices `index1` and `index2` of the random-access storage `storage`. Return `None` if the indices are out-of-bounds or if reading from or writing to `storage` is not permitted.



***

#### <a href="#coalton-randomaccess-set!-value"><code>(SET! STORAGE INDEX VALUE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.ct#L63-L72">src</a></sub></sup><a name="coalton-randomaccess-set!-value"></a>
<code>&forall; :F :T. <a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :F :T &rArr; :F * <a href="#coalton-ufix-type">UFix</a> * :T &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-unit-type">Unit</a></code>

Write the element `value` at `index` of the random-access storage `storage`. Return `None` if the write is out-of-bounds or not permitted.



***

#### <a href="#coalton-randomaccess-unsafe-rotate!-value"><code>(UNSAFE-ROTATE! STORAGE INDEX1 INDEX2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/randomaccess.ct#L75-L81">src</a></sub></sup><a name="coalton-randomaccess-unsafe-rotate!-value"></a>
<code>&forall; :T :F. <a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :F :T &rArr; :F * <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; Void</code>

Rotate the elements at indices `index1` and `index2` of the random-access storage `storage`.



***

# Package `COALTON/RESULT`<a name="coalton-result-package"></a>

### Values

#### <a href="#coalton-result-err-if-value"><code>(ERR-IF FAILED? FAILURE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L32-L36">src</a></sub></sup><a name="coalton-result-err-if-value"></a>
<code>&forall; :ERR. <a href="#coalton-boolean-type">Boolean</a> * :ERR &rarr; <a href="#coalton-classes-result-type">Result</a> :ERR <a href="#coalton-unit-type">Unit</a></code>

Fail with FAILURE value if FAILED? is True.



***

#### <a href="#coalton-result-err?-value"><code>(ERR? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L53-L57">src</a></sub></sup><a name="coalton-result-err?-value"></a>
<code>&forall; :A :B. <a href="#coalton-classes-result-type">Result</a> :A :B &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns TRUE if X is ERR



***

#### <a href="#coalton-result-flatten-value"><code>(FLATTEN X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L80-L83">src</a></sub></sup><a name="coalton-result-flatten-value"></a>
<code>&forall; :A. <a href="#coalton-classes-result-type">Result</a> :A :A &rarr; :A</code>


***

#### <a href="#coalton-result-map-err-value"><code>(MAP-ERR F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L66-L70">src</a></sub></sup><a name="coalton-result-map-err-value"></a>
<code>&forall; :A :B :C. (:A &rarr; :B) * <a href="#coalton-classes-result-type">Result</a> :A :C &rarr; <a href="#coalton-classes-result-type">Result</a> :B :C</code>

Map over the ERR case



***

#### <a href="#coalton-result-ok-or-def-value"><code>(OK-OR-DEF DEF RES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L73-L77">src</a></sub></sup><a name="coalton-result-ok-or-def-value"></a>
<code>&forall; :A :ERR. :A * <a href="#coalton-classes-result-type">Result</a> :ERR :A &rarr; :A</code>

Take value in RES if it is OK, or DEF if it is ERR.



***

#### <a href="#coalton-result-ok-or-error-value"><code>(OK-OR-ERROR RES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L86-L89">src</a></sub></sup><a name="coalton-result-ok-or-error-value"></a>
<code>&forall; :ERR :A. <a href="#coalton-classes-signalable-class">Signalable</a> :ERR &rArr; <a href="#coalton-classes-result-type">Result</a> :ERR :A &rarr; :A</code>


***

#### <a href="#coalton-result-ok?-value"><code>(OK? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L46-L50">src</a></sub></sup><a name="coalton-result-ok?-value"></a>
<code>&forall; :A :B. <a href="#coalton-classes-result-type">Result</a> :A :B &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Returns TRUE if X is OK



***

#### <a href="#coalton-result-okm-value"><code>(OKM F-A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L61-L63">src</a></sub></sup><a name="coalton-result-okm-value"></a>
<code>&forall; :F :A :E. <a href="#coalton-classes-functor-class">Functor</a> :F &rArr; :F :A &rarr; :F (<a href="#coalton-classes-result-type">Result</a> :E :A)</code>

Wrap a value inside F-A inside of 'Ok'.



***

#### <a href="#coalton-result-opt->result-value"><code>(OPT-&gt;RESULT FAILURE OPT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/result.ct#L39-L43">src</a></sub></sup><a name="coalton-result-opt->result-value"></a>
<code>&forall; :ERR :A. :ERR * <a href="#coalton-optional-type">Optional</a> :A &rarr; <a href="#coalton-classes-result-type">Result</a> :ERR :A</code>

Convert OPT to a Result, using FAILURE value if None.



***

# Package `COALTON/SEQ`<a name="coalton-seq-package"></a>


Persistent sequences based on relaxed radix balanced trees.

### Types

#### <a href="#coalton-seq-seq-type"><code>Seq</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L58-L64">src</a></sub></sup><a name="coalton-seq-seq-type"></a>
<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-foldable-class">Foldable</a> :F) (<a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A) &rArr; <a href="#coalton-classes-into-class">Into</a> (:F :A) (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-seq-seq-type">Seq</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-seq-seq-type">Seq</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE) &rArr; <a href="#coalton-classes-fromassociationcomprehension-class">FromAssociationComprehension</a> (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE) &rArr; <a href="#coalton-classes-fromitemizedassociation-class">FromItemizedAssociation</a> (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE)) :KEY :VALUE (<a href="#coalton-seq-seq-type">Seq</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :KEY :VALUE))</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) :A</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>

</details>



***

### Values

#### <a href="#coalton-seq-conc-value"><code>(CONC LEFT RIGHT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L167-L208">src</a></sub></sup><a name="coalton-seq-conc-value"></a>
<code>&forall; :A. <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; <a href="#coalton-seq-seq-type">Seq</a> :A * <a href="#coalton-seq-seq-type">Seq</a> :A &rarr; <a href="#coalton-seq-seq-type">Seq</a> :A</code>

Concatenate two `Seq`s



***

#### <a href="#coalton-seq-empty?-value"><code>(EMPTY? SEQ)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L78-L79">src</a></sub></sup><a name="coalton-seq-empty?-value"></a>
<code>&forall; :A. <a href="#coalton-seq-seq-type">Seq</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>


***

#### <a href="#coalton-seq-get-value"><code>(GET SEQ IDX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L82-L94">src</a></sub></sup><a name="coalton-seq-get-value"></a>
<code>&forall; :A. <a href="#coalton-seq-seq-type">Seq</a> :A * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Get the member of `seq` at index `idx`, or `None` if `idx` is larger
than `(size seq)`



***

#### <a href="#coalton-seq-new-value"><code>(NEW)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L67-L69">src</a></sub></sup><a name="coalton-seq-new-value"></a>
<code>&forall; :A. <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; Void &rarr; <a href="#coalton-seq-seq-type">Seq</a> :A</code>

Create a new empty `Seq`.



***

#### <a href="#coalton-seq-pop-value"><code>(POP SEQ)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L128-L165">src</a></sub></sup><a name="coalton-seq-pop-value"></a>
<code>&forall; :A. <a href="#coalton-seq-seq-type">Seq</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :A (<a href="#coalton-seq-seq-type">Seq</a> :A))</code>

If `seq` is empty, return `None`. Otherwise, the last member of `seq` and
a new `Seq` instance.



***

#### <a href="#coalton-seq-push-value"><code>(PUSH SEQ A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L118-L126">src</a></sub></sup><a name="coalton-seq-push-value"></a>
<code>&forall; :A. <a href="#coalton-seq-seq-type">Seq</a> :A * :A &rarr; <a href="#coalton-seq-seq-type">Seq</a> :A</code>

Push `a` onto the end of `seq`, returning a new `Seq` instance.



***

#### <a href="#coalton-seq-put-value"><code>(PUT SEQ IDX A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L97-L116">src</a></sub></sup><a name="coalton-seq-put-value"></a>
<code>&forall; :A. <a href="#coalton-seq-seq-type">Seq</a> :A * <a href="#coalton-ufix-type">UFix</a> * :A &rarr; <a href="#coalton-optional-type">Optional</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>

If `idx` is less than `(size seq)`, Return a new `seq` whose `idx` position
contains `a`.



***

#### <a href="#coalton-seq-size-value"><code>(SIZE SEQ)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/seq.ct#L72-L76">src</a></sub></sup><a name="coalton-seq-size-value"></a>
<code>&forall; :A. <a href="#coalton-seq-seq-type">Seq</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Return the number of elements in the `seq`.



***

### Macros

#### <a href="#coalton-seq-make-macro"><code>MAKE (&amp;REST ELEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-seq-make-macro"></a>

Create a new `Seq` containing `elems`.



***

# Package `COALTON/SHOW`<a name="coalton-show-package"></a>


A way to show linear, human-readable, textual representations of objects.

### Classes

#### <a href="#coalton-show-show-class"><code>Show</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/show.ct#L64-L82">src</a></sub></sup><a name="coalton-show-show-class"></a>
<code><a href="#coalton-show-show-class">Show</a> :A</code>


Objects which have a convenient, textual, linear printed representation for
display in a terminal. This is principally for program output and debugging.

Methods:
- <code>SHOW-TO :: (<a href="#coalton-string-type">String</a> &rarr; Void) * :A &rarr; Void</code><br/>Execute a callback on a debugging string representation of an&#xA;object. The callback may be called multiple times on different&#xA;sections of the string, and the callback is guaranteed to be called on&#xA;sections left-to-right.&#xA;&#xA;For example, for a callback function `f`, an object like `(1 2 3)` may&#xA;be executed as&#xA;&#xA;```&#xA;(f &quot;(&quot;)&#xA;(f &quot;1 2&quot;)&#xA;(f &quot; &quot;)&#xA;(f &quot;3)&quot;)&#xA;```
<details>
<summary>Instances</summary>

- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-seq-seq-type">Seq</a> :A)</code>
- <code>(<a href="#coalton-show-show-class">Show</a> :KEY) (<a href="#coalton-show-show-class">Show</a> :VALUE) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :KEY :VALUE)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-queue-queue-type">Queue</a> :A)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :K) (<a href="#coalton-show-show-class">Show</a> :K) (<a href="#coalton-show-show-class">Show</a> :V) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :K :V)</code>
- <code>(<a href="#coalton-show-show-class">Show</a> :KEY) (<a href="#coalton-show-show-class">Show</a> :VALUE) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :KEY :VALUE)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :A)</code>
- <code>(<a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T) (<a href="#coalton-show-show-class">Show</a> :T) &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :T)</code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-types-typescheme-type">TypeScheme</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-types-lisptype-type">LispType</a></code>
- <code><a href="#coalton-show-show-class">Show</a> (<a href="#coalton-types-proxy-type">Proxy</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-boolean-type">Boolean</a></code>

</details>



***

### Values

#### <a href="#coalton-show-make-string-builder-value"><code>(MAKE-STRING-BUILDER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/show.ct#L32-L52">src</a></sub></sup><a name="coalton-show-make-string-builder-value"></a>
<code>Void &rarr; (<a href="#coalton-string-type">String</a> &rarr; Void) * (Void &rarr; <a href="#coalton-string-type">String</a>)</code>

Make a string builder and extractor. Return two values:

1. A procedure which consumes strings (accumulating state underneath).

2. A thunk which extracts (and clears) the strings consumed.



***

#### <a href="#coalton-show-show-value"><code>(SHOW X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/show.ct#L94-L99">src</a></sub></sup><a name="coalton-show-show-value"></a>
<code>&forall; :A. <a href="#coalton-show-show-class">Show</a> :A &rArr; :A &rarr; Void</code>

Display `x` to the show stream and flush immediately.



***

#### <a href="#coalton-show-show-as-string-value"><code>(SHOW-AS-STRING X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/show.ct#L85-L91">src</a></sub></sup><a name="coalton-show-show-as-string-value"></a>
<code>&forall; :A. <a href="#coalton-show-show-class">Show</a> :A &rArr; :A &rarr; <a href="#coalton-string-type">String</a></code>

Display `x` as a string.

This is not necessarily identical to `(the String (into x))`.



***

### Macros

#### <a href="#coalton-show-show*-macro"><code>SHOW* (&amp;REST ITEMS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-show-show*-macro"></a>

Show each of the items `items` sequentially.



***

# Package `COALTON/SLICE`<a name="coalton-slice-package"></a>

### Types

#### <a href="#coalton-slice-slice-type"><code>Slice</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L37-L37">src</a></sub></sup><a name="coalton-slice-slice-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-slice-slice-type">Slice</a></code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) :A</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) :A</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-slice-slice-type">Slice</a> :|0|)</code>
- <code><a href="#coalton-slice-sliceable-class">Sliceable</a> (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>

</details>



***

### Values

#### <a href="#coalton-slice-index-value"><code>(INDEX IDX S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L87-L91">src</a></sub></sup><a name="coalton-slice-index-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-slice-slice-type">Slice</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Lookup the element at `index` in `s`.



***

#### <a href="#coalton-slice-index-unsafe-value"><code>(INDEX-UNSAFE IDX S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L95-L98">src</a></sub></sup><a name="coalton-slice-index-unsafe-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-slice-slice-type">Slice</a> :A &rarr; :A</code>

Lookup the element at `index` in `s` without bounds checking.



***

#### <a href="#coalton-slice-iter-chunked-value"><code>(ITER-CHUNKED SIZE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L118-L143">src</a></sub></sup><a name="coalton-slice-iter-chunked-value"></a>
<code>&forall; :B :A. <a href="#coalton-slice-sliceable-class">Sliceable</a> (:B :A) &rArr; <a href="#coalton-ufix-type">UFix</a> * :B :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>

Divide `s` into a series of slices of length `size`. Will return a final shorter slice if `s` does not divide evenly.



***

#### <a href="#coalton-slice-iter-chunked-exact-value"><code>(ITER-CHUNKED-EXACT SIZE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L146-L158">src</a></sub></sup><a name="coalton-slice-iter-chunked-exact-value"></a>
<code>&forall; :B :A. <a href="#coalton-slice-sliceable-class">Sliceable</a> (:B :A) &rArr; <a href="#coalton-ufix-type">UFix</a> * :B :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>

Divide `s` into a series of slices of length `size`. Will skip trailing elements if `s` does not divide evenly.



***

#### <a href="#coalton-slice-iter-sliding-value"><code>(ITER-SLIDING SIZE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L101-L115">src</a></sub></sup><a name="coalton-slice-iter-sliding-value"></a>
<code>&forall; :B :A. <a href="#coalton-slice-sliceable-class">Sliceable</a> (:B :A) &rArr; <a href="#coalton-ufix-type">UFix</a> * :B :A &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>

Returns an iterator that yields a series of overlapping slices of length `size`.



***

#### <a href="#coalton-slice-length-value"><code>(LENGTH S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L72-L75">src</a></sub></sup><a name="coalton-slice-length-value"></a>
<code>&forall; :A. <a href="#coalton-slice-slice-type">Slice</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Returns the length of `s`.



***

#### <a href="#coalton-slice-new-value"><code>(NEW START LEN V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L51-L68">src</a></sub></sup><a name="coalton-slice-new-value"></a>
<code>&forall; :B :A. <a href="#coalton-slice-sliceable-class">Sliceable</a> (:B :A) &rArr; <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> * :B :A &rarr; <a href="#coalton-slice-slice-type">Slice</a> :A</code>

Create a new slice backed by `v` starting at index `start` and continuing for `len` elements.



***

#### <a href="#coalton-slice-set!-value"><code>(SET! IDX ITEM S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/slice.ct#L79-L84">src</a></sub></sup><a name="coalton-slice-set!-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * :A * <a href="#coalton-slice-slice-type">Slice</a> :A &rarr; Void</code>

Set the element at index `idx` in `s` to `item`.



***

# Package `COALTON/STRING`<a name="coalton-string-package"></a>

### Values

#### <a href="#coalton-string-chars-value"><code>(CHARS STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L151-L162">src</a></sub></sup><a name="coalton-string-chars-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-iterator-iterator-type">Iterator</a> <a href="#coalton-char-type">Char</a></code>

Returns an iterator over the characters in `str`.



***

#### <a href="#coalton-string-concat-value"><code>(CONCAT STR1 STR2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L53-L56">src</a></sub></sup><a name="coalton-string-concat-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-string-type">String</a></code>

Concatenate STR1 and STR2 together, returning a new string.



***

#### <a href="#coalton-string-downcase-value"><code>(DOWNCASE STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L171-L174">src</a></sub></sup><a name="coalton-string-downcase-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-string-type">String</a></code>

Returns a new string with lowercase characters.



***

#### <a href="#coalton-string-length-value"><code>(LENGTH STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L64-L67">src</a></sub></sup><a name="coalton-string-length-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-ufix-type">UFix</a></code>

The length of a string STR.



***

#### <a href="#coalton-string-parse-int-value"><code>(PARSE-INT STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L113-L119">src</a></sub></sup><a name="coalton-string-parse-int-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-integer-type">Integer</a></code>

Parse the integer in string `str`.



***

#### <a href="#coalton-string-ref-value"><code>(REF STR IDX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L128-L132">src</a></sub></sup><a name="coalton-string-ref-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-char-type">Char</a></code>

Return the `idx`th character of `str`.



***

#### <a href="#coalton-string-ref-unchecked-value"><code>(REF-UNCHECKED STR IDX)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L122-L125">src</a></sub></sup><a name="coalton-string-ref-unchecked-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-char-type">Char</a></code>

Return the `idx`th character of `str`. This function is partial.



***

#### <a href="#coalton-string-reverse-value"><code>(REVERSE S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L59-L61">src</a></sub></sup><a name="coalton-string-reverse-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-string-type">String</a></code>

Reverse a string.



***

#### <a href="#coalton-string-split-value"><code>(SPLIT C STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L84-L89">src</a></sub></sup><a name="coalton-string-split-value"></a>
<code><a href="#coalton-char-type">Char</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-list-type">List</a> <a href="#coalton-string-type">String</a></code>

Split a string around the separator character `c`.



***

#### <a href="#coalton-string-split-at-value"><code>(SPLIT-AT N STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L78-L81">src</a></sub></sup><a name="coalton-string-split-at-value"></a>
<code><a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> <a href="#coalton-string-type">String</a> <a href="#coalton-string-type">String</a></code>

Splits a string into a substring of the first N characters and a substring of the remaining characters.



***

#### <a href="#coalton-string-strip-prefix-value"><code>(STRIP-PREFIX PREFIX STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L92-L99">src</a></sub></sup><a name="coalton-string-strip-prefix-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-string-type">String</a></code>

Returns a string without a give prefix, or `None` if the string
does not have that suffix.



***

#### <a href="#coalton-string-strip-suffix-value"><code>(STRIP-SUFFIX SUFFIX STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L102-L110">src</a></sub></sup><a name="coalton-string-strip-suffix-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-string-type">String</a></code>

Returns a string without a give suffix, or `None` if the string
does not have that suffix.



***

#### <a href="#coalton-string-substring-value"><code>(SUBSTRING STR START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L70-L75">src</a></sub></sup><a name="coalton-string-substring-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-string-type">String</a></code>

Compute a substring of a string bounded by given indices.



***

#### <a href="#coalton-string-substring-index-value"><code>(SUBSTRING-INDEX SMALL BIG)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L135-L140">src</a></sub></sup><a name="coalton-string-substring-index-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a></code>

If the first argument appears as a substring within the second argument, return the starting index into the second argument.



***

#### <a href="#coalton-string-substring?-value"><code>(SUBSTRING? SMALL BIG)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L143-L148">src</a></sub></sup><a name="coalton-string-substring?-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Return true if the first argument appears as a substring within the second argument.



***

#### <a href="#coalton-string-upcase-value"><code>(UPCASE STR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/string.ct#L165-L168">src</a></sub></sup><a name="coalton-string-upcase-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-string-type">String</a></code>

Returns a new string with uppercase characters.



***

# Package `COALTON/SYMBOL`<a name="coalton-symbol-package"></a>


An interface to Common Lisp symbols.

### Types

#### <a href="#coalton-symbol-symbol-type"><code>Symbol</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.ct#L27-L28">src</a></sub></sup><a name="coalton-symbol-symbol-type"></a>

A Common Lisp symbol.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-default-class">Default</a> <a href="#coalton-symbol-symbol-type">Symbol</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-symbol-symbol-type">Symbol</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-symbol-symbol-type">Symbol</a></code>

</details>



***

### Values

#### <a href="#coalton-symbol-gensym-value"><code>(GENSYM)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.ct#L69-L72">src</a></sub></sup><a name="coalton-symbol-gensym-value"></a>
<code>Void &rarr; <a href="#coalton-symbol-symbol-type">Symbol</a></code>

Make an uninterned symbol as by `cl:gensym`.



***

#### <a href="#coalton-symbol-keyword?-value"><code>(KEYWORD? S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.ct#L46-L49">src</a></sub></sup><a name="coalton-symbol-keyword?-value"></a>
<code><a href="#coalton-symbol-symbol-type">Symbol</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is the symbol `s` a Common Lisp keyword?



***

#### <a href="#coalton-symbol-make-keyword-value"><code>(MAKE-KEYWORD S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.ct#L53-L58">src</a></sub></sup><a name="coalton-symbol-make-keyword-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-symbol-symbol-type">Symbol</a></code>

Find or make a keyword named `s`.

**WARNING**: This function interns a new symbol. It will not get garbage collected. Use with caution.



***

#### <a href="#coalton-symbol-make-symbol-value"><code>(MAKE-SYMBOL S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.ct#L62-L65">src</a></sub></sup><a name="coalton-symbol-make-symbol-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-symbol-symbol-type">Symbol</a></code>

Make an uninterned symbol with the name `s`.



***

#### <a href="#coalton-symbol-symbol-name-value"><code>(SYMBOL-NAME S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.ct#L32-L35">src</a></sub></sup><a name="coalton-symbol-symbol-name-value"></a>
<code><a href="#coalton-symbol-symbol-type">Symbol</a> &rarr; <a href="#coalton-string-type">String</a></code>

Return the name of the symbol `s`.



***

#### <a href="#coalton-symbol-uninterned?-value"><code>(UNINTERNED? S)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/symbol.ct#L39-L42">src</a></sub></sup><a name="coalton-symbol-uninterned?-value"></a>
<code><a href="#coalton-symbol-symbol-type">Symbol</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is the symbol `s` uninterned?



***

# Package `COALTON/SYSTEM`<a name="coalton-system-package"></a>

### Types

#### <a href="#coalton-system-lispcondition-type"><code>LispCondition</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L183-L184">src</a></sub></sup><a name="coalton-system-lispcondition-type"></a>

Condition for lisp error handling. Uses `cl:condition`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-system-lispcondition-type">LispCondition</a></code>
- <code><a href="#coalton-classes-signalable-class">Signalable</a> <a href="#coalton-system-lispcondition-type">LispCondition</a></code>

</details>



***

### Structs

#### <a href="#coalton-system-meteredresult-type"><code>MeteredResult #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L147-L154">src</a></sub></sup><a name="coalton-system-meteredresult-type"></a>

Function output with space and timing metedata.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-system-meteredresult-type">MeteredResult</a> :|0|)</code>

</details>



***

### Values

#### <a href="#coalton-system-add-feature-value"><code>(ADD-FEATURE FEAT)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L254-L260">src</a></sub></sup><a name="coalton-system-add-feature-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; Void</code>

Adds a feature `feat` to `cl:*features*`.



***

#### <a href="#coalton-system-architecture-value"><code>(ARCHITECTURE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L218-L221">src</a></sub></sup><a name="coalton-system-architecture-value"></a>
<code>Void &rarr; <a href="#coalton-string-type">String</a></code>

The system's architecture (stored at compile time).



***

#### <a href="#coalton-system-argv0-value"><code>(ARGV0)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L273-L279">src</a></sub></sup><a name="coalton-system-argv0-value"></a>
<code>Void &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-string-type">String</a></code>

The first command line argument (stored at compile time).



***

#### <a href="#coalton-system-cmd-args-value"><code>(CMD-ARGS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L267-L270">src</a></sub></sup><a name="coalton-system-cmd-args-value"></a>
<code>Void &rarr; <a href="#coalton-list-type">List</a> <a href="#coalton-string-type">String</a></code>

The current command line arguments (stored at compile time).



***

#### <a href="#coalton-system-features-value"><code>(FEATURES)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L248-L251">src</a></sub></sup><a name="coalton-system-features-value"></a>
<code>Void &rarr; <a href="#coalton-list-type">List</a> <a href="#coalton-string-type">String</a></code>

Returns a list of active features, from `cl:*features*`.



***

#### <a href="#coalton-system-gc-value"><code>(GC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L48-L53">src</a></sub></sup><a name="coalton-system-gc-value"></a>
<code>Void &rarr; Void</code>

Perform a full garbage collection.



***

#### <a href="#coalton-system-get-real-time-value"><code>(GET-REAL-TIME)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L87-L90">src</a></sub></sup><a name="coalton-system-get-real-time-value"></a>
<code>Void &rarr; <a href="#coalton-integer-type">Integer</a></code>

Gets the real-time in internal time units. The difference between two successive calls to this function represents the time that has elapsed.



***

#### <a href="#coalton-system-getenv-value"><code>(GETENV VAR)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L196-L202">src</a></sub></sup><a name="coalton-system-getenv-value"></a>
<code><a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-string-type">String</a></code>

Gets the value of the environmental variable `var`, errors if `var` doesn't exist.



***

#### <a href="#coalton-system-hostname-value"><code>(HOSTNAME)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L230-L233">src</a></sub></sup><a name="coalton-system-hostname-value"></a>
<code>Void &rarr; <a href="#coalton-string-type">String</a></code>

Returns the system's hostname. This is a function because the hostname can be redefined.



***

#### <a href="#coalton-system-implementation-value"><code>(IMPLEMENTATION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L236-L239">src</a></sub></sup><a name="coalton-system-implementation-value"></a>
<code>Void &rarr; <a href="#coalton-string-type">String</a></code>

The lisp implementation (stored at compile time).



***

#### <a href="#coalton-system-lisp-version-value"><code>(LISP-VERSION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L242-L245">src</a></sub></sup><a name="coalton-system-lisp-version-value"></a>
<code>Void &rarr; <a href="#coalton-string-type">String</a></code>

The lisp implementation version (stored at compile time).



***

#### <a href="#coalton-system-monotonic-bytes-consed-value"><code>(MONOTONIC-BYTES-CONSED)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L110-L118">src</a></sub></sup><a name="coalton-system-monotonic-bytes-consed-value"></a>
<code>Void &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-integer-type">Integer</a></code>

Returns the number of bytes consed since some unspecified point in time.

The difference between two successive calls to this function represents the number of bytes consed in that period of time.



***

#### <a href="#coalton-system-os-value"><code>(OS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L224-L227">src</a></sub></sup><a name="coalton-system-os-value"></a>
<code>Void &rarr; <a href="#coalton-string-type">String</a></code>

The system's operating system (stored at compile time).



***

#### <a href="#coalton-system-setenv!-value"><code>(SETENV! VAR VAL)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L206-L211">src</a></sub></sup><a name="coalton-system-setenv!-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-string-type">String</a> &rarr; Void</code>

Sets an environment variable `var` to string `val`, only if `var` already exists.



***

#### <a href="#coalton-system-sleep-value"><code>(SLEEP N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L56-L68">src</a></sub></sup><a name="coalton-system-sleep-value"></a>
<code>&forall; :A. <a href="#coalton-math-real-rational-class">Rational</a> :A &rArr; :A &rarr; Void</code>

Sleep for `n` seconds, where `n` can be of any type with an instance of `Rational`.

Sleep uses type class `Rational`'s `best-approx` instead of `Real`'s `real-approx` because it handles the approximation without arbitrary precision. The only `Real` type excluded by this decision is `CReal`.



***

#### <a href="#coalton-system-space-value"><code>(SPACE F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L135-L145">src</a></sub></sup><a name="coalton-system-space-value"></a>
<code>&forall; :A. (Void &rarr; :A) &rarr; :A * <a href="#coalton-optional-type">Optional</a> <a href="#coalton-integer-type">Integer</a></code>

Run the thunk `f` and return its value along with the approximate number of bytes consed during the course of executing f.

The amount of space used may be peculiar to the implementation, such as rounding to certain page boundaries.

A garbage collection will be forced prior to invoking `f`.



***

#### <a href="#coalton-system-spacetime-value"><code>(SPACETIME F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L157-L173">src</a></sub></sup><a name="coalton-system-spacetime-value"></a>
<code>&forall; :A. (Void &rarr; :A) &rarr; <a href="#coalton-system-meteredresult-type">MeteredResult</a> :A</code>

Runs a function, gathering space and timing information and returning a `MeteredResults` object.

Garbage collection will be performed before profiling is performed.



***

#### <a href="#coalton-system-time-value"><code>(TIME F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L125-L132">src</a></sub></sup><a name="coalton-system-time-value"></a>
<code>&forall; :A. (Void &rarr; :A) &rarr; :A * <a href="#coalton-integer-type">Integer</a></code>

Run the thunk `f` and return its value along with the run time in microseconds.

While the result will always contain microseconds, some implementations may return a value rounded to less precision (e.g., rounded to the nearest second or millisecond).



***

#### <a href="#coalton-system-time-units->rounded-microseconds-value"><code>(TIME-UNITS-&gt;ROUNDED-MICROSECONDS T)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L104-L107">src</a></sub></sup><a name="coalton-system-time-units->rounded-microseconds-value"></a>
<code><a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

Converts internal time units into an integer number of rounded microseconds.



***

#### <a href="#coalton-system-time-units->seconds-value"><code>(TIME-UNITS-&gt;SECONDS T)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L99-L101">src</a></sub></sup><a name="coalton-system-time-units->seconds-value"></a>
<code><a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-fraction-type">Fraction</a></code>

Converts internal time units into `Fraction` seconds.



***

#### <a href="#coalton-system-internal-time-units-per-second-value"><code>INTERNAL-TIME-UNITS-PER-SECOND</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/system.ct#L93-L96">src</a></sub></sup><a name="coalton-system-internal-time-units-per-second-value"></a>
<code><a href="#coalton-integer-type">Integer</a></code>

The number of internal time units per second. This is implementation specific.



***

# Package `COALTON/TUPLE`<a name="coalton-tuple-package"></a>

### Structs

#### <a href="#coalton-tuple-tuple3-type"><code>Tuple3 #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :B&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :C&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L54-L57">src</a></sub></sup><a name="coalton-tuple-tuple3-type"></a>
- <code>FIRST :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A></code>
- <code>SECOND :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :B></code>
- <code>THIRD :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :C></code>
<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) (<a href="#coalton-classes-default-class">Default</a> :C) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) (<a href="#coalton-classes-eq-class">Eq</a> :C) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :A :B :C)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) (<a href="#coalton-classes-hash-class">Hash</a> :C) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :A :B :C)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :|0| :|1| :|2|)</code>

</details>



***

#### <a href="#coalton-tuple-tuple4-type"><code>Tuple4 #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :B&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :C&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :D&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L72-L76">src</a></sub></sup><a name="coalton-tuple-tuple4-type"></a>
- <code>FIRST :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A></code>
- <code>SECOND :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :B></code>
- <code>THIRD :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :C></code>
- <code>FOURTH :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :D></code>
<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) (<a href="#coalton-classes-default-class">Default</a> :C) (<a href="#coalton-classes-default-class">Default</a> :D) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) (<a href="#coalton-classes-eq-class">Eq</a> :C) (<a href="#coalton-classes-eq-class">Eq</a> :D) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) (<a href="#coalton-classes-hash-class">Hash</a> :C) (<a href="#coalton-classes-hash-class">Hash</a> :D) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :A :B :C :D)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :|0| :|1| :|2| :|3|)</code>

</details>



***

#### <a href="#coalton-tuple-tuple5-type"><code>Tuple5 #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :B&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :C&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :D&gt; #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :E&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L92-L97">src</a></sub></sup><a name="coalton-tuple-tuple5-type"></a>
- <code>FIRST :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :A></code>
- <code>SECOND :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :B></code>
- <code>THIRD :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :C></code>
- <code>FOURTH :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :D></code>
- <code>FIFTH :: #<COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :E></code>
<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-default-class">Default</a> :A) (<a href="#coalton-classes-default-class">Default</a> :B) (<a href="#coalton-classes-default-class">Default</a> :C) (<a href="#coalton-classes-default-class">Default</a> :D) (<a href="#coalton-classes-default-class">Default</a> :E) &rArr; <a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#coalton-classes-eq-class">Eq</a> :A) (<a href="#coalton-classes-eq-class">Eq</a> :B) (<a href="#coalton-classes-eq-class">Eq</a> :C) (<a href="#coalton-classes-eq-class">Eq</a> :D) (<a href="#coalton-classes-eq-class">Eq</a> :E) &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code>(<a href="#coalton-classes-hash-class">Hash</a> :A) (<a href="#coalton-classes-hash-class">Hash</a> :B) (<a href="#coalton-classes-hash-class">Hash</a> :C) (<a href="#coalton-classes-hash-class">Hash</a> :D) (<a href="#coalton-classes-hash-class">Hash</a> :E) &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :A :B :C :D :E)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :|0| :|1| :|2| :|3| :|4|)</code>

</details>



***

### Values

#### <a href="#coalton-tuple-fst-value"><code>(FST (TUPLE A _))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L35-L37">src</a></sub></sup><a name="coalton-tuple-fst-value"></a>
<code>&forall; :A :B. <a href="#coalton-classes-tuple-type">Tuple</a> :A :B &rarr; :A</code>

Get the first element of a tuple.



***

#### <a href="#coalton-tuple-sequence-tuple-value"><code>(SEQUENCE-TUPLE (TUPLE A? B?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L45-L51">src</a></sub></sup><a name="coalton-tuple-sequence-tuple-value"></a>
<code>&forall; :M :A :B. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-classes-tuple-type">Tuple</a> (:M :A) (:M :B) &rarr; :M (<a href="#coalton-classes-tuple-type">Tuple</a> :A :B)</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#coalton-tuple-sequence-tuple3-value"><code>(SEQUENCE-TUPLE3 (TUPLE3 A? B? C?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L62-L69">src</a></sub></sup><a name="coalton-tuple-sequence-tuple3-value"></a>
<code>&forall; :M :A :B :C. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-tuple-tuple3-type">Tuple3</a> (:M :A) (:M :B) (:M :C) &rarr; :M (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :A :B :C)</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#coalton-tuple-sequence-tuple4-value"><code>(SEQUENCE-TUPLE4 (TUPLE4 A? B? C? D?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L81-L89">src</a></sub></sup><a name="coalton-tuple-sequence-tuple4-value"></a>
<code>&forall; :M :A :B :C :D. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-tuple-tuple4-type">Tuple4</a> (:M :A) (:M :B) (:M :C) (:M :D) &rarr; :M (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :A :B :C :D)</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#coalton-tuple-sequence-tuple5-value"><code>(SEQUENCE-TUPLE5 (TUPLE5 A? B? C? D? E?))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L102-L111">src</a></sub></sup><a name="coalton-tuple-sequence-tuple5-value"></a>
<code>&forall; :M :A :B :C :D :E. <a href="#coalton-classes-monad-class">Monad</a> :M &rArr; <a href="#coalton-tuple-tuple5-type">Tuple5</a> (:M :A) (:M :B) (:M :C) (:M :D) (:M :E) &rarr; :M (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :A :B :C :D :E)</code>

Flatten a Tuple of wrapped-values. Particularly useful for types like
(Tuple (Optional :a) (Optional :b)), etc.



***

#### <a href="#coalton-tuple-snd-value"><code>(SND (TUPLE _ B))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/tuple.ct#L40-L42">src</a></sub></sup><a name="coalton-tuple-snd-value"></a>
<code>&forall; :A :B. <a href="#coalton-classes-tuple-type">Tuple</a> :A :B &rarr; :B</code>

Get the second element of a tuple.



***

# Package `COALTON/TYPES`<a name="coalton-types-package"></a>

### Types

#### <a href="#coalton-types-lisptype-type"><code>LispType</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L44-L45">src</a></sub></sup><a name="coalton-types-lisptype-type"></a>

The runtime representation of a Coalton type as a Lisp type.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-types-lisptype-type">LispType</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-types-lisptype-type">LispType</a></code>
- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-types-lisptype-type">LispType</a></code>

</details>



***

#### <a href="#coalton-types-proxy-type"><code>Proxy</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L22-L24">src</a></sub></sup><a name="coalton-types-proxy-type"></a>
- <code>Proxy</code> 

Proxy holds no data, but has a phantom type parameter.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-types-proxy-type">Proxy</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> (<a href="#coalton-types-proxy-type">Proxy</a> :A)</code>

</details>



***

#### <a href="#coalton-types-typescheme-type"><code>TypeScheme</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L48-L49">src</a></sub></sup><a name="coalton-types-typescheme-type"></a>

An opaque reflection object representing a Coalton type scheme.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-show-show-class">Show</a> <a href="#coalton-types-typescheme-type">TypeScheme</a></code>

</details>



***

### Classes

#### <a href="#coalton-types-runtimerepr-class"><code>RuntimeRepr</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L51-L57">src</a></sub></sup><a name="coalton-types-runtimerepr-class"></a>
<code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A</code>


Types which have a runtime LispType representation.

The compiler will auto-generate instances of `RuntimeRepr` for all defined types.

Methods:
- <code>RUNTIME-REPR :: <a href="#coalton-types-proxy-type">Proxy</a> :A &rarr; <a href="#coalton-types-lisptype-type">LispType</a></code><br/>The type emitted by the Coalton compiler for the type parameter to the given Proxy.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-xmath-realalgebraic-poly-type">Poly</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-opendirection-type">OpenDirection</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-ifexists-type">IfExists</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-file-filestream-type">FileStream</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-fileerror-type">FileError</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-file-pathname-type">Pathname</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-system-lispcondition-type">LispCondition</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-system-meteredresult-type">MeteredResult</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-seq-seq-type">Seq</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-ordmap-ordmap-type">OrdMap</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-ordmap-mappair-type">MapPair</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-ordtree-ordtree-type">OrdTree</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-experimental-do-control-loops-adv-loopt-type">LoopT</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-experimental-do-control-loops-adv-step-type">Step</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-freet-freet-type">FreeT</a> :|0| :|1| :|2|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-freet-freef-type">FreeF</a> :|0| :|1| :|2|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-free-free-type">Free</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-optionalt-optionalt-type">OptionalT</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-resultt-resultt-type">ResultT</a> :|0| :|1| :|2|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-environment-envt-type">EnvT</a> :|0| :|1| :|2|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-environment-env-type">Env</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-statet-statet-type">StateT</a> :|0| :|1| :|2|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-state-st-type">ST</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-monad-identity-identity-type">Identity</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-queue-queue-type">Queue</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-hashmap-insertionmode-type">InsertionMode</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-hashmap-hashmap-type">HashMap</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-hashmap-hmnode-type">HmNode</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-hashmap-hmentry-type">HmEntry</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-hashtable-hashtable-type">HashTable</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-slice-slice-type">Slice</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-vector-vector-type">Vector</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-lisparray-lisparray-type">LispArray</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-lisparray-lisparraybuilder-type">LispArrayBuilder</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-iterator-rangestatus-type">RangeStatus</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-iterator-iterator-type">Iterator</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-tuple-tuple5-type">Tuple5</a> :|0| :|1| :|2| :|3| :|4|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-tuple-tuple4-type">Tuple4</a> :|0| :|1| :|2| :|3|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-tuple-tuple3-type">Tuple3</a> :|0| :|1| :|2|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-cell-cell-type">Cell</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :T &rArr; <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-math-complex-complex-type">Complex</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-math-real-quantization-type">Quantization</a> :|0|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-symbol-symbol-type">Symbol</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-show-%outputstream-type">%OutputStream</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-tuple-type">Tuple</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-classes-ordering-type">Ordering</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-classes-hash-type">Hash</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-classes-result-type">Result</a> :|0| :|1|)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-ufix-type">UFix</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-ifix-type">IFix</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i64-type">I64</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i32-type">I32</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i16-type">I16</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-i8-type">I8</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u64-type">U64</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u32-type">U32</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u16-type">U16</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-u8-type">U8</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-bit-type">Bit</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-types-proxy-type">Proxy</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-types-lisptype-type">LispType</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-optional-type">Optional</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (:A &rarr; :B)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-f64-type">F64</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-f32-type">F32</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-integer-type">Integer</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-char-type">Char</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-boolean-type">Boolean</a></code>

</details>



***

### Values

#### <a href="#coalton-types-as-proxy-of-value"><code>(AS-PROXY-OF X _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L34-L36">src</a></sub></sup><a name="coalton-types-as-proxy-of-value"></a>
<code>&forall; :A. :A * <a href="#coalton-types-proxy-type">Proxy</a> :A &rarr; :A</code>

Returns the parameter, forcing the proxy to have the same type as the parameter.



***

#### <a href="#coalton-types-proxy-inner-value"><code>(PROXY-INNER _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L40-L41">src</a></sub></sup><a name="coalton-types-proxy-inner-value"></a>
<code>&forall; :A :B. <a href="#coalton-types-proxy-type">Proxy</a> (:A :B) &rarr; <a href="#coalton-types-proxy-type">Proxy</a> :B</code>


***

#### <a href="#coalton-types-proxy-of-value"><code>(PROXY-OF _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L28-L30">src</a></sub></sup><a name="coalton-types-proxy-of-value"></a>
<code>&forall; :A. :A &rarr; <a href="#coalton-types-proxy-type">Proxy</a> :A</code>

Returns a Proxy containing the type of the parameter.



***

#### <a href="#coalton-types-runtime-repr-of-value"><code>(RUNTIME-REPR-OF _)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/types.ct#L63-L65">src</a></sub></sup><a name="coalton-types-runtime-repr-of-value"></a>
<code>&forall; :A. <a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> :A &rArr; :A &rarr; <a href="#coalton-types-lisptype-type">LispType</a></code>

Returns the runtime representation of the type of the given value.



***

# Package `COALTON/UTILS`<a name="coalton-utils-package"></a>

### Values

#### <a href="#coalton-utils-concat-string-value"><code>(CONCAT-STRING A B)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/utils.ct#L53-L55">src</a></sub></sup><a name="coalton-utils-concat-string-value"></a>
<code><a href="#coalton-string-type">String</a> * <a href="#coalton-string-type">String</a> &rarr; <a href="#coalton-string-type">String</a></code>


***

# Package `COALTON/VECTOR`<a name="coalton-vector-package"></a>


Resizable mutable vectors with efficient indexed access and amortized end updates.

### Types

#### <a href="#coalton-vector-vector-type"><code>Vector</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L64-L64">src</a></sub></sup><a name="coalton-vector-vector-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-default-class">Default</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :A &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-foldable-class">Foldable</a> <a href="#coalton-vector-vector-type">Vector</a></code>
- <code><a href="#coalton-classes-fromcollectioncomprehension-class">FromCollectionComprehension</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-fromitemizedcollection-class">FromItemizedCollection</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-iterator-fromiterator-class">FromIterator</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A</code>
- <code><a href="#coalton-classes-functor-class">Functor</a> <a href="#coalton-vector-vector-type">Vector</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-list-type">List</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-seq-seq-type">Seq</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-slice-slice-type">Slice</a> :A)</code>
- <code><a href="#coalton-classes-into-class">Into</a> (<a href="#coalton-vector-vector-type">Vector</a> <a href="#coalton-char-type">Char</a>) <a href="#coalton-string-type">String</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-string-type">String</a> (<a href="#coalton-vector-vector-type">Vector</a> <a href="#coalton-char-type">Char</a>)</code>
- <code><a href="#coalton-iterator-intoiterator-class">IntoIterator</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) :A</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-slice-slice-type">Slice</a> :A) (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-classes-iso-class">Iso</a> (<a href="#coalton-vector-vector-type">Vector</a> :A) (<a href="#coalton-list-type">List</a> :A)</code>
- <code><a href="#coalton-classes-monoid-class">Monoid</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> (<a href="#coalton-vector-vector-type">Vector</a> :T) :T</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-vector-vector-type">Vector</a> :|0|)</code>
- <code><a href="#coalton-classes-semigroup-class">Semigroup</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-show-show-class">Show</a> :A &rArr; <a href="#coalton-show-show-class">Show</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>
- <code><a href="#coalton-slice-sliceable-class">Sliceable</a> (<a href="#coalton-vector-vector-type">Vector</a> :A)</code>

</details>



***

### Values

#### <a href="#coalton-vector-append-value"><code>(APPEND V1 V2)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L253-L258">src</a></sub></sup><a name="coalton-vector-append-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Create a new vector containing the elements of `v1` followed by the elements of `v2`.



***

#### <a href="#coalton-vector-capacity-value"><code>(CAPACITY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L113-L116">src</a></sub></sup><a name="coalton-vector-capacity-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Returns the number of elements that `v` can store without resizing.



***

#### <a href="#coalton-vector-clear!-value"><code>(CLEAR! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L165-L167">src</a></sub></sup><a name="coalton-vector-clear!-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; Void</code>

Set the capacity of `v` to `0`.



***

#### <a href="#coalton-vector-copy-value"><code>(COPY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L132-L137">src</a></sub></sup><a name="coalton-vector-copy-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Return a new vector containing the same elements as `v`.



***

#### <a href="#coalton-vector-empty?-value"><code>(EMPTY? V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L120-L122">src</a></sub></sup><a name="coalton-vector-empty?-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `v` empty?



***

#### <a href="#coalton-vector-extend!-value"><code>(EXTEND! VEC ITER)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L310-L328">src</a></sub></sup><a name="coalton-vector-extend!-value"></a>
<code>&forall; :ELT :CONTAINER. <a href="#coalton-iterator-intoiterator-class">IntoIterator</a> :CONTAINER :ELT &rArr; <a href="#coalton-vector-vector-type">Vector</a> :ELT * :CONTAINER &rarr; Void</code>

Push every element in `iter` to the end of `vec`.



***

#### <a href="#coalton-vector-find-elem-value"><code>(FIND-ELEM E V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L238-L250">src</a></sub></sup><a name="coalton-vector-find-elem-value"></a>
<code>&forall; :A. <a href="#coalton-classes-eq-class">Eq</a> :A &rArr; :A * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> <a href="#coalton-ufix-type">UFix</a></code>

Find the index of element `e` in `v`.



***

#### <a href="#coalton-vector-head-value"><code>(HEAD V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L215-L217">src</a></sub></sup><a name="coalton-vector-head-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Return the first item of `v`.



***

#### <a href="#coalton-vector-head-unsafe-value"><code>(HEAD-UNSAFE V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L221-L223">src</a></sub></sup><a name="coalton-vector-head-unsafe-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; :A</code>

Return the first item of `v` without first checking if `v` is empty.



***

#### <a href="#coalton-vector-index-value"><code>(INDEX INDEX V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L191-L195">src</a></sub></sup><a name="coalton-vector-index-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Return the `index`th element of `v`.



***

#### <a href="#coalton-vector-index-unsafe-value"><code>(INDEX-UNSAFE IDX V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L199-L202">src</a></sub></sup><a name="coalton-vector-index-unsafe-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; :A</code>

Return the `idx`th element of `v` without checking if the element exists.



***

#### <a href="#coalton-vector-last-value"><code>(LAST V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L226-L230">src</a></sub></sup><a name="coalton-vector-last-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Return the last element of `v`.



***

#### <a href="#coalton-vector-last-unsafe-value"><code>(LAST-UNSAFE V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L233-L235">src</a></sub></sup><a name="coalton-vector-last-unsafe-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; :A</code>

Return the last element of `v` without first checking if `v` is empty.



***

#### <a href="#coalton-vector-length-value"><code>(LENGTH V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L94-L97">src</a></sub></sup><a name="coalton-vector-length-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Returns the length of `v`.



***

#### <a href="#coalton-vector-new-value"><code>(NEW)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L68-L70">src</a></sub></sup><a name="coalton-vector-new-value"></a>
<code>&forall; :A. Void &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Create a new empty vector



***

#### <a href="#coalton-vector-pop!-value"><code>(POP! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L177-L181">src</a></sub></sup><a name="coalton-vector-pop!-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Remove and return the last item of `v`.



***

#### <a href="#coalton-vector-pop-unsafe!-value"><code>(POP-UNSAFE! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L185-L188">src</a></sub></sup><a name="coalton-vector-pop-unsafe!-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; :A</code>

Remove and return the last item of `v` without checking if the vector is empty.



***

#### <a href="#coalton-vector-push!-value"><code>(PUSH! ITEM V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L171-L174">src</a></sub></sup><a name="coalton-vector-push!-value"></a>
<code>&forall; :A. :A * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Append `item` to `v` and resize `v` if necessary, returning the index of the new item.



***

#### <a href="#coalton-vector-resect!-value"><code>(RESECT! V START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L152-L161">src</a></sub></sup><a name="coalton-vector-resect!-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A * <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; Void</code>

Destructively kills a subsequence in a vector bounded by given indices.

`start` index is inclusive and `end` index is exclusive.



***

#### <a href="#coalton-vector-reverse-value"><code>(REVERSE V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L267-L273">src</a></sub></sup><a name="coalton-vector-reverse-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Returns a fresh vector with the elements of vector `v` in reverse order.  The original vector isn't modified.



***

#### <a href="#coalton-vector-reverse!-value"><code>(REVERSE! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L261-L264">src</a></sub></sup><a name="coalton-vector-reverse!-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Returns a vector with the elements of vector `v` in reverse order.  The original vector may be destroyed to produce the result.



***

#### <a href="#coalton-vector-set!-value"><code>(SET! IDX ITEM V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L206-L211">src</a></sub></sup><a name="coalton-vector-set!-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * :A * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; Void</code>

Set the `idx`th element of `v` to `item`. This function left intentionally unsafe because it does not have a return value to check.



***

#### <a href="#coalton-vector-set-capacity!-value"><code>(SET-CAPACITY! NEW-CAPACITY V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L140-L148">src</a></sub></sup><a name="coalton-vector-set-capacity!-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; Void</code>

Set the capacity of `v` to `new-capacity`. Setting the capacity to lower then the length will remove elements from the end.



***

#### <a href="#coalton-vector-singleton-value"><code>(SINGLETON X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L88-L90">src</a></sub></sup><a name="coalton-vector-singleton-value"></a>
<code>&forall; :A. :A &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Create a new vector with a single element equal to `x`



***

#### <a href="#coalton-vector-singleton?-value"><code>(SINGLETON? V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L126-L128">src</a></sub></sup><a name="coalton-vector-singleton?-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Is `v` a singleton?



***

#### <a href="#coalton-vector-sort!-value"><code>(SORT! V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L305-L307">src</a></sub></sup><a name="coalton-vector-sort!-value"></a>
<code>&forall; :A. <a href="#coalton-classes-ord-class">Ord</a> :A &rArr; <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; Void</code>

Sort a vector in-place in ascending order.



***

#### <a href="#coalton-vector-sort-by!-value"><code>(SORT-BY! F V)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L293-L301">src</a></sub></sup><a name="coalton-vector-sort-by!-value"></a>
<code>&forall; :A. (:A * :A &rarr; <a href="#coalton-boolean-type">Boolean</a>) * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; Void</code>

Sort a vector in-place with predicate function `f`.



***

#### <a href="#coalton-vector-subseq-value"><code>(SUBSEQ V START END)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L101-L109">src</a></sub></sup><a name="coalton-vector-subseq-value"></a>
<code>&forall; :A. <a href="#coalton-vector-vector-type">Vector</a> :A * <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Compute a subseq of a vector bounded by given indices.

`start` index is inclusive and `end` index is exclusive.



***

#### <a href="#coalton-vector-swap-remove!-value"><code>(SWAP-REMOVE! IDX VEC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L276-L280">src</a></sub></sup><a name="coalton-vector-swap-remove!-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; <a href="#coalton-optional-type">Optional</a> :A</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec`. Then return the removed element.



***

#### <a href="#coalton-vector-swap-remove-unsafe!-value"><code>(SWAP-REMOVE-UNSAFE! IDX VEC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L283-L290">src</a></sub></sup><a name="coalton-vector-swap-remove-unsafe!-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-vector-vector-type">Vector</a> :A &rarr; :A</code>

Remove the element `idx` from `vec` and replace it with the last element in `vec` without bounds checking. Then return the removed element.



***

#### <a href="#coalton-vector-with-capacity-value"><code>(WITH-CAPACITY N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L74-L77">src</a></sub></sup><a name="coalton-vector-with-capacity-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Create a new vector with `n` elements preallocated.



***

#### <a href="#coalton-vector-with-initial-element-value"><code>(WITH-INITIAL-ELEMENT N X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/library/vector.ct#L80-L84">src</a></sub></sup><a name="coalton-vector-with-initial-element-value"></a>
<code>&forall; :A. <a href="#coalton-ufix-type">UFix</a> * :A &rarr; <a href="#coalton-vector-vector-type">Vector</a> :A</code>

Create a new vector with `n` elements equal to `x`.



***

### Macros

#### <a href="#coalton-vector-make-macro"><code>MAKE (&amp;REST ELEMENTS)</code></a> <sup><sub>[MACRO]</sub></sup><a name="coalton-vector-make-macro"></a>

Construct a `Vector' containing the ELEMENTS, in the order listed.



***

# Package `COALTON/XMATH/BIG-FLOAT`<a name="coalton-xmath-big-float-package"></a>

### Types

#### <a href="#coalton-xmath-big-float-big-float-type"><code>Big-Float</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L164-L165">src</a></sub></sup><a name="coalton-xmath-big-float-big-float-type"></a>

An arbitrary (but fixed) precision floating point number.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-arith-transfinite-class">Transfinite</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>
- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>

</details>



***

#### <a href="#coalton-xmath-big-float-roundingmode-type"><code>RoundingMode</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L86-L86">src</a></sub></sup><a name="coalton-xmath-big-float-roundingmode-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

</details>



***

### Values

#### <a href="#coalton-xmath-big-float-bf-ee-value"><code>(BF-EE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L307-L310">src</a></sub></sup><a name="coalton-xmath-big-float-bf-ee-value"></a>
<code>Void &rarr; <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>

Return the value of ee = exp(1) to the currently set precision.



***

#### <a href="#coalton-xmath-big-float-bf-pi-value"><code>(BF-PI)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L278-L281">src</a></sub></sup><a name="coalton-xmath-big-float-bf-pi-value"></a>
<code>Void &rarr; <a href="#coalton-xmath-big-float-big-float-type">Big-Float</a></code>

Return the value of pi to the currently set precision.



***

#### <a href="#coalton-xmath-big-float-get-precision-value"><code>(GET-PRECISION)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L130-L133">src</a></sub></sup><a name="coalton-xmath-big-float-get-precision-value"></a>
<code>Void &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Get the current precision of Big-Float arithmetic.



***

#### <a href="#coalton-xmath-big-float-get-rounding-mode-value"><code>(GET-ROUNDING-MODE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L136-L139">src</a></sub></sup><a name="coalton-xmath-big-float-get-rounding-mode-value"></a>
<code>Void &rarr; <a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

Get the current rounding-mode of Big-Float arithmetic.



***

#### <a href="#coalton-xmath-big-float-set-precision!-value"><code>(SET-PRECISION! PREC-BITS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L112-L119">src</a></sub></sup><a name="coalton-xmath-big-float-set-precision!-value"></a>
<code><a href="#coalton-ufix-type">UFix</a> &rarr; Void</code>

Set the precision of Big-Float arithmetic to PREC-BITS bits.



***

#### <a href="#coalton-xmath-big-float-set-rounding-mode!-value"><code>(SET-ROUNDING-MODE! R)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L122-L127">src</a></sub></sup><a name="coalton-xmath-big-float-set-rounding-mode!-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a> &rarr; Void</code>

Set the global rounding mode for Big-Float operations.



***

#### <a href="#coalton-xmath-big-float-with-precision-value"><code>(WITH-PRECISION F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L152-L154">src</a></sub></sup><a name="coalton-xmath-big-float-with-precision-value"></a>
<code>&forall; :A. (Void &rarr; :A) &key (:precision <a href="#coalton-ufix-type">UFix</a>) &rarr; :A</code>

Call F with a temporary Big-Float PRECISION.



***

#### <a href="#coalton-xmath-big-float-with-precision-rounding-value"><code>(WITH-PRECISION-ROUNDING F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L143-L148">src</a></sub></sup><a name="coalton-xmath-big-float-with-precision-rounding-value"></a>
<code>&forall; :A. (Void &rarr; :A) &key (:precision <a href="#coalton-ufix-type">UFix</a>) (:rounding <a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a>) &rarr; :A</code>

Call F with a temporary Big-Float PRECISION and ROUNDING mode.



***

#### <a href="#coalton-xmath-big-float-with-rounding-value"><code>(WITH-ROUNDING F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L158-L160">src</a></sub></sup><a name="coalton-xmath-big-float-with-rounding-value"></a>
<code>&forall; :A. (Void &rarr; :A) &key (:rounding <a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a>) &rarr; :A</code>

Call F with a temporary Big-Float ROUNDING mode.



***

#### <a href="#coalton-xmath-big-float-rnda-value"><code>RNDA</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L103-L105">src</a></sub></sup><a name="coalton-xmath-big-float-rnda-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

RouND Away from zero.



***

#### <a href="#coalton-xmath-big-float-rndd-value"><code>RNDD</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L100-L102">src</a></sub></sup><a name="coalton-xmath-big-float-rndd-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

RouND Down, toward negative infinity.



***

#### <a href="#coalton-xmath-big-float-rndf-value"><code>RNDF</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L106-L108">src</a></sub></sup><a name="coalton-xmath-big-float-rndf-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

Faithful rounding (experimental).



***

#### <a href="#coalton-xmath-big-float-rndn-value"><code>RNDN</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L91-L93">src</a></sub></sup><a name="coalton-xmath-big-float-rndn-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

RouND to Nearest, with the even rounding rule.



***

#### <a href="#coalton-xmath-big-float-rndna-value"><code>RNDNA</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L88-L90">src</a></sub></sup><a name="coalton-xmath-big-float-rndna-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

RouND to Nearest Away.



***

#### <a href="#coalton-xmath-big-float-rndu-value"><code>RNDU</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L97-L99">src</a></sub></sup><a name="coalton-xmath-big-float-rndu-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

RouND Up, toward positive infinity.



***

#### <a href="#coalton-xmath-big-float-rndz-value"><code>RNDZ</code></a> <sup><sub>[VALUE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/big-float/impl-sbcl.ct#L94-L96">src</a></sub></sup><a name="coalton-xmath-big-float-rndz-value"></a>
<code><a href="#coalton-xmath-big-float-roundingmode-type">RoundingMode</a></code>

RouND toward Zero.



***

# Package `COALTON/XMATH/COMPUTABLE-REALS`<a name="coalton-xmath-computable-reals-package"></a>

### Types

#### <a href="#coalton-xmath-computable-reals-creal-type"><code>CReal</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L38-L38">src</a></sub></sup><a name="coalton-xmath-computable-reals-creal-type"></a>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-elementary-class">Elementary</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f32-type">F32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-f64-type">F64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i16-type">I16</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i32-type">I32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i64-type">I64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-i8-type">I8</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ifix-type">IFix</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u16-type">U16</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u32-type">U32</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u64-type">U64</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-u8-type">U8</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-ufix-type">UFix</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-polar-class">Polar</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>
- <code><a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> <a href="#coalton-xmath-computable-reals-creal-type">CReal</a></code>

</details>



***

### Values

#### <a href="#coalton-xmath-computable-reals-approx-value"><code>(APPROX X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L304-L316">src</a></sub></sup><a name="coalton-xmath-computable-reals-approx-value"></a>
<code><a href="#coalton-xmath-computable-reals-creal-type">CReal</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-integer-type">Integer</a></code>

Computes an approximation of the bits of a given
`CReal`. Specifically, given an object of type `CReal` `x` and a
non-negative integer `k`, return an integer $a$ with

$$
\vert a\cdot 2^{-\mathtt{k}} - \mathtt{x}\vert \leq 2^{-\mathtt{k}}.
$$

See `rational` or `rationalize` to produce a rational approximation of
`CReal`.



***

#### <a href="#coalton-xmath-computable-reals-comparison-threshold-value"><code>(COMPARISON-THRESHOLD)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L48-L57">src</a></sub></sup><a name="coalton-xmath-computable-reals-comparison-threshold-value"></a>
<code>Void &rarr; <a href="#coalton-ufix-type">UFix</a></code>

Returns the current `CReal` comparison threshold measured as a number
of bits after the 'decimal' point.

This threshold is used to ensure `Eq` and `Ord` instances
terminate. (In general, computable real arithmetic is undecidable.)
Note that if the production of a `CReal` depends on comparison, *there
is no guarantee that the `CReal` will be accurate to any precision*.



***

#### <a href="#coalton-xmath-computable-reals-cr-print-value"><code>(CR-PRINT X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L348-L351">src</a></sub></sup><a name="coalton-xmath-computable-reals-cr-print-value"></a>
<code><a href="#coalton-xmath-computable-reals-creal-type">CReal</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Prints a real `x` up to `k` bits of precision.



***

#### <a href="#coalton-xmath-computable-reals-rational-approx-value"><code>(RATIONAL-APPROX X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L319-L326">src</a></sub></sup><a name="coalton-xmath-computable-reals-rational-approx-value"></a>
<code><a href="#coalton-xmath-computable-reals-creal-type">CReal</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-fraction-type">Fraction</a></code>

Produce a rational approximation of `x` called $r$ such that

$$
\vert r - \mathtt{x} \vert < 2^{-\mathtt{k}}.
$$



***

#### <a href="#coalton-xmath-computable-reals-rationalize-value"><code>(RATIONALIZE X K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L329-L339">src</a></sub></sup><a name="coalton-xmath-computable-reals-rationalize-value"></a>
<code><a href="#coalton-xmath-computable-reals-creal-type">CReal</a> * <a href="#coalton-ufix-type">UFix</a> &rarr; <a href="#coalton-fraction-type">Fraction</a></code>

Produce a rational approximation of `x` called $r$ such that

$$
\vert r - \mathtt{x} \vert < 2^{-\mathtt{k}},
$$

taking into account the maximum precision specified by `k` to return
the simplest possible such approximation.



***

#### <a href="#coalton-xmath-computable-reals-set-comparison-threshold!-value"><code>(SET-COMPARISON-THRESHOLD! K)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L40-L46">src</a></sub></sup><a name="coalton-xmath-computable-reals-set-comparison-threshold!-value"></a>
<code>&forall; :A. :A &rarr; <a href="#coalton-unit-type">Unit</a></code>

Sets the global `CReal` comparison threshold to k bits after the 'decimal' point.

See `comparison-threshold` for more details.



***

#### <a href="#coalton-xmath-computable-reals-with-comparison-threshold-value"><code>(WITH-COMPARISON-THRESHOLD F)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/computable-reals/computable-reals.ct#L60-L64">src</a></sub></sup><a name="coalton-xmath-computable-reals-with-comparison-threshold-value"></a>
<code>&forall; :A. (Void &rarr; :A) &key (:bits <a href="#coalton-ufix-type">UFix</a>) &rarr; :A</code>

Call F with a temporary `CReal` comparison threshold of BITS.



***

# Package `COALTON/XMATH/DUAL`<a name="coalton-xmath-dual-package"></a>



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

#### <a href="#coalton-xmath-dual-dual-type"><code>Dual #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :T&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dual.ct#L82-L90">src</a></sub></sup><a name="coalton-xmath-dual-dual-type"></a>

Representation of a dual number in the form $a + b\varepsilon$ where
$a$ and $b$ are real numbers and $\varepsilon$ satisfies
$\varepsilon^2 = 0$ and $\varepsilon \neq 0$.

Note: `Eq`, and `Ord` and `Hash` only make use of the primal
component.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-classes-num-class">Num</a> :T) (<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) &rArr; <a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code>(<a href="#coalton-classes-num-class">Num</a> :T) (<a href="#coalton-math-elementary-radical-class">Radical</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) &rArr; <a href="#coalton-math-elementary-radical-class">Radical</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code>(<a href="#coalton-classes-num-class">Num</a> :T) (<a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-radical-class">Radical</a> :T) &rArr; <a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :T &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>  
Note: Eq only compares the primal component.
- <code><a href="#coalton-classes-hash-class">Hash</a> :T &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>  
Note: Hash only considers the primal component in order to be consistent with Eq.
- <code><a href="#coalton-classes-num-class">Num</a> :T &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :T &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>  
Note: Ord only compares the primal component.
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T &rArr; <a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-xmath-dual-dual-type">Dual</a> :|0|)</code>

</details>



***

### Values

#### <a href="#coalton-xmath-dual-dual-part-value"><code>(DUAL-PART (DUAL _ D))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dual.ct#L98-L100">src</a></sub></sup><a name="coalton-xmath-dual-dual-part-value"></a>
<code>&forall; :T. <a href="#coalton-xmath-dual-dual-type">Dual</a> :T &rarr; :T</code>

The dual (i.e., derivative) part of a dual number.



***

#### <a href="#coalton-xmath-dual-primal-part-value"><code>(PRIMAL-PART (DUAL P _))</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dual.ct#L93-L95">src</a></sub></sup><a name="coalton-xmath-dual-primal-part-value"></a>
<code>&forall; :T. <a href="#coalton-xmath-dual-dual-type">Dual</a> :T &rarr; :T</code>

The primal (i.e., real) part of a dual number.



***

# Package `COALTON/XMATH/DYADIC`<a name="coalton-xmath-dyadic-package"></a>

### Types

#### <a href="#coalton-xmath-dyadic-dyadic-type"><code>Dyadic</code></a> <sup><sub>[TYPE] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dyadic.ct#L33-L35">src</a></sub></sup><a name="coalton-xmath-dyadic-dyadic-type"></a>
- <code>(Dyadic <a href="#coalton-integer-type">Integer</a> <a href="#coalton-integer-type">Integer</a>)</code>

`(Dyadic n k)` represents the rational $\mathtt{n}\cdot 2^{\mathtt{k}}$.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a> <a href="#coalton-fraction-type">Fraction</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-math-real-rational-class">Rational</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>

</details>



***

### Values

#### <a href="#coalton-xmath-dyadic-scale-value"><code>(SCALE X J)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dyadic.ct#L162-L165">src</a></sub></sup><a name="coalton-xmath-dyadic-scale-value"></a>
<code><a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a> * <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>

Scales a dyadic `x` by $2^{\mathtt{k}}$.



***

#### <a href="#coalton-xmath-dyadic-shift-value"><code>(SHIFT K A)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dyadic.ct#L168-L177">src</a></sub></sup><a name="coalton-xmath-dyadic-shift-value"></a>
<code><a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a> &rarr; <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>

Shift dyadic `a` to its floor with $\mathtt{k}+1$ bits of precision.



***

#### <a href="#coalton-xmath-dyadic-simplify-value"><code>(SIMPLIFY D)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dyadic.ct#L106-L110">src</a></sub></sup><a name="coalton-xmath-dyadic-simplify-value"></a>
<code><a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a> &rarr; <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>

Simplifies a dyadic by maximizing the absolute value of the exponent.



***

#### <a href="#coalton-xmath-dyadic-simplify-integer-value"><code>(SIMPLIFY-INTEGER N)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/dyadic.ct#L95-L104">src</a></sub></sup><a name="coalton-xmath-dyadic-simplify-integer-value"></a>
<code><a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-xmath-dyadic-dyadic-type">Dyadic</a></code>

Finds the simplest dyadic given an integer.



***

# Package `COALTON/XMATH/FFT`<a name="coalton-xmath-fft-package"></a>


A coalton package for performing FFTs.

### Classes

#### <a href="#coalton-xmath-fft-fftcyclicgroup-class"><code>FFTCyclicGroup</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L149-L158">src</a></sub></sup><a name="coalton-xmath-fft-fftcyclicgroup-class"></a>
<code><a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T</code>


A class of types, each of which is a mathematical cyclic group.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>CYCLIC-ADD-IDENTITY :: :T</code>
- <code>CYCLIC-ADD :: :T * :T &rarr; :T</code>
- <code>CYCLIC-ADD-INVERSE :: :T &rarr; :T</code>
- <code>CYCLIC-NTH-GENERATOR :: <a href="#coalton-ufix-type">UFix</a> &rarr; :T</code><br/>A function which returns a primitive `n`th root of unity.
<details>
<summary>Instances</summary>

- <code><a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>

</details>



***

#### <a href="#coalton-xmath-fft-fftfield-class"><code>FFTField</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L139-L143">src</a></sub></sup><a name="coalton-xmath-fft-fftfield-class"></a>
<code><a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T &rArr; <a href="#coalton-xmath-fft-fftfield-class">FFTField</a> :T</code>


A class of types, each of which is a mathematical field.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>MULTIPLY-INVERSE :: :T &rarr; :T</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-xmath-fft-fftfield-class">FFTField</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-xmath-fft-fftfield-class">FFTField</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>

</details>



***

#### <a href="#coalton-xmath-fft-fftgroup-class"><code>FFTGroup</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L120-L126">src</a></sub></sup><a name="coalton-xmath-fft-fftgroup-class"></a>
<code><a href="#coalton-xmath-fft-fftgroup-class">FFTGroup</a> :T</code>


A class of types, each of which is a mathematical group.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>ADD-IDENTITY :: :T</code>
- <code>ADD :: :T * :T &rarr; :T</code>
- <code>ADD-INVERSE :: :T &rarr; :T</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-xmath-fft-fftgroup-class">FFTGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-xmath-fft-fftgroup-class">FFTGroup</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>

</details>



***

#### <a href="#coalton-xmath-fft-fftring-class"><code>FFTRing</code></a> <sup><sub>[CLASS] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L132-L137">src</a></sub></sup><a name="coalton-xmath-fft-fftring-class"></a>
<code><a href="#coalton-xmath-fft-fftgroup-class">FFTGroup</a> :T &rArr; <a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T</code>


A class of types, each of which is a mathematical ring.

These are types which are valid elements for a collection which may undergo a discrete Fourier transform. Examples include complex floating-point numbers and finite (modular) integers.

Methods:
- <code>MULTIPLY-IDENTITY :: :T</code>
- <code>MULTIPLY :: :T * :T &rarr; :T</code>
<details>
<summary>Instances</summary>

- <code><a href="#coalton-xmath-fft-fftring-class">FFTRing</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f64-type">F64</a>)</code>
- <code><a href="#coalton-xmath-fft-fftring-class">FFTRing</a> (<a href="#coalton-math-complex-complex-type">Complex</a> <a href="#coalton-f32-type">F32</a>)</code>

</details>



***

### Values

#### <a href="#coalton-xmath-fft-dif-fft-raw-value"><code>(DIF-FFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L265-L278">src</a></sub></sup><a name="coalton-xmath-fft-dif-fft-raw-value"></a>
<code>&forall; :T :C :D. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) &rArr; :C * :D &rarr; Void</code>

A decimation-in-frequency fast fourier transform, reading from `src` and writing to `dst`.

Input: natural order
Output: bit-reversed order
Normalization: none



***

#### <a href="#coalton-xmath-fft-dif-ifft-raw-value"><code>(DIF-IFFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L285-L298">src</a></sub></sup><a name="coalton-xmath-fft-dif-ifft-raw-value"></a>
<code>&forall; :T :C :D. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) &rArr; :C * :D &rarr; Void</code>

A decimation-in-frequency inverse fast fourier transform, reading from `src` and writing to `dst`.

Input: natural order
Output: bit-reversed order
Normalization: none



***

#### <a href="#coalton-xmath-fft-dit-fft-raw-value"><code>(DIT-FFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L410-L424">src</a></sub></sup><a name="coalton-xmath-fft-dit-fft-raw-value"></a>
<code>&forall; :T :C :D. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) &rArr; :C * :D &rarr; Void</code>

A decimation-in-time fast fourier transform, reading from `src` and writing to `dst`.

Input: bit-reversed order
Output: natural order
Normalization: none



***

#### <a href="#coalton-xmath-fft-dit-ifft-raw-value"><code>(DIT-IFFT-RAW DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L431-L445">src</a></sub></sup><a name="coalton-xmath-fft-dit-ifft-raw-value"></a>
<code>&forall; :T :C :D. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) &rArr; :C * :D &rarr; Void</code>

A decimation-in-time inverse fast fourier transform, reading from `src` and writing to `dst`.

Input: bit-reversed order
Output: natural order
Normalization: none



***

#### <a href="#coalton-xmath-fft-divide-value"><code>(DIVIDE X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L146-L147">src</a></sub></sup><a name="coalton-xmath-fft-divide-value"></a>
<code>&forall; :T. <a href="#coalton-xmath-fft-fftfield-class">FFTField</a> :T &rArr; :T * :T &rarr; :T</code>


***

#### <a href="#coalton-xmath-fft-fft-value"><code>(FFT STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L528-L540">src</a></sub></sup><a name="coalton-xmath-fft-fft-value"></a>
<code>&forall; :T :C :D. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) &rArr; :C &rarr; :D</code>

Perform a fast Fourier transform on the data in `storage`.



***

#### <a href="#coalton-xmath-fft-fft!-value"><code>(FFT! STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L454-L465">src</a></sub></sup><a name="coalton-xmath-fft-fft!-value"></a>
<code>&forall; :T :C. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) &rArr; :C &rarr; :C</code>

Perform an in-place fast Fourier transform on `storage`.



***

#### <a href="#coalton-xmath-fft-fft-into!-value"><code>(FFT-INTO! DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L490-L502">src</a></sub></sup><a name="coalton-xmath-fft-fft-into!-value"></a>
<code>&forall; :T :D :C. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftring-class">FFTRing</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) &rArr; :D * :C &rarr; :D</code>

Perform a fast Fourier transform of `src`, writing the result to `dst`. If `dst` is longer than `src`, then remaining elements of `dst` are left unmutated.



***

#### <a href="#coalton-xmath-fft-ifft-value"><code>(IFFT STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L545-L561">src</a></sub></sup><a name="coalton-xmath-fft-ifft-value"></a>
<code>&forall; :T :C :D. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftfield-class">FFTField</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) (<a href="#coalton-classes-num-class">Num</a> :T) &rArr; :C &rarr; :D</code>

Perform an inverse fast Fourier transform on the data in `storage`.



***

#### <a href="#coalton-xmath-fft-ifft!-value"><code>(IFFT! STORAGE)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L470-L485">src</a></sub></sup><a name="coalton-xmath-fft-ifft!-value"></a>
<code>&forall; :T :C. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-xmath-fft-fftfield-class">FFTField</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) (<a href="#coalton-classes-num-class">Num</a> :T) &rArr; :C &rarr; :C</code>

Perform an in-place inverse fast Fourier transform on `storage`.



***

#### <a href="#coalton-xmath-fft-ifft-into!-value"><code>(IFFT-INTO! DST SRC)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L507-L523">src</a></sub></sup><a name="coalton-xmath-fft-ifft-into!-value"></a>
<code>&forall; :T :D :C. (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :C :T) (<a href="#coalton-randomaccess-randomaccess-class">RandomAccess</a> :D :T) (<a href="#coalton-xmath-fft-fftfield-class">FFTField</a> :T) (<a href="#coalton-xmath-fft-fftcyclicgroup-class">FFTCyclicGroup</a> :T) (<a href="#coalton-classes-num-class">Num</a> :T) &rArr; :D * :C &rarr; :D</code>

Perform an inverse fast Fourier transform of `src`, writing the result to `dst`. If `dst` is longer than `src`, then remaining elements of `dst` are left unmutated.



***

#### <a href="#coalton-xmath-fft-subtract-value"><code>(SUBTRACT X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/fft.ct#L129-L130">src</a></sub></sup><a name="coalton-xmath-fft-subtract-value"></a>
<code>&forall; :T. <a href="#coalton-xmath-fft-fftgroup-class">FFTGroup</a> :T &rArr; :T * :T &rarr; :T</code>


***

# Package `COALTON/XMATH/HYPERDUAL`<a name="coalton-xmath-hyperdual-package"></a>


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

#### <a href="#coalton-xmath-hyperdual-hyperdual-type"><code>Hyperdual #&lt;COALTON-IMPL/TYPECHECKER/TYPES:TYVAR :T&gt;</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L138-L145">src</a></sub></sup><a name="coalton-xmath-hyperdual-hyperdual-type"></a>

Representation of a hyperdual number in the form `a + bε₁ + cε₂ + dε₁ε₂` where `a`, `b`, `c`, and `d` are real numbers and `ε₁` and `ε₂` satisfy `εᵢ² = 0` and `ε₁ε₂ != 0`.

Note: `Eq`, and `Ord` and `Hash` only make use of the primal component.

<details>
<summary>Instances</summary>

- <code>(<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) &rArr; <a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code>(<a href="#coalton-math-elementary-radical-class">Radical</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-exponentiable-class">Exponentiable</a> :T) &rArr; <a href="#coalton-math-elementary-radical-class">Radical</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code>(<a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> :T) (<a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T) (<a href="#coalton-math-elementary-radical-class">Radical</a> :T) &rArr; <a href="#coalton-math-elementary-trigonometric-class">Trigonometric</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> :T &rArr; <a href="#coalton-math-complex-complexcomponent-class">ComplexComponent</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-eq-class">Eq</a> :T &rArr; <a href="#coalton-classes-eq-class">Eq</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-hash-class">Hash</a> :T &rArr; <a href="#coalton-classes-hash-class">Hash</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-num-class">Num</a> :T &rArr; <a href="#coalton-classes-into-class">Into</a> :T (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-num-class">Num</a> :T &rArr; <a href="#coalton-classes-num-class">Num</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-classes-ord-class">Ord</a> :T &rArr; <a href="#coalton-classes-ord-class">Ord</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> :T &rArr; <a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T)</code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :|0|)</code>

</details>



***

### Values

#### <a href="#coalton-xmath-hyperdual-d-x-value"><code>(D-X F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L328-L330">src</a></sub></sup><a name="coalton-xmath-hyperdual-d-x-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T &rarr; :T</code>

Compute f'(x).



***

#### <a href="#coalton-xmath-hyperdual-d-xx-value"><code>(D-XX F X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L333-L335">src</a></sub></sup><a name="coalton-xmath-hyperdual-d-xx-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T &rarr; :T</code>

Compute f''(x).



***

#### <a href="#coalton-xmath-hyperdual-gradient-value"><code>(GRADIENT F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L348-L351">src</a></sub></sup><a name="coalton-xmath-hyperdual-gradient-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; <a href="#coalton-list-type">List</a> :T</code>

Compute the gradient (∂f/∂x, ∂f/∂y) at the point (x, y).



***

#### <a href="#coalton-xmath-hyperdual-hessian-value"><code>(HESSIAN F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L374-L380">src</a></sub></sup><a name="coalton-xmath-hyperdual-hessian-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; <a href="#coalton-list-type">List</a> :T</code>

Compute the flat Hessian (∂²f/∂x², ∂²f/∂x∂y, ∂²f/∂y∂x, ∂²f/∂y²) at the point (x, y).



***

#### <a href="#coalton-xmath-hyperdual-laplacian-value"><code>(LAPLACIAN F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L369-L371">src</a></sub></sup><a name="coalton-xmath-hyperdual-laplacian-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; :T</code>

Compute the Laplacian ∂²f/∂x² + ∂²f/∂y² at the point (x, y).



***

#### <a href="#coalton-xmath-hyperdual-partial-x-value"><code>(PARTIAL-X F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L338-L340">src</a></sub></sup><a name="coalton-xmath-hyperdual-partial-x-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; :T</code>

Compute ∂f/∂x(x, y).



***

#### <a href="#coalton-xmath-hyperdual-partial-xx-value"><code>(PARTIAL-XX F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L354-L356">src</a></sub></sup><a name="coalton-xmath-hyperdual-partial-xx-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; :T</code>

Compute ∂²f/∂x²(x, y).



***

#### <a href="#coalton-xmath-hyperdual-partial-xy-value"><code>(PARTIAL-XY F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L359-L361">src</a></sub></sup><a name="coalton-xmath-hyperdual-partial-xy-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; :T</code>

Compute ∂²f/∂x∂y(x, y).



***

#### <a href="#coalton-xmath-hyperdual-partial-y-value"><code>(PARTIAL-Y F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L343-L345">src</a></sub></sup><a name="coalton-xmath-hyperdual-partial-y-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; :T</code>

Compute ∂f/∂y(x, y).



***

#### <a href="#coalton-xmath-hyperdual-partial-yy-value"><code>(PARTIAL-YY F X Y)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/hyperdual.ct#L364-L366">src</a></sub></sup><a name="coalton-xmath-hyperdual-partial-yy-value"></a>
<code>&forall; :T. <a href="#coalton-classes-num-class">Num</a> :T &rArr; (<a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T * <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T &rarr; <a href="#coalton-xmath-hyperdual-hyperdual-type">Hyperdual</a> :T) * :T * :T &rarr; :T</code>

Compute ∂²f/∂y²(x, y).



***

# Package `COALTON/XMATH/REALALGEBRAIC`<a name="coalton-xmath-realalgebraic-package"></a>


Certified real algebraic numbers.

A real algebraic number is represented as a square-free primitive polynomial
over Z together with a rational isolating interval certified by Sturm's
theorem. Arithmetic is implemented via resultant-based elimination, and all
operations (construction, comparison, root selection) are exact.

Construct values with `root` (single root from polynomial + interval),
`real-roots` (all roots of a polynomial), `fromInt`, or `into`. Extract
rational values with `tryInto`. Standard numeric type class instances are
provided: Eq, Ord, Num, Reciprocable, Radical, Quantizable, and Real.

### Structs

#### <a href="#coalton-xmath-realalgebraic-realalgebraic-type"><code>RealAlgebraic</code></a> <sup><sub>[STRUCT] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L69-L78">src</a></sub></sup><a name="coalton-xmath-realalgebraic-realalgebraic-type"></a>

Certified real algebraic number.

`poly` is a square-free primitive defining polynomial in descending degree
order. `(lo, hi)` is a rational open interval that isolates exactly one real
root of `poly`. `sturm` caches a Sturm sequence for `poly`.

<details>
<summary>Instances</summary>

- <code><a href="#coalton-math-arith-dividable-class">Dividable</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-eq-class">Eq</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-into-class">Into</a> <a href="#coalton-integer-type">Integer</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-num-class">Num</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-ord-class">Ord</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-real-quantizable-class">Quantizable</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-elementary-radical-class">Radical</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-real-real-class">Real</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-math-arith-reciprocable-class">Reciprocable</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-types-runtimerepr-class">RuntimeRepr</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>
- <code><a href="#coalton-classes-tryinto-class">TryInto</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> <a href="#coalton-fraction-type">Fraction</a></code>

</details>



***

### Values

#### <a href="#coalton-xmath-realalgebraic-decimal-string-value"><code>(DECIMAL-STRING DIGITS X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L1779-L1789">src</a></sub></sup><a name="coalton-xmath-realalgebraic-decimal-string-value"></a>
<code><a href="#coalton-ufix-type">UFix</a> * <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> &rarr; <a href="#coalton-string-type">String</a></code>

Render a fixed-point decimal approximation of `x`.

`digits` is the number of digits after the decimal point. Rounding is half-up
and computed from exact rational arithmetic.



***

#### <a href="#coalton-xmath-realalgebraic-isolating-interval-value"><code>(ISOLATING-INTERVAL X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L1651-L1653">src</a></sub></sup><a name="coalton-xmath-realalgebraic-isolating-interval-value"></a>
<code><a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> &rarr; <a href="#coalton-classes-tuple-type">Tuple</a> <a href="#coalton-fraction-type">Fraction</a> <a href="#coalton-fraction-type">Fraction</a></code>

Return the current rational isolating interval `(lo, hi)` for `x`.



***

#### <a href="#coalton-xmath-realalgebraic-rational?-value"><code>(RATIONAL? X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L1916-L1920">src</a></sub></sup><a name="coalton-xmath-realalgebraic-rational?-value"></a>
<code><a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> &rarr; <a href="#coalton-boolean-type">Boolean</a></code>

Return `True` when `x` is rational, decided by the rational root theorem.



***

#### <a href="#coalton-xmath-realalgebraic-real-roots-value"><code>(REAL-ROOTS COEFFS)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L800-L816">src</a></sub></sup><a name="coalton-xmath-realalgebraic-real-roots-value"></a>
<code><a href="#coalton-list-type">List</a> <a href="#coalton-integer-type">Integer</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-string-type">String</a> (<a href="#coalton-list-type">List</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a>)</code>

Isolate all distinct real roots of a polynomial.

COEFFS is a list of integer coefficients in descending degree order.



***

#### <a href="#coalton-xmath-realalgebraic-refine-value"><code>(REFINE X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L1661-L1663">src</a></sub></sup><a name="coalton-xmath-realalgebraic-refine-value"></a>
<code><a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> &rarr; <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>

Return a strictly tighter certified isolating interval for `x`.



***

#### <a href="#coalton-xmath-realalgebraic-refine-to-width-value"><code>(REFINE-TO-WIDTH WIDTH X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L1666-L1677">src</a></sub></sup><a name="coalton-xmath-realalgebraic-refine-to-width-value"></a>
<code><a href="#coalton-fraction-type">Fraction</a> * <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> &rarr; <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>

Refine `x` until its isolating interval width is at most `width`.

`width` must be positive.



***

#### <a href="#coalton-xmath-realalgebraic-root-value"><code>(ROOT COEFFS LO HI)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L786-L797">src</a></sub></sup><a name="coalton-xmath-realalgebraic-root-value"></a>
<code><a href="#coalton-list-type">List</a> <a href="#coalton-integer-type">Integer</a> * <a href="#coalton-fraction-type">Fraction</a> * <a href="#coalton-fraction-type">Fraction</a> &rarr; <a href="#coalton-classes-result-type">Result</a> <a href="#coalton-string-type">String</a> <a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a></code>

Construct a real algebraic number from a polynomial and isolating interval.

COEFFS is a list of integer coefficients in descending degree order. The
rational interval `(lo, hi)` must isolate exactly one real root of the
polynomial.



***

#### <a href="#coalton-xmath-realalgebraic-show-value"><code>(SHOW X)</code></a> <sup><sub>[FUNCTION] · <a href="https://github.com/coalton-lang/coalton/tree/main/xmath/realalgebraic.ct#L1691-L1717">src</a></sub></sup><a name="coalton-xmath-realalgebraic-show-value"></a>
<code><a href="#coalton-xmath-realalgebraic-realalgebraic-type">RealAlgebraic</a> &rarr; <a href="#coalton-string-type">String</a></code>

Render a human-readable representation of `x` as a string.

Exposes the defining polynomial and current isolating interval, useful for
debugging, proof traces, and serialization diagnostics.



***

</div>
