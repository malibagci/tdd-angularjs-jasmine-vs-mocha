'use strict';

angular.module('marvelSuperHeroesApp')
  .factory('HeroSearchFactory', function HeroSearchFactory($http, $q) {
    // Service logic
    // ...

    var apikey = '28969060faef0943a7c866a98e465269';

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

    var fetchItem = function(resourceURI) {
      var deferred = $q.defer();
      var fetch = $http(
        {
          method: 'GET',
          url: resourceURI + '?apikey=' + apikey
        }
      );

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

      },

      getItemByResourceURI: function(resourceURI, callback) {
        var searchPromise;

        searchPromise = fetchItem(resourceURI);
        searchPromise.then( function(result) {
          callback(result['0']);
        });
      }
    };
  });
