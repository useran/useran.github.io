const wrapEl = document.querySelector('.main');
const headEl = document.querySelector('.current-time');
const btnModEl = document.querySelector('.btn');
const inputEl = document.querySelector('#timeset');
const modEl = document.querySelector('.modal');
const modEl2 = document.querySelector('.modal2');
const modCloseEl = document.querySelector('.close');
const modCloseEl2 = document.querySelector('.close2');
const btnMod2El = document.querySelector('.btn-1');
const btnMod3El = document.querySelector('.btn-2');
const btnMod21El = document.querySelector('.btn-21');
const timeOutEl = document.querySelector('.timeOutPut');
const checkEl = document.querySelector('.checkValid');

btnModEl.disabled = true;
//number of places available in parkinglot
const parkingLots = 19;

let timeNow = moment();
let timeCount = [];
let timersCount = [];
//function-constructor of place-object
function Lot(id, occp, setTime, leftTime, useTime){
  this.id = id;
  this.occupied = occp;
  this.setTime = setTime;
  this.leftTime = leftTime;
  this.usedTime = useTime;
}
//filling an array with objects
const arrOfLots = [];
for (let i=0; i<parkingLots; i++){
  arrOfLots.push(new Lot(i, false, '', '', ''));
}
//function to find max element in an array - used for divs' rendering
const findMax = arr => {
  let max = arr[0];
  for (let i=0; i<arr.length; i++){
    if (arr[i] > max || arr[i] === max) {
      max = arr[i];
    }
  }
  return max;
}
//function to calculate columns' amount for rendering
const cols = qty => {
  let str = '';
  const arrOfNum = [2, 3, 4, 5, 6, 7];
  if (qty>0 && qty<8){
    str = `repeat(${qty}, 1fr)`;
  } else if (qty === 19){
    str = `repeat(5, 1fr)`;
  } else { 
    const arrOfCols = arrOfNum.map(e => {
      if (qty % e === 0){
        return qty/e;
      } else return false;
    });
      if (arrOfCols.some(e => e!==false)){
        const tempArr = arrOfCols.map(e => (e !== false && e<8) ? e : false);
        if (tempArr.some(e => e!==false)){
          str = `repeat(${findMax(tempArr)}, 1fr)`;
        } else {
          const tempArr2 = arrOfCols.map(e => (e !== false && e>7) ? e : false);
          const tempArr3 = tempArr2.filter(e => e !== false);
          if (tempArr2.length !== 0){
            const tempArr4 = tempArr3.map(e => qty/e);
            str = `repeat(${findMax(tempArr4)}, 1fr)`;
          } 
        }
      } else {
        const arrOfRows = arrOfNum.map(e => qty % e ? qty % e : 0);
        console.log(arrOfRows);
        str = `repeat(${arrOfNum[arrOfRows.indexOf(findMax(arrOfRows))]}, 1fr)`;
      }
    }
  return str;
}
//render function
const drawOfLots = parkingLots => {
  let str = '';
  for (let i=0; i<parkingLots; i++){
    if (arrOfLots[i].occupied){
      str = `${str}<div class='elem' style='background-color: gray; color: white;' id='${i}'><span class="elem1">${arrOfLots[i].id+1}</span>Occupied until: ${arrOfLots[i].setTime}</div>`;
    } else {
      str = `${str}<div class='elem' style='background-color: transparent' id='${i}'><span class="elem1">${arrOfLots[i].id+1}</span>Available</div>`;
    }
  } 
  wrapEl.innerHTML = str;
}
drawOfLots(parkingLots);
wrapEl.style.gridTemplateColumns = cols(parkingLots);
//counting of occupied places
const countOfOccp = (arr) =>{
  let total = 0;
  arr.forEach(item => {
    if (item.occupied){
      total += 1;
    }
  });
  return total;
}
//calculating of available places
const countOfAvb = () => parkingLots - countOfOccp(arrOfLots);
let id;
let timeVal;
let destTime = [];
let timer;
//function to release a place
const clearLot = () => {
  arrOfLots[id].occupied = false;
  modEl2.style.display = 'none';
  clearInterval(timeCount[id]);
  timersCount.splice(id, 1);
  drawOfLots(parkingLots);
}
//eventlistener for divs
document.addEventListener('click', (e) => {
  for (i=0; i<parkingLots; i++){
    if (e.target.id === `${i}`){
      id = i;
      if (arrOfLots[id].occupied){
        modEl2.style.display = 'block';
        let currTime = moment();
        arrOfLots[id].leftTime = moment(destTime[id] - currTime).utc().format('HH:mm:ss');
        arrOfLots[id].usedTime = moment(currTime - arrOfLots[id].fixedTime).utc().format('HH:mm:ss');
        timeOutEl.innerHTML = `Time Used: ${arrOfLots[id].usedTime} | Time Left: ${arrOfLots[id].leftTime}`;
        btnMod2El.addEventListener('click', clearLot);
        btnMod3El.addEventListener('click', () => {
        modEl2.style.display = 'none';
        });
      } else {
        modEl.style.display = 'block';
        btnModEl.addEventListener('click', () => {
          arrOfLots[id].occupied = true;
          destTime[id] = moment(`${timeVal}`, 'HH:mm');
          arrOfLots[id].setTime = destTime[id].format('HH:mm');
          arrOfLots[id].fixedTime = moment();
          drawOfLots(parkingLots);
          countOfOccp(arrOfLots);
          countOfAvb();
          modEl.style.display = 'none';
          btnModEl.disabled = true;
          inputEl.value = '';
        });
      }
    }
  }
  if ((e.target == modEl) || (e.target == modEl2)){
    modEl.style.display = 'none';
    modEl2.style.display = 'none';
    inputEl.value = '';
  }
});
//eventlistener for time input element
inputEl.addEventListener('input', (e) => {
  if (e.target.value !== ""){
    timeVal = e.target.value;
    if ((e.target.value >= e.target.min) && (e.target.value <= e.target.max) && (countOfAvb() <= 0.2*parkingLots)){
      btnModEl.disabled = false;
      checkEl.style.display = 'block';
    } else {
      btnModEl.disabled = false;
      checkEl.style.display = 'none';
    }
  } else {
    btnModEl.disabled = true;
  }
});
//setinterval for current time
let realTime = setInterval(() => {
  headEl.innerHTML = `Current time:${moment().format('HH:mm:ss')} | Available places:${countOfAvb()} | Occupied places:${countOfOccp(arrOfLots)}`;
}, 1000);
//eventlistener for close elements
modCloseEl.addEventListener('click', () => {
  modEl.style.display = 'none';
  inputEl.value = '';
});
modCloseEl2.addEventListener('click', () => {
  modEl2.style.display = 'none';
  inputEl.value = '';
});