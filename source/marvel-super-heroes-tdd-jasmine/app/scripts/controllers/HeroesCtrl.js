// app/scripts/controllers/HeroesCtrl.js

'use strict';

angular.module( 'app.controllers' )
  .controller( 'HeroesCtrl', function($scope, MarvelSearchFactory) {

    $scope.searchResults = MarvelSearchFactory.searchResults;
    $scope.isSearching = MarvelSearchFactory.isSearching;

  });
