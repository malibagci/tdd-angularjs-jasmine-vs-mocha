// test/client/spec/controllers/NavbarCtrl.js

suite( 'Testing NavbarCtrl Controller:', function() {

  var NavbarCtrl,
    scope;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope
    });
  }));

  test( 'if it is present', function() {
    assert.isDefined(NavbarCtrl);
  });

  test( 'if the scope holds a "searchString" string', function() {
    assert.isDefined(scope.searchString);
    assert.isString(scope.searchString);
  });

});
