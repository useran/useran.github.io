const btn5El = document.querySelector('.btn5');

const btn1El = document.querySelector('.btn1');
  const btn2El = document.querySelector('.btn2');
  const btn3El = document.querySelector('.btn3');
  const btn4El = document.querySelector('.btn4');

  btn1El.addEventListener('click', (e) => { 
    btn2El.style.backgroundColor = 'yellow';
    btn3El.style.backgroundColor = 'yellow';
    btn4El.style.backgroundColor = 'yellow';
    e.target.style.backgroundColor = 'blue';
  });

  btn2El.addEventListener('click', (e) => { 
    btn1El.style.backgroundColor = 'yellow';
    btn3El.style.backgroundColor = 'yellow';
    btn4El.style.backgroundColor = 'yellow';
    e.target.style.backgroundColor = 'blue';
  });

  btn3El.addEventListener('click', (e) => { 
    btn2El.style.backgroundColor = 'yellow';
    btn1El.style.backgroundColor = 'yellow';
    btn4El.style.backgroundColor = 'yellow';
    e.target.style.backgroundColor = 'blue';
  });

  btn4El.addEventListener('click', (e) => { 
    btn1El.style.backgroundColor = 'yellow';
    btn2El.style.backgroundColor = 'yellow';
    btn3El.style.backgroundColor = 'yellow';
    e.target.style.backgroundColor = 'blue';
  });

const chooseOper = () =>{
  let outcome = null;
    
  const int1El = document.querySelector('.input1');
  const int2El = document.querySelector('.input2');
  const outEl = document.querySelector('.forth');

  if (btn1El.style.backgroundColor === 'blue'){
    outcome = Number(int1El.value) + Number(int2El.value);
    outEl.innerHTML = outcome;

  } else if (btn2El.style.backgroundColor === 'blue'){
    outcome = Number(int1El.value) - Number(int2El.value);
    outEl.innerHTML = outcome;

  } else if (btn3El.style.backgroundColor === 'blue'){
    outcome = Number(int1El.value) * Number(int2El.value);
    outEl.innerHTML = outcome;

  } else if (btn4El.style.backgroundColor === 'blue'){
    outcome = Number(int1El.value) / Number(int2El.value);
    outEl.innerHTML = outcome;
    
  } else alert('Please make your choice!')
}

btn5El.addEventListener('click', chooseOper);
















/* const textEl = document.querySelector('.txtar');
const btnEl = document.querySelector('.btn');
const outEl = document.querySelector('.output');
const outEl2 = document.querySelector('.output2');

const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//function to split text by symbol 
const splitText = (textInput, symbol) => {
  return textInput.split(symbol);
}

//function to clear text from symbols
const clearText = (textInput, symbols) => {
  let newArr = [];
  let str = '';

  for(i=0; i<textInput.length; i++){
    for(j=0; j<symbols.length; j++){
      if (textInput[i].includes(symbols[j])){
        str = textInput[i].split(symbols[j]).join('');
        textInput[i] = str;
      } 
    } newArr.push(textInput[i]);
  }
  return newArr;
}

const symbols = ['!', ',', '.', '?'];

//function for event listener 
const outPutInput = () =>{
  //getting text from input value and clearing it
  const textInput = splitText(textEl.value, ' ');
  const clearedText = clearText(textInput, symbols);
  let str ='';

  //creating input forms and filling it out with words from text
  for(i=0; i<clearedText.length; i++){
    value = clearedText[i];
    str = `${str}<input type="text" id="${i}" value="${value}">`;
  }
  outEl.innerHTML = str;

  //finding the longest word
  let maxWord = clearedText[0];
  for(i=1; i<clearedText.length; i++){
    if (maxWord.length < clearedText[i].length){
      maxWord = clearedText[i];
    }
  }
  console.log(maxWord);

  //creating a random string of 30 symbols length from text words 
  let str2 ='';
  while (str2.length <= 30){
    str2 = `${str2} ${clearedText[randomInt(0, clearedText.length)]}`;
  } 
  str2 = str2.substring(0, 31);
  outEl2.innerHTML = str2;
}

//adding an EventListener to the button
btnEl.addEventListener('click', outPutInput);

 */