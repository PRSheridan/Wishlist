import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return(
        <nav id="navbar">
            <NavLink
                to="/"
                /* add styling to Navlink */
                className="nav-link"    
            >
            Home
            </NavLink>
            <NavLink
                to="/ItemForm"
                /* add styling to Navlink */
                className="nav-link"
            >
            Add an Item
            </NavLink>
        </nav>
    )
}

export default NavBar;