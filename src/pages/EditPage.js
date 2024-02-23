import {useState, useEffect} from 'react'
import {useLocation, useNavigate, Outlet, useOutletContext} from "react-router-dom"
import ItemCard from "../components/ItemCard"

//unsure if I need EditPage and ItemPage but keeping for now (?)

function EditPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const {items, setItems} = useOutletContext();

    const [updatedItem, setUpdatedItem] = useState(location.state.item)
    const [textInput, setTextInput] = useState(updatedItem.name)
    const [descriptionInput, setDescriptionInput] = useState(updatedItem.description)
    const [categoryInput, setCategoryInput] = useState(updatedItem.category)
    const [priceInput, setPriceInput] = useState(updatedItem.price)
    const [imageInput, setImageInput] = useState(updatedItem.image)

    useEffect(() => {
        //this could be replaced by mapping the new key:value rather than having state for each key:value (?)
        let tempItem = {
            id: updatedItem.id,
            name: textInput,
            description: descriptionInput,
            category: categoryInput,
            price: priceInput,
            image: imageInput
          }
        setUpdatedItem(tempItem)
    }, [textInput, descriptionInput, categoryInput, priceInput, imageInput])

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

    return (
        <div>
            <ItemCard item={updatedItem}/>
            <div>
                <h3 className="list-header">Edit Item: </h3>
                <p className = "add-description">Revise the details of the item below, and click 'Submit' to update the item.</p>
            </div>
            <form display="block" onSubmit={handlePATCH}>
                <input type="text" id="nameInput" placeholder={updatedItem.name}
                    onChange={(e) => setTextInput(e.target.value)} />
                <input  type="submit" id="submitButton" text="Submit"/>
                <textarea maxLength="100" type="text" id="descriptionInput" placeholder={updatedItem.description}
                    onChange={(e) => setDescriptionInput(e.target.value)} />
                <input  type="text" id="categoryInput" placeholder={updatedItem.category}
                    onChange={(e) => setCategoryInput(e.target.value)} />
                <input  type="text" id="priceInput" placeholder={updatedItem.price}
                    onChange={(e) => setPriceInput(e.target.value)} />
                <input type="text" id="imageInput" placeholder={updatedItem.image}
                    onChange={(e) => setImageInput(e.target.value)} />
            </form>
            <Outlet />
        </div>
    )
}

export default EditPage