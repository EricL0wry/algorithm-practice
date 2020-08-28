"use strict";
/* eslint-disable no-console */
/*
 * Define a word as a sequence of consecutive English letters. Find the longest word from the given string.
 *
 * Example
 *
 * For text = "Ready, steady, go!", the output should be
 * longestWord(text) = "steady".
 */
function longestWord(text) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const wordArray = [];
    let currentWord = '';
    for (let i = 0; i < text.length; i++) {
        const character = text[i];
        if (alphabet.includes(character.toLowerCase())) {
            currentWord += character;
            if (i === text.length - 1) {
                wordArray.push(currentWord);
            }
        }
        else {
            if (currentWord.length) {
                wordArray.push(currentWord);
                currentWord = '';
            }
        }
    }
    console.log(wordArray);
    let maxLength = 0;
    let maxIndex = 0;
    for (let i = 0; i < wordArray.length; i++) {
        const word = wordArray[i];
        if (word.length > maxLength) {
            maxLength = word.length;
            maxIndex = i;
        }
    }
    return wordArray[maxIndex];
}
console.log(longestWord('rain§bow run'));
