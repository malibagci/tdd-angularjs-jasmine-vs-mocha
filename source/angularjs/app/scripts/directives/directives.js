var ThesisDirectives = angular.module('ThesisApp.Directives', []);

ThesisDirectives.directive('testDirective', function() {
  return function($scope, elemen, attrs) {
    console.log('TestDirective here.')
  };
});

ThesisDirectives.directive('searchOnChange', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      scope.$watch(attrs.ngModel, function(v) {
        if(v.length > 2)
          scope.searchForHero(v);
      });
    }
  };
});