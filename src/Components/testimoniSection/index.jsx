// import { useState } from "react";
import "./testimoni.css"
// import { dataTestimoni } from "../../Utils/DumyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function SampleNextArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props;
    return (
        <div
            className="next-arrow"
            onClick={onClick}>
                <p style={{ fontSize: "32px",fontWeight: "bolder"}}>&#65125;</p>
            </div>
    );
}

function SamplePrevArrow(props) {
    // eslint-disable-next-line react/prop-types
    const { onClick } = props;
    return (
        <div
            className="prev-arrow"
            onClick={onClick}>
                <p style={{ fontSize: "32px",fontWeight: "bolder"}}>&#65124;</p>
            </div>
    );
}





// eslint-disable-next-line react/prop-types
const TestimoniSection = ({ isOpen }) => {
    const settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className={`${isOpen ? 'blur' : ''}`}>
            <div className="testimoni-container">
                <h1>Testimonial</h1>
                <p>What our customers are saying</p>
                <div className="slider-container">
                    <Slider {...settings} >
                        <div className="testimoni-card">
                            <img src="./images/images.jpeg" alt="" />
                            <div className="testimoni-card-desc">
                                <img src="./images/Rate.png" alt="rate" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere.</p>
                                <h3>John Doe</h3>
                            </div>
                        </div>
                        <div className="testimoni-card">
                        <img src="./images/images.jpeg" alt="" />
                            <div className="testimoni-card-desc">
                                <img src="./images/Rate.png" alt="rate" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere.</p>
                                <h3>John Doe</h3>
                            </div>
                        </div>
                        <div className="testimoni-card">
                        <img src="./images/images.jpeg" alt="" />
                            <div className="testimoni-card-desc">
                                <img src="./images/Rate.png" alt="rate" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere.</p>
                                <h3>John Doe</h3>
                            </div>
                        </div>
                        <div className="testimoni-card">
                        <img src="./images/images.jpeg" alt="" />
                            <div className="testimoni-card-desc">
                                <img src="./images/Rate.png" alt="rate" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere.</p>
                                <h3>John Doe</h3>
                            </div>
                        </div>
                        <div className="testimoni-card">
                        <img src="./images/images.jpeg" alt="" />
                            <div className="testimoni-card-desc">
                                <img src="./images/Rate.png" alt="rate" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, facere.</p>
                                <h3>John Doe</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default TestimoniSection