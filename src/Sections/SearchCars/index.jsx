import { useState } from "react";
import "./searchCars.css"

// eslint-disable-next-line react/prop-types
const SearchCars = ({ handleInputFocus, handleInputBlur, isOpen }) => {

    // const [validationErrors, setValidationErrors] = useState({
    //     inputValue: false,
    //     selectedOption: false,
    //     selectedOption2: false,
    //     selectedOption3: false,
    // });





    // untuk input value
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

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


    // validasi jika input kosong
    // const validateForm = () => {
    //     const errors = {
    //         inputValue: inputValue === '',
    //         selectedOption: selectedOption === '',
    //         selectedOption2: selectedOption2 === '',
    //         selectedOption3: selectedOption3 === '',
    //     };

    //     setValidationErrors(errors);
    //     const hasErrors = Object.values(errors).some(error => error);
    //     if (hasErrors) {
    //         // alert('Form Masih Kosong, Silahkan Lengkapi Form');
    //         return false;
    //         } else {
    //         // alert('Form Valid');
    //         return true;
    //         }
    //     };
        

    //     if (inputValue === '' || selectedOption === '' || selectedOption2 === '' || selectedOption3 === '') {
    //         alert('Form Masih Kosong, Silahkan Lengkapi Form');

    //     } else {
    //         alert('Form is valid!');
    //         window.location.href = '/result-cars';
    //         // Here you can proceed with form submission or any other action
    //     }
    // };

    const handleButtonClick = (event) => {
        event.preventDefault();
        window.location.href = '/result-cars';
        // if(validateForm()) {
        //     window.location.href = '/result-cars';
        // }
        // const fields = [inputValue, selectedOption, selectedOption2, selectedOption3];
        // const filledFieldsCount = fields.filter(field => field !== '').length;

        // if (filledFieldsCount > 0 && filledFieldsCount < 4) {
        //     return alert('masih ada form yang kosong');
        // }
        //     validateForm();
    }


    return (
        <div className={"search-cars-wrapper" + (isOpen ? " blur" : "")}>
            <div className="search-cars-container">
                <div className="search-cars">

                    <div className="search-input">
                        <label htmlFor="">Nama Mobil</label>
                                <input
                                    type="text"
                                    // className={validationErrors.inputValue ? 'eror' : ''}
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    onBlur={handleInputBlur}
                                    onFocus={handleInputFocus}
                                    placeholder="Masukan Nama Mobil" />
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
                            defaultValue={'Masukan Harga Sewa per Hari'}
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
                            <option value="value1">Disewa</option>
                            <option value="value2">Disewakan</option>
                        </select>
                    </div>

                    <button type="submit" className="btn" onClick={handleButtonClick}>Cari Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCars