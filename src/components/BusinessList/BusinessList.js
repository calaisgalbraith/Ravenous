import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

const businessList = ({businesses}) => {
    return (
        <div className='businessListContainer'>
          {businesses.map((business) => {
            return <Business business={business} key={business.name}/>;
          })}
        </div>
      );
}

export default businessList