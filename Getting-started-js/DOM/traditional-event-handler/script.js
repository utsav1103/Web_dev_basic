//mouse event
document.getElementById("clickButton").onclick = function clickHandler(){
    console.log("click event is called");
};

document.getElementById("doubleClickButton").ondblclick = function dbClickHandler(){
    console.log("dbClickHandler event is called");
};


document.getElementById("hoverDiv").onmouseover = function onMouseOverHandler(){
    console.log("hoverDiv event is called");
};


//keyboard event


document.getElementById("keyInput").onkeydown = function onKeyDownHandler(){
    console.log("Keydown event id called");
};


document.getElementById("keyInput").onkeyup = function onKeyUpHandler(){
    console.log("KeyUp event id called");
};


//form events


document.getElementById("myForm").onsubmit = function onsubmitHandler(){
    console.log("onSubmit event id called");
};

document.getElementById("formInput").onfocus = function onFocusHandler(){
    console.log("onFocus event id called");
};
