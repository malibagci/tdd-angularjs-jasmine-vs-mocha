'use strict';

angular.module( 'app.controllers', [] );

angular.module('marvelSuperHeroesApp', [
  'ngRoute',
  'app.controllers'
]).config( function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/heroes',
    controller: 'HeroesCtrl'
  });
});
