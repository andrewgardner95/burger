// // This code connects Node to MySQL

var mysql = require("mysql");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "accord",
	database: "burgers_db"
});

// ClearDB object
// var connection = mysql.createConnection({
//     host: 'us-cdbr-iron-east-03.cleardb.net',
//     user: 'b87ebaba5a0441',
//     password: 'accord',
//     database: 'heroku_7e15a788481c000'
//   });

connection.connect(function(err) {
	if (err) {
		console.log("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

module.exports= connection;