const request = require('request');
const fs = require('fs');

request('https://dou.ua/', function(error, response, body) {
  if (error) {
      console.log('error:', error);
  } else {
    let str = body;
    let strEndSearch = 'ua/img/announces';
    let txtContainer = [];
    let qty = str.lastIndexOf(strEndSearch);

    const retrieveStr = (strStartSearch) => {
      let position = 0;
      let indexStart = 0;
      let indexEnd = 0;
      let i = 0;
      while (indexEnd < qty){
        indexStart = str.indexOf(strStartSearch, position);
        indexEnd = str.indexOf(strEndSearch, indexStart);
        txtContainer[i] = str.slice(indexStart, indexEnd);
        position = indexStart+1;
        i += 1;
      }
      return txtContainer;
    }
    retrieveStr('loading="lazy"');

    let parseArr = [];
    let parseArr2 = [];

    for (let i = 0; i < txtContainer.length; i += 1) {
      parseArr = txtContainer.map(e => e.slice(e.indexOf('https'), e.indexOf('"', e.indexOf('" srcset'))));
      parseArr2 = parseArr.map(e => e.split('/'));
    }
    for (let i = 0; i < txtContainer.length; i += 1) {
      let name = parseArr2[i][parseArr2[i].length-1];
      console.log(name);
      request(parseArr[i]).pipe(fs.createWriteStream(`./images/${name}`));
    }
  }
}); 