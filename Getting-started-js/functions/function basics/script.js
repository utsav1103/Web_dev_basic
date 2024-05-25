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
 function greetings (){
    console.log('Welcome to My WevPage');
 }
// greetings()

 function showDate(){
    const currDate = new Date()
    console.log(`Today's date is ${currDate}`);
 }
//  showDate()



///----
/// Function expression
///----

const sayHello = function(){
    console.log('HELLO DARLIN')
}

// sayHello()


//example even or odd

const evenOdd = function(){
    const number = 13;
    if(number % 2 === 0){
        console.log('This is Even');
    }else{
        console.log('This is Odd');
    }
}
// evenOdd()



