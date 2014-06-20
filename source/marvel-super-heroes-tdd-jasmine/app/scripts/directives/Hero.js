// app/scripts/directives/Hero.js

angular.module( 'app.directives' )
  .directive( 'hero', function() {

    return {
      template:
        '<div class="caption">' +
          '<h3>{{hero.name}}</h3>' +
        '</div>',
      restrict: 'E'
    };

  });
