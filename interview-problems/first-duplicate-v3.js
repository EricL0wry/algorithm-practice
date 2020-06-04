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

// PSEUDO CODE

// Create hashmap to hold values
// loop through each value in the array
// for each value in array, check to see if it exists in the hashmap
// if it exists in the hashmap, return the number
// if not, continue

function firstDuplicate(a) {
  const items = {};

  for (let i = 0; i < a.length; i++) {

    const currValue = a[i];
    const currIndex = i;
    if (items[currValue] >= 0) {
      return currValue;
    } else {
      items[currValue] = currIndex;
    }
  }
  return -1;
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
