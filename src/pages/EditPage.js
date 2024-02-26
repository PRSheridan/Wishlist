import { useState } from 'react'
import {useLocation, useNavigate, Outlet, useOutletContext} from "react-router-dom"
import ItemCard from "../components/ItemCard"

//updatedItem = location.state.item (clicked item), and allow the user to change the item's details
function EditPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {items, setItems} = useOutletContext();
    const [updatedItem, setUpdatedItem] = useState(location.state.item)

//setItems (id matching) with the updatedItem values, then navigate home after sending PATCH request
    function handlePATCH(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/items/${updatedItem.id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(updatedItem)
            })
        .then((response) => response.json())
        .then(() => setItems(items.map(item => {
            if( item.id === updatedItem.id ) { return updatedItem }
            else { return item }})))
        navigate("/")
    };

//each input of form: setUpdatedItem to a tempItem with updated value
//onSubmit call handlePATCH^^^
    return (
        <div className="EditPage">
            <ItemCard item={updatedItem} location ={"EditPage"}/>
            <div>
                <h3 className="list-header">Edit Item: </h3>
                <p className = "add-description">Revise the details of the item below, and click 'Submit' to update the item.</p>
            </div>
            <form display="block" onSubmit={handlePATCH}>
                <input type="text" id="nameInput" placeholder={updatedItem.name}
                    onChange={(e) => setUpdatedItem(() => { let tempItem = {...updatedItem}
                    tempItem.name = e.target.value
                    return tempItem
                    })} />
                <input  type="submit" id="submitButton" text="Submit"/>
                <textarea maxLength="100" type="text" id="descriptionInput" placeholder={updatedItem.description}
                    onChange={(e) => setUpdatedItem(() => { let tempItem = {...updatedItem}
                    tempItem.description = e.target.value
                    return tempItem
                    })} />
                <label htmlFor="categoryInput">Select necessity:</label>
                <select id="categoryInput" 
                    onChange={(e) => setUpdatedItem(() => { let tempItem = {...updatedItem}
                    tempItem.category = e.target.value
                    return tempItem
                    })}>
                    <option value="1">1</option><option value="2">2</option><option value="3">3</option>
                    <option value="4">4</option><option value="5">5</option>
                </select>
                <input  type="number" id="priceInput" placeholder={updatedItem.price}
                    onChange={(e) => setUpdatedItem(() => { let tempItem = {...updatedItem}
                    tempItem.price = e.target.value
                    return tempItem
                    })} />
                <input type="text" id="imageInput" placeholder={updatedItem.image}
                    onChange={(e) => setUpdatedItem(() => { let tempItem = {...updatedItem}
                    tempItem.image = e.target.value
                    return tempItem
                    })} />
            </form>
            <Outlet />
        </div>
    )
}

export default EditPage