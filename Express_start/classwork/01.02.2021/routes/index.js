const express = require('express');
const router = express.Router();
const request = require('request');
const moment = require('moment');

const linkArr = [];
const dwnlTimeArr = [];

function Picture(id, url, time, breed, size){
  this.id = id;
  this.urlAddress = url;
  this.dwnlTime = time;
  this.breed = breed;
  this.imgSize = size;
}

router.get('/', function(req, res) {

  request('https://dog.ceo/api/breeds/image/random', (error, response, body) => {

    const link = JSON.parse(body);
    const dwnlTime = moment().format('HH:mm:ss');
    const picObjArr = [];
    const breedArr = [];

    //filling arrays with links & uploading time
    linkArr.push(link.message);
    dwnlTimeArr.push(dwnlTime);

    // making an output if the array contains 30 links
    if (linkArr.length > 29){ 
      linkArr.forEach((e, index) => {
        //pulling the breed off the link
        let breed = e.slice(e.indexOf('breeds'), e.lastIndexOf('/')).split('/');
        breedArr.push(breed[1]);
        //creating an object array of pics
        picObjArr.push(new Picture((index+1).toString().padStart(4, '0'), linkArr[index], dwnlTimeArr[index], breedArr[index], ''));
      })
      //apply sorting by download time
      picObjArr.sort((num1, num2) => {
        num1 = moment(num1.dwnlTime, 'HH:mm:ss').valueOf();
        num2 = moment(num2.dwnlTime, 'HH:mm:ss').valueOf();
        return num2 - num1;
      });
      console.log(picObjArr);
    }
    
    const obj = {
      title: 'Photo ShowCase',
      link: link.message,
    }
    res.render('index', obj);    
  })

});

module.exports = router;
