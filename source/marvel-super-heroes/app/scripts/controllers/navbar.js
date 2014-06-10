'use strict';

angular.module('marvelSuperHeroesApp')
  .controller('NavbarCtrl', function ($scope, $location, HeroesService) {
    $scope.menu = [
      { 'title': 'Home', 'link': '/' },
      { 'title': 'About', 'link': '/about' },
      { 'title': 'Contact', 'link': '/contact' }
    ];
    $scope.searchString = "";

    $scope.isActive = function(route) {
      return route === $location.path();
    };


    $scope.$watch( "searchString", function(searchValue) {
      HeroesService.searchForHero(searchValue);
    });

  });
