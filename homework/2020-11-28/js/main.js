const checkForSimple = myNumber =>{
  for (let j = 2; j < myNumber; j++) {
    if (myNumber % j === 0){
        return false;
    }
  } return true;
}

const searchForNum = (myNumber) => {
  let count = 0;
  let num = '';
  let radius = 1;
  while (count<2){
    if (checkForSimple(myNumber + radius)){
      num = `${num} ${myNumber + radius}`; 
      count += 1; 
    }
    if (checkForSimple(myNumber - radius)){
      num = `${num} ${myNumber - radius}`; 
      count += 1; 
    } 
    radius = radius + 1;
  }
  return num;
}

console.log(searchForNum(9991999));