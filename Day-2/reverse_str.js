// Problem 6: Reverse a String

const reserveStr = (str) => {
  const strArray = str.split("");
  const reverseArray = [];
  for (let i of strArray) {
    reverseArray.unshift(i);
  }
  const reverseString = reverseArray.join("");
  return reverseString;
};

console.log(reserveStr("nafis"));
