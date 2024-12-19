
function getFilledRow(char, noOfChars) {
  return char.repeat(noOfChars);
}

function getFilledRectangle(dimensions, char) {
  const rectangle = [];

  for (let index = 0; index < dimensions[1]; index++) {
    rectangle.push(getFilledRow(char, dimensions[0]));
  }

  return rectangle.join("\n");
}

// -----------------------------------------------------------------------

function getSingleOrDoubleColumns(char, dimensions) {
  let rectangle = [];

  for (let index = 0; index < dimensions[1]; index++) {
    rectangle.push(getFilledRow(char, dimensions[0]));
  }

  return rectangle.join("\n");
}

function frameHollowRectangle(char, dimensions) {
  let rectangle = [getFilledRow(char, dimensions[0])];
  const noOfSpaces = dimensions[0] - 2;
  const noOfMiddleRows = dimensions[1] - 2;

  for (let index = 0; index < noOfMiddleRows; index++) {
    rectangle.push(char + getFilledRow(" ", noOfSpaces) + char);
  }

  rectangle.push(getFilledRow(char, dimensions[0]));

  return rectangle.join("\n");
}

function getHollowRectangle(dimensions, char) {
  if (dimensions[1] === 1) {
    return getFilledRow(char, dimensions[0]);
  }

  return dimensions[0] < 3 ? getSingleOrDoubleColumns(char, dimensions) :
    frameHollowRectangle(char, dimensions);
}

// -----------------------------------------------------------------------

function getAlteringRectangle(dimensions) {
  const rectangle = [];
  const rowLength = dimensions[0];

  for (let index = 0; index < dimensions[1]; index++) {
    const row = (index & 1) === 0 ? getFilledRow("*", rowLength) :
      getFilledRow("-", rowLength);
    rectangle.push(row);
  }

  return rectangle.join("\n");
}

// -----------------------------------------------------------------------

function getTriangle(dimension) {
  const rectangle = [];

  for (let index = 0; index < dimension; index++) {
    rectangle.push("*".repeat(index + 1));
  }

  return rectangle.join("\n");
}

// -----------------------------------------------------------------------

function getRightAlignTriangle(dimension) {
  const rectangle = [];

  for (let index = 0; index < dimension; index++) {
    const row = "*".repeat(index + 1);
    rectangle.push(row.padStart(dimension," "));
  }

  return rectangle.join("\n");
}

// ----------------------------- main function ---------------------------

function getPattern(style, dimensions) {
  switch (style) {
    case 'filled-rectangle': return getFilledRectangle(dimensions, "*");

    case 'hollow-rectangle': return getHollowRectangle(dimensions, '*');

    case 'alternating-rectangle': return getAlteringRectangle(dimensions);

    case 'triangle': return getTriangle(dimensions);

    case 'right-aligned-triangle': return getRightAlignTriangle(dimensions);
  }
}

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return "";
  }

  return getPattern(style, dimensions);
}

// -------------------------------- Testing -------------------------------

function testGeneratePattern(style, dimensions, expected, failed) {
  const actual = generatePattern(style, dimensions);

  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }
}

function testFilledRectangle() {
  const failed = [];

  testGeneratePattern('filled-rectangle', [0, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
  testGeneratePattern('filled-rectangle', [4, 1], '****', failed);
  testGeneratePattern('filled-rectangle', [4, 2], '****\n****', failed);
  testGeneratePattern('filled-rectangle', [2, 4], '**\n**\n**\n**', failed);
  testGeneratePattern('filled-rectangle', [5, 3], '*****\n*****\n*****',
    failed);
  testGeneratePattern('filled-rectangle', [4, 4], '****\n****\n****\n****',
    failed);

  console.table(failed);
}

function testHollowRectangle() {
  const failed = [];

  testGeneratePattern('hollow-rectangle', [1, 0], '', failed);
  testGeneratePattern('hollow-rectangle', [5, 1], '*****', failed);
  testGeneratePattern('hollow-rectangle', [1, 5], '*\n*\n*\n*\n*', failed);
  testGeneratePattern('hollow-rectangle', [2, 5], '**\n**\n**\n**\n**',
    failed);
  testGeneratePattern('hollow-rectangle', [6, 2], '******\n******', failed);
  testGeneratePattern('hollow-rectangle', [4, 3], '****\n*  *\n****', failed);
  testGeneratePattern('hollow-rectangle', [5, 4], '*****\n*   *\n*   *\n*****',
    failed);

  console.table(failed);
}

function testAlternatingRectangle() {
  const failed = [];

  testGeneratePattern('alternating-rectangle', [3, 3], '***\n---\n***',
    failed);
  testGeneratePattern('alternating-rectangle', [5, 4],
    '*****\n-----\n*****\n-----', failed);
  testGeneratePattern('alternating-rectangle', [6, 2], '******\n------',
    failed);
  testGeneratePattern('alternating-rectangle', [4, 1], '****', failed);
  testGeneratePattern('alternating-rectangle', [0, 5], '', failed);
  testGeneratePattern('alternating-rectangle', [7, 0], '', failed);

  console.table(failed);
}

function testTriangle() {
  const failed = [];

  testGeneratePattern('triangle', [0], '', failed);
  testGeneratePattern('triangle', [1], '*', failed);
  testGeneratePattern('triangle', [2], '*\n**', failed);
  testGeneratePattern('triangle', [3], '*\n**\n***', failed);
  testGeneratePattern('triangle', [5], '*\n**\n***\n****\n*****', failed);
  testGeneratePattern('triangle', [6], '*\n**\n***\n****\n*****\n******',
    failed);

  console.table(failed);
}

function testRightAlignTriangle() {
  const failed = [];

  testGeneratePattern('right-aligned-triangle', [0], '', failed);
  testGeneratePattern('right-aligned-triangle', [1], '*', failed);
  testGeneratePattern('right-aligned-triangle', [2], ' *\n**', failed);
  testGeneratePattern('right-aligned-triangle', [3], '  *\n **\n***', failed);
  testGeneratePattern('right-aligned-triangle', [5], '    *\n   **\n  ***\n ****\n*****', failed);
  testGeneratePattern('right-aligned-triangle', [6], '     *\n    **\n   ***\n  ****\n *****\n******',
    failed);

  console.table(failed);
}

function testAll() {
  testFilledRectangle();
  testHollowRectangle();
  testAlternatingRectangle();
  testTriangle();
  testRightAlignTriangle();
}

testAll();