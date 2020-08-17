//*Please see bottom for pseudocode of incomplete portions*


//add event listeners to add-shape buttons
let circleBtn = document.getElementById("add-circle");
let rectBtn = document.getElementById("add-rectangle");

circleBtn.addEventListener("click", addshape);
rectBtn.addEventListener("click", addshape)

//Arrays (shapes and properties)
let shapeArr = [];
let propsArr = [];

//function to create a new shape
function addshape(e) {
    e.preventDefault();
    if (e.target.value === "circle") { //CIRCLE
        let canvasDiv = document.getElementById("canvas");
        //create new circle element
        let circle = document.createElement("div");
        // circle.style.position = "absolute"; needed for drag
        circle.style.height = "50px";
        circle.style.width = "50px";
        circle.style.borderRadius = "50px"
        circle.style.backgroundColor = "black";
        circle.setAttribute("value", "circle");
        //object template for circles
        let circleObj = {
            id: "",
            type: "circle",
            height: "50px",
            width: "50px",
            borderRadius: "50px",
            color: "black"
        }
        shapeArr.push(circleObj);
        //create unique id 
        for (let i = 0; i < shapeArr.length; i++) {
            let newId = document.createAttribute("id");
            newId.value = [i];
            circle.setAttributeNode(newId);
            circleObj.id = newId.value;
        }

        //create class
        let newClass = document.createAttribute("class");
        newClass.value = "shape";
        circle.setAttributeNode(newClass);

        //append to canvas
        canvasDiv.appendChild(circle);

        // functions that come with circles
        circle.addEventListener("mouseenter", highlightShape);
        circle.addEventListener("click", clickShape);
        circle.addEventListener("mouseleave", removeHighlight);


    } else { //RECTANGLE
        let canvasDiv = document.getElementById("canvas");
        //create new rectangle element
        let rectangle = document.createElement("div");
        rectangle.style.height = "50px";
        rectangle.style.width = "100px";
        rectangle.style.backgroundColor = "white";
        rectangle.setAttribute("value", "rectangle");
        // template for rect object
        let rectObj = {
            id: "",
            type: "rectangle",
            height: "50px",
            width: "100px",
            color: "white",
        }
        shapeArr.push(rectObj);
        //create unique id 
        for (let i = 0; i < shapeArr.length; i++) {
            let newId = document.createAttribute("id");
            newId.value = [i];
            rectangle.setAttributeNode(newId);
            rectObj.id = newId.value;
        }
        //create class 
        let newClass = document.createAttribute("class");
        newClass.value = "shape";
        rectangle.setAttributeNode(newClass);

        //append to canvas
        canvasDiv.appendChild(rectangle);

        //functions for rectangles
        rectangle.addEventListener("mouseenter", highlightShape);
        rectangle.addEventListener("click", clickShape);
        rectangle.addEventListener("mouseleave", removeHighlight);

    }
    // clickAndDrag();
}

