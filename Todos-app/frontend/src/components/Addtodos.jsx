import axios from "axios";
import React, { useState } from "react";
import axiosInstance from "./Axiosinstance";


const AddTodos = ({ onClose, onAddTodo }) => {
  const [todo, setTodo] = useState({
    priority: "low",
    title: "",
    todos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/new", todo);
      console.log(response.data);
      onAddTodo(todo);
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="fixed inset-0  backdrop-blur-[2px] bg-black bg-opacity-50 flex justify-center items-center z-50 ">
      <div className="bg-white rounded-lg shadow-xl w-80 max-h-[90vh] overflow-y-auto">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Add New Todo</h2>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              name="priority"
              value={todo.priority}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="todos"
              value={todo.todos}
              onChange={handleChange}
              placeholder="Enter description"
              className="w-full p-2 border border-gray-300 rounded-md h-24"
              required
            />
          </div>
          <div className="flex justify-end gap-3 items-center">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
