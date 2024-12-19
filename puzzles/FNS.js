const isOdd = function (number) {
  return (number & 1) === 1;
};

const isLengthGreater5 = function (word) {
  return word.length > 5;
};

const convertToUpperCase = function (word) {
  return word.toUpperCase();
};

const halfValueOf = function (number) {
  return number / 2;
};

const findBiggerOne = function (word1, word2) {
  return word1.length < word2.length ? word2 : word1;
};

const arrayToStrng = function (string, element) {
  return string += element;
};

const product = function (number1, number2) {
  return number1 * number2;
};

//----------------------------------------------------

const greaterThan5 = function (array) {
  const greaterThan5Values = array.filter(isLengthGreater5);

  console.log("length greater than 5 : ", greaterThan5Values);
};

const oddNumbers = function (array) {
  const oddNumbers = array.filter(isOdd);

  console.log("odd numbers : ", oddNumbers);
};

const toUpper = function (array) {
  const upperCaseValues = array.map(convertToUpperCase);

  console.log("upper case : ", upperCaseValues);
};

const squareRoot = function (array) {
  const squareRoots = array.map(Math.sqrt);

  console.log("square roots :", squareRoots);
};

const halfValues = function (array) {
  const halfValuesArray = array.map(halfValueOf);

  console.log("half Values :", halfValuesArray);
};

const biggestElement = function (array) {
  const biggest = array.reduce(findBiggerOne, "");

  console.log("biggest of the array:", biggest);
};

const convertArrayToString = function (array) {
  const string = array.reduce(arrayToStrng, "");

  console.log("converted to string :", string);
};

const oddsCount = function (array) {
  const oddsArray = array.filter(isOdd);

  console.log("odd numbers count :", oddsArray.length);
};

const productOfAllNumbers = function (array) {
  const productvalue = array.reduce(product, 1);

  console.log("product of all numbers is : ", productvalue);
};

// ------------------------------------------------------------------------

oddsCount([25, 16, 13, 9, 6, 7, 1]);
productOfAllNumbers([25, 16, 13, 9, 3, 7, 1]);
halfValues([25, 16, 13, 9, 3, 7, 1, 20, 45, 38, 55, 99, 100]);
oddNumbers([25, 16, 13, 9, 3, 7, 1, 20, 45, 38, 55, 99, 100]);
squareRoot([25, 16, 12, 9, 3, 4, 1, 20, 56, 38, 78, 99, 100]);
toUpper(["hello ", "good morning", "step", "impossible"]);
biggestElement(["asssignment", "this", "amazing", "rocks"]);
greaterThan5(["hello ", "good morning", "step", "impossible"]);
convertArrayToString(["this ", "asssignment ", "amazing ", "rocks"]);