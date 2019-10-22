var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from user where id="+id;
		db.getResults(sql, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},

		getp: function(id, callback){

		var sql = "select * from product where id="+id;
		db.getResults(sql, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username='"+user.username+"' and pass='"+user.pass+"'";

		db.getResults(sql, function(result){

			if(result.length > 0 ) {
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from user";

		db.getResults(sql, function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(user, callback){
		var sql = "insert into user values('"+ user.username+"', '"+user.pass+"','"+ user.name+"', '"+user.phone+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update : function(user, callback){
		var sql = "update user set username='"+ user.username+"', pass='"+user.pass+"',name='"+ user.name+"', phone='"+user.phone+"' where id="+user.id;		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete : function(user, callback){
		db.execute(sql, function(status){
			callback(status);
		});
	}


	insertp : function(product, callback){
		var sql = "insert into product values('','"+ product.name+"', '"+product.price+"', '"+product.quantity+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	updatep : function(product, callback){
		var sql = "update product set name='"+ product.name+"', quantity='"+product.quantity+"', price='"+product.price+"' where p_id="+product.id;		db.execute(sql, function(status){
			callback(status);
		});
	},
	deletep : function(product, callback){
		db.execute(sql, function(status){
			callback(status);
		});
	}
}	


