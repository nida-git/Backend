// console.log("Hello world");

// console.log(process);

// let name = process.argv[2]

// console.log("hello", name);

// let num1 = process.argv[2]
// let num2 = process.argv[3]

// console.log(num1 + num2);

// let num1 = Number(process.argv[2])
// let num2 = Number(process.argv[3])

// // console.log(num1 + num2);

// console.log(global);

// global.setTimeout(() => {
//     console.log("hello");
// }, 1000);

// Tha Path and Fs module

const path = require("path");
const fs = require("fs");

// import path from "path";
// import fs from "fs";

// console.log(path);

// console.log("Current directory", __dirname);

// const readData = fs.readFileSync("message.txt", "utf8")

// console.log(readData);

// const data = "Hello I am updated Data"

// fs.writeFileSync("message.txt", data ,"utf8", )

// const appendData = "I am appended message "

// fs.appendFileSync("message.txt", appendData, "utf8" )

// if(fs.existsSync("message.txt")){
//     console.log("file exists");
// }else{
//     console.log("file doesnot exists");
// }

// const filePath = path.join(__dirname, "message.txt")
// console.log(filePath);
// const filePath2 = path.join(__dirname,"data", "user.json" )

// const data = fs.readFileSync(filePath , "utf8")

// const data = fs.readFileSync(
//   'C:/Users/Administrator/Desktop/FullStack/Backend/message.txt',
//   "utf8",
// );

// const data = fs.readFileSync(filePath2 , "utf8")

// console.log(data);

// async function readingFile(){
//    const readFile = await fs.readFile("C:\Users\Administrator\Desktop\FullStack\Backend\message.txt", "utf8", (err, data)=>{
//     console.log(data);
//     console.log("this is this");
//    })

//    console.log(readFile);
// }

// readingFile()

// fs.writeFileSync("output.txt", "Hello i am output file", "utf8");


// const files = fs.readdirSync("./data")

// console.log(files);



// To do list manager

const command = process.argv[2]
const data = process.argv[3]

const filePath = path.join(__dirname, "data", "todos.txt")

if (command == "add"){
    fs.writeFileSync(filePath, data , "utf8")
}else if (command == "list"){
    const readData = fs.readFileSync(filePath, "utf8")
    console.log(readData);
}

