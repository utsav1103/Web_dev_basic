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