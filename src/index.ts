export const STAR = "*";
export const SPACE = " ";

export type Star = typeof STAR;
export type Space = typeof SPACE;

export type Shape = Star | Space;

export type Row = Shape[];
export type Diamond = Row[];
export type TopHalfDiamond = Row[];

export const print = (diamond: Diamond): string => {
  return diamond.map(printRow).join("\n");
};

export const printRow = (row: Row) => row.join("");

export const diamond = (dimension: number): Diamond => {
  const top = makeTopHalfDiamond(dimension);
  const [firstLine, ...bottom] = [...top].reverse();
  return [...top, ...bottom];
};

export const makeTopHalfDiamond = (dimension: number): TopHalfDiamond => {
  const numberOfLines = (dimension + 1) / 2;
  return [...Array(numberOfLines)].map((_, i) => makeRow(dimension, i));
};

export const makeRow = (dimension: number, index: number): Row => {
  const numberOfStars = 2 * index + 1;
  const numberOfSpaces = (dimension - numberOfStars) / 2;
  const stars = makeArrayOf<Star>(numberOfStars, STAR);
  const spaces = makeArrayOf<Space>(numberOfSpaces, SPACE);

  return [...spaces, ...stars, ...spaces];
};

export const makeArrayOf = <T>(length: number, shape: T): T[] => {
  return Array(length).fill(shape);
};
