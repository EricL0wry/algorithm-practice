# Given an integer n, find the minimal k such that

# k = m! (where m! = 1 * 2 * ... * m) for some integer m;
# k >= n.
# In other words, find the smallest factorial which is not less than n.

# Example

# For n = 17, the output should be
# leastFactorial(n) = 24.

# 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

def leastFactorial(n):
  curr_num = 2

  factorial = 1

  while factorial < n:
    factorial = 1
    for num in range(1, curr_num):
      factorial = factorial * num
    curr_num += 1

  return factorial

print(leastFactorial(17))