//
// file: triangulate.spec.js
//
describe("Simple calculator", function() {
  it("should add 1 to 1 and return 2", function() {
    expect(sum(1,1)).toEqual(2);
  });
  // triangulate
  it("should add 1 to 2 and return 3", function() {
    expect(sum(1,2)).toEqual(3);
  });
  // triangulate
  it("should add 2 to 1 and return 3", function() {
    expect(sum(2,1)).toEqual(3);
  });
});
