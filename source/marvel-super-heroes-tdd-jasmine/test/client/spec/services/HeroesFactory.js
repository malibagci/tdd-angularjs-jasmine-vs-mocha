// test/client/spec/services/HeroesFactory.js

describe( 'Testing HeroesFactory Service', function() {

  beforeEach( module('marvelSuperHeroesApp') );

  var HeroesFactory;

  beforeEach( inject(function(_HeroesFactory_) {
    HeroesFactory = _HeroesFactory_;
  }));

  it( 'should be present', function() {
    expect(HeroesFactory).toBeDefined();
  });

});
