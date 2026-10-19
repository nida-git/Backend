console.log("Hello world");

// console.log(process);

// let name = process.argv[2]

// console.log("hello", name);

// let num1 = process.argv[2]
// let num2 = process.argv[3]

// console.log(num1 + num2);

let num1 = Number(process.argv[2]) 
let num2 = Number(process.argv[3])

// console.log(num1 + num2);

console.log(global);

global.setTimeout(() => {
    console.log("hello");
}, 1000);