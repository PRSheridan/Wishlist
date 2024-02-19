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
//get is not running when I want it to
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-text">Wishlist</h1>
        <NavBar />
      </header>
      <Outlet context={items}/>
    </div>
  );
}

export default App;
