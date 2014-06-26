// test/client/spec/controllers/HeroesCtrl.js

'use strict';

describe( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl,
    scope,
    MarvelSearchFactory,
    HeroesFactory;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject( function($controller, $rootScope, _MarvelSearchFactory_,
    _HeroesFactory_) {

      scope = $rootScope.$new();
      MarvelSearchFactory = _MarvelSearchFactory_;
      HeroesFactory = _HeroesFactory_;

      HeroesCtrl = $controller( 'HeroesCtrl', {
        $scope: scope,
        MarvelSearchFactory: MarvelSearchFactory,
        HeroesFactory: HeroesFactory
      });

    }));

  it( 'should be present', function() {
    expect(HeroesCtrl).toBeDefined();
  });

  it( 'should hold a "searchResults" array in its scope', function() {
    expect(scope.searchResults).toBeDefined();
    expect(scope.searchResults).toEqual(jasmine.any(Array));
  });

  it( 'should hold a "isSearching" flag in its scope', function() {
    expect(scope.isSearching).toBeDefined();
    expect(scope.isSearching).toEqual(jasmine.any(Boolean));
  });

  it( 'should hold a "heroes" array in its scope', function() {
    expect(scope.heroes).toBeDefined();
    expect(scope.heroes).toEqual(jasmine.any(Array));
  });

  it( 'should update the searchResults array, when the searchResults of the ' +
    'MarvelSearchFactory has been changed', function() {

      expect(scope.searchResults.length).toEqual(0);

      MarvelSearchFactory.searchResults.push({
        id: 1,
        name: 'Hulk',
        thumbnail: {
          path: 'path_to_thumbnail',
          extension: 'extension_of_thumbnail'
        }
      });

      expect(scope.searchResults.length).toEqual(1);

    });

  describe( 'Add a hero to favorites:', function() {

    it( 'should have a addToFavorites function', function() {
      expect(scope.addToFavorites).toBeDefined();
      expect(scope.addToFavorites).toEqual(jasmine.any(Function));
    });

    it( 'should update the heroes array, when the heroes array of the ' +
      'HeroesFactory service has been changed', function() {

        expect(scope.heroes.length).toEqual(0);
        
        HeroesFactory.heroes.push({
          id: 1,
          name: 'Hulk',
          thumbnail: {
            path: 'path_to_thumbnail',
            extension: 'extension_of_thumbnail'
          }
        });

        expect(scope.heroes.length).toEqual(1);

      });

    it( 'should call the save function of the HeroesFactory on addToFavorites',
      function() {

        spyOn(HeroesFactory, 'save');
        scope.addToFavorites();

        expect(HeroesFactory.save).toHaveBeenCalled();

      });

    it( 'should pass an object as argument on addToFavorites to the save ' +
      'function of the HeroesFactory', function() {

        spyOn(HeroesFactory, 'save');

        var hero = {
          id: 1,
          name: 'Hulk',
          thumbnail: {
            path: 'path_to_thumbnail',
            extension: 'extension_of_thumbnail'
          }
        };

        scope.addToFavorites(hero);

        expect(HeroesFactory.save).toHaveBeenCalledWith(hero);

      });

  });

});
