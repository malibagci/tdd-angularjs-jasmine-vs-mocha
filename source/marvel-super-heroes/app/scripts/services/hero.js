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
      search: function(heroName, callback) {
        var searchPromise;

        searchPromise = fetchHero('nameStartsWith', heroName);
        searchPromise.then( function(result) {
          callback(result);
        });

      }
    };
  });
