// test/client/spec/NavbarCtrl.js

describe( 'Testing NavbarCtrl Controller:', function() {

  var NavbarCtrl,
    scope;

  beforeEach( inject( function($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller( 'NavbarCtrl', {
      $scope: scope
    });
  }));

  it( 'should be presend', function() {
    expect(NavbarCtrl).toBeDefined();
  });

});
