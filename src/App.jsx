import { useState } from 'react'
import './App.css'
import MainSection from './Components/MainSection'
import Navbar from './Components/Navbar'
import SecondSection from './Components/SecondSection'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu}/>
      <MainSection isOpen={isMenuOpen}/>
      <SecondSection />
    </>
  )
}

export default App
