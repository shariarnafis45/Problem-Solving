// Problem 13: Remove Duplicates from Array
const removeDuplicate = (arr) => {
  const newArr = [];
  for (let i of arr) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

console.log(removeDuplicate([2, 2, 4, 2, 5, 6, 7]));
