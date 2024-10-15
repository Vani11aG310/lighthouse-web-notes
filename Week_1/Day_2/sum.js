const args = process.argv;
console.log(args)

// const newArray = args.slice(2)

const newArray = ['2', '4', '6', '3.14', '-100'];
console.log(newArray);

// c-style loop

// for (let i = 0; i < newArray.length; i++) {
//   const value = newArray[i];
//   console.log('value', value);
// }

// for..in loop
// for (const index in newArray) {
//   const value = newArray[index]
//   console.log('value', value)
// }

// for..of loop
let total = 0;
for (const value of newArray) {
  const num = Number(value);
  if (Number.isInteger(num) === true && num > 0) {
    total += num;
  }
}
console.log('total:', total);