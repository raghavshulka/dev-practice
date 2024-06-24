import { TodosModel } from "../model/todoSchema.js";

export const todos = async (req, res) => {
  try {
    const { title, todos, status, priority } = req.body;

    if (!title || !todos) {
      return res.status(400).json({
        success: false,
        message: "Both title and todos are required",
      });
    }

    const todo = await TodosModel.create({
      title,
      todos,
      status: status || "start",
      priority: priority || "low",
    });

    return res.status(200).json({
      success: true,
      message: `Todo created: ${todo.title}`,
      data: todo,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Todo creation failed",
    });
  }
};

export const delTodos = async (req, res) => {
  try {
    const result = await TodosModel.findByIdAndDelete(req.params.id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: `Todo deleted successfully: ${result.title}`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Todo deletion failed",
      error: err.message,
    });
  }
};

export const updateTodos = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, todos, status, priority } = req.body;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Todo ID is required",
      });
    }

    const updatedTodo = await TodosModel.findById(id);

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    if (title) updatedTodo.title = title;
    if (todos) updatedTodo.todos = todos;
    if (status && ["completed", "start"].includes(status))
      updatedTodo.status = status;
    if (priority && ["low", "high"].includes(priority))
      updatedTodo.priority = priority;

    await updatedTodo.save();

    return res.status(200).json({
      success: true,
      message: `Todo updated successfully: ${updatedTodo.title}`,
      data: updatedTodo,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Todo updating failed",
      error: err.message,
    });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await TodosModel.find();

    return res.status(200).json({
      success: true,
      message: "Todos found",
      todos,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to find todos",
    });
  }
};
