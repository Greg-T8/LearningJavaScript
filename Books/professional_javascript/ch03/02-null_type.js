/*
 * Program: Null Type Examples
 * Context: Chapter 3 - Professional JavaScript for Web Developers
 * Author: Greg Tate
 * Date: 2025-04-15
 * Description: This program demonstrates the Null type in JavaScript,
 *              including its behavior, use cases, and relationship with undefined.
 */

"use strict";

console.log("\nCode block 1");
// The following code outputs 'object'
{
  let car = null;                      // Null is considered an object type
  console.log(typeof car);             // Outputs: object
}

console.log("\nCode block 2");
// Always initialize a variable to null when you want to assign something to it
// later. This allows you to explicitly check for null.
{
  let car = null;                      // Initialize variable to null
  if (car != null) {                   // Explicitly check for null
    // do something with car
  }
}

console.log("\nCode block 3");
// Undefined is a derivative of null
{
  console.log(null == undefined);      // true, as null loosely equals undefined
}
