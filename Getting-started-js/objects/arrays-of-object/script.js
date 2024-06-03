//<><><>
//the concept of objects being passed by reference
//------

const per1 = { name: "Tisa", age: 20 };
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

const std = [
  { id: 1, name: "Tisa", grade: "A" },
  { id: 2, name: "Utsav", grade: "A" },
];
// const std1 = std[0];
// console.log(std1);
// console.log(std);

//add new student

const addStd = (id, name, grade) => {
  const newStd = { id, name, grade };
  //push new student
  std.push(newStd);
};
addStd(3, "Van", "A");
// console.log(std);

//upgrade existing student
const updateStd = (id, newGrade) => {
  const stdFound = std.find((student) => {
    return student.id === id;
  });
  if (stdFound) {
    stdFound.grade = newGrade;
  } else {
    // console.log("student not found");
  }
};
updateStd(3, "B");
// console.log(std);

//>>>>>
// Arrays in Objects
//.>>>>>

const todoLists = {
  title: "Todo List Application",
  tasks: [
    { id: 1, description: "Buy Groceries", completed: false },
    { id: 2, description: "Go To Gym", completed: false },
    { id: 2, description: "Call Me", completed: false },
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
  const newId = todoLists.tasks.length + 1;
  const newTask = {
    id: newId,
    description,
    completed: true,
  };
  //push the new task into the original task
  todoLists.tasks.push(newTask);
};

//call fn
addTask("Chat with POOKIE");

// console.log(todoLists);

//fun to mark a task as completed

const markAtas = (id) => {
  //find the task
  const foundTask = todoLists.tasks.find((tasks) => tasks.id === id);
  if (foundTask) {
    foundTask.completed = true;
  } else {
    // console.log("Task not found")
  }
};
markAtas(1);
// console.log(todoLists);

//>>>>>
//ITERATE THORUGH ARRAYS USING FOREACH()
//>>>>>

//basic example

const fruits = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];
fruits.forEach((currentVal, index, array) => {
  // console.log(currentVal, index, array);
});

//complex example {calculate total cost of items in the cart and list the names of all items int the cart}

const cart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Phone", price: 500, qty: 2 },
  { name: "TV", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
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
  productName.push(item.name);
});
// console.log(productName);
//calculate total no. of items

let totalItems = 0;
cart.forEach((item) => {
  totalItems += item.qty;
});
// console.log(totalItems);

//>>>>>
// iterating through arrays using 'Map()'
//>>>>>

const ShoppingCart = [
  { name: "Laptop", price: 1000, qty: 1 },
  { name: "Phone", price: 500, qty: 2 },
  { name: "TV", price: 1500, qty: 1 },
  { name: "Headphones", price: 100, qty: 3 },
];

//add 10% discount using map()

const discountCart = ShoppingCart.map((product) => {
  return {
    name: product.name,
    price: product.price * 0.9,
  };
});
// console.log(discountCart);

//get all the product names only

const ProductNameONly = ShoppingCart.map((product) => {
  return { name: product.name };
});
// console.log(ProductNameONly);

//>>>>>>
//ITERATE THORUGH ARRAYS USING Filter()
//>>>>>>

//filter out active users

const users = [
  {
    id: 1,
    isActive: true,
    name: "Utsav",
  },
  {
    id: 2,
    isActive: true,
    name: "Tisa",
  },
  {
    id: 3,
    isActive: false,
    name: "PinkMen",
  },
];

const ActiveUser = users.filter((user) => {
  return user.isActive === true;
});
// console.log(ActiveUser);

//transaction above a certain amount

const transAction = [
  { id: 1, amount: 50 },
  { id: 2, amount: 150 },
  { id: 3, amount: 200 },
];

//filter out more than 100
const amountFilter = transAction.filter(
  (transaction) => transaction.amount > 100
);

// console.log(amountFilter);






//>>>>
// transformation and manipulation
// using splice()
//>>>>>


//remove inactive users

const usersArr = [
    {
      id: 1,
      isActive: true,
      name: "Utsav",
    },
    {
      id: 2,
      isActive: true,
      name: "Tisa",
    },
    {
      id: 3,
      isActive: false,
      name: "PinkMen",
    },
  ];

  //find index of user
  const indexToRemove = usersArr.findIndex((user)=> user.id === 3 && !user.isActive  
  );
  //use splice
  if(indexToRemove !== -1){
    usersArr.splice(indexToRemove, 1);
  }
//   console.log(usersArr);


//>>>>>>managing playlist 

const playlist = [
    {id:"s1", title: "On My Way", aritst:"Sabrina"},
    {id:"s2", title: "HeartBreak Anniversary", aritst:"Giveon"},
    {id:"s3", title: "Let Her Go", aritst:"Passenger"},
    {id:"s4", title: "Can You Feel My Heart", aritst:"Bring Me To The Horizon"},
];
//remove song of id s4

const removeSong = playlist.findIndex(function(song){
    return song.id === "s4";
});

// if(removeSong !== -1){
//     playlist.splice(removeSong, 1);
// }
// console.log(playlist);

// move song to id of s1 to s3 position
const indexToMove = playlist.findIndex(song => song.id === 's1')
if(indexToMove !== -1){
    const [SongToMove] = playlist.splice(indexToMove, 1);
    // console.log(SongToMove);
    playlist.splice(2,0,SongToMove)
}
// console.log(playlist);

//inset new song
const newSong = {id:'s5', title:"Somebody That I Used To Know", aritst:"Gotye"};
playlist.splice(1, 0 , newSong);
// console.log(playlist);







//>>>>>
//object.assign property
//>>>>>>

//updating properties in a student in class
const student1 = [
    {id: 1,name:"Utsav", grade:"A"},
    {id: 2,name:"Tisa", grade:"A"},
];
//grade update
const gradeUpdate = [{grade: "A+"},{grade:"A++"}];
//update the students
const updatedStu = student1.map((student, index) => {
    return Object.assign({},student,gradeUpdate[index]);
});

// console.log(updatedStu);






//>>>>  search and filter using find()
//>>>>
const patients = [
    {id: 101, name:'Sarah', disease: "cold"},
    {id: 102, name:'Danny', disease: "Fever"},
    {id: 103, name:'Angel', disease: "cold"},

];
//patient with cold
const paitentWithCold = patients.find(patient => patient.disease === "cold");
// console.log(paitentWithCold);




//>>>>>
//<Some()> method
//>>>>>


const patient1 = [
    {id: 101, name:'Sarah', disease: "cold"},
    {id: 102, name:'Danny', disease: "Fever"},
    {id: 103, name:'Angel', disease: "cold"},

];
//patient with cold
const paitentWithCold1 = patient1.some(patient => patient.disease === "cold");

// console.log(paitentWithCold1);




//>>>>>
//array every() method
//>>>>>

const studArr = [{
    id: 1, name:"Utsav", grade: "A+"
},
{id:2, name:"Tisa", grade: "A+"},
{id:2, name:"Pinkmen", grade: "A"},
];

const allPassed = studArr.every((student) => student.grade !== "F");
console.log(allPassed);


