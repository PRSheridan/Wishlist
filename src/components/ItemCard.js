import "./ItemCard.css"

function ItemCard( {item} ) {
    return (
        <div className="ItemCard">
            <div className="item-header">
                <button className="edit-button">*</button>
                <button className="remove-button">X</button>
                <h2 className="item-name">{item.name}</h2>
                <h3 className="item-price">${item.price}</h3>
            </div>
            <img className="item-image" src={item.image} alt="Image unavailable" />
            <p className="item-description">{item.description.slice(0, 30) + " . . ."}</p>
            <p className="item-expand">Click to expand</p>
        </div>
    )
}

export default ItemCard