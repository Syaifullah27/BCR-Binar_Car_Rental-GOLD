import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function NavbarDetail({ isOpen, toggleMenu, }) {
    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <div className={`logo ${isOpen ? 'blur' : ''}`}>
                    <img src="./../images/EsyehaCarRentals.png" width={"210"}/>
                </div>
                <div className="menu-toggle">
                    <input type="checkbox" onClick={toggleMenu}/>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu-list ${isOpen ? 'active' : ''}`}>
                    <Link to="/"><li>Our Services</li></Link>
                    <Link to="/"><li>Why Us</li></Link>
                    <Link to="/"><li>Testimony</li></Link>
                    <Link to="/"><li>FAQ</li></Link>
                </ul>

            </nav>
        </div>
    )
}

