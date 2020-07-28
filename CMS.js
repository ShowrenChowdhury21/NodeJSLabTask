var express 	     = require('express');
var bodyParser 	   = require('body-parser');
var login 		     = require('./controller/login');
var admin          = require('./controller/admin');
var logout         = require('./controller/logout');
var employee       = require('./controller/employee');
var addemp         = require('./controller/addemployee');
var allemp         = require('./controller/allemployeeslist');
var update         = require('./controller/update');
var del            = require('./controller/delete');
var myprofile      = require('./controller/myprofile');
var updateprofile  = require('./controller/updateprofile')
var app 		       = express();


app.set('view engine', 'ejs');

app.use(bodyParser());

app.use('/login', login);
app.use('/admin', admin);
app.use('/employee', employee);
app.use('/logout', logout);
app.use('/admin/addemployee', addemp);
app.use('/admin/allemployeeslist', allemp);
app.use('/admin/update', update);
app.use('/admin/delete', del);
app.use('/employee/myprofile', myprofile);
app.use('/employee/updateprofile', updateprofile);


app.get('/', function(req, res){
	res.send("<a href='/login'>");
});

app.listen(1600, function(){
	console.log('Searver Started. Port: 1600');
});
