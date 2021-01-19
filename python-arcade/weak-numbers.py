# We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

# It follows that the weaker the number, the greater overall weakness it has.For the given integer n, you need to answer
# two questions:

# what is the weakness of the weakest numbers in the range [1, n]?
# how many numbers in the range [1, n] have this weakness?
# Return the answer as an array of two elements, where the first element is the answer to the first question, and the
# second element is the answer to the second question.

# For n = 9, the output should be
# weakNumbers(n) = [2, 2].

# Here are the number of divisors and the specific weakness of each number in range [1, 9]:

# 1: d(1) = 1, weakness(1) = 0;
# 2: d(2) = 2, weakness(2) = 0;
# 3: d(3) = 2, weakness(3) = 0;
# 4: d(4) = 3, weakness(4) = 0;
# 5: d(5) = 2, weakness(5) = 1;
# 6: d(6) = 4, weakness(6) = 0;
# 7: d(7) = 2, weakness(7) = 2;
# 8: d(8) = 4, weakness(8) = 0;
# 9: d(9) = 3, weakness(9) = 2.
# As you can see, the maximal weakness is 2, and there are 2 numbers with that weakness level.

# Start at highest number
#   Loop through each number in that range in -1 steps
#     For each number, divide highest number by each number in range
#       If remainder is zero, increment divisible counter
#       For each of these numbers, loop through previous numbers and check the same

def weakNumber(n):
  weakest = 0
  weakCount = 0
  dList = []

  # Create List of divisors per number
  for num1 in range(n, 0, -1):
    num1d = 0
    for num2 in range(num1, 0, -1):
      if num1 % num2 == 0:
        num1d += 1
    dList.append(num1d)

  for index, item in enumerate(dList):
    weakness = 0
    for num in range(index + 1, len(dList)):
      if dList[num] > item:
          weakness += 1
    if weakness > weakest:
      weakCount = 1
      weakest = weakness
    elif weakness == weakest:
      weakCount += 1

  return [weakest, weakCount]

print(weakNumber(9))