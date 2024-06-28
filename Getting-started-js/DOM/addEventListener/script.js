const btnClickEl = document.getElementById("clickButton");
btnClickEl.addEventListener("click", function(){console.log("Click event is called");

});
//another way

document.getElementById("doubleClickButton").addEventListener('dblclick',()=>{
    console.log("double click event is called");
});

document.getElementById("hoverDiv").addEventListener("mouseover", function(){
    console.log("onMOuseOver event is called");
});