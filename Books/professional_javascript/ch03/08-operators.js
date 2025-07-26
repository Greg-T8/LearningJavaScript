console.log("\nCode block 1");
{
  let age = 29;
  let anotherAge = --age + 2; // Pre-decrement operator

  console.log(age); // 28
  console.log(anotherAge); // 30
}

console.log("\nCode block 2");
{
  let num1 = 2;
  let num2 = 20;
  let num3 = --num1 + num2;
  let num4 = num1 + num2;
  console.log(num3);        // 21
  console.log(num4);        // 21
}

console.log("\nCode block 3");
{
  let num1 = 2;
  let num2 = 20;
  let num3 = num1-- + num2;
  let num4 = num1 + num2;
  console.log(num3);        // 22
  console.log(num4);        // 21
}

console.log("\nCode block 4");
{
  let s1 = "2";
  let s2 = "z";
  let b = false;
  let f = 1.1;
  let o = {
    valueOf() { return -1; }
  };

  s1++;           // s1: "2" becomes numeric 3
  s2++;           // s2: "z" becomes numeric NaN
  b++;            // b: becomes numeric 1
  f--;            // f: becomes 0.10000000000000009 (due to floating-point inaccuracies)
  o--;            // o: becomes numeric -2
}

console.log("\nCode block 5");
{
  let num = 25;
  num = +num;
  console.log(num); // 25 (unary plus converts to number, no change)
}

console.log("\nCode block 6");
{
  let s1 = "01";
  let s2 = "1.1";
  let s3 = "z";
  let b = false;
  let f = 1.1;
  let o = {
    valueOf() { return -1; }
  };

  s1 = +s1;       // s1: "01" becomes numeric 1
  s2 = +s2;       // s2: "1.1" becomes numeric 1.1
  s3 = +s3;       // s3: "z" becomes numeric NaN
  b = +b;         // b: false becomes numeric 0
  f = +f;         // f: no change, still 1.1
  o = +o;         // o: becomes numeric -1 (using valueOf method)
}

console.log("\nCode block 7");
{
  let num = 25;
  num = -num;
  console.log(num);   // -25 (unary minus negates the number)
}

console.log("\nCode block 8");
{
  let s1 = "01";
  let s2 = "1.1";
  let s3 = "z";
  let b = false;
  let f = 1.1;
  let o = {
    valueOf() { return -1; }
  };

  s1 = -s1;       // s1: "01" becomes numeric -1
  s2 = -s2;       // s2: "1.1" becomes numeric -1.1
  s3 = -s3;       // s3: "z" becomes numeric NaN
  b = -b;         // b: false becomes numeric -0 (not 1, as numerical negation is different from logical negation)
  f = -f;         // f: no change, still -1.1
  o = -o;         // o: becomes numeric 1 (using valueOf method)
}

console.log("\nCode block 9");
{
  let num1 = 25;      // binary: 00000000000000000000000000011001
  let num2 = ~num1;   // bitwise NOT: 11111111111111111111111111100110
  console.log(num2); // -26 (bitwise NOT inverts bits, resulting in one's complement)
}

console.log("\nCode block 10");
{
  let result = 5 & 3; // Bitwise AND operation
  console.log(result); // 1 (binary: 0101 & 0011 = 0001)
}

console.log("\nCode block 11");
{
  let result = 25 | 3; // Bitwise OR operation
  console.log(result); // 27 (binary: 00011001 | 00000011 = 00011011)
}

console.log("\nCode block 12");
{
  let result = 25 ^ 3; // Bitwise XOR operation
  console.log(result); // 26 (binary: 00011001 ^ 00000011 = 00011010)
}

console.log("\nCode block 13");
{
  let oldValue = 2;
  let newValue = oldValue << 5; // Bitwise left shift operation
  console.log(newValue); // 64 (binary: 00000010 << 5 = 00100000)
}

console.log("\nCode block 14");
{
  let oldValue = 64;  // binary: 01000000
  let newValue = oldValue >> 5; // Bitwise right shift operation
  console.log(newValue); // 2 (binary: 01000000 >> 5 = 00000010)
}

console.log("\nCode block 15");
{
  let oldValue = -64;             // binary: 11111111111111111111111111000000
  let newValue = oldValue >>> 5;  // Unsigned right shift operation
  console.log(newValue);          // 134217726 (binary: 00000111111111111111111111111110)
}

console.log("\nCode block 16");
{
  let oldValue = 64; // binary: 01000000
  let newValue = oldValue >>> 5; // Unsigned right shift operation
  console.log(newValue); // 2 (binary: 01000000 >>> 5 = 00000010)
}

console.log("\nCode block 17");
{
  console.log(!false);  // true (logical NOT)
  console.log(!"blue"); // false (non-empty string is truthy)
  console.log(!0);      // true (0 is falsy)
  console.log(!NaN);    // true (NaN is falsy)
  console.log(!"");     // true (empty string is falsy)
  console.log(!12345);  // false (non-zero number is truthy)
}

console.log("\nCode block 18");
{
  console.log(!!false);  // false (double NOT converts to Boolean)
  console.log(!!0);      // false (0 is falsy)
  console.log(!!NaN);    // false (NaN is falsy)
  console.log(!!"");     // false (empty string is falsy)
  console.log(!!12345);  // true (non-zero number is truthy)
}

console.log("\nCode block 19");
{
  let found = true;
  let result = (found && someUndeclaredVariable); // error occurs here
  console.log(result);  // Never executes
}

