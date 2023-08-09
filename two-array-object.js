function twoArrayObject(arr1, arr2) {
  const obj = {};
  for (let i = 0; i < arr1.length; i++) {
    let key;
    if (!arr2[i]) {
      key = null;
    } else {
      key = arr2[i];
    }
    obj[arr1[i]] = key;
  }
  return obj;
}

module.exports = twoArrayObject;
