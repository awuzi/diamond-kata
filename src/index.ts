export const STAR = "*";
export const SPACE = "_";

type Star = typeof STAR;
type Space = typeof SPACE;

type Shape = Star | Space;

type Row = Shape[];
type Diamond = Row[];

export const printDiamond = (dimension: number): Diamond => {
  const halfTop = [];
  const halfBottom = [];

  for (let i = 0; i < Math.round(dimension / 2); i++) {
    halfTop.push(makeRow(dimension, i));
    halfBottom.push(makeRow(dimension, i));
  }

  return computeDiamond(halfTop, halfBottom);
};

export const makeRow = (dimension: number, lineIndex: number): Row => {
  const nbStars = numberOfStars(lineIndex);
  const nbSpacesHalf = numberOfSpaces(dimension, lineIndex) / 2;
  return []
    .concat(makePortionOfRow(nbSpacesHalf, SPACE))
    .concat(makePortionOfRow(nbStars, STAR))
    .concat(makePortionOfRow(nbSpacesHalf, SPACE));
};

export const makePortionOfRow = (nbOfShape: number, shape: Shape) => [...new Array(nbOfShape)].map((_) => shape);

export const numberOfStars = (i: number) => 2 * i + 1;

export const numberOfSpaces = (dimension: number, i: number) => dimension - 1 - 2 * i;

export const reverseAndRemoveFirst = (rows: Row[]) => rows.reverse().splice(1, 1);

export const computeDiamond = (halfTop: Row[], halfBottom: Row[]): Diamond => {
  return [...halfTop, ...reverseAndRemoveFirst(halfBottom)];
};
