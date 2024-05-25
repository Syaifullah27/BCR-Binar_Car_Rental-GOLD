import { Link } from 'react-router-dom'
import './navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({isOpen, toggleMenu, inMenu}) => {    

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
                    {
                        inMenu === true ? <>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#whyUs">Why Us</a></li>
                        <li><a href="#testimony">Testimony</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        </> : 
                        <>
                            <Link to="/#home"><li>Home</li></Link>
                            <Link to="/#home"><li>Our Services</li></Link>
                            <Link to="/"><li>Why Us</li></Link>
                            <Link to="/"><li>Testimony</li></Link>
                            <Link to="/"><li>FAQ</li></Link>
                        </>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar