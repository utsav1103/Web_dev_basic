//--- set time out

const showMessage = () => {
    // console.log("Hello after 3 seconds");

};

//schedule the message
setTimeout(showMessage, 3000)

// this will be blocked until the upper one run but it will not because of setTimeout function
// console.log('waiting for the message');




//>>>> set interval 


setInterval(() => {
    // console.log(`I'm calling at every 2 seconds`);
}, 2000);



let counter = 0;
 
const intervalId = setInterval(() => {
    counter++;
    console.log(counter);
    if(counter >= 5){
        clearInterval(intervalId);
    }
}, 2000)