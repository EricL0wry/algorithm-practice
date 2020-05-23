/* eslint-disable no-console */

// Given an array a that contains only numbers in the range from 1 to a.length,
// find the first duplicate number for which the second occurrence has the minimal
// index.In other words, if there are more than 1 duplicated numbers, return the
// number for which the second occurrence has a smaller index than the second
// occurrence of the other number does.If there are no such elements, return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a
// smaller index than the second occurrence of 2 does, so the answer is 3.

// For a = [2, 2], the output should be firstDuplicate(a) = 2;

// For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.

function firstDuplicate(a) {
  const duplicates = [];

  // Loop through array
  for (let i = 0; i < a.length; i++) {
    // For each value in the array, loop through the rest of the array
    for (let j = i + 1; j < a.length; j++) {
      // Set a variable to track if a duplicate exists in duplicates array
      const exists = false;
      // If a match is found, loop through duplicates array
      if (a[i] === a[j]) {
        for (let dupIndex = 0; dupIndex < duplicates.length; dupIndex++) {
          const duplicate = duplicates[dupIndex];
          // If a duplicate record is found in the duplicates array
          if (duplicate.number === a[j]) {
            // Update exists variable to true
            // Check to see if the current index is higher than the top index
            // If the current index is higher, update the topIndex property with the new index
            // If the current index is not higher, continue to the next value
            // Break
          } else {
            // If there is not a duplicate record in the duplicates array by the end of the loop
            // Create a new object with number and index at j, and push to duplicates array
          }
        }
      } else {
        // If a match is not found, continue to the next value
      }
    }
  }

}

// Obj Example
// {
//   number: 5,
//   topIndex: 4
// }
