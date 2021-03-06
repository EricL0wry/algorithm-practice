# We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This 
# means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we 
# round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant 
# digit by 1). The process stops immediately once there is only one non-zero digit left.

# Example

# For n = 15, the output should be
# rounders(n) = 20;

# For n = 1234, the output should be
# rounders(n) = 1000.

# 1234 -> 1230 -> 1200 -> 1000.

# For n = 1445, the output should be
# rounders(n) = 2000.

# 1445 -> 1450 -> 1500 -> 2000.

def rounders(n):
  rev_list = list(str(n)[::-1])
  round_up = False

  for num in range(len(rev_list)):
    curr_int = int(rev_list[num])

    if round_up:
      curr_int += 1

    if num < len(rev_list) - 1:
      
      round_up = curr_int >= 5
      rev_list[num] = '0'
    else:
      rev_list[num] = str(curr_int)
    
  return int("".join(rev_list[::-1]))

print(rounders(99))