'use strict'

describe("E2E: Testing Routes", function() {

  beforeEach( function() {
    browser().navigateTo("/");
  });

  it('should navigate to /home when / is accessed', function() {
    browser().navigateTo('/');
    expect(browser().location().path()).toBe("/home")
  });

});
