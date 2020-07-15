"use strict";
/* eslint-disable no-console */
// Given array of integers, find the maximal possible sum of some of its k consecutive elements.
// Example
// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// arrayMaxConsecutiveSum(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:
// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.
function arrayMaxConsecutiveSum(inputArray, k) {
    let maxTotal = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let total = 0;
        if (i + k <= inputArray.length) {
            for (let j = i; j < i + k; j++) {
                total += inputArray[j];
            }
        }
        if (total > maxTotal) {
            maxTotal = total;
        }
    }
    return maxTotal;
}
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
