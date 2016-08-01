var express = require('express');
var router = express.Router();

/* GET checks page. */
router.get('/', function(req, res, next) {
  res.render('checks', {
    title: 'Checks'
  });
});

module.exports = router;