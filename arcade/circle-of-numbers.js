/* eslint-disable no-console */

// Consider integer numbers from 0 to n - 1 written down along the circle in such
// a way that the distance between any two neighboring numbers is equal(note that
// 0 and n - 1 are neighboring, too).

// Given n and firstNumber, find the number which is written in the radially
// opposite position to firstNumber.

// Example

// For n = 10 and firstNumber = 2, the output should be
// circleOfNumbers(n, firstNumber) = 7.

// NOTES
// If we put the numbers in the example above into an array, we have:
//  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// If the numbers are opposite one-another, it means there is an equal amount of integers between the two
// If we take n and subtract the two integers that we need to look at, we have 8
//  8/2 = 4, and we can see that there are 4 integers between the two
//  2+4+1 = 7
// To find the opposite number from firstNumber:
//  If firstNumber is less than or equal to (n/2)-1: ((n-2)/2)+firstNumber+1
//  If firstNumber is greater than (n/2)-1: firstnumber-((n-2)/2)-1

// PSEUDO CODE
// Set up variable to hold middle point
//  Middle point equals (n/2)-1
// Set up if statement
//  If firstNumber less than or equal to middle point
//    return ((n-2)/2)+firstNumber+1
//  Else
//    return firstnumber-((n-2)/2)-1

// Example n = 12, firstNumber = 10

function circleOfNumbers(n, firstNumber) {
  const middle = (n / 2) - 1;
  if (firstNumber <= middle) {
    return ((n - 2) / 2) + firstNumber + 1;
  } else {
    return firstNumber - ((n - 2) / 2) - 1;
  }
}

console.log(circleOfNumbers(12, 10));
