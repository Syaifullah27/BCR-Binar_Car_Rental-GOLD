import { useState } from 'react'
import './App.css'
import MainSection from './Components/MainSection'
import Navbar from './Components/Navbar'
import SecondSection from './Components/SecondSection'
import WhyUsSection from './Components/whyUsSection'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // tutup kembali jika menu jika klik diluar menu
  // const closeMenu = () => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(false)
      
  //   }
  // }

  return (
    // <div className="App" onClick={closeMenu}>
    <div>
      <Navbar isOpen={isMenuOpen} toggleMenu={toggleMenu} setIsMenuOpen={setIsMenuOpen}/>
      <MainSection isOpen={isMenuOpen}/>
      <SecondSection isOpen={isMenuOpen}/>
      <WhyUsSection isOpen={isMenuOpen}/>
    </div>
  )
}

export default App
