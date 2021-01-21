const request = require('request');
const fs = require('fs');

request('https://dou.ua/', function(error, response, body){
    fs.writeFileSync('./buffer.html', body);
});

let str = fs.readFileSync('./buffer.html').toString();

let posEnd = 'announces';

let txtContainer = [];

const findLink = () => {
    let position = 0;
    let positionEnd = 70;
    let indexStart = 0;
    let indexEnd = 0;
    for (let i = 0; i < 10; i += 1) {
        indexStart = str.indexOf('loading="lazy"', position);
        indexEnd = str.indexOf(posEnd, indexStart+positionEnd);
        txtContainer[i] = str.slice(indexStart+19, indexEnd);
        position = indexStart + 100;
    }
    return txtContainer;
}

findLink();
const tempArr = [];
const tempArr2 = [];
const tempArr3 = [];

for (let i = 0; i < 10; i += 1) {
        tempArr.push(txtContainer[i].split(' '));
    }

for (let i = 0; i < 10; i += 1) {
    tempArr2.push(tempArr[i][0].split('/'));
}

for (let i = 0; i < 10; i += 1) {
    tempArr3.push(tempArr[i][0].split('"'));
}

for (let i = 0; i < 10; i += 1) {
    let = tempArr2[i][tempArr2[i].length-1].slice(0, -1);
    request(tempArr3[i][1]).pipe(fs.createWriteStream(`./images/${let}`));
}