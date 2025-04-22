# Notes on Professional JavaScript for Web Developers

<img src='images/20250407025456.png' width='250'/>

<details>
<summary>Book Resources</summary> 

- [Source Code](http://www.wiley.com/go/projavascript5e)

</details>

## Language Basics

**Declaration Best Practices**
- Don't use `var`
- Prefer `const` over `let`

### Data Types

**The `typeof` Operator**  
Returns one of the following strings:
- "undefined" if the value is undefined
- "boolean" if the value is a boolean
- "string" if the value is a string
- "number" if the value is a number
- "object" if the value is an object
- "function" if the value is a function
- "symbol" if the value is a symbol
- "bigint" if the value is a BigInt

Calling `typeof null` returns an object, as the special value `null` is considered to be an empty object reference.

#### The `Undefined` Type
- Uninitialized variables are `undefined`. 
- `undefined` is falsy, but be careful in scenarios where you need to test for an exact value of undefined rather than just a falsy value.
- See [01-undefined_type.js](ch03/01-undefined_type.js) for examples.

#### The `Null` Type
- Like `undefined`, the Null type has only one value: `null`.
- When declaring a variable intended to hold an object, it's best to initialize it to null. This makes it easy to check later whether the variable has been assigned an object reference.
- See [02-null_type.js](ch03/02-null_type.js) for examples.

#### The `Boolean` Type
- Has only two values: `true` and `false`.
- These values are distinct from the numeric values 1 and 0, so `true == 1` is true, but `true === 1` is false.
-  All values have Boolean equivalents. The following table shows the data type, values converted to true, and values converted to false.

| Data Type | Values Converted to True                 | Values Converted to False |
| --------- | ---------------------------------------- | ------------------------- |
| Boolean   | true                                     | false                     |
| String    | Any non-empty string                     | "" (empty string)         |
| Number    | Any non-zero number (including Infinity) | 0, NaN                    |
| Object    | Any object reference                     | null                      |
| Undefined | N/A                                      | undefined                 |

For N/A, there are no values where undefined is converted to true.

- See [03-boolean_type.js](ch03/03-boolean_type.js) for examples.

#### The `Number` Type`
- There are several literal formats of number types:
  - Decimal: `1234`, `0.1234`, `1.234e+2`, `1.234e-2`
  - Hexadecimal: `0xFF`, `0x1A3F`
  - Binary: `0b101010`, `0b11111111`
  - Octal: `0o755`, `0o777`

- Numbers created using binary, octal, or hexadecimal are treated as decimal numbers in all arithmetic operations.
- Numbers in JavaScript can have a positive zero or a negative zero value. Both are considered equivalent.
- Numbers with at least six zeroes after the decimal are converted to e-notation.

See [04-number_type.js](./ch03/04-number_type.js) for examples.

**Range of values:**
- `Number.MIN_VALUE` is the smallest positive number that can be represented in JavaScript and is approximately 5e-324.
- `Number.MAX_VALUE` is the largest positive number that can be represented in JavaScript and is approximately 1.7976931348623157e+308.
- `Infinity` is any positive number that can't be represented.
- `-Infinity` is any negative number that can't be represented.
- Use `Number.isFinite()` to check if a number is finite.

```js
  let result = Number.MAX_VALUE + Number.MAX_VALUE;
  console.log(isFinite(result)); // false
```

- `NaN` is used to indicate when an operation intended to return a number has failed.
- Any operation involving `NaN` always returns `NaN`.
```js
  console.log(NaN === NaN);         // false
  console.log(isNaN(NaN));          // true
  console.log(isNaN(10));           // false -- 10 is a number
  console.log(isNaN("10"));         // false -- "10" can be converted to a number
  console.log(isNaN("Hello"));      // true -- "Hello" cannot be converted to a number
  console.log(isNaN(true));         // false -- true can be converted to 1
```
- When `NaN` is used against objects, the object's `valueOf()` method is called to determine if it can be converted to a number. If it can't, `NaN` is returned.

#### Number Conversions
- There are three functions to convert nonnumeric values into numbers:
  - `Number()`: Converts a value to a number. If the value cannot be converted, it returns `NaN`.
  - `parseInt()`: Converts a string to an integer. If the string cannot be converted, it returns `NaN`. It ignores leading whitespace and stops parsing at the first non-numeric character.
  - `parseFloat()`: Converts a string to a floating-point number. It ignores leading whitespace and stops parsing at the first non-numeric character.
- The `Number()` function as a lot of complexities hwen converting string, so the author recommends using `parseInt()`  when you are dealing with integers.

```js
  console.log(parseInt("1234blue") );      // 1234
  console.log(parseInt("") );              // NaN
  console.log(parseInt("0xA") );           // 10 - hexadecimal
  console.log(parseInt(22.5) );            // 22 - ignores decimal part
  console.log(parseInt("70") );            // 70 - decimal
  console.log(parseInt("0xf") );           // 15 - hexadecimal
  console.log(parseInt("0xAF", 16));       // 175 - providing 16 radix to parse as hexadecimal
  console.log(parseInt("AF", 16));         // 175 - providing 16 radix to parse as hexadecimal; can leave off 0x
  console.log(parseInt("AF"));             // NaN - no radix provided, so it defaults to 10
  console.log(parseInt("10", 2));          // 2 - binary
  console.log(parseInt("10", 8));          // 8 - octal
  console.log(parseInt("10", 10));         // 10 - decimal
  console.log(parseInt("10", 16));         // 16 - hexadecimal
```
