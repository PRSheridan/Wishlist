import React from "react";
import {useState, useEffect} from "react";
import {useNavigate, Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard";

function ItemPage() {
    const navigate = useNavigate();
    const {items, setItems} = useOutletContext();

    const [textInput, setTextInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [categoryInput, setCategoryInput] = useState("")
    const [priceInput, setPriceInput] = useState("")
    const [imageInput, setImageInput] = useState("")

    const [item, setItem] = useState({
        name: textInput,
        description: descriptionInput,
        category: categoryInput,
        price: priceInput,
        image: imageInput
      })

      useEffect(() => {
        let tempItem = {
            name: textInput,
            description: descriptionInput,
            category: categoryInput,
            price: priceInput,
            image: imageInput
          }
        setItem(tempItem)
        }, [textInput, descriptionInput, categoryInput, priceInput, imageInput])

    function handlePOST(event) {
        event.preventDefault();
        fetch("http://localhost:3000/items", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {"Content-type": "application/json"}
        })
        .then((response) => response.json())
        .then((data) => setItems([...items, data]))
        navigate("/")
    }

    return (
        <div>
            <ItemCard item={item}/>
            <div>
                <h3 className="list-header">Add an Item: </h3>
                <p className = "add-description">Enter the details of the item below, and click 'Submit' to add the item to your wishlist.</p>
            </div>
            <form display="block" onSubmit={handlePOST}>
                <input type="text" id="nameInput" placeholder="Enter name:"
                    onChange={(e) => setTextInput(e.target.value)} />
                <input  type="submit" id="submitButton" text="Submit"/>
                <textarea maxLength="100" type="text" id="descriptionInput" placeholder="Enter description:"
                    onChange={(e) => setDescriptionInput(e.target.value)} />
                <input  type="text" id="categoryInput" placeholder="Enter necessity (1-5):"
                    onChange={(e) => setCategoryInput(e.target.value)} />
                <input  type="text" id="priceInput" placeholder="Enter price:"
                    onChange={(e) => setPriceInput(e.target.value)} />
                <input type="text" id="imageInput" placeholder="Enter image URL:"
                    onChange={(e) => setImageInput(e.target.value)} />
            </form>
            <Outlet />
        </div>
    )
}

export default ItemPage