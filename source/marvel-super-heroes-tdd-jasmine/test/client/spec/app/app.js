// test/client/spec/app/app.js

'use strict';

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

    it( 'should have a registered dependency to app.controllers', function() {
      expect(hasModule('app.controllers')).toBeTruthy();
    });

    it( 'should have a registered dependency to app.services', function() {
      expect(hasModule('app.services')).toBeTruthy();
    });

    it( 'should have a registered dependency to app.filters', function() {
      expect(hasModule('app.filters')).toBeTruthy();
    });

    it( 'should have a registered dependency to app.directives', function() {
      expect(hasModule('app.directives')).toBeTruthy();
    });

    it( 'should have a registered dependency to ngResource', function() {
      expect(hasModule('ngResource')).toBeTruthy();
    });

    it( 'should have a registered dependency to ngSanitize', function() {
      expect(hasModule('ngSanitize')).toBeTruthy();
    });

    it( 'should have a registered dependency to ngAnimate', function() {
      expect(hasModule('ngAnimate')).toBeTruthy();
    });

    it( 'should have a registered dependency to ui.bootstrap', function() {
      expect(hasModule('ui.bootstrap')).toBeTruthy();
    });

  });

});
