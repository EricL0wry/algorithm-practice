/* eslint-disable no-console */

/*
 *
 * Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.
 *
 * Example
 *
 * For n = 152, the output should be
 * deleteDigit(n) = 52;
 * For n = 1001, the output should be
 * deleteDigit(n) = 101.
 */

function deleteDigit(n: number): number {
  let maxNumber = 0;

  for (let i = 0; i < String(n).length; i++) {
    const numArray = String(n).split('');
    numArray.splice(i, 1);
    const number = Number(numArray.join(''));
    console.log(numArray, number);

    if (number > maxNumber) {
      maxNumber = number;
    }
  }

  return maxNumber;
}

console.log(deleteDigit(152));
