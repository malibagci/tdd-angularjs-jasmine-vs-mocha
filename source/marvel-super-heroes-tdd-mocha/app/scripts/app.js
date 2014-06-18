'use strict';

angular.module( 'app.controllers', [] );
angular.module( 'app.services', [] );

angular.module( 'marvelSuperHeroesApp', [
  'ngRoute',
  'app.controllers',
  'app.services',
  'ngResource'
]).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/heroes',
    controller: 'HeroesCtrl'
  });
});
