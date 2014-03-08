describe("Midway: Testing Modules", function() {
  describe("ThesisApp Module:", function() {

    var module;
    before(function() {
      module = angular.module("ThesisApp")
    });

    it("should be registered", function() {
      expect(module).not.to.equal(null);
    });

    describe("Dependencies:", function() {

      var deps;
      var hasModule = function(m) {
        return deps.indexOf(m) >= 0;
      };
      before(function() {
        deps = module.value("appName").requires;
      });

      it("should have ThesisApp.Controllers as a dependency", function() {
        expect(hasModule("ThesisApp.Controllers")).to.equal(true);
      });

      it("should have ThesisApp.Directives as a dependency", function() {
        expect(hasModule("ThesisApp.Directives")).to.equal(true);
      });

      it("should have ThesisApp.Filters as a dependency", function() {
        expect(hasModule("ThesisApp.Filters")).to.equal(true);
      });

      it("should have ThesisApp.Routes as a dependency", function() {
        expect(hasModule("ThesisApp.Routes")).to.equal(true);
      });

      it("should have ThesisApp.Services as a dependency", function() {
        expect(hasModule("ThesisApp.Services")).to.equal(true);
      });
    });

  });
});
