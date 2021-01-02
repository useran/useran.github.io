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
clearArray(newMatrix);

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

//calculating the move Right
const moveRight = () => {
  let i = currI;
  let j = currJ;
  checkForMoves(i, j+1);
  moveCounts = count(newMatrix);
  if (j<newMatrix.length-1) {
    if (document.getElementById(`${i}${j+1}`).classList.contains('color2')){
      btnRightEl.disabled = true;
      btnRightEl.style.backgroundColor = 'gray';
    } else {
      document.getElementById(`${i}${j+1}`).classList.add('color');
      document.getElementById(`${i}${j}`).classList.remove('color');
      document.getElementById(`${i}${j}`).classList.add('color2');
      newMatrix[i][j] = 2;
      newMatrix[i][j+1] = 1;
      if (newMatrix[i][j] === 2){
        btnLeftEl.disabled = true;
        btnLeftEl.style.backgroundColor = 'gray';
      } else {
        btnLeftEl.disabled = false;
        btnLeftEl.style.backgroundColor = 'brown';
      }
      if (newMatrix[i][j+2] === 2){
        btnRightEl.disabled = true;
        btnRightEl.style.backgroundColor = 'gray';
      } 
      if ((i>0) && (j<4)){
        if (newMatrix[i-1][j+1] === 2){
        btnUpEl.disabled = true;
        btnUpEl.style.backgroundColor = 'gray';
        } else {
        btnUpEl.disabled = false;
        btnUpEl.style.backgroundColor = 'brown';
        }
      }
      if ((i<4) && (j<4)){
        if (newMatrix[i+1][j+1] === 2){
        btnDownEl.disabled = true;
        btnDownEl.style.backgroundColor = 'gray';
        } else {
        btnDownEl.disabled = false;
        btnDownEl.style.backgroundColor = 'brown';
        }
      }
      currI = i;
      currJ = j+1;
    }
  } 
  checkGameOver();
}

//calculating the move Left
const moveLeft = () => {
  let i = currI;
  let j = currJ;
  moveCounts = count(newMatrix);
  checkForMoves(i, j-1);
  if (j>0){
    if (document.getElementById(`${i}${j-1}`).classList.contains('color2')){
      btnLeftEl.disabled = true;
      btnLeftEl.style.backgroundColor = 'gray';
    } else {
      document.getElementById(`${i}${j-1}`).classList.add('color');
      document.getElementById(`${i}${j}`).classList.remove('color');
      document.getElementById(`${i}${j}`).classList.add('color2');
      newMatrix[i][j] = 2;
      newMatrix[i][j-1] = 1;
      if (newMatrix[i][j] === 2){
        btnRightEl.disabled = true;
        btnRightEl.style.backgroundColor = 'gray';
      } else {
        btnRightEl.disabled = false;
        btnRightEl.style.backgroundColor = 'brown';
      }
      if (newMatrix[i][j-2] === 2){
        btnLeftEl.disabled = true;
        btnLeftEl.style.backgroundColor = 'gray';
      }
      if (i>0){
        if (newMatrix[i-1][j-1] === 2){
          btnUpEl.disabled = true;
          btnUpEl.style.backgroundColor = 'gray';
        } else {
          btnUpEl.disabled = false;
          btnUpEl.style.backgroundColor = 'brown';
        }
      }
      if ((j>0) && (i<4)){
        if (newMatrix[i+1][j-1] === 2){
          btnDownEl.disabled = true;
          btnDownEl.style.backgroundColor = 'gray';
        } else {
          btnDownEl.disabled = false;
          btnDownEl.style.backgroundColor = 'brown';
        }
      }
      currI = i;
      currJ = j-1;
    }
  }
  checkGameOver();
}

//calculating the move UP
const moveUp = () => {
  let i = currI;
  let j = currJ;
  checkForMoves(i-1, j);
  moveCounts = count(newMatrix);
  if (i>0) {
    if (document.getElementById(`${i-1}${j}`).classList.contains('color2')){
      btnUpEl.disabled = true;
      btnUpEl.style.backgroundColor = 'gray';
    } else {
      document.getElementById(`${i-1}${j}`).classList.add('color');
      document.getElementById(`${i}${j}`).classList.remove('color');
      document.getElementById(`${i}${j}`).classList.add('color2');
      newMatrix[i][j] = 2;
      newMatrix[i-1][j] = 1;
      if (newMatrix[i][j] === 2){
        btnDownEl.disabled = true;
        btnDownEl.style.backgroundColor = 'gray';
      } else {
        btnDownEl.disabled = false;
        btnDownEl.style.backgroundColor = 'brown';
      }
      if ((i>1) && (newMatrix[i-2][j] === 2)) {
        btnUpEl.disabled = true;
        btnUpEl.style.backgroundColor = 'gray';
      } 
      if ((i>0) && (j<4)){
        if (newMatrix[i-1][j+1] === 2){
          btnRightEl.disabled = true;
          btnRightEl.style.backgroundColor = 'gray';
        } else {
          btnRightEl.disabled = false;
          btnRightEl.style.backgroundColor = 'brown';
        }
      }
      if ((i>0) && (j>0)){
        if (newMatrix[i-1][j-1] === 2){
          btnLeftEl.disabled = true;
          btnLeftEl.style.backgroundColor = 'gray';
        } else {
          btnLeftEl.disabled = false;
          btnLeftEl.style.backgroundColor = 'brown';
        }
      }
      currI = i-1;
      currJ = j;
    }
  }
  checkGameOver();
}

//calculating the move Down
const moveDown = () => {
  let i = currI;
  let j = currJ;
  checkForMoves(i+1, j);
  moveCounts = count(newMatrix);
  if (i<newMatrix.length - 1){
    if (document.getElementById(`${i+1}${j}`).classList.contains('color2')){
      btnDownEl.disabled = true;
      btnDownEl.style.backgroundColor = 'gray';
    } else {
      document.getElementById(`${i+1}${j}`).classList.add('color');
      document.getElementById(`${i}${j}`).classList.remove('color');
      document.getElementById(`${i}${j}`).classList.add('color2');
      newMatrix[i][j] = 2;
      newMatrix[i+1][j] = 1;
      if (newMatrix[i][j] === 2){
        btnUpEl.disabled = true;
        btnUpEl.style.backgroundColor = 'gray';
      } else {
        btnUpEl.disabled = false;
        btnUpEl.style.backgroundColor = 'brown';
      }
      if ((i<3) && (newMatrix[i+2][j] === 2)){
        btnDownEl.disabled = true;
        btnDownEl.style.backgroundColor = 'gray';
      } 
      if (j<4){
        if (newMatrix[i+1][j+1] === 2){
          btnRightEl.disabled = true;
          btnRightEl.style.backgroundColor = 'gray';
        } else {
          btnRightEl.disabled = false;
          btnRightEl.style.backgroundColor = 'brown';
        }
      }
      if ((j>0) && (i<4)){
        if (newMatrix[i+1][j-1] === 2){
        btnLeftEl.disabled = true;
        btnLeftEl.style.backgroundColor = 'gray';
      } else {
        btnLeftEl.disabled = false;
        btnLeftEl.style.backgroundColor = 'brown';
      }
    }
      currI = i+1;
      currJ = j;
    }
  }
  checkGameOver();
}

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

btnUpEl.addEventListener('click', moveUp);
btnDownEl.addEventListener('click', moveDown);
btnLeftEl.addEventListener('click', moveLeft);
btnRightEl.addEventListener('click', moveRight);