const fs = require('fs');
const request = require('request');

function Car(model, year, price) {
    this.model = model;
    this.year = year;
    this.price = price;
}

request('https://auto.ria.com/uk/search/?indexName=auto,order_auto,newauto_search&body.id[4]=2&year[0].gte=2012&year[0].lte=2012&categories.main.id=1&brand.id[0]=6&price.currency=1&gearbox.id[1]=2&gearbox.id[2]=3&fuel.id[1]=2&drive.id[0]=1&abroad.not=0&custom.not=1&page=0&size=50/', function(error, response, body) {
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
        console.log(i);
      }
      return txtContainer;
    }
    
    

    let parseArr = [];
    let parseArr2 = [];
    let modelArr = [];
    let yearArr = [];
    let carArr = [];
    
    tempArr = retrieveStr('data-model-name', 'data-level-expire-date');
    /* tempArr2 = retrieveStr('data-main-price', 'тыс. км'); */

    parseArr2 = tempArr2.map(e => e.slice(e.indexOf('"'), e.indexOf('">')).slice(1));
  
    parseArr = tempArr.map(e => e.split('"'));
    modelArr = parseArr.map(e => e[1]);
    yearArr = parseArr.map(e => e[3]);

    for (let i = 0; i < modelArr.length; i++){
        carArr.push(new Car(modelArr[i], yearArr[i], parseArr2[i]));
    }
  }
}); 
