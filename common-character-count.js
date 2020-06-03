/* eslint-disable no-console */

// Given two strings, find the number of common characters between them.
// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

// Pseudo code

// Iterate through each string
// Set up a separate hash table for each string
// store letter counts for each string in each hash table
// compare both hash tables
// if letter exists, return lower number

function commonCharacterCount(s1, s2) {
  const s1count = {};
  const s2count = {};

  for (let i = 0; i < s1.length; i++) {
    const letter = s1[i];
    if (s1count[letter]) {
      s1count[letter] = s1count[letter] += 1;
    } else {
      s1count[letter] = 1;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    const letter = s2[i];
    if (s2count[letter]) {
      s2count[letter] = s2count[letter] += 1;
    } else {
      s2count[letter] = 1;
    }
  }

  let commonCount = 0;

  for (const key in s1count) {
    if (s2count[key]) {
      s1count[key] > s2count[key] ? commonCount += s2count[key] : commonCount += s1count[key];
    }
  }

  return commonCount;

}

console.log(commonCharacterCount('aabcc', 'adcaa'));
