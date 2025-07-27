import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="navbar">
            <div className="logo">
                <img src="/logo-1.png" alt="Logo" />
            </div>
            <nav className="nav-links">
                <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
                <NavLink to="/skills" className="nav-link" activeClassName="active">Skills</NavLink>
                <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
                <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>  
            </nav>
        </header>
    );
}
