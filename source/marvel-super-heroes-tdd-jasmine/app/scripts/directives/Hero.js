// app/scripts/directives/Hero.js

angular.module( 'app.directives' )
  .directive( 'hero', function() {

    return {
      template:
        '<div class="thumbnail">' +
          '<img ng-src="{{hero.thumbnail.path}}.' +
            '{{hero.thumbnail.extension}}"></img>' +
          '<button></button>' +
          '<div class="caption">' +
            '<h3>{{hero.name}}</h3>' +
          '</div>' +
        '</div>',
      restrict: 'E'
    };

  });
