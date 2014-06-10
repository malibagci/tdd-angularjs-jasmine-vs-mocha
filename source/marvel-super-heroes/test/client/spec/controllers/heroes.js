'use strict';

describe('Controller: HeroesctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('marvelSuperHeroesApp'));

  var HeroesCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    // $httpBackend.expectGET('/api/awesomeThings')
      // .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    scope = $rootScope.$new();
    HeroeCtrl = $controller('HeroesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of heroes to the scope', function () {
    expect(scope.heroes).toBeDefined();
    // $httpBackend.flush();
    // expect(scope.heroes.length).toBe(1);
  });

  // it('', function() {
  //   expect();
  // });
});
