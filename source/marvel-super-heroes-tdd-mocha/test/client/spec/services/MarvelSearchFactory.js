// test/client/spec/services/MarvelSearchFactory.js

suite( 'Testing MarvelSearchFactory Service:', function() {

  var MarvelSearchFactory;

  setup( module( 'marvelSuperHeroesApp' ) );

  setup( inject(function(_MarvelSearchFactory_) {
    MarvelSearchFactory = _MarvelSearchFactory_;
  }));

  test( 'if it is present', function() {
    assert.isDefined(MarvelSearchFactory);
  });

  test( 'if it holds a searchResults array', function() {
    assert.isDefined(MarvelSearchFactory.searchResults);
    assert.isArray(MarvelSearchFactory.searchResults);
  });

});
