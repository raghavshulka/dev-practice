import React from "react";

const Squares = ({ onClick, value }) => {
  return (
    <button
      onClick={onClick}
      className="border border-black px-2 w-20 h-20 flex items-center justify-center"
    >
      {value}
    </button>
  );
};

export default Squares;
