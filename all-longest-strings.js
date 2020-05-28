/* eslint-disable no-console */

// Given an array of strings, return another array containing all of its longest strings.

//   Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Pseudo Code

// Create an empty array to store our return values
// Create a variable to store longest length
// Iterate through the array -- time complexity n
// If empty array.length = 0
// Push first value to array
// Update length variable with value.length
// Else if array.length is truthy
// Check to see if the value.length is > length variable
// If value.length > length variable
// Update length variable
// Clear array
// Push the value to the emptied array
// If value.length = length variable
// Push the value to the array
// If value.lengt < length variable
// Continue
// Return our return array!

function allLongestStrings(inputArray) {
  const returnArr = [];
  let maxLength = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const curr = inputArray[i];
    if (!returnArr.length) {
      returnArr.push(curr);
      maxLength = curr.length;
      continue;
    } else {
      if (curr.length > maxLength) {
        maxLength = curr.length;
        returnArr.length = 0;
        returnArr.push(curr);
      } else if (curr.length === maxLength) {
        returnArr.push(curr);
      } else {
        continue;
      }
    }
  }
  return returnArr;
}

console.log(allLongestStrings(['aa', 'abc', 'a', 'bdc']));
