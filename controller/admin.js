var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/userlist', function(req, res){

		userModel.getAll(function(results){
			if(req.cookies['username'] != null && req.cookies['username'] == 'admin'){
				res.render('admin/index', {user: results});
			}
			else if(req.cookies['username'] != null){
				res.render('home/index', {user: results});
			}else{
				res.redirect('/login');
			}
		});
});


router.get('/adduser', function(req, res){
	res.render('user/adduser');
});

router.post('/adduser', function(req, res){

	var user = {
		username: req.body.username,
		password: req.body.password
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});

router.get('/edit/:id', function(req, res){

	userModel.getById(req.params.id, function(results){
		res.render('user/edit', {user: results[0]});		
	});

});

router.post('/edit/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password,
		id: req.params.id
	};

	userModel.update(user, function(status){

		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});

router.get('/details/:id', function(req, res){

	userModel.getById(req.params.id, function(result){
		res.render('/user/details', {user: result});
	});
});

module.exports = router;
