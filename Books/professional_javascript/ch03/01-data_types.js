"use strict";

// Usage of undefined
{
  console.log("\nCode block 1")
  let message;
  console.log(message); // Uninitialized variables are undefined
}

// Never set a variable to undefined. The literal undefined value is provided
// mainly for comparison to help formalize the difference between an empty
// object pointer (null) and an uninitialized variable.
{
  console.log("\nCode block 2")
  // message = undefined;
  // console.log(message == undefined) // Throws an error in strict mode; true otherwise.
}

{
  console.log("\nCode block 3")
  let age
  console.log(age); // causes an error, or at least is supposed to
}

// Note: the only one useful operation that can be performed on an undeclared
// varialbe is to call `typeof` on it.
{
  console.log("\nCode block 4")
  let message;
  console.log(message);  // undefined - declared but has a value of undefined
  // console.log(age);   // throws an error because you're trying to access an undeclared variable directly
}

{
  console.log("\nCode block 5")
  let message;  // declared but has a value of undefined
  // let age;

  console.log(typeof message);  // undefined - declared but has a value of undefined
  console.log(typeof age);      // undefined - undeclared variable
}

{
  console.log("\nCode block 6")


}
