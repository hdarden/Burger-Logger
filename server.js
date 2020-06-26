var express = require("express");
var compression = require("compression");
var exphbs = require("express-handlebars");
var app = express();
app.use(compression());
//accessing public folder
app.use(express.static("public"));

//express

var PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require routes from burgers_controller
var routes = require("./controllers/burgers_controller");
app.use(routes);

//server listener
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
