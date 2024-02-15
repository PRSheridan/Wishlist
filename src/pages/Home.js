import { Outlet } from "react-router-dom";

function Home() {
    return(
        <>
            <main>
                <h1>Home</h1>
                <Outlet />
            </main>
        </>
    )
}

export default Home