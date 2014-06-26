// test/client/spec/app/app.js

'use strict';

suite( 'Testing: App Module', function() {

  var module;
  var deps;

  var hasModule = function(moduleName) {
    return deps.indexOf(moduleName) >= 0;
  };

  setup( function() {
    module = angular.module( 'marvelSuperHeroesApp' );
    deps = module.value('marvelSuperHeroesApp').requires;
  });

  test( 'if the module "marvelSuperHeroesApp" is present', function() {
    assert.isDefined(module);
  });

  test( 'if the app has a registered dependency to "ngRoute"', function() {
    assert.ok(hasModule('ngRoute'));
  });

  test( 'if the app has a registered dependency to "app.controllers"',
    function() {
      assert.ok(hasModule('app.controllers'));
    });

  test( 'if the app has a registered dependency to "app.services"',
    function() {
      assert.ok(hasModule('app.services'));
    });

  test( 'if the app has a registered dependency to "app.filters"',
    function() {
      assert.ok(hasModule('app.filters'));
    });

  test( 'if the app has a registered dependency to "app.directives"',
    function() {
      assert.ok(hasModule('app.directives'));
    });

  test( 'if the app has a registered dependency to "ngResource"',
    function() {
      assert.ok(hasModule('ngResource'));
    });

  test( 'if the app has a registered dependency to "ngSanitize"',
    function() {
      assert.ok(hasModule('ngSanitize'));
    });

  test( 'if the app has a registered dependency to "ngAnimate"',
    function() {
      assert.ok(hasModule('ngAnimate'));
    });

  test( 'if the app has a registered dependency to "ui.bootstrap"',
    function() {
      assert.ok(hasModule('ui.bootstrap'));
    });

});