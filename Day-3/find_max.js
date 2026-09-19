// Problem 12: Find Maximum Value in Array

const findMax = (arr) => {
  let max = arr[0];
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }
  return max;
};

console.log(findMax([1, 2, 3, 5, 8, 10]));
