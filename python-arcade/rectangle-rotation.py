# A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane.Its center(the intersection
# point of its diagonals) coincides with the point(0, 0), but the sides of the rectangle are not parallel to the axes;
# instead, they are forming 45 degree angles with the axes.

# How many points with integer coordinates are located inside the given rectangle (including on its sides)?
import math

def rectangleRotation(a, b):
  # First find points where center square crosses axes
  # Then calculate the 4 corners of the diagonal rectangle
    # The sides of the center square are equal to the smaller of the two values
  # Then expand that to a larger rectangle that covers the diagonal rectangle. Basically, a search area
  # Starting at the upper left of this rectangle, scan each column
    # Calculate the borders of the diagonal rectangle for that column
    # For each integer point in each column within or on those bounds, increment a running total
  totalPoints = 0
  long = max(a, b)
  short = min(a, b)
  axisIntersection = math.sqrt((short / 2)** 2 * 2)
  rise = math.sqrt(.5 ** 2 * 2)
  pointA = (-(axisIntersection + (((long - short) / 2) * rise)), -(0 + (((long - short) / 2) * rise)))
  pointB = (0 + (((long - short) / 2) * rise), axisIntersection + (((long - short) / 2) * rise))
  pointC = (axisIntersection + (((long - short) / 2) * rise), 0 + (((long - short) / 2) * rise))
  pointD = (-(0 + (((long - short) / 2) * rise)), -(axisIntersection + (((long - short) / 2) * rise)))
  # totalPoints += int(intersection) * 4 + 1
  


  return pointD

print(rectangleRotation(6, 4))