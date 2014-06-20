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
  }));

  it( 'should return at least one html div', function() {
    $scope.$apply();
    expect( hero.html() ).toContain( 'div' );
  });

  it( 'should contain the name of a hero', function() {
    $scope.$apply();
    expect( hero.html() ).toContain( 'Hulk' );
  });

  it( 'should contain an image with the src of hero.thumbnail', function() {
    $scope.$apply();
    expect( hero.html() ).toContain( 
      'src="path_to_thumbnail.extension_of_thumbnail"' );
  });

  it( 'should contain a button to save/delete a hero', function() {
    $scope.$apply();
    expect( hero.html() ).toContain('<button');
  });

  it( 'should contain a button to save a hero when s_he is not favorite', 
    function() {
      $scope.hero.favorite = false;
      $scope.$apply();

      expect( hero.html() ).toContain('addToFavorites(hero)');
  });

  it( 'should contain a button to remove a hero when s_he is favorite', 
    function() {
      $scope.hero.favorite = true;
      $scope.$apply();

      expect( hero.html() ).toContain('removeFromFavorites(hero.id)');
  });

});
