'use strict';

angular.module('marvelSuperHeroesApp')
  .controller('NavbarCtrl', function ($scope, $location, HeroesService) {
    $scope.menu = [
      { 'title': 'Home', 'link': '/' },
      { 'title': 'About', 'link': '/about' },
      { 'title': 'Contact', 'link': '/contact' }
    ];
    $scope.searchString = '';
    $scope.showSearchField = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };


    $scope.$watch( 'searchString', function(searchValue) {
      HeroesService.searchForHero(searchValue);
    });

    $scope.$watch( function() {
      return HeroesService.heroes;
    }, function(new_heroes, old_heroes) {
      // reset search
      $scope.searchString = '';
    }, true)

    $scope.$watch( function() {
      return $location.path();
    }, function(path) {
      $scope.showSearchField = (path === "/");
    });

  });
