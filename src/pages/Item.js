import { Outlet } from "react-router-dom";

function Item() {
    return(
        <>
            <main>
                <h1>Item</h1>
                <Outlet />
            </main>
        </>
    )
}


export default Item