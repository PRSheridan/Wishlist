import { useNavigate, Outlet, useOutletContext } from "react-router-dom"
import "./ItemCard.css"

function ItemCard( {item, location} ) {
    const {setItems, items} = useOutletContext()
    const navigate = useNavigate();

    function handleEdit() { navigate("./EditPage", {state: {item}})}
    function handleDelete() {
        fetch(`http://localHost:3000/items/${item.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json'
            }
        })
            .then(r => r.json())
            .then(() => setItems(items.filter((thisItem) => thisItem.id !== item.id)))
    }

    return (
        <div className="ItemCard">
            <div className="item-header">
                {location === "ItemList" 
                ? <>
                    <button onClick={handleEdit} className="card-button edit-button">🖉</button>
                    <button onClick={handleDelete} className="card-button remove-button">🗑</button> </>
                : <div className="placeholder-button"></div>
                }
                <h2 className="item-name">{item.name}</h2>
                <h5 className="item-category inline">Necessity: {item.category}</h5>
                <h5 className="item-price inline">Price: ${item.price}</h5>
            </div>
            <div className="item-body">
                <img className="item-image" src={item.image} alt="Unavailable" />
                <p className="item-description">{item.description}</p>
            </div>
            <Outlet />
        </div>
    )
}

export default ItemCard