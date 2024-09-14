import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

const businessList = ({businesses}) => {
    if (!businesses) { // if buisnesses is undefined (no results)
      return (
        <div className='businessListContainer'>No Results Found.</div>
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