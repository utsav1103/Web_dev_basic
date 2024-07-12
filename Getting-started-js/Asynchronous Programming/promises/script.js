//example 1 with callback

//creating a callback funciton
// function simpleCb1(sucess, cb) {
// //   console.log("Cb is called");
//   if (sucess) {
//     cb(null, "The operation was successful");
//   } else {
//     cb("The operation failed", null);
//   }
// }

//usage
// simpleCb1(false, (err, result) => {
//   if (err) {
//     // console.log(err);
//   } else {
//     // console.log(result);
//   }
// //   console.log("This always log regardless of the operaion");
// });





//>>> example 1 converted to promise
//creating promise

// const simplePromise = new Promise((resolve, rejected) => {
//   const success = false;
//   if (success) {
//     resolve("The promise was successful");
//   } else {
//     rejected("The promise was failed");
//   }
// });

//using promise

// simplePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("This always log regardless of the operation");
//   });



//>>> example 2 converted to promise

function isEvenNumberPromise(number) {
    return new Promise((resolve, reject) => {
        if(number % 2 === 0){
            //resolve the promise
            resolve(`The number ${number} is even`);

        }else{
            //reject the promise
            reject(`The number ${number} is not even`);
        }
    });
}

//call the promise

isEvenNumberPromise(4).then((result) =>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})