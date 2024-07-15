//Promise.all

//create our promises

// const Promise1 = Promise.resolve("promise 1 resolved");
// const Promise2 = Promise.resolve("promise 2 resolved");

// Promise.all([Promise1, Promise2]).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });


const Promise1 = Promise.resolve("promise 1 resolved");
const Promise2 = Promise.reject(new Error("promise 2 rejected"));

Promise.race([Promise1, Promise2]).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});