'use strict';

describe('Service: Hero', function () {

  // load the service's module
  beforeEach(module('marvelSuperHeroesApp'));

  // instantiate service
  var Hero;
  beforeEach(inject(function (_Hero_) {
    Hero = _Hero_;
  }));

  it('should do something', function () {
    expect(!!Hero).toBe(true);
  });

  // it('should return ')

});
