"use strict";
/* eslint-disable no-console */
/*
 *
 * Determine if the given character is a digit or not.
 *
 * Example
 * For symbol = '0', the output should be
 * isDigit(symbol) = true;
 * For symbol = '-', the output should be
 * isDigit(symbol) = false.
 *
 */
function isDigit(symbol) {
    return /[0-9]/.test(symbol);
}
console.log(isDigit('5'));
