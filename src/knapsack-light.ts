/* eslint-disable no-console */

// You found two items in a treasure chest! The first item weighs weight1 and is
// worth value1, and the second item weighs weight2 and is worth value2. What is
// the total maximum value of the items you can take with you, assuming that your
// max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of
// each type, i.e. you can't take two first items or two second items.

/*
 * Pseudo Code
 *
 * Check if both items are each greater than maxW
 *  if both items are each greater than maxW, return 0 (you can't take anything with you)
 *  if both items are not each greater than maxW, check if both items are less than or equal to maxW
 *    if both items are less than maxW, check if both items added together are less than or equal to maxW
 *      if both items combined are <= maxW, return v1 + v2
 *      if both items combined are > maxW, return the highest value
 *    if both items are not less than maxW, return the value of the one that is less than maxW
 */

function knapsackLight(
  value1: number, // 15
  weight1: number, // 2
  value2: number, // 20
  weight2: number, // 3
  maxW: number // 2
) {
  if (weight1 > maxW && weight2 > maxW) {
    return 0;
  } else {
    if (weight1 <= maxW && weight2 <= maxW) {
      if (weight1 + weight2 <= maxW) {
        return value1 + value2;
      } else {
        return value1 >= value2 ? value1 : value2;
      }
    } else {
      return weight1 <= maxW ? value1 : value2;
    }
  }
}

console.log(knapsackLight(15, 2, 20, 3, 2));
