/* eslint-disable no-console */

// Ticket numbers usually consist of an even number of digits.A ticket number is
// considered lucky if the sum of the first half of the digits is equal to the sum
// of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

// Input will be equal number of digits
// if sum firstHalf === sum secondHalf, ticket is lucky
// if sum firstHalf !== sum secondHalf, ticket is unlucky

// Pseudo Code

// Will need to split digits in integer in half
// I'm not sure if there is a number.length prop. Pretty sure there is not.
// I don't believe you can itereate through the integers in a number like a string
// Easiest way without knowing would be to convert number to string first to get .length (toString)
// Iterate through string, add first half to one total, add second half to another total
// Compare totals

function isLucky(n) {
  const numberToString = n.toString();
  let firstHalf = 0;
  let secondHalf = 0;

  for (let i = 0; i < numberToString.length; i++) {
    const length = numberToString.length;
    const number = parseInt(numberToString[i]);
    if (i <= (length / 2) - 1) {
      firstHalf += number;
    } else {
      secondHalf += number;
    }
  }

  return firstHalf === secondHalf;

}

console.log(isLucky(1230)); // Expect True
console.log(isLucky(239017)); // Expect False
console.log(isLucky(134008)); // Expect True
