"use strict";
/* eslint-disable no-console */
/*
 *
 * Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.
 *
 * The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically
 * and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image
 * below to see all valid moves for a knight piece that is placed on one of the central squares.
 *
 * For cell = "a1", the output should be
 * chessKnight(cell) = 2.
 *
 * For cell = "c2", the output should be
 * chessKnight(cell) = 6
 *
 * Notes
 * Takes in a string
 * First we need to separate the string into x and y coordinates
 * Create an object to convert the x axis to a number for ease of use
 */
function chessKnight(cell) {
    const xLookup = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    };
    const x = xLookup[cell[0]];
    const y = Number(cell[1]);
    let totalMoves = 8;
    if (x + 1 > 8 || y + 2 > 8)
        totalMoves--;
    if (x + 2 > 8 || y + 1 > 8)
        totalMoves--;
    if (x + 1 > 8 || y - 2 < 1)
        totalMoves--;
    if (x + 2 > 8 || y - 1 < 1)
        totalMoves--;
    if (x - 1 < 1 || y - 2 < 1)
        totalMoves--;
    if (x - 2 < 1 || y - 1 < 1)
        totalMoves--;
    if (x - 1 < 1 || y + 2 > 8)
        totalMoves--;
    if (x - 2 < 1 || y + 1 > 8)
        totalMoves--;
    return totalMoves;
}
console.log(chessKnight('a1'));
