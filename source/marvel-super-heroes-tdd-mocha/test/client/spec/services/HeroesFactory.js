// test/client/spec/services/HeroesFactory.js

suite( 'Testing HeroesFactory Service:', function() {

  var HeroesFactory,
    hero,
    $httpBackend;

  setup( module('marvelSuperHeroesApp') );

  setup( function() {
    inject(function(_HeroesFactory_, _$httpBackend_) {
      HeroesFactory = _HeroesFactory_;
      $httpBackend = _$httpBackend_;
    });

    // initial request fires each test (but is only tested when flush is called)
    $httpBackend.expectGET('/api/heroes').respond('');

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

  test( 'if it makes an initial request to get the persistent heroes', 
    function() {
      $httpBackend.flush();
  });

  suite( 'Save a hero:', function() {

    setup( function() {
      $httpBackend.expectPOST('/api/heroes').respond('');
    });

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

    test( 'it it appends a favorite flag to a hero on save', function() {
      HeroesFactory.save(hero);
      $httpBackend.flush();

      assert.isDefined(HeroesFactory.heroes[0].favorite);
      assert.isBoolean(HeroesFactory.heroes[0].favorite);
    });

  });

  suite( 'Remove a hero', function() {

    setup( function() {
      $httpBackend.expectDELETE('/api/heroes/42').respond('');
    });

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

    test( 'if a remove triggers a HTTP-DELETE request', function() {
      HeroesFactory.remove(42);
      $httpBackend.flush();
    });

  });

});
