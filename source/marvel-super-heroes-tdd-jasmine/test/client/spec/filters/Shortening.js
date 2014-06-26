// test/client/spec/filters/Shortening.js

'use strict';

describe( 'Testing Shortening Filter', function() {

  var shorteningFilter;

  beforeEach( module('marvelSuperHeroesApp') );

  beforeEach( inject(function($filter) {
    shorteningFilter = $filter('Shortening');
  }));

  it( 'should be present', function() {
    expect(shorteningFilter).toBeDefined();
  });

  it( 'should shorten an input string to the given length and append three ' +
    'dots', function() {
      expect( shorteningFilter( 'Hulk (Marvel: Avengers Alliance)', 10) )
        .toEqual( 'Hulk (Marv...' );
    });

  it( 'should return the input string when the length is smaller than the ' +
    'given length', function() {
      expect( shorteningFilter( 'Hulk', 10 ) ).toEqual( 'Hulk' );
    });

  it( 'should return the input string when the length is not defined',
    function() {
      expect( shorteningFilter( 'Hulk' ) ).toEqual( 'Hulk' );
    });

});
