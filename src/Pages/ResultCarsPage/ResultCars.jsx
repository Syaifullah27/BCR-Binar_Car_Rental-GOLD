import { useState } from "react"
import Navbar from "../../Components/Navbar"

const ResultCars = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div>
            <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen}/>
        </div>
    )
}

export default ResultCars