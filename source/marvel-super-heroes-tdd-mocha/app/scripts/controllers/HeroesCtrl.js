// app/scripts/controllers/HeroesCtrl.js

angular.module( 'app.controllers' )
  .controller( 'HeroesCtrl', function($scope, MarvelSearchFactory) {
    $scope.searchResults = MarvelSearchFactory.searchResults;
    $scope.isSearching = MarvelSearchFactory.isSearching;
    $scope.heroes = [];
  });
