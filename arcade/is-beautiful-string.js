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
    console.log(charArray);
    for (let i = 0; i < charArray.length; i++) {
        if (i + 1 !== charArray.length) {
            const currKey = Object.keys(charArray[i])[0];
            const nextKey = Object.keys(charArray[i + 1])[0];
            if (charArray[i][currKey] < charArray[i + 1][nextKey]) {
                console.log(charArray[i][currKey], charArray[i + 1][nextKey]);
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
console.log(isBeautifulString('bbc'));
