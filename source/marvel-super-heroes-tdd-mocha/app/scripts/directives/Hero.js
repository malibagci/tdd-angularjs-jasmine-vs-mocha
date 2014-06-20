// app/scripts/directives/Hero.js

angular.module( 'app.directives' )
  .directive( 'hero', function() {
    return {
      template: 
        '<div class="thumbnail" ng-class="{\'favorite\':hero.favorite}">' + 
          '<img ng-src="{{hero.thumbnail.path}}.' +
            '{{hero.thumbnail.extension}}">' +
          // favorite
          '<button ng-if="hero.favorite" class="" ' +
            'ng-click="removeFromFavorites(hero.id)">' +
              '<span class="glyphicon glyphicon-star"></span>' +
              '<span ng-bind="\'Remove from favorites\'"></span>' +
          '</button>' +
          // not favorite
          '<button ng-if="!hero.favorite" class="" ' +
            'ng-click="addToFavorites(hero)">' +
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
