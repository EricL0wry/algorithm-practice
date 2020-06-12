/* eslint-disable no-console */

// Given a string, find out if its characters can be rearranged to form a palindrome.

// Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.

// Pseudo Code

// Create variable to store whether even or odd amount of characters
// First, check if there are an even amount of characters
//  If there is an odd amount of characters, change variable to true
// Create variable for empty object to act as hash map
// Iterate through the string
//  For each character
//    Check for character property in hash map
//      If it exists as a property
//        Delete property
//      If undefined, create property with value of 1
// Check length of object using object.keys
//  If odd amount of characters
//    If length of object is 1, return true
//    If length of object is > 1 return false
//  If even amount of characters
//    If length of object is >1 return false
//    If length is 0, return true

// test "abbcabb"

function palindromeRearranging(inputString) {
  const charMap = {};
  let isOdd = false;
  if (inputString.length % 2) {
    isOdd = true;
  }

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charMap[char]) {
      delete charMap[char];
    } else {
      charMap[char] = 1;
    }
  }

  const keysArr = Object.keys(charMap);

  if (isOdd) {
    if (keysArr.length === 1) {
      return true;
    } else {
      return false;
    }
  } else {
    if (keysArr.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(palindromeRearranging('abbcabb'));
