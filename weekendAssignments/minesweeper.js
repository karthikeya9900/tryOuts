// Do not rename minefield, use it as input for your program.
// const minefield = "-*--\n---*\n*---\n-*--\n--*-\n---*";
// const minefield = "-*--";
const minefield = "-*--\n---*\n*---\n-*--\n--*-\n---*";
// Clear the mines one by one, always choosing the mine closest to the top left hand corner
// See the README for more details
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let sweptField = minefield;
let sweepingField = "";
let noofcolumns = 1;
let noOfBombsToBeDifused = 0;
let defusedCount = 0;
const BOMB = "*";
const DEFUSED = "+";
const newLine = "\n";

for(let index = 0; index < minefield.length; index++){
    if(minefield[index] === BOMB){
        noOfBombsToBeDifused++;
    }
}

//console.log(noOfBombsToBeDifused , "noofbombs");

while(defusedCount < noOfBombsToBeDifused){
    let shortestDistance = minefield.length;
    let column = 0;
    let row = 0;
    let distance = 0;
    let nearestBomb = minefield.length;
    sweepingField = sweptField; 
    for(let index = 0;index < minefield.length; index++){
        if(minefield[index === BOMB]){
            distance = row + column;
        }

        nearestBomb = distance < nearestBomb  ? distance : nearestBomb; 
        
        if(minefield[index] === newLine){
            row++;
            column = 0;
        }
    }


    
    for (let location = 0; location < minefield.length; location++) {
        if (location === shortestDistance) {
            sweepingField = sweepingField + DEFUSED;
        }
        if (location !== shortestDistance) {
            sweepingField = sweepingField + minefield[location];
        }
    }
    sweptField = "";
    defusedCount++;
    sweptField = sweepingField;
}

console.log(sweptField);































// while (index < minefield.length) {
//     if (minefield[index] === bomb) {
//         cleanedfield = cleanedfield + difused;
//         console.log("difused one bomb");
//     }

//     if (minefield[index] !== bomb) {
//         cleanedfield = cleanedfield + minefield[index];
//     }

//     if (minefield[index] === newline) {
//         noofcolumns++;
//         verticalIndex = 0;

//     }

//     // console.log(verticalIndex, "verticalIndex");
//     verticalIndex++;
//     index++;
// }
// console.log(cleanedfield);


// // console.log(noofcolumns, "noofcolumns");
// // console.log(minefield);
