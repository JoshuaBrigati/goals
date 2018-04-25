angular
  .module("GoalPosts.Goals.Controller", [])
  .controller("GoalsController", function($scope, $location, Goals) {
    $scope.goals = [];
    console.log("$scope", $scope);

    Goals.getGoals().then(response => {
      $scope.goals = response.data;
    });
    $scope.newgoal = () => {
      $location.url("/goal-form");
    };
  });
// TODO: Define a controller that allows the user to view all goals.
