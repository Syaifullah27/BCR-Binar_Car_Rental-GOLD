import { useState } from "react"
import Navbar from "../../Components/Navbar"
import ResultCarsTable from "../../Sections/ResultCarsTable"

const ResultCars = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    return (
        <div>
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen} logoBtn={false}/>
            <ResultCarsTable isOpen={isMenuOpen}/>
        </div>
    )
}

export default ResultCars