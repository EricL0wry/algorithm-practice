"use strict";
/* eslint-disable no-console */
function differentSymbolsNaive(s) {
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        if (map[character] === undefined) {
            map[character] = 1;
        }
    }
    let characterCount = 0;
    for (const key in map) {
        characterCount += map[key];
    }
    return characterCount;
}
console.log(differentSymbolsNaive('cabca'));
