/* eslint-disable no-console */

// You have deposited a specific amount of money into your bank account. Each year
// your balance increases at the same growth rate. With the assumption that you
// don't make any additional deposits, find out how long it would take for your
// balance to pass a specific threshold.

// Example

// For deposit = 100, rate = 20, and threshold = 170, the output should be
// depositProfit(deposit, rate, threshold) = 3.

// Each year the amount of money in your account increases by 20 %. So throughout
// the years, your balance would be:

// year 0: 100;
// year 1: 120;
// year 2: 144;
// year 3: 172.8.
// Thus, it will take 3 years for your balance to pass the threshold, so the
// answer is 3.

// NOTES

// Good candidate for while loop
// Need variable to track balance
// Need variable to track years
// Year zero is starting balance
// Year increases by 1, balance increases by balance += balance * (rate/100)
// While balance is less than threshold, continue while loop

// Pseudo Code

// Create let variable for balance and set to deposit
// Create let variable for years and set equal to zero
// Set up while loop with condition of balance < threshold
//  Inside of while loop:
//    Increment year by 1
//    Balance += balance multiplied by (rate/100)
// Return years

// Test deposit = 1, rate = 100, and threshold = 64

function depositProfit(deposit, rate, threshold) {
  let balance = deposit; // balance = 64
  let years = 0; // years = 6

  while (balance < threshold) {
    years++;
    balance += balance * (rate / 100); // 32 * (1) = 32 + 32 = 64
  }

  return years;
}

console.log(depositProfit(100, 1, 101));
