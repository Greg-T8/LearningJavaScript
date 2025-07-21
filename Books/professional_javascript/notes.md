# Notes on Professional JavaScript for Web Developers by Matt Frisbie

<img src='images/20250407025456.png' width='250'/>

<details>
<summary>Book Resources</summary> 

- [Source Code](http://www.wiley.com/go/projavascript5e)

</details>

<!-- omit in toc -->
# Contents
- [3. Language Basics](#3-language-basics)
  - [Data Types](#data-types)
    - [The `typeof` Operator](#the-typeof-operator)
    - [The `Undefined` Type](#the-undefined-type)
    - [The `Null` Type](#the-null-type)
    - [The `Boolean` Type](#the-boolean-type)
    - [The `Number` Type](#the-number-type)
      - [Number Conversions](#number-conversions)
    - [The `BigInt` Type](#the-bigint-type)
      - [`BigInt` Conversions](#bigint-conversions)
      - [`BigInt` Operators](#bigint-operators)
      - [`BigInt` Static Methods](#bigint-static-methods)
      - [Using `BigInt` with JSON](#using-bigint-with-json)
    - [The `String` Type](#the-string-type)
      - [Character Literals](#character-literals)
      - [String Conversions](#string-conversions)
      - [Template Literals](#template-literals)
      - [Interpolation](#interpolation)
      - [Template Literal Tag Functions (Tag Functions)](#template-literal-tag-functions-tag-functions)
      - [Raw Strings](#raw-strings)
    - [The `Symbol` Type](#the-symbol-type)
      - [Basic Symbol Use](#basic-symbol-use)
      - [Using the Global Symbol Registry](#using-the-global-symbol-registry)
      - [Using Symbols as Properties](#using-symbols-as-properties)
      - [Well-Known Symbols](#well-known-symbols)


## 3. Language Basics

**Declaration Best Practices**
- Don't use `var` - var can lead to unexpected behavior due to hoisting.
- Prefer `const` over `let`

### Data Types

#### The `typeof` Operator

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

#### The `Number` Type

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

##### Number Conversions
- There are three functions to convert nonnumeric values into numbers:
  - `Number()`: Converts a value to a number. If the value cannot be converted, it returns `NaN`.
  - `parseInt()`: Converts a string to an integer. If the string cannot be converted, it returns `NaN`. It ignores leading whitespace and stops parsing at the first non-numeric character.
  - `parseFloat()`: Converts a string to a floating-point number. It ignores leading whitespace and stops parsing at the first non-numeric character.
- The `Number()` function as a lot of complexities when converting string, so the author recommends using `parseInt()`  when you are dealing with integers.

```js
  console.log(Number("Hello world!")); // NaN
  console.log(Number(""));             // 0
  console.log(Number(null));           // 0
  console.log(Number(undefined));      // NaN
  console.log(Number("000011"));       // 11
  console.log(Number("1.52"));         // 1.52
  console.log(Number("-56"));          // -56
  console.log(Number(true));           // 1
```

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
>Note: most of the time you'll be parsing decimal numbers, so it's good to always include the 10 as the radix argument.

```js
  console.log(parseFloat("1234blue")); // 1234 - integer
  console.log(parseFloat("0xA"));      // 0
  console.log(parseFloat("22.5"));     // 22.5
  console.log(parseFloat("22.34.5"));  // 22.34
  console.log(parseFloat("0908.5"));   // 908.5
  console.log(parseFloat("3.125e7"));  // 31250000
```
Things to note:
- A decimal point is valid the first time it appears in a string, but a second decimal point is invalid and the rest of the string is ignored.
- Initial zeros are ignored, but a leading zero followed by a decimal point is not ignored.
- If the string represents a whole number, `parseFloat()` will return an integer.

#### The `BigInt` Type

- Use `BigInt` when dealing with large integers that exceed `Number.MAX_SAFE_INTEGER`, which is 9007199254740991.
- `BigInt` allocates an object in memory to represent arbitrarily large integers that cannot fit inside a CPU register.
- Use a `BigInt` value only when dealing with values greater than 2^53.

```js
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log(2**53);                   // 9007199254740992 - not safe
  console.log(BigInt(12345));           // 12345n - BigInt
  console.log(BigInt(0x12345));         // 74565n - hexadecimal to BigInt
  console.log(BigInt("12345"));         // 12345n - string to BigInt
  console.log(BigInt("0o12345"));       // 5349n - octal to BigInt
  console.log(123n + 456n);             // 579n - BigInt addition
  console.log(123n + 456);              // TypeError - cannot mix BigInt and Number
```
- A `BigInt` is similar to a `Number`, but the two types cannot be mixed when using arithmetic or bitwise operators.
- A `BigInt` cannot be used with any built-in `Math` methods.

##### `BigInt` Conversions

```js
  console.log(123n === BigInt(123));                // true - BigInt comparison
  console.log(123 === Number(123n));                // true - Number comparison
  // Note: loss of precision may occur when converting large BigInt to Number
  console.log(Number(BigInt(100000000000054321)));  // 100000000000054320
  console.log(Number(54321n + BigInt(1e16)));       // 10000000000054320
  console.log(BigInt(0.5));                         // Range error - cannot convert to BigInt because it is not an integer
```

##### `BigInt` Operators

```js
  console.log(10n ** 2n);           // 100n - exponentiation
  console.log(100n / 3n);           // 33n - division
  console.log(16n | 8n);            // 24n - bitwise OR
  console.log(-8n + -8n);           // -16n - addition
  console.log(4n > 3);              // true - comparison
  console.log([5n, 1, 3n].sort());  // [1, 3n, 5n] - sorting
```
- Two operators are not supported with `BigInt`:
  - The zero-fill right shift operator `>>>`.
  - The unary `+` operator.
- Although mixing is not allowed with aritemetic and bitwise operators, you can still use comparison operators and sorting.

##### `BigInt` Static Methods

- `BigInt` has two static methods for clamping integers. Clamping means truncating it to a given number of least significant bits.
  - `BigInt.asIntN(width, x)`: Clamps the integer `x` to a signed integer of `width` bits.
  - `BigInt.asUintN(width, x)`: Clamps the integer `x` to an unsigned integer of `width` bits.
- A `BigInt` is represented in memory as a 2's complement signed integer, so clamping methods must be used with caution, as they could result in unexpected numbers.

```js
  // Clamps 0011000 to 1000
  console.log(BigInt.asIntN(4, 24n));   // -8n, given 2's complement representation
  console.log(BigInt.asUintN(4, 24n));  // 8n
  // Clamps 11111111 to 1111
  console.log(BigInt.asIntN(4, -1n));   // -1n, given 2's complement representation
  console.log(BigInt.asUintN(4, -1n));  // 15n
  // Clamps 00010000 to 10000
  console.log(BigInt.asIntN(5, 16n));   // -16n, given 2's complement representation
  // Clamps 00010000 to 010000
  console.log(BigInt.asIntN(6, 16n));   // 16n, given 2's complement representation
```

##### Using `BigInt` with JSON

- `BigInt` does not support JSON serialization, so you need to convert it to a string before using `JSON.stringify()`.
- You can provide replacer and reviver methods to convert in and out:
```js
  let data = {
    bigNumber: 1234n
  };

  // JSON.stringify(data); // TypeError: BigInt value cannot be serialized to JSON

  console.log(data.bigNumber.toString()); // "1234"

  // To serialize BigInt, convert it to string or number first using a replacer function
  // k represents the key, v represents the value
  const replacer = (k, v) => typeof v === 'bigint' ? v.toString() : v;

  // Serialize the object with BigInt
  console.log(JSON.stringify(data, replacer)); // {"bigNumber":"1234"}

  // Deserialize the object with BigInt
  const reviver = (k, v) => k === "bigNumber" ? BigInt(v) : v;
  console.log(JSON.parse(`{"bigNumber": "1234"}`, reviver)); // { bigNumber: 1234n }
```

#### The `String` Type

- The `String` type represents a sequence of one or more 16-bit Unicode characters.
- Strings can be delineated by single quotes, double quotes, or backticks (template literals).

##### Character Literals

| LITERAL | MEANING                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------- |
| \n      | New line                                                                                                 |
| \t      | Tab                                                                                                      |
| \b      | Backspace                                                                                                |
| \r      | Carriage return                                                                                          |
| \f      | Form feed                                                                                                |
| \\      | Backslash (\)                                                                                            |
| \'      | Single quote (')—used when the string is delineated by single quotes. Example: 'He said, \'hey.\''.      |
| \"      | Double quote (")—used when the string is delineated by double quotes. Example: "He said, \"hey.\""       |
| \`      | Backtick (\`)—used when the string is delineated by backticks. Example: \`He said, \`hey.\`\`.           |
| \xnn    | A character represented by hexadecimal code nn (where n is a hexadecimal digit 0-F). Example: \x41 = "A" |
| \unnnn  | A Unicode character represented by the hexadecimal code nnnn (0-F). Example: \u03a3 = Greek Σ            |


Character literals can be included anywhere in a string:
```js
  text = "This is the sigma letter: \u03A3";
  console.log(text);         // This is the sigma letter: Σ
  console.log(text.length);  // 27
```
- Use the `length` property to get the number of characters in a string.
> Note: If a string contains double-byte characters, the length may not accurately reflect the number of characters in the string.

##### String Conversions

There are two ways to convert a value to a string:
- Use the `toString()` method of the value.
- Use the `String()` casting function to convert any value to a string.

```js
  // Method 1: using toString()
  let age = 11;
  let ageAsString = age.toString();    // "11"
  let found = true;
  let foundAsString = found.toString();  // "true" as a string

  // For numbers, toString() can take a radix (base) as an argument
  let num = 10;
  console.log(num.toString());    // 10
  console.log(num.toString(2));   // 1010 - binary
  console.log(num.toString(8));   // 12 - octal
  console.log(num.toString(10));  // 10 - decimal
```

```js
  // Method 2: Use the String() casting function to convert any value to a string
  let value1 = 10;
  let value2 = true;
  let value3 = null;
  let value4;

  console.log(String(value1)); // "10"
  console.log(String(value2)); // "true"
  console.log(String(value3)); // "null"
  console.log(String(value4)); // "undefined"
```
The `String()` function follows these rules:
  - If the value has a `toString()` method, it calls that method and returns the result.
  - If the value is `null`, it returns the string "null".
  - If the value is `undefined`, it returns the string "undefined".

##### Template Literals

- Template literals are enclosed in backticks (`` ` ``) and can span multiple lines.
```js
  let myMultiLineString = 'first line\nsecond line';
  let myMultiLineTemplateLiteral = `first line
second line`;

  console.log(myMultiLineString);
  // first line
  // second line

  console.log(myMultiLineTemplateLiteral);
  // first line
  // second line

  console.log(myMultiLineString === myMultiLineTemplateLiteral); // true
```

##### Interpolation

- Template literals support string interpolation, allowing you to embed expressions inside the string using `${}` syntax.
```js
  let value = 5;
  let exponent = 'second';

  // Prior to interpolation, we would have to use concatenation
  let interpolatedString = value + 'to the ' + exponent + ' power is ' + (value * value);

  // The same thing accomplished with template literals
  let interpolatedTemplateLiteral = `${value} to the ${exponent} power is ${value * value}`;

  console.log(interpolatedString);           // 5 to the second power is 25
  console.log(interpolatedTemplateLiteral);  // 5 to the second power is 25
```

Template literals also support expressions:
```js
  console.log(`Hello, ${`World`}!`); // Hello, World!

  // `String()` is invoked to coerce the expression to a string
  let foo = { toString: () => 'World' };
  console.log(`Hello, ${foo}!`);

  // Invoking functions and methods inside interpolated expressions
  // `word[0]` is the first character of the string
  // `word.slice(1)` is the rest of the string, starting from the second character
  function capitalize(word) {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }
  console.log(`${capitalize('hello')}, ${capitalize('world')}!`); // Hello, World!
```

Template literals can safely interpolate their previous value:
```js
  let value = '';
  function append() {
    value = `${value}abc`
    console.log(value);
  }
  append(); // abc
  append(); // abcabc
  append(); // abcabcabc
```

##### Template Literal Tag Functions (Tag Functions)

*Tag functions* enable you to define custom interpolation behavior for template literals. Tag functions are useful in that they allow you to intercept the template literal and modify it before it is processed. This can be useful for:
- Escaping or sanitizing user input
- Localization
- Custom formatting

```js
  let a = 6;
  let b = 9;
  function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
    console.log(strings);
    console.log(aValExpression);
    console.log(bValExpression);
    console.log(sumExpression);
    return 'foobar';
  }
  let untaggedResult = `${a} + ${b} = ${a + b}`;
  let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;  // 

  console.log(untaggedResult);     // 6 + 9 = 15
  console.log(taggedResult);       // foobar
```
**Output:**  
```bash
(4) ['', ' + ', ' = ', '', raw: Array(4)]       # First argument is an array of strings, representing the static parts of the template literal
6                                               # console.log(aValExpression) - the first evaluated expression, ${a}
9                                               # console.log(bValExpression) - the second evaluated expression, ${b}
15                                              # console.log(sumExpression) - the third evaluated expression, ${a + b}
6 + 9 = 15                                      # console.log(untaggedResult)
foobar                                          # console.log(taggedResult)
```
**Notes:**
- The tag function receives the template literal and splits it into its pieces.
- The first argument is an array of strings, representing the static parts of the template literal.
- The remaining arguments are the results of the evaluated expressions.

Because there are a variable number of expression arguments, using the spread operator (`...`) allows you to combine them into a single array:
```js
  let a = 6;
  let b = 9;
  function simpleTag(strings, ...expressions) {
    console.log(strings);
    for (const expression of expressions) {
      console.log(expression);
    }
    return 'foobar';
  }
  let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
  // (4) ['', ' + ', ' = ', '', raw: Array(4)]
  // 6
  // 9
  // 15
  console.log(taggedResult);       // foobar
```

You can work with the string array and the expression array to create custom behavior:
```js
  let a = 6;
  let b = 9;
  function zipTag(strings, ...expressions) {
    // In the map() function, `e` is the expression value and `i` is the index
    return strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join('');
  }
  let untaggedResult = `${a} + ${b} = ${a + b}`;
  let taggedResult = zipTag`${a} + ${b} = ${a + b}`;

  console.log(untaggedResult);     // 6 + 9 = 15
  console.log(taggedResult);       // 6 + 9 = 15
```

##### Raw Strings

The `String.raw` tag function enables you to get the raw template literal contents without being converted into actual character representations, such as new line or Unicode characters. This is useful when
- working with raw source code, e.g. embedding regular expressions
- writing Windows file paths, to avoid using double backslashes
- avoiding accidental escapes, sometimes you want `\n` literally in the output , e.g. when generating config files, documentation, templates
- handling multiline templates cleanly, i.e. when you want raw newlines and not processed ones

```js
  // Unicode demo
  // \u00A9 is the copyright symbol ©
  console.log('\u00A9');            // ©
  console.log(String.raw`\u00A9`);  // \u00A9

  // Newline demo
  console.log(`first line\nsecond line`);
  // first line
  // second line
  console.log(String.raw`first line\nsecond line`);   // "first line\nsecond line"

  // This does not work for actual newline characters: they do not undergo conversion from their plaintext equivalents
  console.log(`first line
  second line`);
  // first line
  // second line
  console.log(String.raw`first line
  second line`);
  // first line
  // second lin
```

The raw values are availble as a property on each element in the string piece collection inside the tag function:

```js
  function printRaw(strings) {
    console.log('Actual characters:');
    for (const str of strings) {
      console.log(str);
    }
    console.log('Escaped characters:');
    for (const rawString of strings.raw) {
      console.log(rawString);
    }
  }
  printRaw`\u00A9${'and'}\n`;
  //Actual characters:
  // ©
  // (newline)

  // Escaped characters:
  // \u00A9
  // \n
```

#### The `Symbol` Type

Symbols are primitive values, and symbol instances are unique and immutable. The purpose of a symbol is to be a guaranteed unique identifier for object properties that does not risk property collision.

Symbols may seem similar to object private properties, but they are not the same. Symbols are intended to be used as unique tokens that can be used to key special properties with something other than a string.

##### Basic Symbol Use

Instantiating a symbol:

```js
  let sym = Symbol();
  console.log(typeof sym);  // symbol
```

The symbols you define are unique, even if they have the same description:

```js
  let genericSymbol = Symbol();
  let otherGenericSymbol = Symbol();
  console.log(genericSymbol === otherGenericSymbol);  // false

  let fooSymbol = Symbol('foo');
  let otherFooSymbol = Symbol('foo');
  console.log(fooSymbol === otherFooSymbol);  // false
```

You can use symbols as object property keys, without the risk of property collision:

```js
  let genericSymbol = Symbol();
  console.log(genericSymbol);   // Symbol()

  let fooSymbol = Symbol('foo');
  console.log(fooSymbol);      // Symbol(foo)
```

The `Symbol()` function cannot be used with the `new` operator. THe purpose of this is to avoide symbol object wrappers, as is possible with Boolean, String, and Number, which support constructor behavior.

```js
  let myBoolean = new Boolean();
  console.log(typeof myBoolean);  // object

  let myString = new String();
  console.log(typeof myString);   // object

  let myNumber = new Number();
  console.log(typeof myNumber);   // object

  let mySymbol = new Symbol();    // TypeError: Symbol is not a constructor
```

You can use the `Object()` function to convert a symbol to an object:

```js
  let mySymbol = Symbol();
  let myWrappedSymbol = Object(mySymbol);
  console.log(typeof myWrappedSymbol);  // object
```

##### Using the Global Symbol Registry

A global symbol registry allows you to create symbols that can be shared across different parts of the runtime. This is useful for creating symbols that need to be accessed by multiple modules or libraries without the risk of name collisions.

```js
  let fooGlobalSymbol = Symbol.for('foo');
  console.log(typeof fooGlobalSymbol);  // symbol
```

The `Symbol.for()` method is an idempotent operation. The first time it is called with a given string, it will check the global runtime registry, find that no symbol exists, generate a new symbol instance, and add it to the registry.

Additional invocations with the same string key will check the global runtime registry, find that a symbol does exist, and return that symbol instance:

```js
  let fooGlobalSymbol = Symbol.for('foo');  // creates new symbol
  let otherFooGlobalSymbol = Symbol.for('foo'); // reuses existing symbol
  console.log(fooGlobalSymbol === otherFooGlobalSymbol);  // true
```

Symbols defined in the global symbol registry are totally distinct from symbols created with the `Symbol()` function, even if they have the same description:

```js
  let localSymbol = Symbol('foo');
  let globalSymbol = Symbol.for('foo');
  console.log(localSymbol === globalSymbol);  // false
```

Anything you provide as an argument to `Symbol.for()` will be converted to a string, so you can use any value as a key:

```js
  let mySymbol = Symbol.for(12345);
  console.log(mySymbol);  // Symbol(12345)
```

The key used for the registry is also used as the symbol description:

```js
  let emptyGlobalSymbol = Symbol.for();
  console.log(emptyGlobalSymbol);  // Symbol(undefined)
```

You can check the global registry using `Symbol.keyFor()`. This method returns `undefined` if the symbol is not found in the global registry:

```js
  // Global symbol
  let s = Symbol.for('foo');
  console.log(Symbol.keyFor(s)); // foo

  // Regular symbol
  let s2 = Symbol('foo');
  console.log(Symbol.keyFor(s2)); // undefine
```

Using `Symbol.keyFor()` with a non-symbol value will throw a `TypeError`:

```js
  Symbol.keyFor(123);  // TypeError: Symbol.keyFor requires that its argument be a symbol
```

##### Using Symbols as Properties

You can use a symbol anywhere you would normally use a string or number property:

```js
  let s1 = Symbol('foo'),
      s2 = Symbol('bar'),
      s3 = Symbol('baz'),
      s4 = Symbol('qux');

  let o = {
    [s1]: 'foo val'
  };
  // Also valid: o[s1] = 'foo val';
  console.log(o);
  // { [Symbol(foo)]: 'foo val' }

  Object.defineProperty(o, s2, { value: 'bar val' });
  console.log(o);
  // { [Symbol(foo)]: 'foo val', [Symbol(bar)]: 'bar val' }

  Object.defineProperties(o, {
    [s3]: { value: 'baz val' },
    [s4]: { value: 'qux val' }
  });
  console.log(o);
  // { [Symbol(foo)]: 'foo val', [Symbol(bar)]: 'bar val', [Symbol(baz)]: 'baz val', [Symbol(qux)]: 'qux val' }
```

Use the following methods to return properties and symbols from an object:
- `Object.getOwnPropertySymbols()`: Returns an array of all symbol properties of an object.
- `Object.getOwnPropertyNames()`: Returns an array of all string properties of an object.
- `Object.getOwnPropertyDescriptors()`: Returns an object containing both regular and symbol property descriptors.
- `Reflect.ownKeys()`: Returns an array of all string and symbol keys of an object.

```js
  let s1 = Symbol('foo'),
      s2 = Symbol('bar');

  let o = {
    [s1]: 'foo val',
    [s2]: 'bar val',
    baz: 'baz val',
    qux: 'qux val'
  }

  console.log(Object.getOwnPropertySymbols(o));
  // [ Symbol(foo), Symbol(bar) ]

  console.log(Object.getOwnPropertyNames(o));
  // [ 'baz', 'qux' ]

  console.log(Object.getOwnPropertyDescriptors(o));
  // {baz: {…}, qux: {…}, Symbol(foo): {…}, Symbol(bar): {…}}

  console.log(Reflect.ownKeys(o));
  // ['baz', 'qux', Symbol(foo), Symbol(bar)]
```

If you don't maintain an explicit reference to the symbol, you must traverse all the object's symbol properties to recover the property key:

```js
  let o = {
    [Symbol('foo')]: 'foo val',   // No explicit reference to the symbol
    [Symbol('bar')]: 'bar val'
  }

  console.log(o);
  // { [Symbol(foo)]: 'foo val', [Symbol(bar)]: 'bar val' }

  let barSymbol = Object.getOwnPropertySymbols(o).find((symbol) => symbol.toString().match(/bar/));
  console.log(barSymbol);  // Symbol(bar)
```

##### Well-Known Symbols

ECMAScript includes a collection of well-known symbols that are used to expose internal language behaviors for direct access, overriding, or emulating. These well-known symbols exist as string properties on the `Symbol` factory function.

In discussions about ECMAScript specification, you'lll see these symbols referred to by their specification names, which are prefixed with @@, e.g. `@@iterator` refers to Symbol.iterator.

###### Symbol.asyncInterator

This symbol is used as a property for "a method that returns the default `AsyncIterator` for an object. Called by the semantics of the `for-await` statement." Language constructs like `for-await` make use of this function to perform asynchronous iteration. In many cases, it takes the form of an `AsyncGenerator` object that implements the iterator API.

```js
  class Foo {
    async *[Symbol.asyncIterator](){}
  }

  let f = new Foo();

  console.log(f[Symbol.asyncIterator]());
  // AsyncGenerator {<suspended>}
```

The object produced by the `Symbol.asyncIterator` function should sequentially produce a `Promise` via its `next()` method.

```js
  class Emitter {
    constructor(max) {
      this.max = max;
      this.asyncIdx = 0;
    }

    async *[Symbol.asyncIterator]() {     // Define the async generator function 
      while (this.asyncIdx < this.max) {
        yield new Promise((resolve) => resolve(this.asyncIdx++));
      }
    }
  }

  async function asyncCount() {     // Create an async function to consume the async iterator
    let emitter = new Emitter(5);
    for await (const x of emitter) {
      console.log(x);
    }
  }
  asyncCount();
  // Output: 0, 1, 2, 3, 4
```

###### Symbol.hasInstance

This symbol is used as a property for a method that determines if a constructor object (1) recognizes an object as its instance and (2) is called by the semantics of the `instanceof` operator.

The `instanceof` operator determines if an object instance has a prototype in its prototype chain.

```js
  function Foo(){}
  let f = new Foo();
  console.log(f instanceof Foo);  // true

  class Bar{}
  let b = new Bar();
  console.log(b instanceof Bar);  // true
```

On the back end, the `instanceof` operator uses a `Symbol.hasInstance` function to evaluate this relationship. `Symbol.hasInstance` keys a function which performs the same behavior but with the operands reversed:

```js
  function Foo(){}
  let f = new Foo();
  console.log(Foo[Symbol.hasInstance](f));  // true

	class Bar{}
  let b = new Bar();
  console.log(Bar[Symbol.hasInstance](b));  // true
```

Since the `Symbol.hasInstance` property is defined on the `Function` prototype, it is automatically avaialable by default to all function and class definitions. Because the `instanceof` operator will seek the property definition on the prototype chain, it is possible to redefine the `Symbol.hasInstance` function  on an inherited class as a static method:

```js
  class Bar {}
  class Baz extends Bar {
    static [Symbol.hasInstance]() {
      return false;  // Override the default behavior
    }
  }

  let b = new Baz();
  console.log(Bar[Symbol.hasInstance](b)); // true
  console.log(b instanceof Bar);  // true
  console.log(Baz[Symbol.hasInstance](b)); // false
  console.log(b instanceof Baz);  // false
```

###### Symbol.isConcatSpreadable

This symbol is used as a Boolean-valued property that, if true, indicates an object should be flattened to its elements by `Array.prototype.concat()`.

The `Array.prototype.concat()` method will select how to join an array-like object to the array instance based on the type of object passed. The value of `Symbol.isConcatSpreadable` allows you to override this behavior.

Expected default behavior:
- Array objects: will be flattened into the existing array; a value of `false` or falsy value will append the entire object to the array.
- Array-like objects: will be appended to the array; a value of `true` or truthy value will flatten the array-like object into the array.
- Other objects (not array-like): will be ignored when `Symbol.isConcatSpreadable` is set to `true`

```js
  let initial = ['foo'];

  let array = ['bar'];
  console.log(array[Symbol.isConcatSpreadable]);            // undefined
  console.log(initial.concat(array));                       // ['foo', 'bar']
  array[Symbol.isConcatSpreadable] = false;                 // Set the symbol to false
  console.log(initial.concat(array));                       // ['foo', Array(1)]

  let arrayLikeObject = { length: 1, 0: 'baz' };
  console.log(arrayLikeObject[Symbol.isConcatSpreadable]);  // undefined
  console.log(initial.concat(arrayLikeObject));             // ['foo', {...}]
  arrayLikeObject[Symbol.isConcatSpreadable] = true;        // Set the symbol to true
  console.log(initial.concat(arrayLikeObject));             // ['foo', 'baz']

  let otherObject = new Set().add('qux');
  console.log(otherObject[Symbol.isConcatSpreadable]);      // undefined
  console.log(initial.concat(otherObject));                 // ['foo', Set(1)]
  otherObject[Symbol.isConcatSpreadable] = true;            // Set the symbol to true
  console.log(initial.concat(otherObject));                 // ['foo', 'qux']
```

###### Symbol.iterator

This symbol is used as a property for a method that returns the default iterator for an object. This property is used by the `for...of` statement, and other language constructs which iterate over iterable objects like arrays, strings, and other collections.

These language constructs invoke the function keyed by `Symbol.iterator` and expect it to return an object which implements the iterator API. In many cases, this takes the form of a generator function:

```js
  class Foo {
    *[Symbol.iterator]() {}     // Generator function
  }

  let f = new Foo();
  console.log(f[Symbol.iterator]());
  // Generator {[[GeneratorState]]: 'suspended'
```
The object produced by the `Symbol.iterator` function should sequentially produce a value via its `next()` method, which is called by the language constructs that iterate over the object.

```js
  class Emitter {
    constructor(max) {
      this.max = max;
      this.idx = 0;
    }

    *[Symbol.iterator]() {                // Define the generator function
      while (this.idx < this.max) {
        yield this.idx++;
      }
    }
  }

  function count() {
    let emitter = new Emitter(5);
    for (const x of emitter) {            // Use the generator in an iteratable language construct
      console.log(x);
    }
  }

  count();
  // Output: 0, 1, 2, 3, 4
```

###### Symbol.match

This symbol is used as a property for a regular expression method that matches against a string. It is called by the `String.prototype.match()` method.

The `String.prototype.match()` method uses the function keyed in `Symbol.match` to evaluate the expression.

The regular expression prototype has the `Symbol.match` method defined by default, so all regular expression instances are valid parameters to the `String` method by default:

```js
  console.log(RegExp.prototype[Symbol.match]);  // Showing that the regular expression prototype has a match method
  // Output: ƒ [Symbol.match]()

  console.log('foobar'.match(/bar/));           // Using a regular expression as a parameter to `String.prototype.match()` yields `Symbol.match`
  // Output: ['bar', index: 3, input: 'foobar', groups: undefined]
```

Providing something other than a regular expression will cause it to be converted to a `RegExp` object. If you wish to circumvent this behavior, and pass something other than a regular expression instance, you can define your own `Symbol.match` function:

```js
  class FooMatcher {
    static [Symbol.match](target) {     // Overriding the match method by providing a static method instead of a regular expression
      return target.includes("foo");
    }
  }

  console.log("foobar".match(FooMatcher)); // true
  console.log("barbaz".match(FooMatcher)); // false


  class StringMatcher {
    constructor(str) {
      this.str = str;
    }
    [Symbol.match](target) {          // Overriding the match method by providing a method on the instance instead of a regular expression
      return target.includes(this.str);
    }
  }

  console.log('foobar'.match(new StringMatcher('foo')));  // true
  console.log('barbaz'.match(new StringMatcher('foo')));  // false
```

###### Symbol.replace

This symbol is used as a property for a regular expression method that replaces matched substrings of a string. It is called by the `String.prototype.replace()` method. The first argument to `String.prototype.replace()` can be a string or an object with a `Symbol.replace` method.

```js
  console.log(RegExp.prototype[Symbol.replace]);  // Showing that the regular expression prototype has a replace method
  // Output: ƒ [Symbol.replace]()

  console.log('foobarbaz'.replace(/bar/, 'qux'));   // Using a regular expression to replace a substring
  // Output: 'fooquxbaz'
```

Similarly with `Symbol.match`, you can override this behavior to provide something other than a regular expression:

```js
  class FooReplacer {
    static [Symbol.replace](target, replacement) {            // Overriding the replace method
      return target.split('foo').join(replacement);
    }
  }

  console.log('barfoobaz'.replace(FooReplacer, 'qux'));
  // Output: 'barquxbaz'
  

  class StringReplacer {
    constructor(str) {
      this.str = str;
    }
    [Symbol.replace](target, replacement) {
      return target.split(this.str).join(replacement);
    }
  }

  console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qux'));
  // Output: 'barquxbaz'
```

###### Symbol.search

This symbol is used as a property for a regular expression method that returns the index with a string that matches the regular expression. It is called by the `String.prototype.search()` method.

```js
  console.log(RegExp.prototype[Symbol.search]); // Showing that the regular expression prototype has a search method
  // Output:  ƒ [Symbol.search]()

  console.log('foobar'.search(/bar/));
  // Output: 3 (the index of the first match)
```

Providing something other than a regular expression will cause it to be converted to a `RegExp` object. You can circumvent this behavior by defining your own `Symbol.search` function:

```js
  class FooSearcher {
    static [Symbol.search](target) {
      return target.indexOf('foo');
    }
  }

  console.log('foobar'.search(FooSearcher)); // Output: 0
  console.log('barfoo'.search(FooSearcher)); // Output: 3
  console.log('barbaz'.search(FooSearcher)); // Output: -1 (not found)

  
  class StringSearcher {
    constructor(str) {
      this.str = str;
    }
    [Symbol.search](target) {
      return target.indexOf(this.str);
    }
  }

  console.log('foobar'.search(new StringSearcher('foo'))); // Output: 0
  console.log('barfoo'.search(new StringSearcher('foo'))); // Output: 3
  console.log('barbaz'.search(new StringSearcher('qux'))); // Output: -1 (not found)
```
