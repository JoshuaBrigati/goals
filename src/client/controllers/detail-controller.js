angular
  .module("GoalPosts.Detail.Controller", [])
  .controller("DetailController", function($scope, $location, Goals) {
    console.log($location.$$path);
    let id = $location.$$path.slice(-1);
    $scope.goals = [];

    Goals.getGoalById(id).then(response => {
      $scope.goals = response.data;
    });
  });
// TODO: Define a controller that will display a single Goal's detailed notes
