# Wavepoints.ffx

## Effect Overview

Wavepoints.ffx is an effect preset created to achieve the fluid warping of a circle that does not distort strokes, and has a high level of control and predictability.

Under the hood, the effect simply creates a series of points around a circular radius and offsets the position of each point by a corresponding value in a sine wave.

## Using Wavepoints.ffx

### Adding effect to composition

1. Add wavepoints.ffx to your local after effects presets folder
    - Effect List refresh might be required after install for effect to appear
2. Drag Wavepoints effect onto empty space in composition*
    - Wavepoints effect can also be dragged ontop of an existing blank shape layer if preffered.
3. Dragging Wavepoints effect into composition should create a new shape layer with a pre-populated expression driven path and effect controls. From here, you can adjust control values as needed.

### Usage Reccomendations
1. If using multiple wavepoints instances, keep isolated on seperate shape layers
    - **⚠️Do Not Add Multiple Wavepoints Instances To A Single Shape Layer**. This will break effect controls
    - Consider either creating a Null controller or deciding on a primary instance to control the center point, radius, and resolution controls of all instances
2. Be Mindful of resolution control value.
    - ***A higher resolution value = a lower actual resolution.*** This is because the value actually referes to the space between points. So a lower value = less space between points = more points.
    - ***Lower resolution values can slow down workflows significantly***
      - Consider working with a higher resolution value, and setting to a lower resolution value for previewing and renders for workflow efficiency.
      - For this reason also it is advised to link resolution control for all instances to easily change it since frequent updates will likely be neccessary.


## Effect Controls

- Center
  - X,Y center of base circle path
- Radius
  - Radius of base circle path
- Resolution
  - Number of points in path
  - Lower value = Higher resolution
  - reccomended to work with a higher value and lower resolution value for previewing and final rendering as lower values can cause workflow slowdowns
- Angle Control ⚠️
   - **Depricated**, please disregard.
   currently serves no function but will break effect if removed
- Wave # - Freq
  - Defines frequency of selected wave
  - Do not set to 0 or values with decimals (e.g. 2.5)
- Wave # - amp
  - Defines the amplitude of selected wave as an absolute value
    - eg: if amp is set to 30, it will be more exaggerated when radius has a lower value and less exagggerated when radius has a higher value
- Wave # - ofst
  - Offsets wave frequency relative to shape

## Additional Resources

### Wavepoints.js
A javascript library version of this effect for drawing these shapes in SVG. It is a significantly more powerful and versatile tool. Especially for visuallizing how the effect works.
You can find a demo of the libary [on codepen](https://codepen.io/hjude_code/pen/xbxqddN) and the full github repo at [hjude-code/wavepoints](https://github.com/hjude-code/wavepoints)

### Questions & Feedback!
If you have any questions about using the effect, or feedback/suggestions, please do not hesitate to send an email over to me at [Harrison@Jude.com](mailto:Harrison@hjude.com?subject=Wavepoints.ffx). *Please include Wavepoints in the subject line.*







