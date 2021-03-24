import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC<NavbarProps> = props => { // we could also strong code it like props: NavbarProps where props is initialized; with function wrapper gives me a children option
    return (
        <nav className="nav justify-content-center p-3 mb-2 shadow">
            <NavLink exact className="mx-3 font-weight-light" activeClassName="font-weight-bold border-top border-bottom border-dark" to="/">Home</NavLink> 
            <NavLink className="mx-3 font-weight-light" activeClassName=" font-weight-bold border-top border-bottom border-dark" to="/Compose">Compose</NavLink>
        </nav>
    ) //making navLink a btn property makes it already do what activeClassName makes it do when active itll have those classNames so if I wanted to change color or something else I would use activeClassName
}

interface NavbarProps {}

export default Navbar;