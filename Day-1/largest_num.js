// Problem 3: Find the Largest of Three Numbers

// function

const findLargest = (a, b, c) => {
  // logic-1
  if (a === b && a === c) {
    return "Numbers are Equal";
  } else if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
  //   logic-2
  //   return Math.max(a, b, c);
};

const result = findLargest(10, 10, 10);
console.log(result);
