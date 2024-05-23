// import { useState } from "react";
import "./testimoni.css"
import { dataTestimoni } from "../../Utils/DumyData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="next-arrow"
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="prev-arrow"
            onClick={onClick}
        />
    );
}





// eslint-disable-next-line react/prop-types
const TestimoniSection = ({ isOpen }) => {
    const settings = {
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
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
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="testimoni-card">
                            <h3>1</h3>
                            <img src="./images/images.jpeg" alt="" />
                        </div>
                        <div className="testimoni-card">
                            <h3>2</h3>
                            <img src="./images/images.jpeg" alt="" />
                        </div>
                        <div className="testimoni-card">
                            <h3>3</h3>
                            <img src="./images/images.jpeg" alt="" />
                        </div>
                        <div className="testimoni-card">
                            <h3>4</h3>
                            <img src="./images/images.jpeg" alt="" />
                        </div>
                        <div className="testimoni-card">
                            <h3>5</h3>
                            <img src="./images/images.jpeg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
export default TestimoniSection