/* eslint-disable no-console */

// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Pseudo Code

// First, check if there are an even amount of characters
//  If there is an odd amount of characters, return false
// Create variable for empty object to act as hash map
// Iterate through the string
//  For each character
//    Check for character property in hash map
//      If it exists as a property
//        Delete property
//      If undefined, create property with value of 1
// Check length of object using object.keys
//  If object has length return false
//  If object has no length return true

function palindromeRearranging(inputString) {

}
