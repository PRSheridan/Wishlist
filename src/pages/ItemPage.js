import { useState } from "react";
import {useNavigate, Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard";

//create a new item, and allow the user to fill out details.
function ItemPage() {
    const navigate = useNavigate();
    const {items, setItems} = useOutletContext();

    const [newName, setNewName] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newCategory, setNewCategory] = useState("")
    const [newPrice, setNewPrice] = useState("")
    const [newImage, setNewImage] = useState("")

//POST newItem to items, and navigate home.
    function handlePOST(event) {
        event.preventDefault();
        const newItem = {
            name: newName,
            description: newDescription,
            category: newCategory,
            price: newPrice,
            image: newImage,
            deleted: false
          }
        fetch("http://localhost:3000/items", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {"Content-type": "application/json"}
        })
        .then((response) => response.json())
        .then((data) => setItems([...items, data]))
        navigate("/")
    }

function handleChange(event) {
    if (event.target.id === "nameInput") { setNewName(event.target.value) } else 
    if (event.target.id === "descriptionInput") { setNewDescription(event.target.value) } else
    if (event.target.id === "categoryInput") { setNewCategory(event.target.value) } else
    if (event.target.id === "priceInput") { setNewPrice(event.target.value) } else
    if (event.target.id === "imageInput") { setNewImage(event.target.value) } 
}

    return (
        <div className="ItemPage">
            <div>
                <h3 className="list-header">Add an Item: </h3>
            </div>

            <ItemCard item={{
            name: newName,
            description: newDescription,
            category: newCategory,
            price: newPrice,
            image: newImage,
            deleted: false }} 
            location={"ItemPage"}/>

            <p className = "add-description">
            Enter the details of the item below, and click 'Submit' to add the item to your wishlist.</p>

            <form display="block" onSubmit={handlePOST}>
                <input type="text" id="nameInput" placeholder="Enter title: "
                    value={newName} onChange={handleChange} />

                <input  type="submit" id="submitButton" text="Submit"/>
                <textarea maxLength="100" type="text" id="descriptionInput" placeholder="Enter description: "
                    value={newDescription} onChange={handleChange} />

                <label htmlFor="categoryInput">Select necessity:</label>
                <select id="categoryInput" 
                        value={newCategory} onChange={handleChange}>
                        <option value="1">1</option><option value="2">2</option><option value="3">3</option>
                        <option value="4">4</option><option value="5">5</option>
                </select>

                <input  type="number" id="priceInput" placeholder="Enter price: "
                    value={newPrice} onChange={handleChange} />

                <input type="text" id="imageInput" placeholder="Enter image URL: "
                    value={newImage} onChange={handleChange} />
            </form>
            <Outlet />
        </div>
    )
}

export default ItemPage