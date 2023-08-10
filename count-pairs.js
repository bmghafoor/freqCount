// create a function to sort an array
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

function countPairs(arr, target) {
  const sortedArr = sortArray(arr);
  let leftIdx = 0;
  let rightIdx = sortedArr.length - 1;
  let count = 0;
  while (leftIdx < rightIdx) {
    const sum = sortedArr[leftIdx] + sortedArr[rightIdx];
    if (sum === target) {
      count++;
      leftIdx++;
      rightIdx--;
    } else if (sum > target) {
      rightIdx--;
    } else {
      leftIdx++;
    }
  }
  return count;
}

module.exports = countPairs;
