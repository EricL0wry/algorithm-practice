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

const a1 = [2, 1, 3, 5, 3, 2]; /* expected output 3 */
const a2 = [2, 2]; /* expected output 2 */
const a3 = [2, 4, 3, 5, 1]; /* expected output -1 */
const a4 = [1]; /* expected output -1 */
const a5 = [5, 5, 5, 5, 5]; /* expected output 5 */
const a6 = [2, 1]; /* expected output -1 */
const a7 = [2, 1, 3]; /* expected output -1 */
const a8 = [2, 3, 3]; /* expected output 3 */
const a9 = [3, 3, 3]; /* expected output 3 */
const a10 = [8, 4, 6, 2, 6, 4, 7, 9, 5, 8]; /* expected output 6 */
const a11 = [10, 6, 8, 4, 9, 1, 7, 2, 5, 3]; /* expected output -1 */
const a12 = [1, 1, 2, 2, 1]; /* expected output 1 */

function firstDuplicate(a) {
  let lowIndex;
  let lowNumber;

  // Loop through each item in the array
  for (let arrIndex = 0; arrIndex < a.length; arrIndex++) {
    // Check to see if your arrIndex > lowIndex
    if (lowIndex && lowIndex < arrIndex) {
      // If so, return lowNumber
      return lowNumber;
    }
    // For each item in the array
    // Loop through the rest of the array
    for (let dupIndex = arrIndex + 1; dupIndex < a.length; dupIndex++) {
      // If you have a match
      if (a[arrIndex] === a[dupIndex]) {
        // Check to see if that number matches lowNumber
        if (a[dupIndex] === lowNumber) {
          // If it matches lowNumber
          // Break - The low index could not possibly be lower from that number
          break;
        } else if (!lowIndex && !lowNumber) {
          // If there is no value for lowIndex and lowNumber, update them with the current values
          lowIndex = dupIndex;
          lowNumber = a[dupIndex];
          break;
        } else {
          // If it doesn't match lowNumber
          // Check low index
          // If lowIndex > the current index
          if (lowIndex > dupIndex) {
            // Update lowIndex and lowNumber with the current values
            lowIndex = dupIndex;
            lowNumber = a[dupIndex];
          } else {
          // If lowIndex < the current index
            // Break - there is no possible way for that number to have a lower index match
            break;
          }
        }
      } else {
      // If there is no match
      // continue
        continue;
      }
    }
  }
  if (!lowNumber) {
    return -1;
  } else {
    return lowNumber;
  }

}

console.log(firstDuplicate(a1));
console.log(firstDuplicate(a2));
console.log(firstDuplicate(a3));
console.log(firstDuplicate(a4));
console.log(firstDuplicate(a5));
console.log(firstDuplicate(a6));
console.log(firstDuplicate(a7));
console.log(firstDuplicate(a8));
console.log(firstDuplicate(a9));
console.log(firstDuplicate(a10));
console.log(firstDuplicate(a11));
console.log(firstDuplicate(a12));
