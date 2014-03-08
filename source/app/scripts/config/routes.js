var ThesisRoutes = angular.module('App.Routes', []);

ThesisRoutes.config([
  '$routeProvider', 
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  }
]);