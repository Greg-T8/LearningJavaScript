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