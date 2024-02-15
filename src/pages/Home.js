import { Outlet, useOutletContext } from "react-router-dom";

function Home() {
    const items = useOutletContext();
    return(
        <>
            <main>
                <h1>Home</h1>
                <Outlet context={items}/>
            </main>
        </>
    )
}

export default Home