import './navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({isOpen, toggleMenu,}) => {

    // klik diluar menu hamburger maka menu ditutup
    
    

    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <h2>SYH OFFICIAL</h2>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu-list ${isOpen ? 'active' : ''}`}>
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