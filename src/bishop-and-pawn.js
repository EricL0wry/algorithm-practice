/* eslint-disable no-console */
function bishopAndPawn(bishop, pawn) {
    var xAxis = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8
    };
    var pawnX = pawn[0];
    var pawnY = pawn[1];
    var bishopX = bishop[0];
    var bishopY = bishop[1];
    if (Math.abs(xAxis[pawnX] - xAxis[bishopX]) ===
        Math.abs(Number(pawnY) - Number(bishopY))) {
        return true;
    }
    return false;
}
console.log(bishopAndPawn('a1', 'c3'));
