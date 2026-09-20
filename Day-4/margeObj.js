// Problem 17: Merge Two Objects

const margeObj = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

console.log(
  margeObj(
    {
      name: "nafis",
    },
    {
      roll: 2,
    },
  ),
);
