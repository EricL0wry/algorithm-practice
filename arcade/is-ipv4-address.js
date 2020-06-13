/* eslint-disable no-console */

// RULES
// Always walk through all examples
// Always think through possible edge cases while considering input constraints

// An IP address is a numerical label assigned to each device(e.g., computer,
// printer) participating in a computer network that uses the Internet Protocol
// for communication.There are two versions of the Internet protocol, and thus two
// versions of addresses.One of them is the IPv4 address.

// Given a string, find out if it satisfies the IPv4 address naming rules.

// Example

// For inputString = "172.16.254.1", the output should be
// isIPv4Address(inputString) = true;

// For inputString = "172.316.254.1", the output should be
// isIPv4Address(inputString) = false.

// 316 is not in range[0, 255].

// For inputString = ".254.255.0", the output should be
// isIPv4Address(inputString) = false.

// There is no first number.

// Pseudo Code

// Edge cases
// Ensure 4 octets
// Octets with length of >1 that start with 0 are invalid

// Set up variables
//  Variable for counting full stops
//  Variable for current octet
// Iterate through string
//  Store character to variable
//  If character is not a '.'
//    Check to see if character is a number or letter
//      If letter, return false
//    Concat character onto current octet variable
//    If i = length-1, call verify function
//    Return value = function return
//  If character is a .
//    Call verify function
//    Return value = function return
//    Reset octet to empty string
//  If all checks pass, verify that fullStops = 3
//    If not, update return value to false
// Return return value

// Test ".0.1.0"

function isIPv4Address(inputString) {
  let isIPv4 = true;
  let fullStops = 0;
  let octet = '';

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (char !== '.') {
      if (isNaN(char)) return false;
      octet += char;
      if (i === inputString.length - 1) {
        isIPv4 = verifyOctet(octet);
      }
      if (!isIPv4) return isIPv4;
    } else {
      fullStops += 1;
      isIPv4 = verifyOctet(octet);
      if (!isIPv4) return isIPv4;
      octet = '';
    }
  }
  if (fullStops !== 3) {
    isIPv4 = false;
  }
  return isIPv4;
}

function verifyOctet(octetString) {
  if (octetString.length > 1 && octetString[0] === '0') return false;
  if (+octetString < 0 || +octetString > 255) return false;
  if (octetString === '') return false;
  return true;
}

console.log(isIPv4Address('172.1.254.1'));
