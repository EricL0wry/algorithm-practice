# Define an integer's roundness as the number of trailing zeroes in it.

# Given an integer n, check if it's possible to increase n's roundness by swapping some pair of its digits.

# Example

# For n = 902200100, the output should be
# increaseNumberRoundness(n) = true.

# One of the possible ways to increase roundness of n is to swap digit 1 with digit 0 preceding it: roundness of 
# 902201000 is 3, and roundness of n is 2.

# For instance, one may swap the leftmost 0 with 1.

# For n = 11000, the output should be
# increaseNumberRoundness(n) = false.

# Roundness of n is 3, and there is no way to increase it.

def increaseNumberRoundness(n):
  num_string = str(n)[::-1]
  non_zeroes = 0
  
  for num in range(len(num_string)):
    if num_string[num] == '0':
      if non_zeroes > 0:
        return True
      else:
        continue
    else:
      non_zeroes += 1

  return False

print(increaseNumberRoundness(11000))