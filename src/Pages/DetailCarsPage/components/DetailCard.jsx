import axios from "axios"
import ResultCarsTable from "../../../Sections/ResultCarsTable"
import { useState } from "react"
import { useEffect } from "react"
import { garansi, include } from "../../../Utils/DumyData"
import "./detailCard.css"
import { formatKategoryCars, formatRupiah } from "../../../Utils/FormatDatas"
// eslint-disable-next-line react/prop-types
const DetailCard = ({isOpen, id}) => {
    
    const [detailCars, setDetailCars] = useState({})

    const getDetailCars = () => {
        axios.get(`https://api-car-rental.binaracademy.org/customer/car/${id}`)
        .then((res) => {
            setDetailCars(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getDetailCars()
    }, [])

    return (
        <div className={`${isOpen ? 'blur' : ''}`}>
            <div className="detail-card-wrapper">
                <div className="detail-card-container">
                    <ResultCarsTable isOpen={isOpen}/>
                    <div className="detail-card">
                        <div className="left-detail">
                            <h2>Tentang Paket</h2>
                            <div className="include-text">
                            <h3>Include</h3>
                                {include.map((data) => {
                                    return (
                                        <ul key={data}>
                                            <li>{data}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className="exclude-text">
                            <h3>Exclude</h3>
                                {include.map((data) => {
                                    return (
                                        <ul key={data}>
                                            <li>{data}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                            <div className="garansi-text">
                                <h3>Refund, Reschedule, Overtime</h3>
                                {garansi.map((data) => {
                                    return (
                                        <ul key={data}>
                                            <li>{data}</li>
                                        </ul>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="right-detail">
                            <div className="right-detail-card">
                                <img src={detailCars.image ? detailCars.image : "./../images/cars.png"} />
                                <h3>{detailCars.name ? detailCars.name : "Toyota Kijang"}</h3>
                                <div className="kategory">
                                    <img src="./../images/jmlOrg.png" alt="" />
                                    <p>{formatKategoryCars(detailCars.category) ? formatKategoryCars(detailCars.category) : "-"}</p>
                                </div>
                                <div className="total">
                                    <p>Total</p>
                                    <h3>{formatRupiah(detailCars.price)}</h3>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default DetailCard