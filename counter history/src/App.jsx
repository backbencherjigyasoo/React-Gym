import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleIncrementDecrement = (operation) => {
    setHistory([...history, count]);
    setCount(
      operation === "add" ? count + 1 : operation === "sub" ? count - 1 : 0
    );
  };

  return (
    <>
      {/* counter history */}
      <div className="countainer">
        <div className="counter_section">
          <section className="counter">{count}</section>
          <section className="buttons">
            <button
              className="plus"
              onClick={() => handleIncrementDecrement("add")}
            >
              +
            </button>
            <button
              className="minus"
              onClick={() => handleIncrementDecrement("sub")}
            >
              -
            </button>
            <button
              className="reset"
              onClick={() => handleIncrementDecrement("reset")}
            >
              Reset
            </button>
          </section>
        </div>

        <div className="history_section">
          <h2>History</h2>
          <ul>
            {history
              .sort((a, b) => b - a)
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
