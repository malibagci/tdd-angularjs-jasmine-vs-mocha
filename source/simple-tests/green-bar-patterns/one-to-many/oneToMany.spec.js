//
// file: oneToMany.spec.js
//
describe("Simple calculator", function() {
  // updated test after changing implementation
  it("should add 1 to 1 and return 2", function() {
    expect(sum([1,1])).toEqual(2);
  });

  it("should sum up 1, 1 and 1 and return 3", function() {
    expect(sum([1,1,1])).toEqual(3);
  });
});


// it("should add 1 to 1 and return 2", function() {
//   expect(sum(1,1)).toEqual(2);
// });