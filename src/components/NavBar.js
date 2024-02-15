import { NavLink } from "react-router-dom";

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
                to="/Items"
                /* add styling to Navlink */
                className="nav-link"
            >
            Add an Item
            </NavLink>
        </nav>
    )
}

export default NavBar;