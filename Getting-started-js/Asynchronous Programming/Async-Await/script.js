//simulating a delay

// async function waitAndRun(value){
// //making api call (dummy because we didn't stydy it now)
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(value);
//         }, 3000);
//     });
// }
// //usage

// const getProcessedValue = async() => {
//     const result = await waitAndRun("tissa is mad ");
//     console.log(result);
// };
// getProcessedValue();


//by arrow funtion

const getName = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("TISSA");
        }, 1000)
    });
};

const getAge = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20);
        }, 3000)
    });
};


async function getUser (){
   const result = await Promise.all([getName(),getAge()]);
   console.log(result);
}

getUser();