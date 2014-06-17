// test/client/spec/services/MarvelSearchFactory.js

describe( 'Testing MarvelSearchFactory Service:', function() {

  var MarvelSearchFactory;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject(function(_MarvelSearchFactory_) {
    MarvelSearchFactory = _MarvelSearchFactory_;
  }));

  it( 'should be present', function() {
    expect(MarvelSearchFactory).toBeDefined();
  });

});
