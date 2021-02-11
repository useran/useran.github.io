const express = require('express');
const router = express.Router();
const axios = require('axios');


let url = 'https://dog.ceo/api/breeds/list/all';

const getUrl = breed => `https://dog.ceo/api/breed/${breed}/images/random`;

const obj = {};

router.get('/', function(req, res) {
  axios
  .get(url)
  .then(r => r.data.message)
  .then(r => {
    obj.title = 'Dogs';
    obj.r = r;
    obj.link = '';
    obj.value = '';
    res.render('index', obj);
  })
  .catch(err => console.log('>>> err= ', err))
})

router.get('/:name', function(req, res) {
  axios
  .get(getUrl(req.params.name))
  .then(r => {
    obj.link = r.data.message;
    obj.value = req.params.name;
    res.render('index', obj);
  })
  .catch(err => console.log('>>> err= ', err))
})

module.exports = router;