const request = require('request');
const fs = require('fs');

request('https://dou.ua/', function(error, response, body) {
  if (error) {
      console.log('error:', error);
  } else {
    let str = body;
    let posEnd = 'announces';
    let txtContainer = [];

    const retrieveStr = (strForSearch) => {
      let position = 0;
      let indexStart = 0;
      let indexEnd = 0;
      for (let i = 0; i < 10; i += 1) {
        indexStart = str.indexOf(strForSearch, position);
        indexEnd = str.indexOf(posEnd, indexStart+70);
        txtContainer[i] = str.slice(indexStart+19, indexEnd);
        position = indexStart + 100;
      }
      return txtContainer;
    }
    retrieveStr('loading="lazy"');

    const parseArr = [];
    const parseArr2 = [];
    const parseArr3 = [];

    for (let i = 0; i < 10; i += 1) {
      parseArr.push(txtContainer[i].split(' '));
      parseArr2.push(parseArr[i][0].split('/'));
      parseArr3.push(parseArr[i][0].split('"'));
    }

    for (let i = 0; i < 10; i += 1) {
      let = parseArr2[i][parseArr2[i].length-1].slice(0, -1);
      request(parseArr3[i][1]).pipe(fs.createWriteStream(`./images/${let}`));
    }
  }
});