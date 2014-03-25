var ThesisServices = angular.module('ThesisApp.Services', []);

ThesisServices.service("TestService", function() {
  console.log("TestService here.");
});

ThesisServices.factory("TestFactory", function() {
  console.log("TestFactory here.");
});

ThesisServices.factory("$heroesFactory", [
  "$http", 
  "$templateCache",
  "$q",
  function($http, $templateCache, $q) {

    var $heroes = [];
    var $heroSearchResults = [];

    fetchHero = function(searchMethod, searchVal) {


      var apikey = "2c2005fe9fbd2c427f438b7f39591276";
      var deferred = $q.defer();

      var fetch = $http(
        {
          method: "GET", 
          url: "http://gateway.marvel.com:80/v1/public/characters?" +
                  "limit=20&" +
                  searchMethod + "=" + searchVal + "&" +
                  "apikey=" + apikey,
          cache: $templateCache
        });

      fetch.success( function(data, status) {        
        deferred.resolve(data.data.results);
      });

      fetch.error( function(data, status) {
        deferred.resolve(data);
      });

      return deferred.promise;
    }

    return {
      searchForHero: function(searchVal, callback) {
        var heroPromise = fetchHero("nameStartsWith", searchVal);
        heroPromise.then( function(result) {
          $heroSearchResults = result;
          callback();
        });
      },
      addHeroToCollection: function(searchVal, callback) {
        var heroPromise = fetchHero("name", searchVal);
        heroPromise.then( function(result) {
          angular.forEach(result, function(val, key) {
            $heroes.push(val);
          });
          callback();
        });
      },
      getHeroes: function() {
        return $heroes;
      },
      getHeroSearchResults: function() {
        return $heroSearchResults;
      },
      get: function() {

      }
    };
  }
]);
