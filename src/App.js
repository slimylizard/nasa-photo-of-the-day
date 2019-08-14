import React from "react";
import axios from "axios";
import Card from "./components.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card Title="prop title" url="prop url" description="blah blah blah"/>
    </div>
  );
}

export default App;
