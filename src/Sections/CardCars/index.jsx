import "./cardcars.css"

// eslint-disable-next-line react/prop-types
const CardCars = ({ isOpen }) => {
    return (
        <div className={"card-cars-wrapper" + (isOpen ? " blur" : "")}>
            <div className="card-cars-container">
                <div className="card-cars">
                    <img src="./images/cars.png" alt="cars" />
                    <p className="title-cars">Inova</p>
                    <h4>Rp 500.000 / hari</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus id nulla, provident ea voluptas laudantium unde.</p>
                    <button className="card-cars-btn">Pilih Mobil</button>
                </div>
                <div className="card-cars">
                    <img src="./images/cars.png" alt="cars" />
                    <p className="title-cars">Inova</p>
                    <h4>Rp 500.000 / hari</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus id nulla, provident ea voluptas laudantium unde.</p>
                    <button className="card-cars-btn">Pilih Mobil</button>
                </div>
                <div className="card-cars">
                    <img src="./images/cars.png" alt="cars" />
                    <p className="title-cars">Inova</p>
                    <h4>Rp 500.000 / hari</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus id nulla, provident ea voluptas laudantium unde.</p>
                    <button className="card-cars-btn">Pilih Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default CardCars