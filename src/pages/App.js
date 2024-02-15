import {useState, useEffect} from "react"
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar"
import React from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
      fetch("http://localhost:3000/items")
      .then(r => r.json())
      .then(data => setItems(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Outlet context={items}/>
    </div>
  );
}

export default App;
