const express = require('express');
const router = express.Router();
const axios = require('axios');
const fs = require('fs').promises

let url = 'https://api.thecatapi.com/v1/images/search';

router.get('/', function(req, res) {
  axios.get(url).then(r => r.data[0].url)
    .then(r => fs.writeFile('Buffer.txt', r))
    .then(() => fs.readFile('./Buffer.txt', data => data))
    .then((data) => {
      const obj = {
        title: 'Photo ShowCase',
        link: data
      }
      res.render('index', obj)
    })
    .catch(e => console.log('>>>>>> e:', e))
})

module.exports = router;