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


router.get('/addproduct', function(req, res){
	res.render('product/addproduct');
});

router.post('/addproduct', function(req, res){

	var product = {
		name: req.body.name,
		quantity: req.body.quantity,
		price: req.body.price

	};

	userModel.insertp(product, function(status){
		if(status){
			res.redirect('/product/products');
		}else{
			res.redirect('/product/addproduct');
		}
	});
});

router.get('/editp/:id', function(req, res){

	userModel.getp(req.params.id, function(results){
		res.render('product/edit', {product: results[0]});		
	});

});

router.post('/editp/:id', function(req, res){
	
	var product = {
		name: req.body.name,
		price: req.body.price,
		quantity: req.body.quantity,


		p_id: req.params.id
	};

	userModel.updatep(product, function(status){

		if(status){
			res.redirect('/product/products');
		}else{
			res.redirect('/product/addproduct');
		}
	});
});

router.get('/pdetails/:id', function(req, res){

	userModel.getp(req.params.id, function(result){
		res.render('/product/details', {product: result});
	});
});

module.exports = router;
