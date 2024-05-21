import "./mainSection.css"
// eslint-disable-next-line react/prop-types
const MainSection = ({ isOpen }) => {

    return (
        <div className={`main-section-container ${isOpen ? 'blur' : ''}`}>
            <h1 className="title">Main Section</h1>
        </div>
    )
}

export default MainSection