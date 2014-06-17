// test/client/spec/controllers/HeroesCtrl.js

describe( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl,
    scope;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    HeroesCtrl = $controller( 'HeroesCtrl', {
      $scope: scope
    });
  }));

  it( 'should be present', function() {
    expect(HeroesCtrl).toBeDefined();
  });

});
