// app/scripts/controllers/HeroesCtrl.js

angular.module( 'app.controllers' )
  .controller( 'HeroesCtrl', function($scope, MarvelSearchFactory, 
    HeroesFactory) {
      $scope.searchResults = MarvelSearchFactory.searchResults;
      $scope.isSearching = MarvelSearchFactory.isSearching;
      $scope.heroes = HeroesFactory.heroes;

      $scope.addToFavorites = function(hero) {
        HeroesFactory.save(hero);
        MarvelSearchFactory.reset();
      };

      $scope.removeFromFavorites = function(id) {
        HeroesFactory.remove(id);
      };
  });
