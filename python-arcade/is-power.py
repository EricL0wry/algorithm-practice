# Determine if the given number is a power of some non-negative integer.

# Example

# For n = 125, the output should be
# isPower(n) = true;
# For n = 72, the output should be
# isPower(n) = false.

def isPower(n):
  for num in range(1, n+1):
    result = 0
    power = 2
    print(num)
    while result < n:
      result = num ** power
      power += 1
      if result == n:
        return True
  return False

print(isPower(125))