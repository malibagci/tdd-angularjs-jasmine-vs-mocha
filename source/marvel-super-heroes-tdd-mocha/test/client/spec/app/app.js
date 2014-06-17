suite( 'Testing: App Module', function() {

  var module;

  setup( function() {
    module = angular.module( 'marvelSuperHeroesApp' );
  });

  test( 'should validate that the module "marvelSuperHeroesApp" is present', 
    function() {

      assert.isDefined(module);

  });

});