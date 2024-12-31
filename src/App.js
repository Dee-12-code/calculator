import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [isResult, setIsResult] = useState(false);

  const handleClear = () => {
    setCurrentValue("0");
    setPreviousValue(null);
    setOperator(null);
    setIsResult(false);
  };

  const handleNumberClick = (value) => {
    if (isResult) {
      setCurrentValue(value);
      setIsResult(false);
    } else {
      setCurrentValue((prev) => (prev === "0" ? value : prev + value));
    }
  };

  const handleDecimalClick = () => {
    if (!currentValue.includes(".")) {
      setCurrentValue((prev) => prev + ".");
    }
  };

  const handleOperatorClick = (op) => {
    if (operator && !isResult) {
      handleEquals();
    }
    setPreviousValue(currentValue);
    setOperator(op);
    setCurrentValue("0");
  };

  const handleEquals = () => {
    if (operator && previousValue !== null) {
      const num1 = parseFloat(previousValue);
      const num2 = parseFloat(currentValue);

      let result;
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num2 !== 0 ? num1 / num2 : "Error";
          break;
        default:
          return;
      }

      setCurrentValue(String(result));
      setPreviousValue(null);
      setOperator(null);
      setIsResult(true);
    }
  };

  return (
    <div className="calculator">
      {/* Display */}
      <div id="display" className="display">{currentValue}</div>

      {/* Buttons */}
      <div className="buttons">
        <button id="clear" onClick={handleClear}>AC</button>
        <button id="divide" onClick={() => handleOperatorClick("/")}>/</button>
        <button id="multiply" onClick={() => handleOperatorClick("*")}>*</button>

        <button id="seven" onClick={() => handleNumberClick("7")}>7</button>
        <button id="eight" onClick={() => handleNumberClick("8")}>8</button>
        <button id="nine" onClick={() => handleNumberClick("9")}>9</button>
        <button id="subtract" onClick={() => handleOperatorClick("-")}>-</button>

        <button id="four" onClick={() => handleNumberClick("4")}>4</button>
        <button id="five" onClick={() => handleNumberClick("5")}>5</button>
        <button id="six" onClick={() => handleNumberClick("6")}>6</button>
        <button id="add" onClick={() => handleOperatorClick("+")}>+</button>

        <button id="one" onClick={() => handleNumberClick("1")}>1</button>
        <button id="two" onClick={() => handleNumberClick("2")}>2</button>
        <button id="three" onClick={() => handleNumberClick("3")}>3</button>
        <button id="equals" onClick={handleEquals}>=</button>

        <button id="zero" className="wide" onClick={() => handleNumberClick("0")}>0</button>
        <button id="decimal" onClick={handleDecimalClick}>.</button>
      </div>
    </div>
  );
}

export default App;
