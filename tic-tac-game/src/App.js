import { useState } from "react";
import "./App.css";
import Squares from "./Squares";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winners, setWinner] = useState(null);

  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (squares) => {
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = isXTurn ? "X" : "O";
    setSquares(newSquares);
    setIsXTurn(!isXTurn);

    var winner = checkWinner(newSquares);
    if (winner) {
      setWinner(winners);
    }
  };

  return (
    <div className="w-full text-3xl h-screen flex flex-col justify-center items-center">
      {winners ? (
        <div className="text-4xl">Winner: {winners}</div>
      ) : (
        <div className="col">
          <div className="flex">
            <Squares onClick={() => handleClick(0)} value={squares[0]} />
            <Squares onClick={() => handleClick(1)} value={squares[1]} />
            <Squares onClick={() => handleClick(2)} value={squares[2]} />
          </div>
          <div className="flex">
            <Squares onClick={() => handleClick(3)} value={squares[3]} />
            <Squares onClick={() => handleClick(4)} value={squares[4]} />
            <Squares onClick={() => handleClick(5)} value={squares[5]} />
          </div>
          <div className="flex">
            <Squares onClick={() => handleClick(6)} value={squares[6]} />
            <Squares onClick={() => handleClick(7)} value={squares[7]} />
            <Squares onClick={() => handleClick(8)} value={squares[8]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
