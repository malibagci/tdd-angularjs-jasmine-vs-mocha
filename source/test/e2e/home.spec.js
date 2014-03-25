// 'use strict'

describe("E2E: Testing Routes", function() {



  beforeEach( function() {
    browser().navigateTo('/#/home');
  });

  it("should contain the header 'Home'", function() {
    expect(element("h1").text()).toContain("Home");
  });

  it('should contain at least one hero', function() {
    expect(repeater(".heroes-container .hero").count()).toBeGreaterThan(0);
  });

});
