import React from "react";
import {useState, useEffect} from "react";
import {useNavigate, Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard";

function ItemPage() {
    const navigate = useNavigate();
    const {items, setItems} = useOutletContext();

    const [textInput, setTextInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [priceInput, setPriceInput] = useState("")
    const [imageInput, setImageInput] = useState("")

    const [item, setitem] = useState({
        name: textInput,
        description: descriptionInput,
        price: priceInput,
        image: imageInput
      })

      useEffect(() => {
        let tempItem = {
            name: textInput,
            description: descriptionInput,
            price: priceInput,
            image: imageInput
          }
        setitem(tempItem)
        }, [textInput, descriptionInput, priceInput, imageInput])

    function handlePOST(event) {
        event.preventDefault();
        fetch("http://localhost:3000/items", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {"Content-type": "application/json"}
        })
        .then((response) => response.json())
        .then((data) => setItems([...items], data))
        navigate("/")
    }

    return (
        <>
            <ItemCard item={item}/>
            <div>
                <h3 className="list-header">Add an Item: </h3>
                <p className = "add-description">Enter the details of the item below, and click 'Submit' to add the item to your wishlist.</p>
            </div>
            <form display="block" onSubmit={handlePOST}>
                <input  onChange={(e) => setTextInput(e.target.value)} type="text" id="nameInput" placeholder="Enter name:"/>
                <input  type="submit" id="submitButton" text="Submit"/>
                <textarea  onChange={(e) => setDescriptionInput(e.target.value)} maxLength="100" type="text" id="descriptionInput" placeholder="Enter description:"/>
                <input  onChange={(e) => setPriceInput(e.target.value)} type="text" id="priceInput" placeholder="Enter price:"/>
                <input  onChange={(e) => setImageInput(e.target.value)} type="text" id="imageInput" placeholder="Enter image URL:"/>
            </form>
            <Outlet />
        </>
    )
}

export default ItemPage