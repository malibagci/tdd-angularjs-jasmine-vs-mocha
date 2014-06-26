// test/client/spec/services/HeroesFactory.js

'use strict';

describe( 'Testing HeroesFactory Service', function() {

  beforeEach( module('marvelSuperHeroesApp') );

  var HeroesFactory,
    $httpBackend;

  beforeEach( inject(function(_HeroesFactory_, _$httpBackend_) {
    HeroesFactory = _HeroesFactory_;
    $httpBackend = _$httpBackend_;

    // initial request fires each test (but is only tested when flush is called)
    $httpBackend.expectGET('/api/heroes').respond('');
  }));

  it( 'should be present', function() {
    expect(HeroesFactory).toBeDefined();
  });

  it( 'should hold a "heroes" array', function() {
    expect(HeroesFactory.heroes).toBeDefined();
    expect(HeroesFactory.heroes).toEqual(jasmine.any(Array));
  });

  it( 'should make an initial request to /api/heroes', function() {
    $httpBackend.flush();
  });

  describe('Save a hero:', function() {

    var hero;

    beforeEach( function() {
      hero = {
        id: 1,
        name: 'Hulk',
        thumbnail: {
          path: 'path_to_thumbnail',
          extension: 'extension_of_thumbnail'
        }
      };
    });

    it( 'should hold a "save" function', function() {
      expect(HeroesFactory.save).toBeDefined();
      expect(HeroesFactory.save).toEqual(jasmine.any(Function));
    });

    it( 'should push a given hero when "save" is called', function() {
      expect(HeroesFactory.heroes.length).toEqual(0);
      HeroesFactory.save(hero);
      expect(HeroesFactory.heroes.length).toEqual(1);
    });

    it( 'should make a POST Request when save is called', function() {
      $httpBackend.expectPOST('/api/heroes').respond('');
      HeroesFactory.save(hero);
      $httpBackend.flush();
    });

    it( 'should add a "favorite" flag to a hero when s_he is saved',
      function() {
        HeroesFactory.save(hero);
        expect(HeroesFactory.heroes[0].favorite).toBeDefined();
        expect(HeroesFactory.heroes[0].favorite).toEqual(jasmine.any(Boolean));
      });

  });

  describe( 'Remove a hero', function() {

    it( 'should hold a "save" function', function() {
      expect(HeroesFactory.remove).toBeDefined();
      expect(HeroesFactory.remove).toEqual(jasmine.any(Function));
    });

    it( 'should remove an entry of the heroes array with a given hero id ' +
      '(not array index)', function() {

        HeroesFactory.save({
          id: 1,
          name: 'Hulk',
          thumbnail: {
            path: 'path_to_thumbnail',
            extension: 'extension_of_thumbnail'
          }
        });

        expect(HeroesFactory.heroes.length).toEqual(1);
        HeroesFactory.remove(1);
        expect(HeroesFactory.heroes.length).toEqual(0);

      });

    it( 'should make a DELETE Request when remove is called', function() {
      $httpBackend.expectDELETE('/api/heroes/1').respond('');
      HeroesFactory.remove(1);
      $httpBackend.flush();
    });

  });

});
