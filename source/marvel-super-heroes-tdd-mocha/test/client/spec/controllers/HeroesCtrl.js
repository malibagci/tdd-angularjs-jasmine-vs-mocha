// test/client/spec/controllers/HeroesCtrl.js

suite( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl,
    scope,
    MarvelSearchFactory;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function($controller, $rootScope, _MarvelSearchFactory_) {
    scope = $rootScope.$new();
    MarvelSearchFactory = _MarvelSearchFactory_;
    HeroesCtrl = $controller('HeroesCtrl', {
      $scope: scope
    });
  }));

  test( 'if it is present', function() {
    assert.isDefined(HeroesCtrl);
  });

  test( 'if the scope holds a "searchResults" array', function() {
    assert.isDefined(scope.searchResults);
    assert.isArray(scope.searchResults);
  });

  test( 'if the scope holds a "isSearching" flag', function() {
    assert.isDefined(scope.isSearching);
    assert.isBoolean(scope.isSearching);
  });

  test( 'if the scope holds a "heroes" array', function() {
    assert.isDefined(scope.heroes);
    assert.isArray(scope.heroes);
  });

  test( 'if the scope holds a "addToFavorites" function', function() {
    assert.isDefined(scope.addToFavorites);
    assert.isFunction(scope.addToFavorites);
  });

  test( 'if a search in the factory affects the searchResults array', 
    function() {

      assert.lengthOf(scope.searchResults, 0);

      MarvelSearchFactory.searchResults.push({
        id: 1,
        name: 'Hulk',
        thumbnail: {
          path: 'path_to_thumbnail',
          extension: 'extension_of_thumbnail'
        }
      });

      assert.lengthOf(scope.searchResults, 1);

  });

});
