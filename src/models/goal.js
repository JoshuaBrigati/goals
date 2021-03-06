var db = require("./db");

var Goal = {};

Goal.addNewGoal = function(user_id, goal) {
  return db("goals")
    .insert({
      user_id: user_id,
      goaltitle: goal.title,
      description: goal.description
    })
    .then(goal => {
      return goal;
    })
    .catch(err => {
      console.log(err);
    });
};

Goal.findGoalById = id => {
  return db("goals")
    .where({ id: id })
    .select("*")
    .then(goal => {
      return goal;
    });
};

Goal.toggleComplete = id => {
  return db("goals")
    .where({ id: id })
    .update({ completed: true });
};

Goal.findGoalsByUser = function(user_id) {
  return db("goals")
    .where({ user_id: user_id })
    .select("*")
    .then(goals => {
      return goals;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = Goal;
