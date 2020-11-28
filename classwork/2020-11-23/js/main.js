/* let a1 = 10;
let a = (a1>=-1) && (a1<34) ? console.log('true') : console.log('false'); */
let s1='';
let s2='';
for (let i=2; i<=14; i=i+2){
    s1=`${s1} ${i}`;
}
for (let j=33; j<=45; j=j+2){
    s2=`${s2} ${j}`;
}
console.log(`${s1}${s2}`);