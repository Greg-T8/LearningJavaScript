# Notes on Professional JavaScript for Web Developers

<img src='images/20250407025456.png' width='250'/>

## Book Resources
- [Source Code](http://www.wiley.com/go/projavascript5e)

## General Notes

**Declaration Best Practices**
- Don't use `var`
- Prefer `const` over `let`

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

**The `Undefined` Type**  
- Uninitialized variables are `undefined`. 
- `undefined` is falsy, but be careful in scenarios where you need to test for an exact value of undefined rather than just a falsy value.
- See [01-undefined_type.js](ch03/01-undefined_type.js) for examples.

**The `Null` Type**
- Like `undefined`, the Null type has only one value: `null`.
- When declaring a variable intended to hold an object, it's best to initialize it to null. This makes it easy to check later whether the variable has been assigned an object reference.
- See [02-null_type.js](ch03/02-null_type.js) for examples.

**The `Boolean` Type**
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

**The `Number` Type**
- There are several literal formats of number types:
  - Decimal: `1234`, `0.1234`, `1.234e+2`, `1.234e-2`
  - Hexadecimal: `0xFF`, `0x1A3F`
  - Binary: `0b101010`, `0b11111111`
  - Octal: `0o755`, `0o777`

- Numbers created using binary, octal, or hexadecimal are treated as decimal numbers in all arithmetic operations.
- Numbers in JavaScript can have a positive zero or a negative zero value. Both are considered equivalent.
- Numbers with at least six zeroes after the decimal are converted to e-notation.
