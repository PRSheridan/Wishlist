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

//having a hard time re-rendering items when needed
//items loops infinetly because of fetch, consider putting fetch in ItemList?
//Delete, Edit, and Add all need a refresh to work (but they do work)
//consider other possible features?

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-text">Wishlist</h1>
        <hr />
        <NavBar />
      </header>
      <Outlet context={{items, setItems}}/>
    </div>
  );
}

export default App;
