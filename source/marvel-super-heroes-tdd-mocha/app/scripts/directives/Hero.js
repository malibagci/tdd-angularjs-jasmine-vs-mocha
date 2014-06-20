// app/scripts/directives/Hero.js

angular.module( 'app.directives' )
  .directive( 'hero', function() {
    return {
      template: 
        '<div>' + 
          '<div class="caption">' +
            '<h3 ng-bind="hero.name"></h3>' +
          '</div>' +
        '</div>',
      restrict: 'E'
    }
  });
