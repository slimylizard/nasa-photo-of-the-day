import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from "./components.js";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  useEffect(()=>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(res =>{
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Card title={data.title} url={data.url} explanation={data.explanation}/>
    </div>
  );
}

export default App;
