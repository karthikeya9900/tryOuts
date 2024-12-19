function isLionInRange(index, range, jungle) {
  return jungle[index - range] === "L" || jungle[index + range] === "L";
}

function findTheZebraInDanger(index, range, jungle) {
  if (jungle[index] === "Z" && isLionInRange(index, range, jungle)) {
    return index;
  }

  if (range >= jungle.length) {
    return - 1;
  }

  return index < jungle.length ?
    findTheZebraInDanger(index + 1, range, jungle) :
    findTheZebraInDanger(0, range + 1, jungle);
}

function findPosOfZebraInDanger(jungle) {
  if (jungle.length < 2) {
    return -1;
  }

  return findTheZebraInDanger(0, 1, jungle);
}

console.log(findPosOfZebraInDanger("L Z L  Z  L"), 2);
console.log(findPosOfZebraInDanger("LZ"), 1);
console.log(findPosOfZebraInDanger("L Z"), 2);
console.log(findPosOfZebraInDanger("LZ L Z"), 1);
console.log(findPosOfZebraInDanger("L Z LZ"), 5);
console.log(findPosOfZebraInDanger("ZL"), 0);
console.log(findPosOfZebraInDanger("ZZ    Z  Z"), - 1);
console.log(findPosOfZebraInDanger("Z"), - 1);
console.log(findPosOfZebraInDanger("L"), - 1);
console.log(findPosOfZebraInDanger(" "), - 1);
