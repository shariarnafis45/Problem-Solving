// Problem 18: FizzBuzz

const fizzBuzz = (value) => {
  const result = [];
  for (let i = 1; i < value + 1; i += 1) {
    if (i % 3 === 0  && i % 5 === 0) {
      result.push("fizzBuzz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else if (i % 3 === 0 ) {
      result.push("fizz");
    } else {
      result.push(i);
    }
  }
  return result;
};

console.log(fizzBuzz(15));
