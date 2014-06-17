// test/client/spec/controllers/HeroesCtrl.js

describe( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl,
    scope,
    MarvelSearchFactory;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject( function($controller, $rootScope, _MarvelSearchFactory_) {
    scope = $rootScope.$new();
    MarvelSearchFactory = _MarvelSearchFactory_;
    HeroesCtrl = $controller( 'HeroesCtrl', {
      $scope: scope,
      MarvelSearchFactory: MarvelSearchFactory
    });
  }));

  it( 'should be present', function() {
    expect(HeroesCtrl).toBeDefined();
  });

  it( 'should hold a "searchResults" array in its scope', function() {
    expect(scope.searchResults).toBeDefined();
    expect(scope.searchResults).toEqual(jasmine.any(Array));
  });

  it( 'should hold a "isSearching" flag in its scope', function() {
    expect(scope.isSearching).toBeDefined();
    expect(scope.isSearching).toEqual(jasmine.any(Boolean));
  });

  it( 'should hold a "heroes" array in its scope', function() {
    expect(scope.heroes).toBeDefined();
    expect(scope.heroes).toEqual(jasmine.any(Array));
  });

  it( 'should update the searchResults array, when the searchResults of the ' +
    'MarvelSearchFactory has been changed', function() {

      expect(scope.searchResults.length).toEqual(0);

      MarvelSearchFactory.searchResults.push({
        id: 1,
        name: 'Hulk',
        thumbnail: {
          path: 'path_to_thumbnail',
          extension: 'extension_of_thumbnail'
        }
      });

      expect(scope.searchResults.length).toEqual(1);

  });

  describe( 'Add a hero to favorites:', function() {

    it( 'should have a addToFavorites function', function() {
      expect(scope.addToFavorites).toBeDefined();
      expect(scope.addToFavorites).toEqual(jasmine.any(Function));
    });

  });

});
