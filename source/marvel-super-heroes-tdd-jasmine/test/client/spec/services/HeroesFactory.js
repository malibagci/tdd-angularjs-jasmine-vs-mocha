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

  it( 'should hold a "heroes" array', function() {
    expect(HeroesFactory.heroes).toBeDefined();
    expect(HeroesFactory.heroes).toEqual(jasmine.any(Array));
  });

  describe('Save a hero:', function() {

    it( 'should hold a "save" function', function() {
      expect(HeroesFactory.save).toBeDefined();
      expect(HeroesFactory.save).toEqual(jasmine.any(Function));
    });

    it( 'should push a given hero when "save" is called', function() {

      expect(HeroesFactory.heroes.length).toEqual(0);

      HeroesFactory.save({
        id: 1,
          name: 'Hulk',
          thumbnail: {
            path: 'path_to_thumbnail',
            extension: 'extension_of_thumbnail'
          }
      });

      expect(HeroesFactory.heroes.length).toEqual(1);

    });

  });

});
