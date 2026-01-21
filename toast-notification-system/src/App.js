import logo from "./logo.svg";
import "./App.css";
import useToast from "./hooks/useToast";

function App() {
  const { addToast } = useToast();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Toast Notification System</h1>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button
            onClick={() => addToast("Operation successful!", "success")}
            style={{
              padding: "10px 20px",
              background: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Success Toast
          </button>
          <button
            onClick={() => addToast("Something went wrong!", "error")}
            style={{
              padding: "10px 20px",
              background: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Error Toast
          </button>
          <button
            onClick={() => addToast("Here is some info.", "info")}
            style={{
              padding: "10px 20px",
              background: "#2196f3",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Info Toast
          </button>
          <button
            onClick={() => addToast("Warning: Check input.", "warning")}
            style={{
              padding: "10px 20px",
              background: "#ff9800",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Warning Toast
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
