import { useNavigate } from "react-router-dom"
import "./ItemCard.css"

function ItemCard( {item} ) {
    const navigate = useNavigate();

    function handleExpand() { navigate("./ItemPage", {state: {item}})}

    function handleDelete() {
        fetch(`http://localHost:3000/items/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        })
            .then(r => r.json())
            .then(json => console.log(json))
    }

    return (
        <div className="ItemCard">
            <div className="item-header">
                <button onClick={handleDelete} className="remove-button">X</button>
                <h2 className="item-name inline">{item.name}</h2>
                <h3 className="item-price inline">${item.price}</h3>
            </div>
            <img className="item-image" src={item.image} alt="Unavailable/ Bad link" />
            <p className="item-description">{item.description.slice(0, 30) + " . . ."}</p>
            <div className="item-expand">
                <button onClick={handleExpand} className="item-expand">Click to expand</button>
            </div>
        </div>
    )
}

export default ItemCard