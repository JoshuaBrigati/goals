var router = require("express").Router();
var jwt = require("jwt-simple"); // for encoding and decoding tokens

var db = require("./models/db.js");
var user = require("./models/user.js");
var goal = require("./models/goal.js");
// TODO: ATTACH ROUTE HANDLERS
// See 2-complete-routes/README.md for which routes you should implement first.

router.get("/goals", (req, res) => {
  console.log("CALLING /goals");
  //goal.findGoalsByUser(1);
  goal.findGoalsByUser(1).then(goals => res.send(goals));
});

router.post("/goals", (req, res) => {
  goal.addNewGoal(req.body).then(res.send(goals));
});

router.get("/goals/:id", (req, res) => {});

router.post("/signup", function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the signup functionality:
  // Search for username
  // If taken, send a 409 status code
  // If available, hash the password and store it in the database
  // Send back a 201
});

router.post("/login", function() {
  var username = req.body.username;
  var password = req.body.password;

  // TODO: Complete the login functionality:
  // Search for username
  // If not found, send back a 401 status code
  // If found, compare the hashed passwords
  // If there is a match
  // Create a token and send it to the client
  // If the match fails send back a 401 status code
});

module.exports = router;
