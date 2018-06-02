// Dependencies 
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}
// ORM METHODS HERE to query db table
var orm = {
  // Method for performing a query of the entire db table. Callback ensures the data is returned only once the query is done
  selectAll: function(tableInput, callback) {
    var queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  // Method for adding burgers to db.
  insertOne: function(table, cols, vals, callback) {
    var newBurger = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

    console.log(newBurger);

    connection.query(newBurger, vals, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  // Method for accessing & updating burgers in db from !devoured to devoured
  updateOne: function(table, objColVals, condition, callback) {
    var eatBurger = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`
    // var eatBurger = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";";
    connection.query(eatBurger, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  }
};

module.exports = orm;

