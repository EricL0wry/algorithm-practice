/* eslint-disable no-console */

// Correct variable names consist only of English letters, digits and underscores
// and they can't start with a digit.

// Check if the given string is a correct variable name.

// Example

// For name = "var_1__Int", the output should be
// variableName(name) = true;

// For name = "qq-q", the output should be
// variableName(name) = false;

// For name = "2w2", the output should be
// variableName(name) = false;

// Pseudo Code

// Input will be a string, so we're able to iterate through the characters of the string
// Perfect use case for regex but I can't put it together without referencing something
// Need to think of a way to hold a reference of acceptible characters
//  An array would be good, but we have to loop through an array of acceptible characters for each character which can add time complexity
//  An object can be used for quick lookup
//  Input name is within 10 characters, so time wouldn't be a big deal
// Create a reference array full of valid letter and symbol characters
// Create a second reference array full of number characters only
// Iterate through each character in the string
//   Convert character to lowercase
//   For the first character, check against the first array
//    If there's no match, return false
//   For each additional character, loop through both reference arrays
//    If there's no match, return false
// If all tests pass, return true

function variableName(name) {

  for (let i = 0; i < name.length; i++) {
    const char = name[i].toLowerCase();
    let letter = true;
    let number = true;
    if (i === 0) {
      letter = checkLetters(char);
      if (!letter) return false;
    } else {
      letter = checkLetters(char);
      number = checkNumbers(char);
      if (!letter && !number) return false;
      letter = true;
      number = true;
    }
  }
  return true;
}

function checkLetters(char) {
  const lettersSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '_'];
  for (let i = 0; i < lettersSymbols.length; i++) {
    if (lettersSymbols[i] === char) return true;
  }
  return false;
}

function checkNumbers(char) {
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === char) return true;
  }
  return false;
}

console.log(variableName('qq-q'));
