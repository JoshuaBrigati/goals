angular
  .module("GoalPosts.Goals.Service", [])

  // TODO: Create a factory which provides $http functionality for Goals in other parts of the app.s
  .factory("Goals", function($http) {
    let getGoals = username => {
      return $http({
        method: "GET",
        url: `/goals`
      })
        .then(response => {
          //console.log("IT WAS CALLED IN GOALS-SERVICE.JS ", response);
          return response;
        })
        .catch(err => {
          console.log(err);
        });
    };

    return {
      getGoals: getGoals
    };
  });
