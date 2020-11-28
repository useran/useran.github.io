//search for simple numbers up and down from our myNumber
const searchForNum = (myNumber, n) => {
  let arr=[];
  let i = myNumber;
  number1:
  while (i<=myNumber && arr.length !== n){
    i--;
    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0){
          continue number1;
      }
    } 
    arr.push(i);
  }
  arr.reverse();
  let k = myNumber;
  number2:
  while (k>=myNumber && arr.length !== 2*n){
    k++;
    for (let j = 2; j < Math.sqrt(k); j++) {
      if (k % j === 0){
        continue number2;
      }
    } 
    arr.push(k);
  }
  return arr;
}
//calculating radius for the points
const findRadius = (arr, myNumber) => {
  let newArr=[];
  for (let i=0; i<arr.length; i++){
    newArr.push(Math.abs(arr[i]-myNumber));
  }
  return newArr;
}
//search for min radius value
const findMin = (arr) => {
  let min = arr[0];
  let index = null;
  for (let i=0; i<arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
      index = i;
    }
  }
  return index;
}

let myNumArray = searchForNum(5, 2);
let myRadius = findRadius(myNumArray, 5);
let getIndex = findMin(myRadius);
/* console.log(myNumArray); */

//calculating the closer simple numbers
if (myRadius[getIndex-1]>myRadius[getIndex+1]){
  console.log(myNumArray[getIndex], myNumArray[getIndex+1]);
} else if (myRadius[getIndex-1]===myRadius[getIndex+1]){
  console.log(myNumArray[getIndex], myNumArray[getIndex-1],myNumArray[getIndex+1]);
} else console.log(myNumArray[getIndex], myNumArray[getIndex-1]);
