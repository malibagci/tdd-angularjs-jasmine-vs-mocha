// test/client/spec/app/route.js

'use strict';

suite('Testing App Routes:', function() {

  var $route;

  setup( function() {
    module( 'marvelSuperHeroesApp' );
    inject( function(_$route_) {
      $route = _$route_;
    });
  });

  suite( 'Testing Root Route:', function() {

    test( 'if the root route "/" is present', function() {
      assert.isDefined($route.routes['/']);
    });

    test( 'if the root route has the correct templateUrl ("partials/heroes")',
      function() {
        assert.equal($route.routes['/'].templateUrl, 'partials/heroes');
      });

    test( 'if the root route has the correct controller ("HeroesCtrl")',
      function() {
        assert.equal($route.routes['/'].controller, 'HeroesCtrl');
      });

  });

});
