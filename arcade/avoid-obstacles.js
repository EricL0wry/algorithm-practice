/* eslint-disable no-console */

// You are given an array of integers representing coordinates of obstacles
// situated on a straight line.

// Assume that you are jumping from the point with coordinate 0 to the right.
// You are allowed only to make jumps of the same length represented by some
// integer.

// Find the minimal length of the jump enough to avoid all the obstacles.

// Example

// For inputArray = [5, 3, 6, 7, 9], the output should be
// avoidObstacles(inputArray) = 4.

// Notes

// Sorted array = [3, 5, 6, 7, 9]
// Can we divide each value by our jump length.
// If remainder is 0, it's a hit and that number will not work
// Would require nested for loops, poor time complexity

// Steps

// Set up a variable as loop limiter to hold boolean value
// Set up a variable ot hold jump length
// Set up while loop to count up through possible jump lengths starting at two
// For each jump length, iterate through the input array
//  For each element in the array, divide element by jump length
//    If there is no remainder, it is a collision. Break out of loop.
//    If there is a remainder
//      If index = arr.length -1, we found the shortest jump length
//        Set variable to true so while loop can be exited
//        Set jump length variable
// Return jump length variable

// TEST [5, 3, 6, 7, 9]

function avoidObstacles(inputArray) {
  let noCollisions = false; // true
  let jumpLength = 2; // 4

  while (noCollisions === false) {
    for (let i = 0; i < inputArray.length; i++) { // i = 5, length = 5
      const element = inputArray[i]; // element = 9
      const remainder = element % jumpLength; // remainder = 9 % 4 = 1
      if (!remainder) break;
      if (remainder) {
        if (i === inputArray.length - 1) { // inputArray.length - 1 = 4
          noCollisions = true;
        }
      }
    }
    if (!noCollisions) {
      jumpLength++;
    }
  }
  return jumpLength;
}

console.log(avoidObstacles([5, 8, 9, 13, 14]));
