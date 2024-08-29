import React from 'react';
import Business from '../Business/Business'

const businessList = ({businesses}) => {
    return (
        <div>
          {businesses.map((business) => {
            return <Business business={business}/>;
          })}
        </div>
      );
}

export default businessList