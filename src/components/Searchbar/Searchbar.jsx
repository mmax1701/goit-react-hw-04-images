import React, { Component } from 'react';
import PropTypes from 'prop-types'
import css from './Searchbar.module.css'




export class Searchbar extends Component {
      state = {
    searcheQuery: '',
    };
    handleInputChange = (event) => {
      this.setState({
        searcheQuery: event.target.value,
      });
    };
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.searcheQuery);
        this.setState({
          searcheQuery: '',
        });
    };

    render() {
        return (
            <header className={css.searchbar}>
                <form onSubmit={this.handleFormSubmit} className={css.form}>
                    <button type="submit" className={css.button}>
                        <span>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searcheQuery}
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
}