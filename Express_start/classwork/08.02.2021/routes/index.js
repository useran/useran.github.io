const express = require('express');
const router = express.Router();
const axios = require('axios');

function Picture(id, url, breed){
  this.id = id;
  this.url = url;
  this.breed = breed;
  this.imgSize = '';
}

let url = 'https://dog.ceo/api/breeds/image/random';

router.get('/', function(req, res) {
  const links = [];
  const breedArr = [];
  const picObjArr = [];

  for(let i = 0; i<28; i++){
    links.push(axios.get(url).then(r => r.data.message))
  }
  Promise.all(links)
    .then(r => {
      r.forEach((e, index) => {
        let breed = e.slice(e.indexOf('breeds'), e.lastIndexOf('/')).split('/');
        breedArr.push(breed[1]);
        picObjArr.push(new Picture(index, r[index], breedArr[index]));
      })
    })
    .then(() => res.render('index', {picObjArr}))
    .catch(err => console.log('>>>> err: ', err));
})

module.exports = router;
