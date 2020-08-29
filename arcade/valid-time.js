"use strict";
/* eslint-disable no-console */
/*
 *
 * Check if the given string is a correct time representation of the 24-hour clock.
 *
 * Example
 * For time = "13:58", the output should be
 * validTime(time) = true;
 * For time = "25:51", the output should be
 * validTime(time) = false;
 * For time = "02:76", the output should be
 * validTime(time) = false.3
 *
 * Notes
 *
 * Given a string in HH:MM format, guaranteed that first two chars and last two chars are digits
 * Need to separate hours and minutes, convert to numbers, and check them separately
 * If both are valid, return true
 *
 * Pseudo Code
 *
 * First, split string on ':' character to create array with two items, hours at index 0, minutes at index 1
 * Items in array will be strings, so we need to convert strings when we are checking each
 * First check the array at index 0
 *  If the string converted to a number is greater than -1 and less than 24, hours are valid
 *  Else, return false
 * Then check the array at index 1
 *  If the string converted to a number is greater than -1 and less than 60, minutes are valid
 *  Else, return false
 * Return true
 */
function validTime(time) {
    const splitArray = time.split(':');
    const hours = Number(splitArray[0]);
    const minutes = Number(splitArray[1]);
    if (hours < 0 || hours > 23)
        return false;
    if (minutes < 0 || minutes > 59)
        return false;
    return true;
}
function validTimeV2(time) {
    const splitArray = time.split(':');
    return (Number(splitArray[0]) >= 0 &&
        Number(splitArray[0]) <= 23 &&
        Number(splitArray[1]) >= 0 &&
        Number(splitArray[1]) <= 59);
}
console.log(validTimeV2('25:51'));
