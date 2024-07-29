// const { log, error } = require("console");
 const fs = require("fs");

//? READ a file 

//synchromously
// const dataBuffer = fs.readFileSync("./sample.txt");
// const content = dataBuffer.toString();
// console.log(content);

//Asynchronously

// fs.readFile('./sample.txt', 'utf-8', (err, content) => {
//     if(err){
//         console.log(err);
//         throw err;
//     }else{
//         console.log(content);
//     }
// });



//* write some content to a file

// fs.writeFile('./write.txt', `Hello Tissa...., how's it going :)`, (err)=>{
//     if(err){
//         console.log(err);
//         return ;
//     }else{
//         console.log("File has been written");
//     }
// })



//! appending a file

// fs.appendFile("./write.txt", "Tissa.. Append content", (error) =>{
//     if(error){
//         console.log(erroe);
//     }else{
//         console.log("file content appended");
//     }
// });



//* if a file exist

// fs.access('./write.txt', fs.constants.F_OK, (error) =>{
//     if(error){
//         console.log("File does not exists");
//     }else{
//         console.log("File Exists");
//     }
// });


//!delete a file

// fs.unlink('./del.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file has been deleted");
//     }
// });



//? using promise
const fs2 = require('fs/promises');


const readFilec = async()=>{
    try {
        const content = await fs2.readFile('./sample.txt','utf-8');
        console.log(content);
    } catch (error) {
        console.log(error);
    }
    
};
readFilec();