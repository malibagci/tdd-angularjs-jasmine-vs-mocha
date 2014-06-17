// test/client/spec/controllers/HeroesCtrl.js

suite( 'Testing HeroesCtrl Controller:', function() {

  var HeroesCtrl,
    scope;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    HeroesCtrl = $controller('HeroesCtrl', {
      $scope: scope
    });
  }));

  test( 'if it is present', function() {
    assert.isDefined(HeroesCtrl);
  });

  test( 'if the scope holds a "searchResults" array', function() {
    assert.isDefined(scope.searchResults);
    assert.isArray(scope.searchResults);
  });

});
