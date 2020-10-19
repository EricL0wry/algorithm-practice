def largestNumber(n):

  string = ''
  while len(string) < n:
    string = string + '9'

  return int(string)

print(largestNumber(2))