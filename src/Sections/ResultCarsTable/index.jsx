import "./resultTable.css"
// eslint-disable-next-line react/prop-types
const ResultCarsTable = ({ isOpen }) => {
    return (
        <div className={"result-cars-table-wrapper" + (isOpen ? " blur" : "")}>
            <div className="result-cars-table-container">
                <div className="table-container">
                    <h3>Pencarianmu</h3>
                    <div className="table">
                        <div className="table-input">
                            <label>Nama Mobil</label>
                            <input type="text" placeholder="Masukan Nama Mobil"/>
                        </div>
                        <div className="table-input">
                            <label>Kategori</label>
                            <select defaultValue={""}>
                                <option value="" disabled hidden>Masukan Kapasitas Mobil</option>
                                <option value="option1">2 - 4 orang</option>
                                <option value="option2">4 - 6 orang</option>
                                <option value="option3">6 - 8 orang</option>
                            </select>
                        </div>
                        <div className="table-input">
                            <label>Harga</label>
                            <select defaultValue={""}>
                                <option value="" disabled hidden>Masukan Harga Sewa per Hari</option>
                                <option value="harga1">&#60; Rp. 400.000</option>
                                <option value="harga2">Rp. 400.000 - Rp. 600.000</option>
                                <option value="harga3">&#60; Rp. 400.000</option>
                            </select>
                        </div>
                        <div className="table-input">
                            <label>Status</label>
                            <select defaultValue={""}>
                                <option value="" disabled hidden>Disewa</option>
                                <option value="value1">Disewa</option>
                                <option value="value2">Disewakan</option>
                            </select>
                        </div>
                        <button className="table-btn">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultCarsTable