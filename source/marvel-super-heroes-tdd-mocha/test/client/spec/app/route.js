// test/client/app/route.js

suite('Testing App Routes:', function() {

  setup( function() {
    module( 'marvelSuperHeroesApp' );
  });

  // suite( 'Testing Root Route:', function() {

  test( 'should validate, that the root route "/" is present', function() {
    inject( function($route) {
      assert.isDefined($route.routes['/']);
    });
  });

  // });

});
