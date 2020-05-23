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

// 33978
const special = [25291, 10593, 48905, 90778, 4254, 92081, 90295, 62807, 1401, 17648, 30571, 66118, 53112, 21466, 89448, 17461, 52847, 99967, 70798, 54129, 10106, 12232, 3698, 40866, 15416, 76417, 49220, 37995, 76421, 23201, 35012, 28694, 44452, 11612, 56462, 89627, 55753, 10883, 87164, 5109, 49539, 11221, 31154, 73923, 56136, 88884, 20582, 23415, 45418, 5277, 76998, 13142, 99679, 22479, 80357, 79400, 48266, 34425, 8849, 18121, 39527, 82196, 5701, 34669, 70192, 31285, 63397, 81859, 65597, 95162, 5302, 95734, 57966, 24770, 40756, 49174, 93466, 42185, 92916, 43218, 6106, 30477, 34392, 5640, 40991, 42265, 69288, 7675, 6398, 41257, 36760, 18042, 71069, 78580, 75962, 55270, 51194, 83611, 57136, 85724];

// -1
const special2 = [92729, 47916, 14807, 61066, 25195, 65164, 25478, 41785, 62766, 2946, 83513, 46409, 54384, 29043, 53748, 56790, 63956, 64343, 9537, 67318, 99102, 39514, 44741, 29690, 76372, 92912, 26299, 11988, 27492, 12189, 64584, 82645, 65287, 91792, 75480, 62122, 73058, 20654, 55411, 70200, 78244, 94151, 65346, 33018, 25229, 37655, 82774, 14166, 4084, 63135, 60606, 24337, 22666, 97104, 91226, 15928, 56027, 45300, 70424, 24303, 10385, 49827, 9781, 66919, 3634, 90142, 14121, 36620, 71148, 35522, 57493, 16287, 14458, 89190, 56029, 53541, 19946, 47196, 72540, 4417, 12088, 90729, 89430, 77489, 29940, 55708, 75319, 60765, 86625, 56781, 92769, 86004, 35074, 94774, 23131, 22769, 96447, 42050, 24039, 61268];

function firstDuplicate(a) {
  const duplicates = [];
  // Loop through array
  for (let i = 0; i < a.length; i++) {
    // For each value in the array, loop through the rest of the array
    for (let j = i + 1; j < a.length; j++) {
      // If a match is found, loop through duplicates array
      if (a[i] === a[j]) {
        // Create a variable to track whether or not there is a record in the duplicates array
        let exists = false;
        // Check to see if duplicates array has a length
        if (duplicates.length > 0) {
          for (let dupIndex = 0; dupIndex < duplicates.length; dupIndex++) {
            const duplicate = duplicates[dupIndex];
            // Check for duplicates in the duplicates array
            if (duplicate.number === a[j]) {
              // If a duplicate record is found in the duplicates array
              // Update exists variable to true
              exists = true;
              // Check to see if the current index is higher than the top index
              // if (duplicate.lowIndex < j) {
              //   // If the current index is higher, update the lowIndex property with the new index
              //   duplicate.lowIndex = j;
              //   // If the current index is not higher, continue to the next value
              // }
              // Break
              break;
            }
          }
          // After loop, check exists variable
          if (!exists) {
            // If there is not a duplicate record in the duplicates array by the end of the loop
            // Create a new object with number and index at j, and push to duplicates array
            duplicates.push({ number: a[i], lowIndex: j });
          }
        } else {
          duplicates.push({ number: a[i], lowIndex: j });
        }
      } else {
        // If a match is not found, continue to the next value
        continue;
      }
    }
  }

  // Check duplicates array for length of 0
  if (duplicates.length === 0) {
    // If duplicates array has no length, return -1;
    return -1;
  } else {
    // If duplicates array has a length, loop through to find object with lowest lowIndex
    let lowIndex;
    let lowNumber;
    for (let dupIndex = 0; dupIndex < duplicates.length; dupIndex++) {
      const duplicate = duplicates[dupIndex];
      if (!lowIndex && !lowNumber) {
        lowIndex = duplicate.lowIndex;
        lowNumber = duplicate.number;
      } else if (lowIndex > duplicate.lowIndex) {
        lowIndex = duplicate.lowIndex;
        lowNumber = duplicate.number;
      } else {
        continue;
      }
    }
    return lowNumber;
  }

}

// console.log(firstDuplicate(a1));
// console.log(firstDuplicate(a2));
// console.log(firstDuplicate(a3));
// console.log(firstDuplicate(a4));
// console.log(firstDuplicate(a5));
// console.log(firstDuplicate(a6));
// console.log(firstDuplicate(a7));
// console.log(firstDuplicate(a8));
// console.log(firstDuplicate(a9));
// console.log(firstDuplicate(a10));
// console.log(firstDuplicate(a11));
// console.log(firstDuplicate(a12));

console.log(firstDuplicate(special));
console.log(firstDuplicate(special2));
