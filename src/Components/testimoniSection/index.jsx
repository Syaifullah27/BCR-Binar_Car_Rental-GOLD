import "./testimoni.css"
// eslint-disable-next-line react/prop-types
const TestimoniSection = ({ isOpen }) => {
    return (
        <div className={`${isOpen ? 'blur' : ''}`}>
            <h1>Testimoni</h1>
        </div>
    )
}

export default TestimoniSection