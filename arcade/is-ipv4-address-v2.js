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

// We can use the split method to return an array of octets
// Then check the length of the array
//  If length !== 4, return false
// Iterate through the array and validate the string
//  Return False if:
//    String as integer is less than 0 or greater than 255
//    String contains a leading zero
//    String contains a letter

function isIPv4Address(inputString) {

}

console.log(isIPv4Address('172.1.254.1'));
