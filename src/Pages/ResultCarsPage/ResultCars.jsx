import { useState } from "react"
import Navbar from "../../Components/Navbar"
import ResultCarsTable from "../../Sections/ResultCarsTable"
import Footer from "../../Components/Footer"
import CardCars from "../../Sections/CardCars"

const ResultCars = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <div>
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} logoBtn={false}/>
            <ResultCarsTable isOpen={isMenuOpen}/>
            <CardCars isOpen={isMenuOpen}/>
            <div style={{marginTop: "120px"}}>
            <Footer isOpen={isMenuOpen}/>
            </div>
        </div>
    )
}

export default ResultCars