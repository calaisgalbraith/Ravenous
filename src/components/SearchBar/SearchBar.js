import React, { useEffect, useState } from 'react';
import './SearchBar.css'

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const SearchBar = ({ searchYelp }) => {
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


    const [term, setTerm] = useState('')
    const handleTermChange = ({target}) => {
        setTerm(target.value)
    }

    const [location, setLocation] = useState('us')
    const handleLocationChange = ({target}) => {
        setLocation(target.value)
    }

    const [sortOption, setSortOption] = useState('best_match')
    const handleSortOptionChange = (sortOptionUpdate) => {
        setSortOption(sortOptionUpdate)
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

    useEffect(() => { // on load, do default search
        searchYelp(term, location, sortOption)
      }, []);

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