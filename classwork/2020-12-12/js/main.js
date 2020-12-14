const colors = ['green', 'yellow', 'blue', 'orange'];

const mainEl = document.querySelector('.main');

const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
let str ='';
for(i=0; i<12; i++){
  str = `${str}<div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
}

mainEl.innerHTML = str;

mainEl.addEventListener('click', (e) => {
  e.target.style.backgroundColor = colors[randomInt(0, colors.length)];
});