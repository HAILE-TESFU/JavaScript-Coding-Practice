const countMe = require("./countMe");

describe("This count me challenge must pass the following test", () => {
  it("It should return 1 from string 'Meishere' ", () => {
    expect(countMe("Meishere")).toBe(1);
  });
  it("It should return 1 from string 'thisisxMe' ", () => {
    expect(countMe("thisisxMe")).toEqual(0);
  });
  it("It should return 1 from string 'MeisxMe' ", () => {
    expect(countMe("MeisxMe")).toEqual(1);
  });
  it("It should return 1 from string 'xMeisxMe' ", () => {
    expect(countMe("xMeisxMe")).toEqual(0);
  });
  it("It should return 1 from string 'MeixsyouMe' ", () => {
    expect(countMe("MeixsyouMe")).toEqual(1);
  });
});
