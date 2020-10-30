# Given integers a and b, determine whether the following pseudocode results in an infinite loop

# while a is not equal to b do
#   increase a by 1
#   decrease b by 1

# Assume that the program is executed on a virtual machine which can store arbitrary long numbers and execute forever.

# Example

# For a = 2 and b = 6, the output should be
# isInfiniteProcess(a, b) = false;
# For a = 2 and b = 3, the output should be
# isInfiniteProcess(a, b) = true.

def isInfiniteProcess(a, b):
  if a > b:
    return True
  if (a == 0 and b % 2 == 0 or b == 0 and a % 2 == 0):
    return False
  if (a == 1 and b % 2 == 1 or b == 1 and a % 2 == 1):
    return False
  if (a % 2 == 0 and b % 2 == 0) or (a % 2 == 1 and b % 2 == 1):
    return False
  return True

print(isInfiniteProcess(10, 0))