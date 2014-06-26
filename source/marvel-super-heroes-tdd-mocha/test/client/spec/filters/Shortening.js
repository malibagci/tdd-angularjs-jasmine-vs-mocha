// test/client/spec/filters/Shortening.js

'use strict';

suite( 'Testing Shortening Filter:', function() {

  var shorteningFilter;

  setup( module( 'marvelSuperHeroesApp' ) );

  setup( inject( function( $filter) {
    shorteningFilter = $filter( 'Shortening' );
  }));

  test( 'if it is present', function() {
    assert.isDefined(shorteningFilter);
  });

  test( 'if it shortens a string by a given length and appends three dots',
    function() {
      assert.equal( shorteningFilter( 'Hulk (Marvel: Avengers Alliance)',
        10), 'Hulk (Marv...' );
    });

  test( 'if it returns the input string when the length is smaller than the ' +
    'given length', function() {
      assert.equal( shorteningFilter( 'Hulk', 10), 'Hulk');
    });

  test( 'if it returns the input string when no length is defined', function() {
    assert.equal( shorteningFilter( 'Hulk' ), 'Hulk');
  });

});
