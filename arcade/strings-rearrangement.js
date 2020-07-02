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

// ["ab", "ad", "ef", "eg"] = false
// [[null, true, false, false], [true, null, false, false], [false, false, null, true], [false, false, true, null]]
// [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]
// [1, 1, 1, 1] = 4

// ["ab", "af", "ff", "fe"] = true
// [[null, true, false, false], [true, null, true, false], [false, true, null, true], [false, false, true, null]]
// [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]
// [1, 2, 2, 1] = 6

// ["zzzzab", "zzzzbb", "zzzzaa"] = true
// [null, true, true], [true, null, false], [true, null, false]]
// [2, 1, 1] = 4

// ["abc", "bef", "bcc", "bec", "bbc", "bdc"] = true
// [[null, false, false, false, true, false], [false, null, false, true, false, false], [false, false, null, true, true, true], [false, true, true, null, true, true], [true, false, true, true, null, true], [false, false, true, true, true, null]]
// [1, 1, 3, 4, 4, 3] = 16

// ["ab", "bb", "aa"] = true
// [[null, true, true], [true, null, false], [true, false, null]]
// [2, 1, 1] = 4

// ["aba", "bbb", "bab"] = false
// [[null, false, false], [false, null, true], [false, true, null]]
// [0, 1, 1] = 2

// ["abc", "abx", "axx", "abc"] = false
// [[null, true, false, false], [true, null, true, true], [false, true, null false], [false, true, false, null]]
// [1, 3, 1, 1] = 6

function stringsRearrangement(inputArray) {
  let score = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const currStr = inputArray[i];
    let matches = 0;
    for (let j = 0; j < inputArray.length; j++) {
      const otherStr = inputArray[j];
      let match;
      if (j === i) {
        continue;
      } else {
        match = compareTwoStrings(currStr, otherStr);
      }
      if (match) matches++;
      if (currStr === otherStr) matches--;
    }
    if (matches === 0) return false;
    score += matches;
  }

  if (inputArray.length < 3 && score > 0) return true;
  if (score > inputArray.length) return true;

  return false;
}

function compareTwoStrings(str1, str2) {
  let mismatches = 0;

  for (let i = 0; i < str1.length; i++) {
    const str1char = str1[i];
    const str2char = str2[i];

    if (str1char !== str2char) {
      mismatches++;
    }
  }

  if (mismatches !== 1) {
    return false;
  }

  return true;
}

console.log(stringsRearrangement(["abc", "abx", "axx", "abc"]));
// console.log(compareTwoStrings('q', 'z'));
