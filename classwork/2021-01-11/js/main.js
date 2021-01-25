const wrapEl = document.querySelector('.wrapper');
const leftSideEl = document.querySelector('.left-side');
const rightSideEl = document.querySelector('.right-side');
const cardDeckEl = document.querySelector('.cards'); 
const cardStatusEl = document.querySelector('.status-block'); 
const resetBtnEl = document.querySelector('.reset-btn'); 

const gridLength = 8;
const gridHeight = 8;

const gridColsRows = (cols, rows) => {
  rightSideEl.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  rightSideEl.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}
gridColsRows(gridLength, gridHeight);

const drawOfGrid = (height, length) => {
  let str = '';
  for (let i=0; i<height*length; i++){
    str = `${str}<div class='elem color' id='${i}'></div>`;
  } 
  return str;
}
rightSideEl.innerHTML = drawOfGrid(gridHeight, gridLength);

const typeLeft = 10;

function CardType(name, top, right, bottom, left){
  this.name = name;
  this.top = top;
  this.right = right;
  this.bottom = bottom;
  this.left = left;
}

const arrCardTypes = [];
const fillCardArr = (arrCardTypes, name, top, right, bottom, left) => {
  for (let i=0; i<typeLeft; i++){
    arrCardTypes.push(new CardType(name, top, right, bottom, left));
  }
}
fillCardArr(arrCardTypes, 'a', false, true, true, false);
fillCardArr(arrCardTypes, 'b', false, true, false, false);
fillCardArr(arrCardTypes, 'c', false, true, false, true);


