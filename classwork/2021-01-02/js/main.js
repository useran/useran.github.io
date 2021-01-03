const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
//1
const newMatr = (rows, columns, min, max) => {
  const newArr = []
  for (let i=0; i<rows; i++){
    newArr[i] = [];
    for (let j=0; j<columns; j++){
    newArr[i][j] = randomInt(min, max);
    }
  }
  return newArr;
}
//2
const clearArray = arr => {
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      arr[i][j] = 0;
    }
  }
  return arr;
}
let newMatrix = clearArray(newMatr(5, 5, 0, 10));

//3
const count = arr => {
  let total = 0;
  arr.forEach(item => {
    item.forEach(e => {
      if (e !== 0){
        total += 1;
      }
    });
  });
  return total;
}
//4,5,6
const mainEl = document.querySelector('.main');
const wrapEl = document.querySelector('.wrap');
const btnUpEl = document.querySelector('.btn-1');
const btnDownEl = document.querySelector('.btn-2');
const btnLeftEl = document.querySelector('.btn-3');
const btnRightEl = document.querySelector('.btn-4');
const timerEl = document.querySelector('.wrap2');

//function to create a div
const addDiv = (idElem, str) => {
  let newDiv = document.createElement('div');
  newDiv.innerHTML = str;
  document.getElementById(idElem).appendChild(newDiv);
}

//function to create a field
const matrDraw = arr => {
  let str = '';
  for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr[0].length; j++){
      if (arr[i][j] === 0){
       str = `${str}<div class='elem' style='color:white' id='${i}${j}'></div>`;
      } else str = `${str}<div class='elem' style= 'color:black id='${i}${j}'></div>`;
    } 
    addDiv('mainer', str);
    str = ''; 
  }
}
matrDraw(newMatrix);

document.getElementById(`00`).classList.add('color');
newMatrix[0][0] = 1;
let moveCounts = 1;
btnUpEl.disabled = true;
btnUpEl.style.backgroundColor = 'gray';
btnLeftEl.disabled = true;
btnLeftEl.style.backgroundColor = 'gray';
wrapEl.innerHTML = `Filled cells: ${count(newMatrix)}`;

let currI = 0;
let currJ = 0;

//function to redraw the field
const newRender = () => {
  for (let i=0; i<newMatrix.length; i++){
    for (let j=0; j<newMatrix[0].length; j++){
      if (newMatrix[i][j] === 0) {
      document.getElementById(`${i}${j}`).classList.remove('color');
      } else { 
      document.getElementById(`${i}${j}`).classList.add('color');
      }
    }
  } 
  wrapEl.innerHTML = `Filled cells: ${count(newMatrix)}`;
  clearArray(newMatrix);
}

const checkForMoves = (i, j) => {
  if (i > 3) {
    btnDownEl.disabled = true;
    btnDownEl.style.backgroundColor = 'gray';
  } else if (i < 1) {
    btnUpEl.disabled = true;
    btnUpEl.style.backgroundColor = 'gray';
  } else {
    btnDownEl.disabled = false;
    btnUpEl.disabled = false;
    btnDownEl.style.backgroundColor = 'brown';
    btnUpEl.style.backgroundColor = 'brown';
  }
  if (j < 1) {
    btnLeftEl.disabled = true;
    btnLeftEl.style.backgroundColor = 'gray';
  } else if (j > 3){
    btnRightEl.disabled = true;
    btnRightEl.style.backgroundColor = 'gray';
  } else {
    btnRightEl.disabled = false;
    btnLeftEl.disabled = false;
    btnRightEl.style.backgroundColor = 'brown';
    btnLeftEl.style.backgroundColor = 'brown';
  }
}

//functions for checking the moves available
const checkForMoveDown = (i, j) => {
  if (i<5 && newMatrix[i][j] === 2){
    btnDownEl.disabled = true;
    btnDownEl.style.backgroundColor = 'gray';
    return false;
  } else return true;
}
const checkForMoveUp = (i, j) => {
  if (i>0 && newMatrix[i][j] === 2){
    btnUpEl.disabled = true;
    btnUpEl.style.backgroundColor = 'gray';
    return false;
  } else {
    btnUpEl.disabled = false;
    btnUpEl.style.backgroundColor = 'brown';
    return true;
  }
}
const checkForMoveLeft = (i, j) => {
  if (j>0 && newMatrix[i][j] === 2){
    btnLeftEl.disabled = true;
    btnLeftEl.style.backgroundColor = 'gray';
    return false;
  } else {
    btnLeftEl.disabled = false;
    btnLeftEl.style.backgroundColor = 'brown';
    return true;
  }
}
const checkForMoveRight = (i, j) => {
  if (j<5 && newMatrix[i][j] === 2){
    btnRightEl.disabled = true;
    btnRightEl.style.backgroundColor = 'gray';
    return false;
  } else return true;
}

