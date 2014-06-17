'use strict';

angular.module('marvelSuperHeroesApp', [
  'ngRoute'
]).config( function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/heroes'
  });
});
