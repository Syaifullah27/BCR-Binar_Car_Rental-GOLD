import Button from "../Component/Button/Button"
import "./mainSection.css"
// eslint-disable-next-line react/prop-types
const MainSection = ({ isOpen, btn }) => {

    return (
        <div className={`main-section-wrapper ${isOpen ? 'blur' : ''}`}>
            <div className="main-section-container">
                <div className="left-main-section">
                    <h1 className="title">Sewa & Rental Mobil Terbaik Di Kawasan (Lokasimu)</h1>
                    <p className="desc">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    {btn === true ? <Button /> : null}
                </div>
                <div className="right-main-section">
                    <img src="./images/img_car.png" alt="main-img" />
                </div>
            </div>
        </div>
    )
}

export default MainSection