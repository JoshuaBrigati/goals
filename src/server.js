var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = require("./routes.js");

var app = express();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname, "./client")));
app.use("/scripts", express.static(path.join(__dirname, "./node_modules")));

app.use("/", router);

app.get("/zen", function(req, res) {
  res.send("There are no accidents. - Master Oogway");
});

app.listen(8080, function() {
  console.log("GoalPosts App \nListening on port 8080...");
});

module.exports = app;
