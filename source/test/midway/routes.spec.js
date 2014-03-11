describe("Midway: Testing Routes", function() {

  var tester;
  beforeEach(function() {
    tester = ngMidwayTester("ThesisApp");
  });

  afterEach(function() {
    tester.destroy();
    tester = null;
  });

  it("should have a working home_path route", function() {
    tester.visit("/", function() {
      console.log("asd")
      expect(tester.path()).to.equal('/asdasdasdasdasd');
    });
  });

  it("should have a home_path route that should go to the HomeCtrl controller", 
    function() {
      
  });
});