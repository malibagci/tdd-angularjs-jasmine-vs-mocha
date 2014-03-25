var ThesisRoutes = angular.module('ThesisApp.Routes', []);

ThesisRoutes.config([
  '$routeProvider', 
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");

    $routeProvider.when("/", {
      redirectTo: "/home"
    });

    $routeProvider.when("/home", {
      templateUrl: "views/templates/home.html",
      controller: "HomeCtrl"
    });
  }
]);