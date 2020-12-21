






/* const inputArray = [5, 23, -110, 3, 18, 0, 14];

//a - searching for odd numbers
inputArray.forEach(element => {
  element % 2 !== 0 ? console.log(element) : null;
});

//b - new array [element + 20]
let twentyAdd = inputArray.map(element => element +20);
console.log(twentyAdd);

//c - odd nmbers > 0
let posOdd = inputArray.filter((element) =>{
  return (element > 0) && (element % 2 !== 0);
});
console.log(posOdd);

//d - calculating sum of element % 3
let totalOst = inputArray.reduce((total, element) => {
  return total + element % 3;
}, 0);
console.log(totalOst);

//e - check for element === 5
const checkNum = (array, number) => {
  return array.includes(number) ? console.log(`We do have that number ${number}!`) : console.log(`We do not have number ${number}!`);
}
checkNum(inputArray, 5);

//f - new array without [0] element
let firstOut = inputArray.map(element => element);
firstOut.shift();
console.log(firstOut);

//g - new array (sorted)
let sortNum = inputArray.map(element => element);
console.log(sortNum.sort((a, b) => a - b));

//h - check for element % number === 0
const checkIfMult = (array, num) => {
  if (array.some(element => element % num === 0)){
    return (`There ARE numbers divisible to ${num}!`);
  } else return (`There are NO numbers divisible to ${num}!`);
}
console.log(checkIfMult(inputArray, 5)); */