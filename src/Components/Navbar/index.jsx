import './navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({isOpen, toggleMenu,}) => {    

    return (
        <div className="navbar-wrapper">
            <nav className="navbar">
                <img src='./images/EsyehaCarRentals.png' className={`${isOpen ? 'blur' : ''} logo`}/>
                <div className='backToMenu'>
                    <a href="#home">back</a>
                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`menu-list ${isOpen ? 'active' : ''}`}>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#whyUs">Why Us</a></li>
                    <li><a href="#testimony">Testimony</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar