

describe("arabic to roman converter", function() {
  // step 1: write a simple test
  // step 2: watch it fail
  it("should convert \"1\" to \"I\"", function() {

    expect(arabic_to_roman(1)).toEqual("I");

    // step 4: obviously, this is not the correct solution, it's faked.
    //         so we are going to triangulate the problem with a second test.
    //         and watching the test fail again.
    expect(arabic_to_roman(2)).toEqual("II");

    // step 6: we keep on triangulating
    expect(arabic_to_roman(3)).toEqual("III");

  });

  // step 9: the first edge case of arabic to roman: 4
  //         we write the test and watch it fail
  it("should convert \"4\" to \"IV\"", function() {
    expect(arabic_to_roman(4)).toEqual("IV");
  });

  // step 10: introducing a new roman number
  it("should convert \"5\" to \"V\"", function() {
    expect(arabic_to_roman(5)).toEqual("V");
  });

  it("should continue from 5 to 8 with \"V\" + \"VIII\"", function() {
    expect(arabic_to_roman(6)).toEqual("VI");
    expect(arabic_to_roman(8)).toEqual("VIII");
  });

  it("should convert \"9\" to \"IX\"", function() {
    expect(arabic_to_roman(9)).toEqual("IX");
  });

  it("should convert \"10\" to \"X\"", function() {
    expect(arabic_to_roman(10)).toEqual("X");
  });

  it("should continue from 10 to 13 with \"V\" + \"VIII\"", function() {
    expect(arabic_to_roman(11)).toEqual("XI");
    expect(arabic_to_roman(13)).toEqual("XIII");
  });

  it("should convert edge cases up to 39 correctly", function() {
    expect(arabic_to_roman(14)).toEqual("XIV");
    expect(arabic_to_roman(19)).toEqual("XIX");
    expect(arabic_to_roman(24)).toEqual("XXIV");
    expect(arabic_to_roman(39)).toEqual("XXXIX");
  });

  it("should convert \"40\" to \"XL\"", function() {
    expect(arabic_to_roman(40)).toEqual("XL");
  });

  it("should convert all \"40\"s correctly", function() {
    expect(arabic_to_roman(41)).toEqual("XLI");
    expect(arabic_to_roman(44)).toEqual("XLIV");
    expect(arabic_to_roman(45)).toEqual("XLV");
    expect(arabic_to_roman(49)).toEqual("XLIX");
  });

  it("should convert all \"50\"s to \"89\" correctly", function() {
    expect(arabic_to_roman(50)).toEqual("L");
    expect(arabic_to_roman(74)).toEqual("LXXIV");
    expect(arabic_to_roman(89)).toEqual("LXXXIX");
  });

  it("should convert edge cases up to 4999", function() {
    expect(arabic_to_roman(99)).toEqual("XCIX");
    expect(arabic_to_roman(149)).toEqual("CXLIX");
    expect(arabic_to_roman(493)).toEqual("CDXCIII");
    expect(arabic_to_roman(999)).toEqual("CMXCIX");
    expect(arabic_to_roman(4999)).toEqual("MMMMCMXCIX");
  });

});
