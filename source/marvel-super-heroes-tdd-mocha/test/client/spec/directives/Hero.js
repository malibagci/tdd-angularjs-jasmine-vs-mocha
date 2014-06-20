// test/client/spec/directives/Hero.js

suite( 'Testing Hero Directive:', function() {

  var HeroDirective,
    $scope;
  setup( module( 'marvelSuperHeroesApp' ) );

  setup( inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();
    HeroDirective = $compile('<hero></hero>')($scope);

    $scope.hero = {
      name: 'Hulk',
      thumbnail: {
        path: 'path_to_thumbnail',
        extension: 'extension_of_thumbnail'
      }
    }

    $scope.$apply();
  }));

  test( 'if it contains at least one div element', function() {
    assert.include( HeroDirective.html(), 'div' );
  });

  test( 'if it contains the given name of a hero', function() {
    assert.include( HeroDirective.html(), 'Hulk' );
  });

  test( 'if it contains an image with the correct src', function() {
    assert.include( HeroDirective.html(), 
      'path_to_thumbnail.extension_of_thumbnail' );
  });

});
