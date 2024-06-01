import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/Home/Home"
import RentalsPage from "./Pages/RentalCarsPage/rentalsCars"
import ResultCars from "./Pages/ResultCarsPage/ResultCars"
import DetailCars from "./Pages/DetailCarsPage/DetailCars"
import { useState } from "react"

const App = () => {
  
  const [nameCar, setNameCar] = useState('')
  const [capacityCar, setCapacityCar] = useState('')
  const [priceCar, setPriceCar] = useState('')
  const [statusCar, setStatusCar] = useState('')

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage inMenu={true} />} />
          <Route path="/search-cars" element={<RentalsPage inMenu={true} 
          nameCar={nameCar}
          capacityCar={capacityCar}
          priceCar={priceCar}
          statusCar={statusCar}
          setNameCar={setNameCar}
          setCapacityCar={setCapacityCar}
          setPriceCar={setPriceCar}
          setStatusCar={setStatusCar}
          />} />
          <Route path="/result-cars/" element={<ResultCars />} 
          nameCar={nameCar}
          capacityCar={capacityCar}
          priceCar={priceCar}
          statusCar={statusCar}
          setNameCar={setNameCar}
          setCapacityCar={setCapacityCar}
          setPriceCar={setPriceCar}
          setStatusCar={setStatusCar}
          />
          <Route path="/detail-car/:id" element={<DetailCars />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
