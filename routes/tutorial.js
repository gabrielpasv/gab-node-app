var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tutorial', { title: 'DevOps Test tutorial'});
});



module.exports = router;
