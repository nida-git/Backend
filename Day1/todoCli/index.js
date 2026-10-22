import { program } from "commander";
import fs from "fs";
import path from "path";

const dirName = import.meta.dirname;
const filePath = path.join(dirName, "Data", "todos.json");
const data = fs.readFileSync(filePath, "utf8");
const todoArr = JSON.parse(data);

program
  .name("Todo CLI")
  .description("CLI to add , delete , update , print day to day todos")
  .version("1.0.0");

program
  .command("print")
  .description("Print the available todos")
  .action(() => {
    todoArr.forEach((element, index) => {
      console.log(`${index + 1} : ${element}`);
    });
  });

program
  .command("add")
  .description("add the new todos")
  .argument("<newTodo>", "add a new todo task")
  .action((newTodo) => {
    todoArr.push(newTodo);
    fs.writeFileSync(filePath, JSON.stringify(todoArr), "utf8");
  });

program
  .command("edit")
  .description("edit the existing todo")
  .argument("<existingTodo>", "existing todo task")
  .argument("<newTodo>", "new todo task")
  .action((existingTodo, newTodo) => {
    todoArr.forEach((elem,index)=>{
        if(elem === existingTodo){
           todoArr[index]= newTodo
           fs.writeFileSync(filePath,JSON.stringify(todoArr),"utf8")
        }
    })
  });

program
  .command("delete")
  .description("delete the existing todo")
  .argument("<existingTodo>", "existing todo task")
  .action((existingTodo) => {
    todoArr.forEach((elem,index)=>{
        if(elem === existingTodo){
           todoArr.splice(index , 1)
           fs.writeFileSync(filePath,JSON.stringify(todoArr),"utf8")
        }
    })
  });

program.parse();
