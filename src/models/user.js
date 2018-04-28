var db = require("./db");

var User = {};

User.findByUsername = function(username) {
  return db("users")
    .where({ username: username })
    .select("*")
    .then(function(user) {
      return user;
    })
    .catch(function(err) {
      console.error(err);
    });
};

User.addNewUser = function(username, password) {
  return db("users")
    .insert({
      username: username,
      password: password
    })
    .then(user => {
      return user;
    })
    .catch(err => {
      console.log(err);
    });
};
module.exports = User;
