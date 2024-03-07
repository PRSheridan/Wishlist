import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard"

//ItemList handles mapping all items to ItemCards, and allowing the user to filter the items.
function ItemList() {
    const {items, setItems} = useOutletContext()
    const [filterArg, setFilterArg] = useState("")
    const [deletedArg, setDeletedArg] = useState(false)

//setFilterArg, then refresh the page when a new filter is selected.
    const handleFilter = (event) => { setFilterArg(event.target.textContent) }

//handle comparisons of price, category, and alphabetical order.
    function comparePrice(a, b) {return b.price - a.price}
    function compareCategory(a, b) {return b.category - a.category}
    function compareName(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

//if filter === "", sort clone of items + filter for deleted/undeleted items.
//Create new state variable for deletedArg (if displaying deleted items or not)
//move deleted items button to within itemlist (near filter)

    useEffect(() =>{
        const tempItems = [...items]
        if (filterArg === "Name") { tempItems.sort(compareName) } else 
        if (filterArg === "Price") { tempItems.sort(comparePrice) } else 
        if (filterArg === "Necessity") { tempItems.sort(compareCategory) }
        setItems([...tempItems])
    }, [filterArg])

    return(
        <aside>
            <h2 className="list-header">Current Items: </h2>
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
                Necessity</button>
            </div>
            {items.map((item) => {
                return ( <ItemCard key={item.name} item={item} /> )
            })}
            <Outlet />
        </aside>
    )
}

export default ItemList