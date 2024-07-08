//create callback funtion

// function myCallbackFn(){
//     console.log("hello this is a simple callback fun");


// }

//usage
// function lagMessage(nameAnything) {
//     //execute the callback fn
//     nameAnything();
// }

//call main funciton
// lagMessage(myCallbackFn);


//>>> different syntax or short approch

function logMessage(callback){
    // callback();
}

logMessage(function(){
    // console.log("hello Tissa , sing a song for me please");
})


//>>> returning a call back fucniton method

// function logmessage(callback1){
//     //execute the calback fn
//     const result = callback1();
//     console.log(result);
// }

// logmessage(() => {
//     return "Hello Darlin :)"
// });



//>>> passing parameters to the callback function

const logmessageHOF = (callback1) => {
  const result =  callback1('Tissa','Utsav');
  console.log(result);
}

const logMessageCallbackFn = (firstName, lastName) => {
    return`HEllo, ${firstName} & ${lastName} this is a simple task  `
}

//call hof
logmessageHOF(logMessageCallbackFn);


//>>>>> sum of two numbers

const calculateSum = (a,b, callback2) =>{
    const result = a + b;
    callback2(result);
};

calculateSum(2,3, (result)=>{
    console.log(result);
});