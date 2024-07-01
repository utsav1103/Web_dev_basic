//named funciton for alert

function showAlert(){
    console.log('Hello');
}

//getting the button element

const alretButtonEl = document.getElementById('alertButton')

//addevent listenere to the element

alretButtonEl.addEventListener("click", showAlert );

//named funciton for removing alert

function removeAlert() {
    alretButtonEl.removeEventListener("click", showAlert);
};

//getting the remove button element

const removeButtonEl = document.getElementById("removeButton");

removeButtonEl.addEventListener('click', removeAlert);