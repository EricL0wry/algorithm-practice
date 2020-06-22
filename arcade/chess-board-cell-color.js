/* eslint-disable no-console */

// Given two cells on the standard chess board, determine whether they have the
// same color or not.

// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.

// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

// NOTES

// Each cell string provided contains a number and letter as a string
// We need to separately access each character. This can be done with index numbers
// We'll need a string of the alphabet to access to find the index of the letter
// index of the letter + 1 is a numerical representation of that letter
// Number and letter of each cell need to be checked for a remainder
// Find a way to create a string or number out of the remainder to check
// Examples
//  'a1' = '11' = (1%2) (1%2) = (1) (1) = 11 = true true = 2
//  'b1' = '21' = (2%2) (1%2) = (0) (1) = 01 = false true = 1
//  'a2' = '12' = (1%2) (2%2) = (1) (0) = 10 = true false = 1
//  'b2' = '22' = (2%2) (2%2) = (0) (0) = 00 = false false = 2
//  'a1' = 'b2' | 11 = 00
//  'b1' = 'a2' | 01 = 10
//  If both cells are 2, they are equal
//  If both cells are 1, they are equal

// Pseudo Code

// Create variable for cell1 made equal to helper function call passign in cell 1 value
// Create variable for cell2 made equal to helper function call passign in cell 2 value
// If two values are equal, return true
// If two values are not equal, return false

// Create a helper function
//  Create an alphabet string
//  Takes in cell string
//  Isolates each character, finds index of letter and substitures index + 1
//  Adds two values together, takes remainder
//  Returns returns remiander

// Test cell1 = "A1" and cell2 = "C3"

function chessBoardCellColor(cell1, cell2) {
  const cellOne = checkRemainder(cell1); // checkRemainder('A1') = 0
  const cellTwo = checkRemainder(cell2); // checkRemainder('C2') = 0
  return cellOne === cellTwo; // 0 === 0 = true
}

function checkRemainder(cell) { // cell = 'C2'
  const alphabet = 'abcdefghijklmnopqrstuvqxyz';
  const xAxis = alphabet.indexOf(cell[0].toLowerCase()) + 1; // cell[0] = 'C'.toLowerCase() = 'C', indexOf('c') = 2 + 1 = 3; xAxis = 3
  const yAxis = +cell[1]; // yAxis = +'3' = 3
  return (xAxis + yAxis) % 2; // 3+3 % 2 = 6 % 2 = 0
}

console.log(chessBoardCellColor('A1', 'C2'));
