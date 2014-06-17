// app/scripts/controllers/NavbarCtrl.js

angular.module('app.controllers')
  .controller('NavbarCtrl', function($scope, MarvelSearchFactory) {
    $scope.searchString = '';
  });
