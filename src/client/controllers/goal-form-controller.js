angular
  .module("GoalPosts.GoalForm.Controller", [])
  .controller("GoalsFormController", function(
    $scope,
    $window,
    $location,
    Goals
  ) {
    $scope.submit = () => {
      Goals.postGoalForm(
        $window.localStorage.user_id,
        $scope.title,
        $scope.description
      )
        .then(function(response) {
          $location.url("/");
        })
        .catch(function(error) {
          console.log(error);
        });
    };
  });
