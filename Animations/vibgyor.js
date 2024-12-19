function delay() {
  for (let index = 0; index < 10000000000; index += 50) {
  }
}

function getColour(number) {
  switch (number % 8) {
    case 0:
      return "🟡";
    case 1:
      return "🟠";
    case 2:
      return "🔴";
    case 3:
      return "🔵";
    case 4:
      return "🟢";
    case 5:
      return "⚪️";
    case 6:
      return "🟤";
  }
  return "⚫️";
}

function repeat(char, noOfTimes) {
  let repeatedString = "";

  for (let index = 0; index < noOfTimes; index++) {
    repeatedString += char;
  }

  return repeatedString;
}

function makeFrame(height, width, char) {
  let frame = "";

  for (let index = 0; index < height; index++) {
    frame += repeat(char, width) + "\n";
  }

  return frame;
}

function disco(number) {
  for (let index = 0; index < number; index++) {
    console.log(makeFrame(44, 63, getColour(index)));
    delay();
  }
}

disco(100);