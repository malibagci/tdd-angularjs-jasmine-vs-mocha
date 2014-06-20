'use strict';

angular.module( 'app.controllers', [] );
angular.module( 'app.services', [] );
angular.module( 'app.filters', [] );

angular.module( 'marvelSuperHeroesApp', [
  'ngRoute',
  'app.controllers',
  'app.services',
  'app.filters',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.bootstrap'
]).config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/heroes',
    controller: 'HeroesCtrl'
  });
});
