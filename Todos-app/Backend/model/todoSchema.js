import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  title: {
    type: String,
    required: [true, "Please enter title"],
  },
  todos: {
    type: String,
    required: [true, "Please enter todos"],
  },
}, { timestamps: true });

export const TodosModel = mongoose.model("Todos", todosSchema);