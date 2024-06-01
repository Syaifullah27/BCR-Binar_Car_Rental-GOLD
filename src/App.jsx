import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/Home/Home"
import RentalsPage from "./Pages/RentalCarsPage/rentalsCars"
import ResultCars from "./Pages/ResultCarsPage/ResultCars"
import DetailCars from "./Pages/DetailCarsPage/DetailCars"

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage inMenu={true} />} />
          <Route path="/search-cars" element={<RentalsPage inMenu={true} />} />
          <Route path="/result-cars/" element={<ResultCars />} />
          <Route path="/detail-car/:id" element={<DetailCars />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
