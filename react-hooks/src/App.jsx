import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  const [status, setStatus] = useState("Not Delivered");

  return (
    <div>
      <h1>The Package is: {status}</h1>
      <button onClick={() => setStatus("Delevered")}>Deliver</button>
    </div>


  );
}
export default App;
