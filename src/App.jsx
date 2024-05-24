import { useState } from 'react'
import './App.css'
import MainSection from './Sections/MainSection'
import Navbar from '../src/Components/Navbar'
import SecondSection from './Sections/SecondSection'
import WhyUsSection from './Sections/whyUsSection'
import TestimoniSection from './Sections/testimoniSection'
import Banner from './Sections/Banner'
import FaqSections from './Sections/Faq'

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
      <MainSection isOpen={isMenuOpen} btn={true}/>
      <SecondSection isOpen={isMenuOpen}/>
      <WhyUsSection isOpen={isMenuOpen}/>
      <TestimoniSection isOpen={isMenuOpen}/>
      <Banner isOpen={isMenuOpen}/>
      <FaqSections isOpen={isMenuOpen}/>
    </div>
  )
}

export default App
