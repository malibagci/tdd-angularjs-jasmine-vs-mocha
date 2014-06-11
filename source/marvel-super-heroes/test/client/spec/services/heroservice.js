'use strict';

describe('Service: Heroservice', function () {

  // load the service's module
  beforeEach(module('marvelSuperHeroesApp'));

  // instantiate service
  var Heroservice;
  beforeEach(inject(function (_Heroservice_) {
    Heroservice = _Heroservice_;
  }));

  it('should do something', function () {
    expect(!!Heroservice).toBe(true);
  });

});
