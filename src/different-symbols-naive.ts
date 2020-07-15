/* eslint-disable no-console */

// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.

// There are 3 different characters a, b and c.

interface MapObject {
  [key: string]: number;
}

function differentSymbolsNaive(s: string): number {
  const map: MapObject = {};

  for (let i = 0; i < s.length; i++) {
    const character: string = s[i];

    if (map[character] === undefined) {
      map[character] = 1;
    }
  }

  let characterCount: number = 0;

  for (const key in map) {
    characterCount += map[key];
  }

  return characterCount;
}

console.log(differentSymbolsNaive('cabca'));
