// functions inside objects are called methods
// arrow function do not create the variable `this`

let dog = {
  name: 'benji',
  breed: 'labrador',
  goForWalk: function(distance) {
    console.log(`going for a walk that is ${distance} miles long`);
  },
  tellMeAboutYourself: function() {
    console.log(`Hi! My name is ${this.name} and my breed is ${this.breed}`);
  },
};

const copy = dog;
dog = null;

console.log(copy);

copy.tellMeAboutYourself();