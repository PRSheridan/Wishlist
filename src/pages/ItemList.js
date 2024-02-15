import { Outlet, useOutletContext } from "react-router-dom";
import ItemCard from "../components/ItemCard"

function ItemList() {
    //items is undefined
    const { items } = useOutletContext();
    console.log(items)
    /*
    const itemCards = items.map((item) =>
        <ItemCard key={item.id} item={item}/>
    )
    */

    return(
        <>
            <main>
                <h1>Items</h1>
                <Outlet />
                {/*itemCards*/}
            </main>
        </>
    )
}


export default ItemList