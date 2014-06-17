// app/scripts/services/MarvelSearchFactory.js

'use strict';

angular.module( 'app.services' )
  .factory( 'MarvelSearchFactory', function MarvelSearchFactory($http) {

    var factory = {};
    var apikey = "28969060faef0943a7c866a98e465269";

    factory.searchResults = [];
    factory.isSearching = false;

    factory.search = function(value) {

      factory.isSearching = true;

      var request = $http({
        method: 'GET',
        url: 'http://gateway.marvel.com:80/v1/public/characters?' +
          'limit=20' + '&nameStartsWith=' + value + '&apikey=' + apikey
      });

      request.success( function(data) {
        factory.isSearching = false;
        angular.forEach(data.data.results, function(result) {
          factory.searchResults.push(result);
        });
      });

    };

    factory.reset = function() {
      factory.searchResults.length = 0;
    };

    return factory;

  });
