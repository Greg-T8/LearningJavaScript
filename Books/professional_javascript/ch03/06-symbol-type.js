console.log("\nCode block 1");
// Symbol basic usage
{
  let sym = Symbol();
  console.log(typeof sym);  // symbol
}

console.log("\nCode block 2");
// Symbol uniqueness
{
  let genericSymbol = Symbol();
  let otherGenericSymbol = Symbol();
  let fooSymbol = Symbol('foo');
  let otherFooSymbol = Symbol('foo');
  console.log(genericSymbol === otherGenericSymbol);  // false
  console.log(fooSymbol === otherFooSymbol);
}

console.log("\nCode block 3");
// Symbol as object property keys; they do not conflict with string keys
{
  let genericSymbol = Symbol();
  console.log(genericSymbol);   // Symbol()

  let fooSymbol = Symbol('foo');
  console.log(fooSymbol);      // Symbol(foo)
}

console.log("\nCode block 4");
// the Symbol() function cannot be used with the `new` operator.
{
  let myBoolean = new Boolean();
  console.log(typeof myBoolean);  // object

  let myString = new String();
  console.log(typeof myString);   // object

  let myNumber = new Number();
  console.log(typeof myNumber);   // object

  // let mySymbol = new Symbol();    // TypeError: Symbol is not a constructor
}

console.log("\nCode block 5");
// You can utilize an object wrapper for Symbols
{
  let mySymbol = Symbol();
  let myWrappedSymbol = Object(mySymbol);
  console.log(typeof myWrappedSymbol);  // object
}

console.log("\nCode block 6");
// Using the global symbol registry
{
  let fooGlobalSymbol = Symbol.for('foo');
  console.log(typeof fooGlobalSymbol);  // symbol
}

console.log("\nCode block 7");
{
  let fooGlobalSymbol = Symbol.for('foo');  // creates new symbol
  let otherFooGlobalSymbol = Symbol.for('foo'); // reuses existing symbol
  console.log(fooGlobalSymbol === otherFooGlobalSymbol);  // true
}