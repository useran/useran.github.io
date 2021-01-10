const wrapEl = document.querySelector('.wrapper');
const headEl = document.querySelector('.header');
const btnModEl = document.querySelector('.btn');
const inputEl = document.querySelector('#timeset');
const modEl = document.querySelector('.modal');
const modEl2 = document.querySelector('.modal2');
const modCloseEl = document.querySelector('.close');
const modCloseEl2 = document.querySelector('.close2');
const btnMod2El = document.querySelector('.btn-1');
const btnMod3El = document.querySelector('.btn-2');
const timeOutEl = document.querySelector('.timeOutPut');
const checkEl = document.querySelector('.checkValid');

btnModEl.disabled = true;

const parkingLots = 64;

let timeNow = moment();

function Lot(id, occp, setTime, leftTime, useTime){
  this.id = id;
  this.occupied = occp;
  this.setTime = setTime;
  this.leftTime = leftTime;
  this.usedTime = useTime;
}

const arrOfLots = [];
for (let i=0; i<parkingLots; i++){
  arrOfLots.push(new Lot(i, false, '', ''));
}

const drawOfLots = parkingLots => {
  let str = '';
  for (let i=0; i<parkingLots; i++){
    if (i<16){
      if (arrOfLots[i].occupied){
        str = `${str}<div class='elem' style='background-color: gray; color: white;' id='${i}'><span class="elem1">${arrOfLots[i].id+1}</span><br> <span class="elem2">Occupied until: ${arrOfLots[i].setTime}</span></div>`;
      } else {
        str = `${str}<div class='elem' style='background-color: transparent' id='${i}'><span class="elem1">${arrOfLots[i].id+1}</span><br><span class="elem2">Available</span></div>`;
      }
    } else if (i>15 && i<32){
        if (arrOfLots[i].occupied){
          str = `${str}<div class='elem rotate' style='background-color: gray; color: white;' id='${i}'><span class="elem1 rotate">${arrOfLots[i].id+1}</span><br> <span class="elem2 rotate">Occupied until: ${arrOfLots[i].setTime}</span></div>`;
        } else {
          str = `${str}<div class='elem rotate' style='background-color: transparent;' id='${i}'><span class="elem1 rotate">${arrOfLots[i].id+1}</span><br><span class="elem2 rotate">Available</span></div>`;
        }
      } else if (i>31 && i<48){
        if (arrOfLots[i].occupied){
          str = `${str}<div class='elem' style='background-color: gray; color: white;' id='${i}'><span class="elem1">${arrOfLots[i].id+1}</span><br> <span class="elem2">Occupied until: ${arrOfLots[i].setTime}</span></div>`;
        } else {
          str = `${str}<div class='elem' style='background-color: transparent' id='${i}'><span class="elem1">${arrOfLots[i].id+1}</span><br><span class="elem2">Available</span></div>`;
        }
      } else {
        if (arrOfLots[i].occupied){
          str = `${str}<div class='elem rotate' style='background-color: gray; color: white;' id='${i}'><span class="elem1 rotate">${arrOfLots[i].id+1}</span><br> <span class="elem2 rotate">Occupied until: ${arrOfLots[i].setTime}</span></div>`;
        } else {
          str = `${str}<div class='elem rotate' style='background-color: transparent;' id='${i}'><span class="elem1 rotate">${arrOfLots[i].id+1}</span><br><span class="elem2 rotate">Available</span></div>`;
        }
      }
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

let id;
let timeVal;
let expr = [];

const clearLot = () => {
  arrOfLots[id].occupied = false;
  modEl2.style.display = 'none';
  arrOfLots[id].leftTime = '';
  arrOfLots[id].setTime = '';
  drawOfLots(parkingLots);
  clearInterval(expr[id]);
  btnModEl.removeEventListener('click', ocpLot);
}

const ocpLot = () => {
  arrOfLots[id].occupied = true;
  let destTime = moment(`${timeVal}`, 'HH:mm');
  arrOfLots[id].setTime = destTime.format('HH:mm');
  let timeSet = moment('00:00:00', 'HH:mm:ss');
  expr[id] = setInterval(() => {
    arrOfLots[id].usedTime = timeSet.add(1000, 'ms').format('HH:mm:ss');
    if (moment().format('HH:mm') === arrOfLots[id].setTime){
      arrOfLots[id].occupied = false;
      modEl2.style.display = 'none';
      arrOfLots[id].leftTime = '';
      arrOfLots[id].setTime = '';
      drawOfLots(parkingLots);
      clearInterval(expr[id]);
    }
  }, 1000);
  
  drawOfLots(parkingLots);
  countOfOccp(arrOfLots);
  countOfAvb();
  modEl.style.display = 'none';
  btnModEl.disabled = true;
  btnModEl.removeEventListener('click', ocpLot);
  inputEl.value = '';
}

document.addEventListener('click', (e) => {
  for (i=0; i<parkingLots-1; i++){
    if (e.target.id === `${i}`){
      id = i;
      if (arrOfLots[id].occupied){
        modEl2.style.display = 'block';
        timeOutEl.innerHTML = `Time Used: ${arrOfLots[id].usedTime}`;
        btnMod2El.addEventListener('click', clearLot);
        btnMod3El.addEventListener('click', () => {
          modEl2.style.display = 'none';
        });
      } else {
        modEl.style.display = 'block';
        btnModEl.addEventListener('click', ocpLot);
      }
    }
  }
  if ((e.target == modEl) || (e.target == modEl2)){
    modEl.style.display = 'none';
    modEl2.style.display = 'none';
    inputEl.value = '';
  }
});

inputEl.addEventListener('input', (e) => {
  if (e.target.value !== ""){
    timeVal = e.target.value;
    if ((e.target.value >= e.target.min) && (e.target.value <= e.target.max) && (countOfAvb() < 0.2*parkingLots)){
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

let realTime = setInterval(() => {
  headEl.innerHTML = `Current time:${moment().format('HH:mm:ss')} Available places:${countOfAvb()}`;
}, 1000);

modCloseEl.addEventListener('click', () => {
  modEl.style.display = 'none';
  inputEl.value = '';
});
modCloseEl2.addEventListener('click', () => {
  modEl2.style.display = 'none';
  inputEl.value = '';
});









































/* const infoRender = (parkingLots) => {
  for (let i=0; i<parkingLots; i++){
    if (arrOfLots[i].occupied){
    document.getElementById(`${i}`).innerHTML = `${arrOfLots[i].id}<br> Occupied: ${arrOfLots[i].occupied}<br>Time:${arrOfLots[i].time}`;
    } else document.getElementById(`${i}`).innerHTML = `${arrOfLots[i].id}<br> Occupied: ${arrOfLots[i].occupied}`;
  }
} */

/* infoRender(parkingLots); */

/* let idNum;

const timer = () => {
  let destTime = moment(`${inputEl.value}`, 'HH:mm:ss');
  let timeNow2 = moment();
  if (moment(destTime).isBefore(timeNow2)){
    destTime.add(1, 'd');
  }
  let diffTime = moment(destTime.diff(timeNow2)).utc();
  
  const timerID = setInterval(() => {
    diffTime.subtract(1000, 'ms');
    arrOfLots[Number(idNum)].time = diffTime.format('HH:mm:ss');
    document.getElementById(`${Number(idNum)}`).innerHTML = `${arrOfLots[Number(idNum)].id}<br> Occupied!<br>Set: ${inputEl.value}<br>Left:${arrOfLots[Number(idNum)].time}`;
    if (diffTime.format('HH:mm:ss') === '00:00:00'){
      clearInterval(timerID);
    }
  }, 1000);
  countOfOccp(arrOfLots);
  
  countOfAvb();
  modEl.style.display = 'none';
} */

/* btnModEl.addEventListener('click', timer); */

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


let e.target.id;
let timeVal;

document.addEventListener('click', (e) => {
  let idEl = e.target.id; 
  for (let i=0; i<parkingLots; i++){
    if (idEl === `${i}`){
      modEl.style.display = 'block';
      e.target.id = Number(idEl);
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
      arrOfLots[e.target.id].occupied = false;
      document.getElementById(`${e.target.id}`).innerHTML = `${e.target.id}<br>Available`;
    } else{
      arrOfLots[e.target.id].occupied = true;
      arrOfLots[e.target.id].time = diffTime.format('HH:mm:ss');
      document.getElementById(`${e.target.id}`).innerHTML = `${e.target.id}<br>Occupied<br>Set: ${timeVal}<br>Left: ${diffTime.format('HH:mm:ss')}`;
    }       
  }, 1000);
  modEl.style.display = 'none';
  countOfOccp(arrOfLots);
  countOfAvb();
}
btnModEl.addEventListener('click', setCountDown); */

/* const countTime = () => {
  let timeNow3 = moment();
  let destTime = moment(`${timeVal}`, 'HH:mm');
  
  arrOfLots[idNum].setTime = destTime.format('HH:mm');
  arrOfLots[idNum].occupied = true;

  timerArr[idNum] = setInterval(() => {
    let timeNow2 = moment();
    if (moment(destTime).isBefore(timeNow2)){
      destTime.add(1, 'd');
    }
    let diffTime = moment(destTime.diff(timeNow2)).utc();

    let plusDiff = moment(timeNow2.diff(timeNow3)).utc();
    

    if (diffTime < 1000) {
      clearInterval(timerArr[idNum]);
      arrOfLots[idNum].occupied = false;
      arrOfLots[idNum].leftTime = '';
      arrOfLots[idNum].setTime = '';
    } else{
      arrOfLots[idNum].leftTime = diffTime.format('HH:mm:ss');
      arrOfLots[idNum].usedTime = plusDiff.format('HH:mm:ss');
    }     
    drawOfLots(parkingLots); 
  }, 1000);
  countOfOccp(arrOfLots);
  countOfAvb();
  modEl.style.display = 'none';
  btnModEl.disabled = true;
  inputEl.value = '';
  btnModEl.removeEventListener('click', countTime);
} */