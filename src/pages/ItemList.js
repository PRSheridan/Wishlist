import { Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard"

function ItemList() {
    const { items, setItems } = useOutletContext();
    let itemCards = items.map(
        (item) => ( <ItemCard key={item.id} item={item}/> ))

    function compareName(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

    function handleFilter(event) {
        event.preventDefault();
        if (event.target.textContent === "Name") {
            setItems(items.sort(compareName))
        } else if (event.target.textContent === "Price") {
        } else if (event.target.textContent === "Category") {
        }
        itemCards = items.map(
            (item) => ( <ItemCard key={item.id} item={item}/> ))
    }
    
    return(
        <aside>
            <h1 className="list-header">Items:</h1>
            <div className="filter-options">Filter by: 
                <button 
                    className="filter-button"
                    onClick={handleFilter}>
                Name</button>
                <button 
                    className="filter-button"
                    onClick={handleFilter}>
                Price</button>
                <button 
                    className="filter-button"
                    onClick={handleFilter}>
                Category </button>
            </div>
            {itemCards}
            <Outlet />
        </aside>
    )
}

export default ItemList