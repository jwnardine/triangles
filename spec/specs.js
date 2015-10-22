describe('test-triangle', function() {
  it("test if we can detect an equ. triangle", function() {
    expect(triangle(10,10,10)).to.equal("Equilateral");
  });

  it("test if we can detect a isosceles triangle", function() {
    expect(triangle(10,10,20)).to.equal("Isosceles");
  });

  it("test if we can detect no input", function() {
    expect(triangle(10,null,20)).to.equal("Unknown");
  });

});
