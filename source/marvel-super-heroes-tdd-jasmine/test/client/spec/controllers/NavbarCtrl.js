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

  it( 'should hold a "searchString" string in its scope', function() {
    expect(scope.searchString).toBeDefined();
    expect(scope.searchString).toEqual(jasmine.any(String));
  });

});