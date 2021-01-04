const btnRedEl = document.querySelector('.btn-1');
const btnYelEl = document.querySelector('.btn-2');
const btnGrnEl = document.querySelector('.btn-3');
const circle1El = document.querySelector('.circle1');
const circle2El = document.querySelector('.circle2');
const circle3El = document.querySelector('.circle3');

btnRedEl.addEventListener('click', () => {
  circle1El.classList.toggle('circle11');
  circle2El.classList.remove('circle21');
  circle3El.classList.remove('circle31');
});

btnYelEl.addEventListener('click', () => {
  circle2El.classList.toggle('circle21');
  circle1El.classList.remove('circle11');
  circle3El.classList.remove('circle31');
});

btnGrnEl.addEventListener('click', () => {
  circle3El.classList.toggle('circle31');
  circle1El.classList.remove('circle11');
  circle2El.classList.remove('circle21');
});