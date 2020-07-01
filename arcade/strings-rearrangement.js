/* eslint-disable no-console */

// Given an array of equal-length strings, you'd like to know if it's possible
// to rearrange the order of the elements in such a way that each consecutive
// pair of strings differ by exactly one character. Return true if it's possible,
// and false if not.

// Note: You're only rearranging the order of the strings, not the order of the
// letters within the strings!

// Example

// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false.

// There are 6 possible arrangements for these strings:

//   ["aba", "bbb", "bab"]
//   ["aba", "bab", "bbb"]
//   ["bbb", "aba", "bab"]
//   ["bbb", "bab", "aba"]
//   ["bab", "bbb", "aba"]
//   ["bab", "aba", "bbb"]

// None of these satisfy the condition of consecutive strings differing by 1
// character, so the answer is false.

// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.

// It's possible to arrange these strings in a way that each consecutive pair of
// strings differ by 1 character (eg: "aa", "ab", "bb" or "bb", "ab", "aa"), so
// return true.

// NOTES

// We need to find a way to iterate through the array and examine the letters
// within the string.
// Constraints: Array.length 2-10, string length 1-15
// Possibilities:
//  Letter counts
//    ['ab', 'bb', 'aa']
//    [{a:1, b:1}, {b:2}, {a:2}]
//  Some way to reduce the string to another type of value
//    Split ['ab', 'bb', 'aa'] becomes [['a', 'b'], ['b', 'b'], ['a', 'a']]
// Start by figuring out how to compare two strings

function stringsRearrangement(inputArray) {
  return true;
}

function compareTwoStrings(str1, str2) {
  const map = {};
  let mapLength = 0;
  let difference = 0;

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    if (map[char] === undefined) {
      map.char = 1;
    } else if (map[char]) {
      map.char += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];
    if (map[char] === undefined) {
      map.char = -1;
    } else if (map[char]) {
      map.char -= 1;
    }
  }

  for (let key in map) {
    difference += map[key];
    mapLength++;
  }

  if (difference === 0 && mapLength === 2) {
    return true;
  }

  return false;
}

console.log(stringsRearrangement());
console.log(compareTwoStrings('aa', 'ab'));
