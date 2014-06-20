// test/client/spec/filters/Shortening.js

suite( 'Testing Shortening Filter', function() {

  var ShorteningFilter;

  setup( inject( function( $filter) {
    ShorteningFilter = $filter( 'Shortening' );
  }));

  test( 'if it is present', function() {
    assert.isDefined(ShorteningFilter);
  });

});
