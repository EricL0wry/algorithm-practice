/* eslint-disable no-console */

// Write a function that reverses characters in (possibly nested) parentheses in
// the input string.

// Input strings will always be well - formed with matching () s.

// Example;

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";

// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";

// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";

// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
//   Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

// Pseudo Code

// Set up a variable to capture characters outside of paren and reversed portions
// Iterate through the string
// If we come across an opening paren, capture and reverse characters until we
// reach a closing paren
// If we reach another opening paren do the same :/

// TEST "foo(bar(baz))blim"

function reverseInParentheses(inputString) {

  let finalString = '';
  const OPEN = '(';
  const CLOSE = ')';

  for (let i = 0; i < inputString.length; i++) {
    const character = inputString[i];

    if (character === OPEN) {
      const returnStringArr = parenFound(inputString, i);
      finalString += returnStringArr[0];
      i = returnStringArr[1];
    } else if (character === CLOSE) {
      continue;
    } else {
      finalString += character;
    }
  }

  return finalString;
}

function parenFound(inputString, startIndex) {

  let stringToReverse = ''; // 'barzab'
  const OPEN = '(';
  const CLOSE = ')';

  for (let i = startIndex + 1; i < inputString.length; i++) {
    const character = inputString[i];

    if (character === OPEN) {
      const reversedSubString = parenFound(inputString, i);
      stringToReverse += reversedSubString[0];
      i = reversedSubString[1];
    } else if (character === CLOSE) {
      const reversedString = stringToReverse.split('').reverse().join('');
      return [reversedString, i];
    } else {
      stringToReverse += character;

    }
  }
}
console.log(reverseInParentheses('foo(bar)baz'));
