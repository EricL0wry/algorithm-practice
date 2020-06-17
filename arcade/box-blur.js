/* eslint-disable no-console */

// Last night you partied a little too hard.Now there's a black and white photo of
// you that's about to go viral! You can't let this ruin your reputation, so you
// want to apply the box blur algorithm to the photo to hide its content.

// The pixels in the input image are represented as integers.The algorithm distorts
// the input image in the following way: Every pixel x in the output image has a
// value equal to the average value of the pixel values from the 3 × 3 square that
// has its center at x, including x itself.All the pixels on the border of x are
// then removed.

// Return the blurred image as an integer, with the fractions rounded down.

// EXAMPLES

// For

// image = [[1, 1, 1],
//          [1, 7, 1],
//          [1, 1, 1]]
// the output should be boxBlur(image) = [[1]].

// To get the value of the middle pixel in the input 3 × 3 square:
// (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels
// are cropped from the final result.

// For

// image = [[7, 4, 0, 1],
//          [5, 6, 2, 2],
//          [6, 10, 7, 8],
//          [1, 4, 2, 0]]
// the output should be

// boxBlur(image) = [[5, 4],
//                   [4, 4]]
// There are four 3 × 3 squares in the input image, so there should be four
// integers in the blurred output.To get the first value:
// (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5.
// The other three integers are obtained the same way, then the surrounding
// integers are cropped from the final result.

// NOTES

// Working within a 3X3 moving frame
// Assuming that all inner arrays are equal in length
// Height and width can be between 3 - 100
//  Height = image.length
//  Width = image[0].length
// We're NOT guaranteed a square image
// Construct output image by averaging 3x3 squares and constructing output 3d array
//  Ouptut array dimensions = h-2 X w-2
// Loop through each array
//  Check for value at i+2
//  If value
//    Add value at i to the value at i for the next two arrays
//  If no value, first row of 3x3s is complete
//    Check for image[i+2]
//      If value, continue to next array
//      If no value, break
// Return blurred image array

function boxBlur(image) {
  const blurredImage = [];
  for (let row = 0; row < image.length - 2; row++) {
    if (!blurredImage[row]) {
      blurredImage[row] = [];
    }
    for (let col = 0; col < image[row].length - 2; col++) {
      let avg = 0;
      console.log(image[row][col], image[row][col + 1]);
      avg += image[row][col] + image[row][col + 1] + image[row][col + 2];
      avg += image[row + 1][col] + image[row + 1][col + 1] + image[row + 1][col + 2];
      avg += image[row + 2][col] + image[row + 2][col + 1] + image[row + 2][col + 2];
      avg = Math.floor(avg / 9);
      blurredImage[row].push(avg);

    }
  }
  return blurredImage;
}

console.log(boxBlur([[7, 4, 0, 1], [5, 6, 2, 2], [6, 10, 7, 8], [1, 4, 2, 0]]));

// image = [[7, 4, 0, 1, 7, 4, 0, 1],
//          [5, 6, 2, 2, 7, 4, 0, 1],
//          [6, 10, 7, 8, 7, 4, 0, 1],
//          [1, 4, 2, 0, 7, 4, 0, 1],
//          [1, 4, 2, 0, 7, 4, 0, 1],
//          [1, 4, 2, 0, 7, 4, 0, 1],
//          [1, 4, 2, 0, 7, 4, 0, 1],
//          [1, 4, 2, 0, 7, 4, 0, 1]]

// in 4x8, out 2x6
// in 8x8, out 6x6
