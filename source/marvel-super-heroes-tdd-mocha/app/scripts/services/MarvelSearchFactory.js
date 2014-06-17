// app/scripts/services/MarvelSearchFactory.js

angular.module( 'app.services' )
  .factory( 'MarvelSearchFactory', function() {
    var factory = {};

    factory.searchResults = [];

    factory.search = function() {};

    return factory;
  });