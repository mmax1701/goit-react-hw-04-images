import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({ handleFormSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFormSubmit(searchQuery);
        setSearchQuery('');
    };

    return (
        <header className={css.searchbar}>
            <form onSubmit={handleSubmit} className={css.form}>
                <button type="submit" className={css.button}>
                    <span>Search</span>
                </button>

                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
            </form>
        </header>
    );
};

Searchbar.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
};