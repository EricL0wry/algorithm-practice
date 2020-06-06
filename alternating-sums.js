/* eslint-disable no-console */

// Several people are standing in a row and need to be divided into two teams.The
// first person goes into team 1, the second goes into team 2, the third goes into
// team 1 again, the fourth into team 2, and so on.

// You are given an array of positive integers - the weights of the people.Return
// an array of two integers, where the first element is the total weight of team
// 1, and the second element is the total weight of team 2 after the division is
// complete.

// For a = [50, 60, 60, 45, 70], the output should be
// alternatingSums(a) = [180, 105].

// Pseudo Code

// Create two variables to hold totals: teamOne (even), teamTwo (odd)
// Iterate through each item the array
// For each item in the array, check remainder (modulus) of i % 2
// If remainder is truthy
// Add number at index to teamTwo total
// If remainder is falsy
// Add number at index to teamOne total
// return array containing teamOne, teamTwo

function alternatingSums(a) {

}
