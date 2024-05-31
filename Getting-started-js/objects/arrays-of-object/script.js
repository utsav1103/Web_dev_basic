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

const incAge = (person) =>{
    person.age += 1;
    person.name = "Utsav";
};

const Tisa = {name:"Tisa", age: 20};
console.log("before", Tisa);
incAge(Tisa);
console.log("after", Tisa);
