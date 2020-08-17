# Toy Graphics Editor by Emily Resch

This project is the technical assessment for Screencastify's Front-End Developer role. 


# Purpose

In this app, users can create shapes (either circles or rectangles) and utilize each shape's corresponding properties panel to change the shapes' size and color. The user is also given the shape's XY coordinates on the window and have the ability to click and drag the shape around the canvas.

# The Code

For this assessment I used vanilla Javascript as my programming language. I chose to use vanilla Javascript because it is widely understood and readable, and has good performance.


# The Approach

(pictures of notes?)

I first approached this project with pen and paper. I drew out the example application to determine how many sections, buttons, etc would be needed for the bare bones of the app. I decided to place mostly semantic elements on the HTML file to create a base that my JS file could reference. The three main sections are the add-buttons, the shape canvas, and the property-adjusting panels. I then determined the main functions that the application would require: 
1. Adding a circle or a rectangle when the respective button is clicked; 
2. Displaying the correct properties panel when a shape is clicked;
3. Editing size and color when range inputs are changed;
4. Deleting the appropriate shape and properties panel when the delete button is clicked; 
5. Click and drag capabilities on each shape and display of respective XY coordinates;

I created the shapes dynamically with an onclick function for each "add" button. I set up an array of shape objects to be pushed into each time the add button is clicked, and gave each new shape an id number (the id number is essential to much of the projects' functions). Using the shape's unique id, a new properties panel is created dynamically with an onclick event on each shape. New properties panels are also pushed into an array based on the id number of the shape. I made this choice in order to avoid multiple renderings of the same properties panel if the same shape is clicked more than once. To delete the shape and it's corresponding panel, I determined the id of the shape and the id of the panel and used a for-loop to find the shape and splice it from the shape array, splice it from the properties array, and remove both from the DOM. 
In a similar vein, to adjust the sizes of the shapes, I checked the id's of the shapes and corresponding panels to create an onlick for each input slider. 


# Final Notes

Please see the code at the bottom of "script.js" for pseudo code on my approach to incomplete portions. Thank you for looking at my work!
-Emily





