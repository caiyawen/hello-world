var mysql = require('mysql');
var conn = mysql.createConnection({
	host: 'localhost',
	user: 'nodejs',
	password: 'nodejs',
	database: 'nodejs',
	port: 3306
});
// conn.connect();
var pool = mysql.createPool({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs',
    database: 'nodejs',
    port: 3306
});

var selectSQL = 'select * from t_user limit 10';

pool.getConnection(function (err, conn) {
    if (err) console.log("POOL ==> " + err);

    conn.query(selectSQL,function(err,rows){
        if (err) console.log(err);
        console.log("SELECT ==> ");
        for (var i in rows) {
            console.log(rows[i]);
        }
        conn.release();
    });
});
// var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
// var selectSQL = 'select * from t_user';
// var deleteSQL = 'delete from t_user';
// var updateSQL = 'update t_user set name="conan update"  where name="conan"';

// //delete

// // 由于node的异步的，上面是一个连续的操作，代码会被写的支离破碎。
// // 我们可以通过async库对上面代码进行封装，请参考文章：Nodejs异步流程控制Async
// conn.query(deleteSQL, function(err0, res0) {
// 	if (err0) console.log(err0);
// 	console.log("DELETE Return ==> ");
// 	console.log(res0);
// });

// conn.query(insertSQL,function(err1,res1) {
// 	if(err1) console.log(err1); 
// 	console.log("INSERT Return ==> ");
// 	console.log(res1);
// });

// conn.query(selectSQL,function(err2,res2) {
// 	if(err2) console.log(err2);
// 	console.log("SELECT ==> ");
// 	console.log(res2);
// });

// conn.query(updateSQL,function(err3,res3) {
//     if(err3) console.log(err3);
//     console.log("UPDATE Return ==> ");
//     console.log(res3);
// });

// conn.query(selectSQL,function(err4,res4) {
// 	if(err4) console.log(err4);
// 	console.log("SELECT ==> ");
// 	console.log(res4);
// });
// conn.end();



// var mysql = require('mysql');
// var conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database:'nodejs',
//     port: 3306
// });
// conn.connect();
// conn.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//     if (err) throw err;
//     console.log('The solution is: ', rows[0].solution);
// });
// conn.end();