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

const checkForPlace = (arr2, xArr, i) => {
  if (i===7){
    if (xArr.right === true || xArr.top === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i===0){
    if (xArr.left === true || xArr.top === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i===63){
    if (xArr.right === true || xArr.bottom === true) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if (i===56){
    if (xArr.left === true || xArr.bottom === true ) {
      document.getElementById(`${i}`).classList.remove('color');
      document.getElementById(`${i}`).classList.add('color2');
    } else {
      document.getElementById(`${i}`).classList.remove('color2');
      document.getElementById(`${i}`).classList.add('color');
    }
  } else if( i>7 && i<56 && i%8!==0 && (i+1)%8 !==0){
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === xArr.left && xArr.top === arr2[i-8][0].bottom) || (arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top) || (arr2[i+1][0].left === xarr.right && xarr.top === arr2[i-8][0].bottom) || (arr2[i+1][0].left === xarr.right && xarr.bottom === arr2[i+8][0].top)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === xarr.left && xarr.top === arr2[i-8][0].bottom) || (arr2[i+1][0].left === xarr.right && xarr.top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top) || (arr2[i+1][0].left === xarr.right && xarr.bottom === arr2[i+8][0].top)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === xarr.top && xarr.left === arr2[i-1][0].right)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === true && xarr.right === true && xarr.bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === xarr.top && xarr.right === arr2[i+1][0].left)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === xarr.left && xarr.top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === xarr.right && xarr.bottom === arr2[i+8][0].top)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === xarr.right || xarr.top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === xarr.left && arr2[i+1][0].left === xarr.right){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === xarr.top && arr2[i+8][0].top === xarr.bottom){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === xarr.top) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
      if (arr2[i+8][0].top === xarr.bottom) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i+1][0].left === xarr.right) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === xarr.left) {
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
      if ((arr2[i-1][0].right === xarr.left && xarr.top === arr2[i-8][0].bottom) || (arr2[i+1][0].left === xarr.right && xarr.top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i-1][0].right === xarr.left && xarr.top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if ((arr2[i+1][0].left === xarr.right && xarr.top === arr2[i-8][0].bottom)) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === xarr.left && arr2[i+1][0].left === xarr.right){
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
      if (arr2[i-8][0].bottom === xarr.top) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
      if (arr2[i+1][0].left === xarr.right) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
      if (arr2[i-1][0].right === xarr.left) {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      } else {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      }
    } else {
        if (xarr.bottom === true) {
        document.getElementById(`${i}`).classList.remove('color');
        document.getElementById(`${i}`).classList.add('color2');
      } else {
        document.getElementById(`${i}`).classList.remove('color2');
        document.getElementById(`${i}`).classList.add('color');
      }
    }
   } else if (i>0 && i<7) {
    if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top) || (arr2[i+1][0].left === xarr.right && xarr.bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i+1][0].left === xarr.right && xarr.bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
        if (arr2[i-1][0].right === xarr.left && arr2[i+1][0].left === xarr.right){
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
        if (arr2[i+1][0].left === xarr.right) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if (arr2[i+8][0].top === xarr.bottom) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
        if (arr2[i-1][0].right === xarr.left) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else {
        if (xarr.top === true) {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        } else {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        }
      } 
    } else if (i>7 && i<56 && (i+1)%8===0){
        if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === xarr.top && xarr.left === arr2[i-1][0].right)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        }else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if ((arr2[i-1][0].right === xarr.left && xarr.top === arr2[i-8][0].bottom)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
            if (arr2[i-8][0].bottom === xarr.top && arr2[i+8][0].top === xarr.bottom){
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
            if (arr2[i-8][0].bottom === xarr.top) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
            if (arr2[i+8][0].top === xarr.bottom) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec'))){
            if (arr2[i-1][0].right === xarr.left) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }
          } else {
            if (xarr.right === false) {
              document.getElementById(`${i}`).classList.remove('color2');
              document.getElementById(`${i}`).classList.add('color');
            } else {
              document.getElementById(`${i}`).classList.remove('color');
              document.getElementById(`${i}`).classList.add('color2');
            }  
          }
      } else if (i>7 && i<56 && i%8===0){
          if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if ((arr2[i+1][0].left === xarr.right && xarr.bottom === arr2[i+8][0].top) || (arr2[i-8][0].bottom === xarr.top && xarr.right === arr2[i+1][0].left)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-1}`).classList.contains('typea') || document.getElementById(`${i-1}`).classList.contains('typeb') || document.getElementById(`${i-1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i-1][0].right === xarr.left && xarr.bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
        if ((arr2[i+1][0].left === xarr.right && xarr.bottom === arr2[i+8][0].top)) {
          document.getElementById(`${i}`).classList.remove('color2');
          document.getElementById(`${i}`).classList.add('color');
        } else {
          document.getElementById(`${i}`).classList.remove('color');
          document.getElementById(`${i}`).classList.add('color2');
        }
      } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec')) && (document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if (arr2[i-8][0].bottom === xarr.top && arr2[i+8][0].top === xarr.bottom){
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec')) && (document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if ((arr2[i+1][0].left === xarr.right && xarr.top === arr2[i-8][0].bottom)) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i-8}`).classList.contains('typea') || document.getElementById(`${i-8}`).classList.contains('typeb') || document.getElementById(`${i-8}`).classList.contains('typec'))){
          if (arr2[i-8][0].bottom === xarr.top) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+8}`).classList.contains('typea') || document.getElementById(`${i+8}`).classList.contains('typeb') || document.getElementById(`${i+8}`).classList.contains('typec'))){
          if (arr2[i+8][0].top === xarr.bottom) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else if ((document.getElementById(`${i+1}`).classList.contains('typea') || document.getElementById(`${i+1}`).classList.contains('typeb') || document.getElementById(`${i+1}`).classList.contains('typec'))){
          if (arr2[i+1][0].left === xarr.right) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
        } else {
          if (xarr.left === false) {
            document.getElementById(`${i}`).classList.remove('color2');
            document.getElementById(`${i}`).classList.add('color');
          } else {
            document.getElementById(`${i}`).classList.remove('color');
            document.getElementById(`${i}`).classList.add('color2');
          }
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
    document.getElementById(`${i}`).classList.add('typea');
    tempArrPos[i] = arr.pop();
    cardDeckEl.innerHTML = drawOfCardDeck(arr);
    cardStatusEl.innerHTML = countOfCards(arr);
    document.getElementById(`${i}`).removeEventListener('click', eventListForDiv);
    document.getElementById(`${i}`).addEventListener('click', rotateFunc);
  } else if (arr[arr.length-1][0].name === 'b'){
    document.getElementById(`${i}`).classList.add('typeb');
    tempArrPos[i] = arr.pop();
    cardDeckEl.innerHTML = drawOfCardDeck(arr);
    cardStatusEl.innerHTML = countOfCards(arr);
    document.getElementById(`${i}`).removeEventListener('click', eventListForDiv);
    document.getElementById(`${i}`).addEventListener('click', rotateFunc);
  } else if (arr[arr.length-1][0].name === 'c'){
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
    checkForPlace(tempArrPos, tempArrPos[Number(e.target.id)][0], id);
    
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
    checkForPlace(tempArrPos, tempArrPos[Number(e.target.id)][0], id);

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
    checkForPlace(tempArrPos, tempArrPos[Number(e.target.id)][0], id);

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
    checkForPlace(tempArrPos, tempArrPos[Number(e.target.id)][0], id);

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
    checkForPlace(tempArrPos, tempArrPos[Number(e.target.id)][0], id);
  }
}

const eventListForDiv = (e) => {
  for (let i=0; i<gridHeight*gridLength; i++){
    if (e.target.id === `${i}`){
      let id = Number(e.target.id);
      checkForPlace(shuffledCardDeck, shuffledCardDeck[shuffledCardDeck.length-1][0], id);
      gridFill(shuffledCardDeck, id);
    }
  }
}

/* const mouseFunc = (e) => {
  switch (e.button){
    case 2:
    rotateFunc(tempArrPos, e);
    break;
  }
} */
for (let i=0; i<gridHeight*gridLength; i++){
  document.getElementById(`${i}`).addEventListener('click', eventListForDiv);
  /* document.getElementById(`${i}`).addEventListener('mousedown', mouseFunc); */
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
