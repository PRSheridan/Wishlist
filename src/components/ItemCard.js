import "./ItemCard.css"

function ItemCard( {item} ) {
    return (
        <div className="ItemCard">
            <h2 className="item-name inline">{item.name}</h2>
            <h3 className="item-price inline">${item.price}</h3>
            <div>
                <img className="item-image" src={item.image} alt="noImage" />
            </div>
            <p className="item-description">{item.description}</p>
        </div>
    )
}

export default ItemCard