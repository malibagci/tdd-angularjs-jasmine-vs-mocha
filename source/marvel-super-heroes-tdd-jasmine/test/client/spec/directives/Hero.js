// test/client/spec/directives/Hero.js

describe( 'Testing Hero Directive:', function() {

  var $compile,
    $scope,
    hero;

  beforeEach( module( 'marvelSuperHeroesApp' ) );

  beforeEach( inject( function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    $scope.hero = {
      name: 'Hulk',
      thumbnail: {
        path: 'path_to_thumbnail',
        extension: 'extension_of_thumbnail'
      }
    };

    hero = $compile( '<hero></hero>' )($scope);
    $scope.$apply();
  }));

  it( 'should return at least one html div', function() {
    expect( hero.html() ).toContain( 'div' );
  });

  it( 'should contain the name of a hero', function() {
    expect( hero.html() ).toContain( 'Hulk' );
  });

  it( 'should contain an image with the src of hero.thumbnail', function() {
    expect( hero.html() ).toContain( 
      'src="path_to_thumbnail.extension_of_thumbnail"' );
  });

  it( 'should contain a button to save/delete a hero', function() {
    expect( hero.html() ).toContain('<button>');
  });

});
