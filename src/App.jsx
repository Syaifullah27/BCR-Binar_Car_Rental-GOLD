import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/Home/Home"
import RentalsPage from "./Pages/RentalCarsPage/rentalsCars"
import ResultCars from "./Pages/ResultCarsPage/ResultCars"
import DetailCars from "./Pages/DetailCarsPage/DetailCars"
// import { useState } from "react"
import { InputProvider } from "./inputContext"

const App = () => {

  return (
    <div>
      <InputProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage inMenu={true} />} />
          <Route path="/search-cars" element={<RentalsPage inMenu={true} />} />
          <Route path="/result-cars/" element={<ResultCars />} />
          <Route path="/detail-car/:id" element={<DetailCars />} />
        </Routes>
      </BrowserRouter>
      </InputProvider>
    </div>
  )
}

export default App
