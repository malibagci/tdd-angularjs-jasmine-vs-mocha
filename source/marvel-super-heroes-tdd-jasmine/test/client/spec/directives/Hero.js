// test/client/spec/directives/Hero.js

describe( 'Testing Hero Directive:', function() {

  var $compile,
    $scope,
    hero;

  beforeEach( module( 'marvelSuperHeroesApp' ) );

  beforeEach( inject( function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $scope.hero = {};

    hero = $compile( '<hero></hero>' )($scope);
  }));

  it( 'should return at least one html div', function() {
    expect( hero.html() ).toContain( 'div' );
  });

  it( 'should contain the name of a hero', function() {
    $scope.hero.name = 'Hulk';
    $scope.$apply();
    expect( hero.html() ).toContain( 'Hulk' );
  });

});
