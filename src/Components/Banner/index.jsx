import "./banner.css"
import Button from "../Component/Button/Button"
const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="banner-container">
                <div className="banner-text">
                    <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button/>
                </div>
            </div>
        </div>
    )
}

export default Banner