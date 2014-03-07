//
// test/unit/controllers/controllersSpec.js
//

describe('Unit: Testing Controllers', function() {

  beforeEach(angular.mock.module("ThesisApp"));

  it('should have a TestCtrl Controller', function() {
    expect(ThesisApp.TestCtrl).not().to.equal(null);
  });

});
