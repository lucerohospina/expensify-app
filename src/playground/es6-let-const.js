var nameVar = 'Lucero';
var nameVar = "Beto";
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log('nameLet', nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

function getName() {
  let petName = "Fido";
  return petName;
}

var fullName = "Lucero Hospina";
if (fullName) {
  let firstName = fullName.split(' ')[0];
  console.log(firstName);
}

