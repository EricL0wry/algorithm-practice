/* eslint-disable no-console */

// Given a sorted array of integers a, your task is to determine which element
// of a is closest to all other values of a.In other words, find the element x
// in a, which minimizes the following sum

// abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)

// (where abs denotes the absolute value)

// If there are several possible answers, output the smallest one.

// Example

// For a = [2, 4, 7], the output should be absoluteValuesSumMinimization(a) = 4.

// for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.
// for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.
// for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.
// The lowest possible value is when x = 4, so the answer is 4.

// For a = [2, 3], the output should be absoluteValuesSumMinimization(a) = 2.

// for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.
// for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.
// Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.

// NOTES

// Need variables to track
//  Lowest Sum
//  Value that creates lowest sum
//    If tie for lowest sum, smallest value that creates lowest sum
// Need nested loops
// First loop iterates through each value in array
//  Creates variable to hold current value
//  Creates variable to hold running total
//  Second loop takes that value, iterates through all values
//    Subtracts current element from each element
//    Takes absolute value and adds to running total
//  Compares running total to lowest sum variable
//    If lower, updates lowest sum variable and current value
//    If equal, compares current value, updates if current value is smaller
//    If less than, no action
// Return value

function absoluteValuesSumMinimization(a) {
  let lowestSum = 0;
  let closestElement;
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    let total = 0;
    for (let j = 0; j < a.lenght; j++) {
      const curr = a[j];
      total += Math.abs(curr - element);
    }
    if (lowestSum === 0) {
      lowestSum = total;
      closestElement = element;
    }
    if (total < lowestSum) lowestSum = total;
    if (total === lowestSum) {
      if (element < closestElement || element === undefined) closestElement = element;
    }
  }
  return closestElement;
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
