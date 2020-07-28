var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('employee/index');
});

router.post('/', function(req, res){

});

module.exports = router;
