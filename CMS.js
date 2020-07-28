var express 	  = require('express');
var bodyParser 	= require('body-parser');
var login 		  = require('./controller/login');
var admin       = require('./controller/admin');
var logout       = require('./controller/logout');
var employee       = require('./controller/employee');
var app 		    = express();


app.set('view engine', 'ejs');

app.use(bodyParser());

app.use('/login', login);
app.use('/admin', admin);
app.use('/employee', employee);
app.use('/logout', logout);


app.get('/', function(req, res){
	res.send("<a href='/login'>");
});

app.listen(1600, function(){
	console.log('Searver Started. Port: 1600');
});
