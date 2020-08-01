/* eslint-disable no-console */

/*
 * A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter
 * in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.
 *
 * Given a string, check whether it is beautiful.
 *
 * Example
 *
 * For inputString = "bbbaacdafe", the output should be isBeautifulString(inputString) = true.
 * This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any
 * letters that appear more frequently than the previous letter, this string qualifies as beautiful.
 *
 * For inputString = "aabbb", the output should be isBeautifulString(inputString) = false.
 * Since there are more bs than as, this string is not beautiful.
 *
 * For inputString = "bbc", the output should be isBeautifulString(inputString) = false.
 * Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more
 * bs than as.
 *
 * Pseudo Code
 *
 * Iterate through string, and create hash map with letter counts
 * Iterate through the hash map and place entries as objects in an array
 * Sort array
 * Iterate through Array and check count for each against the next letter in the array
 *
 */

interface CharMap {
  [key: string]: number;
}

function isBeautifulString(inputString: string): boolean {
  const charMap: CharMap = {};
  let charArray: CharMap[] = [];

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charMap[char] >= 1) {
      charMap[char] += 1;
    } else {
      charMap[char] = 1;
    }
  }

  for (const key in charMap) {
    charArray.push({
      [key]: charMap[key],
    });
  }

  charArray.sort((a, b) => sortArray(a, b));

  for (let i = charArray.length - 1; i >= 0; i--) {
    const currKey = Object.keys(charArray[i])[0];

    if (i !== 0) {
      const prevKey = Object.keys(charArray[i - 1])[0];
      if (
        charArray[i][currKey] > charArray[i - 1][prevKey] ||
        prevKey.charCodeAt(0) !== currKey.charCodeAt(0) - 1
      ) {
        return false;
      }
    }
    if (i == 0) {
      if (currKey.charCodeAt(0) !== 97) {
        return false;
      }
    }
  }

  return true;
}

function sortArray(a: CharMap, b: CharMap): number {
  if (Object.keys(a)[0].charCodeAt(0) > Object.keys(b)[0].charCodeAt(0)) {
    return 1;
  }
  if (Object.keys(a)[0].charCodeAt(0) < Object.keys(b)[0].charCodeAt(0)) {
    return -1;
  }

  return 0;
}

console.log(isBeautifulString('zaa'));
