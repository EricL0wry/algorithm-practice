/* eslint-disable no-console */

// Two arrays are called similar if one can be obtained from another by swapping
// at most one pair of elements in one of the arrays.

// Given two arrays a and b, check whether they are similar.

//   Example

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be
// areSimilar(a, b) = true.

// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be
// areSimilar(a, b) = true.

// We can obtain b from a by swapping 2 and 1 in b.

// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.

// Pseudo Code

// Need to check that arrays contain same values/amount of values
//  If not, automatic false
//  If so, Need to check for 'similar' status
//    One way to do this properly would be to check for no more than two values
//    mismatching

// Order of operations
// Create variable holding empty object for hash map
// Create variable to count mismatches
// Iterate through first array
//  For each value:
//    Add a property to the hashmap of value: qty or increment if exits
//    Reference other array value at same index
//      If different value, increment count variable
//      If mismatch variable is > 2, return false
// Iterate through second array
//  For each value:
//    If hash map contains property match, decrement
//    If hash map does not contain property match, return false
// Check hash map for values not equal to 0
//  If no values greater than 0, return true
//  If values greater than zero, return false

// Example a = [1, 2, 3] and b = [1, 2, 3]

function areSimilar(a, b) {
  const values = {}; // values = {1: 0, 2: 0, 3: 0}
  let mismatches = 0; // mismatches = 0

  for (let i = 0; i < a.length; i++) { // i = 3, length = 3
    const value = a[i]; // value = 3
    if (values[value] > 0) {
      values[value] += 1;
    } else {
      values[value] = 1;
    }
    if (value !== b[i]) {
      mismatches++;
    }
    if (mismatches > 2) {
      return false;
    }
  }

  for (let i = 0; i < b.length; i++) { // i = 3, length = 3
    const value = b[i]; // value = 3
    if (values[value]) {
      values[value] -= 1;
    } else {
      return false;
    }
  }

  for (const key in values) { // key = 3
    if (values[key] !== 0) { // values.3 = 0
      return false;
    }
  }

  return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
