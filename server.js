var express = require("express");
var path = require("path");
var hdb = require("express-handlebars");
var db = require("./models");
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", hdb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/burgers_controller")(app);

db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
  });
});
