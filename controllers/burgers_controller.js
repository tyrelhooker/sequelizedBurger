// Dependencies

var db = require("../models");
var path = require("path");


// ROUTES 
module.exports = function(app) {
  app.get("/", function(req, res) {
    db.burger.findAll({burger_names}).then(function(data) {
      res.json(data);
      // var hbsObject = res.json(data);
      // console.log(hbsObject);
      // res.render("index", hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.burger.create(req.body).then(function(results){
      res.json(results);
    }).catch(function(error) {
      console.log("You have an error with .create");
    });
  });

  app.put("/api/burgers", function(req, res) {
    db.update(req.body, {
      where: {
        devoured: req.body.devoured,
        id: req.params.id
      }
    }).then(function(results) {
      if (results.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    })
  })
};