const checkForPlace = (arr2, i) => {
  if (i===7){
    if (arr2[i][0].right === true || arr2[i][0].top === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i===0){
    if (arr2[i][0].left === true || arr2[i][0].top === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i===63){
    if (arr2[i][0].right === true || arr2[i][0].bottom === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i===56){
    if (arr2[i][0].left === true || arr2[i][0].bottom === true ) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if( i>7 && i<56 && i%8!==0 && (i+1)%8 !==0){
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].top === true && arr2[i-8][0].bottom === true && arr2[i+1][0].left === true) || (arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].bottom === true && arr2[i+8][0].top === true) || (arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].top === true && arr2[i-8][0].bottom === true && arr2[i-1][0].right === true) || (arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].bottom === true && arr2[i+8][0].top === true) || (arr2[i][0].top === true && arr2[i-8][0].bottom === true && arr2[i][0].bottom === false && arr2[i][0].right === false && arr2[i][0].left === false) || (arr2[i][0].bottom === true && arr2[i+8][0].top === true && arr2[i][0].top === false && arr2[i][0].right === false && arr2[i][0].left === false)|| (arr2[i][0].bottom === arr2[i+8][0].top && arr2[i][0].top === arr2[i-8][0].bottom && arr2[i][0].right === arr2[i+1][0].left && arr2[i][0].left === arr2[i-1][0].right)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i][0].top === true && arr2[i-8][0].bottom === true) || (arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i][0].top === true && arr2[i-8][0].bottom === true) || ((arr2[i-8][0].bottom === true && arr2[i][0].top === true && arr2[i+8][0].top === true && arr2[i][0].bottom === true)) || ((arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i+1][0].left === true && arr2[i][0].right === true)) || (arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i][0].bottom === true) || (arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i][0].top === true && arr2[i-8][0].bottom === true) || (arr2[i][0].right === true && arr2[i+1][0].left === true && arr2[i][0].left === arr2[i-1][0].right && arr2[i][0].top === arr2[i-8][0].bottom) || (arr2[i][0].left === true && arr2[i-1][0].right === true && arr2[i-8][0].bottom === arr2[i][0].top && arr2[i][0].right === arr2[i+1][0].left) || (arr2[i][0].left === false && arr2[i][0].right === false && arr2[i][0].top === false && arr2[i-1][0].right === false && arr2[i-8][0].bottom === false && arr2[i+1][0].left === false)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i][0].bottom === true && arr2[i+8][0].top === true) || (arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i][0].bottom === true && arr2[i+8][0].top === true) || ((arr2[i+8][0].top === true && arr2[i][0].bottom === true && arr2[i-8][0].bottom === true && arr2[i][0].top === true)) || (arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i+1][0].left === true && arr2[i][0].right === true) || (arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i][0].bottom === false && arr2[i+8][0].top === false ) || (arr2[i][0].right === true && arr2[i+1][0].left === true && arr2[i][0].left === arr2[i-1][0].right && arr2[i][0].bottom === arr2[i+8][0].top) || (arr2[i][0].left === false && arr2[i][0].right === false && arr2[i][0].bottom === false && arr2[i-1][0].right === false && arr2[i+8][0].top === false && arr2[i+1][0].left === false)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === true && arr2[i][0].left === true && arr2[i][0].bottom === arr2[i+8][0].top && arr2[i-8][0].bottom === false && arr2[i][0].top === false) || (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i][0].left === true && arr2[i-1][0].right === true && arr2[i+8][0].top === true && arr2[i][0].bottom === true) || (arr2[i+8][0].top === true && arr2[i][0].bottom === true && arr2[i-8][0].bottom === true && arr2[i][0].top === true) || (arr2[i-8][0].bottom === true && arr2[i][0].top === true && arr2[i-1][0].right === arr2[i][0].left && arr2[i+8][0].top === false) || (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i-1][0].right === false && arr2[i+8][0].top === true && arr2[i][0].bottom === true && arr2[i][0].right === true) || (arr2[i+8][0].top === true && arr2[i][0].bottom === true && arr2[i][0].right === false && arr2[i][0].top === false && arr2[i][0].left === false && arr2[i-8][0].bottom === false) || (arr2[i-8][0].bottom === false && arr2[i+8][0].top === false && arr2[i-1][0].right === false && arr2[i][0].right === true)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i][0].bottom === true && arr2[i+8][0].top === true) || (arr2[i-8][0].bottom === true && arr2[i][0].top === true && arr2[i][0].right === true && arr2[i+1][0].left === true) || (arr2[i+8][0].top === true && arr2[i][0].bottom === true && arr2[i-8][0].bottom === true && arr2[i][0].top === true) || (arr2[i-8][0].bottom === true && arr2[i][0].top === true && arr2[i+1][0].left === arr2[i][0].right && arr2[i+8][0].top === false) || (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i+1][0].left === false && arr2[i+8][0].top === true && arr2[i][0].bottom === true && arr2[i][0].left === true) || (arr2[i+8][0].top === true && arr2[i][0].bottom === true && arr2[i][0].left === false && arr2[i][0].top === false && arr2[i][0].right === false) || (arr2[i-8][0].bottom === false && arr2[i+8][0].top === false && arr2[i+1][0].left === false && arr2[i][0].left === true) || (arr2[i-8][0].bottom === false && arr2[i+8][0].top === false && arr2[i+1][0].left === true && arr2[i][0].left === false && arr2[i][0].right === true) || (arr2[i-8][0].bottom === false && arr2[i+8][0].top === false && arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i][0].bottom === false)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].bottom === arr2[i+8][0].top) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i][0].bottom === arr2[i+8][0].top) || (arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].bottom === arr2[i+8][0].top)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i-8][0].bottom === true && arr2[i][0].top === true ) || (arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i][0].bottom === true && arr2[i-8][0].bottom === false) || (arr2[i-8][0].bottom === true && arr2[i][0].top === true && arr2[i][0].left === true && arr2[i+1][0].left === false) || (arr2[i+1][0].left === true && arr2[i][0].right === true && arr2[i-8][0].bottom === arr2[i][0].top) || (arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].top === true && arr2[i-8][0].bottom === true && arr2[i][0].bottom === false) || (arr2[i][0].right === arr2[i+1][0].left && arr2[i][0].top === true && arr2[i-8][0].bottom === true && arr2[i][0].bottom === true) || (arr2[i][0].right === arr2[i+1][0].left && arr2[i][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i+1][0].left === arr2[i][0].right)){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i+8][0].top === arr2[i][0].bottom){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === arr2[i][0].top) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if (arr2[i+8][0].top === arr2[i][0].bottom) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i+1][0].left === arr2[i][0].right) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr2[i][0].left) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i>56 && i<63) {
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].top === arr2[i-8][0].bottom) || (arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr2[i][0].left && arr2[i+1][0].left === arr2[i][0].right){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === arr2[i][0].top) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i+1][0].left === arr2[i][0].right) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr2[i][0].left) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else {
        if (arr2[i][0].bottom === true) {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      } else {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      }
    }
   } else if (i>0 && i<7) {
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].bottom === arr2[i+8][0].top) || (arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
        if (arr2[i-1][0].right === arr2[i][0].left && arr2[i+1][0].left === arr2[i][0].right){
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
        if (arr2[i+1][0].left === arr2[i][0].right) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if (arr2[i+8][0].top === arr2[i][0].bottom) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
        if (arr2[i-1][0].right === arr2[i][0].left) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else {
        if (arr2[i][0].top === true) {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        } else {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        }
      } 
    } else if (i>7 && i<56 && (i+1)%8===0){
        if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i][0].left === arr2[i-1][0].right)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        }else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].bottom === arr2[i+8][0].top)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].top === arr2[i-8][0].bottom)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
            if (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i+8][0].top === arr2[i][0].bottom){
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
            if (arr2[i-8][0].bottom === arr2[i][0].top) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
            if (arr2[i+8][0].top === arr2[i][0].bottom) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
            if (arr2[i-1][0].right === arr2[i][0].left) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else {
            if (arr2[i][0].right === false) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }  
          }
      } else if (i>7 && i<56 && i%8===0){
          if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i][0].right === arr2[i+1][0].left)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === arr2[i][0].left && arr2[i][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if (arr2[i-8][0].bottom === arr2[i][0].top && arr2[i+8][0].top === arr2[i][0].bottom){
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if ((arr2[i+1][0].left === arr2[i][0].right && arr2[i][0].top === arr2[i-8][0].bottom)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if (arr2[i-8][0].bottom === arr2[i][0].top) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if (arr2[i+8][0].top === arr2[i][0].bottom) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
          if (arr2[i+1][0].left === arr2[i][0].right) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else {
          if (arr2[i][0].left === false) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        }
  }
}

const checkForPlaceBefore = (arr, arr2, i) => {
if( i>7 && i<56 && i%8!==0 && (i+1)%8 !==0){
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].top === true && arr2[i-8][0].bottom === true) || (arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].bottom === true && arr2[i+8][0].top === true) || (arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].top === true && arr2[i-8][0].bottom === true) || (arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].bottom === true && arr2[i+8][0].top === true)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === true && arr[arr.length-1][0].left === true && arr[arr.length-1][0].top === true && arr2[i-8][0].bottom === true) || (arr2[i+1][0].left === true && arr[arr.length-1][0].right === true && arr[arr.length-1][0].top === true && arr2[i-8][0].bottom === true) || ((arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true && arr2[i+8][0].top === true && arr[arr.length-1][0].bottom === true)) || ((arr2[i-1][0].right === true && arr[arr.length-1][0].left === true && arr2[i+1][0].left === true && arr[arr.length-1][0].right === true)) || (arr2[i-1][0].right === true && arr[arr.length-1][0].left === true && arr[arr.length-1][0].bottom === true) || (arr2[i-1][0].right === true && arr[arr.length-1][0].left === true && arr[arr.length-1][0].top === true && arr2[i-8][0].bottom === true) || (arr[arr.length-1][0].right === true && arr2[i+1][0].left === true && arr[arr.length-1][0].left === arr2[i-1][0].right && arr[arr.length-1][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === true && arr[arr.length-1][0].left === true && arr[arr.length-1][0].bottom === true && arr2[i+8][0].top === true) || (arr2[i+1][0].left === true && arr[arr.length-1][0].right === true && arr[arr.length-1][0].bottom === true && arr2[i+8][0].top === true) || ((arr2[i+8][0].top === true && arr[arr.length-1][0].bottom === true && arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true)) || (arr2[i-1][0].right === true && arr[arr.length-1][0].left === true && arr2[i+1][0].left === true && arr[arr.length-1][0].right === true) || (arr[arr.length-1][0].right === true && arr2[i+1][0].left === true && arr[arr.length-1][0].left === arr2[i-1][0].right && arr[arr.length-1][0].bottom === arr2[i+8][0].top))  {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === true && arr[arr.length-1][0].left === true && arr[arr.length-1][0].bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr[arr.length-1][0].left === true && arr2[i-1][0].right === true) || (arr2[i+8][0].top === true && arr[arr.length-1][0].bottom === true && arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true) || (arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true && arr2[i-1][0].right === arr[arr.length-1][0].left) || (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr2[i-1][0].right === false && arr2[i+8][0].top === true && arr[arr.length-1][0].bottom === true) || (arr2[i-8][0].bottom === false && arr2[i+8][0].top === false && arr2[i-1][0].right === false && arr[arr.length-1][0].right === true)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === true && arr[arr.length-1][0].right === true && arr[arr.length-1][0].bottom === true && arr2[i+8][0].top === true) || (arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true && arr[arr.length-1][0].right === true && arr2[i+1][0].left === true) || (arr2[i+8][0].top === true && arr[arr.length-1][0].bottom === true && arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true) || (arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true && arr2[i+1][0].left === arr[arr.length-1][0].right) || (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr2[i+1][0].left === false && arr2[i+8][0].top === true && arr[arr.length-1][0].bottom === true && arr[arr.length-1][0].left === true) || (arr2[i+8][0].top === true && arr[arr.length-1][0].bottom === true && arr[arr.length-1][0].left === false && arr[arr.length-1][0].top === false && arr[arr.length-1][0].right === false)||(arr2[i-8][0].bottom === false && arr2[i+8][0].top === false && arr2[i+1][0].left === true && arr[arr.length-1][0].right === true && arr[arr.length-1][0].bottom === false)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === true && arr[arr.length-1][0].right === true && arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true ) || (arr2[i+1][0].left === true && arr[arr.length-1][0].right === true && arr[arr.length-1][0].bottom === true && arr2[i-8][0].bottom === false) || (arr2[i-8][0].bottom === true && arr[arr.length-1][0].top === true && arr[arr.length-1][0].left === true) || (arr2[i+1][0].left === true && arr[arr.length-1][0].right === true && arr2[i-8][0].bottom === arr[arr.length-1][0].top) || (arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].top === true && arr2[i-8][0].bottom === true && arr[arr.length-1][0].bottom === false) || (arr[arr.length-1][0].right === arr2[i+1][0].left && arr[arr.length-1][0].top === true && arr2[i-8][0].bottom === true && arr[arr.length-1][0].bottom === true)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr[arr.length-1][0].left && arr2[i+1][0].left === arr[arr.length-1][0].right){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr2[i+8][0].top === arr[arr.length-1][0].bottom){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === arr[arr.length-1][0].top) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if (arr2[i+8][0].top === arr[arr.length-1][0].bottom) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i+1][0].left === arr[arr.length-1][0].right) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr[arr.length-1][0].left) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i>56 && i<63) {
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].top === arr2[i-8][0].bottom) || (arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr[arr.length-1][0].left && arr2[i+1][0].left === arr[arr.length-1][0].right){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === arr[arr.length-1][0].top) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i+1][0].left === true && arr[arr.length-1][0].right === true) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === arr[arr.length-1][0].left) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else {
      if (arr[arr.length-1][0].bottom === true) {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      } else {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      }
    }
   } else if (i>0 && i<7) {
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].bottom === arr2[i+8][0].top) || (arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
        if (arr2[i-1][0].right === arr[arr.length-1][0].left && arr2[i+1][0].left === arr[arr.length-1][0].right){
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
        if (arr2[i+1][0].left === arr[arr.length-1][0].right) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if (arr2[i+8][0].top === arr[arr.length-1][0].bottom) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
        if (arr2[i-1][0].right === arr[arr.length-1][0].left) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else {
        if (arr[arr.length-1][0].top === true) {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        } else {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        }
      } 
    } else if (i>7 && i<56 && (i+1)%8===0){
        if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr[arr.length-1][0].left === arr2[i-1][0].right)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        }else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].top === arr2[i-8][0].bottom)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
            if (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr2[i+8][0].top === arr[arr.length-1][0].bottom){
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
            if (arr2[i-8][0].bottom === arr[arr.length-1][0].top) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
            if (arr2[i+8][0].top === arr[arr.length-1][0].bottom) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
            if (arr2[i-1][0].right === arr[arr.length-1][0].left) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else {
            if (arr[arr.length-1][0].right === false) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            } 
          }
      } else if (i>7 && i<56 && i%8===0){
          if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr[arr.length-1][0].right === arr2[i+1][0].left)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === arr[arr.length-1][0].left && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if (arr2[i-8][0].bottom === arr[arr.length-1][0].top && arr2[i+8][0].top === arr[arr.length-1][0].bottom){
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if ((arr2[i+1][0].left === arr[arr.length-1][0].right && arr[arr.length-1][0].top === arr2[i-8][0].bottom)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if (arr2[i-8][0].bottom === arr[arr.length-1][0].top) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if (arr2[i+8][0].top === arr[arr.length-1][0].bottom) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
          if (arr2[i+1][0].left === arr[arr.length-1][0].right) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else {
          if (arr[arr.length-1][0].left === false) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        }
  }
}

