import { useState } from "react"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import MainSection from "../../Sections/MainSection"
import SearchCars from "../../Sections/SearchCars"

// eslint-disable-next-line react/prop-types
const RentalsPage = ({ inMenu }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };


    return (
        <div>
            <Navbar isFocused={isFocused} isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen}/>
            <MainSection isOpen={isMenuOpen} isFocused={isFocused} />
            <SearchCars isOpen={isMenuOpen}
            handleInputFocus={handleInputFocus} 
            handleInputBlur={handleInputBlur}/>
            <Footer isFocused={isFocused} isOpen={isMenuOpen} inMenu={inMenu}/>
        </div>
    )
}

export default RentalsPage