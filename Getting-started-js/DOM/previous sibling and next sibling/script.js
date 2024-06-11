//Previous sibling
//select buttons

// const buttonEl1 = document.getElementById('button1');
// const buttonEl2 = document.getElementById('button2');

 //use pervious sibling to get the precedding paragraph element

// const text1El = buttonEl1.previousSibling;
// const text2El = buttonEl2.previousSibling;

// console.log(text1El);

// if(text1El.nodeType === 3){
//     text1El.textContent = 'Text 1 has been updated'
// }
// if(text2El.nodeType === 3){
//     text2El.textContent = 'Text 2 has been changed'
// };




//>>>>>
//Next sibling
//>>>>>

const containerEl = document.getElementById('container');
 

//Get all buttons within the container

const buttonsEl = document.querySelectorAll('button');
// console.log(buttonsEl);


//loop thorugh each button and change the text

buttonsEl.forEach((button) => {
    const nextElementEl = button.nextSibling;
    // console.log(nextElementEl);

    if(nextElementEl && nextElementEl.nodeType === 3) {
        nextElementEl.textContent = "Changed Text";
    }

});
