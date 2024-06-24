import React, { useEffect, useState } from "react";
import Card from "./Card.jsx";
import axios from "axios";
import axiosInstance from "./Axiosinstance.jsx";
const OnProgress = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axiosInstance
      .get("/get")
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


  return (
    <div>
      <div className=" mt-4 ml-4 border flex flex-col items-center justify-center  rounded-2xl w-[354px] bg-[#F5F5F5] px-5 py-5 ">
        <div className=" w-full flex items-center justify-between  ">
          <h1 className=" text-3xl">On Progress</h1>
        </div>
        <div className=" mt-2 w-full underline  bg-[#FFA500] h-[3px]  "></div>
        {todos
          .filter((todoItem) => todoItem.status === "start")
          .map((todoItem) => (
            <Card
              key={todoItem._id}
              id={todoItem._id}
              title={todoItem.title}
              todo={todoItem.todos}
              priority={todoItem.priority}
              deleteHandler={() => Deletetodoshandler(todoItem._id)}
              statusupdate={(status) =>
                statustodoshandler(todoItem._id, status)
              }
            />
          ))}
      </div>
    </div>
  );
};

export default OnProgress;
