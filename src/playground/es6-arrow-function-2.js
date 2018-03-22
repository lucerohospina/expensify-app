// arguments object no longer bound
const add = (a,b) => {
  // console.log(arguments);
  return a +b;
};

console.log(add(55,1));

// this keyword no longer bound
const user = {
  name: 'Lucero',
  cities: ["NY", "NJ", "Lima"],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
  }
};

console.log(user.printPlacesLived());

// challenge

const multiplier = {
  numbers: [3 ,6, 12],
  multiplyBy: 2,
  multiply() {
    console.log(this.number);
    console.log(this.multiplyBy);

    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply())