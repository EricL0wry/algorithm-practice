/* eslint-disable no-console */

/*
 * Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can
 * capture the pawn in one move.
 *
 * The bishop has no restrictions in distance for each move, but is limited to diagonal movement.
 *
 * Example
 * For bishop = "a1" and pawn = "c3", the output should be
 * bishopAndPawn(bishop, pawn) = true.
 *
 * For bishop = "h1" and pawn = "h3", the output should be
 * bishopAndPawn(bishop, pawn) = false.
 *
 */

interface Axis {
  [key: string]: number;
}

function bishopAndPawn(bishop: string, pawn: string): boolean {
  const xAxis: Axis = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };
  const pawnX = pawn[0];
  const pawnY = pawn[1];
  const bishopX = bishop[0];
  const bishopY = bishop[1];

  if (
    Math.abs(xAxis[pawnX] - xAxis[bishopX]) ===
    Math.abs(Number(pawnY) - Number(bishopY))
  ) {
    return true;
  }

  return false;
}

console.log(bishopAndPawn('h1', 'h3'));
