/* eslint-disable no-console */

// After becoming famous, the CodeBots decided to move into a new building
// together.Each of the rooms has a different cost, and some of them are free, but
// there's a rumour that all the free rooms are haunted! Since the CodeBots are
// quite superstitious, they refuse to stay in any of the free rooms, or any of
// the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the
// cost of the room, your task is to return the total sum of all rooms that are
// suitable for the CodeBots(ie: add up all the values that don't appear
// below a 0).

// special considerations: matrix length of 1, matrix made up of arrays with length of 1

const matrix1 = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]; /* expected output: 9 */

function matrixElementsSum(matrix) {
  let roomTotal = 0;
  const matrixHeight = matrix.length;
  const matrixWidth = matrix[0].length;

  for (let i = 0; i < matrixWidth; i++) {
    for (let j = 0; j < matrixHeight; j++) {
      if (matrix[j][i] === 0) {
        break;
      } else {
        roomTotal += matrix[j][i];
      }
    }
  }
  return roomTotal;
}

console.log(matrixElementsSum(matrix1));
