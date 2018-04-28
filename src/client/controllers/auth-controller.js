angular
  .module("GoalPosts.Auth.Controller", [])

  .controller("AuthController", function($scope, $window, $location, Auth) {
    $scope.user = {};

    $scope.login = function() {
      Auth.login($scope.user)
        .then(function(data) {
          $window.localStorage.setItem("user_id", data.user_id);
          $window.localStorage.setItem("com.gp", data.token);
          $location.path("/");
        })
        .catch(function(error) {
          console.error(error);
        });
    };

    $scope.signup = function() {
      Auth.signup($scope.user)
        .then(function(data) {
          $window.localStorage.setItem("user_id", data.user_id);
          $window.localStorage.setItem("com.gp", data.token);
          $location.path("/");
        })
        .catch(function(error) {
          console.error(error);
        });
    };
  });
