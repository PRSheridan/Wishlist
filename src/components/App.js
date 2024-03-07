import {useState, useEffect} from "react"
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar"

//retreive items, create header && NavBar, pass item state as Outlet context
function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:3000/items")
      .then(r => r.json())
      .then((data) => setItems(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="header-text">Wishlist</h1>
        <hr />
        <NavBar />
      </header>
      <Outlet  context={{items, setItems}}/>
    </div>
  );
}

export default App;
