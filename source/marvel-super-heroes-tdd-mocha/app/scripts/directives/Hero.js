// app/scripts/directives/Hero.js

angular.module( 'app.directives' )
  .directive( 'hero', function() {
    return {
      template: 
        '<div>' + 
          '<img ng-src="{{hero.thumbnail.path}}.' +
            '{{hero.thumbnail.extension}}">' +
          '<button></button>' +
          '<div class="caption">' +
            '<h3 ng-bind="hero.name"></h3>' +
          '</div>' +
        '</div>',
      restrict: 'E'
    }
  });
