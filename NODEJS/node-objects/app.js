//accessing the global object



//accessing the global object

global.myGlobal = 'Hello from the Tisaa';

//console.log(global.myGlobal);

//to check if our variable is truly global

//console.log("myGlobal" in global);

// console.log(__dirname);
// console.log(__filename);


//? using setInterval and clearInterval 


let count = 0;
const interval = setInterval(()=>{
    console.log('Hello Tissa');
    count++
    if(count === 5){
        clearInterval(interval)
    }
},1000)


//* settimeout 

setTimeout(()=>{
    console.log("This will be delayed by 5 s");
}, 5000);