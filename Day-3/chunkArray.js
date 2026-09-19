// Problem 15: Chunk an Array
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }
  return result;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
