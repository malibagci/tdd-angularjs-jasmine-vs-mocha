describe('let\'s play FizzBuzz', function() {

  it('should convert 1 to 1', function() {
    expect(playFizzBuzz(1)).toEqual(1);
  });

  it('should convert 3 to "Fizz"', function() {
    expect(playFizzBuzz(3)).toEqual('Fizz');
  });

  it('should convert 5 to "Buzz"', function() {
    expect(playFizzBuzz(5)).toEqual('Buzz');
  });

  it('should convert 9 to "Fizz"', function() {
    expect(playFizzBuzz(9)).toEqual('Fizz');
  });

  it('should convert 10 to "Buzz"', function() {
    expect(playFizzBuzz(10)).toEqual('Buzz');
  });

  it('should convert 15 to "FizzBuzz"', function() {
    expect(playFizzBuzz(15)).toEqual('FizzBuzz');
  });

});