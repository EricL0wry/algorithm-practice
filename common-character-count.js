/* eslint-disable no-console */

// Given two strings, find the number of common characters between them.
// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Pseudo code

// Create an empty object to store values as a hash map
// Create a variable to hold common character count, set equal to 0
// Iterate through the letters in string 1
// For each character, check to see if the character is in the hash map
// If the character is in the hash map, increment that value by 1
// If the character is not in the hash map, add the character with a value of 1
// Iterate through the letters in string 2
// If the character is in the hash map, increment that value by 1
// If the character is not in the hash map, add the character with a value of 1
// Iterate through hash map using for in loop
// If a key has a value greater than 1
// Increment our char count variable
// Return our common character value

function commonCharacterCount(s1, s2) {

  const charMap = {};
  let commonCount = 0;

  const checkString = string => {
    console.log(charMap);
    for (let i = 0; i < string.length; i++) {
      console.log(string[i]);
      if (charMap[string[i]] > 0) {
        charMap[string[i]]++;
      } else {
        charMap[string[i]] = 1;
      }
    }
  };

  checkString(s1);
  checkString(s2);

  for (const keys in charMap) {
    if (charMap[keys] > 1) {
      commonCount++;
    }
  }

  return commonCount;

}

console.log(commonCharacterCount('aabcc', 'adcaa'));
