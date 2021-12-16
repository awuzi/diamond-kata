import { makePortionOfRow, makeRow, printDiamond } from ".";

describe("Test of printDiamond()", () => {
  it("Should print 1 width diamond", () => {
    expect(printDiamond(1)).toEqual([["*"]]);
  });

  it("Should print the half of a 3 witdh diamond", () => {
    expect(printDiamond(3)).toEqual([
      ["_", "*", "_"],
      ["*", "*", "*"],
      ["_", "*", "_"]
    ]);
  });
});
describe("Test of makeRow()", () => {
  it("Should make the second row of a 7 dimension diamond", () => {
    expect(makeRow(7, 1)).toEqual(["_", "_", "*", "*", "*", "_", "_"]);
  });

  it("Should make the second row of a 3 dimension diamond", () => {
    expect(makeRow(3, 0)).toEqual(["_", "*", "_"]);
  });
});

describe("Test of makePortionOfRow()", () => {
  it("Should print 1 row with 3 _", () => {
    expect(makePortionOfRow(3, "_")).toEqual(["_", "_", "_"]);
  });

  it("Should print 1 row with 3 *", () => {
    expect(makePortionOfRow(3, "*")).toEqual(["*", "*", "*"]);
  });
});
