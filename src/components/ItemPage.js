import { useState } from "react";
import {useLocation, useNavigate, Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard";

//create a new item, and allow the user to fill out details.
function ItemPage() {

    const navigate = useNavigate();
    const location = useLocation();
    const isNewItem = (location.state.item === undefined)
    const {items, setItems} = useOutletContext();

    const [newName, setNewName] = useState(isNewItem ? "" : location.state.item.name)
    const [newDescription, setNewDescription] = useState(isNewItem ? "" : location.state.item.description)
    const [newCategory, setNewCategory] = useState(isNewItem ? "" : location.state.item.category)
    const [newPrice, setNewPrice] = useState(isNewItem ? "" : location.state.item.price)
    const [newImage, setNewImage] = useState(isNewItem ? "" : location.state.item.image)

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

    function handlePATCH(event) {
        event.preventDefault();
        const newItem = {
            id: location.state.item.id,
            name: newName,
            description: newDescription,
            category: newCategory,
            price: newPrice,
            image: newImage,
            deleted: false
          }

        fetch(`http://localhost:3000/items/${location.state.item.id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(newItem)
            })
        .then((response) => response.json())
        .then(() => setItems(items.map(item => {
            if( item.id === location.state.item.id ) { return newItem }
            else { return item }})))
        navigate("/")
    };

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
                <h3 className="list-header">{isNewItem ? "Add an Item:" : "Edit Item:"} </h3>
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
                {isNewItem 
                ? `Enter the details of the item below, and click 'Submit' to add the item to your wishlist.`
                : `Revise the details of the item below, and click 'Submit' to update the item.`}
                </p>

            <form display="block" onSubmit={isNewItem 
                ? handlePOST : handlePATCH}>
                <input type="text" id="nameInput" 
                    placeholder={isNewItem ? "Enter title: " : location.state.item.name}
                    value={newName} onChange={handleChange} />

                <input  type="submit" id="submitButton" text="Submit"/>
                <textarea maxLength="100" type="text" id="descriptionInput" 
                    placeholder={isNewItem ? "Enter description: " : location.state.item.description}
                    value={newDescription} onChange={handleChange} />

                <label htmlFor="categoryInput">Select necessity:</label>
                <select id="categoryInput" 
                        value={newCategory} onChange={handleChange}>
                        <option value="1">1</option><option value="2">2</option><option value="3">3</option>
                        <option value="4">4</option><option value="5">5</option>
                </select>

                <input  type="number" id="priceInput" 
                    placeholder={isNewItem ? "Enter price: " : location.state.item.price}
                    value={newPrice} onChange={handleChange} />

                <input type="text" id="imageInput" 
                    placeholder={isNewItem ? "Enter image URL: " : location.state.item.image}
                    value={newImage} onChange={handleChange} />
            </form>
            <Outlet />
        </div>
    )
}

export default ItemPage