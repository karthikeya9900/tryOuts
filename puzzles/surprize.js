const isGreaterThan100 = function (element) {
  return element > 100;
};

const isNegativeNumber = function (element) {
  return element < 0;
};

const isOddNumber = function (element) {
  return (element & 1) === 1;
};

const isLengthMoreThan3 = function (element) {
  return element.length > 3;
};

const atLeasOneFound = function (array, predicate) {
  for (const element of array) {
    if (predicate(element)) {
      return true;
    }
  }

  return false;
};

const allValid = function (array, predicate) {
  for (const element of array) {
    if (predicate(element)) {
      return false;
    }
  }

  return true;
};

console.log("is At least One Odd Found");

console.log(atLeasOneFound([1, 2, 3, 4, 5], isOddNumber));
console.log(atLeasOneFound([2, 4, 6, 10], isOddNumber));
console.log(atLeasOneFound([], isOddNumber));

console.log("-------------------------------------------");
console.log("is At least One Greater Than 100");

console.log(atLeasOneFound([1, 100, 3, 150, 5], isGreaterThan100));
console.log(atLeasOneFound([2, 4, 200, 10], isGreaterThan100));
console.log(atLeasOneFound([2, 4, 101, 10], isGreaterThan100));
console.log(atLeasOneFound([1, 100, 3, 10, 5], isGreaterThan100));
console.log(atLeasOneFound([]));

console.log("-------------------------------------------");
console.log("is Negative Element Found");

console.log(atLeasOneFound([1, 2, -3, 4, 5], isNegativeNumber));
console.log(atLeasOneFound([1, -4, 56], isNegativeNumber));
console.log(atLeasOneFound([2, 4, 6, 10], isNegativeNumber));
console.log(atLeasOneFound([]));

console.log("-------------------------------------------");
console.log("is Element Length More Than 3");

console.log(atLeasOneFound(["javascript", "av", "cd", "one"], isLengthMoreThan3));
console.log(atLeasOneFound(["good", "step", "stars"], isLengthMoreThan3));
console.log(atLeasOneFound(["hee", "hii", "an", "js"], isLengthMoreThan3));
console.log(atLeasOneFound([]));

//-----------------------------------------------------------------

console.log("for every validation")

console.log("is At least One Odd Found");

console.log(allValid([1, 2, 3, 4, 5], isOddNumber));
console.log(allValid([2, 4, 6, 10], isOddNumber));
console.log(allValid([], isOddNumber));

console.log("-------------------------------------------");
console.log("is At least One Greater Than 100");

console.log(allValid([1, 100, 3, 150, 5], isGreaterThan100));
console.log(allValid([2, 4, 200, 10], isGreaterThan100));
console.log(allValid([2, 4, 101, 10], isGreaterThan100));
console.log(allValid([1, 100, 3, 10, 5], isGreaterThan100));
console.log(allValid([]));

console.log("-------------------------------------------");
console.log("is Negative Element Found");

console.log(allValid([1, 2, -3, 4, 5], isNegativeNumber));
console.log(allValid([1, -4, 56], isNegativeNumber));
console.log(allValid([2, 4, 6, 10], isNegativeNumber));
console.log(allValid([]));

console.log("-------------------------------------------");
console.log("is Element Length More Than 3");

console.log(allValid(["javascript", "av", "cd", "one"], isLengthMoreThan3));
console.log(allValid(["good", "step", "stars"], isLengthMoreThan3));
console.log(allValid(["hee", "hii", "an", "js"], isLengthMoreThan3));
console.log(allValid([]));