// Given a sequence of integers as an array, determine whether it is possible to
// obtain a strictly increasing sequence by removing no more than one element
// from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing if
// a0 < a1 < ... < an.Sequence containing only one element is also considered to
// be strictly increasing.

// Example

// For sequence = [1, 3, 2, 1], the output should be
// almostIncreasingSequence(sequence) = false.

// There is no one element in this array that can be removed in order to get a
// strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// almostIncreasingSequence(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence[1, 2].
// Alternately, you can remove 2 to get the strictly increasing sequence[1, 3].

// [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 10^5,
// -10^5 ≤ sequence[i]≤ 10^5.

// [output] boolean

// Return true if it is possible to remove one element from the array in order to
// get a strictly increasing sequence, otherwise return false.

// Test Inputs

const sequence1 = [1, 3, 2, 1]; /* expected output: false */
const sequence2 = [1, 3, 2]; /* expected output: true */
const sequence3 = [1, 2, 1, 2]; /* expected output: false */
const sequence4 = [3, 6, 5, 8, 10, 20, 15]; /* expected output: false */
const sequence5 = [1, 1, 2, 3, 4, 4]; /* expected output: false */
const sequence6 = [1, 4, 10, 4, 2]; /* expected output: false */
const sequence7 = [10, 1, 2, 3, 4, 5]; /* expected output: true */

function almostIncreasingSequence(sequence) {
  const length = sequence.length;
  let removalCount = 0;

  if (length === 1) return true;

  for (let i = 0; i < sequence.length; i++) {
    if (removalCount <= 1) {
      if (sequence[i + 1]) {
        if (sequence[i + 1] <= sequence[i]) {
          // Check if there is a sequence[i-1]
          if (sequence[i - 1]) {
            // If there is a sequence[i-1], check if sequence[i-1] is less than sequence[i+1]
            if (sequence[i - 1] <= sequence[i + 1]) {
              // If sequence[i-1] is less than sequence[i+1], check if there is a sequence[i+2]
              if (sequence[i + 2]) {
                // If there is a sequence[i+2], check if sequence[i+2] is greater than sequence[i+1]
                if (sequence[i + 2] > sequence[i + 1]) {
                  // If sequence[i+2] is greater than sequence[i+1], increment removal count, increment i by 1 (i++)
                  removalCount++;
                  i++;
                } else {
                  // if sequence[i+2] is less than or equal to sequence[i+1], increment removal count by 2, break
                  removalCount += 2;
                  break;
                }

              } else {
                // If there is not a sequence[i+2], increment removal count, break
              }
            } else {
              // If sequence[i-1] is greater than sequence[i+1], check if there is a sequence[i+2]
              // If there is a sequence[i+2], check if sequence[i+2] is greater than sequence[i]
              // If sequence[i+2] is greater than sequence[i], increment removal count, increment i by 1 (i++)
              // If there is not a sequence[i+2], increment removal count, break
            }

          } else {
            // If there is not a sequence[i-1], check if there is a sequence[i+2]
            // If there is a sequence[i+2], check if sequence[i+2] is greater than sequence[i]
            // If sequence[i+2] is greater than sequence[i], increment removal count, increment i by 1 (i++)
            // If sequence[i+2] is less or equal to than sequence[i], increment removal count by 2, break
            // If there is not a sequence[i+2], increment removal count, break
          }

        }
      } else {
        break;
      }
    } else {
      break;
    }

  }

  if (removalCount <= 1) {
    return true;
  } else {
    return false;
  }
}

console.log(almostIncreasingSequence(sequence7));