const checkForBordersBefore = (arr, i) => {
  if (i===7){
    if (arr[arr.length-1][0].right === true || arr[arr.length-1][0].top === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  }
  if (i===0){
    if (arr[arr.length-1][0].left === true || arr[arr.length-1][0].top === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  }
  if (i===63){
    if (arr[arr.length-1][0].right === true || arr[arr.length-1][0].bottom === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  }
  if (i===56){
    if (arr[arr.length-1][0].left === true || arr[arr.length-1][0].bottom === true ) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  }
  if (i>0 && i<7) {
    if (arr[arr.length-1][0].top === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  }
  if (i<63 && i>56){
      if (arr[arr.length-1][0].bottom === true) {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      } else {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      }
    }
  if (i>7 && i%8===0 && i<56){
      if (arr[arr.length-1][0].left === false) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    }
  if (i>7 && (i+1)%8===0 && i<56){
      if (arr[arr.length-1][0].right === false) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }      
    }  
}

let shuffledCardDeck = [];

const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const shuffleCardDeck = (arr) => {
  const arrTemp = [];
  let randomIndex = null;
  let randomElem = null;
  const count = arr.length;

  for (let i=0; i<count; i++){
    randomIndex = randomInt(0, arr.length-1);
    randomElem = arr.splice(randomIndex, 1);
    arrTemp.push(randomElem);
  }
  return arrTemp;
}

shuffledCardDeck = shuffleCardDeck(arrCardTypes);

const drawOfCardDeck = (arr) => {
  let str = '';
  for (let i=0; i<arr.length; i++){
    if (arr[i][0].name === 'a'){
      str = `${str}<div class='sub-elem' id='00${i}' style="background-image: url('/classwork/2021-01-11/images/corner.png')"></div>`;
    }
    if (arr[i][0].name === 'b'){
      str = `${str}<div class='sub-elem' id='00${i}' style="background-image: url('/classwork/2021-01-11/images/impasse.png')"></div>`;
    }
    if (arr[i][0].name === 'c'){
      str = `${str}<div class='sub-elem' id='00${i}' style="background-image: url('/classwork/2021-01-11/images/stick.png')"></div>`;
    }
  } 
  return str;
}
cardDeckEl.innerHTML = drawOfCardDeck(shuffledCardDeck);

const countOfCards = (arr) =>{
  return arr.length;
}
cardStatusEl.innerHTML = countOfCards(shuffledCardDeck);
let tempArrPos = [];
tempArrPos.length = 64;
const gridFill = (arr, i) => {
  if (arr[arr.length-1][0].name === 'a'){
/*     checkForPlace(shuffledCardDeck, i); */
    document.getElementById(`${i}`).classList.add('typea');
    tempArrPos[i] = arr.pop();
    console.log(tempArrPos);

    cardDeckEl.innerHTML = drawOfCardDeck(arr);
    cardStatusEl.innerHTML = countOfCards(arr);
    document.getElementById(`${i}`).removeEventListener('click', eventListForDiv);
    document.getElementById(`${i}`).addEventListener('click', rotateFunc);
  } else if (arr[arr.length-1][0].name === 'b'){
/*     checkForPlace(shuffledCardDeck, i); */
    document.getElementById(`${i}`).classList.add('typeb');
    tempArrPos[i] = arr.pop();
    console.log(tempArrPos);

    cardDeckEl.innerHTML = drawOfCardDeck(arr);
    cardStatusEl.innerHTML = countOfCards(arr);
    document.getElementById(`${i}`).removeEventListener('click', eventListForDiv);
    document.getElementById(`${i}`).addEventListener('click', rotateFunc);
  } else if (arr[arr.length-1][0].name === 'c'){
/*     checkForPlace(shuffledCardDeck, i); */
    document.getElementById(`${i}`).classList.add('typec');
    tempArrPos[i] = arr.pop();
    console.log(tempArrPos);
    cardDeckEl.innerHTML = drawOfCardDeck(arr);
    cardStatusEl.innerHTML = countOfCards(arr);
    document.getElementById(`${i}`).removeEventListener('click', eventListForDiv);
    document.getElementById(`${i}`).addEventListener('click', rotateFunc);
  }
}

const changePos = (arr, id, top, right, bottom, left) => {
  arr[id][0].top = top;
  arr[id][0].right = right;
  arr[id][0].bottom = bottom;
  arr[id][0].left = left;
}

const rotateFunc = (e) =>{
  if (document.getElementById(`${e.target.id}`).classList.contains('rotate90')){
    document.getElementById(`${e.target.id}`).classList.remove('rotate90');
    document.getElementById(`${e.target.id}`).classList.add('rotate180');
    
    if (document.getElementById(`${e.target.id}`).classList.contains('typea')){
      changePos(tempArrPos, Number(e.target.id), true, false, false, true);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typeb')){
      changePos(tempArrPos, Number(e.target.id), false, false, false, true);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typec')){
      changePos(tempArrPos, Number(e.target.id), false, true, false, true);
    }
  
    checkForPlace(tempArrPos, Number(e.target.id));

  } else if (document.getElementById(`${e.target.id}`).classList.contains('rotate180')){
    document.getElementById(`${e.target.id}`).classList.remove('rotate180');
    document.getElementById(`${e.target.id}`).classList.add('rotate270');
    
    if (document.getElementById(`${e.target.id}`).classList.contains('typea')){
      changePos(tempArrPos, Number(e.target.id), true, true, false, false);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typeb')){
      changePos(tempArrPos, Number(e.target.id), true, false, false, false);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typec')){
      changePos(tempArrPos, Number(e.target.id), true, false, true, false);
    }
    checkForPlace(tempArrPos, Number(e.target.id));

  } else if (document.getElementById(`${e.target.id}`).classList.contains('rotate270')){
    document.getElementById(`${e.target.id}`).classList.remove('rotate270');
    document.getElementById(`${e.target.id}`).classList.add('rotate360');

    if (document.getElementById(`${e.target.id}`).classList.contains('typea')){
      changePos(tempArrPos, Number(e.target.id), false, true, true, false);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typeb')){
      changePos(tempArrPos, Number(e.target.id), false, true, false, false);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typec')){
      changePos(tempArrPos, Number(e.target.id), false, true, false, true);
    }
    checkForPlace(tempArrPos, Number(e.target.id));

  } else if (document.getElementById(`${e.target.id}`).classList.contains('rotate360')) {
    document.getElementById(`${e.target.id}`).classList.remove('rotate360');
    document.getElementById(`${e.target.id}`).classList.add('rotate90');
    
    if (document.getElementById(`${e.target.id}`).classList.contains('typea')){
      changePos(tempArrPos, Number(e.target.id), false, false, true, true);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typeb')){
      changePos(tempArrPos, Number(e.target.id), false, false, true, false);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typec')){
      changePos(tempArrPos, Number(e.target.id), true, false, true, false);
    }
    checkForPlace(tempArrPos, Number(e.target.id));

  } else {
    document.getElementById(`${e.target.id}`).classList.add('rotate90');
    
    if (document.getElementById(`${e.target.id}`).classList.contains('typea')){
      changePos(tempArrPos, Number(e.target.id), false, false, true, true);
      console.log(tempArrPos);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typeb')){
      changePos(tempArrPos, Number(e.target.id), false, false, true, false);
      console.log(tempArrPos);
    }
    if (document.getElementById(`${e.target.id}`).classList.contains('typec')){
      changePos(tempArrPos, Number(e.target.id), true, false, true, false);
      console.log(tempArrPos);
    }
    checkForPlace(tempArrPos, Number(e.target.id));
  }
}

const eventListForDiv = (e) => {
  for (let i=0; i<gridHeight*gridLength; i++){
    if (e.target.id === `${i}`){
      let id = Number(e.target.id);
      checkForBordersBefore(shuffledCardDeck, id);
      checkForPlaceBefore(shuffledCardDeck, tempArrPos, id);
      gridFill(shuffledCardDeck, id);
    }
  }
}

for (let i=0; i<gridHeight*gridLength; i++){
  document.getElementById(`${i}`).addEventListener('click', eventListForDiv);
}

resetBtnEl.addEventListener('click', () => {
  fillCardArr(arrCardTypes, 'a', false, true, true, false);
  fillCardArr(arrCardTypes, 'b', false, true, false, false);
  fillCardArr(arrCardTypes, 'c', false, true, false, true);
  shuffledCardDeck = shuffleCardDeck(arrCardTypes);
  cardStatusEl.innerHTML = countOfCards(shuffledCardDeck);
  rightSideEl.innerHTML = drawOfGrid(gridHeight, gridLength);
  cardDeckEl.innerHTML = drawOfCardDeck(shuffledCardDeck);
  for (let i=0; i<gridHeight*gridLength; i++){
    document.getElementById(`${i}`).addEventListener('click', eventListForDiv);
/*     document.getElementById(`${i}`).addEventListener('mousedown', mouseFunc); */
  }
})
