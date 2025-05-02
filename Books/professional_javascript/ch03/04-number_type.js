/*
  Program: Number Type Demonstrations in JavaScript
  Context: Professional JavaScript for Web Developers, Chapter 3
  Synopsis: This program demonstrates various ways to define and use numbers in JavaScript,
            including decimal, binary, octal, hexadecimal, floating-point, e-notation,
            floating-point comparison, and numeric separators.
  Author: Greg Tate
  Date: 2025-04-15
*/

// "use strict"

console.log("\nCode block 1");
// The most basic form of a decimal number
{
  let intNume = 55;
}

console.log("\nCode block 2");
// Binary numbers
{
  let binaryNum1 = 0b110;           // binary for 6
  console.log(binaryNum1);
  // let binaryNum2 = 0b333;         // invalid binary - Syntax error
}

console.log("\nCode block 3");
// Octal numbers
{
  // Implicit definition of an octal number
  // Throws error in strict mode
  let octalNum1 = 070;              // octal for 56
  console.log(octalNum1);

  // Explicit definition of octal number
  let octalNum2 = 0o70;             // octal for 56
  console.log(octalNum2);
}

console.log("\nCode block 4");
// Hexadecimal numbers
{
  let hexNum1 = 0xA;                // hexadecimal for 10
  console.log(hexNum1);
}

console.log("\nCode block 5");
// Floating-point values
{
  // To define a floating-point value, include at least one
  // number after the decimal point.
  let floatNum1 = 1.1;
  let floatNum2 = 0.2;
  let floatNum3 = .3;
}

console.log("\nCode block 6");
// Floating point e-notation
{
  let floatNum = 3.125e7;           // equal to 31250000
}

console.log("\nCode block 7");
// Never test for specific floating-point values
{
  let floatNum1 = 0.1 + 0.2;        // equal to 0.30000000000000004
  let floatNum2 = 0.3;
  console.log(floatNum1 === floatNum2); // false
}

console.log("\nCode block 8");
// Numeric separators
{
  let num1 = 1_000_000;             // equal to 1000000
  console.log(num1);                // 1000000

  let num2 = 1_000_000.123_456;     // equal to 1000000.123456
  console.log(num2);                // 1000000.123456

  // Invalid numeric separator
  // let num3 = _1000;              // Syntax error
}

console.log("\nCode block 9");
{
  let result = Number.MAX_VALUE + Number.MAX_VALUE;
  console.log(isFinite(result)); // false
}

console.log("\nCode block 10");
{
  console.log(NaN === NaN);         // false
  console.log(isNaN(NaN));          // true
  console.log(isNaN(10));           // false -- 10 is a number
  console.log(isNaN("10"));         // false -- "10" can be converted to a number
  console.log(isNaN("Hello"));      // true -- "Hello" cannot be converted to a number
  console.log(isNaN(true));         // false -- true can be converted to 1
}


console.log("\nCode block 11");
// Number conversions
{
  console.log(Number("Hello world!")); // NaN
  console.log(Number(""));             // 0
  console.log(Number(null));           // 0
  console.log(Number(undefined));      // NaN
  console.log(Number("000011"));       // 11
  console.log(Number("1.52"));         // 1.52
  console.log(Number("-56"));          // -56
  console.log(Number(true));           // 1
}

console.log("\nCode block 12");
// Using ParseInt()
{
  console.log(parseInt("1234blue") );     // 1234
  console.log(parseInt("") );             // NaN
  console.log(parseInt("0xA") );          // 10 - hexadecimal
  console.log(parseInt(22.5) );           // 22 - ignores decimal part
  console.log(parseInt("70") );           // 70 - decimal
  console.log(parseInt("0xf") );          // 15 - hexadecimal
  console.log(parseInt("0xAF", 16));       // 175 - providing 16 radix to parse as hexadecimal
  console.log(parseInt("AF", 16));         // 175 - providing 16 radix to parse as hexadecimal; can leave off 0x
  console.log(parseInt("AF"));             // NaN - no radix provided, so it defaults to 10
  console.log(parseInt("10", 2));          // 2 - binary
  console.log(parseInt("10", 8));          // 8 - octal
  console.log(parseInt("10", 10));         // 10 - decimal
  console.log(parseInt("10", 16));         // 16 - hexadecimal
}

console.log("\nCode block 13");
// using ParseFloat()
{
  console.log(parseFloat("1234blue")); // 1234 - integer
  console.log(parseFloat("0xA"));      // 0
  console.log(parseFloat("22.5"));     // 22.5
  console.log(parseFloat("22.34.5"));  // 22.34
  console.log(parseFloat("0908.5"));   // 908.5
  console.log(parseFloat("3.125e7"));  // 31250000
}

console.log("\nCode block 14");
// using BigInt()
{
  console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
  console.log(2**53);                   // 9007199254740992 - not safe
  console.log(BigInt(12345));           // 12345n - BigInt
  console.log(BigInt(0x12345));         // 74565n - hexadecimal to BigInt
  console.log(BigInt("12345"));         // 12345n - string to BigInt
  console.log(BigInt("0o12345"));       // 5349n - octal to BigInt
  console.log(123n + 456n);             // 579n - BigInt addition
  //console.log(123n + 456);              // TypeError - cannot mix BigInt and Number
}