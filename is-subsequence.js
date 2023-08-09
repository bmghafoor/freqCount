// make a helper function to determine frequency count
function freqCount(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}

// Once we've determined that the elements are same in arrays, this function will tell us if they're in the right order
function checkArraySequence(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true; // All elements are the same in the same order
}

function isSubsequence(str1, str2) {
  // create objects for each string
  const str1FreqObj = freqCount(str1);
  const str2FreqObj = freqCount(str2);
  const str1Keys = Object.keys(str1FreqObj);
  const str2Keys = Object.keys(str2FreqObj);
  // filter the second array so it only incldues the elements from the first array
  const filteredArray = str2Keys.filter((value) => str1Keys.includes(value));
  // loop over the keys in first string
  for (let key in str1FreqObj) {
    // check to see if all occurences are in str2
    if (!str2FreqObj[key]) return false;
    // check to see if # of occurences match too
    if (str1FreqObj[key] > str2FreqObj[key]) return false;
  }

  return checkArraySequence(str1Keys, filteredArray);
}

module.exports = isSubsequence;
