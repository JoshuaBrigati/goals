angular
  .module("GoalPosts.GoalForm.Controller", [])
  .controller("GoalsFormController", function($scope, $location, Goals) {
    $scope.submit = () => {
      Goals.postGoalForm($scope.title, $scope.description)
        .then(function(response) {
          $location.url("/");
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  });
// TODO: Define a controller that will allow the user to create a new Goal
