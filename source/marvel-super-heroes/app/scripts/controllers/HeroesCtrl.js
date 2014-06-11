'use strict';

angular.module('marvelSuperHeroesApp')
  .controller('HeroesCtrl', function ($scope, HeroesService) {

    $scope.heroes = HeroesService.heroes;
    $scope.searchResults = HeroesService.searchResults;
    $scope.noResults = false;

    $scope.$on('searchResultsChanged', function(event, searchResults) {
      $scope.searchResults = searchResults;
    });

    $scope.$on('searching', function(event, searching) {
      $scope.searching = searching;
    });

    $scope.$on('searchNoResults', function(event, noResults) {
      $scope.noResults = noResults;
    });

    $scope.save = function(hero) {
      if(hero.favorite) {
        // delete
        hero.favorite = false;
        HeroesService.delete(hero);
      } else {
        // create
        hero.favorite = true;
        HeroesService.save(hero);
      }
    };

  });
