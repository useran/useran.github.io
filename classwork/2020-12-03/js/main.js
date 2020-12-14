let mainEl = document.querySelector('.main');
let secondEl = document.querySelector('.second');
let sum1 = 100;
let sum2 = 100;
let str ='';

const randomInt = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let count = 0;
while (sum1 >= 0 && sum2 >= 0){
  sum1 = sum1 - randomInt(1, 6);
  sum2 = sum2 - randomInt(1, 6);
  count += 1;
  str = `${str} Round ${count} <div> ${sum1} ${sum2} </div>`;
}
mainEl.innerHTML = str;

if (sum1 > sum2){
  secondEl.innerHTML = 'Winner is Player1';
} else secondEl.innerHTML = 'Winner is Player2';

