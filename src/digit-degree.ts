/* eslint-disable no-console */

/*
 * Let's define digit degree of some positive integer as the number of times we need to replace this number with the
 * sum of its digits until we get to a one digit number.
 *
 * Given an integer, find its digit degree.
 *
 * Example
 *
 * For n = 5, the output should be
 * digitDegree(n) = 0;
 *
 * For n = 100, the output should be
 * digitDegree(n) = 1.
 * 1 + 0 + 0 = 1.
 *
 * For n = 91, the output should be
 * digitDegree(n) = 2.
 * 9 + 1 = 10 -> 1 + 0 = 1.
 */

function digitDegree(n: number): number {
  let sumOfDigits = n;
  let degrees = 0;

  while (String(sumOfDigits).length !== 1) {
    const numAsString = String(sumOfDigits);
    sumOfDigits = numAsString
      .split('')
      .map((x) => Number(x))
      .reduce((acc, curr) => acc + curr);
    degrees += 1;
  }

  return degrees;
}

console.log(digitDegree(91));
