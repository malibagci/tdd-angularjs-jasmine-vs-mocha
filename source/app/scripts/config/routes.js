var ThesisRoutes = angular.module('ThesisApp.Routes', []);

ThesisRoutes.config([
  '$routeProvider', 
  '$locationProvider',
  function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix("!");

    $routeProvider.when("/", {
      templateUrl: "views/templates/home.html",
      controller: "HomeCtrl"
    });
  }
]);

// app.config([
//   "$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
//     $locationProvider.html5Mode(true);
//     $locationProvider.hashPrefix("!");
//     return $routeProvider.when("/", {
//       templateUrl: "partials/index.jade",
//       controller: "IndexCtrl"
//     });
//   }
// ]);

// ThesisRoutes.run([
//   '$rootScope',
//   '$location',
//   function($rootScope, $location) {
//     $rootScope.route = function(url, args) {
//       return ROUTER.routePath(url, args);
//     }

//     $rootScope.r = $rootScope.route;

//     $rootScope.c = function(route, value) {
//       var url = ROUTER.routePath(route);
//       if(url == $location.path())
//         return value
//     }
//   }
// ]);