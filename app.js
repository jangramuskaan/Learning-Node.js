// 1. Working with modules

// const tutorial = require('./tutorial');
// console.log(tutorial.sum(1,1));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());



// 2.The Event Module and EventEmitter Class 

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1,num2) => {
//     console.log("num1 + num2 = ", num1 + num2);
// });

// eventEmitter.emit('tutorial', 1,2);

// class Person extends EventEmitter {
//     constructor(name){
//         super();
//         this._name = name;
//     }
//     get name(){
//         return this._name;
//     }
// }

// let muskaan = new Person('Muskaan');
// let christina = new Person('Christina');
// christina.on('name', () =>{
//     console.log("My name is ", christina.name)
// });
// muskaan.on('name', () =>{
//     console.log("My name is ", muskaan.name)
// });
// muskaan.emit('name');
// christina.emit('name');



// // 3. Working with the ReadLine Module 

// const readline = require('readline');
// const rl = readline.createInterface({input : process.stdin, output : process.stdout});
// let num1 = Math.floor(Math.random() *10 + 1);
// let num2 = Math.floor(Math.random() *10 + 1);
// let answer = num1 + num2;

// rl.question(`What is ${num1} + ${num2} ? \n`,
// (userInput) =>{
//     if(userInput.trim() == answer){
//         rl.close();
//     }
//     else{
//         rl.setPrompt('Incorrect response, Please try again \n');
//         rl.prompt();
//         rl.on('line',(userInput)=>{
//             if (userInput.trim() == answer)
//                 rl.close();
//             else{
//                 rl.setPrompt(`Your answer of ${userInput} is incorrect, Please try again \n`);
//                 rl.prompt();
//             }

//         })
//     }
// });

// rl.on('close', () => {
//     console.log('Hey! you got the answer right!');
// });




// 4. Working with the File System Module Part-1

// const fs = require('fs');

// // Create a file
// fs.writeFile('example.txt', 'This is an example file created by Node.js', (err) => {
//     if (err)
//         console.log(err);
//     else{
//         console.log('File created successfully');
//         fs.readFile('example.txt','utf-8', (err,file) => {
//             if(err)
//                 console.log(err);
//             else{
//                 console.log(file);
//             }
//         }
//         );
//     }
// });

// fs.rename('example.txt','example2.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully renamed the file');
// }) 

// fs.appendFile('example2.txt','Some data being appended to the file', (err) => {
//     if (err)
//         console.log(err)
//     else
//         console.log('Data appended successfully');
// });

// fs.unlink('example2.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully deleted the file');
// })




// 4. Working with the File System Module Part-1

// const fs = require('fs');
// fs.mkdir('tutorial', (err) => {
//     if(err)
//         console.log(err);
//     else
//     fs.writeFile('./tutorial/example.txt','123', (err) => {
//         if(err)
//             console.log(err);
//         else
//             console.log('File created successfully');
//         });
// });

// fs.unlink('./tutorial/example.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//       fs.rmdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Directory deleted successfully');
// });  
// });

// fs.readdir('example', (err, files) => {
//     if(err)
//         console.log(err);
//     else
//         for (let file of files){
//             fs.unlink('./example/' + file, (err) => {
//                 if (err)
//                     console.log(err);
//                 else
//                     console.log('Successfully Deleted file');
//             });
// };
// });



// 5.Working with Readable and Writable Streams

const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf-8');
const writeStream = fs.createWriteStream('example2.txt');
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});
