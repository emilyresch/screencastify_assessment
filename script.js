//identify buttons in html
let circleBtn = document.getElementById("add-circle");
let rectBtn = document.getElementById("add-rectangle");

//add event listeners to buttons
circleBtn.addEventListener("click", addshape);
rectBtn.addEventListener("click", addshape)

// array of shape objects
let shapeArr = [];
//array of properties based on shapes id number
let propsArr = [];

//FUNCTION TO CREATE A NEW SHAPE
function addshape(e) {
    e.preventDefault();
    // console.log(e.target.value);


    if (e.target.value === "circle") { //CIRCLE
        //grab canvas 
        let canvasDiv = document.getElementById("canvas");
        //make it appear randomly in the canvas div
        // let posX = (Math.random() * (window.innerWidth)).toFixed();
        // let posY = (Math.random() * (window.innerHeight)).toFixed();

        //create new circle element
        let circle = document.createElement("div");
        // circle.style.position = "relative";
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
        // console.log(circleObj)

        //push 
        shapeArr.push(circleObj);
        console.log(shapeArr);
        //create unique id attr for each new shape and push into the array
        for (let i = 0; i < shapeArr.length; i++) {
            let newId = document.createAttribute("id");
            newId.value = [i];
            circle.setAttributeNode(newId);
            // console.log(newId)
            circleObj.id = newId.value;
        }

        //create class attr for new shape
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
        //find canvas
        let canvasDiv = document.getElementById("canvas");
        //create new rectangle element
        let rectangle = document.createElement("div");
        rectangle.style.height = "50px";
        rectangle.style.width = "100px";
        rectangle.style.backgroundColor = "black";
        rectangle.setAttribute("value", "rectangle");
        // template for rect object
        let rectObj = {
            id: "",
            type: "rectangle",
            height: "50px",
            width: "100px",
            color: "black",
        }
        // console.log(rectObj)

        //push
        shapeArr.push(rectObj);
        //create unique id attr for each new shape and push into the array
        for (let i = 0; i < shapeArr.length; i++) {
            let newId = document.createAttribute("id");
            newId.value = [i];
            rectangle.setAttributeNode(newId);
            // console.log(newId)
            rectObj.id = newId.value;
        }


        //create class attr for new shape
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
}

//CLICKING ON SHAPES FUNCTIONS
function clickShape(e) {
    console.log(propsArr);
    // console.log(this.id);
    this.style.border = "5px solid blue";

    //find properties section
    let propSection = document.getElementById("newPropsPanels");

    //create panel style
    let propPanel = document.createElement("div");
    propPanel.setAttribute("id", e.target.id);
    propPanel.style.height = "auto";
    propPanel.style.width = "100%";
    propPanel.style.border = "1px solid green";
    // propPanel.setAttribute("class", "propertyPanel");

    //create CIRCLE panel and tools
    let radiusRange = document.createElement("input");
    radiusRange.setAttribute("type", "range");
    radiusRange.setAttribute("min", "1");
    radiusRange.setAttribute("max", "300");
    radiusRange.setAttribute("value", "50");
    radiusRange.style.margin = "10px";
    radiusRange.onclick = function () {
        console.log(radiusRange.value);
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

    //create RECTANGLE panel and tools
    let heightRange = document.createElement("input")
    heightRange.setAttribute("class", "rectHeight");
    heightRange.setAttribute("type", "range");
    heightRange.setAttribute("min", "1");
    heightRange.setAttribute("max", "300");
    heightRange.setAttribute("value", "50");
    heightRange.onclick = function () {
        // console.log(heightRange.defaultValue);
        // console.log(heightRange.value);
        let shapeId = e.target.id;
        let newHeight = parseInt(heightRange.value);
        // console.log(typeof (newHeight));
        let rectangle = document.getElementsByClassName("shape");
        // console.log(rectangle[i]);
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

    //delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", e.target.id);
    deleteBtn.innerText = "delete";
    //function to delete specific shape
    propPanel.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteShape)

    // console.log(e.target.id);

    // if (this.id) {
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
            console.log("shape is new")
            //on click, push shape's id into the properties array if it's not already there (propsArr):
            // console.log(propsArr)
            propsArr.push(shapeProp);
            //append
            propSection.prepend(propPanel);
            propPanel.appendChild(shapeLabel);
            propPanel.appendChild(rlabel);
            rlabel.appendChild(radiusRange);

        } else {
            console.log("shape is already in the array")
        }
    } else if (shapeValue === "rectangle") { //IF RECTANGLE

        // Label props panel with shape type
        let shapeLabel = document.createElement("p");
        shapeLabel.innerText = "Rectangle, id# " + this.id
        //append 
        if (propsArr.indexOf(shapeProp) === -1) {
            console.log("shape is new")
            propsArr.push(shapeProp);

            propSection.prepend(propPanel);
            propPanel.appendChild(deleteBtn);
            propPanel.appendChild(shapeLabel);
            propPanel.appendChild(hlabel);
            hlabel.appendChild(heightRange);
            propPanel.appendChild(wlabel);
            wlabel.appendChild(widthRange);
        } else {
            console.log("shape is already in the array")
        }
    }
}
// }

function findObjectById(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

//DELETE SHAPE AND PANEL ON CLICK (fix bug)
function deleteShape(e) {
    console.log("delete btn clicked!");
    let panelSection = document.getElementById("newPropsPanels");
    // console.log(panelSection.childNodes[0]);

    let shapeDiv = document.getElementById(this.id);
    // console.log(propPanel);

    //grab panel id & find shape's id
    let panelId = shapeDiv.getAttribute("id");
    console.log("panel ID is " + panelId);


    let shapeId = findObjectById(shapeArr, "id", panelId)
    console.log(shapeId);

    for (let i = 0; i < shapeArr.length; i++) {
        // if (shapeArr[i].id === panelId){
        shapeArr.splice([i], 1);
        propsArr.splice([i], 1);
        shapeDiv.remove();
        panelSection.childNodes[i].remove();
        break;
        // panelSection[i].remove();
        // } 
    }
    console.log(propsArr);
    console.log(shapeArr);

}

//HIGHLIGHT SHAPE ON MOUSEENTER
function highlightShape(e) {
    // console.log("hovering!");
    // console.log(e.target.id);
    // console.log(this.id);
    if (e.target.id === this.id) {
        this.style.border = "5px solid red";
    }
}

//REMOVE HIGHLIGHT ON MOUSELEAVE
function removeHighlight(e) {
    if (e.target.id === this.id) {
        this.style.border = "none";
    }
}