// Problem 5: Check Positive, Negative or Zero
const checkValue = (value) => {
  if (value < 0) {
    return "Negative Value";
  } else if (value == 0) {
    return "Zero";
  }
  return "Positive Value";
};


console.log(checkValue(-2));