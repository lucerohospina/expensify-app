console.log('hello from utils.js');

const square = (x) => x * x;

const add = (a, b)=> a + b;

const substract = (a, b) => a - b;


export {square, add, substract as default};