"use strict";
/* eslint-disable no-console */
// Find the leftmost digit that occurs in a given string.
// Example
// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be
// firstDigit(inputString) = '2';
// For inputString = "0ss", the output should be
// firstDigit(inputString) = '0'.
function firstDigit(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (!isNaN(+inputString[i]) && inputString[i] !== ' ') {
            return inputString[i];
        }
    }
}
console.log(firstDigit("0ss"));
