//DECLARATION
var express  	= require('express');
var ejs  		= require('ejs');
var bodyParse  	= require('body-parser');
var exSession  	= require('express-session');
var cookieParser= require('cookie-parser');
var home  		= require('./controller/home');
var user  		= require('./controller/user');
var login  		= require('./controller/login');
var admin  		= require('./controller/admin');
var logout  	= require('./controller/logout');
var app 		= express();

//CONGIFURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParse.urlencoded({extended:false}));
app.use(cookieParser());

app.use('/login', login);
app.use('/admin', admin);
app.use('/user', user);
app.use('/logout', logout);

//ROUTING
app.get('/', function(req, res){
	res.send('<h2>Its working</h2>');
});


//SERVER STARTUP
app.listen(8080, function(){
	console.log('server started at 8080...');
});
