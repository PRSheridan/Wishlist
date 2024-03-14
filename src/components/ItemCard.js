import { useNavigate, Outlet, useOutletContext } from "react-router-dom"
import "./ItemCard.css"

function ItemCard( { item } ) {
    const {setItems, items} = useOutletContext()
    const navigate = useNavigate();
    const navEdit = () => {navigate("/ItemPage", {state: {item}})}

    function handleDeleteRestore() {
        item.deleted = !item.deleted;
        fetch(`http://localHost:3000/items/${item.id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(item)
            })
            .then(r => r.json())
            .then(() => setItems(items.map(thisItem => {
                if( item.id === thisItem.id ) { return item }
                else { return thisItem }})))
    }

    function handleShred() {
        fetch(`http://localHost:3000/items/${item.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type':'application/json' }
        })
            .then(r => r.json())
            .then(() => setItems(items.filter((thisItem) => thisItem.id !== item.id)))
    }

    return (
        <div className="ItemCard">
            <div className="item-header">
                {item.deleted ? <>
                <button onClick={handleDeleteRestore} className="card-button edit-button">⟳</button>
                <button onClick={handleShred} className="card-button remove-button">X</button></> 
                : <>
                <button onClick={navEdit} className="card-button edit-button">🖊</button>
                <button onClick={handleDeleteRestore} className="card-button remove-button">🗑</button></> 
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
