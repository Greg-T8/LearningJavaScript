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
  console.log("foobar".match(new StringMatcher("foo"))); // true
  console.log("barbaz".match(new StringMatcher("foo"))); // false
}

console.log("\nCode block 11");
{
  console.log(RegExp.prototype[Symbol.replace]); // Showing that the regular expression prototype has a replace method
  // Output: ƒ [Symbol.replace]()

  console.log("foobarbaz".replace(/bar/, "qux")); // Using a regular expression to replace a substring
  // Output: 'fooquxbaz'
}

console.log("\nCode block 12");
{
  class FooReplacer {
    static [Symbol.replace](target, replacement) {
      return target.split("foo").join(replacement);
    }
  }

  console.log("barfoobaz".replace(FooReplacer, "qux"));
  // Output: 'barquxbaz'

  class StringReplacer {
    constructor(str) {
      this.str = str;
    }
    [Symbol.replace](target, replacement) {
      return target.split(this.str).join(replacement);
    }
  }

  console.log("barfoobaz".replace(new StringReplacer("foo"), "qux"));
  // Output: 'barquxbaz'
}

console.log("\nCode block 13");
{
  console.log(RegExp.prototype[Symbol.search]); // Showing that the regular expression prototype has a search method
  // Output:  ƒ [Symbol.search]()

  console.log("foobar".search(/bar/));
  // Output: 3 (the index of the first match)
}

console.log("\nCode block 14");
{
  class FooSearcher {
    static [Symbol.search](target) {
      return target.indexOf("foo");
    }
  }

  console.log("foobar".search(FooSearcher)); // Output: 0
  console.log("barfoo".search(FooSearcher)); // Output: 3
  console.log("barbaz".search(FooSearcher)); // Output: -1 (not found)

  class StringSearcher {
    constructor(str) {
      this.str = str;
    }
    [Symbol.search](target) {
      return target.indexOf(this.str);
    }
  }

  console.log("foobar".search(new StringSearcher("foo"))); // Output: 0
  console.log("barfoo".search(new StringSearcher("foo"))); // Output: 3
  console.log("barbaz".search(new StringSearcher("qux"))); // Output: -1 (not found)
}

console.log("\nCode block 15");
{
  class Bar extends Array {}
  class Baz extends Array {
    static get [Symbol.species]() {
      return Array;
    }
  }

  let bar = new Bar();
  console.log(bar instanceof Array); // true
  console.log(bar instanceof Bar); // true
  bar = bar.concat("bar");
  console.log(bar instanceof Array); // true
  console.log(bar instanceof Bar); // true

  let baz = new Baz();
  console.log(baz instanceof Array); // true
  console.log(baz instanceof Baz); // true
  baz = baz.concat("baz");
  console.log(baz instanceof Array); // true
  console.log(baz instanceof Baz); // false
}

console.log("\nCode block 16");
{
  console.log(RegExp.prototype[Symbol.split]);
  // ƒ [Symbol.split]()

  console.log("foobarbaz".split(/bar/));
  // Output: ['foo', 'baz']
}

console.log("\nCode block 17");
{
  class FooSplitter {
    static [Symbol.split](target) {
      return target.split("foo");
    }
  }

  console.log("barfoobaz".split(FooSplitter));
  // Output: ['bar', 'baz']


  class StringSplitter {
    constructor(str) {
      this.str = str;
    }
    [Symbol.split](target) {
      return target.split(this.str);
    }
  }

  console.log("barfoobaz".split(new StringSplitter("foo")));
  // Output: ['bar', 'baz']
}

console.log("\nCode block 18");
{
  class Foo {}
  let foo = new Foo();

  console.log(3 + foo);       // '3[object Object]'     Sees `+` operartor, so JavaScript calls foo.toString()
  console.log(3 - foo);       // NaN                    Sees `-` operator, so JavaScript coerces to a number
  console.log(String(foo));   // '[object Object]'


  class Bar {
    constructor() {
      this[Symbol.toPrimitive] = function (hint) {
        switch (hint) {
          case 'number':
            return 3;
          case 'string':
            return 'string bar';
          default:
            return 'default bar';
        }
      }
    }
  }

  let bar = new Bar();
  console.log(3 + bar);       // '3default bar'     Sees `+` operator with bar (an object), so hint becomes 'default'
  console.log(3 - bar);       // 0:                 Sees `-` operator, so JavaScript coerces bar to a number
  console.log(String(bar));   // 'string bar'       Sees `String()` function, so JavaScript coerces bar to a string
}