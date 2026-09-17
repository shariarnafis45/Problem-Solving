// Problem 9: Capitalize First Letter of Each Word

const capitalizeFirstLetter = (str) => {
  const strArr = str.split(" ");
  const capitalizeArr = strArr.map((w) => {
    return w[0].toUpperCase() + w.slice(1);
  });
  const result = capitalizeArr.join(" ");
  return result;
};

console.log(capitalizeFirstLetter("hello world"));
