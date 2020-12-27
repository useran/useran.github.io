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
wrapEl.innerHTML = `Filled cells: ${count(newMatrix)}`;

let currI;
let currJ;

//function to redraw the field
const newRender = () => {
  for (let i=0; i<newMatrix.length; i++){
    for (let j=0; j<newMatrix[0].length; j++){
      if (newMatrix[i][j] === 0) {
      document.getElementById(`${i}${j}`).classList.remove('color');
      } else { 
      document.getElementById(`${i}${j}`).classList.add('color');
      currI = i;
      currJ = j;
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
  if (j<newMatrix.length-1){
  document.getElementById(`${i}${j+1}`).classList.add('color');
  document.getElementById(`${i}${j}`).classList.remove('color');
  currI = i;
  currJ = j+1;
  } else alert('No other way!');
}

//calculating the move Left
const moveLeft = () => {
  let i = currI;
  let j = currJ;
  if (j>0){
  document.getElementById(`${i}${j-1}`).classList.add('color');
  document.getElementById(`${i}${j}`).classList.remove('color');
  currI = i;
  currJ = j-1;
  } else alert('No other way!');
}

//calculating the move UP
const moveUp = () => {
  let i = currI;
  let j = currJ;
  if (i>0){
  document.getElementById(`${i-1}${j}`).classList.add('color');
  document.getElementById(`${i}${j}`).classList.remove('color');
  currI = i-1;
  currJ = j;
  } else alert('No other way!');
}

//calculating the move Down
const moveDown = () => {
  let i = currI;
  let j = currJ;
  if (i<newMatrix.length - 1){
  document.getElementById(`${i+1}${j}`).classList.add('color');
  document.getElementById(`${i}${j}`).classList.remove('color');
  currI = i+1;
  currJ = j;
  } else alert('No other way!');
}

//keyboard listener
document.addEventListener('keydown', e => {
  switch (e.code){
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowDown':
      moveDown();
      break;
  }
})

mainEl.addEventListener('click', e => {
  let iEl = e.target.id.charAt(0);
  let jEl = e.target.id.charAt(1);
  newMatrix[iEl][jEl] = 1;
  newRender();
});

btnUpEl.addEventListener('click', moveUp);
btnDownEl.addEventListener('click', moveDown);
btnLeftEl.addEventListener('click', moveLeft);
btnRightEl.addEventListener('click', moveRight);