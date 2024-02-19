import "./ItemCard.css"

function ItemCard( {item} ) {
    return (
        <div className="ItemCard">
            <h2 className="item-name inline">{item.name}</h2>
            <h3 className="item-price inline">${item.price}</h3>
            <div>
                <img className="item-image" src={item.image} alt="Image unavailable" />
            </div>
            <p className="item-description">{item.description.slice(0, 28) + ". . ."}</p>
        </div>
    )
}

export default ItemCard