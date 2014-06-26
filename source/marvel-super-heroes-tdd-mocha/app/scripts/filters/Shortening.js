// app/scripts/filters/Shortening.js

'use strict';

angular.module( 'app.filters' )
  .filter( 'Shortening', function() {
    return function(input, length) {
      var postFix = '';
      if(input.length > length) {
        postFix = '...';
      }
      return input.slice(0, length) + postFix;
    };
  });
