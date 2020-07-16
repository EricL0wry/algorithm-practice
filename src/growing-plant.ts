/* eslint-disable no-console */

// Caring for a plant can be hard work, but since you tend to it regularly,
// you have a plant that grows consistently. Each day, its height increases by a
// fixed amount represented by the integer upSpeed. But due to lack of sunlight,
// the plant decreases in height every night, by an amount represented by
// downSpeed.

// Since you grew the plant from a seed, it started at height 0 initially. Given
// an integer desiredHeight, your task is to find how many days it'll take for the
// plant to reach this height.

// Example:

// For upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should be
// growingPlant(upSpeed, downSpeed, desiredHeight) = 10.

// Pseudo Code

// Set up a variable for height starting at zero
// Set up a variable to count days starting at zero
// Use while loop
// Each iteration of while loop constitutes a day
//  On each day
//    Increase day by one
//    Add upSpeed to height
//      Check if height >= desiredHeight
//        if so, return day
//    Subtract downSpeed from height

function growingPlant(
  upSpeed: number,
  downSpeed: number,
  desiredHeight: number
) {
  let height = 0;
  let dayCount = 0;

  while (height < desiredHeight) {
    dayCount++;
    height += upSpeed;
    if (height >= desiredHeight) break;
    height -= downSpeed;
  }

  return dayCount;
}

console.log(growingPlant(100, 10, 910));
