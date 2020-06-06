/* eslint-disable no-console */

// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example:

// For
// picture = ["abc",
//            "ded"]

// the output should be
// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

// Pseudo Code

// Create a variable for an empty return array
// Create a variable for top and bottom border equal to an empty string
// Create a variable to hold width equal to zero
// Before iterating through input array, check value.length at inputArray[1] to find width. width = length + 2
// Create a for loop to build your top/bottom border
//    For each unit in width, concat a '*' to your border variable
// Push a border to index 0 of your return array
// Iterate through input array
//    For each value in input array, conact with '*' at beginning and end
//    Push new string to return array
// After iterating through input array, push border to return array again to create bottom border
// Return array

function addBorder(picture) {

}
