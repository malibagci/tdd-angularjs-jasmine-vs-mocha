//
// file: oneToMany.js
//

var sum = function(numbersToSumUp) {
    var sumToReturn = 0;
    for(var i = 0; i < numbersToSumUp.length; ++i) {
      sumToReturn += numbersToSumUp[i];
    }
    return sumToReturn;
};

// var sum = function(augend, addend) {

//   if(augend instanceof Array && typeof(addend) === 'undefined') {
//     var sum = 0;
//     for(var i = 0; i < augend.length; ++i) {
//       sum += augend[i];
//     }
//     return sum;
//   }

//   return augend + addend;
// };

// var sum = function(augend, addend) {

//   if(augend instanceof Array && typeof(addend) === 'undefined') {
//     return 3;
//   }

//   return augend + addend;
// };

// var sum = function(augend, addend) {
//   return augend + addend;
// };
