'use strict';

angular.module( 'app.controllers', [] );
angular.module( 'app.services', [] );

angular.module('marvelSuperHeroesApp', [
  'ngRoute',
  'ngResource',
  'app.controllers',
  'app.services'
]).config( function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/heroes',
    controller: 'HeroesCtrl'
  });
});
