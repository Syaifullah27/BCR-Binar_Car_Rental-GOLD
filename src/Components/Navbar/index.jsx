import { useState } from 'react'
import './navbar.css'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }


    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <h2>SYH OFFICIAL</h2>
                <div className="menu-toggle" onClick={handleToggleMenu}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu-list ${toggleMenu ? 'active' : ''}`}>
                    <li><a href="">Our Services</a></li>
                    <li><a href="">Why Us</a></li>
                    <li><a href="">Testimony</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar