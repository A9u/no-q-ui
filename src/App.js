import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import NqRoute from "./routes.js";

function App() {
  return (
    <BrowserRouter>
      <NqRoute />
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
