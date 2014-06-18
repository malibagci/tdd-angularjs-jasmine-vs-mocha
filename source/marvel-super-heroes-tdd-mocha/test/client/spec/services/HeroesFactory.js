// test/client/spec/services/HeroesFactory.js

suite( 'Testing HeroesFactory Service:', function() {

  var HeroesFactory,
    hero;

  setup( module('marvelSuperHeroesApp') );

  setup( function() {
    inject(function(_HeroesFactory_) {
      HeroesFactory = _HeroesFactory_;
    });

    hero = {
      id: 42,
      name: 'Hulk',
      thumbnail: {
        path: 'path_to_thumbnail',
        extension: 'extension_of_thumbnail'
      }
    }
  });

  test( 'if it is present', function() {
    assert.isDefined(HeroesFactory);
  });

  test( 'if it holds a heroes array', function() {
    assert.isDefined(HeroesFactory.heroes);
    assert.isArray(HeroesFactory.heroes);
  });

  suite( 'Save a hero:', function() {

    var $httpBackend;

    setup( inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectPOST('/api/heroes').respond('');
    }));

    test( 'if it holds a save function', function() {
      assert.isDefined(HeroesFactory.save);
      assert.isFunction(HeroesFactory.save);
    });

    test( 'if a save updates the heroes array', function() {

      assert.lengthOf(HeroesFactory.heroes, 0);

      HeroesFactory.save(hero);

      assert.lengthOf(HeroesFactory.heroes, 1);

    });

    test( 'if a save triggers a HTTP-POST request', function() {
      HeroesFactory.save(hero);
      $httpBackend.flush();
    });

  });

  suite( 'Remove a hero', function() {

    test( 'if it holds a remove function', function() {
      assert.isDefined(HeroesFactory.remove);
      assert.isFunction(HeroesFactory.remove);
    });

    test( 'if it removes a hero by a given id', function() {

      HeroesFactory.save(hero);

      assert.lengthOf(HeroesFactory.heroes, 1);
      HeroesFactory.remove(42);
      assert.lengthOf(HeroesFactory.heroes, 0);

    });

  });

});
