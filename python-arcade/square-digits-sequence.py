# Consider a sequence of numbers a0, a1, ..., an, in which an element is equal to the sum of squared digits of the 
# previous element. The sequence ends once an element that has already been in the sequence appears again.

# Given the first element a0, find the length of the sequence.

# Example

# For a0 = 16, the output should be
# squareDigitsSequence(a0) = 9.

# Here's how elements of the sequence are constructed:

# a0 = 16
# a1 = 12 + 62 = 37
# a2 = 32 + 72 = 58
# a3 = 52 + 82 = 89
# a4 = 82 + 92 = 145
# a5 = 12 + 42 + 52 = 42
# a6 = 42 + 22 = 20
# a7 = 22 + 02 = 4
# a8 = 42 = 16, which has already occurred before (a0)
# Thus, there are 9 elements in the sequence.

# For a0 = 103, the output should be
# squareDigitsSequence(a0) = 4.

# The sequence goes as follows: 103 -> 10 -> 1 -> 1, 4 elements altogether.

# PSEUDO CODE
# 1. Set current digit
# 2. Convert current digit to string
# 3. Iterate through string - for each digit, convert to integer, square, and add to running total

def squareDigitsSequence(a0):
  current_number = a0
  sequence = []
  number_qty = 0
  while True:
    total = 0
    for digit in str(current_number):
      total += int(digit) ** 2
    number_qty += 1
    if current_number in sequence:
      break
    sequence.append(current_number)
    current_number = total
  return number_qty

print(squareDigitsSequence(103))