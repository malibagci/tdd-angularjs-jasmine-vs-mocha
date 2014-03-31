
// step 3: write the simplest possible solution - Fake it!
// step 5: we write the next simplest possible solution to pass the new test.
//         we are back in the green now.
// step 7: once again - the simplest possible solution.
// step 8: now we are again back in the green and we are able to see duplication
//         we are going to remove the duplication and run the tests after we are done
//         to ensure the implementation to be correct (according to the tests).
// step 9: same procedure as every time.

var arabic_to_roman = function(input) {

  var edge_cases = {
    "1000": "M",
    "900": "CM",
    "500": "D",
    "400": "CD",
    "100": "C",
    "90": "XC",
    "50": "L",
    "40": "XL",
    "10": "X",
    "9": "IX",
    "5": "V",
    "4": "IV"
  };

  for(var arabic in edge_cases) {
    if(input >= arabic)
      return edge_cases[arabic] + arabic_to_roman(input - arabic);
  }

  var ret = "";
  for(var i = 0; i < input; ++i) {
    ret += "I";
  }

  return ret;

};

/*
var arabic_to_roman = function(input) {

  if(input >= 50) {
    return "L" + arabic_to_roman(input-50);
  }

  if(input >= 40) {
    return "XL" + arabic_to_roman(input-40);
  }

  if(input >= 10) {
    return "X" + arabic_to_roman(input-10);
  }

  if(input >= 9) {
    return "IX";
  }

  if(input >= 5) {
    return "V" + arabic_to_roman(input-5);
  }

  if(input >= 4) {
    return "IV";
  }

  var ret = "";
  for(var i = 0; i < input; ++i) {
    ret += "I";
  }

  return ret;

};

var arabic_to_roman = function(input) {

  if(input >= 10) {
    return "X" + arabic_to_roman(input-10);
  }

  if(input == 9) {
    return "IX";
  }

  if(input >= 5) {
    return "V" + arabic_to_roman(input-5);
  }

  if(input == 4) {
    return "IV";
  }

  var ret = "";
  for(var i = 0; i < input; ++i) {
    ret += "I";
  }

  return ret;

};

var arabic_to_roman = function(input) {

  var ret = "";

  if(input == 9) {
    return "IX";
  }

  if(input >= 5) {
    ret += "V";
    input -= 5; // <- code smell
  }

  if(input == 4) {
    return "IV";
  }

  for(var i = 0; i < input; ++i) {
    ret += "I";
  }

  return ret;

};
var arabic_to_roman = function(input) {

  var ret = "";

  if(input>=5) {
    ret += "V";
    input -= 5; // <- code smell
  }

  if(input==4) {
    return "IV";
  }

  for(var i = 0; i < input; ++i) {
    ret += "I";
  }
  return ret;

};

var arabic_to_roman = function(input) {

  var ret = "";

  if(input==5) {
    return "V";
  }

  if(input==4) {
    return "IV";
  }

  for(var i = 0; i < input; ++i) {
    ret += "I";
  }
  return ret;

};
var arabic_to_roman = function(input) {

  if(input==4) {
    return "IV";
  }

  var ret = "";
  for(var i = 0; i < input; ++i) {
    ret += "I";
  }
  return ret;

};

var arabic_to_roman = function(input) {

  var ret = "";
  for(var i = 0; i < input; ++i) {
    ret += "I";
  }
  return ret;

};

var arabic_to_roman = function(input) {
  if( input == 3 ) {
    return "III";
  }
  if( input == 2 ) {
    return "II";
  }
  return "I";
};

var arabic_to_roman = function(input) {
  if( input == 2 ) {
    return "II";
  }
  return "I";
};


var arabic_to_roman = function(input) {
  return "I";
};

*/