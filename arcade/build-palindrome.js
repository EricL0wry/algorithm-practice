"use strict";
/* eslint-disable no-console */
/*
 *
 * Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial 3
 * string to make it a palindrome.
 *
 * Example
 *
 * For st = "abcdc", the output should be
 * buildPalindrome(st) = "abcdcba".
 *
 */
function buildPalindrome(st) {
    const reversedInputString = reverseString(st);
    if (st === reversedInputString) {
        return st;
    }
    let palindrome = '';
    for (let i = 1; i < reversedInputString.length; i++) {
        let returnString = st;
        returnString += reversedInputString.slice(reversedInputString.length - i);
        if (checkPalindrome(returnString)) {
            palindrome = returnString;
            break;
        }
    }
    return palindrome;
}
function checkPalindrome(st) {
    return st === reverseString(st);
}
function reverseString(st) {
    return st.split('').reverse().join('');
}
console.log(buildPalindrome('ababab'));
