"use strict";
/* eslint-disable no-console */
function isBeautifulString(inputString) {
    const charMap = {};
    let charArray = [];
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];
        if (charMap[char] >= 1) {
            charMap[char] += 1;
        }
        else {
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
            if (charArray[i][currKey] > charArray[i - 1][prevKey] ||
                prevKey.charCodeAt(0) !== currKey.charCodeAt(0) - 1) {
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
function sortArray(a, b) {
    if (Object.keys(a)[0].charCodeAt(0) > Object.keys(b)[0].charCodeAt(0)) {
        return 1;
    }
    if (Object.keys(a)[0].charCodeAt(0) < Object.keys(b)[0].charCodeAt(0)) {
        return -1;
    }
    return 0;
}
console.log(isBeautifulString('zaa'));
