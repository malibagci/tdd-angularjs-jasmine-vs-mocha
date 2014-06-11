'use strict';

angular.module('marvelSuperHeroesApp')
  .service('HeroesService', function HeroesService(HeroSearchFactory, $rootScope, $resource) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.heroes = [];

    var searchResults = [];
    var Hero = $resource('/api/heroes/:id');

    var service = this;

    // init favorite heroes from db
    Hero.query(function(apiHeroes) {
      angular.forEach(apiHeroes, function(hero) {
        service.heroes.push(hero);
      });
    });

    this.searchForHero = function(name) {
      if(name.length < 4) {
        searchResults = [];
        $rootScope.$broadcast('searchResultsChanged', searchResults);
      } else {
        $rootScope.$broadcast('searching', true);
        HeroSearchFactory.search( name, function(result) {
          searchResults = result;
          angular.forEach(searchResults, function(result) {
            angular.forEach(service.heroes, function(hero) {
              if(result.name === hero.name) {
                console.log('Hero is already favorite', result);
                result.favorite = true;
              }
            });
          });
          console.log(searchResults);
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

    this.save = function(hero) {
      service.heroes.push(hero);
      Hero.save(hero);
      // $rootScope.$broadcast('heroesChanged', heroes);
    };

    this.delete = function(hero) {
      angular.forEach(service.heroes, function(serviceHero, index) {
        if(serviceHero.id === hero.id) {
          Hero.delete({id: serviceHero.id});
          service.heroes.splice(index, 1);
        }
      });
    };

    this.get = function(id) {
      return Hero.get({id: id});
    }

  });
