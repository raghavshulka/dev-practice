import React, { useState } from "react";

const Card = ({ title, todo, priority, deleteHandler, statusupdate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusUpdate = (status) => {
    statusupdate(status);
    toggleDialog(); // Close the dialog after status update
  };

  return (
    <div className="relative my-4 border rounded-xl shadow-lg w-[314px] h-auto p-4 bg-white/90 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:z-50">
      <div className="flex w-full items-center justify-between">
        <p
          className={`text-[12px] px-1 ${
            priority === "low"
              ? "text-[#8e5f34] bg-[#efd2b7]"
              : "bg-[#a7e499] text-black"
          } rounded`}
        >
          {priority}
        </p>
        <button onClick={toggleDialog}>
          <p className="font-semibold text-[16px]">...</p>
        </button>
      </div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-[18px]">{title}</h2>
        <p className="text-[12px] font-light">{todo}</p>
      </div>
      {isOpen && (
        <div className="absolute z-50 top-10 right-0 bg-white border border-violet-300 shadow-md rounded-md p-2">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                deleteHandler();
                toggleDialog();
              }}
              className="text-left hover:bg-gray-100 px-2 py-1 rounded text-red-500"
            >
              Delete
            </button>
            <button
              onClick={() => handleStatusUpdate("start")}
              className="text-left hover:bg-gray-100 px-2 py-1 rounded text-orange-300"
            >
              Start
            </button>
            <button
              onClick={() => handleStatusUpdate("completed")}
              className="text-left hover:bg-gray-100 px-2 py-1 rounded text-green-500"
            >
              Complete
            </button>
            <button
              onClick={toggleDialog}
              className="text-left hover:bg-gray-100 px-2 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
