console.log("\nCode block 1");
// Character literals
{
  text = "This is the sigma letter: \u03A3";
  console.log(text);         // This is the sigma letter: Σ
  console.log(text.length);  // 27
}

console.log("\nCode block 2");
// String conversions
{
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
  console.log(num.toString(16));  // A - hexadecimal
}

console.log("\nCode block 3");
// String casting
{
  // Use the String() casting function to convert any value to a string
  let value1 = 10;
  let value2 = true;
  let value3 = null;
  let value4;

  console.log(String(value1)); // "10"
  console.log(String(value2)); // "true"
  console.log(String(value3)); // "null"
  console.log(String(value4)); // "undefined"
}

console.log("\nCode block 4");
// Template literals
{
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
}

console.log("\nCode block 5");
// Interpolation with template literals
{
  let value = 5;
  let exponent = 'second';

  // Prior to interpolation, we would have to use concatenation
  let interpolatedString = value + 'to the ' + exponent + ' power is ' + (value * value);

  // The same thing accomplished with template literals
  let interpolatedTemplateLiteral = `${value} to the ${exponent} power is ${value * value}`;

  console.log(interpolatedString);           // 5 to the second power is 25
  console.log(interpolatedTemplateLiteral);  // 5 to the second power is 25
}

console.log("\nCode block 6");
// String interpolation with expressions
{
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
}

console.log("\nCode block 7");
// Templates can safely interpolate their previous value
{
  let value = '';
  function append() {
    value = `${value}abc`
    console.log(value);
  }
  append(); // abc
  append(); // abcabc
  append(); // abcabcabc
}