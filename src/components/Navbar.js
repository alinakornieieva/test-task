import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return <nav className="bg-primary p-3">
        <NavLink className="text-white text-decoration-none pe-3">Create request</NavLink>
        <NavLink className="text-white text-decoration-none">List of all requests</NavLink>
    </nav>
}