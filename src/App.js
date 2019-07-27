import React, { useState } from "react";
import "./App.css";
import Controller from "./Components/Controller";

function App() {
  const [boxWidth, setBoxWidth] = useState(820);

  return (
    <div className="App">
      <header className="App-header">
        <Controller boxWidth={boxWidth} />
        <input
          type="range"
          min="420"
          max="820"
          value={boxWidth}
          onChange={e => {
            setBoxWidth(e.target.value);
          }}
        />
      </header>
    </div>
  );
}

export default App;
