// test/client/spec/filters/Shortening.js

describe( 'Testing Shortening Filter', function() {

  var ShorteningFilter;

  beforeEach( module( 'marvelSuperHeroesApp' ) );

  beforeEach( inject(function($filter) {
    ShorteningFilter = $filter('Shortening');
  }));

  it( 'should be present', function() {
    expect(ShorteningFilter).toBeDefined();
  });

});
