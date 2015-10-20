describe('isosceles', function() {
  it("is false if sideA doesnt equal sideB or sideC", function() {
    expect(isosceles("sideA=7, sideB=1, sideC=4")).to.equal(false);
  });

  it("is true if sideA equals sideB or sideC", function() {
    expect(isosceles("sideA=7, sideB=7, sideC=4")).to.equal(true);
  });

});
