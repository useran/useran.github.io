const carColors = ['yellow', 'green', 'red', 'blue', 'orange'];
const typeGear = ['manual transmission', 'automatic transmission'];
const airCond = ['built-in', 'absent'];
const interior = ['leather', 'fabric', 'combined'];
const confg = []; //array for future car configurations
let count =0; //counter for code name of configuration

function Car(i,j,k,m,confgName) {
  this.name = confgName;
  this.color = carColors[i];
  this.gear = typeGear[j];
  this.airCond = airCond[k];
  this.interior = interior[m];
}

for (let i=0; i<carColors.length; i++){
  for (let j=0; j<typeGear.length; j++){
    for (let k=0; k<airCond.length; k++){
      for (let m=0; m<interior.length; m++){
        count += 1;
        let name = `${count}${carColors[i].charAt(0)}${typeGear[j].charAt(0)}${airCond[k].charAt(0)}${interior[m].charAt(0)}`;
        confg.push(new Car(i,j,k,m,name.toLocaleUpperCase()));
      }
    }
  }
}

const carConfig = {
  carTypes: confg,
}

console.log(carConfig);