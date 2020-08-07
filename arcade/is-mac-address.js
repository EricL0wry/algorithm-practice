'use strict';
/* eslint-disable no-console */
/*
 *
 * A media access control address (MAC address) is a unique identifier assigned to network interfaces for
 * communications on the physical network segment.
 *
 * The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two
 * hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).
 *
 * Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.
 *
 */
function isMAC48Address(inputString) {
  const splitString = inputString.split('-');
  const regEx = /[A-F0-9]/;
  if (splitString.length !== 6 || inputString.length !== 17) {
    return false;
  }
  for (let i = 0; i < splitString.length; i++) {
    const hex = splitString[i];
    if (hex.length !== 2) {
      return false;
    }
    if (!regEx.test(hex[0]) || !regEx.test(hex[1])) {
      return false;
    }
  }
  return true;
}
console.log(isMAC48Address('Z1-1B-63-84-45-E6'));
