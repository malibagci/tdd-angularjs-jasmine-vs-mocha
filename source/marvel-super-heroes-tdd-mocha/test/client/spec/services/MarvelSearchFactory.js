// test/client/spec/services/MarvelSearchFactory.js

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

  suite( 'Searching:', function() {

    var $httpBackend;

    setup( inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;

      var apikey = '28969060faef0943a7c866a98e465269';
      var requestURI = 'http://gateway.marvel.com:80/v1/public/characters';
      requestURI += '?limit=20&nameStartsWith=Hulk&apikey=' + apikey;

      $httpBackend.expectGET(requestURI).respond({
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
      });
    }));

    test( 'if it makes a HTTP-GET request when search is called', function() {
      MarvelSearchFactory.search();
      $httpBackend.flush();
    });

    test( 'if searching affects the searchResults array', function() {
      assert.lengthOf(MarvelSearchFactory.searchResults, 0);
      MarvelSearchFactory.search();
      $httpBackend.flush();
      assert.lengthOf(MarvelSearchFactory.searchResults, 2);
    });

    test( 'if the result of a search has a name (String), an id (Number) and ' +
      'a thumbnail (Object)', function() {
        MarvelSearchFactory.search();
        $httpBackend.flush();
        assert.isString(MarvelSearchFactory.searchResults[0].name);
        assert.isNumber(MarvelSearchFactory.searchResults[0].id);
        assert.isObject(MarvelSearchFactory.searchResults[0].thumbnail);
    });

  });

});
