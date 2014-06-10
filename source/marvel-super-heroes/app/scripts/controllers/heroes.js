'use strict';

angular.module('marvelSuperHeroesApp')
  .controller('HeroesCtrl', function ($scope, HeroesService) {

    $scope.heroes = HeroesService.heroes;
    $scope.searchResults = HeroesService.searchResults;
    $scope.noResults = false;

    $scope.$on('heroesChanged', function(event, heroes) {
      $scope.heroes = heroes;
    });

    $scope.$on('searchResultsChanged', function(event, searchResults) {
      $scope.searchResults = searchResults;
    });

    $scope.$on('searching', function(event, searching) {
      $scope.searching = searching;
    });

    $scope.$on('searchNoResults', function(event, noResults) {
      $scope.noResults = noResults;
    });

  });
