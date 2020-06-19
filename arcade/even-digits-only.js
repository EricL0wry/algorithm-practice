/* eslint-disable no-console */

// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// evenDigitsOnly(n) = true;
// For n = 642386, the output should be
// evenDigitsOnly(n) = false.

// Pseudo Code

// We need to iterate through each digit of the integer given
// Numbers do not have a .length property, and cannot be iterated through like a string

// Convert number to a string using Number.prototype.toString()
// Iterate through each character using a for loop
// If the remainder of the character divided by 2 is truthy, return false
// Return true

// Test n = 248622, expected result true

function evenDigitsOnly(n) {
  const numberString = n.toString(10); // number = '248622'
  for (let i = 0; i < numberString.length; i++) { // i = 3, length = 6
    const number = +numberString[i];
    if (number % 2) { // number[2] = '8' % 2 = 8 % 2 = 0
      return false;
    }
  }
  return true;
}

console.log(evenDigitsOnly(642886));
