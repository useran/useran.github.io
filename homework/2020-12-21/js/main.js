const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const trainEl = document.querySelector('.train');
const trainElLight = document.querySelector('.btn-light');
const trainLight = document.querySelector('.light');
const mainEl = document.querySelector('.main');

//time calculation for movement to the right
const timeCalcRight = (left, duration) => {
  return (duration - (left-70) * duration / 1130);
} 

//time calculation for movement to the left
const timeCalcLeft = (left, duration) => {
  return ((left-70) * duration / 1130);
} 

//function to check if the animation is running
const checkAnimState = element => {
  return ((element.style.animationPlayState ==='paused') || (getComputedStyle(element).animationPlayState === 'paused')) ? element.style.animationPlayState = 'running' : element.style.animationPlayState = 'paused';
}

//function to move left
const moveLeft = () => {
  if (trainEl.classList.contains('right')){
    trainEl.style.left = getComputedStyle(trainEl).left;
    trainEl.classList.remove('right');
    trainEl.classList.add('left');
    trainEl.style.animationDuration = `${timeCalcLeft(trainEl.getBoundingClientRect().left, 10)}s`;
    trainEl.style.animationPlayState = 'running';
  } else if (trainEl.classList.contains('left')) {
    checkAnimState(trainEl);
  } else {
    trainEl.classList.add('left');
  }
}

//function to move right
const moveRight = () => {
  if (trainEl.classList.contains('left')){
    trainEl.style.left = getComputedStyle(trainEl).left;
    trainEl.classList.remove('left');
    trainEl.classList.add('right');
    trainEl.style.animationDuration = `${timeCalcRight(trainEl.getBoundingClientRect().left, 10)}s`;
    trainEl.style.animationPlayState = 'running';
  } else if (trainEl.classList.contains('right')) {
    checkAnimState(trainEl);
  } else {
    trainEl.classList.add('right');
  }
}

//mouse click listener
mainEl.addEventListener('mousedown', (e) => {
  switch (e.button){
    case 0:
      moveLeft();
      break;
    case 2:
      moveRight();
      break;
  }
})

//keyboard listener
document.addEventListener('keydown', e => {
  switch (e.code){
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    case 'KeyF':
      lightOnOff();
      break;
  }
})

//function for On/Off the light button
const lightOnOff = () => {
  trainLight.classList.toggle('light1');
  trainElLight.classList.toggle('btn-light1');
  if (trainElLight.classList.contains('btn-light1')){
    trainElLight.value = 'Light ON';
  } else trainElLight.value = 'Light Off';
}

//EventListeners for right/left and light buttons
leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);
trainElLight.addEventListener('click', lightOnOff);