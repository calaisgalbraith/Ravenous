import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

const businessList = ({businesses}) => {
    if (businesses.length === 0) { // if no buisnesses (no results)
      return (
        <div className='businessListContainer noResultsFound'>No Results Found.</div>
      );
    } else {
      return (
        <div className='businessListContainer'>
          {businesses.map((business) => {
            return <Business business={business} key={business.id}/>;
          })}
        </div>
      );
    }
}

export default businessList