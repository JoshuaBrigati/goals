var router = require("express").Router();
var jwt = require("jwt-simple"); // for encoding and decoding tokens

var db = require("./models/db.js");
var user = require("./models/user.js");
var goal = require("./models/goal.js");
// TODO: ATTACH ROUTE HANDLERS
// See 2-complete-routes/README.md for which routes you should implement first.

router.get("/usergoals/:user_id", (req, res) => {
  goal
    .findGoalsByUser(req.params.user_id.replace(":", ""))
    .then(goals => res.send(goals));
});

router.post("/usergoals/:user_id", (req, res) => {
  goal
    .addNewGoal(req.params.user_id.replace(":", ""), req.body)
    .then(goal => res.send(goal));
});

router.get("/goals/:id", (req, res) => {
  goal
    .findGoalById(req.params.id.replace(":", ""))
    .then(goal => res.send(goal));
});

router.post("/signup", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  user.findByUsername(username).then(response => {
    if (response.length) {
      res.sendStatus(409);
    } else {
      user.addNewUser(username, password).then(response => {
        res.sendStatus(201);
      });
    }
  });
});

router.post("/login", function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  user.findByUsername(username).then(response => {
    if (!response.length) {
      res.sendStatus(401);
    } else {
      var token = jwt.encode(response[0], "secret");
      res.send({ user_id: response[0].id, token: token });
    }
  });

  // TODO: Complete the login functionality:
  // Search for username
  // If not found, send back a 401 status code
  // If found, compare the hashed passwords
  // If there is a match
  // Create a token and send it to the client
  // If the match fails send back a 401 status code
});

module.exports = router;
