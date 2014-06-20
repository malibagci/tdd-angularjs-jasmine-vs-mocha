// app/scripts/directives/Hero.js

angular.module( 'app.directives' )
  .directive( 'hero', function() {
    return {
      template: 
        '<div>' + 
          '<img ng-src="{{hero.thumbnail.path}}.' +
            '{{hero.thumbnail.extension}}">' +
          '<button></button>' +
          // not favorite
          '<button ng-if="!hero.favorite" ng-click="addToFavorites(hero)">' +
            '<span class="glyphicon glyphicon-star-empty"></span>' +
            '<span ng-bind="\'Add to favorites\'"></span>' +
          '</button>' +
          '<div class="caption">' +
            '<h3 ng-bind="hero.name"></h3>' +
          '</div>' +
        '</div>',
      restrict: 'E'
    }
  });
