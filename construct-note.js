// make a helper function to count the number and occurence of each letter in a string
function charCount(str) {
  const obj = {};
  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }
  return obj;
}
function constructNote(message, strings) {
  // handle edge cases
  if (message.length === 0 && strings.length > 0) {
    return true;
  }
  // create an object for each input
  const messageFreqCount = charCount(message);
  const stringsFreqCount = charCount(strings);
  // loop over the keys in obj of the message
  for (let key in messageFreqCount) {
    if (!stringsFreqCount[key]) {
      return false;
    }
    if (messageFreqCount[key] > stringsFreqCount[key]) {
      return false;
    }
  }
  return true;
}

module.exports = constructNote;
