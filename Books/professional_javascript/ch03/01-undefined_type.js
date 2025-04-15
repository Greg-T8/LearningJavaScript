/*
 * Program: Undefined Type Examples
 * Context: Chapter 3 - Professional JavaScript for Web Developers
 * Author: Greg Tate
 * Date: 2025-04-15
 * Description: This program demonstrates the Undefined type in JavaScript,
 *              including its behavior, use cases, and relationship with null.
 */

"use strict";

console.log("\nCode block 1")
// Uninitialized variables are undefined
{
  let message;
  console.log(message == undefined); // true
}

console.log("\nCode block 2")
// Never set a variable to undefined. The literal undefined value is provided
// mainly for comparison to help formalize the difference between an empty
// object pointer (null) and an uninitialized variable.
{
  // message = undefined;
  // console.log(message == undefined) // Throws an error in strict mode; true otherwise.
}

console.log("\nCode block 3")
// Throws an error because you're trying to access an undeclared variable directly
{
  // console.log(age); 
}

console.log("\nCode block 4")
{
  let message;
  console.log(message);  // undefined - declared but has a value of undefined
}

console.log("\nCode block 5")
// The only one useful operation that can be performed on an undeclared variable
// is to call `typeof` on it.
{
  let message; // declared but has a value of undefined
  // let age;

  console.log(typeof message);  // undefined - declared but has a value of undefined
  console.log(typeof age);      // undefined - undeclared variable
}

console.log("\nCode block 6")
// Undefined is falsy
{
  let message; // variable is declared but has a value of undefined
  
  if (message) {
    console.log('This block does not execute.')
  }
  
  if (!message) {
    console.log('This block executes.')
  }
  
  // 'age' is not declared
  // if (age) {
  //   // throws an error
  // }

}
