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
See [01-undefined_type.js](ch03/01-undefined_type.js) for examples.