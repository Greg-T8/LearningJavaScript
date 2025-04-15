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
