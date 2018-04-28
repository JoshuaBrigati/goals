angular
  .module("GoalPosts.Detail.Controller", [])
  .controller("DetailController", function($scope, $location, Goals) {
    let id = $location.$$path.slice(-1);
    $scope.goals = [];

    Goals.getGoalById(id).then(response => {
      $scope.goals = response.data;
    });
  });
