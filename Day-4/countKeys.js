// Problem 16: Count Object Properties

const countKeys = (obj) => {
  return Object.keys(obj).length;
};

const obj = {
  name: "nafis",
  roll: 2,
};

console.log(countKeys(obj));
