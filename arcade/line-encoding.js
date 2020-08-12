"use strict";
/* eslint-disable no-console */
/*
 *
 * Given a string, return its encoding defined as follows:
 * First, the string is divided into the least possible number of disjoint substrings consisting of identical
 * characters
 *
 * For example, "aabbbc" is divided into ["aa", "bbb", "c"]
 *
 * Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating
 * character
 *
 * For example, substring "bbb" is replaced by "3b"
 *
 * Finally, all the new strings are concatenated together in the same order and a new string is returned.
 *
 * Example
 * For s = "aabbbc", the output should be
 * lineEncoding(s) = "2a3bc".
 *
 */
function lineEncoding(s) {
    let counter = 0;
    let prevChar = '';
    let currChar = '';
    let subString = '';
    let returnString = '';
    for (let i = 0; i < s.length; i++) {
        prevChar = currChar;
        currChar = s[i];
        if (i === 0) {
            subString += s[i];
            counter = 1;
            continue;
        }
        if (prevChar === currChar) {
            counter += 1;
            subString += s[i];
            if (i === s.length - 1) {
                returnString =
                    returnString +
                        `${subString.length > 1
                            ? subString.length.toString() + currChar
                            : currChar}`;
            }
            continue;
        }
        if (prevChar !== currChar) {
            returnString =
                returnString +
                    `${subString.length > 1
                        ? subString.length.toString() + prevChar
                        : prevChar}`;
            subString = currChar;
            counter = 1;
            if (i === s.length - 1) {
                returnString =
                    returnString +
                        `${subString.length > 1
                            ? subString.length.toString() + currChar
                            : currChar}`;
            }
            continue;
        }
    }
    return returnString;
}
console.log(lineEncoding('zzzz'));
