var ThesisDirectives = angular.module('ThesisApp.Directives', []);

ThesisDirectives.directive('testDirective', function() {
  return function($scope, elemen, attrs) {
    console.log('TestDirective here.')
  };
});