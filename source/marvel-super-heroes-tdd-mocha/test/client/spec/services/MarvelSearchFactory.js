// test/client/spec/services/MarvelSearchFactory.js

'use strict';

suite( 'Testing MarvelSearchFactory Service:', function() {

  var MarvelSearchFactory;

  setup( module( 'marvelSuperHeroesApp' ) );

  setup( inject(function(_MarvelSearchFactory_) {
    MarvelSearchFactory = _MarvelSearchFactory_;
  }));

  test( 'if it is present', function() {
    assert.isDefined(MarvelSearchFactory);
  });

  test( 'if it holds a searchResults array', function() {
    assert.isDefined(MarvelSearchFactory.searchResults);
    assert.isArray(MarvelSearchFactory.searchResults);
  });

  test( 'if it holds a search function', function() {
    assert.isDefined(MarvelSearchFactory.search);
    assert.isFunction(MarvelSearchFactory.search);
  });

  test( 'if it holds a reset function', function() {
    assert.isDefined(MarvelSearchFactory.reset);
    assert.isFunction(MarvelSearchFactory.reset);
  });

  test( 'if it holds a isSearching flag', function() {
    assert.isDefined(MarvelSearchFactory.isSearching);
    assert.isBoolean(MarvelSearchFactory.isSearching);
  });

  suite( 'Searching:', function() {

    var $httpBackend,
      requestURI,
      response;

    setup( inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;

      var apikey = '28969060faef0943a7c866a98e465269';
      requestURI = 'http://gateway.marvel.com:80/v1/public/characters';
      requestURI += '?limit=20&nameStartsWith=Hulk&apikey=' + apikey;

      response = {
        data: {
          results: [
            {
              id: 1,
              name: 'Hulk',
              thumbnail: {
                path: 'path_to_thumbnail',
                extension: 'extension_of_thumbnail'
              }
            },
            {
              id: 2,
              name: 'Hulkling',
              thumbnail: {
                path: 'path_to_thumbnail',
                extension: 'extension_of_thumbnail'
              }
            }
          ]
        }
      };

      // initial GET request of HeroesFactory
      $httpBackend.expectGET('/api/heroes').respond('');
      $httpBackend.expectGET(requestURI).respond(response);
    }));

    test( 'if it makes a HTTP-GET request when search is called', function() {
      MarvelSearchFactory.search('Hulk');
      $httpBackend.flush();
    });

    test( 'if searching affects the searchResults array', function() {
      assert.lengthOf(MarvelSearchFactory.searchResults, 0);
      MarvelSearchFactory.search('Hulk');
      $httpBackend.flush();
      assert.lengthOf(MarvelSearchFactory.searchResults, 2);
    });

    test( 'if the result of a search has a name (String), an id (Number) and ' +
      'a thumbnail (Object)', function() {
        MarvelSearchFactory.search('Hulk');
        $httpBackend.flush();
        assert.isString(MarvelSearchFactory.searchResults[0].name);
        assert.isNumber(MarvelSearchFactory.searchResults[0].id);
        assert.isObject(MarvelSearchFactory.searchResults[0].thumbnail);
      });

    test( 'if the reset function affects the searchResults array', function() {
      MarvelSearchFactory.search('Hulk');
      $httpBackend.flush();
      assert.lengthOf(MarvelSearchFactory.searchResults, 2);
      MarvelSearchFactory.reset();
      assert.lengthOf(MarvelSearchFactory.searchResults, 0);
    });

    test( 'if the isSearching flag is set properly', function() {

      assert.notOk(MarvelSearchFactory.isSearching);
      MarvelSearchFactory.search('Hulk');
      assert.ok(MarvelSearchFactory.isSearching);
      $httpBackend.flush();
      assert.notOk(MarvelSearchFactory.isSearching);

    });

    test( 'if it appends a favorite flag to each search result', function() {

      MarvelSearchFactory.search('Hulk');
      $httpBackend.flush();

      assert.isDefined( MarvelSearchFactory.searchResults[0].favorite );
      assert.isBoolean( MarvelSearchFactory.searchResults[0].favorite );

    });

    test( 'if it sets the favorite flag to true when the hero is already in ' +
      'the heroes array in the HeroesFactory', function() {

        var HeroesFactory;

        // reconfigure httpBackend mock
        $httpBackend.resetExpectations();

        $httpBackend.expectGET('/api/heroes').respond('');
        $httpBackend.expectPOST('/api/heroes').respond('');
        $httpBackend.expectGET(requestURI).respond(response);

        inject( function(_HeroesFactory_) {
          HeroesFactory = _HeroesFactory_;

          HeroesFactory.save({
            id: 1,
            name: 'Hulk'
          });

          MarvelSearchFactory.search('Hulk');
          $httpBackend.flush();

          assert.ok(MarvelSearchFactory.searchResults[0].favorite);
          assert.notOk(MarvelSearchFactory.searchResults[1].favorite);

        });
      });

  });

});
