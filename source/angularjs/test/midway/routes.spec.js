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
    console.log("at least i am here and i am here..");
    tester.visit('/home', function() {
      expect(tester.path()).to.equal('/home');
      expect(tester.viewElement().html()).to.contain('welcome to my home page');

      var scope = tester.viewScope();
      expect(scope.title).to.equal('my home page');
      done();
      scope.apply();
    });
  });

  xit("should have a home_path route that should go to the HomeCtrl controller", 
    function() {
      
  });
});