//functions for clicking on the shapes
function clickShape(e) {
    console.log(propsArr);
    this.style.border = "5px solid blue";
    let propSection = document.getElementById("newPropsPanels");

    //create panel style
    let propPanel = document.createElement("div");
    propPanel.setAttribute("id", e.target.id);
    propPanel.style.height = "auto";
    propPanel.style.width = "100%";
    propPanel.style.border = "1px solid green";

    //create CIRCLE panel and tools (radius - height/width/borderRadius)
    let radiusRange = document.createElement("input");
    radiusRange.setAttribute("type", "range");
    radiusRange.setAttribute("min", "1");
    radiusRange.setAttribute("max", "300");
    radiusRange.setAttribute("value", "50");
    radiusRange.style.margin = "10px";
    radiusRange.onclick = function () {
        let shapeId = e.target.id;
        // console.log(panelId);
        let newRadius = parseInt(radiusRange.value);
        let circle = document.getElementsByClassName("shape");
        let circleVal = circle[shapeId].getAttribute("value");

        if (circleVal === "circle") {
            circle[shapeId].style.height = newRadius + "px";
            circle[shapeId].style.width = newRadius + "px";
            circle[shapeId].style.borderRadius = newRadius + "px";
        }
    }

    //create RECTANGLE panel and tools (height and width)
    let heightRange = document.createElement("input")
    heightRange.setAttribute("class", "rectHeight");
    heightRange.setAttribute("type", "range");
    heightRange.setAttribute("min", "1");
    heightRange.setAttribute("max", "300");
    heightRange.setAttribute("value", "50");
    heightRange.onclick = function () {
        let shapeId = e.target.id;
        let newHeight = parseInt(heightRange.value);
        let rectangle = document.getElementsByClassName("shape");
        let rectVal = rectangle[shapeId].getAttribute("value");
        // console.log(rectVal);

        if (rectVal === "rectangle") {
            rectangle[shapeId].style.height = newHeight + "px";
        }
    };


    let widthRange = document.createElement("input");
    widthRange.setAttribute("class", "rectWidth");
    widthRange.setAttribute("type", "range");
    widthRange.setAttribute("min", "1");
    widthRange.setAttribute("max", "300");
    widthRange.setAttribute("value", "50");
    widthRange.onclick = function () {
        // console.log(heightRange.defaultValue);
        // console.log(widthRange.value);
        let shapeId = e.target.id;
        let newWidth = parseInt(widthRange.value);
        // console.log(typeof (newWidth));
        let rectangle = document.getElementsByClassName("shape");
        // console.log(rectangle[shapeId]);
        let rectVal = rectangle[shapeId].getAttribute("value");
        // console.log(rectVal);


        if (rectVal === "rectangle") {
            rectangle[shapeId].style.width = newWidth + "px";
        }
    };


    let hlabel = document.createElement("p");
    hlabel.innerText = "height:";
    let wlabel = document.createElement("p");
    wlabel.innerText = "width:";

    //color picker would be appended here

    //create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", e.target.id);
    deleteBtn.innerText = "delete";
    //function to delete specific shape
    propPanel.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteShape)

    
    let shapeProp = document.getElementById(this.id);
    let shapeValue = shapeProp.getAttribute("value");
    console.log(shapeValue);

    if (shapeValue === "circle") {
        // Label props panel with shape type
        let shapeLabel = document.createElement("p");
        shapeLabel.innerText = "Circle, id# " + this.id

        let rlabel = document.createElement("p");
        rlabel.innerText = "radius:";

        //append 
        if (propsArr.indexOf(shapeProp) === -1) {
            // console.log("shape is new")
            //on click, push shape's id into the properties array if it's not already there (propsArr):
            // console.log(propsArr)
            propsArr.push(shapeProp);
            //append
            propSection.prepend(propPanel);
            propPanel.appendChild(shapeLabel);
            propPanel.appendChild(rlabel);
            rlabel.appendChild(radiusRange);

        } else {
            return null;
        }
    } else if (shapeValue === "rectangle") { 

        // Label props panel with shape type
        let shapeLabel = document.createElement("p");
        shapeLabel.innerText = "Rectangle, id# " + this.id
        //append 
        if (propsArr.indexOf(shapeProp) === -1) {
            // console.log("shape is new")
            propsArr.push(shapeProp);
            //append
            propSection.prepend(propPanel);
            propPanel.appendChild(deleteBtn);
            propPanel.appendChild(shapeLabel);
            propPanel.appendChild(hlabel);
            hlabel.appendChild(heightRange);
            propPanel.appendChild(wlabel);
            wlabel.appendChild(widthRange);
        } else {
            return null;
        }
    }
}

//delete shape and panel on button click 
function deleteShape(e) {
    console.log("delete btn clicked!");
    let panelSection = document.getElementById("newPropsPanels");
    // console.log(panelSection.childNodes[0]);

    let shapeDiv = document.getElementById(this.id);
    // console.log(propPanel);

    //grab panel id & find shape's id
    let panelId = shapeDiv.getAttribute("id");
    console.log("panel ID is " + panelId);


    for (let i = 0; i < shapeArr.length; i++) {
        // remove from arrays and DOM if found
        shapeArr.splice([i], 1);
        propsArr.splice([i], 1);
        shapeDiv.remove();
        panelSection.childNodes[i].remove();
        break;
    }
    // console.log(propsArr);
    // console.log(shapeArr);

}

//highlight shape on mouseenter
function highlightShape(e) {
    // console.log("hovering!");
    // console.log(e.target.id);
    // console.log(this.id);
    if (e.target.id === this.id) {
        this.style.border = "5px solid red";
    }
}

//remove highlight on mouseleave
function removeHighlight(e) {
    if (e.target.id === this.id) {
        this.style.border = "none";
    }
}

//**DRAG SHAPE
//shape's position would be "absolute";
//locate dragging area
//identify shape being dragged by its ID 
//add an event listener to the dragging item - mousedown
         //mousedown function***
         //canvas holds a mousemove and mouseup function
         //set points where mouse begins with e.clientX & e.clientY
            //mousemove function***
            //calculates where mouse is currently while moving around the window/canvas
            //the calculation would be: previous X/Y - e.clientX/Y
            //use .getBondingClientRect() to get top and left pixels. this will physically change where the div moves by updating the style.left/style.top
            //set the new coords to be the current position coords
            //mouseup function*** 
            //remove the event listeners from the canvas


//**To make the new shape appear randomly in the canvas div, I would use (Math.Random()) to get coordinates for the shape to appear, something like this: 
//let posX = (Math.random() * (window.innerWidth)).toFixed();
//let posY = (Math.random() * (window.innerHeight)).toFixed();
//I would have used the prevX/Y from the dragging function to display the current coordinates of the shape.

//Color Picker
//for the colorPicker, I wanted to implement either a plugin such as the one by Spectrum (https://bgrins.github.io/spectrum/) or use jQuery UI plugin


