'use strict';

angular.module( 'app.controllers', [] );
angular.module( 'app.services', [] );
angular.module( 'app.filters', [] );
angular.module( 'app.directives', [] );

angular.module( 'marvelSuperHeroesApp', [
  'ngRoute',
  'app.controllers',
  'app.services',
  'app.filters',
  'app.directives',
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
