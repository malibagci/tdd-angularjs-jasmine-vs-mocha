// test/client/spec/controllers/NavbarCtrl.js

suite( 'Testing NavbarCtrl Controller:', function() {

  var NavbarCtrl;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function($controller) {
    NavbarCtrl = $controller('NavbarCtrl', {});
  }));

  test( 'if it is present', function() {
    assert.isDefined(NavbarCtrl);
  });

});
