var ThesisControllers = angular.module('ThesisApp.Controllers', []);

ThesisControllers.controller('HomeCtrl', [
  '$scope',
  '$rootScope',
  function($scope, $rootScope) {
    console.log("HomeCtrl here.");

    $scope.searchResults =  $rootScope.heroSearchResults;

  }

]);

ThesisControllers.controller('ThesisCtrl', [
  '$scope',
  '$rootScope',
  '$heroesFactory',
  function($scope, $rootScope, $heroesFactory) {
    
    $rootScope.heroesFactory = $heroesFactory;

    $scope.searchForHero = function(searchVal) {
      $rootScope.heroesFactory.searchForHero( searchVal, function() {
        $rootScope.heroSearchResults = $rootScope.heroesFactory.getHeroSearchResults();
      });
    }

  }
]);

ThesisControllers.controller('HeroesCtrl', [
  '$scope',
  '$rootScope',
  function($scope, $rootScope) {

    var suggestedHeroes = [
      "Iron Man", 
      "Wolverine", 
      "Spider-Man",
      "Thor",
      "Captain America",
      "Hulk"
    ];

    angular.forEach(suggestedHeroes, function(value, key){
      $rootScope.heroesFactory.addHeroToCollection( value, function() {
        $scope.heroes = $rootScope.heroesFactory.getHeroes();
      });
    });


  }
]);