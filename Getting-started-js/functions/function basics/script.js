//==
// syntax of function declaration

// function sayHello (){
//     //logic goes here
//     //write any logic
//     console.log('HELLO DARLIN');
// }

//calling the function or invoke or use the function
//  sayHello()

 //another function
//  function greetings (){
//     console.log('Welcome to My WevPage');
//  }
// greetings()

//  function showDate(){
//     const currDate = new Date()
//     console.log(`Today's date is ${currDate}`);
//  }
//  showDate()



///----
/// Function expression
///----

// const sayHello = function(){
//     console.log('HELLO DARLIN')
// }

// sayHello()


//example even or odd

// const evenOdd = function(){
//     const number = 10;
//     if(number % 2 === 0){
//         console.log('This is Even');
//     }else{
//         console.log('This is Odd');
//     }
// }
// evenOdd()






///----
///anonymous functions
// unnamed functions
///----]


// function(){
//     console.log('WELCOME');;
// }

//--
//IIFE functions(immediately invoked function expression)
//=-=-=
 (function () {
    // console.log('WELCOME');
 }) ();

(function () {
    const num = 5
    const sqr = num*num
    // console.log(sqr);
})();

(function () {
    const str1 = "HELLO";
    const str2 = "DARLIN";
    const res = str1 + " " + str2;
    // console.log(res);
} 
) ();






//-=-=-
// function parameters vs arguments
//-=-==-

const greetings = function(name, age){
    console.log(`Welcom ${name} your age is: ${age}`);
};
greetings("TJ", 20);

const addnum = function(a , b) {
    const result = a + b;
    console.log(result);
};
addnum(44, 56)