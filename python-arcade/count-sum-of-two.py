# Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that 
# l ≤ A ≤ B ≤ r.

# Example

# For n = 6, l = 2, and r = 4, the output should be
# countSumOfTwoRepresentations2(n, l, r) = 2.

# There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.

def countSumOfTwoRepresentations2(n, l, r):
  sum_count = 0

  for num_a in range(l, r+1):
    for num_b in range(r, l-1, -1):
      if num_a > num_b:
        break
      if num_a + num_b == n:
        sum_count += 1

  return sum_count

print(countSumOfTwoRepresentations2(6, 2, 4))