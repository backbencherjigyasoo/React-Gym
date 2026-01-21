import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleIncrementDecrement = (operation) => {
    setCount(
      operation === "add" ? count + 1 : operation === "sub" ? count - 1 : 0
    );
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setHistory((prev) => [...prev, count]);
    }, 1000);

    return () => clearTimeout(handler); // Cancels the push if counter changes again quickly
  }, [count]);

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
            {history.toReversed().map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
