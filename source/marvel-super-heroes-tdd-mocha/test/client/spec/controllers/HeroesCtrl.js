// test/client/spec/controllers/HeroesCtrl.js

'use strict';

suite( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl,
    scope,
    MarvelSearchFactory,
    HeroesFactory,
    hero;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function($controller, $rootScope, _MarvelSearchFactory_,
    _HeroesFactory_) {
      scope = $rootScope.$new();
      MarvelSearchFactory = _MarvelSearchFactory_;
      HeroesFactory = _HeroesFactory_;

      HeroesCtrl = $controller('HeroesCtrl', {
        $scope: scope,
        MarvelSearchFactory: MarvelSearchFactory,
        HeroesFactory: HeroesFactory
      });

      hero = {
        id: 1,
        name: 'Hulk',
        thumbnail: {
          path: 'path_to_thumbnail',
          extension: 'extension_of_thumbnail'
        }
      };
    }));

  test( 'if it is present', function() {
    assert.isDefined(HeroesCtrl);
  });

  test( 'if the scope holds a "searchResults" array', function() {
    assert.isDefined(scope.searchResults);
    assert.isArray(scope.searchResults);
  });

  test( 'if the scope holds a "isSearching" flag', function() {
    assert.isDefined(scope.isSearching);
    assert.isBoolean(scope.isSearching);
  });

  test( 'if the scope holds a "heroes" array', function() {
    assert.isDefined(scope.heroes);
    assert.isArray(scope.heroes);
  });

  test( 'if a search in the factory affects the searchResults array',
    function() {

      assert.lengthOf(scope.searchResults, 0);
      MarvelSearchFactory.searchResults.push(hero);
      assert.lengthOf(scope.searchResults, 1);

    });

  test( 'if a change of the heroes array in the HeroesFactory affects the ' +
    'heroes array in the HeroesCtrl', function() {

      assert.lengthOf(scope.heroes, 0);
      HeroesFactory.heroes.push(hero);
      assert.lengthOf(scope.heroes, 1);

    });

  suite('Testing addToFavorites', function() {

    var saveStub;
    setup(function() {
      saveStub = sinon.stub(HeroesFactory, 'save');
    });

    test( 'if the scope holds a "addToFavorites" function', function() {
      assert.isDefined(scope.addToFavorites);
      assert.isFunction(scope.addToFavorites);
    });

    test( 'if addToFavorites calls the save function of the HeroesFactory',
      function() {
        scope.addToFavorites();
        assert.ok(saveStub.called);
      });

    test( 'if addToFavorites calls the save function of the HeroesFactory ' +
      'with a hero argument', function() {
        scope.addToFavorites(hero);
        assert.ok(saveStub.calledWith(hero));
      });

    test( 'if addToFavorites calls reset of MarvelSearchFactory', function() {
      var resetStub = sinon.stub(MarvelSearchFactory, 'reset');
      scope.addToFavorites();
      assert.ok(resetStub.called);
    });

  });


  suite('Testing removeFromFavorites', function() {

    var removeStub;
    setup( function() {
      removeStub = sinon.stub(HeroesFactory, 'remove');
    });

    test( 'if the scope holds a "removeFromFavorites" function', function() {
      assert.isDefined(scope.addToFavorites);
      assert.isFunction(scope.addToFavorites);
    });

    test( 'if removeFromFavorites calls the remove function of the ' +
      'HeroesFactory', function() {
        scope.removeFromFavorites();
        assert.ok(removeStub.called);
      });

    test( 'if removeFromFavorites calls the remove function of the ' +
      'HeroesFactory with a given id', function() {
        scope.removeFromFavorites(1);
        assert.ok(removeStub.calledWith(1));
      });

  });

});
