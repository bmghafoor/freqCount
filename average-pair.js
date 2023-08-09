function averagePair(arr, target) {
  if (arr.length === 0) return false;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    const average = (arr[leftIdx] + arr[rightIdx]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }
  return false;
}

module.exports = averagePair;
