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

  it( 'should shorten an input string to the given length and append three ' + 
    'dots', function() {
      expect( ShorteningFilter( 'Hulk (Marvel: Avengers Alliance)', 10) )
        .toEqual( 'Hulk (Marv...' );
  });

  it( 'should return the input string when the length is smaller than the ' +
    'given length', function() {
      expect( ShorteningFilter( 'Hulk', 10 ) ).toEqual( 'Hulk' );
  });

  it( 'should return the input string when the length is not defined', 
    function() {
      expect( ShorteningFilter( 'Hulk' ) ).toEqual( 'Hulk' );
  });

});
