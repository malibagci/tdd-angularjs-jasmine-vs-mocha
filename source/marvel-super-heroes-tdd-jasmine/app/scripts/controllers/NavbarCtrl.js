// app/scripts/controllers/NavbarCtrl.js

'use strict';

angular.module( 'app.controllers' )
  .controller( 'NavbarCtrl', function($scope, MarvelSearchFactory) {

    $scope.searchString = '';

    $scope.$watch( 'searchString', function(value) {
      MarvelSearchFactory.search();
    });

  });