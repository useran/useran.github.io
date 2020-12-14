const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getNewObject = (rows, columns, min, max) => { //create 2d matrix
  const newObj = {};
  for (let i=0; i<rows; i++){
    newObj.id = `${i}${j}`;
    newObj.value = randomInt(min, max);
    newArr[i][j] = newObj;
  }
  return newArr;
}

const arr = getArray(5, 5, 0, 12);

console.table(arr);




















/* //first task
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const newMatrix = (n,m) => { //creating random 2d matrix
  let newArr = [];
  for (let i=0; i<n; i++){
    newArr.push([]);
    for (let j=0; j<m; j++){
      newArr[i][j] = randomInt(0, 12);
    }
  }
  return newArr;
}

const matrix = newMatrix(5, 5);
console.table(matrix);

const copyOfArray = arr => { //making a copy of an array for further use in order to avoid overwriting
  const matrCopy = []; 
  for (i=0; i<arr.length; i++){
    matrCopy[i] = [];
    for (j=0; j<arr[0].length; j++){
      matrCopy[i][j] = arr[i][j];
    }
  }
  return matrCopy;
}

const matrix2 = copyOfArray(matrix);



//second task
const sumMainDiag = arr => { //finding sum of items of main diagonal
  let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum = sum + arr[i][i];   
  }
  return sum;
}

let mainDiagSum = sumMainDiag(matrix);

console.log('Sum of main diagonal =', mainDiagSum);



//third task
const sumSideDiag = arr => {  //finding sum of items of side diagonal
  let sum = 0;
  for (let i=0; i<arr.length; i++){
    sum = sum + arr[i][arr.length-1 - i];   
  }
  return sum;
}

let sideDiagSum = sumSideDiag(matrix);
console.log('Sum of side diagonal =', sideDiagSum);



//forth task
const arraySwap = (arr, n, m) => {  //swapping columns in an array
  for (let i=0; i<arr.length; i++){
    temp = arr[i][n]; 
    arr[i][n] = arr[i][m];
    arr[i][m] = temp;
  }
  return arr;
}

console.table(arraySwap(matrix2, 0, 1)); //matrix2 is used here in order to avoid overwriting an array



//fifth task
const findMaxSum = arr => {  //finding max sum of columns and returning an index of the max column
  let sumMax=0;
  let index=null; 
  for (let j=0; j<arr.length; j++){
    let sum=0;
    for (let i=0; i<arr.length; i++){
      sum = sum + arr[i][j];
    } 
    if (sumMax < sum){
      sumMax = sum;
      index = j;
    }
  }
  return index;
}

const matrix3 = copyOfArray(matrix); //creating matrix3 in order to avoid overwriting an array

if ((findMaxSum(matrix) !== matrix.length-1) && (findMaxSum(matrix) !== 0)){  //filling out "0" in array between the range (0;index) && (index;array.length)
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<findMaxSum(matrix); j++){
      matrix3[i][j] = 0;
    } 
    for (let j=findMaxSum(matrix)+1; j<matrix[0].length; j++){
      matrix3[i][j] = 0;
    } 
  }
} else if (findMaxSum(matrix) === 0){
  for (let i=0; i<matrix.length; i++){
    for (let j=1; j<matrix[0].length; j++){
      matrix3[i][j] = 0;
    } 
  }
} else if (findMaxSum(matrix) === matrix.length-1){
  for (let i=0; i<matrix.length; i++){
    for (let j=0; j<matrix[0].length-1; j++){
      matrix3[i][j] = 0;
    } 
  }
}

console.table(matrix3); */