// Problem 19: Invert an Object
const swapKeyValue = (obj) => {
  const newObj = {};
  for (let [key, value] of Object.entries(obj)) {
    newObj[value] = key;
  }
  return newObj;
};

console.log(
  swapKeyValue({
    name: "nafis",
    roll : 2
  }),
);
