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

  test( 'if it holds a heroes array', function() {
    assert.isDefined(HeroesFactory.heroes);
    assert.isArray(HeroesFactory.heroes);
  });

  suite( 'Save a hero:', function() {

    test( 'if it holds a save function', function() {
      assert.isDefined(HeroesFactory.save);
      assert.isFunction(HeroesFactory.save);
    });

  });

});
