var mysql=require ('mysql');

var connMySQL=function(){
		return mysql.createConnection({
				host:'localhost',
				user:'root',
				password:'',
				database:'mydb'
			});
}

module.exports=function(){
	return connMySQL;
}

		