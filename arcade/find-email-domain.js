"use strict";
/* eslint-disable no-console */
/*
 * An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a
 * domain part ("example.com").
 *
 * The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part,
 * however, also allows a lot of different special characters. Here you can look at several examples of correct and
 * incorrect email addresses.
 *
 * Given a valid email address, find its domain part.
 */
function findEmailDomain(address) {
    const splitArray = address.split('@');
    return splitArray[splitArray.length - 1];
}
console.log(findEmailDomain('John.Smith@example.com'));
