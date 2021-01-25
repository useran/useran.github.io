const fs = require('fs');
const request = require('request');
const http = require('http');

function Car(brand, model, year, price) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.price = price;
}

let carArr = [];

request('https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50', function(error, response, body) {
  if (error) {
    console.log('error:', error);
  } else {
    let str = body;
    let tempArr = [];
    let tempArr2 = [];

    const retrieveStr = (strStartSearch, strEndSearch) => {
      let txtContainer = [];
      let qty = str.lastIndexOf(strEndSearch);
      let position = 0;
      let indexStart = 0;
      let indexEnd = 0;
      let i = 0;
      while (indexEnd < qty){
        indexStart = str.indexOf(strStartSearch, position);
        indexEnd = str.indexOf(strEndSearch, indexStart);
        txtContainer[i] = str.slice(indexStart, indexEnd);
        position = indexStart + 1;
        i += 1;
      }
      return txtContainer;
    }

    let brandArr = [];
    let modelArr = [];
    let yearArr = [];
    let priceArr = [];
    
    tempArr = retrieveStr('data-mark-name', 'data-level-expire-date');
    tempArr2 = retrieveStr('data-main-price', 'тыс. км');

    brandArr = tempArr.map(e => e.split('"')).map(e => e[1]);
    modelArr = tempArr.map(e => e.split('"')).map(e => e[3]);
    yearArr = tempArr.map(e => e.split('"')).map(e => e[5]);
    priceArr = tempArr2.map(e => e.slice(e.indexOf('"'), e.indexOf('">')).slice(1));

    for (let i = 0; i < brandArr.length; i++){
      carArr.push(new Car(brandArr[i], modelArr[i], yearArr[i], priceArr[i]));
    }

    carArr.forEach(e => {
      fs.appendFile('./table.html', `\n<tr><td>${e.brand}</td><td>${e.model}</td><td>${e.year}</td><td>${e.price}</td></tr>\n`, (err) => {
        if (err) {
          console.log('error:', err);
          return;
        }
      });
    });
  }
}); 

const server = http.createServer((req, res) => {
  fs.readFile('./table.html', function (err, data) {
    if (err) {
      console.log(err);
      return;
    } else {
      res.write(`${data}`);
      res.end();
    }
  });
});

server.on('error', (err) => {
  console.log(err);
});

server.listen(3000, () => {
  console.log('opened server on', server.address());
});