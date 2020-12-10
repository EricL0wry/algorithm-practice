# Imagine a white rectangular grid of n rows and m columns divided into two parts by a diagonal line running from the 
# upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:

# A cell is painted black if it has at least one point in common with the diagonal;
# Otherwise, a cell is painted white.
# Count the number of cells painted black.

# Example

# For n = 3 and m = 4, the output should be
# countBlackCells(n, m) = 6.

# There are 6 cells that have at least one common point with the diagonal and therefore are painted black.

# B B W W
# W B B W
# W W B B

# For n = 3 and m = 3, the output should be
# countBlackCells(n, m) = 7.

# B B W
# B B B
# W B B

# 7 cells have at least one common point with the diagonal and are painted black.

def countBlackCells(n, m):
  rows = min(n, m)
  columns = max(n, m)
  common = 0

  for row in range(rows):
    common += int(columns / rows)
    if columns % rows:
      common += 1
    else:
      common += 2
  if not columns % rows:
    common -= 2

  return common

print(countBlackCells(6, 3))

