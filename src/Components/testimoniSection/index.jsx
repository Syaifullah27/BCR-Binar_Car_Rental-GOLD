import { useState } from "react";
import "./testimoni.css"
import { dataTestimoni } from "../../Utils/DumyData";
// eslint-disable-next-line react/prop-types
const TestimoniSection = ({ isOpen }) => {

    

        const [currentIndex, setCurrentIndex] = useState(0);

        const handlePrev = () => {
            setCurrentIndex(prevIndex =>
                prevIndex === 0 ? dataTestimoni.length - 1 : prevIndex - 1
            );
        };

        const handleNext = () => {
            setCurrentIndex(prevIndex =>
                prevIndex === dataTestimoni.length - 1 ? 0 : prevIndex + 1
            );
        };


        return (
            <div className={`${isOpen ? 'blur' : ''}`}>
                <div className="testimoni-wrapper">
                    <div className="testimoni-container">
                        <h1>Testimonial</h1>
                        <p>Berbagai review positif dari para pelanggan kami</p>
                        <div className="testimoni-card-container">
                            {
                                dataTestimoni.map((testimoni, index) => (
                                    <div className={`testimoni-card ${index === currentIndex ? 'active' : ''}`} key={index}>
                                        <img src={testimoni.img} alt="" />
                                        <div className="text">
                                            <img src={testimoni.rate} alt="" />
                                            <p>{testimoni.desc}</p>
                                            <h3>{testimoni.title}</h3>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="button-container">
                            <button className="prev-btn" onClick={handlePrev}>
                                &#10094;
                            </button>
                            <button className="next-btn" onClick={handleNext}>
                                &#10095;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
export default TestimoniSection