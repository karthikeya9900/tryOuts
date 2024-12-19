let year = "";
let month = "";
let day = "";
const format1 = "dd-mm-yyyy";
const format2 = "mm-dd-yyyy";
const format3 = "yyyy-mm-dd";

function isMonthValid(month) {
  if (+month >= 1 && +month <= 12) {
    return true;
  }
  return false;
}

function isYearValid(year) {
  if (+year >= 1 && +year <= 9999) {
    return true;
  }

  return false;
}

function spaceValidator(date) {
  for (let index = 0; index < 10; index++) {
    if (date[index] === " ") {
      return true;
    }
  }
  return false;
}

function isLeapYear(year) {
  if (+year % 400 === 0) {
    return true;
  }

  return (+year % 4 === 0) && (+year % 100 !== 0);
}

function isDateValidForFebruary(day, month, year) {

  const isDateValidfor29 = (+day >= 1 && +day <= 29 && +month === 2);
  const isDateValidfor28 = (+day >= 1 && +day <= 28 && +month === 2);

  if (isLeapYear(year) && isDateValidfor29) {
    return true;
  }

  if (isDateValidfor28) {
    return true;
  }

  return false;
}

function isDateValidForMonths31days(day, month) {
  const isItAValidDate = +day >= 1 && +day <= 31;
  console.log(isItAValidDate, "isitavalidate");

  const isValidMonthsSet1 = +month === 1 || +month === 3 || +month === 5;
  console.log(isValidMonthsSet1, "ismonthssetvalid");

  const isValidMonthsSet2 = +month === 7 || +month === 8 || +month === 10;
  const conditionPart1 = isValidMonthsSet2 || +month === 12;
  console.log(conditionPart1, "conditionpart1");


  if (isItAValidDate && (isValidMonthsSet1 || conditionPart1)) {
    return true;
  }

  return false;
}

function isDateValidForMonths30days(date, month) {
  const isItAValidDate = +date >= 1 && +date <= 30;
  const isValidMonthsSet1 = +month === 4 || +month === 6 || +month === 9;

  if (isItAValidDate && (isValidMonthsSet1 || +month === 11)) {
    return true;
  }

  return false;
}

function isDayValid(day, month, year) {

  console.log(day, "day ");
  console.log(month, "month ");
  console.log(year, "year ");

  const condition1 = isDateValidForFebruary(day, month, year);
  console.log(condition1, "c1");
  const condition2 = isDateValidForMonths30days(day, month);
  console.log(condition2, "c2");
  const condition3 = isDateValidForMonths31days(day, month);
  console.log(condition3, "c3");
  if (condition1 || condition2 || condition3) {
    return true;
  }

  return false;
}

function getDateMonthYear(format, date) {
  if (format === format1) {
    day = date[0] + date[1];
    month = date[3] + date[4];
    year = date[6] + date[7] + date[8] + date[9];
  }
  if (format === format2) {
    day = date[3] + date[4];
    month = date[0] + date[1];
    year = date[6] + date[7] + date[8] + date[9];
  }
  if (format === format3) {
    day = date[8] + date[9];
    month = date[5] + date[6];
    year = date[0] + date[1] + date[2] + date[3];
  }
}

function isGivenDateMonthYearValid(year, month, day) {
  if (!isDayValid(day, month, year)) {
    return "invalid day";
  }

  if (!isMonthValid(month)) {
    return "invalid month";
  }

  if (!isYearValid(year)) {
    return "invalid year";
  }

  return "valid";
}

function validate(format, date) {
  if (!(format === format1 || format === format2 || format === format3)) {
    return "invalid format";
  }

  if (spaceValidator(date)) {
    return "date not according to format";
  }


  getDateMonthYear(format, date);
  return isGivenDateMonthYearValid(year, month, day);
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0000', 'invalid month');
  testValidate('mm-dd-yyyy', '01-60-0000', 'invalid day');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');

  testValidate('mm-dd-yyyy', '13-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '32-12-2000', 'invalid day');
  testValidate('mm-dd-yyyy', '31-1 -2000', 'date not according to format');
  testValidate('aa-bb-cccc', '01-01-2020', 'invalid format');
}

testAll();
// console.log(isMonthValid("12"));
// console.log(isMonthValid("0"));
// console.log(isMonthValid("13"));
// console.log(isMonthValid("01"));
// console.log(isMonthValid("12"));
// console.log(isMonthValid("06"));
// console.log(isYearValid("0000"));

// console.log(isYearValid("0001"));
// console.log(isYearValid("10000"));
// console.log(isYearValid("999"));
// console.log(isYearValid("9999"));
// console.log(isYearValid("1"));
// console.log(isYearValid(""));
// console.log(spaceValidator("01-01-2020"));
// console.log(spaceValidator("01 01-2020"));
// console.log(spaceValidator("01-01-  20"));
// console.log(spaceValidator("01- 1-2020"));
// console.log(spaceValidator("1 -11-2020"));
// console.log(spaceValidator(" 1-11-   1"));
// console.log(spaceValidator("10- 1-1111"));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2004));
// console.log(isLeapYear(1900));
// console.log(isLeapYear(2207));
// console.log(isDateValidForFebruary("29", "2000"));
// console.log(isDateValidForFebruary("21", "2001"));
// console.log(isDateValidForFebruary("28", "2001"));
// console.log(isDateValidForFebruary("29", "2001"));
// console.log(isDateValidForMonths31days("01", "12"));
// console.log(isDateValidForMonths31days("31", "04"));
// console.log(isDateValidForMonths31days("16", "06"));
// console.log(isDateValidForMonths31days("22", "07"));
// console.log(isDateValidForMonths31days("10", "01"));
// console.log(isDateValidForMonths31days("30", "01"));
// console.log(isDateValidForMonths31days("0", "05"));
// console.log(isDateValidForMonths31days("31", "02"));
// console.log(isDateValidForMonths31days("32", "12"));
// console.log(isDateValidForMonths30days("31", "04"));
// console.log(isDateValidForMonths30days("31", "06"));
// console.log(isDateValidForMonths30days("31", "09"));
// console.log(isDateValidForMonths30days("31", "11"));
// console.log(isDateValidForMonths30days("30", "04"));
// console.log(isDateValidForMonths30days("01", "04"));
// console.log(isDateValidForMonths30days("01", "04"));
// console.log(isDateValidForMonths30days("30", "04"));
// console.log(isDateValidForMonths30days("30", "04"));

console.log(isDayValid());






