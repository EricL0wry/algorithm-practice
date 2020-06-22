/* eslint-disable no-console */

// Given a string, your task is to replace each of its characters by the next one
// in the English alphabet; i.e.replace a with b, replace b with c, etc(z would be
// replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

// NOTES

// We need some sort of reference to tell us what the next letter should be.
// Options:
//  Array of alphabet - iterate through array, find index of letter, replace with
//    index + 1. Would be time intensive because of nested loops
//  Map (object) of alphabet as property name paired with next letter as value. This
//    is more of a pain to build up front, but would be much more time efficient
//  Hybrid with object of letters paired with value of index and array with
//    alphabet in order, this would be more work to set up, doesn't make good sense.

// PSEUDO CODE

// Create reference object and store to const variable
// Split input string into array of letters and store to const variable
// Iterate through input string array
//  For each value, access property in object, replace value at index with value of prop
// Join string array and return

// inputString = "crazy"

function alphabeticShift(inputString) {
  const alphabet = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: 'a'
  };
  const stringArr = inputString.split(''); // stringArr = ['d', 's', 'b', 'a', 'z']
  for (let i = 0; i < stringArr.length; i++) { // i = 5, length = 5
    const char = stringArr[i]; // stringArr[4] = 'y' = char
    stringArr[i] = alphabet[char]; // alphabet['y'] = 'z'
  }
  return stringArr.join(''); // 'dsbaz'
}

console.log(alphabeticShift('crazy'));
