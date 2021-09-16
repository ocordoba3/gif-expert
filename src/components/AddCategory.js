import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length >= 2) {
            setCategories( catgs => [inputValue, ...catgs]);
            setInputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputValue} value={inputValue} placeholder="Escribe algo y presiona Enter..." />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
