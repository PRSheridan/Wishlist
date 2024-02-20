import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function ItemForm() {
    const navigate = useNavigate();

    const [textInput, setTextInput] = useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [priceInput, setPriceInput] = useState("")
    const [imageInput, setImageInput] = useState("")

    function handleSubmit() {
        fetch("http://localhost:3000/items", {
            method: "POST",
            body: JSON.stringify({
                name: textInput,
                description: descriptionInput,
                price: priceInput,
                image: imageInput
            }),
            headers: {"Content-type": "application/json"}
        })
        .then((response) => response.json())
        .then((json) => console.log(json))
        navigate("/")
    }

    return (
        <>
        <div>
            <h3 className="list-header">Add an Item: </h3>
            <p className = "add-description">Enter the details of the item below, and click 'Submit' to add the item to your wishlist.</p>
        </div>
        <form display="block" onSubmit={handleSubmit}>
            <input  onChange={(e) => setTextInput(e.target.value)} type="text" id="nameInput" placeholder="Enter name:"/>
            <input  type="submit" id="submitButton" text="Submit"/>
            <textarea  onChange={(e) => setDescriptionInput(e.target.value)} type="text" id="descriptionInput" placeholder="Enter description:"/>
            <input  onChange={(e) => setPriceInput(e.target.value)} type="text" id="priceInput" placeholder="Enter price:"/>
            <input  onChange={(e) => setImageInput(e.target.value)} type="text" id="imageInput" placeholder="Enter image URL:"/>
        </form>
        </>
    )
}

export default ItemForm