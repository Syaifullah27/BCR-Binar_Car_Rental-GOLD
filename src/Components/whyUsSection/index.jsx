import "./whyUs.css"
// eslint-disable-next-line react/prop-types
const WhyUsSection = ({ isOpen }) => {
    const dataWhyUs = [
        {
            id: 1,
            img: "./images/icon_complete.png",
            title: "Mobil Lengkap",
            desc: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat"
        },
        {
            id: 2,
            img: "./images/icon_price.png",
            title: "Harga Murah",
            desc: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain"
        },
        {
            id: 3,
            img: "./images/icon_24hrs.png",
            title: "Layanan 24 Jam",
            desc: "Siap melayani kebutuhanmu 24 jam nonstop. Kami juga tersedia di akhir minggu"
        },
        {
            id: 4,
            img: "./images/icon_professional.png",
            title: "Sopir Profesional",
            desc: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu"
        }
    ]


    return (
        <div className={`${isOpen ? 'blur' : ''}`}>
            <div className="why-us-wrapper">
                <div className="why-us-container">
                    <h1>Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                        <div className="whyUs-card-wrapper">
                        {
                        dataWhyUs.map((data) => {
                            return (
                                <div className="whyUs-card" key={data.id}>
                                    <img src={data.img} alt=""  />
                                    <h3>{data.title}</h3>
                                    <p>{data.desc}</p>
                                </div>
                            )
                        })
                    }
                        </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUsSection