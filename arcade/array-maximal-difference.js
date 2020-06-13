/* eslint-disable no-console */

// Given an array of integers, find the maximal absolute difference between any
// two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

// Pseudo Code

// Set up variable to hold current max difference, set value to 0
// Loop through input array
//  Create variable to hold current value
//  For each value
//    If there is a value at i + 1
//      Subtract the value from the value at i
//      Convert to positive
//      Compare to max differnce variable
//        If larger, update max difference variable
//    If no value at i + 1
//      Continue
// return max difference variable

// Test [10, 11, 13]

function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0; // maxDiff = 2
  for (let i = 0; i < inputArray.length; i++) { // i = 2, length = 3
    const curr = inputArray[i]; // curr = 13
    const adj = inputArray[i + 1] || null; // adj = null
    console.log('index', i, 'current', curr, 'adj', adj, 'maxDiff', maxDiff);
    if (adj) {
      const diff = Math.abs(curr - adj); // diff = 2
      console.log(diff);
      if (diff > maxDiff) {
        console.log('diff > maxDiff');
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}

console.log('answer', arrayMaximalAdjacentDifference([10, 11, 13]));
