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