var express = require('express');
var router = express.Router();
/* var calendRouter = require('./routes/calendar'); */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Calendar' });
});

/* router.get('/calendar', calendRouter); */


module.exports = router;
