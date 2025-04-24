# wavepoints
A simple js library to facilitate the plotting of waves with wave addition



## Offset Types
### Index Based
Offsets a point based on it's index position. 
This will apply a linear compound wave offset to the point array and offset the point by x amount along either it's normal vector or a vector determined by a control point.

### Location Based
Offsets point based on their spacial (x,y) position. 
This will use two control points to determine the start and end of a wave and the points will be offset based on their relative position to the wave.

## Offset By
##

## Wave class
- Single wave
    - frequency
    - amplitude
    - phaseOfst (1 = 100% offset cycle)

- offset = sin(angleInRadians * frequency) * amplitude
    - angle in degrees = (index/numPoints + phaseOfst) * 360


