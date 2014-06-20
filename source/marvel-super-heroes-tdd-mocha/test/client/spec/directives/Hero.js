// test/client/spec/directives/Hero.js

suite( 'Testing Hero Directive:', function() {

  var HeroDirective,
    $scope;
  setup( module( 'marvelSuperHeroesApp' ) );

  setup( inject(function($compile, $rootScope) {
    $scope = $rootScope.$new();
    HeroDirective = $compile('<hero></hero>')($scope);
  }));

  test( 'if it contains at least one div element', function() {
    assert.include( HeroDirective.html(), 'div' );
  });

});
