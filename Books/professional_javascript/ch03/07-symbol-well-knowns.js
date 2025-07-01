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

    async *[Symbol.asyncIterator]() {     // Define the async generator function
      while (this.asyncIdx < this.max) {
        yield new Promise((resolve) => resolve(this.asyncIdx++));
      }
    }
  }

  async function asyncCount() {     // Create an async function to consume the async iterator
    let emitter = new Emitter(5);
    for await (const x of emitter) {
      console.log(x);
    }
  }
  asyncCount();
  // Output: 0, 1, 2, 3, 4
}

console.log("\nCode block 3");
{
  function Foo() { }
  let f = new Foo();
  console.log(f instanceof Foo);  // true

  class Bar { }
  let b = new Bar();
  console.log(b instanceof Bar);  // true
}

console.log("\nCode block 4");
{
  function Foo(){}
  let f = new Foo();
  console.log(Foo[Symbol.hasInstance](f));  // true

	class Bar{}
  let b = new Bar();
  console.log(Bar[Symbol.hasInstance](b));  // true
}

console.log("\nCode block 5");
{
  class Bar {}
  class Baz extends Bar {
    static [Symbol.hasInstance]() {
      return false;  // Override the default behavior
    }
  }

  let b = new Baz();
  console.log(Bar[Symbol.hasInstance](b)); // true
  console.log(b instanceof Bar);  // true
  console.log(Baz[Symbol.hasInstance](b)); // false
  console.log(b instanceof Baz);  // false
}