import { Link } from 'react-router-dom'
import './navbar.css'

// eslint-disable-next-line react/prop-types
const Navbar = ({isOpen, toggleMenu, inMenu, logoBtn, boxShadow, }) => {    

    return (
        <>
        {
            boxShadow === true ? (
            <div style={{
                boxShadow: "0px 0px 16px rgba(0, 0, 0, 0.1)"}}
                className="navbar-wrapper">
                    <nav className="navbar">
                        <img src={`./images/EsyehaCarRentals.png` } className={`${isOpen ? 'blur' : ''} logo`}/>
                        <div className='backToMenu'>
                            {
                                logoBtn === true ? <a href="#home">back</a> : <Link to="/">back</Link>
                            }
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
                                    <Link to="/"><li>Our Services</li></Link>
                                    <Link to="/"><li>Why Us</li></Link>
                                    <Link to="/"><li>Testimony</li></Link>
                                    <Link to="/"><li>FAQ</li></Link>
                                </>
                            }
                        </ul>
                    </nav>
                </div> ) :  
                <div
                className="navbar-wrapper">
                    <nav className="navbar">
                        <img src='./images/EsyehaCarRentals.png' className={`${isOpen ? 'blur' : ''} logo`}/>
                        <div className='backToMenu'>
                            {
                                logoBtn === true ? <a href="#home">back</a> : <Link to="/">back</Link>
                            }
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
                                    <Link to="/"><li>Our Services</li></Link>
                                    <Link to="/"><li>Why Us</li></Link>
                                    <Link to="/"><li>Testimony</li></Link>
                                    <Link to="/"><li>FAQ</li></Link>
                                </>
                            }
                        </ul>
                    </nav>
                </div>
            }
        </>
    )
}

export default Navbar