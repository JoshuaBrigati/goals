angular
  .module("GoalPosts", [
    "GoalPosts.Auth.Service",
    "GoalPosts.Auth.Controller",
    "GoalPosts.Detail.Controller",
    "GoalPosts.GoalForm.Controller",
    "GoalPosts.Goals.Controller",
    "GoalPosts.Goals.Service",
    "ngRoute"
  ])
  .config(function($routeProvider, $httpProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "views/goals.html",
        controller: "GoalsController"
      })
      .when("/goals/:id", {
        templateUrl: "views/detail.html",
        controller: "DetailController"
      })
      .when("/goal-form", {
        templateUrl: "views/goal-form.html",
        controller: "GoalsFormController"
      })
      .when("/signin", {
        templateUrl: "views/login.html",
        controller: "AuthController"
      })
      .when("/signup", {
        templateUrl: "views/signup.html",
        controller: "AuthController"
      });

    $httpProvider.interceptors.push("AttachTokens");
  })

  .factory("AttachTokens", function($window) {
    var attach = {
      request: function(object) {
        var jwt = $window.localStorage.getItem("com.gp");
        if (jwt) object.headers["x-access-token"] = jwt;
        object.headers["Allow-Control-Allow-Origin"] = "*";
        return object;
      }
    };
    return attach;
  })
  .run(function($rootScope, $location, Auth) {
    $rootScope.$on("$routeChangeStart", function(evt, next, current) {
      if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
        $location.path("/signin");
      }
    });
  });
