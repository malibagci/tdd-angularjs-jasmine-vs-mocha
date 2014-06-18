// test/client/spec/controllers/NavbarCtrl.js

suite( 'Testing NavbarCtrl Controller:', function() {

  var NavbarCtrl,
    scope,
    MarvelSearchFactory,
    $httpBackend;

  setup( module('marvelSuperHeroesApp') );

  setup( inject(function($controller, $rootScope, _MarvelSearchFactory_,
    _$httpBackend_) {

    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();

    MarvelSearchFactory = _MarvelSearchFactory_;
    NavbarCtrl = $controller('NavbarCtrl', {
      $scope: scope,
      MarvelSearchFactory: MarvelSearchFactory
    });
  }));

  test( 'if it is present', function() {
    assert.isDefined(NavbarCtrl);
  });

  test( 'if the scope holds a "searchString" string', function() {
    assert.isDefined(scope.searchString);
    assert.isString(scope.searchString);
  });

  suite( 'Testing search:', function() {

    var searchStub;

    setup( function() {
      searchStub = sinon.stub(MarvelSearchFactory, 'search');
    });

    test( 'if changing the searchString calls "search" of the ' +
      'MarvelSearchFactory', function() {
        scope.searchString = 'Hulk';
        scope.$apply();

        assert.ok(searchStub.called);        
    });

    test( 'if search is fired when the input is smaller than 4 characters', 
      function() {

        scope.searchString = 'Hul';
        scope.$apply();

        assert.notOk(searchStub.called);

    });

    teardown( function() {
      searchStub.restore();
    });

  });




});
