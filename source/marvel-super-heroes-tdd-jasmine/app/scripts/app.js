'use strict';

angular.module( 'app.controllers', [] );
angular.module( 'app.services', [] );
angular.module( 'app.filters', [] );

angular.module('marvelSuperHeroesApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'app.controllers',
  'app.services',
  'app.filters',
  'ui.bootstrap'
]).config( function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/heroes',
    controller: 'HeroesCtrl'
  });
});
