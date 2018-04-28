angular
  .module("GoalPosts.Goals.Controller", [])
  .controller("GoalsController", function($scope, $window, $location, Goals) {
    $scope.goals = [];

    Goals.getGoals($window.localStorage.user_id).then(response => {
      console.log("Goals ", response.data);
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

    $scope.signin = () => {
      $location.url("/signin");
    };

    $scope.isLoggedIn = () => {
      console.log();
      return true;
    };
  });
// TODO: Define a controller that allows the user to view all goals.
