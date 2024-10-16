// primitives are passed by value (copy is made)

// const num = 10;

// const changeMyNum = function(number) {
//   number = 12;
//   console.log('inside the function', number);
// };

// changeMyNum(num);

// console.log('outside the function', num);

// objects are passed by reference (gets the original)

const myObj = {
  username: 'alice',
};

const changeMyObj = function(obj) {
  obj.username = 'bob';
  console.log('inside the function', obj.username);
};

changeMyObj(myObj);

console.log('after the function:', myObj.username);