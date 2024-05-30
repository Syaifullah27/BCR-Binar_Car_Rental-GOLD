import { useState } from "react";
import axios from "axios";
import "./cardcars.css"
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { formatRupiah } from "../../Utils/FormatDatas";

// eslint-disable-next-line react/prop-types
const CardCars = ({ isOpen }) => {

    const [dataCars, setDataCars] = useState([]);

    const getDataCars = () => {
        axios
            .get("https://api-car-rental.binaracademy.org/customer/v2/car")
            .then((res) => {
                console.log(res.data);
                setDataCars(res.data.cars);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getDataCars();
    }, [])



    return (
        <div className={"card-cars-wrapper" + (isOpen ? " blur" : "")}>
            <div className="card-cars-container">
                {
                    dataCars.map((data) => {
                        return (
                            <div className="card-cars" key={data.id}>
                                <img src={data.img ? data.img : "./images/cars.png"} alt="cars" />
                                <p className="title-cars">{data.name ? data.name : "Toyota Kijang"}</p>
                                <h4>{formatRupiah(data.price)} / hari</h4>
                                <p className="desc-cars">{data.desc ? data.desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aperiam et perspiciatis eveniet!"}</p>
                                <Link to={`/detail-cars/${data.id}`}>
                                    <button className="card-cars-btn">Pilih Mobil</button>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardCars