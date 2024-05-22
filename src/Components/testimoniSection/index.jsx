import { useState } from "react";
import "./testimoni.css"
// eslint-disable-next-line react/prop-types
const TestimoniSection = ({ isOpen }) => {

    const dataTestimoni = [
        {
            id: 1,
            img: "./images/img_photo.png",
            title: "John Dee 32, Bromo",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            rate: "./images/Rate.png",
        },
        {
            id: 2,
            img: "./images/user-2.png",
            title: "Julie anderson 25, Lamongan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            rate: "./images/Rate.png",
        },
        {
            id: 3,
            img: "./images/images.jpeg",
            title: "SYH 19, Ngawi",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
            rate: "./images/Rate.png",
        }
    ]

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