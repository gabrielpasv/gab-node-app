var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.name.findAll().then(function(names){
  	res.render('names', { title: 'DevOps Test App- CRUD', names: names  });
  });
});

router.post('/', function(req, res){
	var name = req.body.name;
	models.name.create(name).then(function(){
		res.redirect('names');
	})
});



router.get('/:id/destroy', function(req, res) {
  models.name.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect('/names');
  });
});


// router.get('/delete/:id', function(req, res){
// 	var id = req.body.id;
// 	console.log(id);
// });



module.exports = router;
