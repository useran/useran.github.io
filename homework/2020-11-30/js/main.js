//first task;
let arr = [1, 3, 4, 6, 13, 9, 23, 25, 2];
const check = (arr, i) => {
  if (arr[i] !== arr[i-1]+arr[i+1]){
    arr[i] = arr[i-1]+arr[i+1];
  }
  return arr;
}

let firstIndex = check(arr, 2);
let secondIndex = check(arr, 5);
let thirdIndex = check(arr, 7);

console.log(arr);


//second task;
let newArray = [];
for(let i = 0; i<10; i += 1) {
  newArray.push(Math.floor(Math.random()*100));
}
const findMin = arr => {
  let min = arr[0];
  for (let i=0; i<arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
let firstNum = newArray[0] - findMin(newArray);
let lastNum = newArray[9] - findMin(newArray);
console.log(newArray);
console.log(firstNum, lastNum);


//third task
let array1 = [];
let array2 = [];
for(let i = 0; i<10; i += 1) {
  array1.push(Math.floor(Math.random()*100));
}
for (let i = 0; i <array1.length; i +=1){
  array2.push((array1[i] * 3) - 5);
}
console.log(array1);
console.log(array2);

//fourth task 
let a = 0;  
let b = 1;
let count = 0;  
let arr1 = []; 
let max = 9991999; 
let c = 0; 
while (c<max) { 
  c = a + b;
  a = b;
  b = c;
  arr1.push(c);
  count += 1; 
}
console.log(arr1[count-2], count-1);