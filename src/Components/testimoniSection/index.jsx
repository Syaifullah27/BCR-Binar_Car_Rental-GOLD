import "./testimoni.css"
// eslint-disable-next-line react/prop-types
const TestimoniSection = ({ isOpen }) => {
    return (
        <div className={`${isOpen ? 'blur' : ''}`}>
            <div className="testimoni-wrapper">
                <div className="testimoni-container">
                    <h1>Testimonial</h1>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
            </div>
        </div>
    )
}

export default TestimoniSection