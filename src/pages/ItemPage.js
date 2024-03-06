import { useState } from "react";
import {useNavigate, Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard";

//create a new item, and allow the user to fill out details.
function ItemPage() {
    const navigate = useNavigate();
    const {items, setItems} = useOutletContext();
    const [newItem, setNewItem] = useState({
        name: "",
        description: "",
        category: "",
        price: "",
        image: "",
        deleted: false
      })

//POST newItem to items, and navigate home.
    function handlePOST(event) {
        event.preventDefault();
        fetch("http://localhost:3000/items", {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {"Content-type": "application/json"}
        })
        .then((response) => response.json())
        .then((data) => setItems([...items, data]))
        navigate("/")
    }

//each input of form: setNewItem to a tempItem with updated value.
//onSubmit call handlePOST^^^

/*forms need a value, and this onChange should call a single handler function */

    return (
        <div className="ItemPage">
            <div>
                <h3 className="list-header">Add an Item: </h3>
            </div>
            <ItemCard item={newItem} location={"ItemPage"}/>
            <p className = "add-description">Enter the details of the item below, and click 'Submit' to add the item to your wishlist.</p>
            <form display="block" onSubmit={handlePOST}>
                <input type="text" id="nameInput" placeholder="Enter title: "
                    onChange={(e) => setNewItem(() => { let tempItem = {...newItem}
                    tempItem.name = e.target.value
                    return tempItem
                    })} />
                <input  type="submit" id="submitButton" text="Submit"/>
                <textarea maxLength="100" type="text" id="descriptionInput" placeholder="Enter description: "
                    onChange={(e) => setNewItem(() => { let tempItem = {...newItem}
                    tempItem.description = e.target.value
                    return tempItem
                    })} />
                <label htmlFor="categoryInput">Select necessity:</label>
                    <select id="categoryInput" 
                        onChange={(e) => setNewItem(() => { let tempItem = {...newItem}
                        tempItem.category = e.target.value
                        return tempItem
                        })}>
                        <option value="1">1</option><option value="2">2</option><option value="3">3</option>
                        <option value="4">4</option><option value="5">5</option>
                    </select>
                <input  type="number" id="priceInput" placeholder="Enter price: "
                    onChange={(e) => setNewItem(() => { let tempItem = {...newItem}
                    tempItem.price = e.target.value
                    return tempItem
                    })} />
                <input type="text" id="imageInput" placeholder="Enter image URL: "
                    onChange={(e) => setNewItem(() => { let tempItem = {...newItem}
                    tempItem.image = e.target.value
                    return tempItem
                    })} />
            </form>
            <Outlet />
        </div>
    )
}

export default ItemPage