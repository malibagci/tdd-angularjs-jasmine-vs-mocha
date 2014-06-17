// app/scripts/services/MarvelSearchFactory.js

'use strict';

angular.module( 'app.services' )
  .factory( 'MarvelSearchFactory', function MarvelSearchFactory($http) {

    var factory = {};
    var apikey = "28969060faef0943a7c866a98e465269";

    factory.searchResults = [];
    factory.search = function() {

      var fetch = $http({
        method: 'GET',
        url: 'http://gateway.marvel.com:80/v1/public/characters?' +
          'limit=20' + '&nameStartsWith=Hulk' + '&apikey=' + apikey
      });

    };

    return factory;

  });
