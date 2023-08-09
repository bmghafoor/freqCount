function separatePositive(array) {
  const len = array.length;
  let negCount = 0;

  for (let i = 0; i < len - negCount; i++) {
    if (array[i] < 0) {
      array.push(array.splice(i, 1)[0]);
      i--;
      negCount++;
    }
  }
  return array;
}

module.exports = separatePositive;
