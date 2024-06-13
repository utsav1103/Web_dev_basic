//function to create a new task

function createTask (newTask){
    //create a new div element to hold the task
    const taskEl = document.createElement("div");
    
    //>>>add new css to the created element
    
    taskEl.setAttribute("class","task")

    //create a text node containing the task text
    const taskNoteEl = document.createTextNode(newTask);

    taskEl.appendChild(taskNoteEl);

    //finally append the task to the div element

    document.getElementById("container").appendChild(taskEl);

    console.log(taskNoteEl);
    console.log(taskEl);
};
createTask("programming");
createTask("Talking to Pookie");
createTask("We Go GYM");