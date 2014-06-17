// test/client/spec/NavbarCtrl.js

describe( 'Testing NavbarCtrl Controller:', function() {

  var NavbarCtrl,
    scope;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject( function($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller( 'NavbarCtrl', {
      $scope: scope
    });
  }));

  it( 'should be presend', function() {
    expect(NavbarCtrl).toBeDefined();
  });

  it( 'should hold a "searchResults" array in its scope', function() {
    expect(scope.searchResults).toBeDefined();
    expect(scope.searchResults).toEqual(jasmine.any(Array));
  });

});
