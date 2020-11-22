let a = -2;
let b = 100;
let c = -900;
let newVar= document.querySelector('.x');
if (a!=0){
    let d = b*b - 4*a*c;
    if (d>0) {
        let x1 = (-b + Math.sqrt(d)) / 2*a;
        let x2 = (-b - Math.sqrt(d)) / 2*a;
        newVar.innerHTML = 'a='+ a +'; '+'b='+b+'; '+'c='+c+'; '+ 'x1='+x1+'; '+'x2='+ x2;
    } else if (d==0) {
        let x = -b/(2*a);
        newVar.innerHTML= x;
    } else if (d<0) {
        newVar.innerHTML= 'Sorry, we cannot get x';
    }
} else {
    newVar.innerHTML= 'Sorry, we cannot get x';
}
