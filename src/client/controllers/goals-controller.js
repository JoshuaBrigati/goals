angular
  .module("GoalPosts.Goals.Controller", [])
  .controller("GoalsController", function($scope, $window, $location, Goals) {
    $scope.goals = [];

    Goals.getGoals($window.localStorage.user_id).then(response => {
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
      return true;
    };
  });
