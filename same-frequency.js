function sumDigits(integer) {
  // Convert the integer to a string
  const str = Math.abs(integer).toString();

  // Initialize a variable to store the sum
  let sum = 0;

  // Iterate through each character (digit) in the string
  for (let i = 0; i < str.length; i++) {
    // Parse the character as an integer and add it to the sum
    sum += parseInt(str[i]);
  }

  return sum;
}
function sameFrequency(num1, num2) {
  if (sumDigits(num1) === sumDigits(num2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = sameFrequency;
