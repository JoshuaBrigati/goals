angular
  .module("GoalPosts.Goals.Controller", [])
  .controller("GoalsController", function($scope, $location, Goals) {
    $scope.goals = [];

    Goals.getGoals().then(response => {
      $scope.goals = response.data;
    });

    $scope.newgoal = () => {
      $location.url("/goal-form");
    };

    $scope.renderDetails = goal => {
      $location.url(`/goals/:${goal.id}`);
    };

    $scope.titleHome = () => {
      $location.url(`/`);
    };
  });
// TODO: Define a controller that allows the user to view all goals.
