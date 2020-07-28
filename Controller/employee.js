var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('employee/index');
});

router.post('/', function(req, res){
	if(req.body.option == 'My profile')
	{
		res.redirect('/employee/myprofile');
	}
	else if (req.body.option == 'Update profile') {
		res.redirect('/employee/updateprofile');
	}
});

module.exports = router;
