/* eslint-disable no-console */

// You are given an array of integers. On each move you are allowed to increase
// exactly one of its element by one.Find the minimal number of moves required
// to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be
// arrayChange(inputArray) = 3.

// Pseudo Code

// Create variable to hold moveCount
// Iterate through the array starting at i = 1
//  If array[i] === to array[i-1]
//    Add one to array[i]
//    Increment moveCount by one
//  If array[i] > array[i-1]
//    Continue
//  If array[i] < array[i-1]
//    Create a variable to hold difference of array[i-1] - array[i]
//    Add one to this value for the amount needed to make strictly increasing
//    Add total value to array[i]
//    Add total value to moveCount

function arrayChange(inputArray) {

}
