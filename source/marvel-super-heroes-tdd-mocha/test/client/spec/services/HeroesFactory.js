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

    test( 'if a save updates the heroes array', function() {

      assert.lengthOf(HeroesFactory.heroes, 0);

      HeroesFactory.save({
        id: 1,
          name: 'Hulk',
          thumbnail: {
            path: 'path_to_thumbnail',
            extension: 'extension_of_thumbnail'
          }
       });

      assert.lengthOf(HeroesFactory.heroes, 1);

    });

  });

});
