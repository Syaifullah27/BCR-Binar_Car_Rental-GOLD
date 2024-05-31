import "./resultTable.css"
// eslint-disable-next-line react/prop-types
const ResultCarsTable = ({ isOpen, btn, canModify }) => {
    return (
        <>
        {
            canModify === true ? (
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
                        {
                            btn === true ? <button className="table-btn">Edit</button> : null
                        }
                    </div>
                </div>
            </div>
        </div>
            ) : (
            <div className={"result-cars-table-wrapper" + (isOpen ? " blur" : "")}>
                <div className="result-cars-table-container">
                    <div className="table-container">
                        <h3>Pencarianmu</h3>
                        <div className="table tableValue">
                            <div className="table-input inputValue">
                                <label>Nama Mobil</label>
                                <input type="text" placeholder="Masukan Nama Mobil" value={"blablabla"} style={{fontWeight: "lighter",color: "#686868",backgroundColor: "#D0D0D0", border: "none"}}/>
                            </div>
                            <div className="table-input inputValue">
                                <label>Kategori</label>
                                <select defaultValue={"option1"} 
                                style={{backgroundColor: "#D0D0D0", border: "none", appearance: "none", outline: "none"}}>
                                    <option value="" disabled hidden>Masukan Kapasitas Mobil</option>
                                    <option value="option1">2 - 4 orang</option>
                                    {/* <option value="option2">4 - 6 orang</option>
                                    <option value="option3">6 - 8 orang</option> */}
                                </select>
                            </div>
                            <div className="table-input inputValue">
                                <label>Harga</label>
                                <select defaultValue={""}
                                style={{backgroundColor: "#D0D0D0", border: "none", appearance: "none", outline: "none"}}>
                                    <option value="harga1" disabled hidden>Masukan Harga Sewa per Hari</option>
                                    <option value="harga1">&#60; Rp. 400.000</option>
                                    {/* <option value="harga2">Rp. 400.000 - Rp. 600.000</option>
                                    <option value="harga3">&#60; Rp. 400.000</option> */}
                                </select>
                            </div>
                            <div className="table-input inputValue">
                                <label>Status</label>
                                <select defaultValue={""}
                                style={{backgroundColor: "#D0D0D0", border: "none", appearance: "none", outline: "none"}}>
                                    <option value="value1" disabled hidden>Disewa</option>
                                    <option value="value1">Disewa</option>
                                    {/* <option value="value2">Disewakan</option> */}
                                </select>
                            </div>
                            {
                                btn === true ? <button className="table-btn">Edit</button> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        </>
    )
}

export default ResultCarsTable