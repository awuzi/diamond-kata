import { makeRow, makeTopHalfDiamond, diamond, print } from ".";

describe("Test of makeRow() function", () => {
  test("Dimension 1, middle line", () => {
    expect(makeRow(1, 0)).toEqual(["*"]);
  });

  test("Dimension 3, middle line", () => {
    expect(makeRow(3, 1)).toEqual(["*", "*", "*"]);
  });

  test("Dimension 5, middle line", () => {
    expect(makeRow(5, 2)).toEqual(["*", "*", "*", "*", "*"]);
  });

  test("Dimension 3, first line", () => {
    expect(makeRow(3, 0)).toEqual([" ", "*", " "]);
  });

  test("Dimension 5, intermediary line", () => {
    expect(makeRow(5, 1)).toEqual([" ", "*", "*", "*", " "]);
  });

  test("Dimension 5, first line", () => {
    expect(makeRow(5, 0)).toEqual([" ", " ", "*", " ", " "]);
  });
});

describe("Test of makeTopHalfDiamond() function", () => {
  test("Dimension 3", () => {
    expect(makeTopHalfDiamond(3)).toEqual([
      [" ", "*", " "],
      ["*", "*", "*"],
    ]);
  });
  test("Dimension 5", () => {
    expect(makeTopHalfDiamond(5)).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
    ]);
  });
});

describe("Test of diamond() function", () => {
  test("Dimension 1", () => {
    expect(diamond(1)).toEqual([["*"]]);
  });

  test("Dimension 3", () => {
    expect(diamond(3)).toEqual([
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ]);
  });

  test("Dimension 5", () => {
    expect(diamond(5)).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ]);
  });
});

describe("Test of print() function", () => {
  test("Dimension 1", () => {
    const diamond1 = diamond(1);
    expect(print(diamond1)).toEqual("*");
  });

  test("Dimension 3", () => {
    const diamond3 = diamond(3);
    expect(print(diamond3)).toEqual(` * \n***\n * `);
  });
});
