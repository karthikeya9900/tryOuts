const instructions = 13133;
const roverX = 0;
const roverY = 0;
const heading = 0;

const stringInstructionSet = "" + instructions;
const noOfInstructions = stringInstructionSet.length;
let currentHeading = heading;
let currentLocationOnXaxis = roverX;
let currentLocationOnYaxis = roverY;
let currentInstruction = 0;

while (currentInstruction < noOfInstructions) {
    const instruction = + stringInstructionSet[currentInstruction];
    if (instruction === 1) {
        currentHeading = (currentHeading + 3) % 4;
    }

    if (instruction === 2) {
        currentHeading = (currentHeading + 1) % 4;
    }

    if (instruction === 3) {
        let movementOnXaxis = 0;
        let movementOnYaxis = 0;

        switch (currentHeading) {
            case 0:
                movementOnYaxis = 1;
                break;
            case 1:
                movementOnXaxis = 1;
                break;
            case 2:
                movementOnYaxis = -1;
                break;
            case 3:
                movementOnXaxis = -1;
                break;
        }

        currentLocationOnXaxis = currentLocationOnXaxis + movementOnXaxis;
        currentLocationOnYaxis = currentLocationOnYaxis + movementOnYaxis;
    }
    currentInstruction = currentInstruction + 1;
}
console.log(currentLocationOnXaxis, currentLocationOnYaxis, currentHeading);

/*
0 0 0 1     =>      0 0 3
0 0 1 1     =>      0 0 0
0 0 2 1     =>      0 0 1 
0 0 3 1     =>      0 0 2

0 0 0 2     =>      0 0 1   
0 0 1 2     =>      0 0 2
0 0 2 2     =>      0 0 3     
0 0 3 2     =>      0 0 0     

0 0 0 3     =>      0 1 0
0 0 1 3     =>      1 0 1
0 0 2 3     =>      0 -1 2
0 0 3 3     =>      -1 0 3
*/