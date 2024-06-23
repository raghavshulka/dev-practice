import express from "express";
import { delTodos, getTodos, todos, updateTodos,  } from "../controller/todoController.js";
const app = express.Router();

app.post("/new", todos);
app.delete('/del/:id', delTodos);
app.put('/update/:id', updateTodos);
app.get('/get', getTodos);



export default app;