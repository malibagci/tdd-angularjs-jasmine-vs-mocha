'use strict';

angular.module('marvelSuperHeroesApp')
  .controller('HeroCtrl', function ($scope, HeroService, HeroesService, $routeParams, $location) {

    if($routeParams.id === '') {
      $location.path('/404');
      return;
    }

    HeroService.resetService();

    $scope.hero = HeroService.hero;
    $scope.hero.$promise.then( function(hero) {
      if(hero.id) {
        // hero is ready
        HeroService.setRandomItemsByType('comics', 6);
        HeroService.setRandomItemsByType('events', 6);
        HeroService.setRandomItemsByType('series', 12);

        $scope.comics = HeroService.comics;
        $scope.events = HeroService.events;
        $scope.series = HeroService.series;

        $scope.delete = function(hero) {
          HeroesService.delete(hero);
          $location.path('/');
        };
      } else {
        $location.path('/404');
        return;
      }
    });


  });
