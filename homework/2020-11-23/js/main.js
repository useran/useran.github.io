let a = 1;
let b = 2;
let c = 1;
let newVar= document.querySelector('.x');
if (a!==0){
    let d = b*b - 4*a*c;
    if (d>0) {
        let x1 = (-b + Math.sqrt(d)) / 2*a;
        let x2 = (-b - Math.sqrt(d)) / 2*a;
        newVar.innerHTML = `a=${a}<br>b=${b}<br>c=${c}<br>x1=${x1}<br>x2=${x2}`;
    } else if (d===0) {
        let x = -b/(2*a);
        newVar.innerHTML= `a=${a}<br>b=${b}<br>c=${c}<br>x=${x}`;
    } else if (d<0) {
        newVar.innerHTML= `a=${a}<br>b=${b}<br>c=${c}<br>D<0 - Sorry, we cannot get x`;
    }
} else {
    newVar.innerHTML= 'Sorry, this is not a quadratic equation';
}
