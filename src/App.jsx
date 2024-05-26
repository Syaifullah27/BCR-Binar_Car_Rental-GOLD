import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/Home/Home"
import RentalsPage from "./Pages/RentalCarsPage/rentalsCars"
import ResultCars from "./Pages/ResultCarsPage/ResultCars"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage inMenu={true} />} />
          <Route path="/rentals-cars" element={<RentalsPage inMenu={true} />} />
          <Route path="/result-cars" element={<ResultCars />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
