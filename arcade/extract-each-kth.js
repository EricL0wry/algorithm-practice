/* eslint-disable no-console */

// Given array of integers, remove each kth element from it.

// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should be
// extractEachKth(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].

// Notes

// create a variable holding an empty return array
// Iterate through input array
// If not a kth element, push to return array
// If it is a kth element ((i+1) % k = 0), do not push to return array
// Return array

// Pseudo code

// Declare returnArray variable and set equal to empty array
// Create for loop to iterate through the inputArray
//  For each entry in the array::
//    If the item number (i+1) divided by k has a remainder
//      Push element to return array
//    If the item number (i+1) divided by k has no remainder
//      Continue (do not push to return array)
// Return the returnArray

// Test inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3

function extractEachKth(inputArray, k) {

  const returnArray = []; // returnArray = [1, 2, 4, 5, 7, 8, 10]

  for (let i = 0; i < inputArray.length; i++) {  // i = 10, length = 10
    const itemNumber = i + 1;  //  itemNumber = 9 + 1 = 10
    const element = inputArray[i];  // element = 10

    if (itemNumber % k) {  // 10 % 3 = 1
      returnArray.push(element);
    }
  }

  return returnArray;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
