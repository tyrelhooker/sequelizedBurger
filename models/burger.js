// Imports ORM to create functions that will interact with the db. 
var orm = require("../config/orm.js");

// Create the code that will call the ORM functions using burger specific input for the ORM. 

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(res) {
      callback(res);
    });
  },
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  }
};

// Exports the database functions for the burgers_controller.js to use
module.exports = burger; 