// test/client/spec/controllers/HeroesCtrl.js

suite( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function($controller) {
    HeroesCtrl = $controller('HeroesCtrl', {});
  }));

  test( 'if it is present', function() {
    assert.isDefined(HeroesCtrl);
  });

});
