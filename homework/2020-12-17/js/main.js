const mainEl = document.querySelector('.main');

//function for creating a new div in certain div
const addDiv = (idElem, str) => {
  let newDiv = document.createElement('div');
  newDiv.innerHTML = str;
  document.getElementById(idElem).appendChild(newDiv);
}

//function for creating a board - drawing a grid
const chessDesk = () =>{
  const arr = [];
  let str = '';
  for (let i=0; i<9; i++){
    for (let j=0; j<9; j++){
      str = `${str}<div class='elem' id='${i}${j}'></div>`;
    }
    addDiv('mainer', `${str}`);
    str = '';    
  }
}
chessDesk();

//function for filling out cells with color
const fillDesk = (color) =>{
  for (let i=0; i<8; i++){
    for (let j=1; j<9; j++){
      if ((j % 2 == 0) && (i % 2 == 0)){
        document.getElementById(`${i}${j}`).style.backgroundColor = color;
      } 
      if ((j % 2 !== 0) && (i % 2 !== 0)){
        document.getElementById(`${i}${j}`).style.backgroundColor = color;
      }
    }
  }
}
fillDesk('lightgrey');

//function for filling out the board with figures
const fillFigDesk = () =>{
  const figBlack = ['&#x265C;','&#x265E;','&#x265D;','&#x265B;', '&#x265A;','&#x265D;','&#x265E;','&#x265C;','&#x265F;'];
  const figWhite = ['&#x2656;','&#x2658;','&#x2657;','&#x2655;','&#x2654;','&#x2657;','&#x2658;','&#x2656;', '&#x2659;'];
  for (let i=0; i<9; i++){
    for (let j=1; j<9; j++){
      if (i === 0){
        document.getElementById(`${i}${j}`).innerHTML = figBlack[j-1];
      } else if (i === 7){
        document.getElementById(`${i}${j}`).innerHTML = figWhite[j-1];
      } else if (i === 1){
        document.getElementById(`${i}${j}`).innerHTML = figBlack[figBlack.length-1];
      } else if (i === 6){
        document.getElementById(`${i}${j}`).innerHTML = figWhite[figWhite.length-1];
      } else document.getElementById(`${i}${j}`).innerHTML = '';
    } 
  }
}
fillFigDesk();

//creating numbers & letters aside the board
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let i=0; i<8; i++){
  let j = 0;
  document.getElementById(`${i}${j}`).innerHTML = 8-i;
}
for (let j=1; j<9; j++){
  let i = 8;
  document.getElementById(`${i}${j}`).innerHTML = letters[j-1];
}

//drawing borders for the board
for (let i=0; i<8; i++){
  document.getElementById(`${i}1`).style.borderLeftColor = 'black';
  document.getElementById(`${i}8`).style.borderRightColor = 'black';
}

for (let j=1; j<9; j++){
  document.getElementById(`0${j}`).style.borderTopColor = 'black';
  document.getElementById(`8${j}`).style.borderTopColor = 'black';
}

//creating EventListener to calculate address of the cells
mainEl.addEventListener('click', (e) => {
  let ourChoice = e.target.id;
  
  //calculating current time
  let timeClick = new Date();
  let hours = timeClick.getHours();
  let min = timeClick.getMinutes();
  let sec = timeClick.getSeconds();
  if (hours<10) {
    timeClick = `0${hours}:${min}:${sec}`;    
  } else if (min<10){
    timeClick = `${hours}:0${min}:${sec}`;
  } else if (sec<10){
    timeClick = `${hours}:${min}:0${sec}`;
  } else timeClick = `${hours}:${min}:${sec}`;

  //calculating address of the cell
  let row = null;
  let col = null;
  for (let i=0; i<8; i++){
    for (let j=1; j<9; j++){
      if (`${i}${j}` === ourChoice){
        row = 8 - i;
        col = letters[j-1]; 
      }
    }
  }
  console.log(row, col, timeClick);
});