//assigning new position and painting the cells
const assignNewPos = (y, x) => {
  document.getElementById(`${currI+y}${currJ+x}`).classList.add('color');
  document.getElementById(`${currI}${currJ}`).classList.remove('color');
  document.getElementById(`${currI}${currJ}`).classList.add('color2');
  newMatrix[currI][currJ] = 2;
  newMatrix[currI+y][currJ+x] = 1;
  currI = currI+y;
  currJ = currJ+x;
}

//calculating the move Right
const moveRight = () => {
  moveCounts = count(newMatrix);
  checkForMoves(currI, currJ+1);
  if (newMatrix[currI][currJ] === 2){
    btnLeftEl.disabled = true;
    btnLeftEl.style.backgroundColor = 'gray';
  } else {
    btnLeftEl.disabled = false;
    btnLeftEl.style.backgroundColor = 'brown';
  }
  if (checkForMoveRight(currI, currJ+1)){
    assignNewPos(0, 1);
  }
  checkGameOver();
}

//calculating the move Left
const moveLeft = () => {
  moveCounts = count(newMatrix);
  checkForMoves(currI, currJ-1);
  if (newMatrix[currI][currJ] === 2){
    btnRightEl.disabled = true;
    btnRightEl.style.backgroundColor = 'gray';
  } else {
    btnRightEl.disabled = false;
    btnRightEl.style.backgroundColor = 'brown';
  }
  if (checkForMoveLeft(currI, currJ-1)){
    assignNewPos(0, -1);
  }
  checkGameOver();
}

//calculating the move UP
const moveUp = () => {
  moveCounts = count(newMatrix);
  checkForMoves(currI-1, currJ);
  if (newMatrix[currI][currJ] === 2){
    btnDownEl.disabled = true;
    btnDownEl.style.backgroundColor = 'gray';
  } else {
    btnDownEl.disabled = false;
    btnDownEl.style.backgroundColor = 'brown';
  }
  if (checkForMoveUp(currI-1, currJ)){
    assignNewPos(-1, 0);
  }
  checkGameOver();
}

//calculating the move Down
const moveDown = () => {
  moveCounts = count(newMatrix);
  checkForMoves(currI+1, currJ);
  if (newMatrix[currI][currJ] === 2){
    btnUpEl.disabled = true;
    btnUpEl.style.backgroundColor = 'gray';
  } else {
    btnUpEl.disabled = false;
    btnUpEl.style.backgroundColor = 'brown';
  }
  if (checkForMoveDown(currI+1, currJ)){
    assignNewPos(1, 0);
  }
  checkGameOver();
}

//checking for Game Over
const checkGameOver = () =>{
  if ((btnLeftEl.disabled === true) && (btnRightEl.disabled === true) && (btnUpEl.disabled === true) && (btnDownEl.disabled === true)) {
    wrapEl.innerHTML = 'Game over!!!';
    clearTimeout(countDown);
    timerEl.innerHTML = '00:00:00.0';  
  } else if ((moveCounts !== moveCounts + 1) && (timerEl.innerHTML === '00:00:00.0')){
    wrapEl.innerHTML = 'Game over!!!';
  } else {
    wrapEl.innerHTML = `Filled cells: ${count(newMatrix)}`;
    clearTimeout(countDown);
    destTime = moment('00:00:10.0', 'HH:mm:ss.S');
    setCountDown();
  }
}

//setting up timer
let destTime = moment('00:00:10.0', 'HH:mm:ss.S');

const timer = () => {
  let timeFlag;
  destTime.subtract(100, 'ms');
  timerEl.innerHTML = destTime.format('HH:mm:ss.S');   
  if (destTime.format('HH:mm:ss.S') === '00:00:00.0'){
    timeFlag = true;
    wrapEl.innerHTML = 'Game over!!!';
    btnLeftEl.disabled = true; 
    btnLeftEl.style.backgroundColor = 'gray';
    btnRightEl.disabled = true; 
    btnRightEl.style.backgroundColor = 'gray'; 
    btnUpEl.disabled = true; 
    btnUpEl.style.backgroundColor = 'gray'; 
    btnDownEl.disabled = true;
    btnDownEl.style.backgroundColor = 'gray';
  }
  if (timeFlag){
    clearTimeout(countDown);
  } else countDown = setTimeout(timer, 100);
}

const setCountDown = () => {
  let countDown = setTimeout(timer, 100);
}
setCountDown();

//adding listeners
btnUpEl.addEventListener('click', moveUp);
btnDownEl.addEventListener('click', moveDown);
btnLeftEl.addEventListener('click', moveLeft);
btnRightEl.addEventListener('click', moveRight);