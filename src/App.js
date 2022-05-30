import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
      <div className="App-sidebar"></div>

      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </header>

      <body className="App-body">
        <Button variant="contained">你好，世界</Button>
      </body>
    </div>
  );
}

export default App;
