import "./secondSection.css"
// eslint-disable-next-line react/prop-types
const SecondSection = ({ isOpen }) => {
    const dataServices = [
        {
            id: 1,
            desc: "Sewa Mobil Dengan Supir di Bali 12 Jam"
        },
        {
            id: 2,
            desc: "Sewa Mobil Lepas Kunci di Bali 24 Jam"
        },
        {
            id: 3,
            desc: "Sewa Mobil Jangka Panjang Bulanan"
        },
        {
            id: 4,
            desc: "Gratis Antar - Jemput Mobil di Bandara"
        },
        {
            id: 5,
            desc: "Layanan Airport Transfer / Drop In Out"
        }
    ]

    return (
        <div className={`second-section-wrapper ${isOpen ? 'blur' : ''}`}>
            <div className="second-section-container">
                <div className="left-second-section">
                    <img src="./images/img_service.png" alt="" />
                </div>
                <div className="right-second-section">
                    <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    {
                        dataServices.map((item) => {
                            return (
                                <div className="right-second-section-item" key={item.id}>
                                    <img src="./images/checked.png" alt="" />
                                    <p>{item.desc}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SecondSection