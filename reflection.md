# Major Project Reflection

#### Problem 1 - Cannot read _____ of undefined

Perhaps the biggest challenge to completing my major assignment was the occurance of undefined errors, where variables, arrays, objects, and / or class entities became undefined (or was never defined) thus causing the program to crash. This occured on a multitude of occasions and on all types of operations that I attempted to do (some variables, some class entities, some arrays, some vector quantities, etc). 

After countless hours of struggles, it was realiezd that the most important 'technique' to avoiding undefined errors in my code was proper syntax (spelling, function usage), initializing variables, and implementing failsafe checks when a function attempts to read any values. It was also important to keep track and maintain the ID (or place number) of things in an array as to ensure that arrays interact as intended in the code. Using for loops in arrays backwards is also preferred due to the need to potentially splice arrays mid loop.
 
#### Problem 2 - Vector coordinates and hitboxes

Another challenge to completing my major assignment was the implementation of hixboxes and vector coordinates through the Collison2D library. Due to the nature of the projectiles in game (and those potentially still to come), polygon collisions were used which requires arrays (sometimes 2D arrays) of vector coordinates. The arrays are then used to compute collision and correponding game function would be triggered thereafter. The acts of obtaining the proper vector coordinates of the proteciles and operating correctly with them wer quite difficult.

Through some math work on paper and testing on a blank JS document, I was able to generated a formula for the vector coordinates of specifically rotated 4 sided regular polygons (i.e rectangles). Through there the vector coordinately of all other hitboxes were also correctly obtained. I was able to successfully implement this section of my project with that knowledge in conjunction with my experiences with undefined errors with array operations. 

#### Problem 2 - Navigation, UI, and text displays

Another challenge to completing my major assignment was the implementation of a functional and aesthetically pleasing navigation, user interface, and text displays. Due to the project being written exclusively in Javascript, my options of such designs are limited. I have tried with many designs early on and the results have been unsatisfactory.

With some research, I have found my current implementation of navigation, UI, and text display. Classes were used for buttons and clickable objects that performed different functions (including the change of states and manipulation of many variables / arrays), user interface was flushed out using image overlays with components installed into each slot (tuned with math to fit to screensize), and text displays was implemented using a 'wall' method, which contained multiple lines of blank texts each with different properties and styles, and they would be used and displayed when needed.
