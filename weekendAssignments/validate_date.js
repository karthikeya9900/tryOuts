const format = 'yyyy-mm-dd';
const date = '2001-01-31';

// Validate the given date against the format string

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE 

let isLeapYear = false;
let isValid = "invalid";
let yyyy = "";
let mm = "";
let dd = "";
let spaceFound = false;

for (let index = 0; index < date.length; index++) {
    if (date[index] === " " && date.length === 10) {
        spaceFound = true;
    }
}
if (!spaceFound) {
    switch (format) {
        case "dd-mm-yyyy":
            dd = +(date[0] + date[1]); 
            mm = +(date[3] + date[4]);
            yyyy = +(date[6] + date[7] + date[8] + date[9]);
            break;

        case "mm-dd-yyyy":
            mm = +(date[0] + date[1]);
            dd = +(date[3] + date[4]);
            yyyy = +(date[6] + date[7] + date[8] + date[9]);
            break;

        case "yyyy-mm-dd":
            yyyy = +(date[0] + date[1] + date[2] + date[3]);
            mm = +(date[5] + date[6]);
            dd = +(date[8] + date[9]);
            break;
    }
    const monOf31daysSet1 = mm === 1 || mm === 3 || mm === 5;
    const monOf31DaysSet2 = mm === 7 || mm === 8 || mm === 10 || (mm === 12);

    const monOf30DaysSet1 = mm === 4 || mm === 6;
    const monof30DaysSet2 = mm === 9 || mm === 11;

    if (mm === 2) {

        const isDivBy4 = yyyy % 4 === 0;
        const isNotDivBy100 = yyyy % 100 !== 0;
        const isDivBy100 = yyyy % 100 === 0;
        const isDivBy400 = yyyy % 400 === 0;

        isLeapYear = isDivBy4 && isNotDivBy100 || isDivBy100 && isDivBy400;
    }

    const isValidFor31 = dd >= 1 && dd <= 31 && (monOf31daysSet1 || monOf31DaysSet2);

    const isValidFor30 = dd >= 1 && dd <= 30 && (monOf30DaysSet1 || monof30DaysSet2);

    const isValidDateForFeb = isLeapYear ? dd >= 1 && dd <= 29 : dd >= 1 && dd <= 28;

    const isvalidDate = isValidDateForFeb || isValidFor30 || isValidFor31;
    const isMonthValid = mm >= 1 && mm <= 12;
    const isyearValid = yyyy >= 1 && yyyy <= 9999;

    if (isvalidDate && isMonthValid && isyearValid) {
        isValid = "valid";
    }
}

console.log(isValid);