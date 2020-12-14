//first task
const randomInt = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

const randomArray = (length) => {
  let arr = [];
  for (let i = 0; i < length; i++){
    arr.push(randomInt(10, 50));
  }
  return arr;
}

const changeArr = (arr, arr2, index) => {
  const arr3 =[];
  for (let i=0; i < arr.length; i++){
    arr3.push(arr[i]);
  };
  arr3[index] = arr2[index];
  return arr3;
}
const arr = randomArray(12);
const arr2 = randomArray(12);
const newArr = changeArr(arr, arr2, 1);
const newArr2 = changeArr(newArr, arr2, arr.length-1);
const newArr3 = changeArr(newArr2, arr2, arr.length/2);

console.log(newArr3);


//second task
const findDigitAmount = number => {
  let count = (number == 0) ? 1 : 0;
  while (Math.trunc(number)!== 0){
    number /= 10;
    count += 1;
  }
  return count;
}
  
let num = findDigitAmount(0);
  
console.log(num);


//third task
let matrix = [
  [4, 12, 3, 15],
  [6, 5, 16, 34],
  [8, 8, 19, 10],
  [7, 18, 9, 10]
];

const sumOfSideDiag = inputArray => {
  let sum = 0;
  for (let i=0; i<inputArray.length; i++){
    sum = sum + inputArray[i][inputArray.length-1-i];   
  }
  return sum;
}

let genSum = sumOfSideDiag(matrix);

console.log(genSum);
