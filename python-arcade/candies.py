def candies(n,m):
  if n > m:
    return 0
  return m - (m % n)

print(candies(3,10))