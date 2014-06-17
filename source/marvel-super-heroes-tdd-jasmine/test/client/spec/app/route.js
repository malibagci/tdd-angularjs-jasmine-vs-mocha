// test/client/spec/app/route.js

describe( 'Testing routes:', function() {

  beforeEach( function() {
    module( 'marvelSuperHeroesApp' );
  });

  describe( 'Testing root route:', function() {

    it( 'should have a working root path route', function() {
      inject( function($route) {
        expect($route.routes['/']).toBeDefined();
      });
    });
  
  });


});
