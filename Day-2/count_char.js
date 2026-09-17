// Problem 10: Count Occurrences of a Character
const countChar = (str, char) => {
  const strArr = str.split("");
  let count = 0;
  for (let i of strArr) {
    if (i === char) {
      count += 1;
    }
  }
  return count;
};

console.log(countChar("nafis vai", "a"));
