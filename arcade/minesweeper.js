/* eslint-disable no-console */

// In the popular Minesweeper game you have a board with some mines and those
// cells that don't contain a mine have a number in it that indicates the total
// number of mines in the neighboring cells. Starting off with some arrangement
// of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]

// the output should be

// minesweeper(matrix) = [[1, 2, 1],
//                        [2, 1, 1],
//                        [1, 1, 1]]

// Notes

// To get count, we need to check all surrounding cells for true values
//  Easy for cells that are surrounded on each side
//  For cells that do not have bordering cells on some sides we need to create code that can handle this
// If a cell contains a mine, its count does NOT contain itself
// Zeros are possible

// Pseudo Code

// Set up a minefield variable with an empty array for our return value
// Loop through matrix of arrays
//  For each array, set up an array to hold counts and loop through each value in the array
//    Set up a variable to hold the number of mines surrounding the cell equal to 0
//    For each value in the array, check all bordering cells using helper function
//      Top border cells starts at row - 1, col - 1, scan 3 cells
//      Left and right border cells starts at current row, col - 1, scan 3 cells, ignore col
//      Bottom border cells starts at row + 1, col -1, scan 3 cells
//      If value is true, increment the mines variable
//      If value is current cell, ignore
//    After checking cells, push value to the array set up in the first for loop
//  After looping through row, push row array to minefield array
// Return Array

// Test Data [[true, false, false],
//            [false, true, false],
//            [false, false, false]]

function minesweeper(matrix) {
  const minefield = [];
  for (let row = 0; row < matrix.length; row++) {
    console.log('entered');
    const rowValues = [];
    for (let col = 0; col < matrix[row].length; col++) {

      const count = scanBorder(matrix, [row, col]);
      rowValues.push(count);
    }
    minefield.push(rowValues);
  }
  return minefield;
}

function scanBorder(matrix, coords) {
  const row = coords[0];
  const col = coords[1];
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    if (matrix[row + i] !== undefined) {
      for (let j = -1; j <= 1; j++) {
        if (matrix[row + i][col + j] !== undefined && !(col === col + j && row === row + i)) {
          if (matrix[row + i][col + j] === true) {
            count++;
          }
        }
      }
    }
  }

  return count;
}

console.log(minesweeper([[true, false, false], [false, true, false], [false, false, false]]));
