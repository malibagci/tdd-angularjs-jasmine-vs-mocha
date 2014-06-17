// test/client/spec/controllers/NavbarCtrl.js

describe( 'Testing NavbarCtrl Controller:', function() {

  var NavbarCtrl,
    scope,
    MarvelSearchFactory;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject( function($controller, $rootScope, _MarvelSearchFactory_) {
    scope = $rootScope.$new();
    MarvelSearchFactory = _MarvelSearchFactory_;
    NavbarCtrl = $controller( 'NavbarCtrl', {
      $scope: scope
    });
  }));

  it( 'should be present', function() {
    expect(NavbarCtrl).toBeDefined();
  });

  it( 'should hold a "searchString" string in its scope', function() {
    expect(scope.searchString).toBeDefined();
    expect(scope.searchString).toEqual(jasmine.any(String));
  });

  it( 'should call the "search" function from MarvelSearchFactory, ' + 
    'when the searchString changes', function() {

      spyOn(MarvelSearchFactory, 'search');

      scope.searchString = "Hulk";
      scope.$apply();

      expect(MarvelSearchFactory.search).toHaveBeenCalled();

  });

});
