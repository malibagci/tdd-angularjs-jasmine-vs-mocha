// app/scripts/directives/Hero.js

angular.module( 'app.directives' )
  .directive( 'hero', function() {

    return {
      template: '<div>{{hero.name}}</div>',
      restrict: 'E'
    };

  });
