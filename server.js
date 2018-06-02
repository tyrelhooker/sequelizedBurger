// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");
var PORT = process.env.PORT || 8080;
var app = express();

// Environment Variables - Serves static content for the app from the public directory, parse application/url & parse application/json, & Sets handlebars
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Gives server access to the imported routes from burger_controller.js
app.use(routes);

// Starts the server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server is listening on: http://localhost: " + PORT);
});
