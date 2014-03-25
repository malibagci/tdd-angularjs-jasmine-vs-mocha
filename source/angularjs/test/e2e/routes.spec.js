'use strict'

describe("E2E: Testing Routes", function() {

  beforeEach( function() {
    browser().navigateTo('/');
  });

  it('should navigate to /home when / is accessed', function() {
    expect(browser().location().path()).toBe("/home")
  });

});
