// Problem 8: Check Palindrome

const checkPalindrome = (str) => {
  const strArray = str.split("");
  const reverseArr = [];
  for (let i of strArray) {
    reverseArr.unshift(i);
  }
  const reverseStr = reverseArr.join("");
  if (str === reverseStr) {
    return true;
  }
  return false;
};


console.log(checkPalindrome("shakib"));