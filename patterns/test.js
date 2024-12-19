function getFilledRow(char, noOfChars) {
  return char.repeat(noOfChars);
}

function getFilledRectangle(dimensions, char) {
  if (dimensions[1] === 1) {
    return char.repeat(dimensions[0]);
  }

  let rectangle = getFilledRow(char, dimensions[0]);

  for (let index = 0; index < dimensions[1] - 1; index++) {
    rectangle += "\n" + getFilledRow(char, dimensions[0]);
  }

  return rectangle;
}

// -----------------------------------------------------------------------

function getSingleOrDoubleColumns(char, dimensions) {
  let rectangle = "";

  for (let index = 0; index < dimensions[1] - 1; index++) {
    rectangle += char.repeat(dimensions[0]) + "\n";
  }

  return rectangle + char.repeat(dimensions[0]);
}

function frameHollowRectangle(char, dimensions) {
  let rectangle = char.repeat(dimensions[0]);

  for (let index = 0; index < dimensions[1] - 2; index++) {
    rectangle += "\n" + char + " ".repeat(dimensions[0] - 2) + char;
  }

  return rectangle += "\n" + char.repeat(dimensions[0]);
}

function getHollowRectangle(dimensions, char) {
  if (dimensions[1] === 1) {
    return getFilledRow(char, dimensions[0]);
  }

  return dimensions[0] < 3 ? getSingleOrDoubleColumns(char, dimensions) :
    frameHollowRectangle(char, dimensions);
}

// ----------------------------- main function ---------------------------

function generatePattern(style, dimensions) {
  if (dimensions[0] === 0 || dimensions[1] === 0) {
    return "";
  }

  return style === 'filled-rectangle' ? getFilledRectangle(dimensions, "*") :
    getHollowRectangle(dimensions, '*');
}

// -------------------------------- Testing -------------------------------

function testGeneratePattern(style, dimensions, expected, failed) {
  const actual = generatePattern(style, dimensions);

  if (actual !== expected) {
    failed.push([style, dimensions, actual, expected]);
  }
}

function testHollowRectangle() {
  const failed = [];

  testGeneratePattern('filled-rectangle', [0, 0], '', failed);
  testGeneratePattern('filled-rectangle', [1, 0], '', failed);
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

function testAll() {
  testFilledRectangle();
  testHollowRectangle();
}

testAll();