var db = require("../models"); 
// console.log(db);
require("../controllers/burgers_controller.js");
// console.log(db);

module.exports = function(app) {
  app.get("/", function(req, res) {
    getBurgers(db, function(data){
      var hbsObject = { 
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
}