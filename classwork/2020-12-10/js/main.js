//first level

let mainEl = document.querySelector('.main');
let secondEl = document.querySelector('.second');
let str = '';

//random function
const randomInt = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//function-constructor
function Ship(hp, dmg, name) {
  this.hp = hp;
  this.dmg = dmg;
  this.name = name;
}

const ship1 = new Ship(100, 4, 'ship1');
const ship2 = new Ship(40, 15, 'ship2');

let count = 0;
while (ship1.hp > 0 && ship2.hp > 0){
  ship1.hp = ship1.hp - ship2.dmg;
  ship2.hp = ship2.hp - ship1.dmg;
  count += 1;
  str = `${str} Round ${count} <div>ship1.hp=${ship1.hp}; ship2.hp=${ship2.hp}</div><br>`;
}

mainEl.innerHTML = str;

//finding a winner
if (ship1.hp > ship2.hp){
  secondEl.innerHTML = '<hr>The Winner is Ship1';
} else secondEl.innerHTML = 'The Winner is Ship2<br><hr>';



//2nd level

let thirdEl = document.querySelector('.third');
let forthEl = document.querySelector('.forth');
let fifthEl = document.querySelector('.fifth');
let sixEl = document.querySelector('.six');
let str2 = '';
let str3 = '';
let str4 = '';
let str5 = '';
let str6 = '';

//creating ship-objects
const destroyer = new Ship(45, 10, 'destroyer');
const battleship = new Ship(100, 4, 'battleship'); 
const carrier = new Ship(15, 40, 'carrier'); 
const cruiser = new Ship(60, 8, 'cruiser'); 

//creating an array fot random pick
const fleet = [destroyer, battleship, carrier, cruiser];

//creating a fleet
const newFleet = n => {
  let newArr = [];
  for (let i=0; i<n; i++){
    newArr.push(fleet[randomInt(0, fleet.length-1)]);
  }
  return newArr;
}

const fleet1 = newFleet(10);
const fleet2 = newFleet(10);

//output of ships to see the ships a fleet consists of 
let counter = 0;
for (i=0; i<fleet1.length; i++){
   str5= `${str5} ${fleet1[i].name}`;
   str6=`${str6} ${fleet2[i].name}`;
}
fifthEl.innerHTML = `Fleet1: ${str5}`;
sixEl.innerHTML = `Fleet2: ${str6}<hr>`;

let newCount = 0;

//running a battle until one of the fleets doesn't have a ship
while (fleet1.length > 0 && fleet2.length > 0){
  
  //initializing of random index of ships which fire and get damaged from both fleets
  let shipFireFleet2 = randomInt(0, fleet2.length-1);
  let shipDmgFleet1 = randomInt(0, fleet1.length-1);
  let shipFireFleet1 = randomInt(0, fleet1.length-1);
  let shipDmgFleet2 = randomInt(0, fleet2.length-1);
 
  //calculating of damage which ship from Fleet1 caused to a ship from Fleet2 
  fleet2[shipDmgFleet2].hp = fleet2[shipDmgFleet2].hp - fleet1[shipFireFleet1].dmg;

  //checking if hp is not equal 0 or less than 0 after round
  if (fleet2[shipDmgFleet2].hp <= 0){
    str4 = `${fleet2[shipDmgFleet2].name} (FLEET2) has been sinked by ${fleet1[shipFireFleet1].name}`;  
    fleet2.splice(shipDmgFleet2, 1); 
  } else {
    str4 = `${fleet1[shipFireFleet1].name} (FLEET1) damaged ${fleet2[shipDmgFleet2].name} -- No sinked ship at this round`;
    fleet1[shipDmgFleet1].hp = fleet1[shipDmgFleet1].hp - fleet2[shipFireFleet2].dmg;
    
  //checking if hp is not equal 0 or less than 0 after round  
    if (fleet1[shipDmgFleet1].hp <= 0){
      str3 = `<div>${fleet1[shipDmgFleet1].name} (FLEET1) has been sinked by ${fleet2[shipFireFleet2].name}</div>`;
      fleet1.splice(shipDmgFleet1, 1);  
    } else str3 = `<div>${fleet2[shipFireFleet2].name}(FLEET2) damaged ${fleet1[shipDmgFleet1].name} -- No sinked ship at this round</div>`;
  }

  newCount += 1;
  str2 = `${str2} Round ${newCount}<div>${str4}${str3}</div><br>`;
}

thirdEl.innerHTML = str2;

//finding a winner
if (fleet1.length > fleet2.length){
  forthEl.innerHTML = `<hr>The Winner is Fleet1 with ${fleet1.length} ship left`;
} else forthEl.innerHTML = `<hr>The Winner is Fleet2 with ${fleet2.length} ship left`;
