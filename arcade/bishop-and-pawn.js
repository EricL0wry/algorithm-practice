"use strict";
/* eslint-disable no-console */
function bishopAndPawn(bishop, pawn) {
    const xAxis = {
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
    if (Math.abs(xAxis[pawnX] - xAxis[bishopX]) ===
        Math.abs(Number(pawnY) - Number(bishopY))) {
        return true;
    }
    return false;
}
console.log(bishopAndPawn('h1', 'h3'));
