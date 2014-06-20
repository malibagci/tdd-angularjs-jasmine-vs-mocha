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

    // initial GET request of HeroesFactory
    $httpBackend.expectGET('/api/heroes').respond('');
  }));

  test( 'if it is present', function() {
    assert.isDefined(NavbarCtrl);
  });

  test( 'if the scope holds a "searchString" string', function() {
    assert.isDefined(scope.searchString);
    assert.isString(scope.searchString);
  });

  suite( 'Testing search:', function() {

    var searchStub,
      resetStub;

    setup( function() {
      searchStub = sinon.stub(MarvelSearchFactory, 'search');
      resetStub = sinon.stub(MarvelSearchFactory, 'reset');
    });

    test( 'if changing the searchString calls "search" of the ' +
      'MarvelSearchFactory', function() {
        scope.searchString = 'Hulk';
        scope.$apply();

        assert.ok(searchStub.called);        
    });

    test( 'if search is only called when the input is greater equal than 4 ' +
      'characters', function() {

        scope.searchString = 'Hul';
        scope.$apply();

        assert.notOk(searchStub.called);

    });

    test( 'if reset is called when the input is smaller than 4 characters', 
      function() {

        scope.searchString = 'Hul';
        scope.$apply();

        assert.ok(resetStub.called);

    });

    test( 'if search is called with the inputString as argument', function() {

      scope.searchString = 'Hulk';
      scope.$apply();

      assert.ok(searchStub.calledWith('Hulk'));

    });

    teardown( function() {
      searchStub.restore();
      resetStub.restore();
    });

  });




});
