//<><><>
//the concept of objects being passed by reference
//------

const per1 = {name:"Tisa", age: 20};
const per2 = per1;

per2.age = 21;
per1.name = "Utsav";
// console.log("person1", per1);
// console.log("person2", per2);





//>>>>>>
//passing object ot a function



// const incAge = (person) =>{
//     person.age += 1;
//     person.name = "Utsav";
// };

// const Tisa = {name:"Tisa", age: 20};
// console.log("before", Tisa);
// incAge(Tisa);
// console.log("after", Tisa);



//>>>>>
//Objects In Arrays
//>>>>>

//managin a list of students

const std  = [{id: 1,name:'Tisa', grade:"A"},
    {id: 2, name:'Utsav', grade:"A"},
];
// const std1 = std[0];
// console.log(std1);
// console.log(std);

//add new student

const addStd = (id, name , grade) => {
    const newStd = {id, name, grade};
    //push new student
    std.push(newStd);
};
addStd(3, 'Van',"A");
// console.log(std);

//upgrade existing student
const updateStd = (id , newGrade) => {
    const stdFound = std.find((student)=>{
        return student.id === id;
    });
    if(stdFound) {
        stdFound.grade = newGrade;
    }else{
        // console.log("student not found");
    }
};
updateStd(3, "B")
// console.log(std);



//>>>>>
// Arrays in Objects
//.>>>>>


const todoLists = {
    title: "Todo List Application",
    tasks : [
        {id:1, description: "Buy Groceries", completed: false},
        {id:2, description: "Go To Gym", completed: false},
        {id:2, description: "Call Me", completed: false},
    ],
};
//accessing properties
todoTitle = todoLists.title;
//tasks
const allTasks = todoLists.tasks;
// console.log(allTasks);
//function to add a task

const addTask = (description) => {
    //get new id
    const newId = todoLists.tasks.length +1;
    const newTask = {
        id: newId,
        description,
        completed: true,
    };
    //push the new task into the original task
    todoLists.tasks.push(newTask);
};

//call fn
addTask("Chat with POOKIE")

// console.log(todoLists);

//fun to mark a task as completed

const markAtas  = (id) => {
    //find the task
    const foundTask = todoLists.tasks.find((tasks) => tasks.id === id)
    if(foundTask){
        foundTask.completed = true;
    }else{
        // console.log("Task not found")
    }
};
    markAtas(1)
    // console.log(todoLists);








    //>>>>>
    //ITERATE THORUGH ARRAYS USING FOREACH()
    //>>>>>

    //basic example

    const fruits = [
        {name: 'Apple', color: 'Red'},
        {name: 'Banana', color: 'Yellow'},
        {name: 'Cherry', color: 'Red'},
    ];
    fruits.forEach((currentVal, index, array) => {
        console.log(currentVal, index, array);
    });

    //complex example {calculate total cost of items in the cart and list the names of all items int the cart}

    const cart = [
        {name:'Laptop',price: 1000,qty: 1},
        {name:'Phone',price: 500,qty: 2},
        {name:'TV',price: 1500,qty: 1},
        {name:'Headphones',price: 100,qty: 3}
    ];
    //calculate total cost
    let totalCost = 0;
    cart.forEach((item) => {
        //sum all product price
        totalCost += item.price * item.qty;
    });
    // console.log(totalCost);

    //list all the names of the products

    let productName = [];
    cart.forEach((item) => {
        productName.push(item.name)
    });
    // console.log(productName);
    //calculate total no. of items

    let totalItems = 0;
    cart.forEach((item) => {
        totalItems += item.qty
    });
    // console.log(totalItems);




