import { useState } from "react";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState(""); 
  const [prevValue, setPrevValue] = useState(""); 
  const [operator, setOperator] = useState(""); 
  const [output, setOutput] = useState(""); 

  const handleNumberClick = (e) => {
    const number = e.target.innerText;
    setCurrentValue((prev) => prev + number);
  };

  const handleOperatorClick = (e) => {
    const newOperator = e.target.innerText;

    if (currentValue ==" ") return;
      if (prevValue) {
        const result = evaluate(prevValue, operator, currentValue);
        setPrevValue(result);
        setOutput(result);
      } else {
        setPrevValue(currentValue);
      }
      setCurrentValue("");
    

    setOperator(newOperator);
  };

  const evaluate = (value1, operator, value2) => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    switch (operator) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "*":
        return (num1 * num2).toString();
      case "/":
        return (num1 / num2).toString();
      case "%":
        return (num1 % num2).toString();
      default:
        return value2;
    }
  };

  const handleEqualClick = () => {
    if (prevValue && operator && currentValue) {
      const result = evaluate(prevValue, operator, currentValue);
      setOutput(result);
      setPrevValue(result);
      setCurrentValue("");
      setOperator("");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-3xl mb-4">{output  || currentValue }</div>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((number) => (
          <button
            key={number}
            className="bg-gray-200 p-4 rounded"
            onClick={handleNumberClick}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex gap-3 mb-4">
        {["+", "-", "/", "*", "%"].map((operator) => (
          <button
            key={operator}
            className="bg-yellow-400 p-4 rounded"
            onClick={handleOperatorClick}
          >
            {operator}
          </button>
        ))}
      </div>
      <button
        className="bg-green-500 text-white p-4 rounded"
        onClick={handleEqualClick}
      >
        =
      </button>
    </div>
  );
}

export default App;
