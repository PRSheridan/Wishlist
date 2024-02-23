import { Outlet, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard"

function ItemList() {
    const { items, setItems } = useOutletContext();
    const [filterArg, setFilterArg] = useState("")

    useEffect(() =>{}, [filterArg])

    function comparePrice(a, b) {return b.price - a.price}
    function compareCategory(a, b) {return b.category - a.category}
    function compareName(a, b) {
        const textA = a.name.toLowerCase();
        const textB = b.name.toLowerCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    }

    function handleFilter(event) {
        event.preventDefault();
        return setFilterArg(event.target.textContent)
    }

    function filterItems(filter) {
        if (filter === "Name") {
            console.log("Name")
            setItems(items.sort(compareName))
        } else if (filter === "Price") { 
            console.log("Price")
            setItems(items.sort(comparePrice))
        } else if (filter === "Necessity") { 
            console.log("Necessity")
            setItems(items.sort(compareCategory))
        }
        return (items.map(
            (item) => ( <ItemCard key={item.id} item={item}/> )))
    }
    
    return(
        <aside>
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

export default ItemList