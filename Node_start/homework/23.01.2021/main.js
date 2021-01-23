const fs = require('fs');
const request = require('request');

/* request('https://upload.wikimedia.org/wikipedia/commons/b/b0/NewTux.svg').pipe(fs.createWriteStream('./folder1/pic.svg')); */

//1st task          
fs.readFile('./folder1/pic.svg', 'UTF-8', function (err, data) {
  if (err) {
    console.log(err);
    return;
  } else {
      fs.writeFile('./folder2/pic.svg', `${data}`, (err) => {
        if (err) {
          console.log('error:', err);
          return;
        } else {
            fs.unlink('./folder1/pic.svg', (err) => {
              if (err) {
                console.log('error:', err);
                return;
              }
            }); 
          }
        }); 
  }
});

//2nd task
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

    parseArr = txtContainer.map(e => e.slice(e.indexOf('https'), e.indexOf('"', e.indexOf('" srcset'))));
    
    parseArr.forEach(el => {
      fs.appendFile('./arr.txt', `${el}\n`, (err) => {
        if (err) {
          console.log('error:', err);
          return;
        }
      });
    })
  }
}); 