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

  it( 'should hold a searchResults array', function() {
    expect(MarvelSearchFactory.searchResults).toBeDefined();
    expect(MarvelSearchFactory.searchResults).toEqual(jasmine.any(Array));
  });

  it( 'should hold a search function', function() {
    expect(MarvelSearchFactory.search).toBeDefined();
    expect(MarvelSearchFactory.search).toEqual(jasmine.any(Function));
  });

});
