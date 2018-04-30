var router = require("express").Router();
var jwt = require("jwt-simple");
var bcrypt = require("bcrypt");

var db = require("./models/db.js");
var user = require("./models/user.js");
var goal = require("./models/goal.js");

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
  const saltRounds = 10;
  const myPlaintextPassword = req.body.password;
  const someOtherPlaintextPassword = "not_bacon";

  var username = req.body.username;

  user.findByUsername(username).then(response => {
    if (response.length) {
      res.sendStatus(409);
    } else {
      bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
        user.addNewUser(username, hash).then(response => {
          res.sendStatus(201);
        });
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
});

module.exports = router;
