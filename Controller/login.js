var express = require('express');
var router = express.Router();


router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	if(req.body.username == "admin")
  {
    if(req.body.password == "pass"){
		    res.redirect('/admin');
	  }else{
		    res.send('invalid username/password');
    }
  }

  else if(req.body.username == "employee")
  {
    if(req.body.password == "password"){
        res.redirect('/employee');
    }else{
        res.send('invalid username/password');
    }
  }else{
        res.send('invalid username/password');
  }
});

module.exports = router;
