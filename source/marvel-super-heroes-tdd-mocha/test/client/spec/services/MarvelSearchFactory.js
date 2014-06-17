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

  });

});