//first task
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

console.table(matrix3);


//
const wrapEl = document.querySelector('.wrapper');
const headEl = document.querySelector('.header');
const btnModEl = document.querySelector('.btn');
const inputEl = document.querySelector('#timeset');
const modEl = document.querySelector('.modal');
const modCloseEl = document.querySelector('.close');
btnModEl.disabled = true;

const parkingLots = 52;

let timeNow = moment();

let realTime = setInterval(() => {
  headEl.innerHTML = `Current time:${moment().format('HH:mm:ss')} Available places:${countOfAvb()}`;
}, 1000);


function Lot(id, occp, time){
  this.id = id;
  this.occupied = occp;
  this.time = time;
}

const arrOfLots = [];
for (let i=0; i<parkingLots; i++){
  arrOfLots.push(new Lot(i, false, timeNow.format('H:mm:ss')));
}

const drawOfLots = parkingLots => {
  let str = '';
  for (let i=0; i<parkingLots; i++){
    str = `${str}<div class='elem' id='${i}'>${arrOfLots[i].id}<br>Available</div>`;
  } 
  wrapEl.innerHTML = str;
}
drawOfLots(parkingLots);

const countOfOccp = (arr) =>{
  let total = 0;
  arr.forEach(item => {
    if (item.occupied){
      total += 1;
    }
  });
  return total;
}

const countOfAvb = () => parkingLots - countOfOccp(arrOfLots);

/* const infoRender = (parkingLots) => {
  for (let i=0; i<parkingLots; i++){
    if (arrOfLots[i].occupied){
    document.getElementById(`${i}`).innerHTML = `${arrOfLots[i].id}<br> Occupied: ${arrOfLots[i].occupied}<br>Time:${arrOfLots[i].time}`;
    } else document.getElementById(`${i}`).innerHTML = `${arrOfLots[i].id}<br> Occupied: ${arrOfLots[i].occupied}`;
  }
} */

/* infoRender(parkingLots); */

modCloseEl.addEventListener('click', () => {
  modEl.style.display = 'none';
});

let idNum;


document.addEventListener('click', (e) => {
  for (let i=0; i<parkingLots; i++){
    if (e.target.id == `${i}`){
      modEl.style.display = 'block';
      idNum = Number(e.target.id);
    }
  }
  if (e.target == modEl){
    modEl.style.display = 'none';
  }
});

btnModEl.addEventListener('click', () => {
  let destTime = moment(`${inputEl.value}`, 'HH:mm:ss');  
  countDown = setInterval(() => {
    let timeNow2 = moment();
    if (moment(destTime).isBefore(timeNow2)){
      destTime.add(1, 'd');
    }
    let diffTime = moment(destTime.diff(timeNow2)).utc();
    if (diffTime < 1000) {
      clearInterval(countDown);
      arrOfLots[idNum].occupied = false;
      document.getElementById(`${idNum}`).innerHTML = `${arrOfLots[idNum].id}<br> Available!`;
    } else{
      arrOfLots[idNum].occupied = true;
      arrOfLots[idNum].time = diffTime.format('HH:mm:ss');
      document.getElementById(`${idNum}`).innerHTML = `${arrOfLots[idNum].id}<br> Occupied!<br>Set: ${inputEl.value}<br>Left:${arrOfLots[idNum].time}`;
    }       
  }, 1000);
  countOfOccp(arrOfLots);
  countOfAvb();
  modEl.style.display = 'none';
});

inputEl.addEventListener('input', (e) => {
  if (e.target.value !== ""){
    btnModEl.disabled = false;
  } else {
    btnModEl.disabled = true;
  }
});


/* const wrapEl = document.querySelector('.wrapper');
const headEl = document.querySelector('.header');
const btnModEl = document.querySelector('.btn');
const inputEl = document.querySelector('#timeset');
const modEl = document.querySelector('.modal');
const modCloseEl = document.querySelector('.close');
btnModEl.disabled = true;

const parkingLots = 52;

let timeNow = moment();

let realTime = setInterval(() => {
  headEl.innerHTML = `Current time:${moment().format('HH:mm:ss')} Available places:${countOfAvb()}`;
}, 1000);


function Lot(id, occp, time){
  this.id = id;
  this.occupied = occp;
  this.time = time;
}

const arrOfLots = [];
for (let i=0; i<parkingLots; i++){
  arrOfLots.push(new Lot(i, false, timeNow.format('H:mm:ss')));
}

const drawOfLots = parkingLots => {
  let str = '';
  for (let i=0; i<parkingLots; i++){
    str = `${str}<div class='elem' id='${i}'>${arrOfLots[i].id}<br>Available</div>`;
  } 
  wrapEl.innerHTML = str;
}
drawOfLots(parkingLots);

const countOfOccp = (arr) =>{
  let total = 0;
  arr.forEach(item => {
    if (item.occupied){
      total += 1;
    }
  });
  return total;
}

const countOfAvb = () => parkingLots - countOfOccp(arrOfLots);


modCloseEl.addEventListener('click', () => {
  modEl.style.display = 'none';
});


let idNum;
let timeVal;

document.addEventListener('click', (e) => {
  let idEl = e.target.id; 
  for (let i=0; i<parkingLots; i++){
    if (idEl === `${i}`){
      modEl.style.display = 'block';
      idNum = Number(idEl);
    }
  }
  if (e.target == modEl){
    modEl.style.display = 'none';
  }
});

inputEl.addEventListener('input', (e) => {
  timeVal = e.target.value;
  if (e.target.value !== ""){
    btnModEl.disabled = false;
    destTime = moment(`${timeVal}`, 'HH:mm:ss');
  } else {
    btnModEl.disabled = true;
  }
});
let destTime;

const setCountDown = () =>{
  
  countDown = setInterval(() => {
    
    
    let timeNow2 = moment();
     
    if (moment(destTime).isBefore(timeNow2)){
      destTime.add(1, 'd');
    }

    let diffTime = moment(destTime.diff(timeNow2)).utc();

    if (diffTime < 1000) {
      clearInterval(countDown);
      arrOfLots[idNum].occupied = false;
      document.getElementById(`${idNum}`).innerHTML = `${idNum}<br>Available`;
    } else{
      arrOfLots[idNum].occupied = true;
      arrOfLots[idNum].time = diffTime.format('HH:mm:ss');
      document.getElementById(`${idNum}`).innerHTML = `${idNum}<br>Occupied<br>Set: ${timeVal}<br>Left: ${diffTime.format('HH:mm:ss')}`;
    }       
  }, 1000);
  modEl.style.display = 'none';
  countOfOccp(arrOfLots);
  countOfAvb();
}
btnModEl.addEventListener('click', setCountDown); */