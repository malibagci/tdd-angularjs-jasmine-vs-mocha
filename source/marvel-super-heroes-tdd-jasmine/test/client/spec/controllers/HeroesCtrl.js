// test/client/spec/controllers/HeroesCtrl.js

describe( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl,
    scope;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject( function($controller, $rootScope) {
    scope = $rootScope.$new();
    HeroesCtrl = $controller( 'HeroesCtrl', {
      $scope: scope
    });
  }));

  it( 'should be present', function() {
    expect(HeroesCtrl).toBeDefined();
  });

  it( 'should hold a "searchResults" array in its scope', function() {
    expect(scope.searchResults).toBeDefined();
    expect(scope.searchResults).toEqual(jasmine.any(Array));
  });

});
