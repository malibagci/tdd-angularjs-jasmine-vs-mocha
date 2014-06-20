// app/scripts/filters/Shortening.js

angular.module( 'app.filters' )
  .filter( 'Shortening', function() {
    return function(input, length) {
      return input.slice(0, length) + '...';
    };
  });
