// --------------------------------- reverse array -------------------------

const unshiftTheElement = function (accumulator, element) {
  accumulator.unshift(element);

  return accumulator;
};

const reverseArray = function (array) {
  const result = array.reduce(unshiftTheElement, []);

  return result;
};

// --------------------------------- reverse string -------------------------


const reverseString = function (string) {
  const stringInArray = Array.from(string);
  const result = stringInArray.reduce(unshiftTheElement, []);

  return result.join("");
};


// --------------------------------- nth fibonacci -------------------------


const addFibonacciTerms = function ([previous, current]) {
  const nextValue = previous + current;

  previous = current;
  current = nextValue;

  return [previous, current];
};

const nthFibonacci = function (nthTerm) {
  const noOfTerms = Array.from({ length: nthTerm });
  const previousvalues = [-1, 1];
  const finalValues = noOfTerms.reduce(addFibonacciTerms, previousvalues);
  const nthTermValue = finalValues[1];

  return nthTermValue;
};

// --------------------------------- second highest ------------------------


const findSecondLargest = function (array) {
  const largestNumber = Math.max(array);
  console.log(largestNumber);
  
  const largestNumberIndex = array.indexOf(largestNumber);
  const copyArray = Array.from(array);

  copyArray.splice(largestNumberIndex, 1);

  return Math.max(copyArray);
};

// --------------------------------- test cases --------------------------

function testStringReverse() {
  console.log("------------------ string reverse ------------------------");

  console.log(reverseString("hello world"), "\nexpected:", "dlrow olleh");
  console.log(reverseString("hello javascript"), "\nexpected:",
    "tpircsavaj olleh");
  console.log(reverseString("hello good morning sunday monday"), "\nexpected:",
    "yadnom yadnus gninrom doog olleh");
}

function testNthFibonacci() {
  console.log("---------------------- nth fibonacci -----------------------");

  console.log(nthFibonacci(1), "expected:", 0);
  console.log(nthFibonacci(2), "expected:", 1);
  console.log(nthFibonacci(3), "expected:", 1);
  console.log(nthFibonacci(4), "expected:", 2);
  console.log(nthFibonacci(5), "expected:", 3);
  console.log(nthFibonacci(6), "expected:", 5);
  console.log(nthFibonacci(7), "expected:", 8);
  console.log(nthFibonacci(9), "expected:", 21);
  console.log(nthFibonacci(15), "expected:", 377);
  console.log(nthFibonacci(56), "expected:", 139583862445);
}

function testSecondHighestNumber() {
  console.log("----------------------- second highest -----------------------");

  console.log(findSecondLargest([12, 4, 2, 67, 3, 99]), "expected:", 67);
  console.log(findSecondLargest([12, 4, 2, 67, 3, 23]), "expected:", 23);
  console.log(findSecondLargest([12, 4, 2, 67, 82, 3, 23, 115]),
    "expected:", 82);
  console.log(findSecondLargest([140, 12, 4, 2, 67, 82, 3, 23, 115]),
    "expected:", 115);
}

function testReverseArray() {
  console.log("------------------- reverse array -------------------------");

  console.log(reverseArray([]), "\nexpected:", []);
  console.log(reverseArray(["hello"]), "\nexpected:", ["hello"]);
  console.log(reverseArray(["hello", 1234]), "\nexpected:", [1234, "hello"]);
  console.log(reverseArray(["hello", 123, ["fwef"]]), "\nexpected:",
    [["fwef"], 123, "hello"]);
  console.log(reverseArray(["hello", 123, ["fwef"], "rtyu", 5678, ["good"]]),
    "\nexpected:", [["good"], 5678, "rtyu", ["fwef"], 123, "hello"]);
}

// ------------------------- test cases calling --------------------------

testSecondHighestNumber();
testNthFibonacci();
testStringReverse();
testReverseArray();