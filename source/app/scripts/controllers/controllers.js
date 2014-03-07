var ThesisControllers = angular.module('ThesisApp.Controllers', []);

ThesisControllers.controller('TestCtrl', [
  '$scope',
  function($scope) {
    console.log("TestCtrl here.");
  }
]);