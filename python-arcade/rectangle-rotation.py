# A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane.Its center(the intersection
# point of its diagonals) coincides with the point(0, 0), but the sides of the rectangle are not parallel to the axes;
# instead, they are forming 45 degree angles with the axes.

# How many points with integer coordinates are located inside the given rectangle (including on its sides)?
import math

def rectangleRotation(a, b):
  # First find points where center square crosses axes
  # Then calculate the 4 corners of the diagonal rectangle
    # The sides of the center square are equal to the smaller of the two values
  # Start at left corner
    # First column to check for points is equal to int(x) which will remove any decimal
  totalPoints = 0
  long = max(a, b)
  short = min(a, b)
  axisIntersection = math.sqrt((short / 2)** 2 * 2)
  rise = math.sqrt(.5 ** 2 * 2)
  left = (-(axisIntersection + (((long - short) / 2) * rise)), -(0 + (((long - short) / 2) * rise)))
  top = (0 + (((long - short) / 2) * rise), axisIntersection + (((long - short) / 2) * rise))
  right = (axisIntersection + (((long - short) / 2) * rise), 0 + (((long - short) / 2) * rise))
  bottom = (-(0 + (((long - short) / 2) * rise)), -(axisIntersection + (((long - short) / 2) * rise)))
  start = left

  if start == (int(start[0]), int(start[1])):
    totalPoints += 1
  for x_axis_point in range(int(left[0]), int(right[0] + 1)):
    print(x_axis_point)
  

  


  return (1, 2) == (1, 2)

print(rectangleRotation(6, 4))