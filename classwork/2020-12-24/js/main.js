const inputEl = document.querySelector('#timeset');
const btnEl = document.querySelector('.btn');
const btnElStop = document.querySelector('.stop');
const timeOutPut = document.querySelector('.countdown');
const circleEl = document.querySelector('.circle-icon2');
btnEl.disabled = true;

let countDown = 0;

const setCountDown = () => {

  let currTime = moment();

  btnEl.classList.toggle('play');
  btnEl.classList.toggle('stop');


  if (btnEl.classList.contains('play')){
    btnEl.value = 'Pause';
    circleEl.style.animationPlayState = 'running';
    
    if ((countDown >= 1) && (document.getElementById('countset').innerHTML !== 'Time is up!')){
      currTime.add(document.getElementById('countset').innerHTML.split(':')[0], 'hours');
      currTime.add(document.getElementById('countset').innerHTML.split(':')[1], 'minutes');
      currTime.add(document.getElementById('countset').innerHTML.split(':')[2], 'seconds');
    
    } else {
      currTime.add(inputEl.value.split(':')[0], 'hours');
      currTime.add(inputEl.value.split(':')[1], 'minutes');
      currTime.add(inputEl.value.split(':')[2], 'seconds');
    }
  
    countDown = setInterval(() => {
    
    let timeNow = moment();
    
    let diff = currTime.diff(timeNow) - 7200000;
    let newDiff = moment(diff).format('HH:mm:ss');
    
    if ((newDiff === '00:00:00') && (diff <= 0)) {
      clearInterval(countDown);
      document.getElementById('countset').innerHTML = "Time is up!";
      circleEl.style.animationPlayState = 'paused';
      btnEl.value = 'Start';
      btnEl.classList.remove('play');
      btnEl.classList.add('stop');
    } else document.getElementById('countset').innerHTML = newDiff;

    }, 1000);
  } else if (btnEl.classList.contains('stop')) {
    clearInterval(countDown);
    btnEl.value = 'Start';
    circleEl.style.animationPlayState = 'paused';
  }

}

inputEl.addEventListener('input', (e) => {
  if (e.target.value !== ""){
    btnEl.disabled = false;
    btnEl.addEventListener('click', setCountDown);
  } else {
    btnEl.disabled = true;
    btnEl.removeEventListener('click', setCountDown);
  }
});
