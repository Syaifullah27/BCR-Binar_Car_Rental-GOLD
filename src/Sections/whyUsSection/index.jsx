import "./whyUs.css"
import { dataWhyUs } from "../../Utils/DumyData"
// eslint-disable-next-line react/prop-types
const WhyUsSection = ({ isOpen }) => {
    
    return (
        <div className={`${isOpen ? 'blur' : ''}`} id="whyUs">
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