'use strict';

describe('Service: Heroesservice', function () {

  // load the service's module
  beforeEach(module('marvelSuperHeroesApp'));

  // instantiate service
  var Heroesservice;
  beforeEach(inject(function (_Heroesservice_) {
    Heroesservice = _Heroesservice_;
  }));

  it('should do something', function () {
    expect(!!Heroesservice).toBe(true);
  });

  it('should return a list of heroes', function() {
    // Heroesservice.get
  });

});
