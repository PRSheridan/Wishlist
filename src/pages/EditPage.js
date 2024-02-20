import {useState, useEffect} from 'react'
import {useLocation, useNavigate} from "react-router-dom"
import ItemCard from "../components/ItemCard"

function EditPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [item, setItem] = useState(location.state.item)
    const [textInput, setTextInput] = useState(item.name)
    const [descriptionInput, setDescriptionInput] = useState(item.description)
    const [priceInput, setPriceInput] = useState(item.price)
    const [imageInput, setImageInput] = useState(item.image)

    useEffect(() => {
        let tempItem = {
            id: item.id,
            name: textInput,
            description: descriptionInput,
            price: priceInput,
            image: imageInput
          }
        setItem(tempItem)
    }, [textInput, descriptionInput, priceInput, imageInput])

    function handlePATCH(event) {
        event.preventDefault();
        fetch(`http://localhost:3000/items/${item.id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                name: textInput,
                description: descriptionInput,
                price: priceInput,
                image: imageInput
            }),
        })
        navigate("/")
    }

    return (
        <>
        <ItemCard item={item}/>
        <div>
            <h3 className="list-header">Edit Item: </h3>
            <p className = "add-description">Revise the details of the item below, and click 'Submit' to update the item.</p>
        </div>
        <form display="block" onSubmit={handlePATCH}>
            <input  onChange={(e) => setTextInput(e.target.value)} type="text" id="nameInput" placeholder={item.name}/>
            <input  type="submit" id="submitButton" text="Submit"/>
            <textarea  onChange={(e) => setDescriptionInput(e.target.value)} maxLength="100" type="text" id="descriptionInput" placeholder={item.description}/>
            <input  onChange={(e) => setPriceInput(e.target.value)} type="text" id="priceInput" placeholder={item.price}/>
            <input  onChange={(e) => setImageInput(e.target.value)} type="text" id="imageInput" placeholder={item.image}/>
        </form>
        </>
    )
}

export default EditPage