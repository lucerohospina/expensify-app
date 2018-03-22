function square(x) {
  return x*x
};

// const squareArrow = (x) => {
//   return x*x
// };

const squareArrow = (x) => x*x;

console.log(square(8));
console.log(squareArrow(8));

const getFirstName = (str) => str.split(' ')[0];

console.log(getFirstName("Lucero Hospina"));