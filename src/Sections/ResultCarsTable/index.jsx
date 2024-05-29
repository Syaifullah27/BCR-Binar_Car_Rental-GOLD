import "./resultTable.css"
// eslint-disable-next-line react/prop-types
const ResultCarsTable = ({ isOpen }) => {
    return (
        <div className={"result-cars-table-wrapper" + (isOpen ? " blur" : "")}>
            <div className="result-cars-table-container">
                <h1>Hasil Pencarian</h1>
            </div>
        </div>
    )
}

export default ResultCarsTable