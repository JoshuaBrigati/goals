angular
  .module("GoalPosts.Goals.Controller", [])
  .controller("GoalsController", function($scope, $location, Goals) {
    $scope.goals = [];

    Goals.getGoals().then(response => {
      console.log("GOALS-CONTROLLER ", response);
      $scope.goals = response.data;
    });
  });
// TODO: Define a controller that allows the user to view all goals.
