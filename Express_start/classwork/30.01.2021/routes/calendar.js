var express = require('express');
var router = express.Router();
const moment = require('moment');

moment.locale('uk');

router.get('/:year/:month', function(req, res, next) {

  let daysArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'нд'];
  let startDay = moment(`${req.params.year}/${req.params.month}`, 'YYYY/MM').format('dd');
  let dayQty = moment(`${req.params.year}/${req.params.month}`, 'YYYY/MM').daysInMonth();
  let monthDay = moment(`${req.params.month}`, 'MM').format('MMMM');
  let firstRowGrid = daysArr.indexOf(`${startDay}`);
  let daysOff = [5, 6, 12, 13, 19, 20, 26, 27, 33, 34];
  let tempArr = [];

  for (let i=1; i<=dayQty; i++) {
    tempArr.push(i);
  }

  for (let i=0; i<firstRowGrid; i++) {
    tempArr.unshift('0');
  }

  const obj = {
    title: 'Calendar',
    year: req.params.year,
    month: req.params.month,
    days: daysArr,
    dayOff: daysOff,
    monthDay: monthDay,
    grid: tempArr
  }

  res.render('calendar', obj);

});

module.exports = router;
