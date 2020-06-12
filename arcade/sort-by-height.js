/* eslint-disable no-console */

// Some people are standing in a row in a park.There are trees between them which
// cannot be moved.Your task is to rearrange the people by their heights in a non -
// descending order without moving the trees.People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

// [input] array.integer a

// If a[i] = -1, then the ith position is occupied by a tree.Otherwise a[i] is the
// height of a person standing in the ith position.

// Guaranteed constraints:

// 1 ≤ a.length ≤ 1000,
// -1 ≤ a[i]≤ 1000.

// [output] array.integer

// Sorted array a with all the trees untouched.

// Pseudo Code

// Create an empty array to hold the non-tree numbers
// Create an empty array to hold the index numbers of each non-tree number
// Iterate through the array and extract or document each non-tree and the index
// if number[i] !== -1
// Push number to array
// push index number to index array
// Sort number array
// Iterate through numberArray
// for each number, push the number into the array with the corresponding index

// Test Example

// [4, 2, 9, 11, 2, 16]  // length = 6

function sortByHeight(a) {
  const people = [];
  const peopleIndex = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      people.push(a[i]);
      peopleIndex.push(i);
    }
  }

  people.sort((a, b) => a - b);

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    const index = peopleIndex[i];
    a[index] = person;
  }

  return a;

}

console.log(sortByHeight([4, 2, 9, 11, 2, 16]));
