import React from 'react';
import Buisness from '../Business/Business'

const searchOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
}

const searchBar = () => {

    const searchByOptions= () => {
        return Object.keys(searchOptions).map((searchByOption) => 
            <li key="searchByOption">{searchOptions[searchByOption]}</li>
        );
    }

    return (
        <div>
            <div>
                <ul>{searchByOptions()}</ul>
            </div>
            <div>
                <input id="searchTerm" placeholder="Search Businesses"/>
                <input id="searchLocation" placeholder="Search Location"/>
            </div>
        </div>
    )
}

export default searchBar