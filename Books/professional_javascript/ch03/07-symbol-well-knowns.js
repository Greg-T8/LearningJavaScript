// Well-known symbols

console.log("Code block 1");
{
  class Foo {
    async *[Symbol.asyncIterator]() {}
  }

  let f = new Foo();

  console.log(f[Symbol.asyncIterator]());
  // AsyncGenerator {<suspended>}
}

console.log("\nCode block 2");
{
  class Emitter {
    constructor(max) {
      this.max = max;
      this.asyncIdx = 0;
    }

    async *[Symbol.asyncIterator]() {
      while (this.asyncIdx < this.max) {
        yield new Promise((resolve) => resolve(this.asyncIdx++));
      }
    }
  }
}

console.log("\nCode block 2");
{
  class Emitter {
    constructor(max) {
      this.max = max;
      this.asyncIdx = 0;
    }

    async *[Symbol.asyncIterator]() {
      // Define the async generator function
      while (this.asyncIdx < this.max) {
        yield new Promise((resolve) => resolve(this.asyncIdx++));
      }
    }
  }

  async function asyncCount() {
    // Create an async function to consume the async iterator
    let emitter = new Emitter(5);
    for await (const x of emitter) {
      console.log(x);
    }
  }
  // asyncCount();
  // Output: 0, 1, 2, 3, 4
}

console.log("\nCode block 3");
{
  function Foo() {}
  let f = new Foo();
  console.log(f instanceof Foo); // true

  class Bar {}
  let b = new Bar();
  console.log(b instanceof Bar); // true
}

console.log("\nCode block 4");
{
  function Foo() {}
  let f = new Foo();
  console.log(Foo[Symbol.hasInstance](f)); // true

  class Bar {}
  let b = new Bar();
  console.log(Bar[Symbol.hasInstance](b)); // true
}

console.log("\nCode block 5");
{
  class Bar {}
  class Baz extends Bar {
    static [Symbol.hasInstance]() {
      return false; // Override the default behavior
    }
  }

  let b = new Baz();
  console.log(Bar[Symbol.hasInstance](b)); // true
  console.log(b instanceof Bar); // true
  console.log(Baz[Symbol.hasInstance](b)); // false
  console.log(b instanceof Baz); // false
}

console.log("\nCode block 6");
{
  let initial = ["foo"];

  let array = ["bar"];
  console.log(array[Symbol.isConcatSpreadable]); // undefined
  console.log(initial.concat(array)); // ['foo', 'bar']
  array[Symbol.isConcatSpreadable] = false; // Set the symbol to false
  console.log(initial.concat(array)); // ['foo', Array(1)]

  let arrayLikeObject = { length: 1, 0: "baz" };
  console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // undefined
  console.log(initial.concat(arrayLikeObject)); // ['foo', {...}]
  arrayLikeObject[Symbol.isConcatSpreadable] = true; // Set the symbol to true
  console.log(initial.concat(arrayLikeObject)); // ['foo', 'baz']

  let otherObject = new Set().add("qux");
  console.log(otherObject[Symbol.isConcatSpreadable]); // undefined
  console.log(initial.concat(otherObject)); // ['foo', Set(1)]
  otherObject[Symbol.isConcatSpreadable] = true; // Set the symbol to true
  console.log(initial.concat(otherObject)); // ['foo', 'qux']
}

console.log("\nCode block 7");
{
  class Foo {
    *[Symbol.iterator]() {} // Generator function
  }
  let f = new Foo();
  console.log(f[Symbol.iterator]());
  // Generator {[[GeneratorState]]: 'suspended'}
}

console.log("\nCode block 8");
{
  class Emitter {
    constructor(max) {
      this.max = max;
      this.idx = 0;
    }

    *[Symbol.iterator]() {
      // Define the generator function
      while (this.idx < this.max) {
        yield this.idx++;
      }
    }
  }

  function count() {
    let emitter = new Emitter(5);

    for (const x of emitter) {
      // Use the generator in an iteratable language construct
      console.log(x);
    }
  }

  count();
  // Output: 0, 1, 2, 3, 4
}

console.log("\nCode block 9");
{
  console.log(RegExp.prototype[Symbol.match]); // Showing that the regular expression prototype has a match method
  // Output: ƒ [Symbol.match]()

  console.log("foobar".match(/bar/)); // Using the match method on a string
  // Output: ['bar', index: 3, input: 'foobar', groups: undefined]
}

console.log("\nCode block 10");
{
  class FooMatcher {
    static [Symbol.match](target) {
      return target.includes("foo");
    }
  }

  // Overriding the match method by providing a static method instead of a regular expression
  console.log("foobar".match(FooMatcher)); // true
  console.log("barbaz".match(FooMatcher)); // false


  class StringMatcher {
    constructor(str) {
      this.str = str;
    }

    [Symbol.match](target) {
      return target.includes(this.str);
    }
  }

  // Overriding the match method by providing an instance of a class
  console.log('foobar'.match(new StringMatcher('foo')));  // true
  console.log('barbaz'.match(new StringMatcher('foo'))); // false
}

console.log("\nCode block 11");
{
  console.log(RegExp.prototype[Symbol.replace]);  // Showing that the regular expression prototype has a replace method
  // Output: ƒ [Symbol.replace]()

  console.log('foobarbaz'.replace(/bar/, 'qux'));   // Using a regular expression to replace a substring
  // Output: 'fooquxbaz'
}

console.log("\nCode block 12");
{
  class FooReplacer {
    static [Symbol.replace](target, replacement) {
      return target.split('foo').join(replacement);
    }
  }

  console.log('barfoobaz'.replace(FooReplacer, 'qux'));
  // Output: 'barquxbaz'


  class StringReplacer {
    constructor(str) {
      this.str = str;
    }
    [Symbol.replace](target, replacement) {
      return target.split(this.str).join(replacement);
    }
  }

  console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qux'));
  // Output: 'barquxbaz'
}
