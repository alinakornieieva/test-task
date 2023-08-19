import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return <nav className="bg-primary p-3">
        <NavLink style={({ isActive }) => ({
            color: isActive ? '#fff' : '#d9dddc',
        })} to="/create" className="text-decoration-none pe-3">Create request</NavLink>
        <NavLink style={({ isActive }) => ({
            color: isActive ? '#fff' : '#d9dddc',
        })} to="/requests" className="text-decoration-none">List of all requests</NavLink>
    </nav>
}