// Dependencies
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// ROUTES 

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(data){
      res.json(data);
    }).catch(function(error) {
      console.log("You have an error with .create");
    });
  });

  app.put("/api/burgers", function(req, res) {
    db.Burger.update(req.body, {
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(data) {
      if (data.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
};
