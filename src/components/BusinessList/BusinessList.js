import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'
import Modal from '../Modal/Modal';

const BusinessList = ({businesses}) => {
    if (businesses === undefined) { // if undefined (Cors not enabled)
      return (
        <Modal></Modal>
      );
    } else if (businesses.length === 0) { // if no buisnesses (no results)
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

export default BusinessList