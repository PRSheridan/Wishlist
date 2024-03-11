import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard"

//ItemList handles mapping all items to ItemCards, and allowing the user to filter the items.
function ItemList() {
    const { items } = useOutletContext()
    const [filterArg, setFilterArg] = useState("")
    const [deletedArg, setDeletedArg] = useState(false)

    //if deletedArg true, deleted button highlighted
    const handleFilter = (event) => { setFilterArg(event.target.textContent) }
    const handleDeletedArg = () => { setDeletedArg(!deletedArg) }
    const filterDeleted = (thisItem) => {
        if (deletedArg) { return thisItem.deleted === true } else { return thisItem.deleted === false }
    }

    function comparePrice(a, b) {return b.price - a.price}
    function compareCategory(a, b) {return b.category - a.category}
    function compareName(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

    let tempItems = [...items]
    if (filterArg === "Name") { tempItems.sort(compareName) } else 
    if (filterArg === "Price") { tempItems.sort(comparePrice) } else 
    if (filterArg === "Necessity") { tempItems.sort(compareCategory) }

    return(
        <aside>
            <h2 className="list-header">Current Items: </h2>
            <div className="filter-options">Filter by: 
                <button 
                    className={filterArg === "Name" ? "filter-button active" : "filter-button"}
                    onClick={handleFilter}>
                Name</button>
                <button 
                    className={filterArg === "Price" ? "filter-button active" : "filter-button"}
                    onClick={handleFilter}>
                Price</button>
                <button 
                    className={filterArg === "Necessity" ? "filter-button active" : "filter-button"}
                    onClick={handleFilter}>
                Necessity</button>
                <button
                    className={deletedArg ? "filter-button active" : "filter-button"}
                    onClick={handleDeletedArg}>
                Deleted</button>
            </div>
            {tempItems.filter(filterDeleted).map((item) => {
                return ( <ItemCard key={item.name} item={item} /> )
            })}
            <Outlet />
        </aside>
    )
}

export default ItemList