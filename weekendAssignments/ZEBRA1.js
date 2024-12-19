function isLionInRange(range, index, jungle) {
  return jungle[index - range] === "L" || jungle[index + range] === "L";
}

function findZebraAndVerify(index, range, jungle) {
  if (index >= jungle.length) {
    return - 1;
  }

  if (jungle[index] === "Z" && isLionInRange(range, index, jungle)) {
    return index;
  }

  return findZebraAndVerify(index + 1, range, jungle);
}

function increaseRangeAndVerifyZebras(range, jungle) {
  if (range < jungle.length - 1) {
    return - 1;
  }

  return findZebraAndVerify(0, range + 1, jungle);
}


function findTheZebraInDanger(jungle) {

  return increaseRangeAndVerifyZebras(0, 0, jungle);
}

function findPosOfZebraInDanger(jungle) {
  if (jungle.length < 2) {
    return -1;
  }

  return findTheZebraInDanger(jungle);
}

// console.log(findPosOfZebraInDanger("L Z L  Z  L"), 2);
console.log(findPosOfZebraInDanger("L   Z   L  Z  L"), 11);
// console.log(findPosOfZebraInDanger("LZ"), 1);
// console.log(findPosOfZebraInDanger("L Z"), 2);
// console.log(findPosOfZebraInDanger("LZ L Z"), 1);
// console.log(findPosOfZebraInDanger("L Z LZ"), 5);
// console.log(findPosOfZebraInDanger("ZL"), 0);
// console.log(findPosOfZebraInDanger("ZZ    Z  Z"), - 1);
// console.log(findPosOfZebraInDanger("Z"), - 1);
// console.log(findPosOfZebraInDanger("L"), - 1);
// console.log(findPosOfZebraInDanger(" "), - 1);