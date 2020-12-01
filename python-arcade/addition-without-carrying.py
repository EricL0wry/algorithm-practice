#  A little boy is studying arithmetic. He has just learned how to add two integers, written one below another, column 
#  by column. But he always forgets about the important part - carrying.

# Given two integers, your task is to find the result which the little boy will get.

# Note: The boy had learned from this site, so feel free to check it out too if you are not familiar with column addition.

# Example

# For param1 = 456 and param2 = 1734, the output should be
# additionWithoutCarrying(param1, param2) = 1180.

#    456
#   1734
# + ____
#   1180
# The boy performs the following operations from right to left:

# 6 + 4 = 10 but he forgets about carrying the 1 and just writes down the 0 in the last column
# 5 + 3 = 8
# 4 + 7 = 11 but he forgets about the leading 1 and just writes down 1 under 4 and 7.

# There is no digit in the first number corresponding to the leading digit of the second one, so the boy imagines that 0 
# is written before 456. Thus, he gets 0 + 1 = 1.

def additionWithoutCarrying(param1, param2):
  param1 = str(param1)[::-1]
  param2 = str(param2)[::-1]
  param1Len = len(param1) - 1
  param2Len = len(param2) - 1
  longLen = param1Len if param1Len >= param2Len else param2Len
  returnNum = ''
  

  for num in range(0, longLen + 1):
    if param1Len >= num and param2Len >= num:
      returnNum = str(int(param1[num]) + int(param2[num]))[-1] + returnNum
    elif param1Len >= num:
      returnNum = param1[num] + returnNum
    else:
      returnNum = param2[num] + returnNum
  return int(returnNum)

print(additionWithoutCarrying(456, 1734))