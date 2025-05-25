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