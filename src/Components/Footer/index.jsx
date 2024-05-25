import "./footer.css"
import { socialMediaImg } from "../../Utils/DumyData"
// eslint-disable-next-line react/prop-types
const Footer = ({ isOpen, isFocused }) => {



    return (
        <div className={"footer-wrapper" + (isOpen ? " blur" : "") + (isFocused ? " focused" : "")}>
            <div className="footer-container">
                <div className="footer-contact">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="footer-menu">
                    <ul>
                        <li><a href="#services">Our Servis</a></li>
                        <li><a href="#whyUs">Why Us</a></li>
                        <li><a href="#testimony">Testimonial</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-socialMedia">
                    <p>Contect With Us</p>
                    <div className="img">
                    {
                        socialMediaImg.map((img) => {
                            return (
                                <img src={img} alt="" key={img}/>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="footer-copyright">
                    <p>Copyright Binar 2024</p>
                    <img src="./images/EsyehaCarRentals.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer