const inputEl = document.querySelector('#timeset');
const btnEl = document.querySelector('.btn');
const btnElStop = document.querySelector('.stop');
const timeOutPut = document.querySelector('.countdown');
const circleEl = document.querySelector('.circle-icon2');
btnEl.disabled = true;

let countDown = 0;
let timeVal;

const setCountDown = () => {

  btnEl.classList.toggle('play');
  btnEl.classList.toggle('stop');

  if (btnEl.classList.contains('play')){
    btnEl.value = 'Pause';
    circleEl.style.animationPlayState = 'running';
    
    countDown = setInterval(() => {
    
    let timeNow = moment();
    let destTime = moment(`${timeVal}`, 'HH:mm:ss');
    
    if (moment(destTime).isBefore(timeNow)){
      destTime.add(1, 'd');
    }
    
    let diffTime = moment(destTime.diff(timeNow)).utc();

    if (diffTime.isDST()){
      diffTime.subtract(1, 'h');
    }

    if (diffTime < 1000) {
      clearInterval(countDown);
      document.getElementById('countset').innerHTML = "Time is up!";
      circleEl.style.animationPlayState = 'paused';
      btnEl.value = 'Start';
      btnEl.classList.remove('play');
      btnEl.classList.add('stop');
    } else document.getElementById('countset').innerHTML = diffTime.format('HH:mm:ss');

    }, 1000);
  } else if (btnEl.classList.contains('stop')) {
    clearInterval(countDown);
    btnEl.value = 'Start';
    circleEl.style.animationPlayState = 'paused';
  }

}

inputEl.addEventListener('input', (e) => {
  timeVal = e.target.value;
  if (e.target.value !== ""){
    btnEl.disabled = false;
    btnEl.addEventListener('click', setCountDown);
  } else {
    btnEl.disabled = true;
    btnEl.removeEventListener('click', setCountDown);
  }
});