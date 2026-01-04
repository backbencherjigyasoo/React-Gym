import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button style={styles.button} onClick={() => setShowModal(true)}>
        Open Modal
      </button>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Custom Modal Title"
      >
        <p>This content is passed from App.js!</p>
        <p>
          You can put <strong>anything</strong> here.
        </p>
        <button onClick={() => alert("Clicked!")}>Interactive Elements</button>
      </Modal>
    </>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    margin: "10px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "linear-gradient(to right, #ab0505ff, #ab0505ff)",
    color: "#000",
    borderRadius: "5px",
  },
};

export default App;
