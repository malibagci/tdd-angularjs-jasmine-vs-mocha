suite( 'Testing: App Module', function() {

  var module;
  var deps;

  var hasModule = function(moduleName) {
    return deps.indexOf(moduleName) >= 0;
  }

  setup( function() {
    module = angular.module( 'marvelSuperHeroesApp' );
    deps = module.value('marvelSuperHeroesApp').requires;
  });

  test( 'if the module "marvelSuperHeroesApp" is present', 
    function() {
      assert.isDefined(module);
  });

  test( 'if the app has a registered dependency to "ngRoute"', function() {
    assert.ok(hasModule('ngRoute'));
  });

});