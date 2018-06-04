// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;
var app = express();

// Requiring models for syncing with db.
var db = require("./models");

// Environment Variables - Serves static content for the app from the public directory, parse application/url & parse application/json, & Sets handlebars
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Gives server access to the imported routes from burger_controller.js
require("./controllers/burgers_controller.js")(app);

// Sync sequelized model and starting Express app. Add { force: true }??????????
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server is listening on: http://localhost: " + PORT);
  });
});
