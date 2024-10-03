// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

const function1 = async function () {
  const func11 = await Promise.resolve("Function 1's 1st promise completed");
  console.log(func11);
  const func12 = await Promise.resolve("Function 1's 2nd promise completed");
  console.log(func12);
};

const function2 = async function () {
  const func2 = await Promise.resolve("Function 2 completed");
  console.log(func2);
};

const function3 = async function () {
  const func3 = await Promise.resolve("Function 3 completed");
  console.log(func3);
};

const sequence = async function () {
  await function1();
  await function2();
  await function3();
};

sequence();
