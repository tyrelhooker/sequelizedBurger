// Dependencies
var express = require("express");
var router = express.Router();
var db = require("../models");


// ROUTES 

// module.exports = function(app) {
  router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(data){
      res.json(data);
    }).catch(function(error) {
      console.log("You have an error with .create");
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
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
// };

module.exports = router;
