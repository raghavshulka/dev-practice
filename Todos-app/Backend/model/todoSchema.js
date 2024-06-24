import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["completed", "start"],
      default: "start",
    },
    priority: {
      type: String,
      enum: ["low","Medium", "High"],
      default: "low",
    },
    title: {
      type: String,
      required: [true, "Please enter title"],
    },
    todos: {
      type: String,
      required: [true, "Please enter todos"],
    },
  },
  { timestamps: true }
);

export const TodosModel = mongoose.model("Todos", todosSchema);
