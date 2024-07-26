//analyze the process

// console.log(process);

//* environment variables

// console.log(process.env);

const appEnv = process.env.APP_ENV || "development";

console.log(`Our Node App is running Tissa in ${appEnv}`);

//set

//? process.exit

// if(process.env.NODE_ENV !== "produciton"){
//     //display some error
//     console.log("this script should only run in production");
//     //exit the process
//     process.exit();
// }

//process.cwd()and process.chdir(dirctory)

console.log(`current workding directory ${process.cwd()}`);

try{
    //change the current workding directory
    process.chdir("/tmp");

}catch(error){
    console.log(`something happened: ${error}`);
}