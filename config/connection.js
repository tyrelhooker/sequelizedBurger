var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error connection: " + err.stack);
    return;
  }
  console.log("Connected as id: " + connection.threadId);
});

// Exports connection to orm.js
module.exports = connection;