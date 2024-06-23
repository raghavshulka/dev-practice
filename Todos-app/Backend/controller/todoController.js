import { TodosModel } from "../model/todoSchema.js";

export const todos = async (req, res) => {
  try {
    const { title, todos } = req.body;

    if (!title || !todos) {
      return res.status(400).json({
        success: false,
        message: "Both title and todos are required",
      });
    }

    const todo = await TodosModel.create({
      title,
      todos,
    });

    return res.status(200).json({
      success: true,
      message: `Todo created: ${todo.title}`,
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
    const { title, todos } = req.body;

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
    if (todos) updateTodos.todos = todos;

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
    const todo = await TodosModel.find();

    return res.status(200).json({
      success: true,
      message: `Todo find `,
      todo,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Todo found failed",
    });
  }
};
