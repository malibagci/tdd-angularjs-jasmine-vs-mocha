// test/client/spec/app/app.js

describe( 'Testing modules:', function() {

  describe( 'App module:', function() {

    var module;
    beforeEach( function() {
      module = angular.module('marvelSuperHeroesApp');
    });

    it('should be registered', function() {
      expect(module).toBeDefined();
    });

  });

});
