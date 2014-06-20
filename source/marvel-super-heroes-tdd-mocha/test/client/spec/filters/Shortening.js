// test/client/spec/filters/Shortening.js

suite( 'Testing Shortening Filter:', function() {

  var ShorteningFilter;

  setup( module( 'marvelSuperHeroesApp' ) );

  setup( inject( function( $filter) {
    ShorteningFilter = $filter( 'Shortening' );
  }));

  test( 'if it is present', function() {
    assert.isDefined(ShorteningFilter);
  });

  test( 'if it shortens a string by a given length and appends three dots',
    function() {
      assert.equal( ShorteningFilter( 'Hulk (Marvel: Avengers Alliance)', 
        10), 'Hulk (Marv...' );
  });

  test( 'if it returns the input string when the length is smaller than the ' +
    'given length', function() {
    assert.equal( ShorteningFilter( 'Hulk', 10), 'Hulk');
  });

  test( 'if it returns the input string when no length is defined', function() {
    assert.equal( ShorteningFilter( 'Hulk' ), 'Hulk');
  });

});
