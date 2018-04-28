angular.module("GoalPosts.Goals.Service", []).factory("Goals", function($http) {
  let getGoals = user_id => {
    return $http({ method: "GET", url: `/usergoals/:${user_id}` })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log("GET GOALS ERR IN GOALS-SERVICE", err);
      });
  };

  let getGoalById = id => {
    return $http({
      method: "GET",
      url: `/goals/:${id}`
    })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  };

  let postGoalForm = (user_id, title, description) => {
    return $http({
      method: "POST",
      url: `/usergoals/:${user_id}`,
      data: {
        title: title,
        description: description
      }
    })
      .then(response => {
        return response;
      })
      .catch(err => {
        console.log(err);
      });
  };

  return {
    getGoals: getGoals,
    getGoalById: getGoalById,
    postGoalForm: postGoalForm
  };
});
