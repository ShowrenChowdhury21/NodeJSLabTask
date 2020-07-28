var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('employee/MyProfile');
});

router.post('/', function(req, res){
		if(req.body.option == "Ok")
		{
			res.redirect('/employee');
		}
});

module.exports = router;
