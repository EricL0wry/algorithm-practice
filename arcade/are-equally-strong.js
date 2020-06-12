/* eslint-disable no-console */

// Call two arms equally strong if the heaviest weights they each are able to lift
// are equal.

// Call two people equally strong if their strongest arms are equally strong(the
// strongest arm can be both the right and the left), and so are their weakest
// arms.

// Given your and your friend's arms' lifting capabilities find out if you two are
// equally strong.

// Example

// For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = true;

// For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be
// areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) = false.

// Pseudo Code

// Start out by separating your values from your friend's values and place them
// each in an array
// Create an empty object to act as hash map
// Loop through the first array
//  For each value, check if it exists in the hashmap
//    If it exists, increment the value
//    If it does not exist, add a property to the hash map of number: count
// Loop through the second array
//  For each value, check the hash map to see if it has a property for that value
//    If a property exists, delete it
//    If not, add it
// Use object.keys to create an array of keys in the object
//  If .length is truthy, return false
//  If .length is falsy, return true

// Test: yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const self = [yourLeft, yourRight];
  const friend = [friendsLeft, friendsRight];
  const hashMap = {};

  for (let i = 0; i < 2; i++) {
    const weight = self[i];
    if (hashMap[weight]) {
      hashMap[weight] += 1;
    } else {
      hashMap[weight] = 1;
    }
  }

  for (let i = 0; i < 2; i++) {
    const weight = friend[i];
    if (hashMap[weight]) {
      hashMap[weight] -= 1;
      if (hashMap[weight] === 0) {
        delete hashMap[weight];
      }
    } else {
      hashMap[weight] = 1;
    }
  }

  const hashKeys = Object.keys(hashMap);

  if (hashKeys.length) {
    return false;
  } else {
    return true;
  }
}

console.log(areEquallyStrong(15, 10, 10, 15));
