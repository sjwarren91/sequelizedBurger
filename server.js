var express = require("express");
var path = require("path");
var hdb = require("express-handlebars");
var routes = require("./controllers/burgers_controller")

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", hdb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () => {
    console.log("listening on port: " + PORT)
});