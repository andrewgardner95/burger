// // This code connects Node to MySQL

var mysql = require("mysql");

// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "",
// 	database: "burgers_db"
// });


var pool = mysql.createPool({
    host: 'us-cdbr-iron-east-03.cleardb.net',
    port: 8080,
    user: 'b87ebaba5a0441',
    password: 'accord',
    database: 'heroku_7e15a788481c000',
    connectionLimit: 5
  });


pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

module.exports= pool;

// connection.connect(function(err) {
// 	if (err) {
// 		console.log("error connecting: " + err.stack);
// 		return;
// 	}
// 	console.log("connected as id: " + connection.threadId);
// });

// module.exports = connection;