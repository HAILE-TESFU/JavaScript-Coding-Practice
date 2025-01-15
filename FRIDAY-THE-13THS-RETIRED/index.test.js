const fridayTheTherteenth = require("./index");

describe("it should satisfay the following conditions", () => {
  test("should return true", () => {
    expect(fridayTheTherteenth(1999, 2000)).toBe("8/13/1999 10/13/2000");
  });
  test("should return true", () => {
    expect(fridayTheTherteenth(1999)).toBe("8/13/1999");
  });
  test("should return true", () => {
    expect(fridayTheTherteenth(2000)).toBe("10/13/2000");
  });
});
