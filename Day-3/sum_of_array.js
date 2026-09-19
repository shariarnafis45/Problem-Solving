// Problem 11: Find the Sum of an Array

function total(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum;
}

console.log(total([2, 4, 5]));
