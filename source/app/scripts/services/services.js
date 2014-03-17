var ThesisServices = angular.module('ThesisApp.Services', []);

ThesisServices.service("TestService", function() {
  console.log("TestService here.");
});

ThesisServices.factory("TestFactory", function() {
  console.log("TestFactory here.");
});

ThesisServices.factory("$heroesFactory", function() {



  return {
    fetchHeroes: function() {

    },
    getHeroes: function() {
      return {};
    },
    get: function() {

    }
  };
});
