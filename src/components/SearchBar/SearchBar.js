import React from 'react';
import Buisness from '../Business/Business'
import './SearchBar.css'

const searchOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

const searchBar = () => {

    const searchByOptions= () => {
        return Object.keys(searchOptions).map((searchByOption) => 
            <li key={searchOptions[searchByOption]} className="nav-item nav-link searchByOption">{searchByOption}
            </li>
        );
    }

    return (
        <div>
            <div class="container">
                <header className="d-flex justify-content-center py-3 searchBarHeader">
                    <ul className="nav nav-pills">{searchByOptions()}</ul>
                </header>
            </div>
            <div class="container">
                <header className="d-flex justify-content-center py-3">
                    <input placeholder="Search Businesses" className="searchInput"/>
                    <input placeholder="Search Location" className="searchInput"/>
                </header>
            </div>
        </div>
    )
}

export default searchBar