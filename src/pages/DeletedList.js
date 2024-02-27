import { useState, useEffect } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard"

//ItemList handles mapping all items to ItemCards, and allowing the user to filter the items.
function DeletedList() {
    const { items, setItems } = useOutletContext();
    const [filterArg, setFilterArg] = useState("")

//setFilterArg, then refresh the page when a new filter is selected.
    const handleFilter = (event) => { setFilterArg(event.target.textContent) }
    useEffect(() =>{}, [filterArg])

//handle comparisons of price, category, and alphabetical order.
    function comparePrice(a, b) {return b.price - a.price}
    function compareCategory(a, b) {return b.category - a.category}
    function compareName(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

//depeding on the value of filter, sort then map items to ItemCards.
    function filterItems(filter) {
        if (filter === "Name") { setItems(items.sort(compareName)) } else 
        if (filter === "Price") { setItems(items.sort(comparePrice)) } else 
        if (filter === "Necessity") { setItems(items.sort(compareCategory)) }
        return (items.map(thisItem => {
            return (thisItem.deleted 
                ? <ItemCard key={thisItem.id} item={thisItem} location={"DeletedList"}/> 
                : null)
        }))}
    
    return(
        <aside>
            <h2 className="list-header">Recently Deleted: </h2>
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
            {filterItems(filterArg)}
            <Outlet />
        </aside>
    )
}

export default DeletedList