import { Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "./ItemCard"

function ItemList() {
    const { items } = useOutletContext();
    const itemCards = items.map(
        (item) => ( <ItemCard key={item.id} item={item}/> ))

    return(
        <main>
            <h1 className="list-header">Items:</h1>
            <Outlet />
            {itemCards}
        </main>
    )
}

export default ItemList