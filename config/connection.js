//connecting to mysql
var mysql = require("mysql");
var connection;

//creating connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
  });
};

  //connecting
  connection.connect();

//exporting connection
module.exports = connection;