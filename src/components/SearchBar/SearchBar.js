import React, { useState } from 'react';
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const SearchBar = ({ searchYelp, sortOption, handleSortOptionChange, term, handleTermChange, location, handleLocationChange }) => {
    const sortByListOptions= () => {
        return Object.keys(sortByOptions).map((sortByOption) => 
            <li
                key={sortByOptions[sortByOption]}
                onClick={() => {
                    handleSortOptionChange(sortByOptions[sortByOption])}
                }
                className={getSortOptionClass(sortByOptions[sortByOption])}
            >
            {sortByOption}
            </li>
        );
    }

    const getSortOptionClass = (selectedOption) => { // set active class
        if (sortOption === selectedOption) {
          return 'nav-item nav-link sortByOption active';
        }
        return 'nav-item nav-link sortByOption';
      };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        searchYelp(term, location, sortOption)
    }

    return (
        <div className='searchBarContainer'>
            <div className='container '>
                <header className='d-flex justify-content-center py-3 searchBarHeader'>
                    <ul className='nav nav-pills'>{sortByListOptions()}</ul>
                </header>
            </div>
            <form className='container' onSubmit={handleSearchSubmit}>
                <header className='d-flex justify-content-center py-3'>
                    <input placeholder='Search Businesses' className='searchInput' onChange={handleTermChange}/>
                    <input placeholder='Search Location' className='searchInput' onChange={handleLocationChange}/>
                </header>
                <div className='container buttonContainer'>
                    <button type='submit' className='d-flex justify-content-center btn btn-primary'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar