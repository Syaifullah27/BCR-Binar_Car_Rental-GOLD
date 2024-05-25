import { useState } from "react"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"
import MainSection from "../../Sections/MainSection"
import SearchCars from "../../Sections/SearchCars"

const RentalsPage = () => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };


    return (
        <div>
            <Navbar isFocused={isFocused}/>
            <MainSection isFocused={isFocused}/>
            <SearchCars 
            handleInputFocus={handleInputFocus} 
            handleInputBlur={handleInputBlur}/>
            <Footer isFocused={isFocused}/>
        </div>
    )
}

export default RentalsPage