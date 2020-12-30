# Find the number of ways to express n as sum of some (at least two) consecutive positive integers.

# Example

# For n = 9, the output should be
# isSumOfConsecutive2(n) = 2.

# There are two ways to represent n = 9: 2 + 3 + 4 = 9 and 4 + 5 = 9.

# For n = 8, the output should be
# isSumOfConsecutive2(n) = 0.

# There are no ways to represent n = 8.

def isSumOfConsecutive2(n):
  ways = 0
  for num in range(1, n):
    total = num
    consecutive = 1
    for num2 in range(num + 1, n):
      total += num2
      consecutive += 1
      if total == n and consecutive > 1:
        ways += 1
        break
      if total > n:
        break
    print(consecutive)
  return ways

print(isSumOfConsecutive2(99))