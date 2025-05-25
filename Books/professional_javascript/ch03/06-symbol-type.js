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

console.log("\nCode block 8");
{
  let localSymbol = Symbol('foo');
  let globalSymbol = Symbol.for('foo');
  console.log(localSymbol === globalSymbol);  // false
}

console.log("\nCode block 9");
{
  let myGlobalSymbol = Symbol.for(12345);
  console.log(myGlobalSymbol);  // Symbol(12345)
}

console.log("\nCode block 10");
{
  let emptyGlobalSymbol = Symbol.for();
  console.log(emptyGlobalSymbol);  // Symbol(undefined)
}

console.log("\nCode block 11");
{
  // Create global symbol
  let s = Symbol.for('foo');
  console.log(Symbol.keyFor(s)); // foo

  // Create regular symbol
  let s2 = Symbol('foo');
  console.log(Symbol.keyFor(s2)); // undefined
}

console.log("\nCode block 12");
{
  // Symbol.keyFor(123);  // TypeError: Symbol.keyFor requires that its argument be a symbol
}

console.log("\nCode block 13");
{
  let s1 = Symbol('foo'),
      s2 = Symbol('bar'),
      s3 = Symbol('baz'),
      s4 = Symbol('qux');

  let o = {
    [s1]: 'foo val'
  };
  // Also valid: o[s1] = 'foo val';

  console.log(o);
  // { [Symbol(foo)]: 'foo val' }

  Object.defineProperty(o, s2, { value: 'bar val' });
  console.log(o);
  // { [Symbol(foo)]: 'foo val', [Symbol(bar)]: 'bar val' }

  Object.defineProperties(o, {
    [s3]: { value: 'baz val' },
    [s4]: { value: 'qux val' }
  });
  console.log(o);
  // { [Symbol(foo)]: 'foo val', [Symbol(bar)]: 'bar val', [Symbol(baz)]: 'baz val', [Symbol(qux)]: 'qux val' }
}

console.log("\nCode block 14");
{
  let s1 = Symbol('foo'),
      s2 = Symbol('bar');

  let o = {
    [s1]: 'foo val',
    [s2]: 'bar val',
    baz: 'baz val',
    qux: 'qux val'
  }

  console.log(Object.getOwnPropertySymbols(o));
  // [ Symbol(foo), Symbol(bar) ]

  console.log(Object.getOwnPropertyNames(o));
  // [ 'baz', 'qux' ]

  console.log(Object.getOwnPropertyDescriptors(o));
  // {baz: {…}, qux: {…}, Symbol(foo): {…}, Symbol(bar): {…}}

  console.log(Reflect.ownKeys(o));
  // ['baz', 'qux', Symbol(foo), Symbol(bar)]
}

console.log("\nCode block 15");
{
  let o = {
    [Symbol('foo')]: 'foo val',
    [Symbol('bar')]: 'bar val'
  }

  console.log(o);
  // { [Symbol(foo)]: 'foo val', [Symbol(bar)]: 'bar val' }

  let barSymbol = Object.getOwnPropertySymbols(o).find((symbol) => symbol.toString().match(/bar/));
  console.log(barSymbol);  // Symbol(bar)
}