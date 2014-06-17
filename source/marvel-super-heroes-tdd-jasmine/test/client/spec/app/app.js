// test/client/spec/app/app.js

describe( 'Testing modules:', function() {

  describe( 'App module:', function() {

    var module;
    var deps;

    var hasModule = function(moduleName) {
      return deps.indexOf(moduleName) >= 0;
    };

    beforeEach( function() {
      module = angular.module('marvelSuperHeroesApp');
      deps = module.value('marvelSuperHeroesApp').requires;
    });

    it( 'should be registered', function() {
      expect(module).toBeDefined();
    });

    it( 'should have a registered dependency to ngRoute', function() {
      expect(hasModule('ngRoute')).toBeTruthy();
    });

  });

});
