/*
 * Program: Boolean Type Examples
 * Context: Chapter 3 - Professional JavaScript for Web Developers
 * Author: Greg Tate
 * Date: 2025-04-15
 * Description: This program demonstrates the Boolean type in JavaScript, 
 *              including truthy and falsy values, with examples for various data types.
 */

"use strict";

console.log("\nCode block 1");
// All values have Boolean equivalents.
{
  let message = 'Hello World';          // Non-empty string is truthy
  let messageAsBoolean = Boolean(message);
  console.log(messageAsBoolean);       // true
}

console.log("\nCode block 2");
// Example of a truthy statement using a number
{
  let message = 1;                     // Non-zero number is truthy
  let messageAsBoolean = Boolean(message);
  console.log(messageAsBoolean);       // true
}

console.log("\nCode block 3");
// Example of a falsy statement with a string
{
  let message = '';                    // Empty string is falsy
  let messageAsBoolean = Boolean(message);
  console.log(messageAsBoolean);       // false
}

console.log("\nCode block 4");
// Example of a falsy statement with an object
{
  let message = null;                  // Null is falsy
  let messageAsBoolean = Boolean(message);
  console.log(messageAsBoolean);       // false
}

console.log("\nCode block 5");
// Example of a falsy statement using undefined
{
  let message = undefined;             // Undefined is falsy
  let messageAsBoolean = Boolean(message);
  console.log(messageAsBoolean);       // false
}