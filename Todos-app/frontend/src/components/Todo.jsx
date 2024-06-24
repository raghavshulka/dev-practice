import React, { useState, useEffect } from "react";
import Card from "./Card.jsx";
import AddTodos from "../components/Addtodos.jsx";
import axiosInstance from "./Axiosinstance.jsx";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axiosInstance
      .get("/api/v1/get")
      .then((res) => {
        setTodos(res.data.todos);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  };

  const statustodoshandler = (id, value) => {
    axiosInstance
      .put(`/update/${id}`, { status: value })
      .then((res) => {
        fetchTodos();
      })
      .catch((error) => {
        console.error("Error updating todos:", error);
      });
  };

  const Deletetodoshandler = (id) => {
    axiosInstance
      .delete(`/del/${id}`)
      .then((res) => {
        fetchTodos();
      })
      .catch((error) => {
        console.error("Error deleting todos:", error);
      });
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" ">
      <div className=" mt-4 ml-4 border flex flex-col items-center justify-center  rounded-2xl w-[354px] bg-[#F5F5F5] px-5 py-5 ">
        <div className="w-full flex items-center justify-between ">
          <h1 className="text-3xl">To Do</h1>

          <button
            onClick={handleClick}
            className="bg-[#F5F5F5] border px-2 py-1 rounded-full text-xl"
          >
            +
          </button>
        </div>
        <div className="mt-2 w-full bg-[#5030E5] h-[3px]"></div>
        {isOpen && (
          <AddTodos onClose={() => setIsOpen(false)} onAddTodo={fetchTodos} />
        )}
        {todos.map((todoItem) => (
          <Card
            key={todoItem._id}
            title={todoItem.title}
            todo={todoItem.todos}
            priority={todoItem.priority}
            deleteHandler={() => Deletetodoshandler(todoItem._id)}
            statusupdate={(value) => statustodoshandler(todoItem._id, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
