import { NavLink } from "react-router-dom";

function NavBar( {setItems} ) {
    return(
        <nav id="navbar">
            <NavLink
                to="/"
                className="nav-link"    
            >Home
            </NavLink>
            <NavLink 
                className="nav-link"
                to={{pathname: '/ItemPage'}}
                state={{setItems}}
            >Add an Item 
            </NavLink>
        </nav>
    )
}

export default NavBar;