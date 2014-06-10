'use strict';

angular.module('marvelSuperHeroesApp')
  .service('HeroesService', function HeroesService(HeroFactory, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var heroes = [];
    var searchResults = [];


    // check api for entries, if no entries are available make init
    HeroFactory.init( function(initHeroes){
      heroes = initHeroes;
      $rootScope.$broadcast('heroesChanged', heroes);
    });

    this.searchForHero = function(name) {
      if(name.length < 4) {
        searchResults = [];
        $rootScope.$broadcast('searchResultsChanged', searchResults);
      } else {
        $rootScope.$broadcast('searching', true);
        HeroFactory.search( name, function(result) {
          searchResults = result;
          $rootScope.$broadcast('searchResultsChanged', searchResults);
          $rootScope.$broadcast('searching', false);
          if(searchResults.length === 0) {
            $rootScope.$broadcast('searchNoResults', true);
          } else {
            $rootScope.$broadcast('searchNoResults', false);
          }
        });
      }
    };

  });
