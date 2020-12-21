const leftBtn = document.querySelector('.btn-left');
const rightBtn = document.querySelector('.btn-right');
const trainEl = document.querySelector('.train');
const trainElLight = document.querySelector('.btn-light');
const trainLight = document.querySelector('.light');
const mainEl = document.querySelector('.main');

const checkAnimState = element => {
  return (element.style.animationPlayState ==='paused') ? element.style.animationPlayState = 'running' : element.style.animationPlayState = 'paused';
}

const moveLeft = () => {
  if (trainEl.classList.contains('right')){
    trainEl.classList.remove('right');
    trainEl.classList.add('left');
    trainEl.style.animationPlayState = 'running';
  } else if (trainEl.classList.contains('left')) {
    checkAnimState(trainEl);
  } else {
    trainEl.classList.add('left');
  }
}

const moveRight = () => {
  if (trainEl.classList.contains('left')){
    trainEl.classList.remove('left');
    trainEl.classList.add('right');
    trainEl.style.animationPlayState = 'running';
  } else if (trainEl.classList.contains('right')) {
    checkAnimState(trainEl);
  } else {
    trainEl.classList.add('right');
  }
}

mainEl.addEventListener('mousedown', (e) => {
  if (e.button === 0){
    moveLeft();
  }
  if (e.button === 2){
    moveRight();
  }
})

document.addEventListener('keydown', e => {
  if (e.code == 'ArrowLeft') {
    moveLeft();
  }
  if (e.key == 'ArrowRight'){
    moveRight();
  }
  if(e.code == 'KeyF'){
    trainLight.classList.toggle('light1');
    trainElLight.classList.toggle('btn-light1');
  }
})

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);

trainElLight.addEventListener('click', () => {
  trainLight.classList.toggle('light1');
  trainElLight.classList.toggle('btn-light1');
});