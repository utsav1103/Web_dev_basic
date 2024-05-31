//====
//Arrow functions
//

//basic syntax



const multiply = (a,b) => a*b;
const res = multiply(2,3);
// console.log(res);

//block body syntax
const greet = (name)=>{
    return `HELLO, ${name}`;
}
const greet1 = greet('TISA')

//single parameter , no parentheses()

const sqr = x => x * x
const sqr1 = sqr(4)




//>>>>>
//destructuring in JS ES6
//<><><>

const numbers = [1,2,3,4];
const [first , second, third, fourth] = numbers
// console.log(first); // this is destructuring

let a = 1;
let b = 2;
[a,b] = [b,a];

// console.log(a,b);

const {names,age,email} = {names:"Tisa", age: 20, email: "TiSa11@gmail.com"};
console.log(names, age, email);
// console.log(age);
// console.log(email);

//destructure fucntion parameters

function gerrt ({name1, age}){
    console.log(`Hello, ${name1} , your age is: ${age}`);
}
const user1 = {
    name1: "TiSa",
    age: 20,
};
gerrt(user1)