// Problem 1: Swap Two Variables

// function declare
const swapValue = (a, b) => {
  return [b, a];
};

const a = 10;
const b = 20;

// function call

const result = swapValue(a, b);

console.log("new a = ", result[0]);
console.log("new b = ", result[1]);
