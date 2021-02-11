const express = require('express');
const router = express.Router();
const request = require('request');
const moment = require('moment');
const axios = require('axios');

const linkArr = [];
const picObjArr = [];
const breedArr = [];

function Picture(id, url, time, breed, size){
  this.id = id;
  this.urlAddress = url;
  this.dwnlTime = time;
  this.breed = breed;
  this.imgSize = size;
}

let url = 'https://dog.ceo/api/breeds/image/random';

router.get('/', function(req, res) {
  axios.get(url).then(r => {
    const obj = {
      title: 'Photo ShowCase',
      link: r.data.message
    }
    res.render('index', obj); 
  })  
})

let getLink = axios.get(url)

for(let i = 0; i<30; i++){
  getLink
    .then(r => {
      linkArr.push(r.data.message);
    })
  axios.get(url);
}

getLink
  .then(() => console.log(linkArr))
  .then(() => {
    linkArr.forEach((e, index) => {
      let breed = e.slice(e.indexOf('breeds'), e.lastIndexOf('/')).split('/');
      breedArr.push(breed[1]);
      picObjArr.push(new Picture((index+1).toString().padStart(4, '0'), linkArr[index], moment().format('HH:mm:ss'), breedArr[index], ''));
    })
  })
  .then(() => console.log(picObjArr))
  .catch(err => console.log('>>>> err: ', err))

module.exports = router;
