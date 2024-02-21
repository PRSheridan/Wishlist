import { Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard"

function ItemList() {
    const { items } = useOutletContext();
    const itemCards = items.map(
        (item) => ( <ItemCard key={item.id} item={item}/> ))

    return(
        <aside>
            <h1 className="list-header">Items:</h1>
            {itemCards}
            <Outlet />
        </aside>
    )
}

export default ItemList