let a = 9991999;
let arr = [];
let str = a.toString();
for (let i = 1; i<str.length; i += 1){
  let x = a % 10**i;
  arr.push(Math.floor(x));
}
console.log(arr);


