//displays a list of fruits 

//function to add a new fruit

function addFruit (name){
  const ulEl =  document.getElementById('fruitList');
  //create li element
  const li = document.createElement("li");
  li.className = "fruit";
  li.textContent = name;
  ulEl.appendChild(li);

//   console.log(li);

}

addFruit("Apple");
addFruit("Berry");
addFruit("Cherry");
addFruit("Banana");


//remove fruit funciton

function removeFruit(name){
    //first select the parent
    const ulEl =  document.getElementById('fruitList');
    let fruitFound = false;

    //loop through the fruit to find the fruit

    for(const li of ulEl.children){
        // console.log(li);
        if(li.textContent === name){
            fruitFound = true;
            //remove the fruit
            ulEl.removeChild(li);
            break;
        }
    }
    //update the message based on whether the fruit was found
    document.getElementById('message').textContent = fruitFound ? `${name} was removed from the list `: `${name} not found in the list`
}
    removeFruit("Apple");
    removeFruit("kiwi");