import express from "express";

const app = express();

app.use(express.json());

let todoArr = ["go to market", "go to school"];

app.get("/todo", (req, res) => {
  res.json({
    todos: todoArr,
  });
  res.send("server received GET request");
});

app.post("/todo", (req, res) => {
  const { new_todo } = req.body;
  todoArr.push(new_todo);
  res.send("server received POST request");
});

app.put("/todo", (req, res) => {
  const {old_todo, new_todo } = req.body;
  const target_index = todoArr.indexOf(old_todo)
  todoArr[target_index]= new_todo
  res.send("server received PUT request");
});

app.delete("/todo", (req, res) => {
  const {old_todo } = req.body;
  const target_index = todoArr.indexOf(old_todo)
  todoArr.splice(target_index, 1)
  res.send("server received DELETE request");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080 ");
});
