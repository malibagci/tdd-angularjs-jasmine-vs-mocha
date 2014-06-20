'use strict';

angular.module( 'app.controllers', [] );
angular.module( 'app.services', [] );
angular.module( 'app.filters', [] );
angular.module( 'app.directives', [] );

angular.module('marvelSuperHeroesApp', [
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'app.controllers',
  'app.services',
  'app.filters',
  'app.directives',
  'ui.bootstrap'
]).config( function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/heroes',
    controller: 'HeroesCtrl'
  });
});
