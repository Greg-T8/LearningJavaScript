"use strict";

console.log("\nCode block 1");
// The following code outputs 'object'
{
  let car = null;
  console.log(typeof car); 
}

console.log("\nCode block 2");
// Always initialize a variable to null when you want to assign something to it
// later. This allows you to explicitly check for null.
{
  let car = null;
  if (car != null) {
    // do something wtih car
  }
}

// Unefined is a derivative of null
console.log("\nCode block 3");
{
  console.log(null == undefined) // true
}
