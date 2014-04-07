var playFizzBuzz = function(withNumber) {

  if((withNumber % 3) === 0 && (withNumber % 5) === 0) {
    return 'FizzBuzz';
  }

  if((withNumber % 3) === 0) {
    return 'Fizz';
  }

  if((withNumber % 5) === 0) {
    return 'Buzz';
  }
  
  return withNumber;
};