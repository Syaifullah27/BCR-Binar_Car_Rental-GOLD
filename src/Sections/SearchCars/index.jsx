import { useState } from "react";
import "./searchCars.css"

// eslint-disable-next-line react/prop-types
const SearchCars = ({  handleInputFocus, handleInputBlur }) => {

    // opsi kapsasitas mobil
    const [selectedOption, setSelectedOption] = useState('');
    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // opsi harga sewa mobil
    const [selectedOption2, setSelectedOption2] = useState('');
    const handleDropdownChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };

    // opsi sewa mobil
    const [selectedOption3, setSelectedOption3] = useState('');
    const handleDropdownChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };




    return (
        <div className="search-cars-wrapper">
            <div className="search-cars-container">
                <div className="search-cars">
                    <div className="search-input">
                        <label htmlFor="">Nama Mobil</label>
                        <input 
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        type="text" 
                        placeholder="Ketik nama/tipe mobil" />
                    </div>
                    <div className="search-input">
                        <label htmlFor="">kategori</label>
                        <select 
                        defaultValue={'Masukan Kapasitas Mobil'} 
                        value={selectedOption} 
                        onChange={handleDropdownChange} 
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        className={selectedOption ? 'hide-arrow' : ''}>
                            <option value="" disabled hidden>Masukan Kapasitas Mobil</option>
                            <option value="option1">2 - 4 orang</option>
                            <option value="option2">4 - 6 orang</option>
                            <option value="option3">6 - 8 orang</option>
                        </select>
                    </div>
                    <div className="search-input">
                        <label htmlFor="">Harga</label>
                        <select 
                        defaultValue={'Masukan Kapasitas Mobil'} 
                        value={selectedOption2} 
                        onChange={handleDropdownChange2} 
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        className={selectedOption2 ? 'hide-arrow' : ''}>
                            <option value="" disabled hidden>Masukan Harga Sewa per Hari</option>
                            <option value="harga1">&#60; Rp. 400.000</option>
                            <option value="harga2">Rp. 400.000 - Rp. 600.000</option>
                            <option value="harga3">&#60; Rp. 400.000</option>
                        </select>
                    </div>
                    <div className="search-input">
                        <label htmlFor="">Status</label>
                        <select
                            defaultValue={'Masukan Kapasitas Mobil'}
                            value={selectedOption3}
                            onChange={handleDropdownChange3}
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            className={selectedOption3 ? 'hide-arrow' : ''}>
                            <option value="" disabled hidden>Disewa</option>
                            <option value="value1">Ya</option>
                            <option value="value2">Tidack</option>
                        </select>
                    </div>
                    <button className="btn">Cari Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCars