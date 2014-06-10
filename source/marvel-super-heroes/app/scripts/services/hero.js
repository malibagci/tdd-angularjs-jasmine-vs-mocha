'use strict';

angular.module('marvelSuperHeroesApp')
  .factory('HeroFactory', function ($http, $q) {
    // Service logic
    // ...

    var apikey = '2c2005fe9fbd2c427f438b7f39591276';

    var fetchHero = function(searchMethod, searchVal) {

      var deferred = $q.defer();
      var fetch = $http(
        {
          method: 'GET',
          url: 'http://gateway.marvel.com:80/v1/public/characters?' +
                  'limit=20&' +
                  searchMethod + '=' + searchVal + '&' +
                  'apikey=' + apikey
        });

      fetch.success( function(data) {
        deferred.resolve(data.data.results);
      });

      fetch.error( function(data) {
        deferred.resolve(data);
      });

      return deferred.promise;
    };

    // Public API here
    return {
      init: function (callback) {
        // init heroes list
        var favoriteHeroes = ['Thor', 'Wolverine', 'Magneto', 'Storm',
          'Hulk', 'Iron Man', 'Spider-Man'];
        var heroPromise;
        var heroes = [];

        angular.forEach( favoriteHeroes, function(heroName) {
          heroPromise = fetchHero('name', heroName);
          heroPromise.then( function(result) {
            heroes.push(result['0']);
            callback(heroes);
          });
        });
      },
      search: function(heroName, callback) {
        var searchPromise;
        var searchResults = [];

        searchPromise = fetchHero("nameStartsWith", heroName);
        searchPromise.then( function(result) {
          callback(result);
        });

      }
    };
  });
