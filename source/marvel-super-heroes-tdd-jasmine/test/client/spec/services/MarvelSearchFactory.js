// test/client/spec/services/MarvelSearchFactory.js

describe( 'Testing MarvelSearchFactory Service:', function() {

  var MarvelSearchFactory;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject(function(_MarvelSearchFactory_) {
    MarvelSearchFactory = _MarvelSearchFactory_;
  }));

  it( 'should be present', function() {
    expect(MarvelSearchFactory).toBeDefined();
  });

  it( 'should hold a searchResults array', function() {
    expect(MarvelSearchFactory.searchResults).toBeDefined();
    expect(MarvelSearchFactory.searchResults).toEqual(jasmine.any(Array));
  });

  it( 'should hold a search function', function() {
    expect(MarvelSearchFactory.search).toBeDefined();
    expect(MarvelSearchFactory.search).toEqual(jasmine.any(Function));
  });

  it( 'should hold a reset function', function() {
    expect(MarvelSearchFactory.reset).toBeDefined();
    expect(MarvelSearchFactory.reset).toEqual(jasmine.any(Function));
  });

  it( 'should hold a isSearching flag', function() {
    expect(MarvelSearchFactory.isSearching).toBeDefined();
    expect(MarvelSearchFactory.isSearching).toEqual(jasmine.any(Boolean));
  });

  describe( 'Testing Marvel-API Search', function() {

    var $httpBackend,
      requestURI,
      reponse;

    beforeEach( inject(function(_$httpBackend_) {
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
      }

      $httpBackend.expectGET('/api/heroes').respond('');
      $httpBackend.expectGET(requestURI).respond(response);
    }));

    it( 'should make a GET Request if search is called', function() {

      MarvelSearchFactory.search('Hulk');
      $httpBackend.flush();

    });

    it( 'should push results of a GET Request in the searchResults array', 
      function() {

        expect(MarvelSearchFactory.searchResults.length).toEqual(0);
        MarvelSearchFactory.search('Hulk');
        $httpBackend.flush();
        expect(MarvelSearchFactory.searchResults.length).toEqual(2);

    });

    it( 'should have results with names, ids and thumbnails after searching',
      function() {

        MarvelSearchFactory.search('Hulk');
        $httpBackend.flush();
        expect(MarvelSearchFactory.searchResults[0].name)
          .toEqual(jasmine.any(String));
        expect(MarvelSearchFactory.searchResults[0].id)
          .toEqual(jasmine.any(Number));
        expect(MarvelSearchFactory.searchResults[0].thumbnail)
          .toEqual(jasmine.any(Object));
    });

    it( 'should reset the searchResults when reset has been called', 
      function() {

        MarvelSearchFactory.search('Hulk');
        $httpBackend.flush();
        expect(MarvelSearchFactory.searchResults.length).toEqual(2);
        MarvelSearchFactory.reset();
        expect(MarvelSearchFactory.searchResults.length).toEqual(0);

    });

    it( 'should set the isSearching flag to true, when search is called', 
      function() {

        expect(MarvelSearchFactory.isSearching).toBeFalsy();
        MarvelSearchFactory.search('Hulk');
        expect(MarvelSearchFactory.isSearching).toBeTruthy();

    });

    it( 'should set the isSearching flag to false, when the search is finished', 
      function() {
        
        expect(MarvelSearchFactory.isSearching).toBeFalsy();
        MarvelSearchFactory.search('Hulk');
        $httpBackend.flush();
        expect(MarvelSearchFactory.isSearching).toBeFalsy();

    });

    it( 'should have a favorite flag for each result in searchResults', 
      function() {
        MarvelSearchFactory.search('Hulk');
        $httpBackend.flush();

        expect(MarvelSearchFactory.searchResults[0].favorite).toBeDefined();
        expect(MarvelSearchFactory.searchResults[0].favorite).toEqual(
          jasmine.any(Boolean));
        expect(MarvelSearchFactory.searchResults[1].favorite).toBeDefined();
        expect(MarvelSearchFactory.searchResults[1].favorite).toEqual(
          jasmine.any(Boolean));
    });

    it( 'should set the favorite flag for each result to true if the results ' +
      'is already in the heroes array in HeroesFactory', function() {

        $httpBackend.resetExpectations();

        $httpBackend.expectGET('/api/heroes').respond('');
        $httpBackend.expectPOST('/api/heroes').respond('');
        $httpBackend.expectGET(requestURI).respond(response);

        var HeroesCtrl,
          HeroesFactory,
          scope;

        inject( function(_HeroesFactory_, $controller, $rootScope) {

          HeroesFactory = _HeroesFactory_;
          scope = $rootScope.$new();

          HeroesCtrl = $controller( 'HeroesCtrl', {
            $scope: scope,
            MarvelSearchFactory: MarvelSearchFactory,
            HeroesFactory: HeroesFactory
          });

          scope.addToFavorites({
            id: 1,
            name: 'Hulk'
          });

          MarvelSearchFactory.search('Hulk');

          $httpBackend.flush();

          expect( MarvelSearchFactory.searchResults[0].favorite ).toBeTruthy();
          expect( MarvelSearchFactory.searchResults[1].favorite ).toBeFalsy();

        });



    });

  });

});
