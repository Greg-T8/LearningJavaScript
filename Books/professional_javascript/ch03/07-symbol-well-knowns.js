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
