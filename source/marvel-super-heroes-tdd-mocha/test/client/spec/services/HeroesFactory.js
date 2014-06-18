// test/client/spec/services/HeroesFactory.js

suite( 'Testing HeroesFactory Service:', function() {

  var HeroesFactory;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function(_HeroesFactory_) {
    HeroesFactory = _HeroesFactory_;
  }));

  test( 'if it is present', function() {
    assert.isDefined(HeroesFactory);
  });

});
