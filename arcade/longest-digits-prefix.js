"use strict";
/* eslint-disable no-console */
/*
 * Given a string, output its longest prefix which contains only digits.
 * Example
 * For inputString = "123aa1", the output should be
 * longestDigitsPrefix(inputString) = "123".
 *
 * Pseudo Code
 * Iterate through inputString
 *  For each character, convert to number, check isNaN
 *
 *
 */
function longestDigitsPrefix(inputString) {
    let returnString = '';
    for (const character of inputString) {
        const currentValue = Number(character);
        if (Number.isNaN(currentValue) || character === ' ') {
            break;
        }
        returnString += character;
    }
    return returnString;
}
console.log(longestDigitsPrefix('123aa1'));
