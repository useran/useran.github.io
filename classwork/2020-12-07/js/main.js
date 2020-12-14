const arr = ["1", "2", "3", 
             "4", "5", "6", 
             "7", "8", "9"
            ];

const newArr1 = [];
const newArr2 = [];
const newArr3 = [];
const newArrGen = [];

for (let i=0; i<arr.length/3; i=i+1){
  newArr1.push([arr[i]]);
}
for (let i=3; i<6; i=i+1){
  newArr2.push([arr[i]]);
}
for (let i=6; i<9; i=i+1){
  newArr2.push([arr[i]]);
}

for (let i=0; i<3; i=i+1){
  newArrGen.push([arr[i]]);
}