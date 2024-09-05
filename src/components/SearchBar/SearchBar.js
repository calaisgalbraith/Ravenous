import React, { useState } from 'react';
import Buisness from '../Business/Business'
import './SearchBar.css'

const searchOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

const SearchBar = () => {
    const searchByOptions= () => {
        return Object.keys(searchOptions).map((searchByOption) => 
            <li
                key={searchOptions[searchByOption]}
                className='nav-item nav-link searchByOption'
                onClick={() => {
                    handleSortOptionChange(searchOptions[searchByOption])}
                }
            >
            {searchByOption}
            </li>
        );
    }


    const [term, setTerm] = useState('')
    const handleTermChange = ({target}) => {
        setTerm(target.value)
    }

    const [location, setLocation] = useState('')
    const handleLocationChange = ({target}) => {
        setLocation(target.value)
    }

    const [sortOption, setSortOption] = useState('best_match')
    const handleSortOptionChange = (sortOptionUpdate) => {
        setSortOption(sortOptionUpdate)
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(`Searching ${term}, ${location}, ${sortOption}`)
    }

    return (
        <div className='searchBarContainer'>
            <div className='container '>
                <header className='d-flex justify-content-center py-3 searchBarHeader'>
                    <ul className='nav nav-pills'>{searchByOptions()}</ul>
                </header>
            </div>
            <form className='container' onSubmit={handleSearchSubmit}>
                <header className='d-flex justify-content-center py-3'>
                    <input placeholder='Search Businesses' className='searchInput' onChange={handleTermChange}/>
                    <input placeholder='Search Location' className='searchInput' onChange={handleLocationChange}/>
                </header>
                <div><button type="submit" className="btn btn-primary">Search</button></div>
            </form>
        </div>
    )
}

export default SearchBar