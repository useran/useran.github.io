const userNames = ['Peter', 'Victor', 'Alex', 'Maks', 'Andrii', 'Eugene'];

const newArray = [];

const randomInt = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

function User() {
  this.name = userNames[randomInt(0, userNames.length-1)];
  this.age = randomInt(20, 40);
}

for (i=0; i<10; i++){
  newArray.push(new User());
}

console.log(newArray);










/* let mainEl = document.querySelector('.main');
let number = 501;
let str ='';
let count = 0;
let probNum = null;
let min = -2147483647;
let max = 2147483647;

const randomInt = (min, max) => {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

do{
  count += 1;
  probNum = randomInt(min, max);

  if (probNum < number){
    str = `${str} Iteration ${count} <div> ${probNum} - We need a BIGGER number</div><br>`;
    min = probNum + 1;

  } else if (probNum > number){
    str = `${str} Iteration ${count} <div> ${probNum} - We need a SMALLER number</div><br>`;
    max = probNum - 1;

  } else str = `${str} Finally!We've got ${probNum}! Total number of iterations is ${count}`;

} while (probNum !== number);

mainEl.innerHTML = str;


let wordArray = 'abcdefghigklmnopqrstuvwxyz';

const wordGenerator = n => {
  let newWord = '';
  for (let i=0; i<n; i++){
    newWord = newWord + wordArray.charAt(Math.floor(Math.random()*wordArray.length));
  }
  return newWord;
}
document.querySelector('.main').innerHTML = wordGenerator(6); */